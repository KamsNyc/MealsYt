import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function Navbar() {
  return (
    <section className="bg-[#212121] h-14 flex items-center px-4 justify-between">
      {/* COL 1 */}
      <div className="flex gap-3 items-center">
        {/* MENU BUTTON */}
        <div className="hover:bg-[#303030] p-3 rounded-full">
        <Image
          src={"/MenuIcon.png"}
          alt="Menu Icon"
          width={18}
          height={13}
          className="cursor-pointer"
        />
        </div>

        {/* YOUTUBE LOGO */}
        <div className="">
        <Image
          src={"/YoutubeLogo.png"}
          alt="Logo Icon"
          width={90}
          height={21}
          className="cursor-pointer"
        />
        </div>
      </div>
      {/* COL 2 */}
      <div className="flex gap-5 items-center">
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
              src={"/Search.png"}
              alt="Search Icon"
              width={24}  
              height={24} 
              className=""
            />
          </div>
          {/* MICROPHONE ICON */}
          <div className="p-1 bg-[#000] rounded-full ml-2 hover:bg-[#303030] duration-500 cursor-pointer">
          <Image
              src={"/MicrophoneIcon.png"}
              alt="Microphone Icon"
              width={30}  
              height={30} 
              className=""
            />
          </div>
        </div>
      </div>
      {/* COL 3 */}
      <div className="flex items-center gap-4">
        {/* Upload Video */}
        <Image
              src={"/UploadVideo.png"}
              alt="Upload Video Icon"
              width={20}  
              height={14} 
              className="cursor-pointer"
            />
        {/* App Grid Icon */}
        <Image
              src={"/Apps.png"}
              alt="Apps Icon"
              width={16}  
              height={16} 
              className="cursor-pointer"
            />
        {/* NOTIFCATIONS ICON */}
        <Image
              src={"/Notifications.png"}
              alt="Notifications Icon"
              width={16}  
              height={19} 
              className="cursor-pointer"
            />
        {/* AVATAR */}
        <Avatar className="w-8 h-8 cursor-pointer">
  <AvatarImage src="https://github.com/kamsnyc.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      </div>
      </section>
  );
}

export default Navbar;
