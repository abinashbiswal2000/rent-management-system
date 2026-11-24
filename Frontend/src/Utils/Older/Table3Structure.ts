export default function t (r: number, o: number, wr: number, pm: number, cm: number) {
    return {
        room: r,           // rate
        occupant: o,           // occupant
        waterRate: wr,         // water rate
        waterBill: o * wr,     // water price
        waterUnits: 0,          // water unit
        previousMonth: pm,         // previous month
        currentMonth: cm,         // current month
        units: cm - pm,     // units consumed
        electricityUnits: 0,
        electricityRate: 0,          // electricity rate
        electricityBill: 0,          // electricity price
        totalBill: 0           // total price
    }
}