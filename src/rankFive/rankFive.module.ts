import { Module } from '@nestjs/common';
import { RankFiveController } from './rankFive.controller';

@Module({
  controllers: [RankFiveController],
})
export class ProjectsModule {}
