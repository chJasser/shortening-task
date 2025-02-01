import { UrlRepository } from '@app/application/shortening/ports/url.repositoy';
import { Url } from '@app/domain/shortening/url';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url as UrlMongoose } from '../entities/url.entity';
import { MongooseUrlMapper } from '../mapper/mongoose-url-mapper';
import { MongooseUrlDetailsMapper } from '../mapper/mongoose-url-details-mapper';

@Injectable()
export class MongooseUrlRepository implements UrlRepository {
  constructor(
    @InjectModel(UrlMongoose.name)
    private readonly urlModel: Model<UrlMongoose>,
  ) {}

  async findMany(): Promise<Url[]> {
    const findQuery = await this.urlModel.find();
    return findQuery.map((item) => MongooseUrlDetailsMapper.toDomain(item));
  }

  async create(url: Url): Promise<Url> {
    const data = MongooseUrlMapper.toMongoose(url);
    const entity = new this.urlModel({ ...data });
    await entity.save();

    return MongooseUrlMapper.toDomain(entity);
  }

  async getOriginUrl(shortCode: string): Promise<string> {
    const findQuery = await this.urlModel.findOne({ shortCode });

    if (!findQuery) {
      throw new HttpException('Short code not found', HttpStatus.NOT_FOUND);
    }

    return MongooseUrlDetailsMapper.toDomain(findQuery).originalUrl;
  }
}
