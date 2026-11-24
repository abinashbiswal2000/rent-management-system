import { Router } from "express"
import { loginController } from "../Controllers/LoginController.js";

const loginRouter = Router();

loginRouter.post('/login', loginController);

export { loginRouter };