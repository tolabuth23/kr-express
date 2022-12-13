import { Body, Inject, Injectable } from '@nestjs/common';
import { Sequence, SequenceDocument, SequenceSchema } from './sequences.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SequenceDto } from './dto/sequence.dto';

@Injectable()
export class SequencesService {
  constructor(
    @InjectModel(Sequence.name) private sequenceModel: Model<SequenceDocument>,
  ) {}
  async getSequence(): Promise<Sequence[]> {
    return this.sequenceModel.find();
  }
  async createSequence(createDto: SequenceDto) {
    return this.sequenceModel.create(createDto);
  }
}
