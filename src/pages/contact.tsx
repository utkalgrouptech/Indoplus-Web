import { contact1 } from '@/assest/Contact'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import Contactform from '@/Components/Contact/Contactform'
import Map from '@/Components/Contact/Map'
import MainLayouts from '@/Layouts/MainLayout'
import React from 'react'
const data={
    cont1:"Contact Us",
    cont2:""
  }
export default function contact() {
  return (
    <MainLayouts>
       <Commonbreadcrumb data={data} img={contact1.src}/>
       <Contactform/>
       <Map/>
    </MainLayouts>
  )
}
