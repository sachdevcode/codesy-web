import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import FirstSection from "./Components/FirstSection";
import FifthSection from "./Components/FifthSection";
import SixthSection from "./Components/SixthSection";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/fourthSection";
const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-[104vh]">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <FirstSection />
        <FifthSection />
        <SixthSection />
        <ThirdSection />
        <FourthSection />
      </div>
    </div>
  );
};

export default App;
