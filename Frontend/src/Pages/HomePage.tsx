import Tile2 from "../Components/Tile2";
import DownloadButton from "../Components/DownloadButton";
import { Navigate } from "react-router";

export default function HomePage() {

    if (localStorage.getItem("token") == null) {
        return <Navigate to="/loginPage"/>
    }

    return (
        <>
            <h1 className="text-center text-2xl sm:text-5xl my-5 font-bold font-sans">Rent Management System</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-2 mx-1 mt-1">
                <Tile2 name="Calculate Bills" route="/calculationBillsPage"/>
                <DownloadButton />
                <Tile2 name="Add Data" route="/addDataPage"/>
                <Tile2 name="Meter Readings" route="/meterReadingsPage"/>
                <Tile2 name="Occupants" route="/occupantsPage"/>
                <Tile2 name="Room Bills" route="/roomBillsPage"/>
            </div>
        </>
    )
}