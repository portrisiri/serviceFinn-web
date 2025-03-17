import { SignOutButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { createAlert } from '../../utils/createAlert'

function Logout() {
  const navigate = useNavigate()

  const hdlSignOut = () => {
    createAlert('success', 'Logout Success!')
    navigate('/')
  }

  return (
    <SignOutButton>
      <button 
      className="hover:text-red-500"
      onClick={hdlSignOut}
      >Log out</button>
    </SignOutButton>
  )
}

export default Logout