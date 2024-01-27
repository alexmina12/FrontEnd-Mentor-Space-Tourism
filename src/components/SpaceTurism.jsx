import { useEffect, useState } from "react";
import logo from "./../assets/shared/logo.svg";
import moon from "./../assets/destination/image-moon.png";
import mars from "./../assets/destination/image-mars.png";
import europa from "./../assets/destination/image-europa.png";
import titan from "./../assets/destination/image-titan.png";
import open from "./../assets/shared/icon-hamburger.svg";
import close from "./../assets/shared/icon-close.svg";

function Space() {
  const [option, setOption] = useState("HOME");
  const [planet, setPlanet] = useState("MOON");
  const [showMenu, setShowMenu] = useState(false);
  const [nav, setNav] = useState(true);
  // const [active, setActive] = useState(false);

  const handleOptionClick = (option) => {
    console.log(option);
    setOption(option);
  };

  const handlePlanet = (planet) => {
    setPlanet(planet);
  };

  const handleNav = () => {
    setNav(!nav);
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
        return "bg-home-desktop transition-bg duration-1000 ";
    }
  };

  // const getCurrrentPlanet = () => {
  //   switch (planet) {
  //     case "MARS":
  //       return <p>This is Mars</p>;
  //   }
  // };

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`lg:bg-cover lg:w-screen lg:h-screen mobile:w-[100vw] mobile:h-[100vh] flex flex-wrap overflow-x-hidden ${getBackgroundClass()}`}
      >
        <div
          className={`lg:grid mobile:w-screen lg:grid-cols-[200px_auto_auto] mobile:flex mobile:justify-evenly h-[96px] ml-[1%] mr-0 lg:mt-[3.5%] `}
        >
          <img
            src={logo}
            className="w-[48px] h-[48px] my-auto lg:ml-[60px] "
          ></img>
          <div className="w-[40vw] max-w-[573px] h-[1px] mobile:bg-transparent bg-[#979797] opacity-25 my-auto ml-[10%] z-10 "></div>
          <div className="lg:w-[60vw] lg:max-w-full lg:h-[96px] mobile:bg-transparent lg:bg-tertiary lg:bg-opacity-5 lg:backdrop-blur-[81.55px] lg:pr-40 mobile:flex">
            {showMenu && nav ? (
              <img
                src={open}
                className="h-[24px] my-auto mobile:absolute mobile:top-9 mobile:right-14"
                onClick={handleNav}
              />
            ) : !nav ? (
              <>
                <div className="test">
                  <img
                    src={close}
                    className="h-[24px] my-auto mobile:absolute mobile:top-9 mobile:right-14 mobile:z-10"
                    onClick={handleNav}
                  />
                  <nav
                    className={`text-tertiary flex lg:justify-evenly h-full  ${
                      nav === true
                        ? ""
                        : "mobile:absolute mobile:right-0 gap-[32px] nav mobile:w-[280px] h-full bg-tertiary bg-opacity-5 backdrop-blur-[81.55px] mobile:flex-col"
                    }`}
                  >
                    <a
                      onClick={() => handleOptionClick("HOME")}
                      className={`lg:h-full lg:hover:border-b-4 lg:hover:border-b-half_white flex items-center mobile:mt-52 ${
                        option === "HOME"
                          ? "lg:border-b-4 border-b-tertiary"
                          : ""
                      }`}
                    >
                      <span className="mobile:font-bold">00</span> HOME
                    </a>
                    <a
                      onClick={() => handleOptionClick("DESTINATION")}
                      className={`lg:h-full lg:hover:border-b-4 lg:hover:border-b-half_white flex items-center ${
                        option === "DESTINATION"
                          ? "lg:border-b-4 lg:border-b-tertiary "
                          : ""
                      }`}
                    >
                      <span className="mobile:font-bold">01</span> DESTINATION
                    </a>
                    <a
                      onClick={() => handleOptionClick("CREW")}
                      className={`lg:h-full lg:hover:border-b-4 lg:hover:border-b-half_white flex items-center ${
                        option === "CREW"
                          ? "lg:border-b-4 lg:border-b-tertiary"
                          : ""
                      }`}
                    >
                      <span className="mobile:font-bold">02</span> CREW
                    </a>
                    <a
                      onClick={() => handleOptionClick("TECHNOLOGY")}
                      className={`lg:h-full lg:lg:hover:border-b-4 lg:lg:hover:border-b-half_white flex items-center ${
                        option === "TECHNOLOGY"
                          ? "lg:border-b-4 lg:border-b-tertiary "
                          : ""
                      }`}
                    >
                      <span className="mobile:font-bold">03</span> TECHNOLOGY
                    </a>
                  </nav>
                </div>
              </>
            ) : (
              window.innerWidth > 1024 && (
                <nav
                  className={`text-tertiary flex justify-evenly h-full ${
                    nav === true ? "" : "bg-red-200"
                  }`}
                >
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
                      option === "TECHNOLOGY"
                        ? "border-b-4 border-b-tertiary "
                        : ""
                    }`}
                  >
                    03 TECHNOLOGY
                  </a>
                </nav>
              )
            )}
          </div>
        </div>
        {option === "HOME" && (
          <>
            <div className="lg:grid lg:grid-cols-2 lg:ml-10 mobile:flex mobile:flex-wrap mobile:bg-home-mobile mobile:bg-bottom mobile:bg-cover">
              {" "}
              <div className="lg:mt-[25%] lg:ml-[15%] lg:w-[800px] mobile:flex mobile:flex-row mobile:flex-wrap mobile:justify-center mobile:mb-[30%]">
                <h5 className={`text-secondary ${showMenu ? "nav" : "h5"}`}>
                  SO, YOU WANT TO TRAVEL TO
                </h5>
                <h1
                  className={`text-tertiary ${showMenu ? "text-[80px]" : "h1"}`}
                >
                  SPACE
                </h1>
                <p
                  className={`${
                    showMenu ? "text-[15px] leading-[25px]" : "body-text"
                  } text-secondary lg:w-[480px] mobile:text-center mobile:w-[332px]`}
                >
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
              <div className="mx-auto lg:mt-[38%] lg:mr-[25%] ">
                <button className="lg:w-[274px] mobile:text-[20px] mobile:mx-auto lg:h-[274px] mobile:w-[150px] mobile:h-[150px] text-center font-[Bellefair] text-[32px] tracking-[2px] bg-tertiary rounded-full transition-all duration-[1500ms] hover:ring-[75px] hover:ring-opacity-50 hover:ring-shadow_white">
                  <p className="m-auto ">EXPLORE</p>
                </button>
              </div>
            </div>
          </>
        )}{" "}
        {option === "DESTINATION" && (
          <>
            <div className="grid lg:grid-cols-2 w-[100vw]">
              <div className="flex flex-col lg:mt-[-100px] mobile:mt-[-260px] lg:ml-[10%] mobile:mx-auto">
                <p
                  className={`sh1 lg:ml-[20%] text-secondary mobile:w-[300px] ${
                    showMenu ? "nav" : "sh1"
                  }`}
                >
                  <span
                    className={`planet ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                  >
                    01
                  </span>{" "}
                  PICK YOUR DESTINATION
                </p>
                {planet === "MOON" && (
                  <img
                    src={moon}
                    className={`planet ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                    alt="Moon"
                  ></img>
                )}
                {planet === "MARS" && (
                  <img
                    src={mars}
                    className={`planet  ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                    alt="Mars"
                  ></img>
                )}

                {planet === "EUROPA" && (
                  <img
                    src={europa}
                    className={`planet ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                    alt="Mars"
                  ></img>
                )}
                {planet === "TITAN" && (
                  <img
                    src={titan}
                    className={`planet ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                    alt="Mars"
                  ></img>
                )}
              </div>
              <div className="lg:ml-[15%]">
                <nav
                  className={`flex lg:justify-between mobile:justify-evenly lg:w-[20vw] text-tertiary mobile:mt-[-150px] ${
                    showMenu ? "sh2" : "nav"
                  }`}
                >
                  <a onClick={() => handlePlanet("MOON")}>MOON</a>
                  <a onClick={() => handlePlanet("MARS")}>MARS</a>
                  <a onClick={() => handlePlanet("EUROPA")}>EUROPA</a>
                  <a onClick={() => handlePlanet("TITAN")}>TITAN</a>
                </nav>
                {planet === "MOON" && (
                  <>
                    <h2
                      className={`text-tertiary lg:ml-4 mobile:text-center ${
                        showMenu ? "h3" : "h2"
                      }`}
                    >
                      MOON
                    </h2>
                    <p
                      className={`${
                        showMenu ? "text-[15px] leading-[25px]" : "body-text"
                      } text-indigo-200 lg:w-[450px] mobile:w-[330px] mobile:text-center mobile:mx-auto h-auto `}
                    >
                      See our planet as you’ve never seen it before. A perfect
                      relaxing trip away to help regain perspective and come
                      back refreshed. While you’re there, take in some history
                      by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div className="lg:w-[445px] mobile:w-[327px] mobile:mx-auto h-[1px] bg-[#383B4B] lg:mt-20 lg:mb-10 mobile:my-10"></div>
                    {!showMenu ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16">
                        <p className="sh2 text-indigo-200">AVG. DISTANCE</p>
                        <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                        <p className="sh1 text-tertiary">225 MIL. KM</p>
                        <p className="sh1 text-tertiary">9 MONTHS</p>
                      </div>
                    ) : (
                      <div className="h-[40px] w-fit mx-auto">
                        <p className="sh2 text-indigo-200 mb-2">
                          AVG. DISTANCE
                        </p>
                        <p className="sh1 text-tertiary mb-6">225 MIL. KM</p>
                        <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                        <p className="sh1 text-tertiary">9 MONTHS</p>
                      </div>
                    )}
                  </>
                )}
                {planet === "MARS" && (
                  <>
                    <h2
                      className={`text-tertiary lg:ml-4 mobile:text-center ${
                        showMenu ? "h3" : "h2"
                      }`}
                    >
                      MARS
                    </h2>
                    <p
                      className={`${
                        showMenu ? "text-[15px] leading-[25px]" : "body-text"
                      } text-indigo-200 lg:w-[450px] mobile:w-[330px] mobile:text-center mobile:mx-auto h-auto mobile:h-[125px]`}
                    >
                      Don’t forget to pack your hiking boots. You’ll need them
                      to tackle Olympus Mons, the tallest planetary mountain in
                      our solar system. It’s two and a half times the size of
                      Everest!
                    </p>
                    <div className="lg:w-[445px] mobile:w-[327px] mobile:mx-auto h-[1px] bg-[#383B4B] lg:mt-20 lg:mb-10 mobile:my-10"></div>
                    {!showMenu ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16">
                        <p className="sh2 text-indigo-200">AVG. DISTANCE</p>
                        <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                        <p className="sh1 text-tertiary">225 MIL. KM</p>
                        <p className="sh1 text-tertiary">9 MONTHS</p>
                      </div>
                    ) : (
                      <div className="h-[40px] w-fit mx-auto ">
                        <p className="sh2 text-indigo-200 mb-2">
                          AVG. DISTANCE
                        </p>
                        <p className="sh1 text-tertiary mb-6">225 MIL. KM</p>
                        <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                        <p className="sh1 text-tertiary">9 MONTHS</p>
                      </div>
                    )}
                  </>
                )}
                {planet === "EUROPA" && (
                  <>
                    <h2
                      className={`text-tertiary lg:ml-4 mobile:text-center ${
                        showMenu ? "h3" : "h2"
                      }`}
                    >
                      EUROPA
                    </h2>
                    <p
                      className={`${
                        showMenu ? "text-[15px] leading-[25px]" : "body-text"
                      } text-indigo-200 lg:w-[450px] mobile:w-[330px] mobile:text-center mobile:mx-auto h-auto`}
                    >
                      {" "}
                      The smallest of the four Galilean moons orbiting Jupiter,
                      Europa is a winter lover’s dream. With an icy surface,
                      it’s perfect for a bit of ice skating, curling, hockey, or
                      simple relaxation in your snug wintery cabin.
                    </p>
                    <div className="lg:w-[445px] mobile:w-[327px] mobile:mx-auto h-[1px] bg-[#383B4B] lg:mt-20 lg:mb-10 mobile:my-10"></div>
                    {!showMenu ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16">
                        <p className="sh2 text-indigo-200">AVG. DISTANCE</p>
                        <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                        <p className="sh1 text-tertiary">225 MIL. KM</p>
                        <p className="sh1 text-tertiary">9 MONTHS</p>
                      </div>
                    ) : (
                      <div className="h-[40px] w-fit mx-auto ">
                        <p className="sh2 text-indigo-200 mb-2">
                          AVG. DISTANCE
                        </p>
                        <p className="sh1 text-tertiary mb-6">225 MIL. KM</p>
                        <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                        <p className="sh1 text-tertiary">9 MONTHS</p>
                      </div>
                    )}
                  </>
                )}
                {planet === "TITAN" && (
                  <>
                    <h2
                      className={`text-tertiary lg:ml-4 mobile:text-center ${
                        showMenu ? "h3" : "h2"
                      }`}
                    >
                      TITAN
                    </h2>
                    <p
                      className={`${
                        showMenu ? "text-[15px] leading-[25px]" : "body-text"
                      } text-indigo-200 lg:w-[450px] mobile:w-[330px] mobile:text-center mobile:mx-auto h-auto`}
                    >
                      {" "}
                      The only moon known to have a dense atmosphere other than
                      Earth, Titan is a home away from home (just a few hundred
                      degrees colder!). As a bonus, you get striking views of
                      the Rings of Saturn.{" "}
                    </p>
                    <div className="lg:w-[445px] mobile:w-[327px] mobile:mx-auto h-[1px] bg-[#383B4B] lg:mt-20 lg:mb-10 mobile:my-10"></div>
                    {!showMenu ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16">
                        <p className="sh2 text-indigo-200">AVG. DISTANCE</p>
                        <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                        <p className="sh1 text-tertiary">225 MIL. KM</p>
                        <p className="sh1 text-tertiary">9 MONTHS</p>
                      </div>
                    ) : (
                      <div className="h-[40px] w-fit mx-auto ">
                        <p className="sh2 text-indigo-200 mb-2">
                          AVG. DISTANCE
                        </p>
                        <p className="sh1 text-tertiary mb-6">225 MIL. KM</p>
                        <p className="sh2 text-indigo-200">EST. TRAVEL TIME</p>
                        <p className="sh1 text-tertiary">9 MONTHS</p>
                      </div>
                    )}
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
