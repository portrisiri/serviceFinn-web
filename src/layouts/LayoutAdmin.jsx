
import SidebarAdmin from "../components/admin/SidebarAdmin";
import { Outlet } from "react-router";


function LayoutAdmin() {
  return (
  
    <div className="flex h-[100vh]">
    <SidebarAdmin 
    />

    

    <div
        className='mx-auto overflow-scroll'>
     
<Outlet />

        
    </div>
    </div>
  );

}

export default LayoutAdmin;
