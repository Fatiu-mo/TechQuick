import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Contact() {
    return <div className="font-poppins">
        <Navbar />
        <div className="max-w-screen-lg mx-auto pl-8 my-6">
        <span>Page</span>
        {` > `}
        <span>Legal</span>
        {` > `}
        <span className="font-semibold">Contact Us</span>
        </div>
        <div className="flex justify-center">
            <div className="w-[25rem] md:w-[40rem] shadow-all mb-44 p-6">
                <p className="text-3xl font-bold mb-5">Contact Us</p>
                <p><span className="text-xl font-bold">physical Address:</span> <br /> Opening Hours: Mon - Fri 2-4 utc <br /> USA: 24 calamity crow area beside area 51. Kansas, Usa. </p>
                <p className="my-4">Nigeria: Beside Government House Ikeja, Lagos
                Injective estate, cross lead. Fullalead. Plateau Oja oba, ilorin East.</p>
                <p className="text-xl font-bold">Phone Number</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consectetur?</p>
                <p className="text-xl font-bold my-5">Email Address</p>
                <p className="pb-60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, vero.</p>
            </div>
        </div>
        <Footer />
    </div>
}
export default Contact;