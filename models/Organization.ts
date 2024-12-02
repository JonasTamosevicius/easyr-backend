import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";
import { User } from "@model/User";
import { UserAccessControl } from "@model/UserAccessControl";

export const Organization = sequelize.define("organizations", {
  id: {
    type: DataTypes.STRING,
    autoIncrement: true,
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
  name: {
    type: DataTypes.STRING,
  },
});

Organization.belongsToMany(User, { through: UserAccessControl });
