import { CreateOrganizationDto } from "@shared/typescript/interfaces/createOrganizationDto.interface";
import { getOrganizationInviteByUid } from "../repositories/OrganizationinvitesRepository";
import { createOrganization } from "@service/OrganizationService";
import UserService from "@service/UserService";

export default class OrganizationInviteService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getOrganizationInvite(inviteId: string) {
    const invite = await getOrganizationInviteByUid(inviteId);

    return invite;
  }

  async createOrganizationWithUserFromInvite(
    inviteId: string,
    dto: CreateOrganizationDto
  ) {
    const invite = await this.getOrganizationInvite(inviteId);

    if (!invite) {
      throw new Error("INVITATION DOES NOT EXIST");
    }

    const organization = await createOrganization(dto.organization);

    const user = await this.userService.createUserFromOrganizationInvite(
      dto.user,
      organization
    );

    await invite.destroy();

    return {
      ...organization.get(),
      users: [
        {
          id: user.get().id,
          email: user.get().email,
        },
      ],
    };
  }
}
