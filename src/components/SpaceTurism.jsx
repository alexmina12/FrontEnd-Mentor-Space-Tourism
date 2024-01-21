import { useState } from "react";
import logo from "./../assets/shared/logo.svg";

function Space() {
  const [option, setOption] = useState("HOME");

  const handleOptionClick = (option) => {
    console.log(option);
    setOption(option);
  };

  const getBackgroundClass = () => {
    switch (option) {
      case "DESTINATION":
        return "bg-destination-desktop";
      case "CREW":
        return "bg-crew-desktop";
      case "TECHNOLOGY":
        return "bg-technology-desktop";
      default:
        return "bg-home-desktop";
    }
  };
  return (
    <>
      <div
        className={`bg-cover w-screen h-screen flex flex-wrap overflow-x-hidden ${getBackgroundClass()}`}
      >
        <div
          className={`grid grid-cols-[200px_auto_auto] justify-end h-[96px] ml-[1%] mr-0 mt-[3.5%] `}
        >
          <img
            src={logo}
            className="w-[48px] max-w-[50px] h-[48px] my-auto ml-[60px]"
          ></img>
          <div className="w-[40vw] max-w-[573px] h-[1px] bg-[#979797] opacity-25 my-auto ml-[10%] z-10"></div>
          <div className="w-[60vw] max-w-full h-[96px] bg-tertiary bg-opacity-5 backdrop-blur-[81.55px] pr-40">
            <nav className="text-tertiary flex justify-evenly h-full">
              <a
                onClick={() => handleOptionClick("HOME")}
                className="h-full hover:border-b-4 hover:border-b-tertiary flex items-center"
              >
                00 HOME
              </a>
              <a
                className="h-full hover:border-b-4 hover:border-b-tertiary flex items-center"
                onClick={() => handleOptionClick("DESTINATION")}
              >
                <p>01 DESTINATION</p>
              </a>
              <a
                onClick={() => handleOptionClick("CREW")}
                className="h-full hover:border-b-4 hover:border-b-tertiary flex items-center"
              >
                02 CREW
              </a>
              <a
                onClick={() => handleOptionClick("TECHNOLOGY")}
                className="h-full hover:border-b-4 hover:border-b-tertiary flex items-center"
              >
                03 TECHNOLOGY
              </a>
            </nav>
          </div>
        </div>
        <div className="grid grid-cols-2 ml-10 ">
          <div className="mt-[25%] ml-[15%] w-[800px]">
            <h5 className="h5 text-secondary">SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="h1 text-tertiary">SPACE</h1>
            <p className="body-text text-secondary w-[480px] text-justify">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="mx-auto mt-[38%] mr-[25%]">
            <button className="w-[274px] text-center h-[274px] font-[Bellefair] text-[32px] tracking-[2px] bg-tertiary rounded-full ">
              <p className="m-auto">EXPLORE</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Space;
