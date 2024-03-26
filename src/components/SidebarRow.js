import React from 'react';
import './SidebarRow.css';

function SidebarRow(props) {
  return (
    <div className='sidebar-row'>
      <props.icon className="sidebarRow-icons"/>
      <h2 className='sidebarRow-title'>{props.title}</h2>
    </div>
  )
}

export default SidebarRow
