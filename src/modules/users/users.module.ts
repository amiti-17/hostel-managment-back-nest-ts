import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UsersService } from './users.service';
import { ProfileImageModule } from '../profile-image/profile-image.module';

@Module({
  imports: [ProfileImageModule],
  providers: [UsersResolver, PrismaService, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
