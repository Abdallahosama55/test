import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import banner from "../assets/images/mobileframe.svg";
import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage
import BannerForm from "./BannerForm";
import HeaderMobileBanner from "./HeaderMobileBanner";
import { TypeAnimation } from "react-type-animation";
import pin from "../assets/images/pinss.svg";
import SliderButton from "./ButtonSlider";

function SliderBanner() {
  const [selectedId, setSelectedId] = useState(1);
  const { t } = useTranslation();
  const currentItems = t("itemSlider", { returnObjects: true });
  const selectedItem = currentItems[selectedId];

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleSelectId = useCallback((index) => {
    setSelectedId(index);
  }, []);

  return (
    <div className="flex flex-col h-full relative md:mx-16 lg:mx-16">
      <div className="p-0 w-full rounded-[60px] faded-edges lg:mt-12 md:mt-12">
        {/* Use the new SliderComponent and pass necessary props */}
        <SliderButton
          currentItems={currentItems}
          selectedId={selectedId}
          handleSelectId={handleSelectId}
        />
      </div>

      <div className="relative items-center mt-8">
        <div
          className={`relative banner-div  overflow-hidden flex justify-center slide-up transition-opacity duration-300 `}
        >
          <div      className="flex w-full h-auto absolute top-0 left-0 z-0 object-cover">
          <StaticImage
            src="../assets/images/mobileframe.svg"
            alt="categories"
            onLoad={() => setIsImageLoaded(true)}
         
       
          />

          </div>
     

          {isImageLoaded ? (
            <div className="content-img  z-20 flex flex-col mb-[8px] mt-[30px] w-full lg:my-[40px] max-w-[80%] items-center text-xs justify-center text-start text-black">
              <div className="md:text-[14px] text-[10px] lg:text-[14px] lg:min-h-[210px] md:h-[160px] min-h-[100px] border-[2px] bg-[#F8F8FA] pb-3 w-full rounded-lg">
                {selectedItem ? (
                  <div>
                    <HeaderMobileBanner />
                    <hr />
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
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default SliderBanner;
