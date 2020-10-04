import { NestMiddleware, Injectable } from "@nestjs/common";
import * as jwt from "express-jwt";
import { Request, Response } from "express";
import { expressJwtSecret } from "jwks-rsa";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    return jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://chumakovv.auth0.com/.well-known/jwks.json`,
      }),
      audience: "http://localhost:4000/",
      issuer: "https://chumakovv.auth0.com/",
      algorithm: "RS256",
    });
  }
}
