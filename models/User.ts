import { OrganizationInviteAttributes } from "@shared/typescript/models/OrganziationInvite.attributes";
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import Organization from "./Organization";
import UserAccessControl from "./UserAccessControl";
@Table({
  tableName: "users",
})
export default class User extends Model<OrganizationInviteAttributes> {
  @Column({
    type: DataType.STRING,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
  })
  passwordHash!: string;

  @Column({
    type: DataType.STRING,
  })
  phoneNumber!: string;

  @BelongsToMany(() => Organization, () => UserAccessControl)
  organizations!: Organization[];
}
