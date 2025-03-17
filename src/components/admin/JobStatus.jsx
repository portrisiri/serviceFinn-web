import React from 'react'
import ProviderRequestCard from './ProviderRequestCard'
import AppointmentCard from './AppointmentCard'
import CompleteCard from './CompleteCard'
import UserRequestCard from './UserRequestCard'

function JobStatus() {
  return (
    <>
      <div>
        <div className='flex '>
          <div className='btn btn-wide '>
            <p>Booking Request</p>
          </div>
          <div className='btn btn-wide'>
            <p>Booking Appointment</p>
          </div>
          <div className='btn btn-wide'>
            <p>Complete Job</p>
          </div>
          <div className='btn btn-wide'>
            <p>Cancel Job</p>
          </div>
        </div>
        <UserRequestCard/>
        <ProviderRequestCard />
        <AppointmentCard/>
        <CompleteCard/>
      </div>



    </>
  )
}


export default JobStatus