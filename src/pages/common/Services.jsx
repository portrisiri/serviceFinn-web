

import { forwardRef, useEffect, useState } from 'react';

import Filter from '../../components/services-page/Filter';
import SearchTab from '../../components/services-page/SearchTab';
import MapView from '../../components/services-page/MapView';
import Pagination from '../../components/services-page/Pagination';
import SortOption from '../../components/services-page/SortOption';
import ServicesList from '../../components/services-page/ServicesList';
import useSearchStore from '../../services/searchService';
import { AppBar, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import SearchTabVertical from '../../components/services-page/SearchTabVertical';
import MapArea from '../../components/common/MapArea';

// ตั้งค่าเวลาปัจจุบันในประเทศไทย (UTC+7)
const getCurrentThaiTime = () => {
  const now = new Date();
  const thaiTime = new Date(now.getTime() + (7 * 60 - now.getTimezoneOffset()) * 60000);
  return thaiTime;
};

const services = [
  { name: 'Caring', emoji: '🍼', value: 1 },
  { name: 'Cleaning', emoji: '🧽', value: 2 },
  { name: 'Laundry', emoji: '👕', value: 3 },
  { name: 'Transport', emoji: '🚕', value: 4 },
  { name: 'Repair', emoji: '🔧', value: 5 },
  { name: 'Pet Care', emoji: '🐾', value: 6 },
  { name: 'Gardening', emoji: '🌿', value: 7 },
];
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Services() {
  // Results, map this to provider cards
  const [results, setReults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const [currentLocation, setCurrentLocation] = useState({});
  // Search parameters, use this to filter providers
  // Send as props to search components
  const [searchParams, setSearchParams] = useState({
    categoryId: null,
    subCatId: null,
    location: null,
    rating: 0,
    minPrice: 0,
    maxPrice: 0,
    orderBy: '',
    sort: '',
    radius: 5,
  });
  const searchProviders = useSearchStore((state) => state.searchProvidersServicePage);
  // Temporary parameters and results from home page
  const tempResults = useSearchStore((state) => state.results);
  const tempCount = useSearchStore((state) => state.resultsCount);
  const tempCategory = useSearchStore((state) => state.categoryId);
  const getTempProviders = useSearchStore((state) => state.searchProvidersLanding);
  // const tempLocation = useSearchStore((state) => state.location);

  useEffect(async () => {
    navigator.geolocation.getCurrentPosition(success, error);
    if (tempResults) {
      setReults((prv) => tempResults);
    } else {
      console.log('all providers');
      const results = await getTempProviders();
      console.log(results);
      setReults((prv) => results);
    }
    setResultsCount((prv) => tempCount);
    setSearchParams((prv) => ({
      ...prv,
      categoryId: tempCategory,
      date: getCurrentThaiTime(),
    }));
  }, []);

  useEffect(() => {
    setSearchParams((prv) => ({ ...prv, location: currentLocation }));
  }, [currentLocation]);

  // Get Current Position ------------------------------------------------------------------------------------
  const success = (position) => {
    const locationObject = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      name: 'Current Position',
    };
    setCurrentLocation((prv) => locationObject);
  };
  const error = (err) => {
    console.log(err);
  };

  // Hadnle Category
  const handleCategoryChange = (e, value) => {
    if (searchParams.categoryId == value) {
      setSearchParams((prv) => ({ ...prv, categoryId: '', subCatId: '' }));
    } else {
      setSearchParams((prv) => ({ ...prv, categoryId: value }));
    }
  };

  // Handle Submit
  const handleSearchSubmit = async () => {
    const response = await searchProviders(searchParams);
    setReults((prv) => response.data.results);
    setResultsCount((prv) => response.data.count);
  };



  // Modal Handling
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 flex gap-4 overflow-x-auto justify-center">
        {services.map((service) => (
          <button
            key={service.value}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm transition ${
              searchParams.categoryId == service.value
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
            onClick={(e) => handleCategoryChange(e, service.value)}
          >
            <span className="text-lg">{service.emoji}</span>
            <span className="text-sm font-medium">{service.name}</span>
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-md p-4">
        <SearchTab
          currentLocation={currentLocation}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handleSearchSubmit={handleSearchSubmit}
        />
      </div>
      <div className="container mx-auto p-4 grid grid-cols-12 gap-6">
        {/* Sidebar - MapView & Filters */}
        <div className="col-span-3 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md h-60">
            <MapView handleOpenModal={handleOpenModal} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Filter by:</h2>
            <Filter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              handleSearchSubmit={handleSearchSubmit}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Bangkok: {resultsCount} services found</h1>
            <SortOption />
          </div>
          <div>Fetched {resultsCount} results</div>

          <div className="">
            <ServicesList results={results}/>
          </div>

          <div className="mt-6 flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
      {/* Map Popup ----------------------------------------------------------------------*/}
      <Dialog fullScreen open={openModal} onClose={handleCloseModal} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', backgroundColor: 'primary' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1, textAlign: 'center' }} variant="h6" component="div">
              Map View
            </Typography>
            <IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
              x
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="flex">
          {/* Left Container */}
          <div className="w-1/5">
            <div className="bg-white shadow-md p-4">
              <SearchTabVertical searchParams={searchParams} setSearchParams={setSearchParams} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Filter by:</h2>
              <Filter
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                handleSearchSubmit={handleSearchSubmit}
              />
            </div>
          </div>
          {/* Right Container */}
          <div className="w-4/5">
            {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
            <MapArea searchParams={searchParams} results={results} />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Services;
