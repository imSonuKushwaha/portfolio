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
        <div className="col-span-4">
          <Name />
        </div>
        <div className="col-start-10 col-span-3">
          <SocialMedia />
        </div>
      </div>
      <div className="grid grid-cols-12 text-base text-orange-100 font-semibold p-3 bg-[#44494F]">
        <div className="col-start-3 col-span-8">
          <Experience />
        </div>
        <div className="col-start-1 col-span-3">
          <Tab />
        </div>
        <div className="col-start-6 col-span-2 h-full flex justify-center items-center pr-6">
          <ResumeButton />
        </div>
        <div className="col-start-9 col-span-4 ">
          <Academic />
        </div>
      </div>
    </>
  );
}

export default App;
