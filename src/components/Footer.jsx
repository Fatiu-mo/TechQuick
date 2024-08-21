import React from "react";
import { CiFacebook, CiInstagram  } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return <div className="bg-[#FF6700]">
    <footer className="py-32 px-6 md:grid md:grid-cols-3 font-poppins">
    <div className="ml-28 py-14">
      <p className="mb-3 font-bold text-lg text-gray-800 justify-center items-center">Techquick</p>
      <p className="mb-2 text-gray-700 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta accusamus, eum et debitis provident quis esse molestiae dicta aliquam repudiandae? Perspiciatis maxime, incidunt dignissimos dicta aliquid aut corrupti nulla.</p>
      <div className="flex gap-5 text-xl">
        <RiTwitterXFill />
        <CiFacebook />
        <CiInstagram />
      </div>
    </div>
    <div className="ml-28 flex flex-col gap-3">
      <p className="font-bold text-lg text-gray-800">Hire A</p>
      <ul className="flex flex-col gap-3 font-semibold text-sm text-amber-900">
        <li>Website Developer</li>
        <li>App Developer</li>
        <li>Ui Ux Designer</li>
        <li>Social Media Marketer</li>
      </ul>
      <p className="font-bold text-lg text-gray-800 mt-4">Pages</p>
      <ul className="flex flex-col gap-3 font-semibold text-sm text-amber-900">
        <li>Privacy Policy</li>
        <li>Disclaimer</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="ml-28 sm:mt-4 md:mt-0">
      <p className="font-bold text-lg text-gray-800 mb-3">Buy From Us</p>
      <ul className="flex flex-col gap-3 font-semibold text-sm text-amber-900">
        <li>Courses</li>
        <li>Php Scripts</li>
        <li>Ready Made Ui design template</li>
        <li>App source code</li>
      </ul>
      <div className="mt-10">
        <p className=" mb-3 font-medium text-gray-950">Hire Techquick For A Project</p>
        <button className="bg-[#512609] text-white w-fit px-12 py-2 ml-8">Lets Go</button>
      </div>

    </div>
  </footer>
  </div>
   
}

export default Footer;
