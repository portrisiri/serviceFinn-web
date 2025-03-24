import React, { useState } from "react";

const UserTable = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Alice", role: "User", status: "Active" },
    { id: 2, name: "John", role: "Provider", status: "Blocked" },
  ]);

  const toggleStatus = (id) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === id
          ? { ...acc, status: acc.status === "Active" ? "Blocked" : "Active" }
          : acc
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User & Provider Management</h1>
      <table className="table bg-white shadow rounded">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.id}>
              <td>{acc.name}</td>
              <td>{acc.role}</td>
              <td>
                <span
                  className={`badge ${
                    acc.status === "Active" ? "badge-success" : "badge-error"
                  }`}
                >
                  {acc.status}
                </span>
              </td>
              <td>
                <button
                  onClick={() => toggleStatus(acc.id)}
                  className="btn btn-outline btn-sm"
                >
                  {acc.status === "Active" ? "Block" : "Unblock"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
