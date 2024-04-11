import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DashboardPost } from './entities/dashboard-post.entity';

@Injectable()
export class DashboardPostService {
  constructor(private prismaService: PrismaService) {}

  async getDashboard(): Promise<DashboardPost> {
    return await this.prismaService.dashboardPost.findFirst();
  }
}
