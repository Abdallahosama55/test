import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { TypeAnimation } from "react-type-animation";
import BannerForm from "./BannerForm";
import HeaderMobileBanner from "./HeaderMobileBanner";
import SliderButton from "./ButtonSlider";
import pin from "../assets/images/pinss.svg";

function SliderBanner() {
  const [selectedId, setSelectedId] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const { t } = useTranslation();
  const currentItems = t("itemSlider", { returnObjects: true });
  const selectedItem = currentItems[selectedId];

  const handleSelectId = useCallback((index) => {
    setSelectedId(index);
  }, []);

  return (
    <div className="flex flex-col h-full relative md:mx-16 lg:mx-16">
      <div className="p-0 w-full rounded-[60px] faded-edges lg:mt-12 md:mt-12">
        <SliderButton
          currentItems={currentItems}
          selectedId={selectedId}
          handleSelectId={handleSelectId}
        />
      </div>

      <div className="relative mt-7 banner-div overflow-hidden flex justify-center slide-up transition-opacity duration-300">
        {/* <StaticImage
              src="../assets/images/mobileframe.svg"
              alt="Mobile frame"
              onLoad={() => setIsImageLoaded(true)}
            /> */}
        <div
          className="z-0 gap-x-0 gap-y-0 grid-rows-[auto_auto] grid-cols-[9fr_23fr_11fr] auto-cols-fr w-full min-h-full grid absolute inset-x-0"
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
            <div className="md:text-[14px] mt-4 text-[10px] lg:text-[14px] lg:min-h-[210px] md:h-[160px] min-h-[100px] border-[2px] bg-[#F8F8FA] pb-3 w-full rounded-lg">
              {selectedItem ? (
                <>
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
                </>
              ) : (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              )}
            </div>
            <img
              src={pin}
              alt="Pin"
              className="z-50 md:h-[40px] h-[30px] lg:h-[40px]"
            />
            <div className="w-full">
              <BannerForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SliderBanner;
