import { useContext } from "react"
import { BillContext } from "../../Context/BillsContext"

import InputElement from "../InputElement"

type PricingRulesComponentProps = {
    heading: string
}

export default function PricingRulesComponent (PricingRulesComponentProps: PricingRulesComponentProps) {
    const value = useContext(BillContext);
    return (
        <div className="flex flex-col gap-1 mb-5">
            <h1 className="text-2xl">{PricingRulesComponentProps.heading}</h1>
            <InputElement placeholder="Water Price per Person" name="wppp" value={value.data.wppp}/>
        </div>
    )
}