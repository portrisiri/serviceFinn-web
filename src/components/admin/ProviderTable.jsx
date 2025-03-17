import React, { useState, useEffect } from "react";
import { Pencil, Eye } from "lucide-react";

function ProviderTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          name: "Francis Sanford MD",
          skills: "carring",
          email: "maryam.barrows@test.com",
          created_at: "January 15, 2023 3:37 AM",
          due_date: "January 15, 2023 3:37 AM",
          amount: "544.00",
          status: "Paid",
          avatar: "https://i.pravatar.cc/50?img=1",
        },
        {
          id: 2,
          name: "Lucia Kshlerin",
          skills: "pet care",
          email: "mason_davis4@test.com",
          created_at: "February 14, 2023 5:59 AM",
          due_date: "February 14, 2023 5:59 AM",
          amount: "560.00",
          status: "Pending",
          avatar: "https://i.pravatar.cc/50?img=2",
        },
        {
          id: 3,
          name: "Jody Carroll",
          skills: "Cleaner",
          email: "frieda_renner@test.com",
          created_at: "May 14, 2023 2:04 PM",
          due_date: "May 14, 2023 2:04 PM",
          amount: "977.00",
          status: "Overdue",
          avatar: "https://i.pravatar.cc/50?img=3",
        },
      ];
      setCustomers(data);
    }, 1000);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Providers Table</h1>

      <div className="ooverflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Created At</th>
              <th className="text-left py-3 px-4">Due Date</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="flex items-center py-3 px-4">
                    <img
                      src={customer.avatar}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="pl-4">
                      <p className="font-semibold ">{customer.name}</p>
                      <p className="text-sm text-gray-500">{customer.skills}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">{customer.email}</td>
                  <td className="py-3 px-4">{customer.created_at}</td>
                  <td className="py-3 px-4">{customer.due_date}</td>
                  <td className="py-3 px-4">${customer.amount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm 
                      ${
                        customer.status === "Paid"
                          ? "bg-green-500"
                          : customer.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 space-x-2">
                    <button className="text-gray-600 hover:text-blue-600">
                      <Pencil size={18} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProviderTable;
