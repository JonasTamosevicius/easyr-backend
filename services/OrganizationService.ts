import Organization from "@model/Organization";
import { CreateOrganizationDto } from "@shared/typescript/interfaces/createOrganizationDto.interface";

async function createOrganization(dto: CreateOrganizationDto["organization"]) {
  const organization = await Organization.create({
    name: dto.name,
  });
  return organization;
}

export { createOrganization };
