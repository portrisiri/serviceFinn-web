import React from 'react'
import SidebarProvider from '../components/provider/SidebarProvider'
import { Outlet } from 'react-router'


function LayoutProvider() {
  return (
   
    <div className="flex h-[100vh]">
    <SidebarProvider
    />

    

    <div
        className='mx-auto'>
     
<Outlet />

        
    </div>
    </div>
  )
}

export default LayoutProvider