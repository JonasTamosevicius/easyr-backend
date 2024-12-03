import OrganizationInvite from "../models/OrganizationInvite";

async function getOrganizationInviteByUid(uid: string) {
  return await OrganizationInvite.findByPk(uid);
}

async function removeInvitation(uid: string) {
  const invitation = await getOrganizationInviteByUid(uid);

  if (invitation) {
    invitation.destroy();
  }
}

export { getOrganizationInviteByUid };
