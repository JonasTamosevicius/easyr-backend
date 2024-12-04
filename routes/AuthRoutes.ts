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

authRoutes.post("/logout", async (req, res) => {
  authService.logout(req.body.userId);

  return sendResponse(res, { status: 200, message: "Signed out" });
});

authRoutes.post("/refresh-token", async (req, res) => {
  return sendResponse(
    res,
    await authService.refreshToken(req.body.refreshToken)
  );
});

export default authRoutes;
