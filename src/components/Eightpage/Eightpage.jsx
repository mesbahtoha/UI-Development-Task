import React from "react";
import '../Firstpage/Firstpage.css';
import Rectangle from "../../assets/Rectangle.png";
import menwomen from "../../assets/menwomen.png";
import { FiArrowUpRight } from "react-icons/fi";

const Eightpage = () => {
    return (
        <section className="page-eight">
            <h1 className="lg:text-[60px] md:text-[50px] text-[35px] text-center A md:w-[70%] mx-auto my-0px mb-5">
                Let’s talk about your next project. <span className="B">We’re here to help.</span>
            </h1>
            <p className="deliver">Deliver personalized experiences to your customers <br /> with AI-powered recommendation engines and <br /> dynamic content generation.</p>
            <div className="flex justify-evenly mt-15 flex-wrap gap-5">
                <img className="w-[500px] h-[500px]" src={Rectangle} alt="" />
                <div className="space-y-4">
                    {/* First Name */}
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-gray-100 rounded-lg p-3 outline-none"
                    />
                    {/* Last Name */}
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-gray-100 rounded-lg p-3 outline-none"
                    />
                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-gray-100 rounded-lg p-3 outline-none"
                    />
                    {/* Phone with country code */}
                    <div className="flex gap-2">
                        <select className="bg-gray-100 rounded-lg p-3 outline-none">
                            <option>+1</option>
                            <option>+44</option>
                            <option>+880</option>
                            <option>+91</option>
                        </select>
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="flex-1 bg-gray-100 rounded-lg p-3 outline-none"
                        />
                    </div>
                    {/* Job Title */}
                    <input
                        type="text"
                        placeholder="Job Title"
                        className="w-full bg-gray-100 rounded-lg p-3 outline-none"
                    />
                    {/* Message */}
                    <textarea
                        placeholder="Your message"
                        className="w-full bg-gray-100 rounded-lg p-3 outline-none h-28"
                    ></textarea>
                    <div className="lets">
                        <button className=" btn bg-[#2CCEBA] rounded-4xl py-5.5"><span className="text-white">Let's Discuss</span> <FiArrowUpRight className="ml-3 w-[20px] h-[20px] rounded-full bg-white" color="black" /></button>
                    </div>
                </div>
            </div>

            <section className="page-none bg-gradient-to-br from-[#0f2b27] to-[#0b0d0f] text-white py-16 px-8 mt-20">
                <h1 className="text-5xl font-extrabold mb-15 bricolage-grotesque lg:ml-5">
                    LET’S <span className="text-white">TALK</span>
                </h1>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    {/* Left Content */}
                    <div>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            A new era of energy, elegance, and elite competition begins here.
                            Where passion meets performance on the court like never before.
                        </p>
                        <h3 className="text-lg font-semibold mb-4 bricolage-grotesque">Social media</h3>
                        <div className="grid grid-cols-3 gap-3 text-gray-300">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Instagram ↗
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Twitter ↗
                            </a>
                            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Tiktok ↗
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Facebook ↗
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Linkedin ↗
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Youtube ↗
                            </a>
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className="space-y-6 md:ml-20">
                        <div>
                            <h3 className="text-lg font-semibold mb-1 bricolage-grotesque">ADDRESS</h3>
                            <p className="text-gray-300">
                                1901 Thornridge Cir,<br />
                                Shiloh, Hawaii 81063
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1 bricolage-grotesque">PHONE</h3>
                            <p className="text-gray-300">[+1] 872-298-3989</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1 bricolage-grotesque">EMAIL</h3>
                            <p className="text-gray-300">hello@tranzit.com</p>
                        </div>
                    </div>
                    <img className="h-[250px]" src={menwomen} alt="" />
                </div>
                <footer className=" text-gray-300 py-6 w-[85%] lg:ml-5 mt-10">
                    <div className="max-w-6xl mx-auto border-t border-dashed border-gray-500 pt-4 flex flex-col md:flex-row items-center justify-between">
                        {/* Left Side */}
                        <p className="text-sm">
                            2024 Software Chamber All Right Reserved
                        </p>
                        {/* Right Side */}
                        <div className="flex space-x-6 mt-3 md:mt-0">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms & Conditions</a>
                        </div>
                    </div>
                </footer>
            </section>

        </section>
    )
}

export default Eightpage;