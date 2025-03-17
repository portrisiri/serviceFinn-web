import React from 'react'
import SidebarProvider from '../../components/provider/SidebarProvider'
import ReviewForm from '../../components/admin/ReviewForm'

function Contact() {
  return (
    <div className='flex'>
        <SidebarProvider /> 
        <ReviewForm />
        
      </div>
  )
}

export default Contact