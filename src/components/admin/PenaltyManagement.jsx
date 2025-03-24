import React, { useState } from "react";
import { toast } from "react-toastify";

const PenaltyManagement = () => {
  const [disputes, setDisputes] = useState([
    { id: 1, user: "Alice", provider: "John", issue: "Job not completed", status: "Pending" },
  ]);

  const handleResolve = (id) => {
    toast.success("Dispute Resolved");
    setDisputes(prev =>
      prev.map(d => (d.id === id ? { ...d, status: "Resolved" } : d))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dispute Management</h1>
      <table className="table bg-white shadow rounded">
        <thead>
          <tr>
            <th>User</th>
            <th>Provider</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {disputes.map((dispute) => (
            <tr key={dispute.id}>
              <td>{dispute.user}</td>
              <td>{dispute.provider}</td>
              <td>{dispute.issue}</td>
              <td><span className={`badge ${dispute.status === "Pending" ? "badge-warning" : "badge-success"}`}>{dispute.status}</span></td>
              <td>
                <button onClick={() => handleResolve(dispute.id)} className="btn btn-sm btn-primary">Resolve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PenaltyManagement;
