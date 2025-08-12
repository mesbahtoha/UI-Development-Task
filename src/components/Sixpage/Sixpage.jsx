import React from "react";
import '../Firstpage/Firstpage.css';
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3.svg";
import Base from "../../assets/Base.svg";
import logo_2 from "../../assets/logo 2.svg";
import { FaArrowRight } from "react-icons/fa";

const Sixpage = () => {
  return (
    <section className="pb-20">
      <p className="lg:text-[60px] md:text-[50px] text-[35px] text-center mt-10 bricolage-grotesque most">Comprehensive Answers to the Most</p>
      <div className=" bricolage-grotesque">
        <img className="lg:ml-5  md:ml-5 hidden lg:block" src={Frame2} alt="" />
        <p className="lg:text-[60px] md:text-[50px] text-[35px] lg:-mt-15 lg:ml-[80px] text-center A">
          Common Questions <span className="B">About Our Service</span>s and How  We<span className="B">Work</span>
        </p>
        <img src={Frame3} alt="" className="lg:-mt-14 lg:ml-[75%] hidden lg:block" />
      </div>
      <div className="flex justify-between items-center mx-10 mt-20 mb-12 border-b border-dashed border-[#A5A5A5] pb-5">
        <div className="flex items-center gap-3">
          <p className="service md:text-[70px] text-3xl">FAQ</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="all">All FAQ</p>
          <FaArrowRight className="cursor-pointer mt-1 w-[25px] h-[22px] md:border-2 md:border-[#2CCEBA] md:rounded-2xl md:bg-[#2CCEBA]" />
        </div>
      </div>
      <div className="join join-vertical bg-base-100 w-[100%] pl-10 pr-10 mb-20">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">What software development services does your company offer?</div>
          <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">What industries do you specialize in?</div>
          <div className="collapse-content text-sm">Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">What sets your company apart from the competition?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">Is my project idea and information kept confidential?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
      </div>
      <section className="seven-page">
        <div className="md:px-15 py-20">
          <div className="flex items-center gap-2 banner w-[280px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.5C6.54105 0.5 7.02057 0.86244 7.18776 1.39776L8.02893 4.09105H10.751C11.2921 4.09105 11.7716 4.45349 11.9388 4.98881C12.106 5.52413 11.9228 6.11058 11.4851 6.44142L9.28288 8.10597L10.1241 10.7993C10.2913 11.3346 10.1081 11.921 9.67037 12.2519C9.23266 12.5827 8.63994 12.5827 8.20222 12.2519L6 10.5873L3.79778 12.2519C3.36006 12.5827 2.76734 12.5827 2.32963 12.2519C1.89191 11.921 1.70875 11.3346 1.87594 10.7993L2.71712 8.10597L0.514893 6.44142C0.0771753 6.11058 -0.105983 5.52413 0.0612099 4.98881C0.228403 4.45349 0.707919 4.09105 1.24897 4.09105H3.97107L4.81224 1.39776C4.97944 0.86244 5.45895 0.5 6 0.5Z" fill="url(#paint0_linear_1_1049)" />
              <defs>
                <linearGradient id="paint0_linear_1_1049" x1="11.68" y1="0.0682018" x2="0.657724" y2="3.2563" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#087137" />
                  <stop offset="0.455" stop-color="#22C1AD" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[#FFF] inter">Smarter Idea, instant soultions</p>
          </div>
          <h2 className="bricolage-grotesque our md:px-27">Don’t just take our word for it. Hear what our clients say <span className="development">our clients say</span></h2>
          <div className="mt-15 speech items-center md:px-30 md:mx-20 py-12 mx-5 px-5">
            <p className="outfit">"Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo."</p>
            <div className="flex justify-between flex-wrap">
              <div className="flex gap-5 mt-13">
                <img width={50} src={Base} alt="" />
                <div className="bricolage-grotesque person items-center mt-1">
                  <h5>Alex Larkins</h5>
                  <p>Art direction of Airbnb</p>
                </div>
              </div>
              <img className="mt-12" src={logo_2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Sixpage;