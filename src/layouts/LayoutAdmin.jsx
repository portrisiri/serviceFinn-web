
import React from "react";
import HeaderAdmin from "../components/admin/HeaderAdmin";
import SidebarAdmin from "../components/admin/SidebarAdmin";
import { Outlet } from "react-router";


function LayoutAdmin() {
  return (
    <div>

      {/* <HeaderAdmin /> */}
      <SidebarAdmin />
      <Outlet/>
    </div>
  );

}

export default LayoutAdmin;
