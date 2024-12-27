import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logobg } from "../assets";
// icons
import { RiSearchLine } from "react-icons/ri";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";
// motion
import { motion } from "framer-motion";
// constants
import { instructionContent } from "../constants/instructionContent";
import introductionContent from "../constants/introductionContent";
import usingSteps from "../constants/usingSteps";
import { fadeIn } from "../constants/motionAnimation";
// components
import IntroductionCard from "../components/introductionCard";
// assets
import { heroFood } from "../assets";

const buttonIconsInfo = [
  // { icon: <RiCompassDiscoverLine />, link: "/discover" },
  { icon: <p>消費者平台</p>, link: "/" },
  { icon: <p>企業平台</p>, link: "/mystore-register" },
  // { icon: <FaHeart />, link: "/favorite" },
  // { icon: <FaUserCircle />, link: "/profile" },
];

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);

  const checkAndToggleTheme = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkAndToggleTheme);
  }, [isScroll]);

  return (
    <>
      <header
        className={`c-header2 fixed top-0 left-0 w-full z-50 ${
          isScroll ? "bg-white" : ""
        } transition-all duration-300`}
      >
        {/* top */}
        <div className="flex flex-row items-center justify-between px-10 max-lg:px-8 border-b">
          <Link to="/" className="text-4xl py-4">
            <img src={Logobg} alt="logo" className="w-16 h-16" />
          </Link>

          <div className="flex flex-row items-center gap-4">
            {buttonIconsInfo.map((iconInfo, index) => (
              <Link
                key={index}
                className={`c-header2-nav_item ${
                  isScroll ? "text-gray-600" : "text-white"
                }`}
                to={iconInfo.link}
              >
                {iconInfo.icon}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main>
        <section
          className="h-[40rem] bg-primary relative"
          style={{
            backgroundImage: `url(${heroFood})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% 90%",
            backgroundPositionY: "100%",
          }}
        >
          {/* for background image => absolute */}
          {/* <div className="absolute top-0 left-0 w-full h-full">
            <img src={heroFood} alt="heroFood" className="w-full h-full" />
          </div> */}
          <div className="flex flex-col justify-end items-center h-full text-white pb-20 px-3">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl font-bold text-center">
                幫助美麗的地球減少食物浪費
              </h1>

              <div className="flex flex-row gap-4 mt-6">
                <Link
                  to="/login"
                  className="border-2 border-white rounded-md px-4 py-2"
                >
                  <p>消費者平台</p>
                </Link>
                <Link
                  to="/mystore-register"
                  className="border-2 border-white rounded-md px-4 py-2"
                >
                  <p>企業平台</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="p-introduction_title_container text-center max-w-[50rem] mx-auto pt-20">
            <h2 className="text-2xl text-primary font-bold pb-4">為何選擇</h2>
            <h2 className="text-4xl font-bold pb-4">吃不完兜著走</h2>
          </div>

          <div className="pt-10 pb-20 px-40 max-lg:px-10">
            <motion.div
              className="flex flex-row flex-wrap justify-evenly gap-4"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {introductionContent.map((item, index) => (
                <IntroductionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-primary">
          <div className="p-introduction_title_container text-center max-w-[50rem] mx-auto pt-20">
            <h2 className="text-2xl text-white font-bold pb-4">如何使用</h2>
            <h2 className="text-4xl font-bold pb-4 text-secondaryTheme">
              使用步驟
            </h2>
          </div>

          <div className="pt-10 pb-20 px-40 max-lg:px-10">
            <motion.div
              className="flex flex-row flex-wrap justify-evenly gap-4"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {usingSteps.map((item, index) => (
                <IntroductionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
