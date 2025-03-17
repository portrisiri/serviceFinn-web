import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { FaRegBell } from "react-icons/fa";

function HeaderAdmin() {
  return (
    <div>
      <header className="w-full h-[50px] pl-52 pr-7 bg-gray-100 flex items-center justify-between">
        <div className="part1">
          <button className="btn btn-ghost ">
            <RiMenu2Fill className="text-[22px] " />
          </button>
        </div>

        <div className="part2 w-[40%] flex items-center justify-between gap-3">
          <button className="btn btn-ghost ">
            <Badge badgeContent="" color="primary" variant="dot">
              <FaRegBell className="h-[24px]" />
            </Badge>
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderAdmin;
