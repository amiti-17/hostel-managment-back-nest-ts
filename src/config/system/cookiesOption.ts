import { CookieOptions } from 'express';
import { regExp } from './regExp';

const jwtExpiresSecond = process.env.EXPIRES_TIME.match(regExp.int)[0];

export const accessCookieOptions: CookieOptions = {
  maxAge: Number(jwtExpiresSecond) * 1000,
  httpOnly: true,
  // domain: process.env.DOMAIN,
};

export const refreshCookieOptions: CookieOptions = {
  maxAge: Number(jwtExpiresSecond) * 10000,
  httpOnly: true,
  // domain: process.env.DOMAIN,
};

export const defaultCookieOptions: CookieOptions = {
  maxAge: 0,
  httpOnly: true,
  // domain: process.env.DOMAIN,
};
