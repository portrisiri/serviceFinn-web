import React from 'react'

import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react"

function SidebarUser() {

  const { getToken, isSignedIn } = useAuth()
  const token = getToken()
  const user = useUser()

  useEffect(() => {
    getToken()
      .then((token) => {
        console.log(token); // Log the resolved token value
      })
      .catch((error) => {
        console.error("Error getting token:", error);
      });
  }, [getToken])
  
  console.log(user)

  return (
    <>
    <div className='flex-col h-screen w-60 mx-0 bg-indigo-900 '><br />
    <img src="public/user-round.png" alt="Dashboard icon" className="  w-8 h-8 filter invert my-2 mx-25" />
    <div className=' text-center text-white'>User</div>
    <div className='flex'>
      <div className="mx-0 my-10 gap-1 text-white">
      <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Profile</p></div>
      <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Create shop</p></div>
      <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Booking management</p></div>
      <div className='flex gap-1  hover:bg-blue-800 hover:duration-300'><img src="public/book-open-text.png" alt="Dashboard icon" className=" w-6 h-6 filter invert" /><p>Review shop</p></div>
      </div></div>
      </div>
     
      </>
  )
}

export default SidebarUser