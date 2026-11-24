import { Router } from "express";
import { getAllTimeRoomBillsPerRoom } from "../Controllers/RoomBillsController.js"
import { getRoomBillsOfMonth } from "../Controllers/RoomBillsController.js"
import { editRoomBills } from "../Controllers/RoomBillsController.js"
import { addRoomBillsForAMonth } from "../Controllers/RoomBillsController.js"
import { deleteRoomBill } from "../Controllers/RoomBillsController.js";

const roomBillsRouter = Router();

roomBillsRouter.get('/getAllRoomBills', getAllTimeRoomBillsPerRoom);
roomBillsRouter.post('/getRoomBill', getRoomBillsOfMonth);
roomBillsRouter.patch('/editRoomBill/:id', editRoomBills);
roomBillsRouter.post('/addRoomBill', addRoomBillsForAMonth);
roomBillsRouter.delete('/deleteRoomBill/:id', deleteRoomBill);

export { roomBillsRouter };