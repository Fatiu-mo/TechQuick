import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import web3 from "../assets/web3.svg";

function Products() {
    return <div>
        <Navbar />
        <div className="max-w-screen-lg mx-auto pl-8 my-6">
            <span>Product</span>
        {` > `}
        <span>Course</span>
        {` > `}
        <span className="font-semibold">Haven1</span>
        </div>
        <div className="lg:grid grid-cols-3 mb-32">
            <div className="col-span-2 flex justify-center">
            <div className="w-[25rem] md:w-[40rem] shadow-all mb-20">
                <img src={web3} alt="products" className="p-4 w-full h-64" />
                <p className="text-2xl font-semibold pl-4 pb-2 text-[#FF6700]">Haven1 clone</p>
                <p className="pl-5 font-bold pb-96">product type: <span className="font-normal">Digital</span></p>
            </div>
            </div>
            <div className="col-span-1">
                <div className="flex flex-col gap-20 items-center lg:items-start">
                <div className="w-[20rem] shadow-all">
                    <div className="p-10 mb-11">
                    <p className="text-2xl mb-3 font-bold">Warranty</p>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil eveniet placeat nesciunt, est architecto doloribus odio non vel autem cum tempora itaque laboriosam quibusdam, facere voluptatibus dignissimos, obcaecati commodi?</p>
                    </div>
                </div>
                <div className="mb-10">
                    <button className="bg-[#FF6700] text-white text-center text-3xl font-bold w-[20rem] py-5 px-10">Purchase Item</button>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default Products