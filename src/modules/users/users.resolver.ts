import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { UserWithPassword } from './entities/user-password.entity';
import { StatusOutput } from '../auth/dto/status.output';
import { UpdateUsersPasswordInput } from './dto/update-user-password';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(@Context() context) {
    // console.log(context);
    return await this.usersService.findAll();
  }

  @Query(() => UserWithPassword, { name: 'user' })
  @UseGuards(JwtAuthGuard)
  async findOne(@Args('email') email: string) {
    return await this.usersService.findOne({ email });
  }

  @Query(() => User, { name: 'findById' })
  @UseGuards(JwtAuthGuard)
  async findById(@Args('id') id: string) {
    return await this.usersService.findOne({ id });
  }

  @Query(() => User, { name: 'getCurrentUser' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(RolesGuard)
  async getCurrentUser(@Context() context) {
    return await this.usersService.findOne({ id: context.req.user.sub });
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Mutation(() => User)
  async removeUser(@Args('id') id: string) {
    return await this.usersService.remove(id);
  }

  @Mutation(() => StatusOutput)
  async updateUsersPassword(
    @Args('updateUsersPassword') updateUsersPassword: UpdateUsersPasswordInput,
  ): Promise<StatusOutput> {
    return await this.usersService.updatePassword(updateUsersPassword);
  }
}
