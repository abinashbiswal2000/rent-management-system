import { createContext } from "react";

const initialValue = {
    "r1o": "", "r2o": "", "r3o": "", "r4o": "", "r5o": "", "r6o": "", "r7o": "", "r8o": "", "r9o": "", "r10o": "", "r11o": "", "r12o": "", "r13o": "",
    "r1pm": "", "r2pm": "", "r3pm": "", "r4pm": "", "r5pm": "", "r6pm": "", "r7pm": "", "r8pm": "", "r9pm": "", "r10pm": "", "r11pm": "", "r12pm": "", "r13pm": "",
    "r1cm": "", "r2cm": "", "r3cm": "", "r4cm": "", "r5cm": "", "r6cm": "", "r7cm": "", "r8cm": "", "r9cm": "", "r10cm": "", "r11cm": "", "r12cm": "", "r13cm": "",
    "b1": "", 
    "b2": "", 
    "b3": "", 
    "wppp": "",
}

export const BillContext = createContext(
    {
        data: {
            "r1o": "", "r2o": "", "r3o": "", "r4o": "", "r5o": "", "r6o": "", "r7o": "", "r8o": "", "r9o": "", "r10o": "", "r11o": "", "r12o": "", "r13o": "",
            "r1pm": "", "r2pm": "", "r3pm": "", "r4pm": "", "r5pm": "", "r6pm": "", "r7pm": "", "r8pm": "", "r9pm": "", "r10pm": "", "r11pm": "", "r12pm": "", "r13pm": "",
            "r1cm": "", "r2cm": "", "r3cm": "", "r4cm": "", "r5cm": "", "r6cm": "", "r7cm": "", "r8cm": "", "r9cm": "", "r10cm": "", "r11cm": "", "r12cm": "", "r13cm": "",
            "b1": "",
            "b2": "",
            "b3": "",
            "wppp": ""
        },
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => { }
    }
);