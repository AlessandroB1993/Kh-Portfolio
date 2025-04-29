import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Volume from "./Volume";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[17.1rem_1fr] grid-rows-[auto_1fr] bg-black">
      <header className="flex items-center justify-start py-2">
        <Volume />
      </header>
      <SideBar />
      <main className="mb-2 mr-2 overflow-auto rounded-xl border-2 border-blue-700 bg-gray-950 p-6 2xl:border-[3px]">
        <div className="mx-auto my-0 max-w-[120rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
