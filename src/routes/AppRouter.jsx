
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
import ProvidersList from "../components/admin/ProviderList";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import LayoutAdmin from "../layouts/LayoutAdmin";
import UserManage from "../pages/admin/UserManage";
import ProviderManage from "../pages/admin/ProviderManage";
import OrderManage from "../pages/admin/OrderManage";
import NotFound from '../pages/common/NotFound';
import ReviewForm from '../components/admin/ReviewForm';
import JobStatus from '../components/admin/JobStatus';
import DocsPreview from '../pages/common/DocsPreview';
import ServiceDetails from '../components/common/ServiceDetails';
import ShopManagement from '../pages/provider/ShopManagement';
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
          <Route path="docs-preview" element={<DocsPreview/>} />
          <Route path="service-details" element={<ServiceDetails/>} />
        </Route>

        {/* Private USER */}
        <Route path="user" element={<LayoutUser />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<ProfileUser />} />
          <Route path="booking-management" element={<JobStatus/>} />
          <Route path="review-shop" element={<ReviewForm/>} />
        </Route>

        {/* Private PROVIDER */}
        <Route
          path="provider"
          element={<ProtectedRoute el={<LayoutProvider />} />}
        >
          <Route index element={<DashboardProvider />} />
          <Route path="profile" element={<ProfileUser />} />
          <Route path="shop-management" element={<ShopManagement/>} />
          <Route path="booking-management" element={<JobStatus/>} />
          <Route path="review-shop" element={<ReviewForm/>} />

        </Route>



        {/* ADMIN */}
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="users" element={<UserManage />} />
          <Route path="providers" element={<ProviderManage />} />
          <Route path="orders" element={<OrderManage />} />
          <Route path="history" element={<Services />} />
        </Route>


      {/* OTHERS */}
      <Route path='*' element={<NotFound/>}/>

      </Routes>
    </>
  );
}

export default AppRouter;
