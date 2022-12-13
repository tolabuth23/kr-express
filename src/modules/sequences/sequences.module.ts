import { CacheModule, Module } from '@nestjs/common';
import { SequencesService } from './sequences.service';
import { SequencesController } from './sequences.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { models } from '../../mongoose.providers';
import { DB_CONNECTION_NAME } from '../../constains';
import RegisterCacheOptions from 'src/cache.providers';

@Module({
  imports: [
    CacheModule.registerAsync(RegisterCacheOptions),
    MongooseModule.forFeature(models, DB_CONNECTION_NAME),
  ],
})
export class SequencesModule {}
