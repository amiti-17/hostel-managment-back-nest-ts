import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardPostModule } from './modules/dashboard-post/dashboard-post.module';
import { DashboardPostImageModule } from './modules/dashboard-post-image/dashboard-post-image.module';
import { GroupModule } from './modules/group/group.module';
import { TaskModule } from './modules/task/task.module';
import { ReviewModule } from './modules/review/review.module';
import { ProfileImageModule } from './modules/profile-image/profile-image.module';
import { HotelModule } from './modules/hotel/hotel.module';
import { RoomModule } from './modules/room/room.module';
import { FloorModule } from './modules/floor/floor.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': {
          path: '/subscriptions',
        },
      },
      context: ({ req, res }) => ({ req, res }),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    AuthModule,
    DashboardPostModule,
    DashboardPostImageModule,
    GroupModule,
    TaskModule,
    ReviewModule,
    ProfileImageModule,
    HotelModule,
    RoomModule,
    FloorModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
