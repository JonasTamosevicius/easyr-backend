import { CreateOrganizationDto } from "@shared/typescript/interfaces/createOrganizationDto.interface";
import { getOrganizationInviteByUid } from "../repositories/OrganizationinvitesRepository";
import { createOrganization } from "@service/OrganizationService";
import { createUserFromOrganizationInvite } from "@service/UserService";

async function getOrganizationInvite(inviteId: string) {
  const invite = await getOrganizationInviteByUid(inviteId);

  return invite;
}

async function createOrganizationWithUserFromInvite(
  inviteId: string,
  dto: CreateOrganizationDto
) {
  const invite = await getOrganizationInvite(inviteId);

  if (!invite) {
    throw new Error("INVITATION DOES NOT EXIST");
  }

  const organization = await createOrganization(dto.organization);

  const user = await createUserFromOrganizationInvite(dto.user, organization);

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

export { getOrganizationInvite, createOrganizationWithUserFromInvite };
