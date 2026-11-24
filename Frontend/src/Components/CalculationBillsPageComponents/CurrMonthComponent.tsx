import { useContext } from "react"
import { BillContext } from "../../Context/BillsContext"

import InputElement from "../InputElement"

type CurrMonthComponentProps = {
    heading: string
}

export default function CurrMonthComponent (CurrMonthComponentProps: CurrMonthComponentProps) {
    const value = useContext(BillContext);
    return (
        <div className="flex flex-col gap-1 mb-5">
            <h1 className="text-2xl">{CurrMonthComponentProps.heading}</h1>
            <InputElement placeholder="Room 1 Readings (Current Month)" name="r1cm" value={value.data.r1cm}/>
            <InputElement placeholder="Room 2 Readings (Current Month)" name="r2cm" value={value.data.r2cm}/>
            <InputElement placeholder="Room 3 Readings (Current Month)" name="r3cm" value={value.data.r3cm}/>
            <InputElement placeholder="Room 4 Readings (Current Month)" name="r4cm" value={value.data.r4cm}/>
            <InputElement placeholder="Room 5 Readings (Current Month)" name="r5cm" value={value.data.r5cm}/>
            <InputElement placeholder="Room 6 Readings (Current Month)" name="r6cm" value={value.data.r6cm}/>
            <InputElement placeholder="Room 7 Readings (Current Month)" name="r7cm" value={value.data.r7cm}/>
            <InputElement placeholder="Room 8 Readings (Current Month)" name="r8cm" value={value.data.r8cm}/>
            <InputElement placeholder="Room 9 Readings (Current Month)" name="r9cm" value={value.data.r9cm}/>
            <InputElement placeholder="Room 10 Readings (Current Month)" name="r10cm" value={value.data.r10cm}/>
            <InputElement placeholder="Room 11 Readings (Current Month)" name="r11cm" value={value.data.r11cm}/>
            <InputElement placeholder="Room 12 Readings (Current Month)" name="r12cm" value={value.data.r12cm}/>
            <InputElement placeholder="Room 13 Readings (Current Month)" name="r13cm" value={value.data.r13cm
                
            }/>
        </div>
    )
}