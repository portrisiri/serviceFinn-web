import React from "react";
import ChartDashboard from "../../components/admin/ChartDashboard";
import ProviderTable from "../../components/admin/ProviderTable";
import RadialBarChart from "../../components/admin/RadialBarChart";
import Dashboard from "../../components/admin/Dashboard";
import ProviderVerification from "../../components/admin/ProviderVerification";
import PenaltyManagement from "../../components/admin/PenaltyManagement";

function DashboardAdmin() {
  return (
    <div className="my-5 max-w-7xl w-screen">
      <div className="rounded-4xl shadow bg-gray-50">
        <ProviderVerification />
        <PenaltyManagement />
        <Dashboard />
        <div className="flex bg-gray-100 p-3 gap-3 rounded-2xl ml-5">
          <div className="bg-white rounded-4xl p-6 shadow">
            <ChartDashboard />
          </div>
          <div className="bg-white rounded-4xl shadow ">
            <RadialBarChart />
          </div>
        </div>
        {/* <ProviderTable /> */}
      </div>
    </div>
  );
}

export default DashboardAdmin;
