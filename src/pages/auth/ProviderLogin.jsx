import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function ProviderLogin() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <SignIn signUpUrl='/signupprovider' forceRedirectUrl={'/provider'}/>
    </div>
  )
}

export default ProviderLogin