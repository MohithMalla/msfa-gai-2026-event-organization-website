import React from "react";
import { FaFeatherAlt } from "react-icons/fa";

const About = () => {
  const aboutPoints = [
    "In recent past, Generative AI is one of the most trending topics and applications in every field of Science and Engineering with AI and Machine Intelligence...",
    "Combination of Computational Intelligence and Generative AI techniques can be utilized for generating Electronic Health Records (EHRs)...",
    "In this Conference, we will focus on Math-Model design and generations for improved solutions and decision-making...",
  ];

  const callForPaperPoints = [
    "1st version of CIGAI aims to bring together leading research scientists, academicians, researchers...",
    "This will be a purely research-oriented conference. 8 pages to be submitted by the Author.",
    "It also provides a premier interdisciplinary platform for researchers, practitioners, and educators...",
  ];

  return (
    <section id="about" className="pt-16 bg-white text-gray-900">
      <div className="w-full flex justify-center mb-10">
        <h2 className="text-4xl font-bold text-center">MARK YOUR CALENDARS</h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 border-b-2 border-orange-400 inline-block mb-2">
          Entire Topics
        </h4>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">TOPICS</h2>

        <h4 className="text-xl font-semibold mb-6 text-blue-700">The Conference</h4>

        <div className="space-y-5 text-justify">
          {aboutPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaFeatherAlt className="text-yellow-500 mt-1 flex-shrink-0" />
              <p>{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-4 mb-3">
            <h5 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              About Research Findings of Authors
            </h5>
            <div className="w-20 h-0.5 bg-orange-500"></div>
          </div>

          <h3 className="text-3xl font-bold mb-6">CALL FOR PAPER</h3>

          <div className="space-y-5 text-justify">
            {callForPaperPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaFeatherAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-900 text-white py-10 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-left">
          <h2 className="text-yellow-400 text-xl font-bold">Special Theme</h2>
          <p className="text-lg mt-2 font-bold">Data Science: Unseen patterns and Decision</p>
        </div>
      </div>
    </section>
  );
};

export default About;
