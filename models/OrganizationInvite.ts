import { OrganizationInviteAttributes } from "@shared/typescript/models/OrganziationInvite.attributes";
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  IsUUID,
  BelongsToMany,
} from "sequelize-typescript";
import Organization from "./Organization";
import UserAccessControl from "./UserAccessControl";

@Table({
  tableName: "organization_invites",
})
export default class OrganizationInvite extends Model<OrganizationInviteAttributes> {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  readonly uid!: string; // Marking it as `readonly`

  @Column({
    type: DataType.STRING,
  })
  readonly organizationName!: string; // Marking it as `readonly`

  @Column({
    type: DataType.STRING,
  })
  readonly organizationOwnerEmail!: string; // Marking it as `readonly`
}
