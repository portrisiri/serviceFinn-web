import { SignUp, UserProfile } from '@clerk/clerk-react'

import React from 'react'

export default function UserSignup() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <SignUp signInUrl='/login' forceRedirectUrl={<UserProfile />}/>
    </div>
  )
}
