import type { Request, Response } from "express";
import { transactionSchema } from "../ZodSchemas/TransactionSchema.js";
import { prisma } from "../db.js";
import { yearMonthSchema } from "../ZodSchemas/YearMonthSchema.js";

export async function transactionController (req : Request, res : Response) {
    try {
        if (req.userId == null) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        const parsedData = transactionSchema.safeParse(req.body);
        const parsedData2 = yearMonthSchema.safeParse(req.body);
        if (parsedData.success !== true) {
            return res.status(400).json({
                message: "Could not complete schema check successfully. Invalid Input.",
                error: parsedData.error.issues
            })            
        } else if (parsedData2.success !== true) {            
            return res.status(400).json({
                message: "Could not complete schema check successfully. Invalid Input.",
                error: parsedData2.error.issues
            })            
        }
        const ym = parsedData2.data.yearMonth;
        const o = {
            r1: parsedData.data.r1o, 
            r2: parsedData.data.r2o, 
            r3: parsedData.data.r3o, 
            r4: parsedData.data.r4o, 
            r5: parsedData.data.r5o, 
            r6: parsedData.data.r6o, 
            r7: parsedData.data.r7o, 
            r8: parsedData.data.r8o, 
            r9: parsedData.data.r9o, 
            r10: parsedData.data.r10o, 
            r11: parsedData.data.r11o, 
            r12: parsedData.data.r12o, 
            r13: parsedData.data.r13o, 
        }
        const b = {
            r1: parsedData.data.r1b, 
            r2: parsedData.data.r2b, 
            r3: parsedData.data.r3b, 
            r4: parsedData.data.r4b, 
            r5: parsedData.data.r5b, 
            r6: parsedData.data.r6b, 
            r7: parsedData.data.r7b, 
            r8: parsedData.data.r8b, 
            r9: parsedData.data.r9b, 
            r10: parsedData.data.r10b, 
            r11: parsedData.data.r11b, 
            r12: parsedData.data.r12b, 
            r13: parsedData.data.r13b, 
        }
        const cm = {
            r1: parsedData.data.r1cm, 
            r2: parsedData.data.r2cm, 
            r3: parsedData.data.r3cm, 
            r4: parsedData.data.r4cm, 
            r5: parsedData.data.r5cm, 
            r6: parsedData.data.r6cm, 
            r7: parsedData.data.r7cm, 
            r8: parsedData.data.r8cm, 
            r9: parsedData.data.r9cm, 
            r10: parsedData.data.r10cm, 
            r11: parsedData.data.r11cm, 
            r12: parsedData.data.r12cm, 
            r13: parsedData.data.r13cm, 
        }
        const output = await prisma.$transaction([
            prisma.occupantCount.upsert({
                where: {yearMonth: ym},
                update: o,
                create: {yearMonth: ym, ...o}
            }), 
            prisma.roomBillsRecords.upsert({
                where: {yearMonth: ym},
                update: b,
                create: {yearMonth: ym, ...b}
            }), 
            prisma.meterReadings.upsert({
                where: {yearMonth: ym},
                update: cm,
                create: {yearMonth: ym, ...cm}
            })

        ])

        res.status(200).json({
            message: "DBs updated successfully",
            data: output
        })

    } catch (e) {
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}