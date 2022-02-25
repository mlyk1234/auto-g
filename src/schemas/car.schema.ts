import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  sku: string;

  @Prop()
  make: string;

  @Prop()
  model: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  status: string;

  @Prop()
  img: string;

}

export const CarSchema = SchemaFactory.createForClass(Car);