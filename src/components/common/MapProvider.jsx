import { useEffect } from "react";
import { Link } from "react-router-dom";
import useProviderStore from "../../services/providerService";

const MapProvider = () => {
  const { providers, fetchProviders, loading, error } = useProviderStore();

  useEffect(() => {
    fetchProviders();
  }, []);

  if (loading) return <p>Loading providers...</p>;
  if (error) return <p className="text-red-500 pt-10 pl-4">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Service Providers Test</h1>
      <div className="grid gap-3">
        {providers.map((provider) => (
          <Link
            key={provider.providerId}
            to={`/providers/${provider.providerId}`}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">
              {provider.firstName} {provider.lastName}
            </h2>

            <p className="text-gray-600">{provider.skills || "Freelance"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MapProvider;
