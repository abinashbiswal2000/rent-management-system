import { type Request, type Response, type NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"

export function authMiddleware(req: Request, res: Response, next : NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader == null) {
            return res.status(401).json({
                message: "Unauthorized",
                error: "Authorization Header is missing"
            })
        }
        const [bearer, token] = authHeader.split(" ");
        if (token == null) {
            return res.status(401).json({
                message: "Unauthorized",
                error: "Token is missing"
            })
        }

        const jwtSecretKey = process.env.JWT_SECRET;

        if (jwtSecretKey == null) {
            return res.status(500).json({
                message: "jwt secret key should not be null"
            })
        }

        const payload = jwt.verify(token, jwtSecretKey) as JwtPayload;
        req.userId = payload.userId;

        next();


    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                message: "Unauthorized.",
                error: "Request Could not pass through auth middleware. "
            })
        }
        res.status(500).json({
            message: "Something went wrong",
            error: e
        })
    }
}