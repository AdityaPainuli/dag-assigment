import React from 'react';
import './App.css';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import WorkflowGraph from './components/WorkflowGraph/WorkflowGraph';
import SidebarRight from './components/SidebarRight/SidebarRight';

function App() {
  return (
    <div className = "container">
      <SidebarLeft/>
      <WorkflowGraph/>
      
    </div>
  );
}

export default App;
