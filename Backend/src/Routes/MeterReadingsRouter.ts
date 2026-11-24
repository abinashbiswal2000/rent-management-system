import { Router } from "express";

import { getAllTimeMeterReadingsPerRoom } from "../Controllers/MeterReadingsController.js";
import { getMeterReadingsOfMonth } from "../Controllers/MeterReadingsController.js";
import { getMeterReadingsOfMonth2 } from "../Controllers/MeterReadingsController.js";
import { editMeterReading } from "../Controllers/MeterReadingsController.js";
import { addMeterReadingsForAMonth } from "../Controllers/MeterReadingsController.js";
import { deleteMeterReading } from "../Controllers/MeterReadingsController.js";

const meterReadingsRouter = Router();

meterReadingsRouter.get('/getAllMeterReadings', getAllTimeMeterReadingsPerRoom);
meterReadingsRouter.post('/getMeterReading', getMeterReadingsOfMonth)
meterReadingsRouter.post('/getMeterReading2', getMeterReadingsOfMonth2)
meterReadingsRouter.patch('/editMeterReading/:id', editMeterReading)
meterReadingsRouter.post('/addMeterReading', addMeterReadingsForAMonth)
meterReadingsRouter.delete('/deleteMeterReading/:id', deleteMeterReading);

export { meterReadingsRouter };