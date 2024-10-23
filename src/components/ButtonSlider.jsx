import React, { useState, useCallback, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderButton({ currentItems, selectedId, handleSelectId }) {
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);

  const settings = {
    dots: true,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 3,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "0px",
    afterChange: () => setIsSliderInitialized(true),
  };

  useEffect(() => {
    // Simulate slider initialization delay

      setIsSliderInitialized(true);
   
  }, []);

  return (
    <div className="z-1 rounded-[60px] lg:pt-0">
      {isSliderInitialized ? (
        <Slider {...settings} className="mt-0 rounded-[60px]">
          {currentItems.map((item, index) => (
            <button
              key={index}
              className="flex justify-center w-full slider px-2 items-center h-12"
              onClick={() => handleSelectId(index)}
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
      ) : (
        <div className="flex items-center justify-center animate-pulse space-x-4">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex justify-center w-full slider px-2 items-center h-9">
              <span
                className="rounded-full w-[120px] py-1 h-full px-6 bg-gray-300"
              ></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SliderButton;
