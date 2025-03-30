import React from 'react'
import { Link } from 'react-router'

function DocsProvider() {
  return (
    <div className='h-80 ml-10'>
  
    <div className='justify-items-start space-y-7'>
  
        <div className='text-5xl font-semibold justify-items-start space-y-3'>
        <h1>Are You a Service</h1>
        <h1>Provider?</h1>
     
        </div>
  
  <div>
        <p>Join our platform to reach more customers, manage</p>
        <p>booking, and grow your business</p>
  </div>
  
  <button className='btn bg-[#0470EF] text-white font-lg'>
  <Link to='/docs-preview'>Document Preview</Link>
  </button>
  
    </div>
  
      </div>
  )
}

export default DocsProvider