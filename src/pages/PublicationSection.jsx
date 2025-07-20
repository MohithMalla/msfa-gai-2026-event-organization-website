import React, { useState } from "react";
import conferenceImg from "/conference.jpg";
import journalImg from "/publications.jpg";

const PublicationSection = () => {
    const [activeTab, setActiveTab] = useState("conference");

    const content = {
        conference: {
            title: "Conference Proceedings:",
            points: [
                "All accepted papers will be published in Conference Proceedings, Scopus Indexed.",
                `Proposal is submitted to "Springer Proceedings in Mathematics & Statistics"
        (https://www.springer.com/series/10533), a Scopus-indexed book series for possible publication after the evaluation and screening of all submissions.`,
            ],
            image: conferenceImg,
            link: {
                text: "Paper Format",
                href: "#",
            },
        },
        journal: {
            title: "Journal publication of extended selective papers:",
            points: [
                "Selected high-quality papers will be invited for extended versions in reputed Scopus/SCI-indexed journals.",
                "Details of journal publication opportunities will be updated soon.",
            ],
            image: journalImg,
            link: null,
        },
    };

    const current = content[activeTab];

    return (
            <section className="max-w-5xl mx-auto px-4 py-12" id="submission">
      <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 border-b-2 border-orange-400 inline-block mb-2 ">
        Extended PUBLICATIONS
      </h4>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 my-3">ABOUT PUBLICATIONS</h2>

=            <div className="flex flex-wrap gap-3 mb-8 justify-center sm:justify-start">
                <button
                    onClick={() => setActiveTab("conference")}
                    className={`flex items-center justify-center px-3 py-2 sm:px-6 sm:py-4 text-sm border rounded-md transition ${
                        activeTab === "conference"
                            ? "bg-yellow-400 text-white"
                            : "bg-white text-gray-800 border-gray-300"
                    }`}
                >
                    <span role="img" aria-label="scroll" className="text-lg">📜</span>
                    <span className="hidden sm:inline ml-2 font-semibold">Conference Proceedings</span>
                </button>

                <button
                    onClick={() => setActiveTab("journal")}
                    className={`flex items-center justify-center px-3 py-2 sm:px-6 sm:py-4 text-sm border rounded-md transition ${
                        activeTab === "journal"
                            ? "bg-yellow-400 text-white"
                            : "bg-white text-gray-800 border-gray-300"
                    }`}
                >
                    <span role="img" aria-label="book" className="text-lg">📚</span>
                    <span className="hidden sm:inline ml-2 font-semibold">Journal Publication</span>
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{current.title}</h3>
                    <ul className="space-y-3 text-gray-700 list-disc list-inside">
                        {current.points.map((point, index) => (
                            <li key={index} className="leading-relaxed">{point}</li>
                        ))}
                    </ul>
                    {current.link && (
                        <a
                            href={current.link.href}
                            className="mt-4 inline-block text-yellow-600 hover:underline font-semibold"
                        >
                            {current.link.text}
                        </a>
                    )}
                </div>

                <div>
                    <img
                        src={current.image}
                        alt="Publication Visual"
                        className="w-full max-h-[200px] sm:max-h-[350px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default PublicationSection;