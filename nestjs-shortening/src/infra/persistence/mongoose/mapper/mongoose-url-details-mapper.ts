import { Url } from '@app/domain/shortening/url';
import { Url as UrlDocument } from '../entities/url.entity';


type UrlWithOrderDocument = UrlDocument

export class MongooseUrlDetailsMapper {
  static toDomain(entity: UrlWithOrderDocument): Url {
    const model = new Url({
      id: entity._id.toString(),
      originalUrl: entity.originalUrl,
      shortCode: entity.shortCode,
    });
    return model;
  }
}
