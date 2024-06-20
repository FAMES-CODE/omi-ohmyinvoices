import React from "react";
import { Avatar, Button } from "@nextui-org/react";
import { text } from "stream/consumers";
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
      <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Home</h1>
        <h2 className="text-gray-400 -ml-4 py-2">Main menu</h2>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Account</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Invoices</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Estimates</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Customers</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Suppliers</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Reports</h1>
      </div>
      <div className="w-full">
        <h2 className="text-gray-400 -ml-4 py-2">General</h2>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Settings</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Help</h1>        
      </div>
      <div className="w-full">
        <h2 className="text-gray-400 -ml-4 py-2">Support</h2>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">FAQ</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Support</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Terms</h1>
        <h1 className="p-2 rounded-lg hover:bg-[#0072f530] w-3/4">Conditions</h1>
      </div>
    </div>
  );
}

