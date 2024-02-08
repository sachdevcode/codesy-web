import React from "react";
import Content from "../Content/Content";

const fourthSection = () => {
  return (
    <div className="flex flex-col bg-dark text-light h-auto z-[5] mb-44 pt-40 max-[750px]:text-center">
      <div className="w-[80%] m-auto  s">
        <div className="text-5xl font-medium py-16">
          <h1 className="text-light   md:w-[690px] max-[800px]:w-auto ">
            We are building
            <span className="text-primary"> solutions </span>
            that solves your business challenges
          </h1>
        </div>
        <>
          <div className="w-5 h-5 border-t border-l border-light max-[750px]:hidden"></div>

          <div className="flex flex-row pl-8 max-w-[1140px] justify-between gap-60 max-[750px]:flex-col max-[750px]:gap-5">
            <>
              <div className="w-5 h-5 border-t border-l border-light hidden max-[750px]:block"></div>

              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="text-7xl font-bold">
                    {Content.fourthSection.Count1}
                  </h1>
                  <p className="font-normal ">
                    {Content.fourthSection.Count1_desc}
                  </p>
                </div>
                <div>
                  <h1 className="text-7xl font-bold">
                    {Content.fourthSection.Count2}
                  </h1>
                  <p className="font-normal">
                    {Content.fourthSection.Count2_desc}
                  </p>
                </div>
              </div>
              <div className="w-5 h-5 border-b border-l border-light mb-10 hidden max-[750px]:block"></div>
            </>

            <div className="flex flex-col gap-10">
              <h1 className="font-normal text-2xl break-words w-[60%] max-[800px]:w-[95%]">
                {/* min-w-[350px]  */}
                {Content.fourthSection.desc}
              </h1>

              <button className="text-start">
                {Content.fourthSection.btn}
              </button>

              <p></p>
            </div>
          </div>
          <div className="w-5 h-5 border-b border-l border-light mb-10 max-[750px]:hidden"></div>
        </>
      </div>
    </div>
  );
};

export default fourthSection;
