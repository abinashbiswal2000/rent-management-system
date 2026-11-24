export default function tableStructure(
    roomNumber: number,
    prev: number,
    curr: number,
    occupantCount: number,
    waterRate: number
) {
    return {
        roomNumber: roomNumber,
        prev: prev,
        curr: curr,
        unitsConsumed: 0,
        baseCap: 0,
        baseUnits: 0,
        baseRate: 0,
        basePrice: 0,
        extraUnits: 0,
        extraRate: 0,
        extraPrice: 0,
        waterRate: waterRate,
        occupantCount: occupantCount,
        waterPrice: 0,
        totalPrice: 0
    }
}