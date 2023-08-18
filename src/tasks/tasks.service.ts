import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // 这里假设你已经创建了一个 PrismaService
import { Task } from '@prisma/client'; // 导入正确的 Prisma 客户端模型

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  async createTask(data: { title: string; description?: string; done?: boolean }): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  async updateTask(id: number, data: { title?: string; description?: string; done?: boolean }): Promise<Task | null> {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async deleteTask(id: number): Promise<Task | null> {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
