import Image from 'next/image'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'

function ActiveSidebar() {
  return (
    <div className="sidebar h-screen bg-[#212121] text-white flex mt-2 flex-col px-0.5 min-w-[235px]">
           

           {/*TOP SECTION CONTAINER */}
           <section className='py-4 border-b border-[#4F4F4F]'>
            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] px-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* HOME ICON */}
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
                <span>Home</span>
            </div>

            {/* ITEM CONTAINER */}
            <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* Saved ICON */}
               <AiFillHeart size={24} />

                {/* HEADING */}
                <span>Saved</span>
            </div>
          
            {/* Add meal ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
               {/* Subscription ICON */}
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
                <span>Add Meal</span>
            </div>

           </section>

            {/* 2nd SECTION CONTAINER */}
            <section className='py-4 border-b border-[#4F4F4F]'>
               {/* Heading CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] px-4 flex items-center gap-2 text-[16px] font-medium cursor-pointer hover:bg-[#303030]">
                {/* HEADING */}
                <span>Your Liked</span>
                {/* RIGHT ARROW ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" focusable="false" className="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z" fill='white'></path></svg>
            </div>
           
            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">

                {/* HEADING */}
                <span>Show More</span>
            </div>



           </section>
            {/* 3rd SECTION CONTAINER */}
            <section className='py-4 border-b border-[#4F4F4F]'>
               {/* Heading CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] px-4 flex items-center gap-2 text-[16px] font-medium cursor-pointer hover:bg-[#303030]">
                {/* HEADING */}
                <span>Settings</span>
                {/* RIGHT ARROW ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" focusable="false" className="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z" fill='white'></path></svg>
            </div>
           
            {/* ITEM CONTAINER */}
           <div className="w-[95%] rounded-xl h-[40px] pl-4 flex items-center gap-6 text-[14px] font-medium cursor-pointer hover:bg-[#303030]">
           <CgProfile size={24}/>
                {/* HEADING */}
                <span>Profile</span>
            </div>



           </section>


          </div>
  )
}

export default ActiveSidebar
