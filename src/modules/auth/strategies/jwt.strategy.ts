import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/modules/users/entities/user.entity';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWTFromCookie,
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.ACCESS_SECRET,
      usernameField: 'email',
    });
  }

  private static extractJWTFromCookie(req: Request): string | null {
    if (req.cookies && req.cookies.accessToken) {
      return req.cookies.accessToken;
    }

    return null;
  }

  async validate(payload: any): Promise<User> {
    return { id: payload.sub, email: payload.email, name: payload.name };
  }
}
