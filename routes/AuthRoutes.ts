import express, { Request } from "express";
import AuthService from "@service/AuthenticationService";
import sendResponse from "@utils/sendResponse";

const authService = new AuthService();

const authRoutes = express.Router();
authRoutes.use((_, __, next) => {
  return next();
});

authRoutes.get("/", (_, res) => {
  res.json("PING");
});

authRoutes.post("/login", async (req, res) => {
  return sendResponse(res, await authService.login(req.body));
});

export default authRoutes;
