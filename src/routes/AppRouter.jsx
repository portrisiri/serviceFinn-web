
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/common/Home';
import Services from '../pages/common/Services';
import About from '../pages/common/About';
import Contact from '../pages/common/Contact';
import ProtectedRoute from './ProtectRouter';
import LayoutUser from '../layouts/LayoutUser';
import ProfileUser from '../pages/user/ProfileUser';
import LayoutProvider from '../layouts/LayoutProvider';
import DashboardProvider from '../pages/provider/DashboardProvider';
import MapSearch from '../pages/common/MapSearch';

function AppRouter() {
  return (
    <>
     
        <Routes>

          {/* GUEST / common */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="map-search" element={<MapSearch />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          
           {/* Private USER */}
           <Route path="user" element={<LayoutUser />}>
            <Route path="profile" element={<ProfileUser/>} />
          </Route>

           {/* Private PROVIDER */}
           <Route
            path="provider"
            element={<ProtectedRoute el={<LayoutProvider />} />}
          >
            <Route index element={<DashboardProvider />} />
          </Route>

        </Routes>

    </>
  )
}

export default AppRouter;
