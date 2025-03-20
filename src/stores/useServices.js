// src/hooks/useServices.js

import { useState, useEffect } from 'react';
import AppStore from '../services/services-api';

export const useServices = (initialFilters = {}) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialFilters);

  // Fetch services based on current filters
  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    
    try {
      let result;
      
      // If category is selected, fetch services by category
      if (filters.categoryId) {
        // First get providers by category
        const providers = await AppStore.Provider.getFilteredProviders({
          categoryId: filters.categoryId,
          ...filters
        });
        
        // Then get services for each provider
        const servicesPromises = providers.map(provider => 
          AppStore.Service.getAllServicesByProviderId(provider.id)
        );
        
        const servicesArrays = await Promise.all(servicesPromises);
        result = servicesArrays.flat();
      } 
      // If provider is selected, fetch services by provider
      else if (filters.providerId) {
        result = await AppStore.Service.getAllServicesByProviderId(filters.providerId);
      } 
      // Otherwise, get filtered providers and then their services
      else {
        const providers = await AppStore.Provider.getFilteredProviders(filters);
        const servicesPromises = providers.map(provider => 
          AppStore.Service.getAllServicesByProviderId(provider.id)
        );
        
        const servicesArrays = await Promise.all(servicesPromises);
        result = servicesArrays.flat();
      }
      
      // Additional client-side filtering if needed
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        result = result.filter(service => 
          service.name.toLowerCase().includes(query) || 
          service.description.toLowerCase().includes(query)
        );
      }
      
      setServices(result);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching services:", err);
    } finally {
      setLoading(false);
    }
  };

  // Update filters and trigger fetch
  const updateFilters = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  // Handle search from SearchTab
  const handleSearch = (searchQuery) => {
    updateFilters({ searchQuery });
  };

  // Handle filter changes from Filter component
  const handleFilter = (filterData) => {
    updateFilters(filterData);
  };

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    updateFilters({ categoryId });
  };

  // Refetch when filters change
  useEffect(() => {
    fetchServices();
  }, [filters]);

  return {
    services,
    loading,
    error,
    handleSearch,
    handleFilter,
    handleCategorySelect,
    updateFilters,
    fetchServices,
    filters
  };
};