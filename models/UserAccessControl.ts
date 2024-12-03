import { OrganizationInviteAttributes } from "@shared/typescript/models/OrganziationInvite.attributes";
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import User from "./User";
import Organization from "./Organization";
@Table({
  tableName: "users_access_controls",
})
export default class UserAccessControl extends Model<OrganizationInviteAttributes> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
  })
  userId!: number;

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.BIGINT,
  })
  organizationId!: number;
}
