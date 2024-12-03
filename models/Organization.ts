import { OrganizationAttributes } from "@shared/typescript/models/Organization.attributes";
import { Table, Column, Model, DataType } from "sequelize-typescript";
@Table({
  tableName: "organizations",
})
export default class Organization extends Model<OrganizationAttributes> {
  @Column({
    type: DataType.STRING,
  })
  name!: string;
}
