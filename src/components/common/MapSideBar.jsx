import React, { useState } from "react";
import MapArea from "./MapArea";
import ProvidersList from "../admin/ProviderList";

function MapSideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isSidebarOpen}
          onChange={toggleSidebar}
        />
        <div className="drawer-content">
          {/* ปุ่ม Toggle Sidebar */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </label>

          {/* Map */}
          <MapArea isSidebarOpen={isSidebarOpen} />
        </div>

        {/* Sidebar */}
        <div className="drawer-side !bg-white">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay !bg-white"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 mt-30">
            <li>
              <a>
                <ProvidersList />
              </a>
            </li>
            {/* <li>
              <a>Sidebar Item 2</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MapSideBar;