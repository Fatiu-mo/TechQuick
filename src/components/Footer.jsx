import React from "react";
import { CiFacebook, CiInstagram  } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {

  return <div className="md:grid grid-cols-4 gap-10 bg-[#FF6700] -mx-6 font-poppins p-20">
    <div className="col-span-2 py-10 lg:pt-20 ">
      <p className="font-bold text-lg text-gray-800">Techquick</p>
      <p className="text-gray-700 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta accusamus, eum et debitis provident quis esse molestiae dicta aliquam repudiandae? Perspiciatis maxime, incidunt dignissimos dicta aliquid aut corrupti nulla.</p>
      <div className="flex gap-4 text-xl mt-2">
        <RiTwitterXFill />
        <CiFacebook />
        <CiInstagram />
      </div>
    </div>
    <div>
    <p className="font-bold text-lg text-gray-800 mb-3">Hire A</p>
      <ul className="font-semibold text-sm text-amber-900 flex flex-col gap-3">
        <li>Website Developer</li>
        <li>App Developer</li>
        <li>Ui Ux Designer</li>
        <li>Social Media Marketer</li>
      </ul>
      <p className="font-bold text-lg text-gray-800 mt-4 mb-3">Pages</p>
      <ul className="font-semibold text-sm text-amber-900 flex flex-col gap-3">
        <li>Privacy Policy</li>
        <li>Disclaimer</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="">
      <p className="font-bold text-lg text-gray-800 mt-4 mb-3">Buy From Us</p>
      <ul className="font-semibold text-sm text-amber-900 flex flex-col gap-3">
        <li>Courses</li>
        <li>Php Scripts</li>
        <li>Ready Made Ui design template</li>
        <li>App source code</li>
      </ul>
      <div className="mt-12">
        <p className="font-medium text-[#292727] mb-3">Hire Techquick For A Project</p>
        <div className="md:flex justify-center">
        <button className="flex items-center justify-center bg-[#512609] text-center font-semibold text-white w-fit px-9 py-2 whitespace-nowrap">Lets Go</button>
        </div>
      </div>
    </div>
  </div>
}

export default Footer;
