import { Injectable } from '@nestjs/common';
import { UrlRepository } from '../ports/url.repositoy';

interface GetOriginUrlUseCaseCommand {
  shortCode: string;
}

@Injectable()
export class GetOriginUrlUseCase {
  constructor(private urlRepository: UrlRepository) {}

  async execute({ shortCode }: GetOriginUrlUseCaseCommand): Promise<any> {
    const response = await this.urlRepository.getOriginUrl(shortCode);
    return response;
  }
}
