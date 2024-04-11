import { Module } from '@nestjs/common';
import { DashboardPostResolver } from './dashboard-post.resolver';
import { DashboardPostService } from './dashboard-post.service';

@Module({
  providers: [DashboardPostService, DashboardPostResolver],
})
export class DashboardPostModule {}
