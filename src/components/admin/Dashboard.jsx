import React from "react";
import { FaBahtSign } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function Dashboard() {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl mb-10 font-bold">Over view</h1>
        <div className="mt-4">
          {/* <button className="btn btn-outline">sdfg</button> */}
          <div className="bg-gray-100 p-3 rounded-2xl">
            <div className=" rounded-box flex gap-3">
              {/* card */}
              <div className="bg-white  w-55 h-60 rounded-2xl shadow flex flex-col p-4">
                <div>
                  <div className="bg-green-100 m-2 w-10 h-10 p-2 rounded-full shadow border-accent items-center justify-center flex">
                    <FaBahtSign className="w-full h-[20px]" />
                  </div>
                </div>
                <div className="text-neutral-600 text-[14px] font-semibold ">
                  Total Profit
                </div>
                <div className="text-[24px] font-bold mt-5"> 834,678 Baht</div>
                <div>
                  <span className="text-green-500 text-[14px]">+3.4%</span>
                  <span className="text-neutral-400 text-[14px]">
                    {" "}
                    from last month
                  </span>
                </div>
              </div>

              {/* card */}
              <div className="bg-white  w-55 h-60 rounded-2xl shadow flex flex-col p-4">
                <div>
                  <div className="bg-blue-100 m-2 w-10 h-10 p-2 rounded-full shadow border-accent items-center justify-center flex">
                    <IoBagHandleOutline className="w-full h-[20px]" />
                  </div>
                </div>
                <div className="text-neutral-600 text-[14px] font-semibold">
                  Total Order
                </div>
                <div className="text-[24px] font-bold mt-5">152,420 Baht</div>
                <div>
                  <span className="text-green-500 text-[14px]">+2.4%</span>
                  <span className="text-neutral-400 text-[14px]">
                    {" "}
                    from last month
                  </span>
                </div>
              </div>

              {/* card */}
              <div className="bg-white  w-55 h-60 rounded-2xl shadow flex flex-col p-4">
                <div>
                  <div className="bg-purple-100 m-2 w-10 h-10 p-2 rounded-full shadow border-accent items-center justify-center flex">
                    <FaRegUser className="w-full h-[20px]" />
                  </div>
                </div>
                <div className="text-neutral-600 text-[14px] font-semibold">
                  Total Account
                </div>
                <div className="text-[22px]  mt- flex flex-col">
                  <span className="pb-0 mb-0 font-bold">12,420</span>
                  <span className="pt-0 mt-0  text-neutral-400 text-[14px] ">
                    customer
                  </span>
                </div>
                <div className="text-[22px]  mt- flex flex-col">
                  <span className="pb-0 mb-0 font-bold">23,220</span>
                  <span className="pt-0 mt-0  text-neutral-400 text-[14px]">
                    Provider
                  </span>
                </div>
                <div>
                  <span className="text-green-500 text-[14px]">+2.4%</span>
                  <span className="text-neutral-400 text-[14px]">
                    {" "}
                    from last month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
