import { port1 } from '@/assest/Portfolio'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import Logo from '@/Components/Portfolio/Logo'

import MainLayouts from '@/Layouts/MainLayout'
import React from 'react'
const data={
    cont1:"Portfolio",
    cont2:""
  }
export default function portfolio() {
  return (
    <MainLayouts>
     <Commonbreadcrumb data={data} img={port1.src}/> 
     <Logo/>
    </MainLayouts>
  )
}
