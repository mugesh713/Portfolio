import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const techStack = [
    { src: techStackDetails.html, title: "HTML", percentage: 60 },
    { src: techStackDetails.css, title: "CSS", percentage: 50},
    { src: techStackDetails.js, title: "JavaScript", percentage: 60 },
    { src: techStackDetails.react, title: "React", percentage: 50},
    { src: techStackDetails.node, title: "Node", percentage: 50},
    { src: techStackDetails.express, title: "Express", percentage: 50},
    { src: techStackDetails.mongodb, title: "MongoDB", percentage: 65 },
    { src: techStackDetails.postgresql, title: "postgresql", percentage: 60 },
    { src: techStackDetails.firebase, title: "FireBase", percentage: 70 },

  ];

  const tools = [
    { src: techStackDetails.vscode, title: "Visual Studio Code", percentage: 60 },
    { src: techStackDetails.canva, title: "Canva", percentage: 70 },
    { src: techStackDetails.github, title: "Github", percentage: 60},
    { src: techStackDetails.toad, title: "Toad", percentage: 40 },
    { src: techStackDetails.postman, title: "Postman", percentage: 40 },

  ];

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-6 pt-6">
        {techStack.map((tech) => (
          <div key={tech.title} className="flex flex-col items-center">
            <img src={tech.src} title={tech.title} alt={tech.title} className="w-12 h-12" />
            <p className="text-xs mt-1">{tech.title}</p>
            <div className="w-14 bg-gray-200 rounded-full h-1.5 mt-1 relative">
              <div
                className="bg-blue-500 h-1.5 rounded-full"
                style={{ width: `${tech.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-1">{tech.percentage}%</p>
          </div>
        ))}
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-6 pt-6">
        {tools.map((tool) => (
          <div key={tool.title} className="flex flex-col items-center">
            <img src={tool.src} title={tool.title} alt={tool.title} className="w-12 h-12" />
            <p className="text-xs mt-1">{tool.title}</p>
            <div className="w-14 bg-gray-200 rounded-full h-1.5 mt-1 relative">
              <div
                className="bg-blue-500 h-1.5 rounded-full"
                style={{ width: `${tool.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-1">{tool.percentage}%</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Technologies;
