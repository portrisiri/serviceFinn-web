import React from 'react'

import { SignUp } from '@clerk/clerk-react'

function ProviderSignUp() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <SignUp signInUrl='/loginprovider' forceRedirectUrl={'/registerprovider'}/>
    </div>
  )
}

export default ProviderSignUp