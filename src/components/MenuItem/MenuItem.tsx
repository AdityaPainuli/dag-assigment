import React from 'react'
import SideNavButtons from '../../CompositeComponents/SideNavButtons'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BiPlanet } from 'react-icons/bi'
import {DiReact} from 'react-icons/di';
import {LuWorkflow , LuPaintbrush2} from 'react-icons/lu'
import {SiHomeassistant} from 'react-icons/si';

const MenuItem = () => {
  return (
    <div className = "menuItem-container">
      <div className = "menuItems-icon">
        <AiOutlineArrowRight color= 'white' size={25}/>
      </div>
      <div className = "menuItems-icon">
        <BiPlanet color= 'white' size={25}/>
      </div>
      <div className = "menuItems-icon">
        <DiReact color= 'white' size={25}/>
      </div>
      <div className = "menuItems-icon">
        <LuWorkflow color= 'white' size={25}/>
      </div>
      <div className = "menuItems-icon">
        <LuPaintbrush2 color= 'white' size={25}/>
      </div>
      <div className = "menuItems-icon">
        <SiHomeassistant color= 'white' size={25}/>
      </div>
      
    </div>
  )
}

export default MenuItem