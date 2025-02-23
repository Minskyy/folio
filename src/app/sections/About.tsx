import React from 'react';
import Socials from './Socials';


const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-50 p-8 mt-28 w-1/2 rounded-full m-auto">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-black/60 bg-opacity-50">
          Adriano Oliveira
        </h1>
        <p className='font-bold from-black to-black/60 '>
          I am a Computer Engineer with 5 years of experience as a Full Stack Developer. I have a passion for constantly learning new technologies and developing fun projects in my free time.
        </p>

        <Socials />

      </div>
    </section >
  );
};

export default About;