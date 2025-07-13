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
        <div className="w-7/8 mx-auto px-4 sm:px-10 py-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 font-titillium">TOPICS</h2>

            <div className="border border-gray-300">
                {topics.map(([left, right], idx) => (
                    <div
                        key={idx}
                        className={`grid grid-cols-2 border-t border-gray-200 px-4 py-3 text-gray-800 hover:bg-gray-300 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                    >
                        <div className="pr-4 border-r border-gray-300">{left}</div>
                        <div className="pl-4">{right}</div>
                    </div>
                ))}

                <div className="text-center text-sm text-gray-600 py-3 border-t border-gray-200">
                    But are not limited to...
                </div>
            </div>
        </div>
    );
};

export default Topics;
