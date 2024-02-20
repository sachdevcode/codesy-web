/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

const DevelopmentTeam = ({
  index,

  developer,
}) => {
  const [middleDeveloperCount, setMiddleDeveloperCount] = useState(0);
  const [seniorDeveloperCount, setSeniorDeveloperCount] = useState(0);
  const [techLeadCount, setTechLeadCount] = useState(0);

  const [pmCount, setPmCount] = useState(0);

  const [devs, setDevs] = useState({
    "Middle Developer": [],
    "Senior Developer": [],
    "Tech Lead": [],
    PM: [],
  });
  useEffect(() => {}, [devs]);
  const handleIncrement = (indexs, developers) => {
    setMiddleDeveloperCount((prevCount) => prevCount + 1);

    setDevs((prevDevs) => ({
      ...prevDevs,
      [developers]: Number(prevDevs[developers]) + 1,
    }));
    console.log(devs);
  };

  const handleDecrement = (indexs, developers) => {
    // setMiddleDeveloperCount((prevCount) => prevCount - 1);
    // setDevs((pre)=>[
    //   ...pre,[developers]:pre[developers]+1
    // ])
    // console.log(devs);
  };

  return (
    <div className="flex items-center justify-between mb-4" key={index}>
      <div className="flex items-center gap-2">
        <button
          className="bg-primary text-light  font-bold py-2 px-4 rounded-[50%]"
          onClick={() => handleDecrement(index, developer)}
        >
          -
        </button>
        <span className="border border-primary rounded-3xl  py-2 px-6">
          {middleDeveloperCount}
        </span>
        <button
          className="bg-dark  font-bold py-2 px-4 text-light rounded-[50%]"
          onClick={() => handleIncrement(index, developer)}
        >
          +
        </button>
      </div>
      <span className="">{developer}</span>
    </div>
  );
};

export default DevelopmentTeam;
