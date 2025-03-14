import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Logdocument = Log & Document;

@Schema({ timestamps: true })
export class Log {
  @Prop({ required: true })
  level: string;

  @Prop({ required: true })
  message: string;

  /*@Prop({ required: true })
  meta?: Record<string, any>;*/

  @Prop({ required: true })
  timestamp: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);

// Exportez à la fois la classe et le schéma
export { LogSchema as logSchema };