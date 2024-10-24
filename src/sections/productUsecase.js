import React from "react";
import corner from "../assets/images/corner.svg";
import ring from "../assets/images/ring_corner.svg";
import blurimg from "../assets/images/blur_ring.svg";

const useCases = [
  {
    title: "Call centers",
    description:
      "Improve customer service, streamline operations, and ensure compliance with regulatory requirements.",
  },
  {
    title: "Virtual meetings",
    description:
      "Make your virtual meetings efficient, productive, and secure. Save time and improve customer service.",
  },
  {
    title: "Content & media",
    description:
      "Create, edit, and distribute audio and video content more efficiently.",
  },
  {
    title: "Workplace collaboration",
    description:
      "Enhance collaboration across departments, streamline operations, and improve knowledge management.",
  },
];

function UseCaseItem({ title, description }) {
  return (
    <div className="relative flex flex-col">
      <div className="bg-[#5253B9] rounded-full circle-div w-[40px] opacity-40 h-[40px] z-0"></div>
      <h3 className="text-[#000] absolute top-[12px] start-[12px] font-bold  ">{title}</h3>
      <p className="text-[#9A9A9A] text-sm px-3">{description}</p>
    </div>
  );
}

function ProductUsecase() {
  return (
    <div className="bg-white">

      <div className="container mx-auto py-16 px-4">
        <div className="flex gap-24 flex-col md:flex-row">
          {/* Left Text */}
          <div className="w-full h-full md:w-2/6 md:mb-0 flex flex-col relative">
            <h2 className="text-[2.3em] font-semibold relative z-10">
              <span className="gradient-text-header">Use Cases</span>
            </h2>
            <p className="text-[#A0A0A0] relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lsed do eiusmod tempor incidit ut
         
            </p>
          </div>

          {/* Right Grid */}
          <div className="w-full md:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => (
              <UseCaseItem key={index} title={useCase.title} description={useCase.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUsecase;
