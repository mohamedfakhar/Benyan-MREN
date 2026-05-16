import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import Projects from "./Projects";
import Users from "./Users";
import Status from "../components/Status/Status";
import Devolper from "./Devolper";
function Dashboard() {
  return (
    <>
      <Navbar adminName="Fakhr" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/Users" element={<Users />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Devolper" element={<Devolper />} />
            <Route path="/" element={<Status />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
