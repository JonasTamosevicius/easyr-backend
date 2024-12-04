import UserToken from "@model/UserToken";

export default class UserTokenRepository {
  private userTokenModel = UserToken;

  upsertUserToken(userId: number, refreshToken: string) {
    return this.userTokenModel.upsert({
      userId,
      refreshToken,
    });
  }
}
