import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import ProvidersList from '../components/admin/ProviderList';
import DashboardAdmin from '../pages/admin/DashboardAdmin';
import LayoutAdmin from '../layouts/LayoutAdmin';
import UserManage from '../pages/admin/UserManage';
import ProviderManage from '../pages/admin/ProviderManage';
import OrderManage from '../pages/admin/OrderManage';

import UserLogin from '../pages/auth/UserLogin';
import UserSignup from '../pages/auth/UserSignup';
import UserRegister from '../pages/auth/UserRegister';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';

import ProviderLogin from '../pages/auth/ProviderLogin';
import ProviderSignUp from '../pages/auth/ProviderSignUp';
import ProviderRegister from '../pages/auth/ProviderRegister';

import NotFound from '../pages/common/NotFound';
import ReviewForm from '../components/admin/ReviewForm';
import JobStatus from '../components/admin/JobStatus';
import DocsPreview from '../pages/common/DocsPreview';
import ServiceDetails from '../pages/common/ServiceDetails';
import ShopManagement from '../pages/provider/ShopManagement';
import ProfileProvider from '../pages/provider/ProfileProvider';
function AppRouter() {
  return (
    <>
      <Routes>
        {/* GUEST / common */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="login" element={<UserLogin />} />
          <Route path="signupuser" element={<UserSignup />} />
          <Route path="registeruser" element={<UserRegister />} />

          {/* GUEST / common */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="map-search" element={<MapSearch />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="docs-preview" element={<DocsPreview />} />
            <Route path="service-details/:providerId" element={<ServiceDetails />} />
          </Route>

          <Route path="loginprovider" element={<ProviderLogin />} />
          <Route path="signupprovider" element={<ProviderSignUp />} />
          <Route path="registerprovider" element={<ProviderRegister />} />

          <Route path="services" element={<Services />} />
          <Route path="map-search" element={<MapSearch />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="docs-preview" element={<DocsPreview />} />
        </Route>

        {/* Private USER */}
        <Route
          path="user"
          element={
            // <SignedIn>
              <LayoutUser />
            // {/* </SignedIn> */}
          }
        >
          <Route path="profile" element={<ProfileUser />} />
          <Route path="booking-management" element={<JobStatus />} />
          <Route path="review-shop" element={<ReviewForm />} />
        </Route>

        {/* Private PROVIDER */}
        <Route
          path="provider"
          element={
            <SignedIn>
              <LayoutProvider />
            </SignedIn>
          }
        >
          <Route index element={<DashboardProvider />} />
          <Route path="profile" element={<ProfileProvider />} />
          <Route path="shop-management" element={<ShopManagement />} />
          <Route path="booking-management" element={<JobStatus />} />
          <Route path="review-shop" element={<ReviewForm />} />
        </Route>

        {/* ADMIN */}
        <Route
          path="admin"
          element={
            <SignedIn>
              <LayoutAdmin />
            </SignedIn>
          }
        >
          <Route index element={<DashboardAdmin />} />
          <Route path="users" element={<UserManage />} />
          <Route path="providers" element={<ProviderManage />} />
          {/* <Route path="orders" element={<OrderManage />} /> */}
          {/* <Route path="history" element={<Services />} /> */}
        </Route>

        {/* OTHERS */}
        <Route path="*" element={<NotFound />} />
      </Routes>
</>
  )
}
      {/* <SignedIn>
        <PrivateRouteNavigation />
      </SignedIn>
    </>
  );
}

function PrivateRouteNavigation() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && user && user.publicMetadata) {
      const role = user.publicMetadata.role;
      console.log('Role inside PrivateRouteNavigation:', role);

      if (role === 'USER') {
        navigate('/user/profile');
      } else if (role === 'PROVIDER') {
        navigate('/provider');
      } else if (role === 'ADMIN') {
        navigate('/admin');
      }
    }
  }, [user]);

  return null; // อันนี้คือ protected Route
} */}

export default AppRouter;
