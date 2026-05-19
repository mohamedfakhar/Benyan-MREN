import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import Projects from "./Projects";
import Users from "./Users";
import Status from "../components/Status/Status";
import Developer from "./Developer";
import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/ui/FromDashboard/FromDashboard";

function Dashboard() {
  const [typingSection, setTypingSection] = useState(null);

  return (
    <>
      <Navbar adminName="Fakhr" />

      <div className="d-flex">
       
        <Sidebar typingSection={typingSection} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="users" element={<Users />}>
              <Route index element={<TableDashboard />} />
              <Route
                path="add"
                 element={<FormDashboard setTypingSection={setTypingSection} section="users" />}
              />
            </Route>

            <Route path="projects" element={<Projects />}>
              <Route index element={<TableDashboard />} />
              <Route
                path="add"
               element={<FormDashboard setTypingSection={setTypingSection} section="projects" />}
              />
            </Route>

            <Route path="developer" element={<Developer />}>
              <Route index element={<TableDashboard />} />
              <Route
                path="add"
                element={<FormDashboard setTypingSection={setTypingSection} section="developer" />}
              />
            </Route>

            <Route path="/" element={<Status />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;