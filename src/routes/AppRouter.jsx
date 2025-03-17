import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/common/Home";
import Services from "../pages/common/Services";
import About from "../pages/common/About";
import Contact from "../pages/common/Contact";
import ProvidersList from "../components/admin/ProviderList";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import LayoutAdmin from "../layouts/LayoutAdmin";
import UserManage from "../pages/admin/UserManage";
import ProviderManage from "../pages/admin/ProviderManage";
import OrderManage from "../pages/admin/OrderManage";

function AppRouter() {
  return (
    <>
      <Routes>
        {/* GUEST / common */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* AUTHENTICATE */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="/admin/users" element={<UserManage />} />
          <Route path="/admin/providers" element={<ProviderManage />} />
          <Route path="/admin/orders" element={<OrderManage />} />
          <Route path="history" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
