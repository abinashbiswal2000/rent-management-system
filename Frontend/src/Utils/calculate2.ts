function t (r: number, o: number, wr: number, pm: number, cm: number) {
    return {
        room: r,                // rate
        occupant: o,            // occupant
        previousMonth: pm,      // previous month
        currentMonth: cm,       // current month
        units: cm - pm,         // units consumed
        waterRate: wr,          // water rate
        waterBill: o * wr,      // water price
        waterUnits: 0,          // water unit
        electricityUnits: 0,
        electricityRate: 0,     // electricity rate
        electricityBill: 0,     // electricity price
        totalBill: 0            // total price
    }
}

type dataType = {
    "r1o": string, "r2o": string, "r3o": string, "r4o": string, "r5o": string, "r6o": string, "r7o": string, "r8o": string, "r9o": string, "r10o": string, "r11o": string, "r12o": string, "r13o": string,
    "r1pm": string, "r2pm": string, "r3pm": string, "r4pm": string, "r5pm": string, "r6pm": string, "r7pm": string, "r8pm": string, "r9pm": string, "r10pm": string, "r11pm": string, "r12pm": string, "r13pm": string,
    "r1cm": string, "r2cm": string, "r3cm": string, "r4cm": string, "r5cm": string, "r6cm": string, "r7cm": string, "r8cm": string, "r9cm": string, "r10cm": string, "r11cm": string, "r12cm": string, "r13cm": string,
    "b1": string, 
    "b2": string, 
    "b3": string, 
    "wppp": string
}

export default function calculate(data: dataType) {

    // Check for bad Inputs
    for (const [key, value] of Object.entries(data)) {
        if (String(value).trim() === "" || Number(value) < 0 || Number.isNaN(Number(value))) {
            return {
                success: false,
                table1: [],
                table2: [],
                message: `The value of ${key} is ${value}. Values cannot be "", negative or alphabets`
            }
        }
    }
    const result = {
        success: true,
        message: "All Good",
        table1: [0,0,0,0,0,0,0,0,0,0,0,0,0],
        table2: [
            t(1, Number(data.r1o), Number(data.wppp), Number(data.r1pm), Number(data.r1cm)),
            t(2, Number(data.r2o), Number(data.wppp), Number(data.r2pm), Number(data.r2cm)),
            t(3, Number(data.r3o), Number(data.wppp), Number(data.r3pm), Number(data.r3cm)),
            t(4, Number(data.r4o), Number(data.wppp), Number(data.r4pm), Number(data.r4cm)),
            t(5, Number(data.r5o), Number(data.wppp), Number(data.r5pm), Number(data.r5cm)),
            t(6, Number(data.r6o), Number(data.wppp), Number(data.r6pm), Number(data.r6cm)),
            t(7, Number(data.r7o), Number(data.wppp), Number(data.r7pm), Number(data.r7cm)),
            t(8, Number(data.r8o), Number(data.wppp), Number(data.r8pm), Number(data.r8cm)),
            t(9, Number(data.r9o), Number(data.wppp), Number(data.r9pm), Number(data.r9cm)),
            t(10, Number(data.r10o), Number(data.wppp), Number(data.r10pm), Number(data.r10cm)),
            t(11, Number(data.r11o), Number(data.wppp), Number(data.r11pm), Number(data.r11cm)),
            t(12, Number(data.r12o), Number(data.wppp), Number(data.r12pm), Number(data.r12cm)),
            t(13, Number(data.r13o), Number(data.wppp), Number(data.r13pm), Number(data.r13cm)),
        ]
    }

    // Check if units are negative
    for (let i = 0; i < 13; i++) {
        if ( result.table2[i].units < 0 ) {
            return {
                success: false,
                table1: [],
                table2: [],
                message: `Current Month reading of Room ${result.table2[i].room} should be greater than the previous month's reading.`
            }
        }
    }
   
    // check if water units subtracted makes the units negative
    let x = 0;
    for (let i = 0; i < 13; i++) {
        x += result.table2[i].units;
    }

    const totalBill = Number(data.b1) + Number(data.b2) + Number(data.b3);
    const totalUnits = x;
    const unitsFor1Rupee = totalUnits / totalBill;

    // console.log(`unitsFor1Rupee = totalBill / totalUnits \n=> ${unitsFor1Rupee} = ${totalBill} / ${totalUnits}`)
   
    for (let i = 0; i < 13; i++) {

        const waterUnits = unitsFor1Rupee * result.table2[i].waterBill;
        result.table2[i].waterUnits = waterUnits;

        const electricityUnits = result.table2[i].units;
        result.table2[i].electricityUnits = electricityUnits;

        if (electricityUnits < 0) {
            return {
                success: false,
                table1: [],
                table2: [],
                message: `Decrease the water rate as the electricity units of room ${i+1} have gone below zero`
            }
        }


    }


    // Finding Electricity Rate
    let totalElectricityBill = totalBill;
    for (let i = 0; i < 13; i++) {
        totalElectricityBill -= result.table2[i].waterBill;
    }
    const electricityRate = totalElectricityBill / totalUnits;


    // Finding Electricity Bill
    for (let i = 0; i < 13; i++) {        
        result.table2[i].electricityRate = electricityRate;
        result.table2[i].electricityBill = electricityRate * result.table2[i].electricityUnits;
    }

    // Total Bill
    for (let i = 0; i < 13; i++) {
        const electricityBill = result.table2[i].electricityBill;
        const waterBill = result.table2[i].waterBill;
        const totalBill = Math.floor(electricityBill + waterBill);
        result.table2[i].totalBill = totalBill;
        result.table1[i] = totalBill;
    }

    let s = 0;

    for (let i = 0; i < 13; i++) {
        s += result.table1[i];
    }

    result.message = `Total Amount = ${Number(data.b1) + Number(data.b2) + Number(data.b3)}\nAmount Collected = ${s}`

    return result;

}

