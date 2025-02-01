import { Url } from '@app/domain/shortening/url';

export abstract class UrlRepository {
  abstract findMany(): Promise<Url[]>;
  abstract create(data: Url): Promise<Url>;
  abstract getOriginUrl(data: string): Promise<string>;
}
