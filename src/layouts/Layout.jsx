console.log('Layouts');
import React from 'react'
import MainNav from '../components/common/MainNav';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div>
{/* <MainNav/> */}

<Outlet/>
    </div>
  )
}

export default Layout