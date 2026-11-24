import { dateObj } from "../Utils/currPrevMonthYear";
import calculate from "../Utils/calculate";

import { BounceLoader } from "react-spinners";

import { Navigate } from "react-router";

import PrevMonthComponent from "../Components/CalculationBillsPageComponents/PrevMonthComponent";
import OccupantsComponent from "../Components/CalculationBillsPageComponents/OccupantsComponent";
import CurrMonthComponent from "../Components/CalculationBillsPageComponents/CurrMonthComponent";
import PropertyBillsComponent from "../Components/CalculationBillsPageComponents/PropertyBillsComponent";
import PricingRulesComponent from "../Components/CalculationBillsPageComponents/PricingRulesComponent";
import ResultsComponent from "../Components/CalculationBillsPageComponents/ResultsComponent";
import { BillContext } from "../Context/BillsContext"

import { useState, useEffect } from "react";

export default function CalculationBillsPage() {

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const d = calculate(data);
        setRent(d);
        alert(d.message);
    }

    async function handleUpdateDB() {

        const d = rent;

        const yearMonth = dateObj.curr();

        const response2 = await fetch(
            `http://localhost:3000/transaction`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(
                    {
                        "yearMonth": yearMonth,
                        "r1o": data.r1o, "r2o": data.r2o, "r3o": data.r3o, "r4o": data.r4o, "r5o": data.r5o, "r6o": data.r6o, "r7o": data.r7o, "r8o": data.r8o, "r9o": data.r9o, "r10o": data.r10o, "r11o": data.r11o, "r12o": data.r12o, "r13o": data.r13o,
                        "r1cm": data.r1cm, "r2cm": data.r2cm, "r3cm": data.r3cm, "r4cm": data.r4cm, "r5cm": data.r5cm, "r6cm": data.r6cm, "r7cm": data.r7cm, "r8cm": data.r8cm, "r9cm": data.r9cm, "r10cm": data.r10cm, "r11cm": data.r11cm, "r12cm": data.r12cm, "r13cm": data.r13cm,
                        "r1b": d.table1[0], "r2b": d.table1[1], "r3b": d.table1[2], "r4b": d.table1[3], "r5b": d.table1[4], "r6b": d.table1[5], "r7b": d.table1[6], "r8b": d.table1[7], "r9b": d.table1[8], "r10b": d.table1[9], "r11b": d.table1[10], "r12b": d.table1[11], "r13b": d.table1[12]
                    }
                )
            }
        )
        if (response2.ok === true) {
            alert("DB Updated Successfully");
        } else {
            alert("Could not update DB.")
        }
    }

    const obj = {
        room: 0,
        occupant: 0,
        previousMonth: 0,
        currentMonth: 0,
        units: 0,
        waterRate: 0,
        waterBill: 0,
        waterUnits: 0,
        electricityUnits: 0,
        electricityRate: 0,
        electricityBill: 0,
        totalBill: 0
    }
    const [rent, setRent] = useState(
        {
            table1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            table2: [obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj],
            message: "",
            success: false
        }

    );

    const [data, setData] = useState({
        "r1o": "", "r2o": "", "r3o": "", "r4o": "", "r5o": "", "r6o": "", "r7o": "", "r8o": "", "r9o": "", "r10o": "", "r11o": "", "r12o": "", "r13o": "",
        "r1pm": "", "r2pm": "", "r3pm": "", "r4pm": "", "r5pm": "", "r6pm": "", "r7pm": "", "r8pm": "", "r9pm": "", "r10pm": "", "r11pm": "", "r12pm": "", "r13pm": "",
        "r1cm": "", "r2cm": "", "r3cm": "", "r4cm": "", "r5cm": "", "r6cm": "", "r7cm": "", "r8cm": "", "r9cm": "", "r10cm": "", "r11cm": "", "r12cm": "", "r13cm": "",
        "b1": "",
        "b2": "",
        "b3": "",
        "wppp": ""
    });

    function handleChnage(e: React.ChangeEvent<HTMLInputElement>) {
        setData(
            (prev) => {
                return { ...prev, [e.target.name]: e.target.value }
            }
        )
    }

    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            async function f() {                

                const yearMonth = dateObj.prev();

                const response2 = await fetch(
                    `http://localhost:3000/getOccupant2`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        },
                        body: JSON.stringify(
                            {
                                yearMonth: yearMonth
                            }

                        )
                    }
                )
                console.log({yearMonth: yearMonth}, response2.ok);
                const d2 = await response2.json();
                setData(
                    (prev) => {
                        return {
                            ...prev,
                            r1o: d2.data.r1,
                            r2o: d2.data.r2,
                            r3o: d2.data.r3,
                            r4o: d2.data.r4,
                            r5o: d2.data.r5,
                            r6o: d2.data.r6,
                            r7o: d2.data.r7,
                            r8o: d2.data.r8,
                            r9o: d2.data.r9,
                            r10o: d2.data.r10,
                            r11o: d2.data.r11,
                            r12o: d2.data.r12,
                            r13o: d2.data.r13,
                        }
                    }
                );
                const response3 = await fetch(
                    `http://localhost:3000/getMeterReading2`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        },
                        body: JSON.stringify(
                            {
                                "yearMonth": yearMonth
                            }

                        )
                    }
                )
                const d3 = await response3.json();
                setData(
                    (prev) => {
                        return {
                            ...prev,
                            r1pm: d3.data.r1,
                            r2pm: d3.data.r2,
                            r3pm: d3.data.r3,
                            r4pm: d3.data.r4,
                            r5pm: d3.data.r5,
                            r6pm: d3.data.r6,
                            r7pm: d3.data.r7,
                            r8pm: d3.data.r8,
                            r9pm: d3.data.r9,
                            r10pm: d3.data.r10,
                            r11pm: d3.data.r11,
                            r12pm: d3.data.r12,
                            r13pm: d3.data.r13,
                        }
                    }
                );
            }
            try {
                setLoading(true);
                f();
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        },
        []
    );

    if (localStorage.getItem("token") == null) {
        return <Navigate to="/loginPage" />
    }

    if (loading == true) {
        return <BounceLoader className="mx-auto mt-30" color="#000000" />
    }
    
    return (
        <BillContext.Provider value={{ data: data, onChange: handleChnage }}>
           
            <form action=""
                className="max-w-2xl border border-gray-300 rounded-lg m-1 flex flex-col mx-auto gap-2 p-2"
                onSubmit={handleSubmit}
            >

                <OccupantsComponent heading="Occupants Count" />
                <PrevMonthComponent heading="Previous Month Readings" />
                <CurrMonthComponent heading="Current Month Reading" />
                <PropertyBillsComponent heading="Property Bills" />
                <PricingRulesComponent heading="Pricing Rules" />

                <button type="submit" className="bg-black text-white p-3 cursor-pointer hover:bg-gray-700 transition duration-300"> Calculate</button>

                {rent.success && < ResultsComponent rent={rent} />}

                {rent.success && <button type="button" onClick={handleUpdateDB} className="bg-black text-white p-3 cursor-pointer hover:bg-gray-700 transition duration-300"> Update Database</button>}

            </form>

        </BillContext.Provider>
    )

}