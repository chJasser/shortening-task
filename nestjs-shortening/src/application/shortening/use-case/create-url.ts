import { Url } from '@app/domain/shortening/url';
import { Injectable } from '@nestjs/common';
import { UrlRepository } from '../ports/url.repositoy';
import { NanoidEncoderService } from '@app/infra/nanoid-encoder/nanoid-encoder/nanoid-encoder.service';

interface CreateUrlUseCaseCommand {
  originalUrl: string;
}

@Injectable()
export class CreateUrlUseCase {
  constructor(
    private urlRepository: UrlRepository,
    private encoder: NanoidEncoderService,
  ) {}

  async execute({ originalUrl }: CreateUrlUseCaseCommand): Promise<any> {
    const shortCode = this.encoder.generateShortCodeFromUrl(originalUrl);
    const url = new Url({
      originalUrl,
      shortCode,
    });

    const response = await this.urlRepository.create(url);

    return response;
  }
}
