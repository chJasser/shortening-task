import { Url } from '@app/domain/shortening/url';
import { Url as UrlDocument } from '../entities/url.entity';

export class MongooseUrlMapper {
  static toDomain(entity: UrlDocument): Url {
    const model = new Url({
      id: entity._id.toString(),
      originalUrl: entity.originalUrl,
      shortCode: entity.shortCode,
    });
    return model;
  }

  static toMongoose(url: Url) {
    return {
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
    }
  }
}
