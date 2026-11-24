import { downloadFullData } from "../Controllers/DownloadController.js";
import { Router } from "express";

const downloadRouter = Router();

downloadRouter.get('/downloadFullData', downloadFullData);

export { downloadRouter };