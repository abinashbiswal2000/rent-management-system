import { Router } from "express";
import { transactionController } from "../Controllers/TransactionController.js";

const transactionRouter = Router();

transactionRouter.post('/transaction', transactionController);

export { transactionRouter };