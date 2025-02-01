import { Url } from "../../Model/Url";
import { UrlRepository } from "../../Repository/UrlRepository";

export interface GetUrlsUseCase {
  invoke: () => Promise<Url[]>;
}

export class GetUrls implements GetUrlsUseCase {
  private urlRepo: UrlRepository;
  constructor(_urlRepo: UrlRepository) {
    this.urlRepo = _urlRepo;
  }

  async invoke() {
    return this.urlRepo.getUrls();
  }
}
