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
  const [resultsCount, setResultsCount] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({});
  const [renderedParams, setRenderedParams] = useState({
    radius: 0,
  });
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
    radius: 7,
  });
  const searchProviders = useSearchStore((state) => state.searchProvidersServicePage);
  // Temporary parameters and results from home page
  const tempResults = useSearchStore((state) => state.results);
  const tempCount = useSearchStore((state) => state.resultsCount);
  const tempCategory = useSearchStore((state) => state.categoryId);
  const getTempProviders = useSearchStore((state) => state.searchProvidersLanding);
  // const tempLocation = useSearchStore((state) => state.location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // จัดการ geolocation
        navigator.geolocation.getCurrentPosition(success, error);
  
        // ถ้ามี tempResults ให้ใช้
        if (tempResults) {
          setResults(tempResults);
          setResultsCount(tempCount);
        } else {
          // ถ้าไม่มี tempResults ให้ fetch
          const response = await getTempProviders();
          setResults(response.data.results);
          setResultsCount(response.data.count);
        }
  
        // อัพเดท search params
        setSearchParams(prev => ({
          ...prev,
          categoryId: tempCategory,
          date: getCurrentThaiTime(),
          radius: 3,
        }));
      } catch (err) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', err);
      }
    };
  
    fetchData();
  }, []); // dependency array ว่าง

  useEffect(() => {
    setSearchParams((prv) => ({ ...prv, location: currentLocation }));
    setRenderedParams(searchParams);
  }, [currentLocation]);

  useEffect(() => {
    console.log('searchParams changing...');
    handleSearchSubmit();
  }, [searchParams]);

  // Get Current Position ------------------------------------------------------------------------------------
  const success = (position) => {
    const locationObject = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      name: 'your current position',
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
    console.log(response);
    setReults((prv) => response.data.results);
    setResultsCount((prv) => response.data.count);
    setRenderedParams(searchParams);
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
    <div>
      <div className="container mx-auto p-4 flex gap-4 overflow-x-auto justify-center bg-[#0470EF]">
        {services.map((service) => (
          <button
            key={service.value}
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm transition ${
              searchParams.categoryId == service.value
                ? 'bg-[#024bab] text-white'
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
      <div className=" shadow-md p-4">
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
          <div className="bg-white rounded-lg shadow-md h-60">
            <MapView handleOpenModal={handleOpenModal} />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Filter by:</h2>
            <Filter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              handleSearchSubmit={handleSearchSubmit}
              currentLocation={currentLocation}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">
              {resultsCount} services found within {renderedParams.radius}km of{' '}
              {renderedParams.location?.name || 'your current position'}
            </h1>
          </div>
          {/* <div>Fetched {resultsCount} results</div> */}

          <div className="">
            <ServicesList results={results} />
          </div>

          <div className="mt-6 flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
      {/* Map Popup ----------------------------------------------------------------------*/}
      <Dialog fullScreen open={openModal} onClose={handleCloseModal} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'sticky', backgroundColor: '#0470EF' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1, textAlign: 'center' }} variant="h6" component="div">
              Map View
            </Typography>
            <IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
              x
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="flex ml-7">
          {/* Left Container */}
          <div className="w-1/5 gap-4 flex flex-col mt-4">
            <div className="bg-gray-100 shadow-md p-4">
              <SearchTabVertical searchParams={searchParams} setSearchParams={setSearchParams} />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
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
