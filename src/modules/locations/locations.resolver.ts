// import {
//   Resolver,
//   Query,
//   Mutation,
//   Args,
//   Int,
//   Subscription,
// } from '@nestjs/graphql';
// import { UseGuards } from '@nestjs/common';
// import { LocationsService } from './locations.service';
// import { Location } from './entities/location.entity';
// import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
// import { FindOneByFetchedObjInput } from './dto/findOneByFetchedObj.input';
// import { CreateLocationInput } from './dto/createLocation.input';
// import { pubSub } from './pubSub';

// @Resolver(() => Location)
// export class LocationsResolver {
//   constructor(private readonly locationsService: LocationsService) {}

//   @Query(() => [Location], { name: 'locations' })
//   async findAll() {
//     return await this.locationsService.findAll();
//   }

//   @Query(() => Location, { name: 'locationById' })
//   @UseGuards(JwtAuthGuard)
//   async findOne(@Args('id', { type: () => Int }) id: number) {
//     return await this.locationsService.findOne({ id });
//   }

//   @Query(() => Location, { name: 'locationByCoordinates' })
//   @UseGuards(JwtAuthGuard)
//   async findOneByFetchedObj(
//     @Args('coordinates') coordinates: FindOneByFetchedObjInput,
//   ) {
//     return await this.locationsService.findOne({ ll: coordinates });
//   }

//   @Query(() => [Location], { name: 'getListOfPlaces' })
//   @UseGuards(JwtAuthGuard)
//   async getListOfPlaces(
//     @Args('quantity', { type: () => Int }) quantity: number,
//   ): Promise<Location[]> {
//     return await this.locationsService.getListOfPlaces(quantity);
//   }

//   @Mutation(() => Location, { name: 'createLocation' })
//   @UseGuards(JwtAuthGuard)
//   async create(
//     @Args('locationInput', { type: () => CreateLocationInput })
//     locationInput: CreateLocationInput,
//     @Args('usersId', { type: () => Int }) usersId: number,
//   ): Promise<Location> {
//     return await this.locationsService.createWithWeather(
//       locationInput,
//       usersId,
//     );
//   }

//   @Mutation(() => Location, { name: 'removeLocation' })
//   @UseGuards(JwtAuthGuard)
//   async remove(
//     @Args('locationsId', { type: () => Int })
//     locationsId: number,
//     @Args('usersId', { type: () => Int }) usersId: number,
//   ): Promise<Location> {
//     return await this.locationsService.remove({ id: locationsId }, usersId);
//   }

//   @Subscription(() => Location, {
//     name: 'locationAdded',
//     resolve: (value) => value,
//     filter: (payload, variables) => {
//       return Boolean(payload.users.find((el) => el.id === variables.usersId));
//     },
//   })
//   subscribeToLocationAdd(
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     @Args('usersId', { type: () => Int }) usersId: string,
//   ) {
//     return pubSub.asyncIterator('locationAdded');
//   }

//   @Subscription(() => Location, {
//     name: 'locationRemoved',
//     resolve: (value) => value,
//     filter: (payload, variables) => {
//       if (!payload.users) return true;
//       return !Boolean(payload.users?.find((el) => el.id === variables.usersId));
//     },
//   })
//   subscribeToLocationRemove(
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     @Args('usersId', { type: () => Int }) usersId: number,
//   ) {
//     return pubSub.asyncIterator('locationRemoved');
//   }
// }
