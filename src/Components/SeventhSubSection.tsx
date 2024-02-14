import ReuseButton from "../common/ReuseButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const SeventhSubSection = () => {
  // bg-white border border-gray-200 rounded-lg
  const cardsList = [1, 2, 3, 4, 5];
  return (
    <div className=" flex flex-wrap  my-10  ">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          1150: {
            slidesPerView: 3,
          },
          760: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 1,
            centeredSlides: false,
          },
        }}
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // autoplay={{ delay: 1090 }}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="pb-10 "
      >
        {cardsList.map((cards, index) => {
          return (
            <SwiperSlide
              className="w-[490px]  min-w-[390px] rounded-[18px] bg-[#F2F2F2]  hover:bg-accent   visit-section "
              key={index}
            >
              <div className="p-4 rounded-[18px] ">
                <div className=" ">
                  {/* <h1 className="px-3 text-end">Blockchain</h1> */}
                  <div className="flex flex-row items-center justify-between px-6 py-3">
                    <h1 className="">PeakDefi</h1>
                    <ReuseButton
                      text="Blockchain"
                      mainClass="border text-[#A08901] rounded-[50px] border-[#A08901] w-[120px] flex-row-reverse items-center py-2 px-16"
                      textClass=" font-bold text-sm"
                      iconClass="hidden"
                    />
                  </div>
                </div>
                <img
                  src="daniil.jpg"
                  width="800"
                  height="35"
                  alt="cards"
                  className="object-cover h-[250px]"
                />
                <div className="py-4">
                  <h5 className="mb-3 font-normal text-lg uppercase">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </h5>
                  <a href="#">
                    <ReuseButton
                      text="visit website"
                      mainClass="border uppercase rounded-[50px] border-dark w-[220px] py-3 flex-row-reverse items-center visit-button"
                      textClass="pl-3 font-bold visit-button"
                      iconClass="visit-button"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SeventhSubSection;
