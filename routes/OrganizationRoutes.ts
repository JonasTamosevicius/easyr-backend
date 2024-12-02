import express from "express";

const organizationRoutes = express.Router();

organizationRoutes.use((_, __, next) => {
  return next();
});

organizationRoutes.get("/", (_, res) => {
  return res.json("PING");
});

export default organizationRoutes;
