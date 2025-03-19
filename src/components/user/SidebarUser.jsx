
import React from 'react'
import { Link, Links } from 'react-router'
import { useUser } from '@clerk/clerk-react'
import { User } from 'lucide-react';
import { userSidebarLink } from '../../utils/links';

import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react"

function SidebarUser() {

<<<<<<< HEAD
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
=======
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }
>>>>>>> dev

  return (
    <>
      <div className='flex flex-col w-60 bg-[#0470EF]'>
         {/* Profile */}
      <div className="flex flex-col items-center my-12 gap-2">
        <User size={48} />
        <p>Admin</p>
        <div className='badge badge-ghost'>
          {user.firstName}
          </div>
      </div>
      {/* /Profile */}

      {/* Navlinks */}
      {userSidebarLink.map((item) => {
        return (
          <div key={item.label}>
            <Link
              className="flex py-2 px-4 gap-2
        hover:bg-blue-800 hover:duration-300
        "
              to={item.link}
            >
              {item.icon}
              <p>{item.label}</p>
            </Link>
          </div>
        );
      })}
      {/* /Navlinks */}
      </div>
    </>
  )
}


export default SidebarUser;
