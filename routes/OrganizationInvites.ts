import express, { Request, Router } from "express";
import OrganizationInviteService from "@service/OrganizationInvitesService";
import { CreateOrganizationDto } from "@shared/typescript/interfaces/createOrganizationDto.interface";

const organizationInviteService = new OrganizationInviteService();
const organizationInvitesRouter = express.Router();

organizationInvitesRouter.use((_, __, next) => {
  return next();
});

organizationInvitesRouter.get("/", (_, res) => {
  res.send("PING");
});

organizationInvitesRouter.get("/:uid", async (req, res) => {
  const paramId = req.params.uid;

  return res
    .status(200)
    .json(await organizationInviteService.getOrganizationInvite(paramId));
});

organizationInvitesRouter.post("/:uid/redeem", async (req, res) => {
  const invitationUid = req.params.uid;
  const organizationDto = req.body as CreateOrganizationDto;

  return res
    .status(200)
    .json(
      await organizationInviteService.createOrganizationWithUserFromInvite(
        invitationUid,
        organizationDto
      )
    );
});

export default organizationInvitesRouter;
