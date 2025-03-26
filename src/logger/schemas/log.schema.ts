import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

/**
 * Définition du schéma de la collection des logs
 */
export type Logdocument = Log & Document;

/**
 * Définition de la classe Log
 */
@Schema({ timestamps: true })
export class Log {
  /**
   * Niveau de log
   *
   * @type {string}
   * @memberof Log
   */
  @Prop({ required: true })
  level: string;

  /**
   * Message
   *
   * @type {string}
   * @memberof Log
   */
  @Prop({ required: true })
  message: string;

  /**
   * Métadonnées
   *
   * @type {Record<string, any>}
   * @memberof Log
   */
  @Prop({ type: MongooseSchema.Types.Mixed, required: true })
  metadata: Record<string, any>;

  /**
   * Timestamp
   *
   * @type {Date}
   * @memberof Log
   */
  @Prop({ required: true })
  timestamp: Date;

  /**
   * URL du serveur ayant émis le log
   *
   * @type {string}
   * @memberof Log
   */
  @Prop({ required: false })
  serverUrl: string;
}

/**
 * Créez le schéma pour la collection des logs
 */
export const LogSchema = SchemaFactory.createForClass(Log);

/**
 * Exportez à la fois la classe et le schéma
 */
export { LogSchema as logSchema };