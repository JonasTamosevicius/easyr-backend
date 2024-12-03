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
  const invite = getOrganizationInvite(inviteId);

  if (!invite) {
    throw new Error("INVITATION DOES NOT EXIST");
  }

  const organization = await createOrganization(dto.organization);

  // createUserFromOrganizationInvite(dto.user, organization)
}

export { getOrganizationInvite, createOrganizationWithUserFromInvite };
