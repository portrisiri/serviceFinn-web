import React from 'react'
import { Link } from 'react-router'

// import { useAuth, useUser, UserButton } from '@clerk/clerk-react'


import {
  useAuth,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react"
import Logout from './Logout';

function AuthNav() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  

  if (!isLoaded) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

// GUEST

  if (!isSignedIn) {
    return (
      <div className="space-x-3 my-auto">
        <SignUpButton
        mode='modal'
        className="btn px-4 py-2 border border-[#0470EF] text-[#0470EF] text-[16px] rounded-md hover:bg-[#F1C40F] hover:text-white transition"
        />

        <SignInButton
        mode='modal'
        className="btn px-4 py-2 bg-[#0470EF] text-white text-[16px] rounded-md hover:bg-[#10B981] transition"
        />

      </div>
    );
  }

// -----***** ADMIN *****--------------------------------------------------------Check again

  const isAdmin = user?.publicMetadata?.role === 'admin';

  // ADMIN

  if (isAdmin) {
    return (
      <div className="flex items-center justify-end mr-16 gap-5 text-white ">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-0 btn-circle bg-inherit border-0 btn-sm">
            <div className='w-8 h-8 rounded-full bg-[#2B293D] overflow-hidden'>
              <img src={user?.imageUrl || '/default-avatar.png'} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className='text-[10px] text-white'>Profile</p>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-[#FFE047] text-[#2B293D] rounded-box z-[1] w-52 p-2 shadow">
            <li><Link to='/admin'>Account Info</Link></li>
            <li><Link to='/admin/event-approve'>Event Approval</Link></li>
            <li><Link to='/admin/dashboard'>Dashboard</Link></li>
            <div className="divider my-0"></div>
            <li>
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // สำหรับ User ทั่วไป
  return (
    <div className="flex items-center justify-end gap-1 text-white ml-6 ">
     
     <div className='flex flex-col'>
            <p className='text-black text-sm font-bold'> {user.firstName}</p>
            <span className='text-gray-600 text-[11px] ml-6'>user</span>
     </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-0 btn-circle bg-inherit border-0 btn-xl">
          <div className='w-13 h-13 rounded-full border-2 border-green-500 bg-[#2B293D] overflow-hidden'>
            <img src={user?.imageUrl || '/default-avatar.png'} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-[#FFE047] text-[#2B293D] rounded-box z-[1] w-52 p-2 shadow">
          <li
          className='btn-lg'
          ><Link to='*'><UserButton/></Link></li>
          <li><Link to='*'>Profile</Link></li>
          <li><Link to='*'>Create Shop</Link></li>
          <li><Link to='*'>Booking Management</Link></li>
          <li><Link to='*'>Review Shop</Link></li>
          <div className="divider my-0"></div>
          <li
          className='mx-auto'
          >
            <Logout/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AuthNav