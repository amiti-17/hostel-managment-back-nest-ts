import { Query, Args, Int, Resolver, Subscription } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Weather } from './entities/weather.entity';
// import { WeathersService } from './weathers.service';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { pubSub } from './pubSub';

@Resolver(() => Weather)
export class WeathersResolver {
  // constructor(private weathersService: WeathersService) {}

  @Query(() => Weather, { name: 'getWeather' })
  @UseGuards(JwtAuthGuard)
  async findOne() {
    //{ type: () => Int }) id: number
    // return await this.weathersService.findAndUpdateIfNeed(id);
  }

  @Subscription(() => Weather, {
    name: 'weatherUpdated',
    resolve: (value) => value,
    filter: (payload, variables) => {
      return Boolean(payload.id === variables.weatherId);
    },
  })
  subscribeToLocationRemove(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Args('weatherId', { type: () => Int }) weatherId: number,
  ) {
    return pubSub.asyncIterator('weatherUpdated');
  }
}
