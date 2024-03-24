// import { Injectable } from '@nestjs/common';
// import { CreateLocationInput } from './dto/createLocation.input';
// import { CoordinatesInput } from './dto/coordinates.input';
// import { Location } from './entities/location.entity';
// import { Coordinates } from 'src/config/types/coordinates';
// import { WeathersService } from 'src/modules/weathers/weathers.service';
// import { PrismaService } from 'src/modules/prisma/prisma.service';
// import { pubSub } from './pubSub';

// @Injectable()
// export class LocationsService {
//   constructor(
//     private prisma: PrismaService,
//     private weathersService: WeathersService,
//   ) {}

//   async findAll(): Promise<Location[]> {
//     return await this.prisma.locations.findMany();
//   }

//   async findOne(
//     filter: { id: number } | { ll: CoordinatesInput },
//   ): Promise<Location> {
//     return await this.prisma.locations.findUnique({
//       where: filter,
//       select: this.selectLocation,
//     });
//   }

//   async remove(
//     filter: { id: number } | { ll: CoordinatesInput },
//     usersId: number,
//   ): Promise<Location> {
//     const location = await this.findOne(filter);
//     if (location.users.length > 1) {
//       const currentLocation = await this.prisma.locations.update({
//         where: filter,
//         data: {
//           users: {
//             disconnect: { id: usersId },
//           },
//         },
//         select: this.selectLocation,
//       });
//       pubSub.publish('locationRemoved', currentLocation);
//       return location;
//     }
//     await this.weathersService.removeWithAllRelated(location.weatherId);
//     const currentLocation = await this.prisma.locations.delete({
//       where: filter,
//       select: this.selectLocation,
//     });
//     currentLocation.users = [];
//     pubSub.publish('locationRemoved', currentLocation);
//     return currentLocation;
//   }

//   async getListOfPlaces(quantity: number = 5): Promise<Location[]> {
//     const amountOfLocations = await this.prisma.locations.count();
//     return amountOfLocations > quantity
//       ? await this.prisma.locations.findMany({ take: 5 })
//       : await this.prisma.locations.findMany({});
//   }

//   async createWithWeather(
//     createLocationInput: CreateLocationInput,
//     usersId: number,
//   ): Promise<Location> {
//     const coordinates: Coordinates = {
//       lat: createLocationInput.lat,
//       lon: createLocationInput.lon,
//     };
//     const currentExists = await this.findOne({ ll: coordinates });
//     if (currentExists) {
//       await this.prisma.locations.update({
//         where: {
//           ll: {
//             lat: currentExists.lat,
//             lon: currentExists.lon,
//           },
//         },
//         data: {
//           users: {
//             connect: {
//               id: usersId,
//             },
//           },
//         },
//         select: this.selectLocation,
//       });
//     } else {
//       await this.prisma.locations.create({
//         data: {
//           ...createLocationInput,
//           users: {
//             connect: {
//               id: usersId,
//             },
//           },
//         },
//         select: this.selectLocation,
//       });
//       await this.weathersService.fetchAndCreateAll(coordinates);
//     }
//     const currentLocation = await this.findOne({ ll: coordinates });
//     pubSub.publish('locationAdded', currentLocation);
//     return currentLocation;
//   }

//   private selectLocation = {
//     id: true,
//     lat: true,
//     lon: true,
//     name: true,
//     state: true,
//     country: true,
//     weather: true,
//     weatherId: true,
//     users: true,
//   };
// }
