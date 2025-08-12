import React from "react";
import '../Firstpage/Firstpage.css';
import { FiArrowUpRight } from "react-icons/fi";
import fanicon from "../../assets/fanicon.png";
import sunflower from "../../assets/sunflower.png";
import sun from "../../assets/sun.png";
import flower from "../../assets/flower.png";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const Fourthpage = () => {
  return (
    <section className="bg-[#FFF] pb-20">
      <h1 className="bricolage-grotesque why">Why Choose <br /> Softwarechamber</h1>
      <p className="outfit deliver">Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.</p>
      <div className="lets">
        <button className=" btn bg-[#2CCEBA] rounded-4xl py-5.5 "><span className="text-white">Let's Discuss</span> <FiArrowUpRight className="ml-3 w-[20px] h-[20px] rounded-full bg-white" color="black" /></button>
      </div>
      <div className="mt-15 md:flex lg:gap-4 lg:mx-4 mx-1 ">
        <RiArrowLeftSLine className="md:block hidden mt-45  left-arrow" color="white" size={50} />
        <div className="Card-t card w-96 bg-base-100 card-xl shadow-sm mb-4 card-width">
          <div className="card-body">
            <div className="border-b-[#A5A5A5] border-b-1  pb-5 flex justify-between items-center">
              <h2 className="card-title bricolage-grotesque text-black">Efficiency</h2>
              <img className="w-[40px]" src={fanicon} alt="" />
            </div>
            <p className="outfit pt-5">Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.</p>
          </div>
        </div>
        <div className="Card-t card w-96 bg-base-100 card-xl shadow-sm mb-4 md:mt-10 card-width">
          <div className="card-body">
            <div className="border-b-[#A5A5A5] border-b-1  pb-5 flex justify-between items-center">
              <h2 className="card-title bricolage-grotesque text-black">Adaptability</h2>
              <img className="w-[40px]" src={sunflower} alt="" />
            </div>
            <p className="outfit pt-5">Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.</p>
          </div>
        </div>
        <div className="Card-t card w-96 bg-base-100 card-xl shadow-sm mb-4 card-width">
          <div className="card-body">
            <div className="border-b-[#A5A5A5] border-b-1  pb-5 flex justify-between items-center">
              <h2 className="card-title bricolage-grotesque text-black">Scalabiliry</h2>
              <img className="w-[40px]" src={sun} alt="" />
            </div>
            <p className="outfit pt-5">Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.</p>
          </div>
        </div>
        <div className="Card-t card w-96 bg-base-100 card-xl shadow-sm mb-4 md:mt-10 card-width">
          <div className="card-body">
            <div className="border-b-[#A5A5A5] border-b-1  pb-5 flex justify-between items-center">
              <h2 className="card-title bricolage-grotesque text-black">Precision</h2>
              <img className="w-[40px]" src={flower} alt="" />
            </div>
            <p className="outfit pt-5">Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.</p>
          </div>
        </div>
        <RiArrowRightSLine className="md:block hidden mt-45  left-arrow" color="white" size={50} />
      </div>
    </section>
  )
}

export default Fourthpage;