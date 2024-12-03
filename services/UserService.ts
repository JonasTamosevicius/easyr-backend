import Organization from "@model/Organization";
import User from "@model/User";
import UserAccessControl from "@model/UserAccessControl";
import { CreateOrganizationDto } from "@shared/typescript/interfaces/createOrganizationDto.interface";
import bcrypt from "bcrypt";

async function createUserFromOrganizationInvite(
  dto: CreateOrganizationDto["user"],
  organization: Organization
) {
  const saltRounds = 10;

  const hashedPassword = bcrypt.hashSync(dto.email, saltRounds);

  const user = await User.create({
    email: dto.email,
    passwordHash: hashedPassword,
  });

  console.log("JONAS USER", user.id);

  await assignOrganizationToUser(user.id, organization.id);

  return user;
}

async function assignOrganizationToUser(
  userId: number,
  organizationId: number
) {
  const accessControl = await UserAccessControl.create({
    userId: userId,
    organizationId: organizationId,
  });

  return accessControl;
}

export { createUserFromOrganizationInvite };
