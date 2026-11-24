import InputElement2 from "../Components/InputElement2";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import { BounceLoader } from "react-spinners";

export default function EditDeletePage() {

    const { categoryParam, id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            async function f() {

                setLoading(true);

                const response = await fetch(
                    `http://localhost:3000/get${categoryParam}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        },
                        body: JSON.stringify({
                            id: Number(id)
                        })
                    }
                )

                if (!response.ok) {
                    alert("Enter ID doesn't exist");
                    navigate(-1);
                }

                const d = await response.json();

                if (categoryParam === "MeterReading") {
                    setCategory("editMeterReading");
                } else if (categoryParam === "Occupant") {
                    setCategory("editOccupant");
                } else if (categoryParam === "RoomBill") {
                    setCategory("editRoomBill");
                }

                const [y, m] = d.data.yearMonth.split("-");

                setYear(y);
                setMonth(m);

                setObj({
                    r1: d.data.r1,
                    r2: d.data.r2,
                    r3: d.data.r3,
                    r4: d.data.r4,
                    r5: d.data.r5,
                    r6: d.data.r6,
                    r7: d.data.r7,
                    r8: d.data.r8,
                    r9: d.data.r9,
                    r10: d.data.r10,
                    r11: d.data.r11,
                    r12: d.data.r12,
                    r13: d.data.r13,
                });

            }


            try {
                f();
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }

        },
        []
    );

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (obj.r1 === "" || obj.r2 === "" || obj.r3 === "" || obj.r4 === "" || obj.r5 === "" || obj.r6 === "" || obj.r7 === "" || obj.r8 === "" || obj.r9 === "" || obj.r10 === "" || obj.r11 === "" || obj.r12 === "" || obj.r13 === "") {
            alert("Every Field must be filled");
        } else {
            const response = await fetch(
                `http://localhost:3000/${category}/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(
                        {
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
                            "r13": Number(obj.r13),
                        }
                    )
                }
            )
            if (response.ok === true) {
                alert("Data Edited Successfully");
                navigate(-1);
            } else {
                alert("Failed to Edit data");
                const d = await response.json();
                console.log(d);
            }
        }
    }

    async function handleDelete() {
        const response = await fetch(
            `http://localhost:3000/delete${categoryParam}/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
        if (response.ok === true) {
            alert("Data Deleted Successfully");
            navigate(-1);
        } else {
            alert("Could Not delete data");
        }
    }

    const [category, setCategory] = useState("");
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

    if (loading === true) {
        return <BounceLoader className="mx-auto mt-30" color="#000000" />
    }

    return (
        <form action=""
            className="max-w-2xl border border-gray-300 rounded-lg m-1 flex flex-col mx-auto gap-2 p-2"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl">Edit or Delete Data</h1>
            <h1>Choose Category</h1>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-200 cursor-not-allowed border border-gray-300 focus:outline-orange-300 rounded px-3 py-2"
                disabled
            >
                <option value="editOccupant">Occupants</option>
                <option value="editMeterReading">Meter</option>
                <option value="editRoomBill">Bill</option>
            </select>

            <h1>Choose Year</h1>
            <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="bg-gray-200 cursor-not-allowed border border-gray-300 focus:outline-orange-300 rounded px-3 py-2"
                disabled
            >
                <option value={`${new Date().getFullYear()}`}>{new Date().getFullYear()}</option>
                <option value={`${new Date().getFullYear() - 1}`}>{new Date().getFullYear() - 1}</option>
            </select>

            <h1>Choose Month</h1>
            <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="bg-gray-200 cursor-not-allowed border border-gray-300 focus:outline-orange-300 rounded px-3 py-2"
                disabled
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

            <button type="submit" className="bg-black text-white p-3 cursor-pointer hover:bg-gray-700 transition duration-300">Updated Data</button>
            <button type="button" onClick={handleDelete} className="bg-red-400 text-white p-3 cursor-pointer hover:bg-red-700 transition duration-300">Delete Data</button>
        </form>
    )
}