import { Controller, Get } from '@nestjs/common';
import { Sequence } from './sequences.schema';
import { SequencesService } from './sequences.service';

@Controller('Sequence')
export class SequencesController {
  constructor(private readonly sequenceService: SequencesService) {}
  @Get()
  async getSequence(): Promise<Sequence[]> {
    // return this.sequenceService.getSequence();
    return;
  }
  @Get()
  async get() {
    return 'So good';
  }
}
