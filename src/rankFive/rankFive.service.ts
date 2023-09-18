import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // 这里假设你已经创建了一个 PrismaService
import { Rank_Five } from '@prisma/client'; // 导入正确的 Prisma 客户端模型

@Injectable()
export class RankFiveService {
  constructor(private prisma: PrismaService) {}

  async getAllProjects(): Promise<Rank_Five[]> {
    return this.prisma.rank_Five.findMany();
  }

  async getProjectById(id: number): Promise<Rank_Five | null> {
    return this.prisma.rank_Five.findUnique({
      where: { id },
    });
  }

  async createProject(data: {
    lotteryGameName: string;
    lotteryGameNum: string;
    lotteryDrawResult: string;
    lotteryDrawTime: string;
    lotteryDrawNum: string;
  }): Promise<Rank_Five> {
    return this.prisma.rank_Five.create({
      data,
    });
  }

  async updateProject(
    id: number,
    data: {
      lotteryGameName: string;
      lotteryGameNum: string;
      lotteryDrawResult: string;
      lotteryDrawTime: string;
      lotteryDrawNum: string;
    },
  ): Promise<Rank_Five | null> {
    return this.prisma.rank_Five.update({
      where: { id },
      data,
    });
  }

  async deleteProject(id: number): Promise<Rank_Five | null> {
    return this.prisma.rank_Five.delete({
      where: { id },
    });
  }
}
