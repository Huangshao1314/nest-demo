import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // 这里假设你已经创建了一个 PrismaService
import { Measure } from '@prisma/client'; // 导入正确的 Prisma 客户端模型

@Injectable()
export class MeasuresService {
  constructor(private prisma: PrismaService) {}

  async getAllMeasures(): Promise<Measure[]> {
    return this.prisma.measure.findMany();
  }

  async getMeasureById(id: number): Promise<Measure | null> {
    return this.prisma.measure.findUnique({
      where: { id },
    });
  }

  async createMeasure(data: {
    same1: string;
    same2: string;
    same3: string;
    same4: string;
    same5: string;
    same6: string;
    same7: string;
    same8: string;
    same9: string;
    same10: string;
  }): Promise<Measure> {
    return this.prisma.measure.create({
      data,
    });
  }

  async updateMeasure(
    id: number,
    data: {
      same1: string;
      same2: string;
      same3: string;
      same4: string;
      same5: string;
      same6: string;
      same7: string;
      same8: string;
      same9: string;
      same10: string;
    },
  ): Promise<Measure | null> {
    return this.prisma.measure.update({
      where: { id },
      data,
    });
  }

  async deleteMeasure(id: number): Promise<Measure | null> {
    return this.prisma.measure.delete({
      where: { id },
    });
  }
}
