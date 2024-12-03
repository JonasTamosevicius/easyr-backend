import { User } from "@model/User";
import { CreateOrganizationDto } from "@shared/typescript/interfaces/createOrganizationDto.interface";
import bcrypt from "bcrypt";

async function createUserFromOrganizationInvite(
  dto: CreateOrganizationDto["user"],
  organization: unknown
) {
  const saltRounds = 10;

  const hashedPassword = bcrypt.hashSync(dto.email, saltRounds);

  const user = await User.create({
    email: dto.email,
    passwordHash: hashedPassword,
  });

  return organization;
}

export { createUserFromOrganizationInvite };
