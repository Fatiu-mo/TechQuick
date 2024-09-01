import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return <div className="md:flex justify-around py-10 bg-[#FF6700] text-white">
    {open && (
        <div className="fixed inset-0 bg-white z-20">
          <div className="flex flex-col gap-8 text-xl text-black font-semibold justify-center items-center mt-20">
            <Link to='/'>Home</Link>
            <Link to='/about'>Courses</Link>
            <Link to='/disclaimer'>Services</Link>
            <Link to='/privacy-policy'>Demos</Link>
            <Link to='/contact'><button className="bg-[#FF6700] text-white  px-8 py-2 rounded-md ">
              Contact Us
            </button></Link>
            <button className="border-[#FF6700] border    px-8 py-2 rounded-md ">
              Help Me
            </button>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="absolute top-4 right-4 text-black"
          >
            <FaTimes size={25} />
          </button>
        </div>
      )}
    <div className="flex justify-between px-8 ">
      <Link to='/'><p className="font-rubikGlitch text-[#D1D1D1] text-lg">KayPHP</p></Link>
      <div className="md:hidden">
        <button onClick={() => setOpen(true)} className="">
              <FaBars size={25} />
            </button>
      </div>
    </div>
    <div className="md:flex hidden ">
      <ul className="flex gap-7 font-rubik font-medium">
        <Link to='/about'>Courses</Link>
        <Link to='/privacy-policy'>Services</Link>
        <Link to='/disclaimer'>Demos</Link>
      </ul>
    </div>
    <div className="md:flex gap-4 text-sm font-rubik hidden">
      <button className="bg-[#512609] w-32 py-2 px-4">Contact Us</button>
      <button className="w-32 py-2 px-4 border-[#512609] border-2">Help Me</button>
    </div>
  </div>
}

export default Navbar;
