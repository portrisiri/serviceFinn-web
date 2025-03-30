import React from 'react'
import { Link } from 'react-router-dom'

function JoinProvider() {
  return (
    <div className='h-80 mr-10'>
  
  <div className='justify-items-end space-y-7'>

      <div className='text-5xl font-semibold justify-items-end space-y-3'>
      <h1>Let us do the work, so</h1>
      <h1>you can focus on</h1>
      <h1>what matters</h1>
      </div>

      <p>Join us</p>

{/* <button className='btn bg-[#0470EF] text-white font-extralight'>Register as  Provider</button> */}
  
      <Link to="/signupprovider">
        <button className="btn text-[#0470EF] bg-white">
          Register as Provider
        </button>
      </Link>
  
  </div>

    </div>
  )
}

export default JoinProvider