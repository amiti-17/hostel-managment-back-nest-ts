import { Module } from '@nestjs/common';
import { DashboardPostImageService } from './dashboard-post-image.service';
import { DashboardPostImageResolver } from './dashboard-post-image.resolver';

@Module({
  providers: [DashboardPostImageService, DashboardPostImageResolver],
})
export class DashboardPostImageModule {}
