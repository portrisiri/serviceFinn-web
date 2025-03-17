import React from "react";
import { Link } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { MdLogout } from "react-icons/md";

function SidebarAdmin() {
  return (
    <div>
      <div className="contentMain flex">
        <div className="sidebarWrapper">
          <div className="sidebar fixed top-0 left-0  mt-[85px]  w-[16%] h-full botder-r border-[rgba(0,0,0,0.1) py-2 px-2 shadow">
            <div className="py-2 w-full">
              <Link to="/">
                <img
                  src="https://gingersauce.co/wp-content/uploads/2020/12/pasted-image-0-2-3.png"
                  alt=""
                  className="mb-5 h-[50px]"
                />
              </Link>
            </div>

            <ul className="">
              <li>
                <Link
                  to=""
                  className="btn btn-ghost !w-full !capitalize flex justify-start text-[14px]  font-[500]"
                >
                  <RxDashboard className="text-[18px]" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to='/admin/users' className="btn btn-ghost !w-full !capitalize flex justify-start text-[14px]  font-[500]">
                  <FaRegUser className="text-[18px]" />
                  Users
                </Link>
              </li>
              <li>
                <Link to='/admin/providers' className="btn btn-ghost !w-full !capitalize flex justify-start text-[14px]  font-[500]">
                  <GrUserWorker className="text-[18px]" />
                  Providers
                </Link>
              </li>
              <li>
                <Link to='/admin/orders' className="btn btn-ghost !w-full !capitalize flex justify-start text-[14px]  font-[500]">
                  <MdOutlineWorkOutline className="text-[18px]" />
                  Orders
                </Link>
              </li>
              <li>
                <Link to='/admin/history' className="btn btn-ghost !w-full !capitalize flex justify-start text-[14px]  font-[500]">
                  <GrHistory className="text-[18px]" />
                  History
                </Link>
              </li>
              <li>
                <Link to='' className="btn btn-ghost !w-full !capitalize flex justify-start text-[14px]  font-[500]">
                  <MdLogout className="text-[18px]" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
