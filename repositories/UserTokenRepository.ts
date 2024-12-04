import Organization from "@model/Organization";
import User from "@model/User";
import UserAccessControl from "@model/UserAccessControl";
import UserToken from "@model/UserToken";

export default class UserTokenRepository {
  private userTokenModel = UserToken;

  upsertUserToken(userId: number, refreshToken: string) {
    return this.userTokenModel.upsert({
      userId,
      refreshToken,
    });
  }

  findTokenByUserId(userId: number) {
    return this.userTokenModel.findOne({
      where: {
        userId,
      },
      include: [
        {
          model: User,
          include: [
            {
              model: Organization,
              through: {
                as: "accessControl",
                where: {
                  loggedIn: true,
                },
              },
            },
          ],
        },
      ],
    });
  }
}
