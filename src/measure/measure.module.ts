import { Module } from '@nestjs/common';
import { MeasuresController } from './measure.controller';

@Module({
  controllers: [MeasuresController],
})
export class ProjectsModule {}
