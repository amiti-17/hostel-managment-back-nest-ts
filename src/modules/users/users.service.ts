/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserWithPassword } from './entities/user-password.entity';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data: {
        ...createUserInput,
      },
      select: this.selectUser,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({
      select: this.selectUser,
    });
  }

  async remove(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: { id },
      select: this.selectUser,
    });
  }

  async findOne(
    filter: { email: string } | { id: string },
  ): Promise<UserWithPassword> {
    return await this.prisma.user.findUnique({
      where: filter,
      select: {
        ...this.selectUser,
        password: true,
      },
    });
  }

  private selectUser = {
    name: true,
    email: true,
    id: true,
    role: true,
    preferences: true,
    preferencesId: true,
    createdAt: true,
    updatedAt: true,
  };
}
