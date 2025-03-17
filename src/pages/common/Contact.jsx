
import React from 'react'
import SidebarProvider from '../../components/provider/SidebarProvider'
import ReviewForm from '../../components/admin/ReviewForm'
import DashboardProvider from '../provider/DashboardProvider';

function Contact() {
  return (
    <>
    <div className='flex'>
        <SidebarProvider /> 
        <ReviewForm />
        
      </div>
       <div>
      Contact
      <DashboardProvider/>
    </div>
    </>
  )

}

export default Contact;
