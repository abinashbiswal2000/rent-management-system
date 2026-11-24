type InputElementProps = {
    placeholder: string,
    name: string,
    value: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputElement2(InputElementProps: InputElementProps) {


    const inputClassName = `rounded border border-gray-300 focus:outline-orange-300 p-3 w-full h-full}`;

    return (
        <div>
            <h1>{InputElementProps.placeholder}</h1>
            <input

                type="number"
                className={inputClassName}

                placeholder={InputElementProps.placeholder}
                name={InputElementProps.name}
                value={InputElementProps.value}
                onChange={InputElementProps.onChange}

            />
        </div>
    )
}