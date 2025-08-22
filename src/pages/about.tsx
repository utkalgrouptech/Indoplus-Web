import { about1 } from '@/assest/About'
import AboutUs from '@/Components/About/Aboutus'

import WhyChoose from '@/Components/About/Whychoose'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'

import MainLayouts from '@/Layouts/MainLayout'
import React from 'react'

const data={
  cont1:"About Us",
  cont2:""
}

export default function about() {
  return (
    <MainLayouts>
         <Commonbreadcrumb data={data} img={about1.src}/> 
        <AboutUs/>
        <WhyChoose/>
        {/* <More/> */}
      
    </MainLayouts>
  )
}
