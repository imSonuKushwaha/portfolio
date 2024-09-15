import "./App.css";
import Academic from "./component/Academic";
import Experience from "./component/Experience";
import Name from "./component/Name";
import ResumeButton from "./component/ResumeButton";
import SocialMedia from "./component/SocialMedia";
import Tab from "./component/Tab";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 text-sm font-semibold p-3 bg-[#44494F]">
        <div className="col-start-1 col-span-4">
          <Name />
        </div>
        <div className="col-start-9 col-span-4">
          <SocialMedia />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-base text-orange-100 font-semibold p-8 bg-[#44494F]">
        <Experience />
        <div className="flex flex-row justify-between items-center mt-20">
          <Tab />
          <ResumeButton />
          <Academic />
        </div>
      </div>
    </>
  );
}

export default App;
