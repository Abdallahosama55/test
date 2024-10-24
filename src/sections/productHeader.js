import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import wave from "../assets/images/sound_Rate.svg"
import { FaMicrophone } from "react-icons/fa";
function ProductHeader() {
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  return (
    <div className="min-h-[60vh] flex flex-col px-12 justify-center gradient-bg-header items-center  gap-6 text-black pt-24">
      <h1 className="gradient-text-header lg:text-[3.2em] text-[36px] text-center  ">
        The complete Text to Speach API
      </h1>
      <p className="text-[#7D7D7D] text-[1em]  text-center">
        Audio and video transcription to power your apps. Exceptional accuracy
        and speed at scale in 99 languages. Powered by proprietary Whisper-Zero
        ASR, optimized for real-life enterprise audio.
      </p>
      <button className=" rounded-3xl border-[#3132A9] border-[1px] min-w-[120px] h-10 gradient-text-header">
        Try it{" "}
      </button>

   <div className=" flex w-full items-center justify-center lg:flex-row flex-col">
   <div className="relative mt-7 banner-div overflow-hidden flex justify-center slide-up transition-opacity duration-300">
        <div
          className="z-0 gap-x-0 gap-y-0 grid-rows-[auto_auto]  grid-cols-[9fr_23fr_11fr] auto-cols-fr w-full min-h-full grid absolute inset-x-0"
          dir="ltr"
        >
          <StaticImage
            src="../assets//images/left.svg"
            onLoad={() => setIsImageLoaded(true)}
            alt=""
            class="phone_bg-image"
          />
          <StaticImage
            src="../assets//images/middle.svg"
            onLoad={() => setIsImageLoaded(true)}
            alt=""
            class="phone_bg-image"
          />
          <StaticImage
            src="../assets///images/right.svg"
            onLoad={() => setIsImageLoaded(true)}
            alt=""
            class="phone_bg-image"
          />
        </div>

        {isImageLoaded && (
          <div className="content-img z-20 mt-12 flex flex-col mb-[8px] w-full lg:my-[40px] max-w-[80%] items-center text-xs justify-center text-start text-black">
            <div className="md:text-[14px] mt-4 text-[10px] lg:text-[14px] w-[380px] flex flex-col gap-6 px-6  ]  pb-3  rounded-lg">
              <div className=" rounded-xl  bg-gradient-to-r from-[#8485E6] to-[#3132A9] text-sm p-3 text-white">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod{" "}
              </div>
              <div className=" rounded-xl  bg-gradient-to-r from-[#8485E6] to-[#3132A9] text-sm p-3 text-white w-[90%]">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className=" rounded-xl  bg-gradient-to-r from-[#8485E6] to-[#3132A9] text-sm p-3 text-white">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,d do
                eiusmod tempor incididunt ut
              </div>
            </div>
          </div>
        )}
      </div>

      <img src={wave} alt="wave" />

<button className=" w-[70px] bg-[#3132A9] rounded-full h-[70px] flex justify-center items-center text-white">
<FaMicrophone />
</button>

   </div>

      


    </div>
  );
}

export default ProductHeader;
