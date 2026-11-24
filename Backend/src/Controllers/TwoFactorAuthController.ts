import { type Request, type Response } from "express"

import { generateSecret } from "otplib";

import QRCode from "qrcode";


export async function setup2FA(req: Request, res: Response) {

    const secret = generateSecret();

    const label = encodeURIComponent("RentManagementApp:admin");
    const issuer = encodeURIComponent("RentManagementApp");

    const otpauthUrl = `otpauth://totp/${label}?secret=${secret}&issuer=${issuer}`;

    const qrCode = await QRCode.toDataURL(otpauthUrl);
    
    res.json({ secret: secret, qrCode: qrCode });

}