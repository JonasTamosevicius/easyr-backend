import { OrganizationAttributes } from "@shared/typescript/models/Organization.attributes";
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import User from "@model/User";
import UserAccessControl from "@model/UserAccessControl";
@Table({
  tableName: "organizations",
})
export default class Organization extends Model<OrganizationAttributes> {
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @BelongsToMany(() => User, () => UserAccessControl)
  users!: User[];
}
