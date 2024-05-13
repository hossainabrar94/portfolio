import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Button from "./Button";
// import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              Hey, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Abrar",
                1000,
                "a Mechanical Engineer by Education",
                1000,
                "a Software Engineer by Education",                
                1000,
                "a Systems Engineer by Profession",
                1000,
                "a Full-Stack Developer",
                1000,
                "a Learner",
                1000,
                "a Teacher",
                1000,
                "Abrar",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p style={{ padding: "3vh" }} className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          As a detail-oriented software and systems engineer with a robust background in aerospace and defense technologies, I am driven by the convergence of innovation and utility. My experience spans across esteemed organizations like Lockheed Martin, Raytheon Technologies, and L3Harris Technologies, where I have honed a diverse skill set in full-stack development, systems engineering, and project management.
          </p>
          <Button />
          <div>
            {/* <Link href="/#contact" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-200 text-white">
              Hire Me
            </Link>
            <Link href="https://docs.google.com/document/d/1MaAA_swK8r8nLVCYBqlEkTAQx5gEDOVcGOZFMItzUeE/edit?usp=sharing" download="cv" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div style={{ borderRadius: '25vh', overflow: 'hidden' }} className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
    {/* insert picture here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
