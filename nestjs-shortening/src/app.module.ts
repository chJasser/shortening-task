import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ShorteningModule } from './application/shortening/shortening.module';
import { PersistenceModule } from './infra/persistence/persistence.module';


@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    PersistenceModule.register({
      type: 'mongoose',
      global: true,
    }),
    ShorteningModule,
  ],
  providers: [],
})
export class AppModule { }
