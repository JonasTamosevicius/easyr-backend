import { UserAccessControlAttributes } from "@shared/typescript/models/UserAccessControl.attributes";
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  PrimaryKey,
} from "sequelize-typescript";
import User from "./User";
import Organization from "./Organization";
@Table({
  tableName: "users_access_controls",
  timestamps: false,
})
export default class UserAccessControl extends Model<UserAccessControlAttributes> {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
  })
  userId!: number;

  @PrimaryKey
  @ForeignKey(() => Organization)
  @Column({
    type: DataType.BIGINT,
  })
  organizationId!: number;

  @Column({
    type: DataType.JSON,
  })
  permissions!: string[];

  @Column({
    type: DataType.BOOLEAN,
  })
  loggedIn!: string[];
}
