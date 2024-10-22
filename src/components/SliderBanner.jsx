import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import "../styles/global.css";
import banner from "../assets/images/mobileframe.svg";
import BannerForm from "./BannerForm";
import HeaderMobileBanner from "./HeaderMobileBanner";
import { TypeAnimation } from "react-type-animation";
import pin from "../assets/images/pinss.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function SliderBanner() {
  const [selectedId, setSelectedId] = useState(1); // State to track selected button
  const { t, i18n } = useTranslation();
  const currentItems = t("itemSlider", { returnObjects: true });
  const selectedItem = currentItems[selectedId];
  const currentLanguage = i18n.language;

  const [isImageLoaded, setIsImageLoaded] = useState(false); // State to track if the image has loaded
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second duration
  }, []);
  const settings = {
    dots: true,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 3,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 3280, // Large screen breakpoint
        settings: {
          // slidesToShow: currentLanguage === "ar" ? 3 : 2.6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          // slidesToShow: currentLanguage === "ar" ? 3.5 : 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          // slidesToShow: 2.1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          // slidesToShow: 1.8,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col h-full relative md:mx-16 lg:mx-16">
      <div className="p-0 w-full rounded-[60px] faded-edges lg:mt-12 md:mt-12">
        <div className="z-1 rounded-[60px] lg:pt-0">
          <Slider {...settings} className="mt-0 rounded-[60px]">
            {currentItems.map((item, index) => (
              <button
                key={index}
                className="flex justify-center w-full slider px-2  items-center h-12 "
                onClick={() => setSelectedId(index)}
              >
                <span
                  className={`rounded-full w-full py-1 h-full px-6 shadow-custom
                  ${
                    selectedId === index
                      ? "bg-gradient-to-r text-white from-[#5253B9] to-[#8888C4]"
                      : "bg-white text-black border"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </Slider>
        </div>
      </div>

      <div className="relative items-center lg:mx-4 md:mx-24 mt-8">
        <div className="relative flex justify-center">
          <img
            src={banner}
            alt="categories"
            className="flex w-full absolute  z-0 justify-center  "
            onLoad={() => setIsImageLoaded(true)} 
          />
          {/* Text inside the image */}
{isImageLoaded &&(

<div className="  z-20 flex flex-col mb-[8px] mt-[30px] w-full lg:my-[40px] max-w-[80%] max-h-[100%] items-center text-xs justify-center text-start text-black">
<div className="md:text-[14px] text-[10px] lg:text-[14px] lg:h-full lg:min-h-[210px] md:h-[160px] min-h-[100px] border-[2px] bg-[#F8F8FA] pb-3 w-full rounded-lg">
  {selectedItem ? (
    <div>
      <div>
        <HeaderMobileBanner />
        <hr />
      </div>

      <p className="pt-3 lg:px-4 md:px-4 px-1">
        <TypeAnimation
          key={selectedItem.prompt}
          sequence={[selectedItem.prompt, 0]}
          repeat={0}
          omitDeletionAnimation={true}
        />
      </p>
    </div>
  ) : (
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  )}
</div>
<div>
  <img
    src={pin}
    alt="pin"
    className="z-50 md:h-[40px] h-[30px] lg:h-[40px]"
  />
</div>
<div className="w-full">
  <BannerForm />
</div>
</div>



)}
        
        </div>
      </div>
    </div>
  );
}

export default SliderBanner;
