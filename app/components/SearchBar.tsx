'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

function SearchBar() {


  return (
    <>
      {/* SEARCH */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#121212] placeholder:text-[#aaaaaa] placeholder:text-base px-[8px] w-[362px] h-10 border border-[#303030] text-[#fff] rounded-tl-2xl rounded-bl-2xl outline-none"
        />

        {/* SEARCH BUTTON */}
        <div className="bg-[#303030] w-[50px] h-10 flex justify-center items-center cursor-pointer rounded-tr-2xl rounded-br-2xl">
          <Image
            src="/Search.png"
            alt="Search Icon"
            width={24}
            height={24}
            className=""
          />
        </div>
        {/* MICROPHONE ICON */}
        <div className="p-1 bg-[#000] rounded-full ml-2 hover:bg-[#303030] duration-500 cursor-pointer">
          <Image
            src="/MicrophoneIcon.png"
            alt="Microphone Icon"
            width={30}
            height={30}
            className=""
          />
        </div>
      </div>
    </>
  )
}

export default SearchBar