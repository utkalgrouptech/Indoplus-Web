
import { Service8 } from '@/assest/Services'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import Servicedetails from '@/Components/Services/Servicedetails'
import MainLayouts from '@/Layouts/MainLayout'
import React from 'react'
const data={
    cont1:"Service Details",
    cont2:""
  }
export default function service() {
  return (
    <MainLayouts>
      <Commonbreadcrumb data={data} img={Service8.src}/> 
      <Servicedetails/>
    </MainLayouts>
  )
}
