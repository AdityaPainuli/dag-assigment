// might use this for optimising the menuItem.js as it's using some composite component pattern in the whole file.


import React, { FC } from 'react'

interface navProps {
    name?: String;
    icon:any;
    active?:boolean
}

const SideNavButtons:FC<navProps> = ({name,icon,active}) => {
  return (
    <div>
        
    </div>
  )
}

export default SideNavButtons