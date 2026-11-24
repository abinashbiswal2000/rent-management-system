import { Router } from "express";
import { setup2FA } from "../Controllers/TwoFactorAuthController.js"

const twoFactorAuthRouter = Router();

twoFactorAuthRouter.get("/setup2FA", setup2FA)

export { twoFactorAuthRouter }