// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import FirstSection from "./Components/FirstSection";
import FifthSection from "./Components/FifthSection";
import SixthSection from "./Components/SixthSection";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/fourthSection";
import SecondSection from "./Components/SecondSection";
const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
};

export default App;
