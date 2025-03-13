
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/common/Home';
import Services from '../pages/common/Services';
import About from '../pages/common/About';
import Contact from '../pages/common/Contact';

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
          <Route>


          </Route>

        </Routes>

    </>
  )
}

export default AppRouter