import { Resolver, Args, Mutation, Context } from '@nestjs/graphql';
import { Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.input';
import { User } from 'src/modules/users/entities/user.entity';
import { CreateUserInput } from 'src/modules/users/dto/create-user.input';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-token.guard';
import { StatusOutput } from './dto/status.output';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Role } from './enums/role.enum';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => StatusOutput)
  async login(
    @Args('authLoginInput') authLoginInput: AuthLoginInput,
    @Res() res: Response,
  ): Promise<StatusOutput> {
    return await this.authService.login(authLoginInput, res);
  }

  @Mutation(() => StatusOutput)
  logout(@Res() res: Response): StatusOutput {
    return this.authService.logout(res);
  }

  @Mutation(() => StatusOutput)
  @UseGuards(JwtRefreshAuthGuard)
  refreshToken(@Res() res: Response, @Context() context): StatusOutput {
    return this.authService.refreshToken(res, context);
  }

  @Mutation(() => User, { name: 'createUser' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  async signup(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.authService.signup(createUserInput);
  }
}
