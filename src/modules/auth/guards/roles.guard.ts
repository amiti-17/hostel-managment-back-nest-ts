import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { strConstants } from 'src/config/public/strConstants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler()); // it's which role should exist on user to continue; []
    if (!roles) {
      return true;
    }
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    try {
      const payload = await this.jwtService.verifyAsync(
        request.cookies[strConstants.accessToken],
        {
          secret: process.env.ACCESS_SECRET,
          ignoreExpiration: false,
        },
      );
      request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }
    const user = request?.user;
    return this.matchRoles(roles, user?.roles);
  }

  matchRoles(roles, userRoles) {
    let canActivate = false;
    userRoles?.forEach((role) => {
      if (roles.includes(role)) {
        canActivate = true;
      }
    });
    return canActivate;
  }
}
