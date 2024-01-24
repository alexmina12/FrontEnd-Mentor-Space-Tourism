import { useState } from "react";
import logo from "./../assets/shared/logo.svg";
import moon from "./../assets/destination/image-moon.png";
import mars from "./../assets/destination/image-mars.png";
import europa from "./../assets/destination/image-europa.png";
import titan from "./../assets/destination/image-titan.png";

function Space() {
  const [option, setOption] = useState("HOME");
  const [planet, setPlanet] = useState("MOON");
  // const [active, setActive] = useState(false);

  const handleOptionClick = (option) => {
    console.log(option);
    setOption(option);
  };

  const handlePlanet = (planet) => {
    setPlanet(planet);
  };

  const getBackgroundClass = () => {
    switch (option) {
      case "DESTINATION":
        return "bg-destination-desktop transition-bg duration-1000";
      case "CREW":
        return "bg-crew-desktop transition-bg duration-1000";
      case "TECHNOLOGY":
        return "bg-technology-desktop transition-bg duration-1000";
      default:
        return "bg-home-desktop transition-bg duration-1000";
    }
  };

  // const getCurrrentPlanet = () => {
  //   switch (planet) {
  //     case "MARS":
  //       return <p>This is Mars</p>;
  //   }
  // };
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
                className={`h-full hover:border-b-4 hover:border-b-half_white flex items-center ${
                  option === "HOME" ? "border-b-4 border-b-tertiary" : ""
                }`}
              >
                00 HOME
              </a>
              <a
                onClick={() => handleOptionClick("DESTINATION")}
                className={`h-full hover:border-b-4 hover:border-b-half_white flex items-center ${
                  option === "DESTINATION"
                    ? "border-b-4 border-b-tertiary "
                    : ""
                }`}
              >
                <p>01 DESTINATION</p>
              </a>
              <a
                onClick={() => handleOptionClick("CREW")}
                className={`h-full hover:border-b-4 hover:border-b-half_white flex items-center ${
                  option === "CREW" ? "border-b-4 border-b-tertiary" : ""
                }`}
              >
                02 CREW
              </a>
              <a
                onClick={() => handleOptionClick("TECHNOLOGY")}
                className={`h-full hover:border-b-4 hover:border-b-half_white flex items-center ${
                  option === "TECHNOLOGY" ? "border-b-4 border-b-tertiary " : ""
                }`}
              >
                03 TECHNOLOGY
              </a>
            </nav>
          </div>
        </div>
        {option === "HOME" && (
          <>
            <div className="grid grid-cols-2 ml-10 ">
              <div className="mt-[25%] ml-[15%] w-[800px]">
                <h5 className="h5 text-secondary">SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className="h1 text-tertiary">SPACE</h1>
                <p className="body-text text-secondary w-[480px] text-justify">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
              <div className="mx-auto mt-[38%] mr-[25%]">
                <button className="w-[274px] text-center h-[274px] font-[Bellefair] text-[32px] tracking-[2px] bg-tertiary rounded-full transition-all duration-[1500ms] hover:ring-[75px] hover:ring-opacity-50 hover:ring-shadow_white">
                  <p className="m-auto ">EXPLORE</p>
                </button>
              </div>
            </div>
          </>
        )}{" "}
        {option === "DESTINATION" && (
          <>
            <div className="grid grid-cols-2 w-[100vw]">
              <div className="flex flex-col mt-[-100px] ml-[10%] ">
                <p className="sh1 ml-[20%] text-secondary">
                  <span className="opacity-25 font-bold h5">01</span> PICK YOUR
                  DESTINATION
                </p>
                {planet === "MOON" && (
                  <img src={moon} className="planet" alt="Moon"></img>
                )}
                {planet === "MARS" && (
                  <img src={mars} className="planet" alt="Mars"></img>
                )}

                {planet === "EUROPA" && (
                  <img src={europa} className="planet" alt="Mars"></img>
                )}
                {planet === "TITAN" && (
                  <img src={titan} className="planet" alt="Mars"></img>
                )}
              </div>
              <div className="ml-[15%]">
                <nav className="flex justify-between w-[20vw] nav text-tertiary ">
                  <a onClick={() => handlePlanet("MOON")}>MOON</a>
                  <a onClick={() => handlePlanet("MARS")}>MARS</a>
                  <a onClick={() => handlePlanet("EUROPA")}>EUROPA</a>
                  <a onClick={() => handlePlanet("TITAN")}>TITAN</a>
                </nav>
                {planet === "MOON" && (
                  <>
                    <h2 className="h2 text-tertiary ml-4">MOON</h2>
                    <p className="body-text text-indigo-200 w-[450px] h-auto">
                      See our planet as you’ve never seen it before. A perfect
                      relaxing trip away to help regain perspective and come
                      back refreshed. While you’re there, take in some history
                      by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div className="w-[445px] h-[1px] bg-[#383B4B] mt-20 mb-10"></div>
                    <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16">
                      <p className="sh2 text-indigo-200">AVG. DISTANCE</p>
                      <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                      <p className="sh1 text-tertiary">384,400 KM</p>
                      <p className="sh1 text-tertiary">3 DAYS</p>
                    </div>
                  </>
                )}
                {planet === "MARS" && (
                  <>
                    <h2 className="h2 text-tertiary ml-4">MARS</h2>
                    <p className="body-text text-indigo-200 w-[450px] h-auto">
                      Don’t forget to pack your hiking boots. You’ll need them
                      to tackle Olympus Mons, the tallest planetary mountain in
                      our solar system. It’s two and a half times the size of
                      Everest!
                    </p>
                    <div className="w-[445px] h-[1px] bg-[#383B4B] mt-20 mb-10"></div>
                    <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16">
                      <p className="sh2 text-indigo-200">AVG. DISTANCE</p>
                      <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                      <p className="sh1 text-tertiary">225 MIL. KM</p>
                      <p className="sh1 text-tertiary">9 MONTHS</p>
                    </div>
                  </>
                )}
                {planet === "EUROPA" && (
                  <>
                    <h2 className="h2 text-tertiary ml-4">EUROPA</h2>
                    <p className="body-text text-indigo-200 w-[450px] h-auto">
                      The smallest of the four Galilean moons orbiting Jupiter,
                      Europa is a winter lover’s dream. With an icy surface,
                      it’s perfect for a bit of ice skating, curling, hockey, or
                      simple relaxation in your snug wintery cabin.
                    </p>
                    <div className="w-[445px] h-[1px] bg-[#383B4B] mt-20 mb-10"></div>
                    <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16">
                      <p className="sh2 text-indigo-200">AVG. DISTANCE</p>
                      <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                      <p className="sh1 text-tertiary">628 MIL. KM</p>
                      <p className="sh1 text-tertiary">3 YEARS</p>
                    </div>
                  </>
                )}
                {planet === "TITAN" && (
                  <>
                    <h2 className="h2 text-tertiary ">TITAN</h2>
                    <p className="body-text text-indigo-200 w-[450px] h-auto">
                      The only moon known to have a dense atmosphere other than
                      Earth, Titan is a home away from home (just a few hundred
                      degrees colder!). As a bonus, you get striking views of
                      the Rings of Saturn.{" "}
                    </p>
                    <div className="w-[445px] h-[1px] bg-[#383B4B] mt-20 mb-10"></div>
                    <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16">
                      <p className="sh2 text-indigo-200">AVG. DISTANCE</p>
                      <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                      <p className="sh1 text-tertiary">1.6 BIL. KM</p>
                      <p className="sh1 text-tertiary">7 YEARS</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Space;
