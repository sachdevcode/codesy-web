import Content from "../Content/Content";
import ReuseButton from "../common/ReuseButton";

const SecondSection = () => {
  return (
    <div className="bg-dark text-light ">
      <div className="w-[80%] m-auto px-5 py-28   max-[800px]:w-auto">
        <h1 className="text-2xl font-normal w-[435px] py-10 max-[800px]:w-auto">
          {Content.secondSection.description}
        </h1>
        <ReuseButton
          text={Content.secondSection.btn}
          mainClass="border rounded-[50px] border-light w-[220px] py-3
          transition ease-linear delay-150  hover:bg-light hover:text-dark"
          textClass="pr-7 font-bold"
        />
      </div>
    </div>
  );
};

export default SecondSection;
