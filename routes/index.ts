import { Express } from "express";
import organizationInvitesRouter from "./OrganizationInvites";
import organizationRoutes from "./OrganizationRoutes";

export default function (app: Express): void {
  app.use("/organization-invites", organizationInvitesRouter);
  app.use("/organization", organizationRoutes);
}
