import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { RankFiveService } from './rankFive.service';
import { Rank_Five } from './rankFive.model';

@Controller('rankFives')
export class RankFiveController {
  constructor(private tasksService: RankFiveService) {}

  @Get()
  async getAllProjects(): Promise<Rank_Five[]> {
    return this.tasksService.getAllProjects();
  }

  @Get(':id')
  async getProjectById(@Param('id') id: number): Promise<Rank_Five> {
    return this.tasksService.getProjectById(id);
  }

  @Post()
  async createProject(@Body() task: Rank_Five): Promise<Rank_Five> {
    return this.tasksService.createProject(task);
  }

  @Put(':id')
  async updateProject(
    @Param('id') id: number,
    @Body() updatedProject: Rank_Five,
  ): Promise<Rank_Five> {
    return this.tasksService.updateProject(id, updatedProject);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: number): Promise<void> {
    this.tasksService.deleteProject(id);
  }
}
