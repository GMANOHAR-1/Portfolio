import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MaginButton from './ui/MaginButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]
          absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-center text-white-100 max-w-80 text-2xl md:text-3xl lg:text-4xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-white-400 via-white-500 to-purple-600 animate-text-pulse shadow-lg">
            G Manohar
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl mt-6"
            words="Full Stack Web Developer and Machine Learning Enthusiast"
          />

          <p className="text-center mt-4 px-4 md:px-0">
            I am a full stack web developer with a passion for creating beautiful and functional websites. I have
            experience working with a variety of technologies, including React, Node.js, and MongoDB. I am
            always looking for new challenges and opportunities to learn and grow as a developer.
          </p> 
          
          <a href="https://drive.google.com/file/d/1BjZ4Eeopt3E3StGu073kX1VpbV671Kug/view?usp=sharing" className="mt-6">
            <MaginButton title="Resume" icon={<FaLocationArrow />} position="right" />
          </a>
          <div className="flex items-center justify-center md:gap-3 gap-6 mt-6">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>

           
          
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
