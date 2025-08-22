import { team1 } from '@/assest/Team'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import Teams from '@/Components/Team/Teams'
import MainLayouts from '@/Layouts/MainLayout'
import React from 'react'
const data={
    cont1:"Our Team",
    cont2:""
  }
export default function team() {
  return (
    <MainLayouts>
      <Commonbreadcrumb data={data} img={team1.src}/> 
      <Teams/>
    </MainLayouts>
  )
}
