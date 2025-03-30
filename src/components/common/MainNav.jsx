import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthNav from './AuthNav';

function MainNav() {
  const detailsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        detailsRef.current && 
        !detailsRef.current.contains(event.target)
      ) 
      {
        detailsRef.current.removeAttribute('open');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // Handle menu item click
  const handleMenuClick = (sectionId) => {
    // Close the dropdown
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }

    // Navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
    }

    // Scroll to section after a short delay to ensure page is loaded
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  return (
    <>
    <nav className="z-50 flex items-center justify-between p-4 shadow-md bg-blue-900 sticky top-0">
      <div className="2/3 flex items-center">
        <span className="absolute w-[170px] "><img src="/logo.png" alt="servicefinn" /></span>
      </div>

      <div className='1/3 flex gap-5'>
        <div className="navbar-center hidden md:flex space-x-6 text-white items-center gap-5">
          <ul className="menu menu-horizontal px-1 mr-[12px] text-[16px] hover:font-semibold">
            <li>
              <details ref={detailsRef}>
                <summary><Link to="/">Home</Link></summary>
                <ul className="p-2 w-52 text-gray-700">
                  <li><a onClick={() => handleMenuClick('search')}>Search</a></li>
                  <li><a onClick={() => handleMenuClick('categories')}>Categories</a></li>
                  <li><a onClick={() => handleMenuClick('how-it-works')}>How it works</a></li>
                  <li><a onClick={() => handleMenuClick('nearby')}>Nearby</a></li>
                  <li><a onClick={() => handleMenuClick('top-provider')}>Top Provider</a></li>
                  <li><a onClick={() => handleMenuClick('join-service-provider')}>Join Service Provider</a></li>
                  <li><a onClick={() => handleMenuClick('docs-for-joining')}>Docs for joining</a></li>
                </ul>
              </details>
            </li>
          </ul>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <AuthNav/>
      </div>
    </nav>
    </>
  )
}

export default MainNav;