import { useContext } from "react"
import { BillContext } from "../../Context/BillsContext"

import InputElement from "../InputElement"

type PropertyBillsComponentProps = {
    heading: string
}

export default function PropertyBillsComponent (PropertyBillsComponentProps : PropertyBillsComponentProps) {
    const value = useContext(BillContext);
    return (
        <div className="flex flex-col gap-1 mb-5">
            <h1 className="text-2xl">{PropertyBillsComponentProps.heading}</h1>
            <InputElement placeholder="Bill 1 Amount" name="b1" value={value.data.b1}/>
            <InputElement placeholder="Bill 2 Amount" name="b2" value={value.data.b2}/>
            <InputElement placeholder="Bill 3 Amount" name="b3" value={value.data.b3}/>
        </div>
    )
}