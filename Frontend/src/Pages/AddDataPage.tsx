import InputElement2 from "../Components/InputElement2";
import { useState } from "react";

export default function AddDataPage() {

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (obj.r1 === "" || obj.r2 === "" || obj.r3 === "" || obj.r4 === "" || obj.r5 === "" || obj.r6 === "" || obj.r7 === "" || obj.r8 === "" || obj.r9 === "" || obj.r10 === "" || obj.r11 === "" || obj.r12 === "" || obj.r13 === "") {
            alert("Every Field must be filled");
        } else {            
            const response = await fetch(
                `http://localhost:3000/${category}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(
                        {
                            "yearMonth": `${year}-${month}`,
                            "r1": Number(obj.r1),
                            "r2": Number(obj.r2),
                            "r3": Number(obj.r3),
                            "r4": Number(obj.r4),
                            "r5": Number(obj.r5),
                            "r6": Number(obj.r6),
                            "r7": Number(obj.r7),
                            "r8": Number(obj.r8),
                            "r9": Number(obj.r9),
                            "r10": Number(obj.r10),
                            "r11": Number(obj.r11),
                            "r12": Number(obj.r12),
                            "r13": Number(obj.r13)
                        }
                    )
                }
            )
            if (response.ok === true) {
                alert("Data Added to DB Successfully");
            } else {
                alert("Failure to Add data");
            }
        }
    }

    const [category, setCategory] = useState("addOccupant");
    const [year, setYear] = useState(`${new Date().getFullYear()}`);
    const [month, setMonth] = useState("01");
    const [obj, setObj] = useState({
        "r1": "",
        "r2": "",
        "r3": "",
        "r4": "",
        "r5": "",
        "r6": "",
        "r7": "",
        "r8": "",
        "r9": "",
        "r10": "",
        "r11": "",
        "r12": "",
        "r13": "",
    })
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setObj(
            (prev) => {
                return { ...prev, [e.target.name]: e.target.value }
            }
        );
    }

    return (
        <form action=""
            className="max-w-2xl border border-gray-300 rounded-lg m-1 flex flex-col mx-auto gap-2 p-2"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl">Add Data</h1>
            <h1>Choose Category</h1>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 focus:outline-orange-300 rounded px-3 py-2"
            >
                <option value="addOccupant">Occupants</option>
                <option value="addMeterReading">Meter</option>
                <option value="addRoomBill">Bill</option>
            </select>

            <h1>Choose Year</h1>
            <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="border border-gray-300 focus:outline-orange-300 rounded px-3 py-2"
            >
                <option value={`${new Date().getFullYear()}`}>{new Date().getFullYear()}</option>
                <option value={`${new Date().getFullYear() - 1}`}>{new Date().getFullYear() - 1}</option>
            </select>

            <h1>Choose Month</h1>
            <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="border border-gray-300 focus:outline-orange-300 rounded px-3 py-2"
            >
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>

            <InputElement2 name="r1" placeholder="Room 1" value={obj.r1} onChange={handleChange} />
            <InputElement2 name="r2" placeholder="Room 2" value={obj.r2} onChange={handleChange} />
            <InputElement2 name="r3" placeholder="Room 3" value={obj.r3} onChange={handleChange} />
            <InputElement2 name="r4" placeholder="Room 4" value={obj.r4} onChange={handleChange} />
            <InputElement2 name="r5" placeholder="Room 5" value={obj.r5} onChange={handleChange} />
            <InputElement2 name="r6" placeholder="Room 6" value={obj.r6} onChange={handleChange} />
            <InputElement2 name="r7" placeholder="Room 7" value={obj.r7} onChange={handleChange} />
            <InputElement2 name="r8" placeholder="Room 8" value={obj.r8} onChange={handleChange} />
            <InputElement2 name="r9" placeholder="Room 9" value={obj.r9} onChange={handleChange} />
            <InputElement2 name="r10" placeholder="Room 10" value={obj.r10} onChange={handleChange} />
            <InputElement2 name="r11" placeholder="Room 11" value={obj.r11} onChange={handleChange} />
            <InputElement2 name="r12" placeholder="Room 12" value={obj.r12} onChange={handleChange} />
            <InputElement2 name="r13" placeholder="Room 13" value={obj.r13} onChange={handleChange} />

            <button type="submit" className="bg-black text-white p-3 cursor-pointer hover:bg-gray-700 transition duration-300">Add Data to DB</button>
        </form>
    )
}