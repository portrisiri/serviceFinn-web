import React from 'react'
import { Link, Links } from 'react-router'


function SidebarAdmin() {
  return (
    <>
      <div className='flex-col h-screen w-60 mx-0 bg-indigo-900 '><br />
        <img src="public/user-round.png" alt="Dashboard icon" className=" w-8 h-8 filter invert my-2 mx-18" />
        <div className='text-center text-white'>Admin</div>
        <div className='flex'>
          <div className="mx-0 my-10 gap-1 text-white">
            <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>All User Profile</p></div>
            <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Shop Management</p></div>
            <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Dashboard</p></div>
            {/* {links.map((item)=>{
        return (
          <div key={item.label}>
            <Link
              className="flex py-2 px-4 gap-2
        hover:bg-[#FFE047] hover:duration-300
        "
              to={item.link}
            >
              {item.icon}
              <p>{item.label}</p>
            </Link>
          </div>
        )
      })} */}
          </div>
        </div>
      </div>
    </>
  )
}


export default SidebarAdmin