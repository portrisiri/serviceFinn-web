import React from "react";
import BudgetFilter from "../services-page/BudgetFilter";
import RatingFilter from "../services-page/RatingFilter";
import MapRating from "./MapRating";
import MapDistance from "./MapDistance";

function MapFilter() {
  return (
    <div>
      <div>
        <MapDistance />
      </div>
      <div>
        <BudgetFilter />
      </div>
      <div>
        <MapRating />
      </div>
    </div>
  );
}

export default MapFilter;
