import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProjectsService } from './project.service';
import { Project } from './project.model';

@Controller('projects')
export class ProjectsController {
  constructor(private tasksService: ProjectsService) {}

  @Get()
  async getAllProjects(): Promise<Project[]> {
    return this.tasksService.getAllProjects();
  }

  @Get(':id')
  async getProjectById(@Param('id') id: number): Promise<Project> {
    return this.tasksService.getProjectById(id);
  }

  @Post()
  async createProject(@Body() task: Project): Promise<Project> {
    return this.tasksService.createProject(task);
  }

  @Put(':id')
  async updateProject(
    @Param('id') id: number,
    @Body() updatedProject: Project,
  ): Promise<Project> {
    return this.tasksService.updateProject(id, updatedProject);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: number): Promise<void> {
    this.tasksService.deleteProject(id);
  }
}
