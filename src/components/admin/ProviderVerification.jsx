import React, { useState } from "react";
import { toast } from "react-toastify";

const ProviderVerification = () => {
  const [pendingProviders, setPendingProviders] = useState([
    { id: 1, name: "John Doe", personalId: "1234567890", status: "Pending" },
  ]);

  const handleApprove = (id) => {
    toast.success("Provider Approved!");
    setPendingProviders(prev =>
      prev.map(p => (p.id === id ? { ...p, status: "Approved" } : p))
    );
  };

  const handleReject = (id) => {
    toast.error("Provider Rejected!");
    setPendingProviders(prev =>
      prev.map(p => (p.id === id ? { ...p, status: "Rejected" } : p))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">New Provider Verification</h1>
      <table className="table w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th>Name</th>
            <th>Personal ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingProviders.map((prov) => (
            <tr key={prov.id}>
              <td>{prov.name}</td>
              <td>{prov.personalId}</td>
              <td>
                <span className={`badge ${prov.status === "Pending" ? "badge-warning" : prov.status === "Approved" ? "badge-success" : "badge-error"}`}>
                  {prov.status}
                </span>
              </td>
              <td className="space-x-2">
                <button onClick={() => handleApprove(prov.id)} className="btn btn-success btn-sm">Approve</button>
                <button onClick={() => handleReject(prov.id)} className="btn btn-error btn-sm">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProviderVerification;
