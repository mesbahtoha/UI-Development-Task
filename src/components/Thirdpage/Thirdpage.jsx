import '../Firstpage/Firstpage.css';
import earth from "../../assets/earth.png";

const Thirdpage = () => {

    return (
        <section className="third-page">
            <div>
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
                <h2 className="bricolage-grotesque our">Our Software <br /> <span className="development">Development Process</span></h2>
                <p className="deliver">Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
                </p>
                <button className="mt-5 btn contact-btn outfit lg:ml-[43%] md:ml-[40%] ml-[30%]">Contact Us <span><svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M16.3471 7.49988L19.9027 11.0554M19.9027 11.0554L16.3471 14.611M19.9027 11.0554L7.45825 11.0554" stroke="#28303F" stroke-width="1.77778" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.6804 16.6068C12.463 17.5827 10.9177 18.1664 9.23598 18.1664C5.30862 18.1664 2.12487 14.9827 2.12487 11.0553C2.12487 7.12797 5.30862 3.94421 9.23598 3.94421C10.9177 3.94421 12.463 4.52796 13.6804 5.50388" stroke="#28303F" stroke-width="1.77778" stroke-linecap="round" />
                </svg></span></button>
            </div>
            <div>
                <img className="mt-15" src={earth} alt="" />
            </div>
        </section>
    )
}

export default Thirdpage;