import React, { useEffect, useState } from 'react'
import CreateShopDaily from '../../components/provider/CreateShopDaily'
import CreateShopSection from '../../components/provider/CreateShopSection'
import CreateShopHourly from '../../components/provider/CreateShopHourly'
import { useUser } from '@clerk/clerk-react'
import axios from 'axios'

function ShopManagement() {
  const [providerCat,setProviderCat] = useState('')
  useEffect( ()=>{
    const fetch = async()=>{
      const resp = await axios.get('http://localhost:4289/provider/P10223BKK')
      console.log(resp.data)
      setProviderCat(resp.data.provider.skills)
    }
    fetch()
  },[])

  return (
    <div>
      {
        !providerCat?<p>Loading</p>:   providerCat=='Laundry'||providerCat=='Repair'? <CreateShopHourly providerCat={providerCat} />:
        providerCat== 'Caring'|| providerCat== 'Pet Care'||providerCat=='Transport'? <CreateShopDaily providerCat={providerCat} /> : 
        providerCat =='Gardening'||providerCat== 'Cleaning'?<CreateShopSection providerCat={providerCat} />:'Error'
      }

    
    </div>
  )
}

export default ShopManagement