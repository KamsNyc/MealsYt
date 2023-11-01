import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <section className="bg-[#212121] h-14 flex items-center px-4">
      {/* COL 1 */}
      <div className="flex gap-5 items-center">
        {/* MENU BUTTON */}

        <Image
          src={"/MenuIcon.png"}
          alt="Menu Icon"
          width={18}
          height={13}
          className=""
        />

        {/* YOUTUBE LOGO */}

        <Image
          src={"/YoutubeLogo.png"}
          alt="Logo Icon"
          width={90}
          height={21}
        />
      </div>
      {/* COL 2 */}
      <div className="">
        {/* SEARCH */}
        {/*   */}
      </div>
      {/* COL 3 */}
      <div className="">
        {/* Upload Video */}
        {/* App Grid Icon */}
        {/* NOTIFCATIONS ICON */}
        {/* AVATAR */}
      </div>
    </section>
  );
}

export default Navbar;
