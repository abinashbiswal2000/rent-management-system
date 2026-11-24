import { useContext } from "react"
import { BillContext } from "../../Context/BillsContext"

import InputElement from "../InputElement"

type OccupantsComponentProps = {
    heading: string
}

export default function OccupantsComponent (OccupantsComponentProps : OccupantsComponentProps) {
    const value = useContext(BillContext);
    return (
        <div className="flex flex-col gap-1 mb-5">
            <h1 className="text-2xl">{OccupantsComponentProps.heading}</h1>
            <InputElement placeholder="Room 1 Occupants" name="r1o" value={value.data.r1o}/>
            <InputElement placeholder="Room 2 Occupants" name="r2o" value={value.data.r2o}/>
            <InputElement placeholder="Room 3 Occupants" name="r3o" value={value.data.r3o}/>
            <InputElement placeholder="Room 4 Occupants" name="r4o" value={value.data.r4o}/>
            <InputElement placeholder="Room 5 Occupants" name="r5o" value={value.data.r5o}/>
            <InputElement placeholder="Room 6 Occupants" name="r6o" value={value.data.r6o}/>
            <InputElement placeholder="Room 7 Occupants" name="r7o" value={value.data.r7o}/>
            <InputElement placeholder="Room 8 Occupants" name="r8o" value={value.data.r8o}/>
            <InputElement placeholder="Room 9 Occupants" name="r9o" value={value.data.r9o}/>
            <InputElement placeholder="Room 10 Occupants" name="r10o" value={value.data.r10o}/>
            <InputElement placeholder="Room 11 Occupants" name="r11o" value={value.data.r11o}/>
            <InputElement placeholder="Room 12 Occupants" name="r12o" value={value.data.r12o}/>
            <InputElement placeholder="Room 13 Occupants" name="r13o" value={value.data.r13o}/>
        </div>
    )
}