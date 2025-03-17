import React from 'react'

function SidebarProvider() {
  return (
    <>
    <div className='flex-col h-screen w-60 mx-0 bg-indigo-900 '><br />
    <img src="public/user-round.png" alt="Dashboard icon" className=" w-8 h-8 filter invert my-2 mx-25" />
    <div className=' text-center text-white'>Provider</div>
    <div className='flex'>
      <div className="mx-0 my-10 gap-1 text-white">
      <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Profile</p></div>
      <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Booking management</p></div>
      <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Review customer</p></div>
      </div></div>
      </div>
     
      </>
  )
}

export default SidebarProvider