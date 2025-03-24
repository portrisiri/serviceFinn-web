import React, { useEffect } from "react";
import { Pencil, Eye } from "lucide-react";
import useProviderStore from "../../services/providerService";

function ProviderTable() {
  const { providers, fetchProviders, loading } = useProviderStore();

  useEffect(() => {
    fetchProviders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Providers Table</h1>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4">Provider</th>
              <th className="text-left py-3 px-4">Phone number</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Created At</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {providers.length > 0 ? (
              providers.map((provider) => (
                <tr
                  key={provider.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="flex items-center py-3 px-4">
                    <img
                      src={provider.avatar}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="pl-4">
                      <p className="font-semibold">
                        {provider.firstName} {provider.lastName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {provider.skills || "Freelance"}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4">{provider.phoneNumber || "+66 123 1234"}</td>
                  <td className="py-3 px-4">{provider.email}</td>
                  <td className="py-3 px-4">{provider.created_at}</td>
                  <td className="py-3 px-4">${provider.amount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm 
                      ${
                        provider.isActive === "PENDING"
                          ? "bg-blue-500"
                          : provider.isActive === "SUCCESS"
                          ? "bg-green-500"
                          : provider.isActive === "FAILED"
                          ? "bg-red-500"
                          : provider.isActive === "REFUNDED"
                          ? "bg-yellow-500"
                          : provider.status === null
                          ? 'bg-amber-400'
                          : 'not data'
                      }`}
                    >
                      {provider.status}
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
                  {loading ? "Loading..." : "No Providers Found"}
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
