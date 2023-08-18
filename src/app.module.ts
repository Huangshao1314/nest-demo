import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module'
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [],
  controllers: [AppController,TasksController],
  providers: [AppService,TasksService,PrismaService],
})
export class AppModule {}
