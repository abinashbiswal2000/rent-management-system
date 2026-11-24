import { useContext } from "react";
import { BillContext } from "../Context/BillsContext";

type InputElementProps = {
    placeholder: string,
    name: string,
    disabled?: boolean,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputElement(InputElementProps: InputElementProps) {

    const value = useContext(BillContext);

    const inputClassName = `rounded border border-gray-300 focus:outline-orange-300 p-3 w-full h-full ${InputElementProps.disabled ? "bg-gray-100 cursor-not-allowed text-gray-500" : ""}`;

    return (
        <div>
            <h1>{InputElementProps.placeholder}</h1>
            <input
                type="number"
                className={inputClassName}
                placeholder={InputElementProps.placeholder}
                name={InputElementProps.name}
                value={InputElementProps.value}
                onChange={value.onChange}
                disabled={InputElementProps.disabled}
            />
        </div>
    )
}