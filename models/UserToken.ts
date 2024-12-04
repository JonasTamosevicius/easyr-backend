import { OrganizationAttributes } from "@shared/typescript/models/Organization.attributes";
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  PrimaryKey,
} from "sequelize-typescript";
import User from "@model/User";
@Table({
  tableName: "user_tokens",
})
export default class UserToken extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
  })
  userId!: number;

  @Column({
    type: DataType.STRING,
  })
  refreshToken!: string;

  @BelongsTo(() => User)
  user!: User;
}
