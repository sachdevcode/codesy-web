import Content from "../Content/Content";
import ReuseButton from "../common/ReuseButton";

const FirstSection = () => {
  return (
<<<<<<< Updated upstream
    <div className="pt-16 ">
      <div className="firstSection py-10 px-9 ">
        <div className="w-[82%] m-auto ">
=======
    <div className="pt-16">
      <div className="firstSection py-10  px-9 max-[800px]:px-4 max-[800px]:py-4 ">
        <div className="w-[82%] m-auto max-[800px]:w-[100%] max-[800px]:m-0  ">
>>>>>>> Stashed changes
          <h1 className="font-bold text-5xl pt-3 max-[800px]:w-auto   text-primary">
            {Content.firstSection.title}
          </h1>
          <h3 className=" text-xl pt-3  max-[800px]:w-auto text-black">
            {Content.firstSection.description}
          </h3>
          <div className="flex flex-wrap my-3 ">
            <ReuseButton
              mainClass="bg-dark text-light 
              uppercase
              py-4 rounded-[50px]  w-[270px] px-5
              transition ease-linear delay-150  hover:bg-primary  hover:text-dark"
              text={Content.firstSection.first_btn}
              textClass="font-bold text-sm pr-4"
            />
            <ReuseButton
              mainClass="py-3 rounded-3xl uppercase w-[270px] px-5 transition ease-linear delay-150   hover:text-primary"
              text={Content.firstSection.second_btn}
              textClass="font-bold text-sm pr-4"
              iconClass="text-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
