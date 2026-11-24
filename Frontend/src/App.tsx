import { Routes, Route } from "react-router"

import Homepage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"

import CalculationBillsPage from "./Pages/CalculateBillsPage"
import MeterReadingsPage from "./Pages/MeterReadingsPage"
import OccupantsPage from "./Pages/OccupantsPage"
import RoomBillsPage from "./Pages/RoomBillsPage"
import AddDataPage from "./Pages/AddDataPage"
import EditDeletePage from "./Pages/EditDeletePage"

import NavBarComponent from "./Components/NavBarComponent"

import { useState } from "react"

export default function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <>
      {loggedIn && <NavBarComponent setLoggedIn={setLoggedIn}/> }
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loginPage" element={<LoginPage setLoggedIn={setLoggedIn}/>} />
        <Route path="/calculationBillsPage" element={<CalculationBillsPage />} />
        <Route path="/meterReadingsPage" element={<MeterReadingsPage />} />
        <Route path="/occupantsPage" element={<OccupantsPage />} />
        <Route path="/roomBillsPage" element={<RoomBillsPage />} />
        <Route path="/addDataPage" element={<AddDataPage />} />
        <Route path="/editDeletePage/:categoryParam/:id" element={<EditDeletePage />} />
      </Routes>
    </>
  )
}