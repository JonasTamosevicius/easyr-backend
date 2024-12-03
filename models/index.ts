import Organization from "./Organization";
import OrganizationInvite from "./OrganizationInvite";
import User from "./User";
import UserAccessControl from "./UserAccessControl";
import { sequelize } from "../config/sequelize";

export default function () {
  sequelize.addModels([
    Organization,
    OrganizationInvite,
    User,
    UserAccessControl,
  ]);
}
