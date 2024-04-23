/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserWithPassword } from './entities/user-password.entity';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UpdateUsersPasswordInput } from './dto/update-user-password';
import { StatusOutput } from '../auth/dto/status.output';
import { regExp } from 'src/config/regexp';
import { HttpException } from '@nestjs/common';
import { errorMsg } from 'src/config/constants/errorMsg';
import { UpdateUsersProfileImage } from './dto/update-user-profile-image';
import { ProfileImageService } from '../profile-image/profile-image.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private profileImageService: ProfileImageService,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    this.validateCreateUserInput(createUserInput);
    if (!createUserInput) {
      return;
    }
    return await this.prisma.user.create({
      data: {
        ...createUserInput,
        password: await bcrypt.hash(
          createUserInput.password,
          process.env.SALT_FOR_PASSWORD,
        ),
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

  async findAdmin(
    filter: { email: string } | { id: string },
  ): Promise<UserWithPassword> {
    return await this.prisma.user.findUnique({
      where: { ...filter, roles: { has: 'admin' } },
      select: {
        ...this.selectUser,
        password: true,
      },
    });
  }

  async updatePassword({
    id,
    newPassword,
    oldPassword,
  }: UpdateUsersPasswordInput): Promise<StatusOutput> {
    const currentUser = await this.findOne({ id });
    if (newPassword === oldPassword) {
      throw new HttpException(
        errorMsg.updatedPasswordMatchedWithProvidedOld,
        HttpStatus.BAD_REQUEST,
      );
    }
    this.validatePassword(newPassword);
    if (await bcrypt.compare(oldPassword, currentUser.password)) {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: {
          password: await bcrypt.hash(
            newPassword,
            process.env.SALT_FOR_PASSWORD,
          ),
        },
        select: { id: true },
      });
      return { status: updatedUser.id ? true : false };
    } else {
      throw new HttpException(
        errorMsg.oldPasswordNotMatched,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  validateCreateUserInput(
    createUserInput: CreateUserInput,
  ): CreateUserInput | undefined {
    if (!regExp.email.test(createUserInput.email)) {
      throw new HttpException(errorMsg.incorrectEmail, HttpStatus.BAD_REQUEST);
    }
    this.validatePassword(createUserInput.password);
    this.validatePhone(createUserInput.phone);
    return createUserInput;
  }

  validatePassword(password: string): string {
    if (password.length < 8) {
      throw new HttpException(errorMsg.passwordLength, HttpStatus.BAD_REQUEST);
    }
    if (!regExp.digit.test(password)) {
      throw new HttpException(errorMsg.passwordDigit, HttpStatus.BAD_REQUEST);
    }
    if (!regExp.upperCaseLetter.test(password)) {
      throw new HttpException(
        errorMsg.passwordUpperCase,
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!regExp.lowerCaseLetter.test(password)) {
      throw new HttpException(
        errorMsg.passwordLowerCase,
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!regExp.specialSymbol.test(password)) {
      throw new HttpException(
        errorMsg.passwordSpecialSymbols,
        HttpStatus.BAD_REQUEST,
      );
    }
    return password;
  }

  validatePhone(phoneNumber: string): string {
    if (!regExp.phone.test(phoneNumber)) {
      throw new HttpException(errorMsg.incorrectPhone, HttpStatus.BAD_REQUEST);
    }
    return phoneNumber;
  }

  async updateProfileImage({
    usersId: id,
    type,
    name,
    newProfileImage,
  }: UpdateUsersProfileImage): Promise<StatusOutput> {
    // TODO: learn how to validate image on back

    const createdProfileImage = await this.profileImageService.create({
      type,
      name,
      imageSrc: newProfileImage,
    });
    const updateUser = await this.prisma.user.update({
      where: { id },
      data: {
        profileImage: { connect: { id: createdProfileImage.id } },
      },
      select: { profileImage: true },
    });
    if (updateUser.profileImage.id) {
      return { status: true };
    }
    return { status: false };
  }

  private selectUser = {
    id: true,
    email: true,
    name: true,
    roles: true,
    phone: true,
    preferences: true,
    preferencesId: true,
    profileImage: true,
    profileImageId: true,
    groupList: true,
    groupIdsList: true,
    readDashboardPostIds: true,
    createdAt: true,
    updatedAt: true,
  };
}
