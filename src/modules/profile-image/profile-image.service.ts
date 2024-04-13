import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileImageInput } from './dto/create-profile-image.input';
import { ProfileImage } from './entities/profile-image.entity';

@Injectable()
export class ProfileImageService {
  constructor(private prisma: PrismaService) {}

  async create({
    name,
    type,
    imageSrc,
  }: CreateProfileImageInput): Promise<ProfileImage> {
    return await this.prisma.profileImage.create({
      data: {
        type,
        name,
        imageSrc,
      },
    });
  }
}
