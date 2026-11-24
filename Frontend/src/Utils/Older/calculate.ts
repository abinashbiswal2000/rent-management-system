import tableStructure from "./table2Structure"

export function calculate(
    data: {
        "r1o": string, "r2o": string, "r3o": string, "r4o": string, "r5o": string, "r6o": string, "r7o": string, "r8o": string, "r9o": string, "r10o": string, "r11o": string, "r12o": string, "r13o": string,
        "r1pm": string, "r2pm": string, "r3pm": string, "r4pm": string, "r5pm": string, "r6pm": string, "r7pm": string, "r8pm": string, "r9pm": string, "r10pm": string, "r11pm": string, "r12pm": string, "r13pm": string,
        "r1cm": string, "r2cm": string, "r3cm": string, "r4cm": string, "r5cm": string, "r6cm": string, "r7cm": string, "r8cm": string, "r9cm": string, "r10cm": string, "r11cm": string, "r12cm": string, "r13cm": string,
        "b1": string, "u1": string,
        "b2": string, "u2": string,
        "b3": string, "u3": string,
        "wppp": ""
    }
) {
    // Step 1 = Set Room number,
    // Step 2 = Set previous month reading
    // Step 3 = Set current month reading
    // Step 12 = Set Water rate or water price per person
    // Step 13 = Set Occupant count
    const output = {
        table1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        table2: [
            tableStructure(1, Number(data.r1pm), Number(data.r1cm), Number(data.r1o), Number(data.wppp)),
            tableStructure(2, Number(data.r2pm), Number(data.r2cm), Number(data.r2o), Number(data.wppp)),
            tableStructure(3, Number(data.r3pm), Number(data.r3cm), Number(data.r3o), Number(data.wppp)),
            tableStructure(4, Number(data.r4pm), Number(data.r4cm), Number(data.r4o), Number(data.wppp)),
            tableStructure(5, Number(data.r5pm), Number(data.r5cm), Number(data.r5o), Number(data.wppp)),
            tableStructure(6, Number(data.r6pm), Number(data.r6cm), Number(data.r6o), Number(data.wppp)),
            tableStructure(7, Number(data.r7pm), Number(data.r7cm), Number(data.r7o), Number(data.wppp)),
            tableStructure(8, Number(data.r8pm), Number(data.r8cm), Number(data.r8o), Number(data.wppp)),
            tableStructure(9, Number(data.r9pm), Number(data.r9cm), Number(data.r9o), Number(data.wppp)),
            tableStructure(10, Number(data.r10pm), Number(data.r10cm), Number(data.r10o), Number(data.wppp)),
            tableStructure(11, Number(data.r11pm), Number(data.r11cm), Number(data.r11o), Number(data.wppp)),
            tableStructure(12, Number(data.r12pm), Number(data.r12cm), Number(data.r12o), Number(data.wppp)),
            tableStructure(13, Number(data.r13pm), Number(data.r13cm), Number(data.r13o), Number(data.wppp)),
        ],
        success: true,
        message: ""
    }
    // Setting unitsConsumed (step 4)
    for (let i = 0; i < 13; i++) {
        const pm = output.table2[i].prev;
        const cm = output.table2[i].curr;
        output.table2[i].unitsConsumed = cm - pm;
    }

    // setting base cap (step 5)
    let unitsConsumed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    for (let i = 0; i < 13; i++) {
        unitsConsumed[i] = output.table2[i].unitsConsumed;
    }
    unitsConsumed.sort((a, b) => a - b);
    const median = unitsConsumed[6];
    for (let i = 0; i < 13; i++) {
        output.table2[i].baseCap = median;
    }

    // Setting Base Units (step 6)
    for (let i = 0; i < 13; i++) {
        const unitsConsumed = output.table2[i].unitsConsumed;
        const baseCap = output.table2[i].baseCap;
        output.table2[i].baseUnits = Math.min(baseCap, unitsConsumed);
    }

    // Setting Base Rate (step 7)
    const b1 = Number(data.b1);
    const b2 = Number(data.b2);
    const b3 = Number(data.b3);

    const u1 = Number(data.u1);
    const u2 = Number(data.u2);
    const u3 = Number(data.u3);

    const ppu1 = b1 / u1;
    const ppu2 = b2 / u2;
    const ppu3 = b3 / u3;

    const baseRate = Math.floor(Math.min(ppu1, ppu2, ppu3));

    for (let i = 0; i < 13; i++) {
        output.table2[i].baseRate = baseRate;
    }

    // Setting Base Price (step 8)
    for (let i = 0; i < 13; i++) {
        const bu = output.table2[i].baseUnits;
        const br = output.table2[i].baseRate;
        output.table2[i].basePrice = bu * br;
    }

    // Set Extra Units (step 9)
    for (let i = 0; i < 13; i++) {
        const unitsConsumed = output.table2[i].unitsConsumed;
        const baseUnits = output.table2[i].baseUnits;
        output.table2[i].extraUnits = unitsConsumed - baseUnits;

    }

    // Setting extra rate. (step 10)
    // Step 10.1 = Find totalWaterPrice
    let totalOccupantCount = 0;
    for (let i = 0; i < 13; i++) {
        totalOccupantCount += output.table2[i].occupantCount;
    }
    const totalWaterPrice = Number(data.wppp) * totalOccupantCount;

    // Step 10.2 = Find totalBasePrice
    let tbp = 0;
    for (let i = 0; i < 13; i++) {
        tbp += output.table2[i].basePrice;
    }
    const totalBasePrice = tbp;

    // Step 10.3 = Find totalBill;
    const totalBill = b1 + b2 + b3;

    // Step 10.4 = Find extraPrice = TotalBill - totalBasePrice - totalWaterPrice
    const totalExtraPrice = totalBill - totalBasePrice - totalWaterPrice;

    // Step 10.5 = find totalExtraUnits;
    let teu = 0;
    for (let i = 0; i < 13; i++) {
        teu += output.table2[i].extraUnits;
    }
    const totalExtraUnits = teu;

    // Step 10.6 = extraRate
    
    const extraRate = totalExtraPrice / totalExtraUnits;

    // 10.7 = Check for boundary condition
    if (baseRate >= extraRate) {
        return {
            success: false,
            table1: [],
            table2: [],
            message: `Base Rate = ${baseRate}\nExtra Rate = ${extraRate}\nBase Rate Should always be < Extra Rate\nDecrease the water rate to increase the extra rate.`
        }
    }

    for (let i = 0; i < 13; i++) {
        output.table2[i].extraRate = extraRate;
    }

    // Step 11 = Set extraPrice
    for (let i = 0; i < 13; i++) {
        const eu = output.table2[i].extraUnits;
        const er = output.table2[i].extraRate;
        output.table2[i].extraPrice = eu * er;
    }

    // Step 12 = Set Water Rate - Completed during initialization
    // Step 13 = Set Occupant Count - Completed during initialization

    // Set Water Price (Step 14)
    for (let i = 0; i < 13; i++) {
        const wr = output.table2[i].waterRate;
        const oc = output.table2[i].occupantCount;
        output.table2[i].waterPrice = wr * oc;
    }

    // Set totalPrice (step 15)
    for (let i = 0; i < 13; i++) {
        const bp = output.table2[i].basePrice;
        const ep = output.table2[i].extraPrice;
        const wp = output.table2[i].waterPrice;
        const tp = bp + ep + wp;
        output.table2[i].totalPrice = tp
        output.table1[i] = tp;
    }

    return output;

}