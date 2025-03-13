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
        {/* <Link to="/sign-in"
          className="btn px-4 py-2 bg-[#0470EF] text-white rounded-md hover:bg-[#10B981] transition"
        >Login</Link> */}
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
              <img src={user?.imageUrl} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className='text-[10px] text-white'>Profile</p>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-[#FFE047] text-[#2B293D] rounded-box z-[1] w-52 p-2 shadow">
            <li><Link to='/admin'>Account Info</Link></li>
            <li><Link to='/admin/event-approve'>Event Approval</Link></li>
            <li><Link to='/admin/dashboard'>Dashboard</Link></li>
            <div className="divider my-0"></div>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // สำหรับ User ทั่วไป
  return (
    <div className="flex items-center justify-end mr-16 gap-5 text-white ">
     
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-0 btn-circle bg-inherit border-0 btn-sm">
          <div className='w-8 h-8 rounded-full bg-[#2B293D] overflow-hidden'>
            <img src={user?.imageUrl} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <p className='text-[10px] text-white'>Profile</p>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-[#FFE047] text-[#2B293D] rounded-box z-[1] w-52 p-2 shadow">
          <li><Link to='/user/userInfo'>Profile</Link></li>
          <li><Link to='/user/user-events'>My Events</Link></li>
          <li><Link to='/user/host-control'>Host Control</Link></li>
          <div className="divider my-0"></div>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AuthNav