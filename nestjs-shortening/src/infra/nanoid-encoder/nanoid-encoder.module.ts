import { Module } from '@nestjs/common';
import { NanoidEncoderService } from './nanoid-encoder/nanoid-encoder.service';
import { EnvModule } from '../env';

@Module({
  imports: [EnvModule],
  providers: [NanoidEncoderService],
  exports: [NanoidEncoderService],
})
export class NanoidEncoderModule {}
