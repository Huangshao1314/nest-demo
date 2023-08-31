import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // 这里假设你已经创建了一个 PrismaService
import { Project } from '@prisma/client'; // 导入正确的 Prisma 客户端模型

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async getAllProjects(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  async getProjectById(id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id },
    });
  }

  async createProject(data: {
    red: string;
    blue?: string;
    date?: string;
  }): Promise<Project> {
    return this.prisma.project.create({
      data,
    });
  }

  async updateProject(
    id: number,
    data: {
      red: string;
      blue?: string;
      date?: string;
    },
  ): Promise<Project | null> {
    return this.prisma.project.update({
      where: { id },
      data,
    });
  }

  async deleteProject(id: number): Promise<Project | null> {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
