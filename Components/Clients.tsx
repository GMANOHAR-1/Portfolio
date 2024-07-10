import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

const skills = [
  {
    skill: "Languages",
    details: ["C", "C++", "Python", "Java", "Solidity"]
  },
  {
    skill: "Web Technologies",
    details: ["HTML", "CSS", "JavaScript"]
  },
  {
    skill: "Frameworks and Libraries",
    details: ["Bootstrap", "Express", "Node.js", "React.js", "Material UI", "Next.js"]
  },
  {
    skill: "Machine Learning and Deep Learning",
    details: ["PyTorch", "TensorFlow", "ANN", "CNN", "RNN", "Federated Learning"]
  },
  {
    skill: "Databases",
    details: ["MySQL", "MongoDB", "IPFS"]
  },
  {
    skill: "Dev Tools",
    details: ["GitHub", "AWS", "Visual Studio Code", "WIX", "Figma"]
  },
  {
    skill: "Other Skills",
    details: ["Competitive Coding", "DevOps", "Jenkins", "Docker"]
  }
];

const Clients = () => {
  return (
    <div className='py-20' id='skills'>
      <h1 className="heading">
        <span className="text-purple">Technical Skills</span>
      </h1>
      <div className="flex flex-col items-center">
        <div 
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={skills}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
