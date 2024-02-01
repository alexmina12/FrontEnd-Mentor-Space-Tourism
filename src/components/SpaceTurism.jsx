/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import logo from "./../assets/shared/logo.svg";
import moon from "./../assets/destination/image-moon.png";
import mars from "./../assets/destination/image-mars.png";
import europa from "./../assets/destination/image-europa.png";
import titan from "./../assets/destination/image-titan.png";
import open from "./../assets/shared/icon-hamburger.svg";
import close from "./../assets/shared/icon-close.svg";
import commander from "./../assets/crew/image-douglas-hurley.png";
import specialist from "./../assets/crew/image-mark-shuttleworth.png";
import pilot from "./../assets/crew/image-victor-glover.png";
import engineer from "./../assets/crew/image-anousheh-ansari.png";
import launch from "./../assets/technology/image-launch-vehicle-landscape.jpg";
import capsule from "./../assets/technology/image-space-capsule-landscape.jpg";
import port from "./../assets/technology/image-spaceport-landscape.jpg";
import launch_p from "./../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule_p from "./../assets/technology/image-space-capsule-portrait.jpg";
import port_p from "./../assets/technology/image-spaceport-portrait.jpg";

function Space() {
  const [option, setOption] = useState("HOME");
  const [planet, setPlanet] = useState("MOON");
  const [tech, setTech] = useState("launch");
  const [showMenu, setShowMenu] = useState(false);
  const [nav, setNav] = useState(true);
  const [crew, setCrew] = useState("commander");

  const handleOptionClick = (option) => {
    setOption(option);
  };

  const handlePlanet = (planet) => {
    setPlanet(planet);
  };

  const handleCrew = (crew) => {
    setCrew(crew);
  };

  const handleTech = (tech) => {
    setTech(tech);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const getBackgroundClass = () => {
    if (window.innerWidth > 1366) {
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
    } else if (window.innerWidth <= 767) {
      switch (option) {
        case "CREW":
          return "bg-crew-mobile transition-bg duration-1000 mobile:bg-cover";
        case "DESTINATION":
          return "bg-destination-mobile transition-bg duration-1000 mobile:bg-cover";
        case "TECHNOLOGY":
          return "bg-technology-mobile transition-bg duration-1000 mobile:bg-cover";
        default:
          return "bg-home-mobile transition-bg duration-1000 mobile:bg-cover";
      }
    } else if (767 < window.innerWidth && window.innerWidth <= 1366) {
      switch (option) {
        case "CREW":
          return "bg-crew-tablet transition-bg duration-1000 bg-cover";
        case "DESTINATION":
          return "bg-destination-tablet transition-bg duration-1000 bg-cover";
        case "TECHNOLOGY":
          return "bg-technology-tablet transition-bg duration-1000 bg-cover";
        default:
          return "bg-home-tablet transition-bg duration-1000 bg-cover";
      }
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
        className={`lg:bg-cover lg:w-screen lg:h-screen mobile:w-[100vw] mobile:h-[100vh] tablet:w-screen tablet:h-screen mobile:flex lg:flex flex-wrap  ${getBackgroundClass()} overflow-hidden`}
      >
        <div
          className={`lg:grid mobile:w-screen lg:grid-cols-[200px_auto_auto] mobile:flex h-[96px] mr-0 lg:mt-[3.5%] tablet:flex`}
        >
          <img
            src={logo}
            className="w-[48px] h-[48px] my-auto lg:ml-[60px] mobile:ml-[40px] tablet:ml-[40px]"
            alt="logo"
          />
          {window.innerWidth > 1366 && (
            <div className="w-[40vw] max-w-[573px] h-[1px] bg-transparent bg-[#979797] opacity-25 my-auto ml-[10%] z-10 "></div>
          )}
          <div className="lg:w-[60vw] lg:max-w-full lg:h-[96px] mobile:bg-transparent lg:bg-tertiary lg:bg-opacity-5 lg:backdrop-blur-[81.55px] lg:pr-40 mobile:flex">
            {showMenu && nav ? (
              <img
                src={open}
                className="h-[24px] my-auto mobile:absolute mobile:top-9 mobile:right-14"
                onClick={handleNav}
                alt="open"
              />
            ) : !nav ? (
              <>
                <div className="test z-10">
                  <img
                    src={close}
                    className="h-[24px] my-auto mobile:absolute mobile:top-9 mobile:right-14 mobile:z-10"
                    onClick={handleNav}
                    alt="close"
                  />
                  <nav
                    className={`text-tertiary flex lg:justify-evenly h-full  ${
                      nav === true
                        ? ""
                        : "mobile:absolute mobile:right-0 gap-[32px] nav mobile:w-[280px] h-screen bg-tertiary bg-opacity-5 backdrop-blur-[81.55px] mobile:flex-col"
                    }`}
                  >
                    <a
                      onClick={() => {
                        handleOptionClick("HOME");
                        handleNav();
                      }}
                      className={`lg:h-full lg:hover:border-b-4 lg:hover:border-b-half_white flex items-center mobile:mt-52 ${
                        option === "HOME"
                          ? "lg:border-b-4 border-b-tertiary"
                          : ""
                      }`}
                    >
                      <span className="mobile:font-bold">00</span> HOME
                    </a>
                    <a
                      onClick={() => {
                        handleOptionClick("DESTINATION");
                        handleNav();
                      }}
                      className={`lg:h-full lg:hover:border-b-4 lg:hover:border-b-half_white flex items-center ${
                        option === "DESTINATION"
                          ? "lg:border-b-4 lg:border-b-tertiary "
                          : ""
                      }`}
                    >
                      <span className="mobile:font-bold">01</span> DESTINATION
                    </a>
                    <a
                      onClick={() => {
                        handleOptionClick("CREW");
                        handleNav();
                      }}
                      className={`lg:h-full lg:hover:border-b-4 lg:hover:border-b-half_white flex items-center ${
                        option === "CREW"
                          ? "lg:border-b-4 lg:border-b-tertiary"
                          : ""
                      }`}
                    >
                      <span className="mobile:font-bold">02</span> CREW
                    </a>
                    <a
                      onClick={() => {
                        handleOptionClick("TECHNOLOGY");
                        handleNav();
                      }}
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
            ) : window.innerWidth > 1366 ? (
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
            ) : (
              767 < window.innerWidth < 1366 && (
                <>
                  <div className="w-[60vw] h-[96px] bg-tertiary bg-opacity-5 backdrop-blur-[81.55px] absolute right-0 top-0">
                    <nav
                      className={`text-tertiary flex justify-evenly h-full ${
                        nav === true ? "" : "bg-red-200"
                      }`}
                    >
                      <a
                        onClick={() => handleOptionClick("HOME")}
                        className={`h-full hover:border-b-4 hover:border-b-half_white flex items-center sh2${
                          option === "HOME"
                            ? "border-b-4 border-b-tertiary"
                            : ""
                        }`}
                      >
                        HOME
                      </a>
                      <a
                        onClick={() => handleOptionClick("DESTINATION")}
                        className={`h-full hover:border-b-4 hover:border-b-half_white flex items-center sh2${
                          option === "DESTINATION"
                            ? "border-b-4 border-b-tertiary "
                            : ""
                        }`}
                      >
                        DESTINATION
                      </a>
                      <a
                        onClick={() => handleOptionClick("CREW")}
                        className={`h-full hover:border-b-4 hover:border-b-half_white flex items-center sh2${
                          option === "CREW"
                            ? "border-b-4 border-b-tertiary"
                            : ""
                        }`}
                      >
                        CREW
                      </a>
                      <a
                        onClick={() => handleOptionClick("TECHNOLOGY")}
                        className={`h-full hover:border-b-4 hover:border-b-half_white flex items-center sh2${
                          option === "TECHNOLOGY"
                            ? "border-b-4 border-b-tertiary "
                            : ""
                        }`}
                      >
                        TECHNOLOGY
                      </a>
                    </nav>
                  </div>
                </>
              )
            )}
          </div>
        </div>
        {option === "HOME" && (
          <>
            <div className="lg:grid lg:grid-cols-2 lg:ml-10 mobile:flex mobile:flex-wrap mobile:bg-home-mobile mobile:bg-bottom mobile:bg-cover tablet:flex tablet:flex-col tablet:text-center tablet:mt-[50%] tablet:translate-y-[-50%]">
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
                  } text-secondary lg:w-[480px] mobile:text-center mobile:w-[332px] tablet:w-[520px] tablet:mx-auto`}
                >
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
              <div className="mx-auto lg:mt-[38%] lg:mr-[25%] ">
                <button className="lg:w-[274px] mobile:text-[20px] mobile:mx-auto tablet:w-[242px] tablet:h-[242px] lg:h-[274px] mobile:w-[150px] mobile:h-[150px] text-center font-[Bellefair] text-[32px] tracking-[2px] bg-tertiary rounded-full transition-all duration-[1500ms] hover:ring-[75px] hover:ring-opacity-50 hover:ring-shadow_white">
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
                  className={`tablet:text-[20px] lg:ml-[20%] tablet:ml-6 text-secondary mobile:w-[300px] ${
                    showMenu ? "nav" : "sh1"
                  }`}
                >
                  <span
                    className={`planet  ${
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
                    className={`planet tablet:w-[300px] tablet:h-[300px]
                    ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                    alt="Moon"
                  ></img>
                )}
                {planet === "MARS" && (
                  <img
                    src={mars}
                    className={`planet tablet:w-[300px] tablet:h-[300px]  ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                    alt="Mars"
                  ></img>
                )}

                {planet === "EUROPA" && (
                  <img
                    src={europa}
                    className={`planet tablet:w-[300px] tablet:h-[300px] ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                    alt="Mars"
                  ></img>
                )}
                {planet === "TITAN" && (
                  <img
                    src={titan}
                    className={`planet tablet:w-[300px] tablet:h-[300px] ${
                      showMenu ? "w-[170px] h-[170px]" : "w-[445px] h-[445px]"
                    }`}
                    alt="Mars"
                  ></img>
                )}
              </div>
              <div className="lg:ml-[15%]">
                <nav
                  className={`flex lg:justify-between tablet:w-[80vw] tablet:mx-auto tablet:flex tablet:justify-evenly mobile:justify-evenly lg:w-[20vw] text-tertiary mobile:mt-[-150px] ${
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
                      className={`text-tertiary lg:ml-4 mobile:text-center tablet:justify-center tablet:flex tablet:text-[80px] ${
                        showMenu ? "h3" : "h2"
                      }`}
                    >
                      MOON
                    </h2>
                    <p
                      className={`${
                        showMenu ? "text-[15px] leading-[25px]" : "body-text"
                      } text-indigo-200 lg:w-[450px] tablet:w-[650px] tablet:mx-auto tablet:text-center mobile:w-[330px] mobile:text-center mobile:mx-auto h-auto `}
                    >
                      See our planet as you’ve never seen it before. A perfect
                      relaxing trip away to help regain perspective and come
                      back refreshed. While you’re there, take in some history
                      by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div className="lg:w-[445px] mobile:w-[327px] tablet:w-[573px] tablet:mx-auto tablet:my-10 mobile:mx-auto h-[1px] bg-[#383B4B] lg:mt-20 lg:mb-10 mobile:my-10"></div>
                    {!showMenu ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16 tablet:mx-auto">
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
                      className={`text-tertiary lg:ml-4 mobile:text-center tablet:justify-center tablet:flex tablet:text-[80px] ${
                        showMenu ? "h3" : "h2"
                      }`}
                    >
                      MARS
                    </h2>
                    <p
                      className={`${
                        showMenu ? "text-[15px] leading-[25px]" : "body-text"
                      } text-indigo-200 lg:w-[450px] tablet:w-[650px] tablet:mx-auto tablet:text-center mobile:w-[330px] mobile:text-center mobile:mx-auto h-auto `}
                    >
                      Don’t forget to pack your hiking boots. You’ll need them
                      to tackle Olympus Mons, the tallest planetary mountain in
                      our solar system. It’s two and a half times the size of
                      Everest!
                    </p>
                    <div className="lg:w-[445px] mobile:w-[327px] tablet:w-[573px] tablet:mx-auto tablet:my-10 mobile:mx-auto h-[1px] bg-[#383B4B] lg:mt-20 lg:mb-10 mobile:my-10"></div>
                    {!showMenu ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16 tablet:mx-auto">
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
                      className={`text-tertiary lg:ml-4 mobile:text-center tablet:justify-center tablet:flex tablet:text-[80px] ${
                        showMenu ? "h3" : "h2"
                      }`}
                    >
                      EUROPA
                    </h2>
                    <p
                      className={`${
                        showMenu ? "text-[15px] leading-[25px]" : "body-text"
                      } text-indigo-200 lg:w-[450px] tablet:w-[650px] tablet:mx-auto tablet:text-center mobile:w-[330px] mobile:text-center mobile:mx-auto h-auto `}
                    >
                      {" "}
                      The smallest of the four Galilean moons orbiting Jupiter,
                      Europa is a winter lover’s dream. With an icy surface,
                      it’s perfect for a bit of ice skating, curling, hockey, or
                      simple relaxation in your snug wintery cabin.
                    </p>
                    <div className="lg:w-[445px] mobile:w-[327px] tablet:w-[573px] tablet:mx-auto tablet:my-10 mobile:mx-auto h-[1px] bg-[#383B4B] lg:mt-20 lg:mb-10 mobile:my-10"></div>
                    {!showMenu ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16 tablet:mx-auto">
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
                      className={`text-tertiary lg:ml-4 mobile:text-center tablet:justify-center tablet:flex tablet:text-[80px] ${
                        showMenu ? "h3" : "h2"
                      }`}
                    >
                      TITAN
                    </h2>
                    <p
                      className={`${
                        showMenu ? "text-[15px] leading-[25px]" : "body-text"
                      } text-indigo-200 lg:w-[450px] tablet:w-[650px] tablet:mx-auto tablet:text-center mobile:w-[330px] mobile:text-center mobile:mx-auto h-auto `}
                    >
                      {" "}
                      The only moon known to have a dense atmosphere other than
                      Earth, Titan is a home away from home (just a few hundred
                      degrees colder!). As a bonus, you get striking
                      vbg-home-moh-siews of the Rings of Saturn.{" "}
                    </p>
                    <div className="lg:w-[445px] mobile:w-[327px] tablet:w-[573px] tablet:mx-auto tablet:my-10 mobile:mx-auto h-[1px] bg-[#383B4B] lg:mt-20 lg:mb-10 mobile:my-10"></div>
                    {!showMenu ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-[40px] w-fit gap-x-16 tablet:mx-auto">
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
        {option === "CREW" && (
          <>
            <div className="mobile:flex mobile:flex-wrap w-full mobile:mt-[-60%]">
              <p
                className={`${
                  window.innerWidth > 1366 ? "h5" : "nav"
                } text-tertiary mx-auto mt-10 mobile:text-center lg:absolute lg:left-64 lg:bottom-20 tablet:ml-10 top-[20%]`}
              >
                <span className="font-bold text-half_white">02</span> MEET YOUR
                CREW
              </p>
              <div>
                <div className="slider">
                  {crew === "commander" && (
                    <img
                      src={commander}
                      className="mobile:w-[177px] mobile:h-[222px] mobile:mx-auto crew-appear lg:absolute lg:right-0 lg:bottom-0 tablet:absolute tablet:bottom-0 tablet:left-[50%] tablet:translate-x-[-40%] tablet:w-[457px] tablet:h-[572px]"
                      alt="commander"
                    />
                  )}
                  {crew === "specialist" && (
                    <img
                      src={specialist}
                      className="mobile:w-[177px] mobile:h-[222px] mobile:mx-auto crew-appear lg:absolute lg:right-0 lg:bottom-0 tablet:absolute tablet:bottom-0 tablet:left-[50%] tablet:translate-x-[-40%] tablet:w-[457px] tablet:h-[572px]"
                      alt="specialist"
                    />
                  )}
                  {crew === "pilot" && (
                    <img
                      src={pilot}
                      className="mobile:w-[177px] mobile:h-[222px] mobile:mx-auto crew-appear lg:absolute lg:right-0 lg:bottom-0 tablet:absolute tablet:bottom-0 tablet:left-[50%] tablet:translate-x-[-40%] tablet:w-[457px] tablet:h-[572px]"
                      alt="pilot"
                    />
                  )}
                  {crew === "engineer" && (
                    <img
                      src={engineer}
                      className="mobile:w-[177px] mobile:h-[222px] mobile:mx-auto crew-appear lg:absolute lg:right-0 lg:bottom-0 tablet:absolute tablet:bottom-0 tablet:left-[50%] tablet:translate-x-[-40%] tablet:w-[457px] tablet:h-[572px]"
                      alt="engineer"
                    />
                  )}
                </div>
                {767 > window.innerWidth > 1366 && (
                  <div className="h-[1px] w-[327px] bg-[#383B4B] mx-auto"></div>
                )}
                <nav className="flex tablet:my-auto tablet:absolute tablet:left-[50%] tablet:top-[40%] tablet:translate-x-[-50%] tablet:translate-y-[-50%] flex-wrap gap-6 justify-center mobile:my-8 lg:absolute lg:left-64 lg:bottom-20 lg:z-10">
                  <div
                    className={`w-[10px] h-[10px] bg-tertiary rounded-full  ${
                      crew === "commander"
                        ? "opacity-100"
                        : "opacity-[17%] hover:opacity-50"
                    }`}
                    onClick={() => handleCrew("commander")}
                  ></div>
                  <div
                    className={`w-[10px] h-[10px] bg-tertiary rounded-full ${
                      crew === "specialist"
                        ? "opacity-100"
                        : "opacity-[17%] hover:opacity-50"
                    }`}
                    onClick={() => handleCrew("specialist")}
                  ></div>
                  <div
                    className={`w-[10px] h-[10px] bg-tertiary rounded-full ${
                      crew === "pilot"
                        ? "opacity-100"
                        : "opacity-[17%] hover:opacity-50"
                    }`}
                    onClick={() => handleCrew("pilot")}
                  ></div>
                  <div
                    className={`w-[10px] h-[10px] bg-tertiary rounded-full ${
                      engineer === "commander"
                        ? "opacity-100"
                        : "opacity-[17%] hover:opacity-50"
                    }`}
                    onClick={() => handleCrew("engineer")}
                  ></div>
                </nav>
                {crew === "commander" && (
                  <>
                    <div className="mobile:text-center tablet:flex tablet:flex-col tablet:w-[458px] tablet:h-[232px] tablet:text-center tablet:mx-auto mobile:w-[100vw] text-appear lg:absolute lg:left-64 lg:bottom-20 top-[50%]">
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "h4" : "text-[16px]"
                        } text-half_white`}
                      >
                        COMMANDER
                      </p>
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "h3" : "text-[24px]"
                        } text-tertiary mb-6 mobile:mt-1`}
                      >
                        DOUGLAS HURLEY
                      </p>
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "body-text" : "test-[15px]"
                        } leading-[25px] text-secondary flex mobile:mx-auto mobile:w-[335px] lg:w-[444px] h-[150px`}
                      >
                        Douglas Gerald Hurley is an American engineer, former
                        Marine Corps pilot and former NASA astronaut. He
                        launched into space for the third time as commander of
                        Crew Dragon Demo-2.
                      </p>
                    </div>
                  </>
                )}
                {crew === "specialist" && (
                  <>
                    <div className="mobile:text-center tablet:flex tablet:flex-col tablet:w-[458px] tablet:h-[232px] tablet:text-center tablet:mx-auto mobile:w-[100vw] text-appear lg:absolute lg:left-64 lg:bottom-20 top-[50%]">
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "h4" : "text-[16px]"
                        } text-half_white`}
                      >
                        Mission Specialist{" "}
                      </p>
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "h3" : "text-[24px]"
                        } text-tertiary mb-6 mobile:mt-1`}
                      >
                        MARK SHUTTLEWORTH
                      </p>
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "body-text" : "test-[15px]"
                        } leading-[25px] text-secondary flex mobile:mx-auto mobile:w-[335px] lg:w-[444px] h-[150px]`}
                      >
                        {" "}
                        Mark Richard Shuttleworth is the founder and CEO of
                        Canonical, the company behind the Linux-based Ubuntu
                        operating system. Shuttleworth became the first South
                        African to travel to space as a space tourist.
                      </p>
                    </div>
                  </>
                )}
                {crew === "pilot" && (
                  <>
                    <div className="mobile:text-center tablet:flex tablet:flex-col tablet:w-[458px] tablet:h-[232px] tablet:text-center tablet:mx-auto mobile:w-[100vw] text-appear lg:absolute lg:left-64 lg:bottom-20 top-[50%]">
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "h4" : "text-[16px]"
                        } text-half_white`}
                      >
                        PILOT
                      </p>
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "h3" : "text-[24px]"
                        } text-tertiary mb-6 mobile:mt-1`}
                      >
                        Victor Glover
                      </p>
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "body-text" : "test-[15px]"
                        } leading-[25px] text-secondary flex mobile:mx-auto mobile:w-[335px] lg:w-[444px] h-[150px]`}
                      >
                        {" "}
                        Pilot on the first operational flight of the SpaceX Crew
                        Dragon to the International Space Station. Glover is a
                        commander in the U.S. Navy where he pilots an F/A-18.He
                        was a crew member of Expedition 64, and served as a
                        station systems flight engineer.{" "}
                      </p>
                    </div>
                  </>
                )}
                {crew === "engineer" && (
                  <>
                    <div className="mobile:text-center tablet:flex tablet:flex-col tablet:w-[458px] tablet:h-[232px] tablet:text-center tablet:mx-auto mobile:w-[100vw] text-appear lg:absolute lg:left-64 lg:bottom-20 top-[50%]">
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "h4" : "text-[16px]"
                        } text-half_white`}
                      >
                        {" "}
                        Flight Engineer
                      </p>
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "h3" : "text-[24px]"
                        } text-tertiary mb-6 mobile:mt-1`}
                      >
                        {" "}
                        Anousheh Ansari
                      </p>
                      <p
                        className={`${
                          window.innerWidth > 1366 ? "body-text" : "test-[15px]"
                        } leading-[25px] text-secondary flex mobile:mx-auto mobile:w-[335px] lg:w-[444px] h-[150px]`}
                      >
                        {" "}
                        Anousheh Ansari is an Iranian American engineer and
                        co-founder of Prodea Systems. Ansari was the fourth
                        self-funded space tourist, the first self-funded woman
                        to fly to the ISS, and the first Iranian in space.{" "}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
        {option === "TECHNOLOGY" && (
          <>
            <div className="mobile:flex mobile:flex-wrap w-screen mobile:mt-[-20%] lg:mt-[-20%]">
              <p
                className={`${
                  window.innerWidth > 1366 ? "h5" : "nav"
                } text-tertiary mx-auto mobile:mt-10 lg:absolute lg:left-[14%] lg:top-[30%]`}
              >
                <span className="font-bold text-half_white">03</span> SPACE
                LAUNCH 101
              </p>
              {window.innerWidth <= 1366 ? (
                <>
                  {tech === "launch" && (
                    <img
                      src={launch}
                      className="tablet:w-[100vw]"
                      alt="launch"
                    />
                  )}
                  {tech === "capsule" && (
                    <img
                      src={capsule}
                      className="tablet:w-[100vw]"
                      alt="capsule"
                    />
                  )}
                  {tech === "port" && (
                    <img src={port} className="tablet:w-[100vw]" alt="port" />
                  )}
                </>
              ) : (
                <>
                  {" "}
                  {tech === "launch" && (
                    <img
                      src={launch_p}
                      className="lg:absolute lg:right-0 lg:bottom-20 lg:w-[535px] lg:h-[527px]"
                      alt="launch_p"
                    />
                  )}
                  {tech === "capsule" && (
                    <img
                      src={capsule_p}
                      className="lg:absolute lg:right-0 lg:bottom-20 lg:w-[535px] lg:h-[527px]"
                      alt="capsule_p"
                    />
                  )}
                  {tech === "port" && (
                    <img
                      src={port_p}
                      className="lg:absolute lg:right-0 lg:bottom-20 lg:w-[535px] lg:h-[527px]"
                      alt="port_p"
                    />
                  )}
                </>
              )}
            </div>
            <nav className="text-[32px] tracking-[2px] flex tablet:justify-center tablet:gap-4 lg:flex-col lg:gap-10 mobile:justify-evenly mobile:mx-auto lg:mt-[7%] lg:ml-[230px] h-fit my-12 w-[100vw]">
              <button
                className={`border-half_white border-[1px] w-[80px] h-[80px] rounded-full ${
                  tech === "launch"
                    ? "bg-tertiary text-primary"
                    : "bg-transparent hover:border-tertiary text-tertiary"
                }`}
                onClick={() => handleTech("launch")}
              >
                1
              </button>
              <button
                className={`border-half_white border-[1px] w-[80px] h-[80px] rounded-full ${
                  tech === "capsule"
                    ? "bg-tertiary text-primary"
                    : "bg-transparent hover:border-tertiary text-tertiary"
                }`}
                onClick={() => handleTech("capsule")}
              >
                2
              </button>
              <button
                className={`border-half_white border-[1px] w-[80px] h-[80px] rounded-full ${
                  tech === "port"
                    ? "bg-tertiary text-primary"
                    : "bg-transparent hover:border-tertiary text-tertiary"
                }`}
                onClick={() => handleTech("port")}
              >
                3
              </button>
            </nav>
            {tech === "launch" && (
              <div className="mobile:mx-auto tablet:text-center mobile:text-center mobile:mt-[-20%] lg:mt-[-440px] lg:ml-[400px]">
                <p className="text-[16px] text-half_white">
                  THE TERMINOLOGY...
                </p>
                <p
                  className={`${
                    window.innerWidth > 1366 ? "h3" : "text-[24px]"
                  } text-tertiary mb-6 mt-2`}
                >
                  LAUNCH VEHICLE
                </p>
                <p
                  className={`${
                    window.innerWidth > 1366 ? "body-text" : "text-[15px]"
                  } leading-[25px] text-secondary flex mobile:mx-auto lg:w-[460px] mobile:w-[335px] tablet:w-[430px] tablet:mx-auto h-[150px]`}
                >
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            )}
            {tech === "capsule" && (
              <div className="mobile:mx-auto tablet:text-center mobile:text-center mobile:mt-[-20%] lg:mt-[-440px] lg:ml-[400px]">
                <p className="text-[16px] text-half_white">
                  THE TERMINOLOGY...
                </p>
                <p
                  className={`${
                    window.innerWidth > 1366 ? "h3" : "text-[24px]"
                  } text-tertiary mb-6 mt-2`}
                >
                  SPACEPORT
                </p>
                <p
                  className={`${
                    window.innerWidth > 1366 ? "body-text" : "text-[15px]"
                  } leading-[25px] text-secondary flex mobile:mx-auto lg:w-[460px] mobile:w-[335px] tablet:w-[430px] tablet:mx-auto h-[150px]`}
                >
                  {" "}
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft, by analogy to the seaport for ships or
                  airport for aircraft. Based in the famous Cape Canaveral, our
                  spaceport is ideally situated to take advantage of the Earth’s
                  rotation for launch.
                </p>
              </div>
            )}
            {tech === "port" && (
              <div className="mobile:mx-auto tablet:text-center mobile:text-center mobile:mt-[-20%] lg:mt-[-440px] lg:ml-[400px]">
                <p className="text-[16px] text-half_white">
                  THE TERMINOLOGY...
                </p>
                <p
                  className={`${
                    window.innerWidth > 1366 ? "h3" : "text-[24px]"
                  } text-tertiary mb-6 mt-2`}
                >
                  {" "}
                  SPACE CAPSULE
                </p>
                <p
                  className={`${
                    window.innerWidth > 1366 ? "body-text" : "text-[15px]"
                  } leading-[25px] text-secondary flex mobile:mx-auto lg:w-[460px] mobile:w-[335px] tablet:w-[430px] tablet:mx-auto h-[150px]`}
                >
                  {" "}
                  A space capsule is an often-crewed spacecraft that uses a
                  blunt-body reentry capsule to reenter the Earth's atmosphere
                  without wings. Our capsule is where you'll spend your time
                  during the flight. It includes a space gym, cinema, and plenty
                  of other activities to keep you entertained.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Space;
