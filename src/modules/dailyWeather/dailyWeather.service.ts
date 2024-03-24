// import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/modules/prisma/prisma.service';
// import { DailyWeather } from './entities/dailyWeatherService.entity';

// @Injectable()
// export class DailyWeatherService {
//   constructor(private prisma: PrismaService) {}

//   async create(dt: number, daily: string): Promise<DailyWeather> {
//     return await this.prisma.dailyWeather.create({
//       data: {
//         dt,
//         daily,
//       },
//       select: this.selectDay,
//     });
//   }

//   async update(
//     filter: { id: number },
//     weatherId: number,
//     dt: number,
//     daily: string,
//   ): Promise<DailyWeather> {
//     return await this.prisma.dailyWeather.update({
//       where: filter,
//       data: { dt, daily, weather: { connect: { id: weatherId } } },
//       select: this.selectDay,
//     });
//   }

//   async remove(filter: { id: number }): Promise<DailyWeather> {
//     return await this.prisma.dailyWeather.delete({
//       where: filter,
//       select: this.selectDay,
//     });
//   }

//   async removeMany(filter: { weatherId: number }) {
//     return await this.prisma.dailyWeather.deleteMany({
//       where: filter,
//     });
//   }

//   private selectDay = {
//     id: true,
//     dt: true,
//     daily: true,
//     weather: true,
//   };
// }
