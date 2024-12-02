import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";
import { UserAccessControl } from "@model/UserAccessControl";

export const User = sequelize.define("users", {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
});
