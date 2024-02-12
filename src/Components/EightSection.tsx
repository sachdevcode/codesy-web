import Content from "../Content/Content";

const EightSection = () => {
  return (
    <div className=" mt-[450px]">
      <div className="flex flex-col gap-5 w-[80%] m-auto px-2  max-[800px]:w-full">
        <h1 className="text-5xl font-bold text-dark">
          {Content.eigthSection.Title}
        </h1>
        <h4 className="font-normal text-2xl text-dark w-[670px] max-[800px]:w-full">
          {Content.eigthSection.desc}
        </h4>
      </div>
    </div>
  );
};

export default EightSection;
