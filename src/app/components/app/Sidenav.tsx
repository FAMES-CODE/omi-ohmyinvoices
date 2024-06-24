import React from "react";
import { Avatar, Link } from "@nextui-org/react";
import {
  FaAlignJustify,
  FaFileInvoiceDollar,
  FaFile,
  FaUsers,
  FaWarehouse,
  FaFileLines,
  FaGear,
  FaQuestion,
  FaBook,
} from "react-icons/fa6";

export default function Sidenav() {
  return (
    <div className="flex flex-col h-full border-r-4">
      <UserCard />
      <Routes />
    </div>
  );
}

function UserCard() {
  return (
    <div className="flex justify-evenly items-center my-8">
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="w-20 h-20"
        size="md"
      />
      <h1 className="my-4 text-2xl font-bold">John Doe</h1>
    </div>
  );
}

function Routes() {
  return (
    <div className="flex flex-col items-start justify-around h-full ml-8">
      <div className="w-full">
        <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
          <FaAlignJustify />
          <h1 className=" ">Home</h1>
        </div>
        <h2 className="text-gray-400 -ml-4 py-2">Main menu</h2>
        <Link className="w-full" color="foreground" href="#">
          <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
            <FaFileInvoiceDollar />
            <h1>Invoices</h1>
          </div>
        </Link>
        <Link className="w-full" color="foreground" href="#">
          <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
            <FaFile />
            <h1>Estimates</h1>
          </div>
        </Link>
        <Link className="w-full" color="foreground" href="#">
          <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
            <FaUsers />
            <h1>Customers</h1>
          </div>
        </Link>
        <Link className="w-full" color="foreground" href="#">
          <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
            <FaWarehouse />
            <h1>Suppliers</h1>
          </div>
        </Link>
        <Link className="w-full" color="foreground" href="#">
          <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
            <FaFileLines />
            <h1>Reports</h1>
          </div>
        </Link>
      </div>
      <div className="w-full">
        <h2 className="text-gray-400 -ml-4 py-2">General</h2>

        <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
          <FaGear />
          <h1>Settings</h1>
        </div>
        <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
          <FaQuestion />
          <h1>Help</h1>
        </div>
        <div className="flex gap-4 items-center hover:bg-[#0072f530] w-3/4 rounded-lg p-2 ">
          <FaBook />
          <h1>FAQ</h1>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-gray-400 -ml-4 py-2">Support</h2>

        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Support</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Terms</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">
          Conditions
        </h1>
      </div>
    </div>
  );
}
