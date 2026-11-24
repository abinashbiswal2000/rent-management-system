import { z } from "zod";

export const transactionSchema = z.object({

    r1o:  z.coerce.number().int().min(0), 
    r2o:  z.coerce.number().int().min(0), 
    r3o:  z.coerce.number().int().min(0), 
    r4o:  z.coerce.number().int().min(0), 
    r5o:  z.coerce.number().int().min(0), 
    r6o:  z.coerce.number().int().min(0), 
    r7o:  z.coerce.number().int().min(0), 
    r8o:  z.coerce.number().int().min(0), 
    r9o:  z.coerce.number().int().min(0),     
    r10o: z.coerce.number().int().min(0), 
    r11o: z.coerce.number().int().min(0), 
    r12o: z.coerce.number().int().min(0), 
    r13o: z.coerce.number().int().min(0),

    r1cm:  z.coerce.number().int().min(0), 
    r2cm:  z.coerce.number().int().min(0), 
    r3cm:  z.coerce.number().int().min(0), 
    r4cm:  z.coerce.number().int().min(0), 
    r5cm:  z.coerce.number().int().min(0), 
    r6cm:  z.coerce.number().int().min(0), 
    r7cm:  z.coerce.number().int().min(0), 
    r8cm:  z.coerce.number().int().min(0), 
    r9cm:  z.coerce.number().int().min(0), 
    r10cm: z.coerce.number().int().min(0), 
    r11cm: z.coerce.number().int().min(0), 
    r12cm: z.coerce.number().int().min(0), 
    r13cm: z.coerce.number().int().min(0),

    r1b:  z.coerce.number().int().min(0), 
    r2b:  z.coerce.number().int().min(0), 
    r3b:  z.coerce.number().int().min(0), 
    r4b:  z.coerce.number().int().min(0), 
    r5b:  z.coerce.number().int().min(0), 
    r6b:  z.coerce.number().int().min(0), 
    r7b:  z.coerce.number().int().min(0), 
    r8b:  z.coerce.number().int().min(0), 
    r9b:  z.coerce.number().int().min(0), 
    r10b: z.coerce.number().int().min(0), 
    r11b: z.coerce.number().int().min(0), 
    r12b: z.coerce.number().int().min(0), 
    r13b: z.coerce.number().int().min(0), 

})

/*
o  = occupantCount
cm = currentMonth
b  = bill
*/
