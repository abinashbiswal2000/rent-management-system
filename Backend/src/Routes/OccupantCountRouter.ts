import { Router } from "express";

import { getAllTimeOccupantsCountPerRoom } from "../Controllers/OccupantCountController.js";
import { getOccupantsOfMonth } from "../Controllers/OccupantCountController.js";
import { getOccupantsOfMonth2 } from "../Controllers/OccupantCountController.js";
import { editOccupant } from "../Controllers/OccupantCountController.js";
import { addOccupantCountForAMonth } from "../Controllers/OccupantCountController.js";
import { deleteOccupant } from "../Controllers/OccupantCountController.js";


const occupantsRouter = Router();

occupantsRouter.get('/getAllOccupants', getAllTimeOccupantsCountPerRoom);
occupantsRouter.post('/getOccupant', getOccupantsOfMonth);
occupantsRouter.post('/getOccupant2', getOccupantsOfMonth2);
occupantsRouter.patch('/editOccupant/:id', editOccupant);
occupantsRouter.post('/addOccupant', addOccupantCountForAMonth);
occupantsRouter.delete('/deleteOccupant/:id', deleteOccupant);


export { occupantsRouter };