import React from 'react'
import SidebarUser from '../components/user/SidebarUser'
import { Outlet } from 'react-router'

function LayoutUser() {
  return (
    <div className="flex h-[100vh]">
    <SidebarUser 
    />

    

    <div
        className='px-5'>
     
<Outlet />

        
    </div>
    </div>
  )
}

export default LayoutUser