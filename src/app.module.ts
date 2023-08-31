import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { ProjectsModule } from './project/project.module';
import { ProjectsController } from './Project/project.controller';
import { ProjectsService } from './Project/project.service';
import { PrismaService } from './prisma/prisma.service';
import { JwtAuthModule } from './auth/jwt-auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, TasksController, ProjectsController],
  providers: [AppService, TasksService, ProjectsService, PrismaService],
})
export class AppModule {}
