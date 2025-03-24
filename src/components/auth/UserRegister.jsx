import React from "react";

function UserRegister() {
  return (
    <div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[750px] rounded-lg shadow-lg overflow-hidden">
          {/* ฝั่งซ้าย */}
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">  Provide your location </h2>
          </div>
        </div>

          {/* ฝั่งขวา */}
          <div className="flex flex-col flex-1 justify-center items-center">
          <p> Hello </p>
          </div>

      </div>

    </div>
  );
}

export default UserRegister;
