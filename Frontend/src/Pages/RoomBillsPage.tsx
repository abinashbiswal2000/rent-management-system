import { Navigate , useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

import { format, parse } from "date-fns";

import { BounceLoader } from "react-spinners";

export default function RoomBillsPage () {

    const navigate = useNavigate();

    const cname = "border border-gray-300 p-2"

    const obj = {
        id: 0,
        yearMonth: "2000-01",
        r1: 0,
        r2: 0,
        r3: 0,
        r4: 0,
        r5: 0,
        r6: 0,
        r7: 0,
        r8: 0,
        r9: 0,
        r10: 0,
        r11: 0,
        r12: 0,
        r13: 0,
    }
    const [readings, setReadings] = useState([obj]);

    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            async function f() {
                const response = await fetch(
                    `http://localhost:3000/getAllRoomBills`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                const data = await response.json();
                setReadings(data.data);
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
    )

    if (localStorage.getItem("token") == null) {
        return <Navigate to="/loginPage" />
    }

    if (loading == true) {
        return <BounceLoader className="mx-auto mt-30" color="#000000" />
    }

    return (
        <div className="overflow-x-auto w-full flex flex-col gap-2 p-2">
            <h1 className="text-2xl">Bills Records</h1>
            <table className="text-left min-w-full w-max">
                <thead>
                    <tr>
                        <th className={cname}>Year-Month</th>
                        <th className={cname}>Room 1</th>
                        <th className={cname}>Room 2</th>
                        <th className={cname}>Room 3</th>
                        <th className={cname}>Room 4</th>
                        <th className={cname}>Room 5</th>
                        <th className={cname}>Room 6</th>
                        <th className={cname}>Room 7</th>
                        <th className={cname}>Room 8</th>
                        <th className={cname}>Room 9</th>
                        <th className={cname}>Room 10</th>
                        <th className={cname}>Room 11</th>
                        <th className={cname}>Room 12</th>
                        <th className={cname}>Room 13</th>
                        <th className={`${cname} text-center`}>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...readings].sort((a, b) => b.yearMonth.localeCompare(a.yearMonth)).map(
                            (value, index) => {
                                return (
                                    <tr key={index}>
                                        <td className={cname}>{format(parse(value.yearMonth, "yyyy-MM", new Date()), "yyyy MMM")}</td>
                                        <td className={cname}>{value.r1}</td>
                                        <td className={cname}>{value.r2}</td>
                                        <td className={cname}>{value.r3}</td>
                                        <td className={cname}>{value.r4}</td>
                                        <td className={cname}>{value.r5}</td>
                                        <td className={cname}>{value.r6}</td>
                                        <td className={cname}>{value.r7}</td>
                                        <td className={cname}>{value.r8}</td>
                                        <td className={cname}>{value.r9}</td>
                                        <td className={cname}>{value.r10}</td>
                                        <td className={cname}>{value.r11}</td>
                                        <td className={cname}>{value.r12}</td>
                                        <td className={cname}>{value.r13}</td>
                                        <td className={cname}><button type="button" onClick={() => {navigate(`/editDeletePage/RoomBill/${value.id}`)}} className="w-full rounded bg-black text-white p-3 cursor-pointer hover:bg-gray-700 transition duration-300">Edit</button></td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}