import LoginDto from "@shared/typescript/dto/login.dto.interface";
import UserService from "@service/UserService";
import express from "express";
import { ErrResponse } from "@utils/sendResponse";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@model/User";
import { UserAttributes } from "@shared/typescript/models/User.attributes";
import UserToken from "@model/UserToken";
import UserTokenRepository from "@repo/UserTokenRepository";

export default class AuthService {
  public static saltRounds = 10;
  private userService = new UserService();
  public userTokenRepository = new UserTokenRepository();

  async login(dto: LoginDto) {
    const userRaw = await this.userService.getUserByEmail(dto.email);
    if (!userRaw) {
      return new ErrResponse(
        "USER_DOES_NOT_EXIST",
        "User with email or password does not exist"
      );
    }
    const user = userRaw.get();

    const match = await bcrypt.compare(dto.password, user.passwordHash);

    if (!match) {
      return new ErrResponse("USER_WRONG_PASSWORD", "Wrong password provided");
    }

    const accessToken = this.generateUserToken(user);
    const refreshToken = this.generateUserRefreshToken(user);
    const hashedRefreshToken = await bcrypt.hash(
      refreshToken,
      AuthService.saltRounds
    );

    this.userTokenRepository.upsertUserToken(
      user.id as number,
      hashedRefreshToken
    );

    return { accessToken, refreshToken };
  }

  generateUserToken(user: UserAttributes) {
    const accessToken = jwt.sign(
      {
        userId: user.id,
        organizationId: user.organizations?.[0].id || null,
        permissions: user.organizations?.[0].accessControl?.permissions,
      },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "1h" }
    );

    return accessToken;
  }

  generateUserRefreshToken(user: UserAttributes) {
    return jwt.sign(
      { userId: user.id },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "7d" }
    );
  }
}
