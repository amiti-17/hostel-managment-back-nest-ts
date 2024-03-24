// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Injectable } from '@nestjs/common';
// import { Coordinates } from 'src/config/types/coordinates';
// import { DailyWeatherService } from 'src/modules/dailyWeather/dailyWeather.service';
// import { PrismaService } from 'src/modules/prisma/prisma.service';
// import { pubSub } from './pubSub';
// import { WeatherAPI } from 'src/modules/weatherAPI/weatherAPI.service';
// import { Weather } from './entities/weather.entity';

// @Injectable()
// export class WeathersService {
//   constructor(
//     private prisma: PrismaService,
//     private dailyWeatherWService: DailyWeatherService,
//     private weatherAPI: WeatherAPI,
//   ) {}

//   async findOne(id: number): Promise<Weather> {
//     const weather = await this.prisma.weathers.findUnique({
//       where: { id },
//       select: this.selectWeather,
//     });
//     return weather;
//   }

//   async fetchAndCreateAll(coordinates: Coordinates) {
//     const fetchedWeather = await this.weatherAPI.getWeather(coordinates);
//     const { daily: fetchedDays } = fetchedWeather;

//     const localDays = [];
//     for (let i = 0; i < fetchedDays.length; i++) {
//       localDays.push(
//         await this.dailyWeatherWService.create(
//           fetchedDays[i].dt,
//           JSON.stringify(fetchedDays[i]),
//         ),
//       );
//     }

//     const localWeather = await this.prisma.weathers.create({
//       data: {
//         current: {
//           create: {
//             dt: fetchedWeather.current.dt,
//             current: JSON.stringify(fetchedWeather.current),
//           },
//         },
//         days: {
//           connect: localDays.map((el) => ({ id: el.id })),
//         },
//         locations: {
//           connect: {
//             ll: coordinates,
//           },
//         },
//       },
//     });

//     return localWeather;
//   }

//   async findAndUpdateIfNeed(id: number): Promise<Weather> {
//     const currentWeather = await this.findOne(id);
//     const shouldBeUpdated = this.isWeatherNeedUpdate(currentWeather.current.dt);

//     if (shouldBeUpdated) {
//       return this.fetchAndUpdateAll(id, {
//         lat: currentWeather.locations.lat,
//         lon: currentWeather.locations.lon,
//       });
//     }

//     return currentWeather;
//   }

//   async fetchAndUpdateAll(
//     id: number,
//     coordinates: Coordinates,
//   ): Promise<Weather> {
//     const fetchedWeather = await this.weatherAPI.getWeather(coordinates);
//     const weather = await this.prisma.weathers.update({
//       where: {
//         id,
//       },
//       data: {
//         current: {
//           update: {
//             data: {
//               dt: fetchedWeather.current.dt,
//               current: JSON.stringify(fetchedWeather.current),
//             },
//           },
//         },
//       },
//       select: this.selectWeather,
//     });
//     for (let i = 0; i < weather.days.length; i++) {
//       await this.dailyWeatherWService.update(
//         { id: weather.days[i].id },
//         weather.id,
//         fetchedWeather.daily[i].dt,
//         JSON.stringify(fetchedWeather.daily[i]),
//       );
//     }
//     const updatedWeather = await this.findOne(id);
//     pubSub.publish('weatherUpdated', updatedWeather);
//     return updatedWeather;
//   }

//   isWeatherNeedUpdate(dt: number): boolean {
//     // eslint-disable-next-line prettier/prettier
//     return (
//       new Date().getTime() / 1000 - dt >
//       Number(process.env.OW_SHOULD_BE_REFRESHED)
//     );
//   }

//   async removeWithAllRelated(weatherId: number): Promise<Weather> {
//     const weather = await this.findOne(weatherId);
//     await this.dailyWeatherWService.removeMany({ weatherId: weather.id });
//     await this.prisma.currentWeather.delete({
//       where: { id: weather.currentId },
//     });
//     return await this.prisma.weathers.delete({ where: { id: weather.id } });
//   }

//   private selectWeather = {
//     id: true,
//     current: true,
//     currentId: true,
//     days: true,
//     locations: true,
//   };
// }
