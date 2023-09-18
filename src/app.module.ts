import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { ProjectsController } from './Project/project.controller';
import { ProjectsService } from './Project/project.service';
import { RankFiveController } from './rankFive/rankFive.controller';
import { RankFiveService } from './rankFive/rankFive.service';
import { MeasuresController } from './measure/measure.controller';
import { MeasuresService } from './measure/measure.service';
import { PrismaService } from './prisma/prisma.service';
import { JwtAuthModule } from './auth/jwt-auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    TasksController,
    ProjectsController,
    MeasuresController,
    RankFiveController,
  ],
  providers: [
    AppService,
    TasksService,
    ProjectsService,
    MeasuresService,
    PrismaService,
    RankFiveService,
  ],
})
export class AppModule {}
