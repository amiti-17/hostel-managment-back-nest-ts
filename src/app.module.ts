import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { LocationsModule } from './modules/locations/locations.module';
import { AuthModule } from './modules/auth/auth.module';
import { WeathersModule } from './modules/weathers/weathers.module';
import { DailyWeatherModule } from './modules/dailyWeather/dailyWeather.module';

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
    LocationsModule,
    AuthModule,
    WeathersModule,
    DailyWeatherModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
