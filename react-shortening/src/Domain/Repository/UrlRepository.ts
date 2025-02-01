import { Url } from "../Model/Url";

export interface UrlRepository {
  getUrls(): Promise<Url[]>;
  createUrl(value: string): Promise<Url>;
}
