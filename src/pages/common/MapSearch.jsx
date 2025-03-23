import React, { useState } from "react";
import MapArea from "../../components/common/MapArea";
import MapFilter from "../../components/common/MapFilter";
import MapAcending from "../../components/common/MapAcending";
import MapProvider from "../../components/common/MapProvider";

function MapSearch() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="flex gap-4 w-screen">
        {/* SideBar */}
        <div className="flex flex-col gap-5  w-fit">
          <div className="bg-white p-4 rounded-lg shadow-md h-fit w-[280px]">
            <MapAcending />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md h-fit w-full">
            <h2 className="text-lg font-semibold mb-2">Filter by:</h2>
            <MapFilter />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md h-screen w-full">
            <h2 className="text-lg font-semibold mb-2">
              {/* <img src="https://drive.google.com/file/d/1GbJO7P8N5GVgh3O-G3bNLsmayCFKq3Fc/view?usp=sharing" alt="" /> */}
            </h2>
          </div>
        </div>

        {/* Toggle fetch provider*/}
        <div className="flex relative w-fit">
          {/* Sidebar */}
          <div
            className={`bg-gray-100  transition-all duration-300  ${
              open ? "w-64" : "w-16"
            }`}
          >
            <button className="btn btn-sm !bg-white absolute" onClick={() => setOpen(!open)}>
              {open ? "<<" : ">>"}
            </button>

            {open && (
              <ul className="space-y-4 bg-white mr-4 rounded-lg shadow-md h-screen">
                <li>
                  <a href="#" className="">
                    <MapProvider />
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Main Content */}
          <div className="flex w-[1300px] transition-all duration-300">
            {/* MAP */}
            <div className="bg-white container p-4 rounded-lg shadow-md h-fit w-full">
              <MapArea />
            </div>
          </div>
        </div>
        {/* <div className="bg-white p-4 rounded-lg shadow-md h-screen w-[380px]">
        </div> */}
      </div>
    </div>
  );
}

export default MapSearch;
