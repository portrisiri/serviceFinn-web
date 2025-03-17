import React from 'react';
import Home from '../../pages/common/Home';
import Categories from './Categories';
import Nearby from './Nearby';
import Howitworks from './Howitworks';
import { Link } from 'react-router';
import HomeSections from './HomeSections';
import AuthNav from './AuthNav';



function MainNav() {
  return (
    <>
    <nav className=" z-50 flex items-center justify-between p-4 shadow-md bg-white sticky top-0 opacity-90">
      <div className="2/3 flex items-center">
        <span className="text-[#0470EF] font-bold text-lg">ServiceFinn</span>
      </div>

  <div className='1/3 flex gap-5'>

  <div className="navbar-center hidden md:flex space-x-6 text-gray-700 items-center gap-5">
    <ul className="menu menu-horizontal px-1 mr-[12px] text-[16px]">
      <li>
        <details>
        <summary><Link to="/">Home</Link></summary>
          <ul className="p-2 w-52">
            <li><a href="#first" className="hover:text-[#0470EF]">Search</a></li>
            <li><a href="#second" className="hover:text-[#0470EF]">Categories</a></li>
            <li><a href="#third" className="hover:text-[#0470EF]">How it works</a></li>
            <li><a href="#forth" className="hover:text-[#0470EF]">Nearby</a></li>
            <li><a href="#fifth" className="hover:text-[#0470EF]">Top Provider</a></li>
            <li><a href="#sixth" className="hover:text-[#0470EF]">Join Service Provider</a></li>
            <li><a href="#seventh" className="hover:text-[#0470EF]">Docs for joining</a></li>
          </ul>
        </details>
      </li>
    </ul>
    <Link to="/services">Services</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>


      {/* <div className="space-x-3">
      <button className="px-4 py-2 border border-[#0470EF] text-[#0470EF] rounded-md hover:bg-[#0470EF] hover:text-white transition">
          Log In
        </button>
        <button className="px-4 py-2 bg-[#0470EF] text-white rounded-md hover:bg-blue-600 transition">
          Sign Up
        </button>
      </div> */}

    <AuthNav/>

  </div>
    </nav>
     {/* <HomeSections/> */}
    </>
  )
}

export default MainNav;