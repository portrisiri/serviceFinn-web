import React, { useState } from "react";
import MapArea from "./MapArea";
import ProvidersList from "../admin/ProviderList";

function MapAcending() {
  return (
    <div>
      <div className="min-h-fit w-full text-lg font-semibold">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Sort by price</legend>
          <select defaultValue="Pick a browser" className="select">
            {/* <option disabled={true}>Pick a browser</option> */}
            <option>High</option>
            <option>Low</option>
          </select>
          {/* <span className="fieldset-label">Optional</span> */}
        </fieldset>
      </div>
    </div>
  );
}

export default MapAcending;
