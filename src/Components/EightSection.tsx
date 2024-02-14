import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";

import Content from "../Content/Content";
import image1 from "../assets/clients/client-1.jpg";
import image2 from "../assets/clients/client-2.jpg";
import image3 from "../assets/clients/client-3.jpg";
import image4 from "../assets/clients/client-4.jpg";

const EightSection = () => {
  const carosouelclients = [
    image1,
    image2,
    image4,
    image1,
    image2,
    image1,
    image3,
    image2,
    image3,
    image4,
    image3,
    image4,
  ];
  return (
    <div className=" mt-[400px] py-28" id="clients">
      <div className="flex flex-col gap-5 w-[80%] m-auto px-2  max-[800px]:w-full">
        <h1 className="text-5xl font-bold text-dark">
          {Content.eigthSection.Title}
        </h1>
        <h4 className="font-normal text-2xl text-dark w-[670px] max-[800px]:w-full">
          {Content.eigthSection.desc}
        </h4>
      </div>
      <div className="max-w-screen-xl my-5  py-1 border-none mx-auto">
        <Swiper
          spaceBetween={2}
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            1150: {
              slidesPerView: 4,
            },
            760: {
              slidesPerView: 3,
            },
            // 550:{
            //   slidesPerView:3,
            // }
          }}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation, Grid]}
          className="pb-10 "
        >
          {carosouelclients.map((path, index) => (
            // justify-center
            <SwiperSlide key={path} className="flex justify-center">
              <img
                key={index}
                src={path}
                alt={`Image ${index + 1}`}
                className="object-contain h-32 w-32"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EightSection;
