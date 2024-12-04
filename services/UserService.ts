import Organization from "@model/Organization";
import User from "@model/User";
import UserAccessControl from "@model/UserAccessControl";
import { CreateOrganizationDto } from "@shared/typescript/interfaces/createOrganizationDto.interface";
import UserRepository from "@repo/UserRepository";
import bcrypt from "bcrypt";
import AuthService from "./AuthenticationService";

export default class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUserFromOrganizationInvite(
    dto: CreateOrganizationDto["user"],
    organization: Organization
  ) {
    const hashedPassword = bcrypt.hashSync(
      dto.password,
      AuthService.saltRounds
    );

    const user = await User.create({
      email: dto.email,
      passwordHash: hashedPassword,
    });

    await this.assignOrganizationToUser(user.id, organization.id);

    return user;
  }

  async assignOrganizationToUser(userId: number, organizationId: number) {
    const accessControl = await UserAccessControl.create({
      userId: userId,
      organizationId: organizationId,
      loggedIn: true,
      permissions: ["OWNER"],
    });

    return accessControl;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.getUserByUserByEmail(email);
  }
}
