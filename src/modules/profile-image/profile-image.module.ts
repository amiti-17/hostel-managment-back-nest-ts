import { Module } from '@nestjs/common';
import { ProfileImageService } from './profile-image.service';
import { ProfileImageResolver } from './profile-image.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ProfileImageService, ProfileImageResolver, PrismaService],
  exports: [ProfileImageService],
})
export class ProfileImageModule {}
