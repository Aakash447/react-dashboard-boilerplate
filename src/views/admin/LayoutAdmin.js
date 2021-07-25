import React, { useState, useEffect } from "react";
import DashboardRouter from "views/admin/DashboardRouter";
import Navbar from "views/admin/Navbar";
import Sidebar from "views/admin/Sidebar";
import SidebarMobile from "views/admin/SidebarMobile";
import "./scss/LayoutAdmin.scss";

function LayoutAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    // console.log("fun called");
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="layout_admin">
      <Sidebar sidebarOpen={sidebarOpen} />
      <SidebarMobile sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`layout_admin_right ${sidebarOpen ? "open" : "closed"}`}>
        <div className="navbar">
          <Navbar toggleSidebar={toggleSidebar} />
        </div>
        <div className="content">
          <DashboardRouter />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
