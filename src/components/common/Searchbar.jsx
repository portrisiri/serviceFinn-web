import { Search, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import BannerImages from './BannerImages';
import useSearchStore from '../../services/searchService';

function Searchbar() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const filterProvider = useSearchStore((state) => state.searchProvidersHomepage);
  const navigate = useNavigate();
  // Form Controls ----------------------------------------------------------------------------------------
  const handleSelectLocation = (e) => {
    // console.log(e.target.value);
    if (!e.target.value) {
      setLocation((prv) => currentLocation);
    } else {
      const selectedLocation = JSON.parse(e.target.value);
      setLocation((prv) => selectedLocation);
    }
  };

  const handleSearchSubmit = async () => {
    if (!location) {
      await filterProvider(currentLocation, service);
    } else {
      await filterProvider(location, service);
    }
    navigate('/services');
  };

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
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };
  // --------------------------------------------------------------------------------------------------------
  const tempCategory = useSearchStore((state) => state.categoryId);
  const tempLocation = useSearchStore((state) => state.location);
  useEffect(() => {
    tempCategory && setService((prv) => tempCategory);
    tempLocation && setLocation((prv) => tempLocation);
    getCurrentLocation();
  }, []);
  // --------------------------------------------------------------------------------------------------------

  return (
    <div className="relative w-full h-full md:h-[500px] flex items-center justify-center text-center bg-cover bg-center isolation-auto rounded-4xl">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <BannerImages />
      </div>
      {/* Content */}
      <div className="relative z-10 px-6 w-full flex flex-col">
        <h1 className="text-2xl md:text-4xl font-semibold text-white text-center">
          <br />
          <br />
          <br />
        </h1>

        {/* Search Bar */}
        <div className="mt-6  bg-white shadow-blue-900 p-7 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg md:max-w-6xl">
          {/* Service Selection */}
          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">What service do you need?</label>
            <select
              className="w-full p-[10.5px] border rounded-md focus:ring focus:ring-blue-300 h-[50px] "
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select a service</option>
              <option value={1}>Caring</option>
              <option value={2}>Cleaning</option>
              <option value={3}>Laundry</option>
              <option value={4}>Transport</option>
              <option value={5}>Repair</option>
              <option value={6}>Pet Care</option>
              <option value={7}>Gardening</option>
            </select>
          </div>

          {/* Location Input */}
          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">Where do you need it?</label>
            {/* <div className="flex items-center gap-2 border rounded-md p-2 h-[50px]">
              <MapPin className="text-gray-500 w-5 h-5" />
              <input
                type="text"
                value={location}
                placeholder="Enter your location"
                className="w-full focus:outline-none border-0 bg-transparent"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div> */}
            <select
              className="w-full p-[10.5px] border rounded-md focus:ring focus:ring-blue-300 h-[50px] "
              // value={location}
              onChange={(e) => handleSelectLocation(e)}
            >
              <option value="">Current Location</option>
              <option value='{ "latitude": 13.6592, "longitude": 100.3991, "name:" "Bang Bon" }'>Bang Bon</option>
              <option value='{"latitude": 13.765833, "longitude": 100.647778, "name": "Bang Kapi"}'>Bang Kapi</option>
              <option value='{"latitude": 13.696111, "longitude": 100.409444, "name": "Bang Khae"}'>Bang Khae</option>
              <option value='{"latitude": 13.873889, "longitude": 100.596389, "name": "Bang Khen"}'>Bang Khen</option>
              <option value='{"latitude": 13.693333, "longitude": 100.5025, "name": "Bang Kho Laem"}'>
                Bang Kho Laem
              </option>
              <option value='{"latitude": 13.660833, "longitude": 100.435833, "name": "Bang Khun Thian"}'>
                Bang Khun Thian
              </option>
              <option value='{"latitude": 13.680081, "longitude": 100.5918, "name": "Bang Na"}'>Bang Na</option>
              <option value='{"latitude": 13.793889, "longitude": 100.505, "name": "Bang Phlat"}'>Bang Phlat</option>
              <option value='{"latitude": 13.730833, "longitude": 100.524167, "name": "Bang Rak"}'>Bang Rak</option>
              <option value='{"latitude": 13.809722, "longitude": 100.537222, "name": "Bang Sue"}'>Bang Sue</option>
              <option value='{"latitude": 13.770867, "longitude": 100.467933, "name": "Bangkok Noi"}'>
                Bangkok Noi
              </option>
              <option value='{"latitude": 13.722778, "longitude": 100.476389, "name": "Bangkok Yai"}'>
                Bangkok Yai
              </option>
              <option value='{"latitude": 13.785278, "longitude": 100.669167, "name": "Bueng Kum"}'>Bueng Kum</option>
              <option value='{"latitude": 13.828611, "longitude": 100.559722, "name": "Chatuchak"}'>Chatuchak</option>
              <option value='{"latitude": 13.677222, "longitude": 100.484722, "name": "Chom Thong"}'>Chom Thong</option>
              <option value='{"latitude": 13.769722, "longitude": 100.552778, "name": "Din Daeng"}'>Din Daeng</option>
              <option value='{"latitude": 13.913611, "longitude": 100.589722, "name": "Don Mueang"}'>Don Mueang</option>
              <option value='{"latitude": 13.776944, "longitude": 100.520556, "name": "Dusit"}'>Dusit</option>
              <option value='{"latitude": 13.776667, "longitude": 100.579444, "name": "Huai Khwang"}'>
                Huai Khwang
              </option>
              <option value='{"latitude": 13.8271, "longitude": 100.6743, "name": "Khan Na Yao"}'>Khan Na Yao</option>
              <option value='{"latitude": 13.859722, "longitude": 100.704167, "name": "Khlong Sam Wa"}'>
                Khlong Sam Wa
              </option>
              <option value='{"latitude": 13.730278, "longitude": 100.509722, "name": "Khlong San"}'>Khlong San</option>
              <option value='{"latitude": 13.708056, "longitude": 100.583889, "name": "Khlong Toei"}'>
                Khlong Toei
              </option>
              <option value='{"latitude": 13.8875, "longitude": 100.578889, "name": "Lak Si"}'>Lak Si</option>
              <option value='{"latitude": 13.722317, "longitude": 100.759669, "name": "Lat Krabang"}'>
                Lat Krabang
              </option>
              <option value='{"latitude": 13.803611, "longitude": 100.6075, "name": "Lat Phrao"}'>Lat Phrao</option>
              <option value='{"latitude": 13.813889, "longitude": 100.748056, "name": "Min Buri"}'>Min Buri</option>
              <option value='{"latitude": 13.855556, "longitude": 100.8625, "name": "Nong Chok"}'>Nong Chok</option>
              <option value='{"latitude": 13.704722, "longitude": 100.348889, "name": "Nong Khaem"}'>Nong Khaem</option>
              <option value='{"latitude": 13.744942, "longitude": 100.5222, "name": "Pathum Wan"}'>Pathum Wan</option>
              <option value='{"latitude": 13.714722, "longitude": 100.437222, "name": "Phasi Charoen"}'>
                Phasi Charoen
              </option>
              <option value='{"latitude": 13.78, "longitude": 100.542778, "name": "Phaya Thai"}'>Phaya Thai</option>
              <option value='{"latitude": 13.702222, "longitude": 100.601667, "name": "Phra Khanong"}'>
                Phra Khanong
              </option>
              <option value='{"latitude": 13.764444, "longitude": 100.499167, "name": "Phra Nakhon"}'>
                Phra Nakhon
              </option>
              <option value='{"latitude": 13.758056, "longitude": 100.513056, "name": "Pom Prap Sattru Phai"}'>
                Pom Prap Sattru Phai
              </option>
              <option value='{"latitude": 13.716944, "longitude": 100.694444, "name": "Prawet"}'>Prawet</option>
              <option value='{"latitude": 13.682222, "longitude": 100.505556, "name": "Rat Burana"}'>Rat Burana</option>
              <option value='{"latitude": 13.758889, "longitude": 100.534444, "name": "Ratchathewi"}'>
                Ratchathewi
              </option>
              <option value='{"latitude": 13.919167, "longitude": 100.645833, "name": "Sai Mai"}'>Sai Mai</option>
              <option value='{"latitude": 13.731389, "longitude": 100.514167, "name": "Samphanthawong"}'>
                Samphanthawong
              </option>
              <option value='{"latitude": 13.77, "longitude": 100.684722, "name": "Saphan Sung"}'>Saphan Sung</option>
              <option value='{"latitude": 13.708056, "longitude": 100.526389, "name": "Sathon"}'>Sathon</option>
              <option value='{"latitude": 13.730278, "longitude": 100.651389, "name": "Suan Luang"}'>Suan Luang</option>
              <option value='{"latitude": 13.776944, "longitude": 100.456667, "name": "Taling Chan"}'>
                Taling Chan
              </option>
              <option value='{"latitude": 13.7878, "longitude": 100.3638, "name": "Thawi Watthana"}'>
                Thawi Watthana
              </option>
              <option value='{"latitude": 13.725, "longitude": 100.485833, "name": "Thon Buri"}'>Thon Buri</option>
              <option value='{"latitude": 13.6472, "longitude": 100.4958, "name": "Thung Khru"}'>Thung Khru</option>
              <option value='{"latitude": 13.7864, "longitude": 100.6087, "name": "Wang Thonglang"}'>
                Wang Thonglang
              </option>
              <option value='{"latitude": 13.742222, "longitude": 100.585833, "name": "Watthana"}'>Watthana</option>
              <option value='{"latitude": 13.696944, "longitude": 100.543056, "name": "Yan Nawa"}'>Yan Nawa</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="w-full flex gap-2 h-[50px] mt-7">
            <button
              className="flex-2/4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
              onClick={handleSearchSubmit}
            >
              Find Services
            </button>
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              <Link to="/map-search">Map</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
