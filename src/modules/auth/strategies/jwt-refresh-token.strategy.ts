import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtRefreshTokenStrategy.extractJWTRefreshFromCookie,
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.REFRESH_SECRET,
      usernameField: 'email',
    });
  }

  private static extractJWTRefreshFromCookie(req: Request): string | null {
    if (req.cookies && req.cookies.refreshToken) {
      return req.cookies.refreshToken;
    }

    return null;
  }

  async validate(payload: any) {
    return { roles: payload.roles, id: payload.sub };
  }
}
