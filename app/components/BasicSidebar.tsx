"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ActiveSidebar from "./ActiveSidebar";
import {AiFillHeart, AiTwotoneSetting} from "react-icons/ai";

function BasicSidebar() {
  // States
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle opening and closing the sidebar
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to close the sidebar when a click occurs outside of it
  const closeSidebarOnClickOutside = (event) => {
    if (sidebarOpen) {
      const sidebar = document.querySelector(".sidebar"); // Replace with the actual class of your sidebar
      if (sidebar && !sidebar.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSidebarOnClickOutside);

    return () => {
      document.removeEventListener("click", closeSidebarOnClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <section className="h-full mt-[45px] px-1 bg-[#212121]">
      {/* MENU */}
      <div className="fixed top-[9px] left-[16px]">
        <div
          onClick={handleSidebar}
          className="rounded-full p-3 hover:bg-[#303030]"
        >
          <Image
            src={"/MenuIcon.png"}
            alt="Menu Icon"
            width={18}
            height={13}
            className="cursor-pointer "
          />
        </div>
      </div>

      {sidebarOpen ? (
        <>
          {/* BIG CONTAINER */}
          <ActiveSidebar />
        </>
      ) : (
        <>
          {/* MINI CONTAINER */}
          <div className="h-screen flex pt-4 flex-col min-w-[70px] pl-1">
            <div className="fixed w-[62px]">
              {/* HOME */}
              <div className="w-full flex flex-col items-center justify-center py-3 rounded-lg cursor-pointer gap-y-1 hover:bg-[#303030]">
                {/* ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  className="pointer-events: none; display: block; width: 100%; height: 100%;"
                >
                  <g>
                    <path
                      d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"
                      fill="white"
                    ></path>
                  </g>
                </svg>
                {/* HEADING */}
                <span className="text-[10px]">Home</span>
              </div>

              {/* ITEM 2 */}
              <div className="w-full flex flex-col items-center justify-center gap-y-1 py-3 rounded-lg cursor-pointer hover:bg-[#303030]">
                {/* Saved ICON */}
                <AiFillHeart size={24} />
                {/* HEADING */}
                <span className="text-[10px]">Saved</span>
              </div>

              {/* ITEM 3 */}
              <div className="w-full flex flex-col items-center justify-center gap-y-1 py-3 rounded-lg cursor-pointer hover:bg-[#303030]">
                {/* ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  className="pointer-events: none; display: block; width: 100%; height: 100%;"
                >
                  <path
                    d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                    fill="white"
                  ></path>
                </svg>
                {/* HEADING */}
                <span className="text-[10px]">Add Meal</span>
              </div>

              {/* Settings ITEM 4 */}
              <div className="w-full flex flex-col items-center justify-center gap-y-1 py-3 rounded-lg cursor-pointer hover:bg-[#303030]">
                {/* SETTINGS ICON */}
                <AiTwotoneSetting size={24} />
                {/* HEADING */}
                <span className="text-[10px]">Settings</span>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default BasicSidebar;
