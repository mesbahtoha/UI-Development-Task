import React from "react";
import './Fifthpage.css'
import '../Firstpage/Firstpage.css';
import Spotify from "../../assets/Spotify.svg";
import Group from "../../assets/Group 42665.svg";
import Dropbox from "../../assets/Dropbox.svg";
import Logo from "../../assets/Logo.svg";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import Vector from "../../assets/Vector.svg";
import Bitmap from "../../assets/Bitmap.png";

const Fifthpage =()=> {
return(
    <section className="fifthpage">
    <div className="flex flex-wrap mx-[5%] justify-between mb-[50px]">
    <h1 className="bricolage-grotesque Our md:text-[60px] text-[40px] mb-8">
        Our Stack Powers of <br /> the <span className="worlds">World’s</span> Most <br /> <span className="worlds">Beloved Companies</span>
    </h1>
    <div>
    <div className="flex gap-3">
        <div className="flex gap-3 items-center tag">
            <img className="border-2 border-white rounded-full p-1 bg-white" width={30} src={Spotify} alt=""/>
            <p className="text-[#E9E9E9]">Spotify</p>
        </div>
        <div className="flex gap-3 items-center tag">
            <img className="border-2 border-white rounded-full p-1 bg-white" width={30} src={Group} alt=""/>
            <p className="text-[#E9E9E9]">TalentQl</p>
        </div>
        </div>
        <div className="flex gap-3 mt-3.5 mb:ml-[-55px] ml-[50px] mb-3.5">
        <div className="flex gap-3 items-center tag ">
            <img className="border-2 border-white rounded-full p-1 bg-white" width={30} src={Dropbox} alt=""/>
            <p className="text-[#E9E9E9]">DropBox</p>
        </div>
        <div className="flex gap-3 items-center tag">
            <img className="border-2 border-white rounded-full p-1 bg-white" width={30} src={Vector} alt=""/>
            <p className="text-[#E9E9E9]">Fliqpay</p>
        </div>
        </div>
        <div className="flex gap-3 items-center tag ml-5.5">
            <img className="border-2 border-white rounded-full p-1 bg-white" width={30} src={Bitmap} alt=""/>
            <p className="text-[#E9E9E9]">Slack</p>
        </div>
        </div>
    </div>
    <div className="mx-[4%] Poster p-5 py-10 mb-20">
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
      <img className="mx-auto my-0px border-2 border-white rounded-lg p-2 bg-white mt-10 mb-7" width={45} src={Logo} alt="" />
      <h2 className="bricolage-grotesque Our md:text-[60px] text-[40px] text-center">Uncover the Design and Development Projects <span className="worlds">That Set Us Apart</span></h2>
      <button className="btn contact-btn outfit md:ml-[43%] ml-[23%] mt-8">Contact Us <span><svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M16.3471 7.49988L19.9027 11.0554M19.9027 11.0554L16.3471 14.611M19.9027 11.0554L7.45825 11.0554" stroke="#28303F" stroke-width="1.77778" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.6804 16.6068C12.463 17.5827 10.9177 18.1664 9.23598 18.1664C5.30862 18.1664 2.12487 14.9827 2.12487 11.0553C2.12487 7.12797 5.30862 3.94421 9.23598 3.94421C10.9177 3.94421 12.463 4.52796 13.6804 5.50388" stroke="#28303F" stroke-width="1.77778" stroke-linecap="round" />
          </svg></span></button>
    </div>
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
 <div className="mt-12 flex mx-10 justify-evenly flex-wrap gap-5 items-center">
<div className="flex items-center gap-10 mt-5">
<p className="text-[#FFFFFF]">Fintech</p>
<img width={105} src={image} alt="" />
</div>
<div className="flex items-center gap-10 mt-5">
<p className="text-[#FFFFFF]">Health Care</p>
<img width={105} src={image2} alt="" />
</div>
<div className="flex items-center gap-10 mt-5">
<p className="text-[#FFFFFF]">Developers</p>
<img width={105} src={image3} alt="" />
</div>
<div className="flex items-center gap-10 mt-5">
<p className="text-[#FFFFFF]">Software</p>
<img width={105} src={image4} alt="" />
</div>
<div className="flex items-center gap-10 mt-5">
<p className="text-[#FFFFFF]">Entertainment</p>
<img width={105} src={image5} alt="" />
</div>
<div className="flex items-center gap-10 mt-5">
<p className="text-[#FFFFFF]">Hospitality</p>
<img width={105} src={image6} alt="" />
</div>
<div className="flex items-center gap-10 mt-5">
<p className="text-[#FFFFFF]">Manufacturing</p>
<img width={105} src={image7} alt="" />
</div>
<div className="flex items-center gap-10 mt-5">
<p className="text-[#FFFFFF]">Auto Motive</p>
<img width={105} src={image8} alt="" />
</div>
 </div>
    </section>
)
}

export default Fifthpage;