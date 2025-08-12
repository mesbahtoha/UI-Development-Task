import React from "react";
import '../Firstpage/Firstpage.css';
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3.svg";
import people from "../../assets/people.jpg";
import ek from "../../assets/1.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/4.png";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Secondpage = () => {

    return (
        <section className="bricolage-grotesque ">
            <div className="mt-20 ">
                <img className="lg:ml-10  md:ml-5 hidden lg:block" src={Frame2} alt="" />
                <p className="lg:text-[60px] md:text-[50px] text-[35px] lg:-mt-15 lg:ml-[80px] text-center A">
                    At Software Chamber, <span className="B">we specialize</span> in turning complex challenges into elegant <span className="B">digital solutions</span>
                </p>
                <img src={Frame3} alt="" className="lg:-mt-14 lg:ml-[82%] hidden lg:block" />
            </div>
            <div className="flex flex-wrap justify-evenly items-center mt-15">
                <div className="Rating">
                    <h3>20+</h3>
                    <p>Tech Partners</p>
                    <h3 className="mt-8">150+</h3>
                    <p>Project Completed</p>
                    <h3 className="mt-8">1K+</h3>
                    <p>Satisfied Customers</p>
                </div>
                <img className="people mt-10 mb-10 md:mt-0 md:mb-10 lg:mb-0" src={people} alt="" />
                <div>
                    <div className="ek flex gap-4">
                        <img src={ek} alt="" className="w-[60px] h-[60px]" />
                        <div>
                            <h2>Your Team in the cloud</h2>
                            <p className="mt-2">We Hire Best and brightest Talents to <br /> build world class technology</p>
                        </div>
                    </div>
                    <div className="ek flex gap-4">
                        <img src={two} alt="" className="w-[60px] h-[60px]" />
                        <div>
                            <h2>Grow more with less</h2>
                            <p className="mt-2">We have a competitive pricing  structure</p>
                        </div>
                    </div>
                    <div className="ek flex gap-4">
                        <img src={three} alt="" className="w-[60px] h-[60px]" />
                        <div>
                            <h2>Weekly sprint and reviews</h2>
                            <p className="mt-2">Our fast review and feedback loop is <br />  designed  to  keep in you in the driver's seat</p>
                        </div>
                    </div>
                    <div className="ek flex gap-4">
                        <img src={four} alt="" className="w-[60px] h-[60px]" />
                        <div>
                            <h2>Communication First</h2>
                            <p className="mt-2">We use modem tools and services to  collaborate</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mx-10 mt-20 mb-12">
                <div className="flex items-center gap-3">
                    <p className="service md:text-[60px] text-3xl">Services</p>
                    <img className="hidden md:block" src={Frame2} alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <p className="all">All Services</p>
                    <FaArrowRight className="cursor-pointer mt-1 w-[25px] h-[22px] md:border-2 md:border-gray-200 md:rounded-full md:bg-gray-200" />
                </div>
            </div>
            <div className="mb-22 flex justify-evenly flex-wrap">
                <div className="card-1 card w-96 bg-base-100 card-xl shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Web & Mobile App Devolopment</h2>
                        <p className="mt-3 mb-7">Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                        <div className="mb-5 card-actions md:rounded-full md:border-2 md:border-white w-7 h-7 md:bg-white">
                            <FiArrowUpRight className="w-[25px] h-[25px]" color="#27B4A3" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 card-2 card w-96 bg-base-100 card-xl shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Application Software Services</h2>
                        <p className="mt-3 mb-7">Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                        <div className="mb-5 card-actions md:rounded-full md:border-2 md:border-white w-7 h-7 md:bg-white">
                            <FiArrowUpRight className="w-[25px] h-[25px]" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 lg:mt-0  card-1 card w-96 bg-base-100 card-xl shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Software Caoding & Optimuation</h2>
                        <p className="mt-3 mb-7">Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                        <div className="mb-5 card-actions md:rounded-full md:border-2 md:border-white w-7 h-7 md:bg-white">
                            <FiArrowUpRight className="w-[25px] h-[25px]" color="#27B4A3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Secondpage;