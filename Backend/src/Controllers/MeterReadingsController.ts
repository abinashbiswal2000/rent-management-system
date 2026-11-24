import { prisma } from "../db.js"
import { type Request, type Response } from "express"
import { roomsSchema } from "../ZodSchemas/RoomsSchema.js"
import { yearMonthSchema } from "../ZodSchemas/YearMonthSchema.js"
import { idSchema } from "../ZodSchemas/IdSchema.js"

export async function getAllTimeMeterReadingsPerRoom (req : Request, res : Response) {
    try {
        if (req.userId == null) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        const data = await prisma.meterReadings.findMany()
        res.status(200).json({
            message: "Fetched Meter Reradings Data Successfully",
            data: data
        })
        
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}

export async function getMeterReadingsOfMonth (req : Request, res : Response) {
    try {
        if (req.userId == null) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        const parsedData = idSchema.safeParse(req.body);
        if (parsedData.success !== true) {
            return res.status(400).json({
                message: "Could not complete schema check successfully. Invalid Input.",
                error: parsedData.error.issues
            })
        }

        const data = await prisma.meterReadings.findUnique({
            where: {id: parsedData.data.id}
        })
        
        if (data == null) {
            return res.status(404).json({
                message: `Could not find data for ${parsedData.data.id}`
            })
        }

        res.status(200).json({
            message: "Data fetched successfully",
            data: data
        })
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}

export async function getMeterReadingsOfMonth2 (req : Request, res : Response) {
    try {
        if (req.userId == null) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        const parsedData = yearMonthSchema.safeParse(req.body);
        if (parsedData.success !== true) {
            return res.status(400).json({
                message: "Could not complete schema check successfully. Invalid Input.",
                error: parsedData.error.issues
            })
        }

        const data = await prisma.meterReadings.findUnique({
            where: {yearMonth: parsedData.data.yearMonth}
        })
        
        if (data == null) {
            return res.status(404).json({
                message: `Could not find data for ${parsedData.data.yearMonth}`
            })
        }

        res.status(200).json({
            message: "Data fetched successfully",
            data: data
        })
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}

export async function editMeterReading (req : Request, res : Response) {
    try {
        if (req.userId == null) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({
                message: "Invalid Id, Bad params"
            })
        }

        const parsedData = roomsSchema.safeParse(req.body)

        if (parsedData.success !== true) {
            return res.status(400).json({
                message: "Bad Input"
            })
        }

        const data = await prisma.meterReadings.update({
            where: {id: id},
            data: parsedData.data
        })

        res.status(200).json({
            message: "Data Edited Successfully",
            data: data
        })
        
    } catch (e) {        
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}

export async function addMeterReadingsForAMonth (req : Request, res : Response) {
    try {

        if (req.userId == null) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const parsedData = roomsSchema.safeParse(req.body);
        const parsedData2 = yearMonthSchema.safeParse(req.body);

        if (parsedData.success !== true) {
            return res.status(400).json({
                message: "Could not complete schema check. Invalid Input",
                error: parsedData.error.issues
            })
        }
        if (parsedData2.success !== true) {
            return res.status(400).json({
                message: "Could not complete schema check. Invalid Input",
                error: parsedData2.error.issues
            })
        }

        const data = await prisma.meterReadings.create({
            data: {...parsedData.data, yearMonth: parsedData2.data.yearMonth}
        })

        res.status(201).json({
            message: "Data added successfully to db",
            data: data
        })

    } catch (e) {
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}

export async function deleteMeterReading (req : Request, res : Response) {
    try {

        if (req.userId == null) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({
                message: "Invalid Id, Bad params"
            })
        }

        const data = await prisma.meterReadings.delete({
            where: {id: id}
        })

        res.status(200).json({
            message: "Data Deleted Successfully"
        })

    } catch (e) {
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}