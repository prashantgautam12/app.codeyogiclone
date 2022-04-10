import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
function Mainlayout (props) {
    return(
        <div class="flex items-stretch h-screen">
         <SideBar></SideBar>
         <div class="flex grow"><Outlet /></div>
        </div>
    )
}
export default Mainlayout;