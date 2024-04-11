import { Module } from '@nestjs/common';
import { ProfileImageService } from './profile-image.service';
import { ProfileImageResolver } from './profile-image.resolver';

@Module({
  providers: [ProfileImageService, ProfileImageResolver],
})
export class ProfileImageModule {}
