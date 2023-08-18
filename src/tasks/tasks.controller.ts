import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() task: Task): Promise<Task> {
    console.log('task: ', task);
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  async updateTask(@Param('id') id: number, @Body() updatedTask: Task): Promise<Task> {
    return this.tasksService.updateTask(id, updatedTask);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    this.tasksService.deleteTask(id);
  }
}
