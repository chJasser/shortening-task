import { Injectable } from '@nestjs/common';
import { UrlRepository } from '../ports/url.repositoy';

interface GetUrlUseCaseCommand { }

@Injectable()
export class GetUrlUseCase {
  constructor(private urlRepository: UrlRepository) { }

  async execute({ }: GetUrlUseCaseCommand): Promise<any> {
    const response = await this.urlRepository.findMany()
    return response;
  }
}
