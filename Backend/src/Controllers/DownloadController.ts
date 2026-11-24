import type { Response, Request } from "express";
import { prisma } from "../db.js"
import ExcelJS from "exceljs"

function addSheet(workbook: ExcelJS.Workbook, name: string, rows: object[]) {
    const sheet = workbook.addWorksheet(name);
    sheet.columns = [
        { header: "ID", key: "id", width: 8 },
        { header: "Year-Month", key: "yearMonth", width: 14 },
        { header: "R1", key: "r1", width: 10 },
        { header: "R2", key: "r2", width: 10 },
        { header: "R3", key: "r3", width: 10 },
        { header: "R4", key: "r4", width: 10 },
        { header: "R5", key: "r5", width: 10 },
        { header: "R6", key: "r6", width: 10 },
        { header: "R7", key: "r7", width: 10 },
        { header: "R8", key: "r8", width: 10 },
        { header: "R9", key: "r9", width: 10 },
        { header: "R10", key: "r10", width: 10 },
        { header: "R11", key: "r11", width: 10 },
        { header: "R12", key: "r12", width: 10 },
        { header: "R13", key: "r13", width: 10 }
    ];
    sheet.addRows(rows);
}

async function downloadFullData(req: Request, res: Response) {
    try {
        const [o, b, r] = await Promise.all([
            prisma.occupantCount.findMany({ orderBy: { "yearMonth": "asc" } }),
            prisma.roomBillsRecords.findMany({ orderBy: { "yearMonth": "asc" } }),
            prisma.meterReadings.findMany({ orderBy: { "yearMonth": "asc" } })
        ]);

        const workbook = new ExcelJS.Workbook();

        addSheet(workbook, "OccupantCount", o);
        addSheet(workbook, "Bills", b);
        addSheet(workbook, "Readings", r);

        res.status(200).attachment("FullData.xlsx");
        await workbook.xlsx.write(res);
        res.end();

    } catch (e) {
        console.error(e);
        if (res.headersSent) {
            res.end();
        } else {
            res.status(500).json({
                message: "Something went wrong"
            });
        }
    }
}

export { downloadFullData };