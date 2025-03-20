import { SignIn } from '@clerk/clerk-react'

import React from 'react'

export default function UserLogin() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <SignIn signUpUrl='/signupuser' forceRedirectUrl={'/user'}/>
    </div>
  )
}
