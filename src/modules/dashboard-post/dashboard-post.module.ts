import { Module } from '@nestjs/common';
import { DashboardPostResolver } from './dashboard-post.resolver';
import { DashboardPostService } from './dashboard-post.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [DashboardPostService, PrismaService, DashboardPostResolver],
  exports: [DashboardPostService],
})
export class DashboardPostModule {}
