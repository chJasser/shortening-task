import { UrlRepository } from "../../Domain/Repository/UrlRepository";
import UrlDataSource from "../DataSource/UrlDataSource";

export class UrlRepositoryImpl implements UrlRepository {
  dataSource: UrlDataSource;

  constructor(_datasource: UrlDataSource) {
    this.dataSource = _datasource;
  }

  async createUrl(value: string) {
    return this.dataSource.createUrl(value);
  }

  async getUrls() {
    return this.dataSource.getUrls();
  }
}
