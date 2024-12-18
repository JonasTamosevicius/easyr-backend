import { OrganizationInvite } from "../models/OrganizationInvite";

async function getOrganizationInviteByUid(uid: string) {
  return await OrganizationInvite.findByPk(uid);
}

export { getOrganizationInviteByUid };
