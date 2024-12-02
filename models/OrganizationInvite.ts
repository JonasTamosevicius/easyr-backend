import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

export const OrganizationInvite = sequelize.define("organization_invites", {
  uid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  organizationName: {
    type: DataTypes.STRING,
  },
  organizationOwnerEmail: {
    type: DataTypes.STRING,
  },
});
