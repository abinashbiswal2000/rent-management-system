import { format } from "date-fns"
import { toPng } from "html-to-image"
import { useRef } from "react"

type ResultsComponentProps = {
    rent: {
        table1: number[],
        table2: {
            room: number,
            occupant: number,
            previousMonth: number,
            currentMonth: number,
            units: number,
            waterRate: number,
            waterBill: number,
            waterUnits: number,
            electricityUnits: number,
            electricityRate: number,
            electricityBill: number,
            totalBill: number
        }[],
        message: string,
        success: boolean
    },
}

export default function ResultsComponent(ResultsComponentProps: ResultsComponentProps) {
    const cname = "border border-gray-300 p-2"
    const targetTableRef = useRef(null);
    async function handleDownload() {
        if (targetTableRef.current == null) {
            return;
        }
        try {
            const dataUrl = await toPng(targetTableRef.current, {
                backgroundColor: "#ffffff",
                pixelRatio: 2,
            })
            const link = document.createElement("a")
            link.download = `utility-bills-${format(new Date(), "MMM-yyyy")}.png`
            link.href = dataUrl
            link.click()
        } catch (err) {
            console.error("Failed to generate image", err)
        }
    }
    return (
        <>
            <div className="overflow-x-auto w-full p-1">
                <h1 className="mt-5 text-2xl">Utility Bill Details:  {format(new Date(), 'MMMM - yyyy')}</h1>
                <table className="text-left w-full min-w-[600px]">
                    <thead>
                        <tr>
                            <th className={cname}>Room Number</th>
                            <th className={cname}>Occupants</th>
                            <th className={cname}>Units</th>
                            <th className={cname}>Electricity</th>
                            <th className={cname}>Water</th>
                            <th className={cname}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ResultsComponentProps.rent.table2.map(
                                (value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className={cname}>{value.room}</td>
                                            <td className={cname}>{value.occupant}</td>
                                            <td className={cname}>{value.units}</td>
                                            <td className={cname}>{'\u20B9'} {Math.floor(value.electricityBill)}</td>
                                            <td className={cname}>{'\u20B9'} {value.waterBill}</td>
                                            <td className={cname}>{'\u20B9'} {value.totalBill}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div ref={targetTableRef} className="w-full p-1">
                <h1 className="mt-5 text-2xl w-full">Utility Bills:  {format(new Date(), 'MMMM - yyyy')}</h1>
                <table className="text-left w-full">
                    <thead>
                        <tr>
                            <th className={cname}>Room Number</th>
                            <th className={cname}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ResultsComponentProps.rent.table1.map(
                                (value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className={cname}>{index + 1}</td>
                                            <td className={cname}>{'\u20B9'} {value}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
            <button type="button" onClick={handleDownload} className="bg-black text-white p-3 cursor-pointer hover:bg-gray-700 transition duration-300">Donwload</button>            
        </>
    )
}