import { Module } from '@nestjs/common';
import { ProjectsController } from './project.controller';

@Module({
  controllers: [ProjectsController],
})
export class ProjectsModule {}
