import Content from "../Content/Content";
import ReuseButton from "../common/ReuseButton";

const NinthSection = () => {
  return (
    <div className="ninth-sec py-12">
      <div>
        <div
          className=" flex w-[80%] m-auto px-2 max-[800px]:w-full max-[750px]:text-center max-[750px]:flex-col
         max-[750px]:gap-2"
        >
          <div className="text-light w-[80%] flex flex-col text-[28px] font-bold max-[800px]:w-full max-[750px]:text-[22px]">
            <h1>{Content.ninthSection.title1}</h1>
            <div className="flex items-center gap-2">
              <h1 className="min-w-[230px] max-[750px]:m-auto">
                {Content.ninthSection.title2}
              </h1>
              <div className="h-[2px]  text-dark bg-light w-[75%] max-[750px]:hidden" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ReuseButton
              mainClass="bg-accent py-0 h-[50px] uppercase rounded-3xl w-[250px] px-4"
              text={Content.ninthSection.btn}
              textClass="font-bold text-sm pr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinthSection;
