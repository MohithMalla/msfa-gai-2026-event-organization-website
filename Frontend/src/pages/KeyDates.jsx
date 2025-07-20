import React from 'react';

const keyDates = [
    { title: 'Paper Submission Deadline', date: '20 January, 2026' },
    { title: 'Acceptance Notification', date: '23 January, 2026' },
    { title: 'Submission deadline for revised papers', date: '28 January, 2026' },
    { title: 'Author Registration Deadline', date: '1 February, 2026' },
    { title: 'Full-Day Workshop', date: '2 February, 2026' },
    { title: 'Conference Dates', date: '2 - 6 February, 2026' },
];

const KeyDates = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12" id="submission">
            <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 border-b-2 border-orange-400 inline-block mb-2 ">
                Explore KeyDates
            </h4>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 my-3">KEY DATES</h2>

            <div className="w-1/2 mx-auto relative border-l-[3px] border-gray-900 pl-6 p-6 grid gap-8">
                {keyDates.map((item, idx) => (
                    <div key={idx} className="relative bg-white px-6 py-4 border-l-[3px] border-l-gray-600 border-1">
                        <div className=" absolute top-1/4 left-0 transform -translate-y-1/2 -translate-x-full w-7 h-[2px] bg-gray-900"></div>
                        <header className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <time className=" text-xs font-bold text-gray-700 bg-gray-200 px-2 py-1 rounded-md mb-2 sm:mb-0">
                                {item.date.toUpperCase()}
                            </time>
                        </header>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeyDates;