import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UrlDocument = HydratedDocument<Url>;

@Schema()
export class Url {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  originalUrl: string;

  @Prop()
  shortCode: string; 

}

const UrlSchema = SchemaFactory.createForClass(Url);

export { UrlSchema };
