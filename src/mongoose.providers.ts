import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { Sequence, SequenceSchema } from './modules/sequences/sequences.schema';
import { DB_CONNECTION_NAME } from './constains';

export const models = [
  {
    name: Sequence.name,
    schema: SequenceSchema,
  },
];

export const mongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  connectionName: DB_CONNECTION_NAME,
  useFactory: async (configService: ConfigService) =>
    ({
      uri: configService.get<string>('database.host'),
      ...configService.get<any>('database.options'),
    } as MongooseModuleAsyncOptions),
};
