import { useContext } from "react"
import { BillContext } from "../../Context/BillsContext"

import InputElement from "../InputElement"

type PrevMonthComponentProps = {
    heading: string
}

export default function PrevMonthComponent (PrevMonthComponentProps: PrevMonthComponentProps) {
    const value = useContext(BillContext);
    return (
        <div className="flex flex-col gap-1 mb-5">
            <h1 className="text-2xl">{PrevMonthComponentProps.heading}</h1>
            <InputElement placeholder="Room 1 Readings (Previous Month)" name="r1pm" value={value.data.r1pm}/>
            <InputElement placeholder="Room 2 Readings (Previous Month)" name="r2pm" value={value.data.r2pm}/>
            <InputElement placeholder="Room 3 Readings (Previous Month)" name="r3pm" value={value.data.r3pm}/>
            <InputElement placeholder="Room 4 Readings (Previous Month)" name="r4pm" value={value.data.r4pm}/>
            <InputElement placeholder="Room 5 Readings (Previous Month)" name="r5pm" value={value.data.r5pm}/>
            <InputElement placeholder="Room 6 Readings (Previous Month)" name="r6pm" value={value.data.r6pm}/>
            <InputElement placeholder="Room 7 Readings (Previous Month)" name="r7pm" value={value.data.r7pm}/>
            <InputElement placeholder="Room 8 Readings (Previous Month)" name="r8pm" value={value.data.r8pm}/>
            <InputElement placeholder="Room 9 Readings (Previous Month)" name="r9pm" value={value.data.r9pm}/>
            <InputElement placeholder="Room 10 Readings (Previous Month)" name="r10pm" value={value.data.r10pm}/>
            <InputElement placeholder="Room 11 Readings (Previous Month)" name="r11pm" value={value.data.r11pm}/>
            <InputElement placeholder="Room 12 Readings (Previous Month)" name="r12pm" value={value.data.r12pm}/>
            <InputElement placeholder="Room 13 Readings (Previous Month)" name="r13pm" value={value.data.r13pm}/>
        </div>
    )
}