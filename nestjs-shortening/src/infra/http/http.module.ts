import { CacheManagerModule } from '@app/infra/persistence/cache/cache.module';
import { UrlController } from './url.controller';
import { CreateUrlUseCase } from '@app/application/shortening/use-case/create-url';
import { GetUrlUseCase } from '@app/application/shortening/use-case/get-url';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { NanoidEncoderModule } from '../nanoid-encoder/nanoid-encoder.module';
import { GetOriginUrlUseCase } from '@app/application/shortening/use-case/get-origin-url';

@Module({
  imports: [CacheManagerModule, NanoidEncoderModule],
  controllers: [AppController, UrlController],
  providers: [CreateUrlUseCase, GetUrlUseCase, GetOriginUrlUseCase],
  exports: [],
})
export class HttpModule {}
