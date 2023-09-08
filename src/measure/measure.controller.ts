import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MeasuresService } from './measure.service';
import { Measure } from './measure.model';

@Controller('projects')
export class MeasuresController {
  constructor(private tasksService: MeasuresService) {}

  @Get()
  async getAllMeasures(): Promise<Measure[]> {
    return this.tasksService.getAllMeasures();
  }

  @Get(':id')
  async getMeasureById(@Param('id') id: number): Promise<Measure> {
    return this.tasksService.getMeasureById(id);
  }

  @Post()
  async createMeasure(@Body() task: Measure): Promise<Measure> {
    return this.tasksService.createMeasure(task);
  }

  @Put(':id')
  async updateMeasure(
    @Param('id') id: number,
    @Body() updatedMeasure: Measure,
  ): Promise<Measure> {
    return this.tasksService.updateMeasure(id, updatedMeasure);
  }

  @Delete(':id')
  async deleteMeasure(@Param('id') id: number): Promise<void> {
    this.tasksService.deleteMeasure(id);
  }
}
