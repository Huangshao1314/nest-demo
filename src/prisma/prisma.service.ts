import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  public prisma: PrismaClient;

  constructor() {
    super()
    this.prisma = new PrismaClient();
  }
  
}
