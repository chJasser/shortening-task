import { Test } from '@nestjs/testing';
import request from 'supertest';
import { CacheManagerModule } from '../persistence/cache/cache.module';
import { PersistenceModule } from '../persistence/persistence.module';
import { UrlController } from './url.controller';
import { CreateUrlUseCase } from '@app/application/shortening/use-case/create-url';
import { CreateUrlDto } from './dto/create-url.dto';
import { NanoidEncoderModule } from '../nanoid-encoder/nanoid-encoder.module';
import { GetUrlUseCase } from '@app/application/shortening/use-case/get-url';
import { GetOriginUrlUseCase } from '@app/application/shortening/use-case/get-origin-url';

describe('UrlsController', () => {
  let httpServer: any;
  let app: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        CacheManagerModule,
        NanoidEncoderModule,
        PersistenceModule.register({
          type: 'mongoose',
          global: true,
        }),
      ],
      controllers: [UrlController],
      providers: [CreateUrlUseCase, GetUrlUseCase, GetOriginUrlUseCase],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /url', () => {
    it('should create url and return 201 with shortCode and originalUrl', async () => {
      const createDto: CreateUrlDto = {
        originalUrl:
          'https://medium.com/nestjs-ninja/mastering-nestjs-unleashing-the-power-of-clean-architecture-and-ddd-in-e-commerce-development-97850131fd87',
      };

      const response = await request(httpServer).post('/url').send(createDto);
      expect(response.status).toBe(201);
      expect(response.body.props.shortCode).toBeDefined();
      expect(response.body.props.originalUrl).toEqual(createDto.originalUrl);
    });

    it('should return 400 for invalid URL', async () => {
      const invalidCreateDto: CreateUrlDto = {
        originalUrl: 'invalid-url',
      };

      const response = await request(httpServer)
        .post('/url')
        .send(invalidCreateDto);

      expect(response.status).toBe(400);
      expect(response.body.message).toEqual(['Invalid URL format']);
    });
  });

  describe('GET /url', () => {
    it('should return all URLs', async () => {
      const response = await request(httpServer).get('/url');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /url/:shortCode', () => {
    it('should return original URL for a valid shortCode', async () => {
      const createDto: CreateUrlDto = {
        originalUrl:
          'https://medium.com/nestjs-ninja/mastering-nestjs-unleashing-the-power-of-clean-architecture-and-ddd-in-e-commerce-development-97850131fd87',
      };

      const createResponse = await request(httpServer)
        .post('/url')
        .send(createDto);

      const shortCode = createResponse.body.props.shortCode;
      const response = await request(httpServer).get(`/url/${shortCode}`);
      expect(response.status).toBe(302);
    });

    it('should return 404 if shortCode is not found', async () => {
      const response = await request(httpServer).get('/url/invalid-shortcode');

      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Short code not found');
    });
  });
});
