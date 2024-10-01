import React from 'react'
import StoreList from './AllVendor'
import { storesData } from '../../components/common/Data/storeData';

const VendorList = () => {
  return (
    <div className='mb-15' style={{marginTop:"8%"}}>
       <StoreList stores={storesData} />  
    </div>
  )
}

export default VendorList