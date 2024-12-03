import { UserAttributes } from "@shared/typescript/models/User.attributes";
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
export default class User extends Model<UserAttributes> {
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
