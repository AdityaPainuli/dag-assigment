import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import InstallApplicationSection from '../InstallApplicationSection/InstallApplicationSection'


const SidebarLeft = () => {
  return (
    <div className = "sidebar-container"> 
        {/* Menu-item */}
        <MenuItem/>

        {/* InstallApplicationSection */}
        <InstallApplicationSection/>
    </div>

  )
}

export default SidebarLeft