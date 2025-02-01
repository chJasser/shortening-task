import { Url } from "../../Domain/Model/Url";
export default interface UrlDataSource {
  createUrl(value: string): Promise<Url>;
  getUrls(): Promise<Url[]>;
}
