import { Test, TestingModule } from '@nestjs/testing';
import { NanoidEncoderService } from './nanoid-encoder.service';

describe('NanoidEncoderService', () => {
  let service: NanoidEncoderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NanoidEncoderService],
    }).compile();

    service = module.get<NanoidEncoderService>(NanoidEncoderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
