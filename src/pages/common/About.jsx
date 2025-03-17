import React from 'react'
import JobStatus from '../../components/admin/JobStatus'
import SidebarAdmin from '../../components/admin/SidebarAdmin'

function About() {
  return (
    <>
      <div className='flex'>
        <SidebarAdmin /> 
        <JobStatus />
      </div> 
    </>
  )
}

export default About