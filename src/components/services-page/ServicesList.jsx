import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import useSearchStore from "../../services/searchService";

const ServicesList = ({ searchParams }) => {
  const { results, resultsCount, loading, searchProvidersServicePage } = useSearchStore();

  useEffect(() => {
    if (searchParams) {
      searchProvidersServicePage(searchParams);
    }
  }, [searchParams, searchProvidersServicePage]);

  if (loading) {
    return <div className="flex justify-center p-10">Loading...</div>;
  }

  if (!results || results.length === 0) {
    return <div className="flex justify-center p-10">Service not found</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="text-lg font-medium">Service found {resultsCount} item</div>
      {results.map((service) => (
        <ServiceCard key={service.providerId} serviceData={service} />
      ))}
    </div>
  );
};

export default ServicesList;