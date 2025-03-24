import React, { useState } from "react";
import ProviderRequestCard from "./ProviderRequestCard";
import AppointmentCard from "./AppointmentCard";
import CompleteCard from "./CompleteCard";
import UserRequestCard from "./UserRequestCard";

function JobStatus() {
  const [activeTab, setActiveTab] = useState("request");

  return (
    <>
      <div>
        {/* Tab Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("request")}
            className={`btn btn-wide ${
              activeTab === "request" ? "btn-primary bg-blue-700" : ""
            }`}
          >
            <p>Booking Request</p>
          </button>
          <button
            onClick={() => setActiveTab("appointment")}
            className={`btn btn-wide ${
              activeTab === "appointment" ? "btn-primary bg-blue-700" : ""
            }`}
          >
            <p>Booking Appointment</p>
          </button>
          <button
            onClick={() => setActiveTab("complete")}
            className={`btn btn-wide ${
              activeTab === "complete" ? "btn-primary bg-blue-700" : ""
            }`}
          >
            <p>Complete Job</p>
          </button>
          <button
            onClick={() => setActiveTab("cancel")}
            className={`btn btn-wide ${
              activeTab === "cancel" ? "btn-primary bg-blue-700" : ""
            }`}
          >
            <p>Cancel Job</p>
          </button>
        </div>

        {activeTab === "request" && <UserRequestCard />}
        {activeTab === "appointment" && <ProviderRequestCard />}
        {activeTab === "complete" && <CompleteCard />}
        {activeTab === "cancel" && <AppointmentCard />}
        
      </div>
    </>
  );
}

export default JobStatus;
