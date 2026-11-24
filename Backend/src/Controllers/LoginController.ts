import { type Request, type Response } from "express"
import jwt from "jsonwebtoken"
import { loginSchema } from "../ZodSchemas/LoginSchema.js";
import bcrypt from "bcrypt"
import { verifySync } from "otplib";


export async function loginController (req : Request, res : Response) {
    try {
        const parsedData = loginSchema.safeParse(req.body);
        if (parsedData.success !== true) {
            return res.status(400).json({
                message: "Inputs don't match login schema",
                error: parsedData.error.issues
            })
        }
        const env_userId = process.env.USER_ID;
        const env_password = process.env.PASSWORD;
        const totpSecret = process.env.TOTP_SECRET;

        if (env_userId == null || env_password == null || totpSecret == null) {
            return res.status(500).json({
                message: "userId, password or TOTP secret is null in env"
            })
        }

        const isValid1 = await bcrypt.compare(parsedData.data.userId, env_userId);
        const isValid2 = await bcrypt.compare(parsedData.data.password, env_password);
        const isValid3 = verifySync({
            token: parsedData.data.otp,
            secret: totpSecret
        }).valid;        

        if (isValid1 == false || isValid2 == false || isValid3 == false) {
            return res.status(401).json({
                message: "Incorrect userid or password or otp" 
            })
        }

        const secret = process.env.JWT_SECRET;
        if (secret == null) {
            throw new Error("JWT secret key can not be null")
        }
        const payload = {userId: parsedData.data.userId}
        const token = jwt.sign(payload, secret, { expiresIn: "7d" });
        
        res.status(200).json({
            message: "Login Successful",
            token: token
        })
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}