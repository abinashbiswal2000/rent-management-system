import express from "express"
import cors from "cors";
import "dotenv/config"

// import { twoFactorAuthRouter } from "./Routes/TwoFactorAuthRouter.js";
import { loginRouter } from "./Routes/LoginRoute.js";
import { authMiddleware } from "./Middleware/AuthMiddleware.js"
import { occupantsRouter } from "./Routes/OccupantCountRouter.js";
import { roomBillsRouter } from "./Routes/RoomBillsRouter.js";
import { meterReadingsRouter } from "./Routes/MeterReadingsRouter.js";
import { transactionRouter } from "./Routes/TransactionRouter.js";
import { downloadRouter } from "./Routes/DownloadRouter.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cors());

// app.use(twoFactorAuthRouter);
app.use(loginRouter);
app.use(authMiddleware);
app.use(occupantsRouter);
app.use(roomBillsRouter);
app.use(meterReadingsRouter);
app.use(transactionRouter);
app.use(downloadRouter);

app.listen(
    PORT, 
    () => {
        console.log(`App running at http://localhost:${PORT}`);
    }
)