import React, { useState } from 'react'
import Node from '../../CompositeComponents/Node'


const SidebarRight = () => {
  const onDragStart = (event:any,nodeType:any) => {
    event.dataTransfer.setData('application/reactflow',nodeType);
    event.dataTransfer.effectAllowed = 'move';
  }
  return (
    <div className = "sidebar-right">
    
        {/* Sidebar-right drag-n-drop */}
        <div className = "dndnode input" onDragStart={(event)=>onDragStart(event,'Keyword')} draggable>
        <Node image = "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-063_font_smaller-512.png" title = "Keyword" caption='keyword to start the workflow with or without arguments' />
        </div>
        <div className = "dndnode input" onDragStart={(event)=>onDragStart(event,'Script Filter')} draggable>
       <Node image = "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-063_font_smaller-512.png" title = "Script Filter" caption='Dynamically create scripts out of workflow.' />
       </div>
       <div className = "dndnode input" onDragStart={(event)=>onDragStart(event,'Run script')} draggable>
       <Node image = "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-063_font_smaller-512.png" title = "Run script" caption='Run commands on MAC OS using various langauges.' />
       </div>
       <div className = "dndnode input" onDragStart={(event)=>onDragStart(event,'File Filter')} draggable>
       <Node image = "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-063_font_smaller-512.png" title = "File Filter" caption='Advanced Filtering option along the whole directory.' />
       </div>
       <div className = "dndnode input" onDragStart={(event)=>onDragStart(event,'Running Apps')} draggable>
       <Node image = "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-063_font_smaller-512.png" title = "Running Apps" caption='Running application installed in workflow' />
       </div>
        
        
    </div>
  )
}

export default SidebarRight