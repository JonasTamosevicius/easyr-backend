import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";
import { User } from "@model/User";
import { Organization } from "@model/Organization";

export const UserAccessControl = sequelize.define("users_access_controls", {
  userId: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    references: {
      key: "id",
      model: User,
    },
  },
  organizationId: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    references: {
      key: "id",
      model: Organization,
    },
  },
});
