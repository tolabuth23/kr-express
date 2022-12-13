import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SequenceDocument = HydratedDocument<Sequence>;

@Schema()
export class Sequence {
  @Prop()
  key: string;

  @Prop()
  value: number;
}

export const SequenceSchema = SchemaFactory.createForClass(Sequence);
