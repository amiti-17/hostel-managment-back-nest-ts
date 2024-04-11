import { Query, Resolver } from '@nestjs/graphql';
import { DashboardPostService } from './dashboard-post.service';
import { DashboardPost } from './entities/dashboard-post.entity';

@Resolver()
export class DashboardPostResolver {
  constructor(private readonly dashboardPostService: DashboardPostService) {}
  @Query(() => DashboardPost, { name: 'dashboard' })
  async getDashboard(): Promise<DashboardPost> {
    return await this.dashboardPostService.getDashboard();
  }
}
