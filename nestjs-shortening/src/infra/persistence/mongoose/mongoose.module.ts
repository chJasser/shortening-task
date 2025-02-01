
import { UrlRepository } from '@app/application/shortening/ports/url.repositoy';
import { EnvModule, EnvService } from '@app/infra/env';
import { Module } from '@nestjs/common';
import { MongooseModule as MongooseModuleLib } from '@nestjs/mongoose';

import { Url, UrlSchema } from './entities/url.entity';

// Non exported

import { MongooseUrlRepository } from './repositories/mongoose-url.repositoy';

@Module({
    imports: [
        MongooseModuleLib.forRootAsync({
            imports: [EnvModule],
            useFactory: (envService: EnvService) => ({
                uri: envService.get('MONGODB_URL'),
            }),
            inject: [EnvService],
        }),
        MongooseModuleLib.forFeature([
            { name: Url.name, schema: UrlSchema },
        
        ]),
    ],
    providers: [
      
        {
            provide: UrlRepository,
            useClass: MongooseUrlRepository
        },
       
    ],
    exports: [ UrlRepository],
})
export class MongooseModule { }
