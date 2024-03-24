// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Injectable } from '@nestjs/common';
// import { CreateUserInput } from './dto/create-user.input';
// import { User } from './entities/user.entity';
// import { UserWithPassword } from './entities/user-password.entity';
// import { Location } from 'src/modules/locations/entities/location.entity';
// import { PrismaService } from 'src/modules/prisma/prisma.service';

// @Injectable()
// export class UsersService {
//   constructor(private prisma: PrismaService) {}

//   async create(createUserInput: CreateUserInput): Promise<User> {
//     return await this.prisma.users.create({
//       data: {
//         ...createUserInput,
//       },
//       select: this.selectUser,
//     });
//   }

//   async findAll(): Promise<User[]> {
//     return await this.prisma.users.findMany({
//       select: this.selectUser,
//     });
//   }

//   async findOne(filter: { email: string } | { id: number }): Promise<User> {
//     return await this.prisma.users.findUnique({
//       where: filter,
//       select: this.selectUser,
//     });
//   }

//   async remove(id: number): Promise<User> {
//     return await this.prisma.users.delete({
//       where: { id },
//       select: this.selectUser,
//     });
//   }

//   async findOneUnsafe(email: string): Promise<UserWithPassword> {
//     return await this.prisma.users.findUnique({
//       where: { email },
//       select: {
//         ...this.selectUser,
//         password: true,
//       },
//     });
//   }

//   async getAllLocations(id: number): Promise<Location[]> {
//     const { locations } = await this.prisma.users.findUnique({
//       where: {
//         id,
//       },
//       select: {
//         locations: true,
//       },
//     });
//     return locations;
//   }

//   private selectUser = {
//     name: true,
//     email: true,
//     id: true,
//     locations: true,
//   };
// }
