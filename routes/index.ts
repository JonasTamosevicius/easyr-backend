import { Express } from "express";
import organizationInvitesRouter from "./OrganizationInvites";
import organizationRoutes from "./OrganizationRoutes";
import authRoutes from "./AuthRoutes";

export default function (app: Express): void {
  app.use("/organization-invites", organizationInvitesRouter);
  app.use("/organization", organizationRoutes);
  app.use("/auth", authRoutes);
}
