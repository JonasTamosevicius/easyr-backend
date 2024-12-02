import { CreateOrganizationDto } from "@shared/typescript/interfaces/createOrganizationDto.interface";
import { getOrganizationInviteByUid } from "../repositories/OrganizationinvitesRepository";
import { createOrganization } from "@service/OrganizationService";
import { createUser } from "@service/UserService";

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

  const organization = dto.organization;
}

export { getOrganizationInvite, createOrganizationWithUserFromInvite };
