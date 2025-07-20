import React from "react";

const topics = [
    ["Advanced Algorithms in Computational Intelligence", "Optimization techniques"],
    ["Computer Vision", "Machine Learning and Deep learning algorithms"],
    ["Data science", "Neural Networks"],
    ["Fuzzy systems", "Hybrid models"],
    ["Network theory", "Evolutionary algorithms"],
    ["Generative models and algorithms", "Probabilistic and statistical models"],
    ["Time-series analysis", "Graph theory or graph learning algorithms"],
    ["Dimensionality reduction and feature extraction", ""],
];

const Topics = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12" id="submission">
            <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 border-b-2 border-orange-400 inline-block mb-2 ">
                Entire Topics
            </h4>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 my-3">TOPICS</h2>

            <div className="border border-gray-300">
                {topics.map(([left, right], idx) => (
                    <div
                        key={idx}
                        className={`group grid grid-cols-2 border-t border-gray-200 text-gray-800 transition-colors duration-150 ${idx % 2 === 0 ? "bg-white" : "bg-gray-100"
                            } hover:bg-gray-300 cursor-pointer`}
                    >
                        <div className="px-4 py-3 pr-4 border-r border-gray-300 group-hover:bg-gray-300 transition-colors duration-150">
                            {left}
                        </div>
                        <div className="px-4 py-3 pl-4 group-hover:bg-gray-300 transition-colors duration-150">
                            {right}
                        </div>
                    </div>
                ))}


                <div className="text-center text-sm text-gray-600 py-3 border-t border-gray-200">
                    But are not limited to...
                </div>
            </div>
        </section>
    );
};

export default Topics;