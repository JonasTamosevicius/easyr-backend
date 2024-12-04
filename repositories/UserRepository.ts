import User from "@model/User";
import Organization from "@model/Organization";
import UserToken from "@model/UserToken";

export default class UserRepository {
  async getUserByUserByEmail(email: string) {
    const user = User.findOne({
      where: {
        email,
      },
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
        {
          model: UserToken,
        },
      ],
    });

    return user;
  }
}
