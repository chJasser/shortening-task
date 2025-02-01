import { Url } from "../../Model/Url";
import { UrlRepository } from "../../Repository/UrlRepository";

export interface CreateUrlsUseCase {
  invoke: (value: string) => Promise<Url>;
}

export class CreateUrl implements CreateUrlsUseCase {
  private UrlRepo: UrlRepository;
  constructor(_UrlRepo: UrlRepository) {
    this.UrlRepo = _UrlRepo;
  }

  async invoke(value: string) {
    if (value.length < 2) {
      throw new Error("Your Url should have at leat 2 characters.");
    }
    const created = this.UrlRepo.createUrl(value);
    return created;
  }
}
