import React from "react";
import corner from "../assets/images/corner.svg";
import ring from "../assets/images/ring_corner.svg";
import blurimg from "../assets/images/blur_ring.svg";
import { HiArrowTrendingDown } from "react-icons/hi2";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiGoogleanalytics } from "react-icons/si"
import { HiClock } from "react-icons/hi";
function ProductPowerful() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left Text */}
          <div className="w-full  h-full md:w-3/6 mb-8 md:mb-0 flex flex-col relative items-center">
            <h2 className="text-[2.3em]  font-semibold">
              The most powerful
              <br />
              <span className="gradient-text-header"> speech to text</span>
            </h2>

            <img
              src={blurimg}
              alt="blurimg"
              className=" z-0 w-[200px]  start-0  absolute top-[-30px]"
            />
          </div>

          {/* Right Grid */}
          <div className="w-full md:w-3/6 grid grid-cols-1  md:grid-cols-2 gap-6">
            <div className=" flex flex-col gap-6">
              {/* Card 1 */}
              <div className="relative  flex-grow">
                {/* Corner Image */}
                <img
                  src={corner}
                  alt="corner"
                  className="absolute top-[30px] right-[35px] transform translate-x-1/2 -translate-y-1/2 z-0"
                  style={{ width: "80px" }} // Set size as necessary
                />
                <div className="bg-white h-full z-10 border-1 border-[#8e90f154] shadow border rounded-2xl p-6 overflow-hidden relative">
                  <div className="text-[#6162d1] mb-4">
                  <SiGoogleanalytics size={30} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                  <p className="text-gray-600">
                    30% lower word error rate (WER)
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative h-full  ">
                {/* Corner Image */}
                <img
                  src={corner}
                  alt="corner"
                  className="absolute top-[30px] right-[35px]  transform translate-x-1/2 -translate-y-1/2 z-0"
                  style={{ width: "80px" }}
                />
                <div className="bg-white border-1 border-[#8e90f154] shadow border rounded-2xl h-full p-6 overflow-hidden relative">
                  <div className="text-[#5253B9] mb-4">
             <HiArrowTrendingDown  size={66}/>

                  </div>
                  <h3 className="text-xl font-bold mb-2">Cost</h3>
                  <p className="text-gray-600">3-7x lower price</p>
                </div>
              </div>
            </div>

            <div className="  flex flex-col gap-5">
              {/* Card 3 */}
              <div className="relative min-h-[220px]">
                {/* Corner Image */}
                <img
                  src={corner}
                  alt="corner"
                  className="absolute top-[30px] right-[35px] transform translate-x-1/2 -translate-y-1/2 z-0"
                  style={{ width: "80px" }}
                />
                <div className="bg-white border-1 border-[#8e90f154] shadow border  h-full rounded-2xl p-6 overflow-hidden relative">
                  <div className="text-[#6162d1] mb-4">
               <LiaLaptopCodeSolid size={35}/>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Low-code/No-code for development
                  </h3>
                  <p className="text-gray-600">
                    Build your AI Voice Agents in minutes without hiring AI
                    Engineers
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative">
                {/* Corner Image */}

                <div className="bg-[#6162d1] text-white   border-1 border-[#8e90f154] shadow border rounded-2xl p-6 overflow-hidden py-12 relative">
                  <img
                    src={ring}
                    alt="speed"
                    className=" absolute z-0 top-0 right-0 w-[60px]"
                  />
                  <div className="text-white z-20 mb-4">
                  <HiClock size={30} />
                  </div>
                  <h3 className="text-xl font-bold z-10 mb-2">Speed</h3>
                  <p>Up to 40x faster inference time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPowerful;
