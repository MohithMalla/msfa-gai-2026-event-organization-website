import React from 'react';

const keyDates = [
    { title: 'Paper Submission Deadline.', date: '20 January, 2026' },
    { title: 'Acceptance Notification.', date: '23 January, 2026' },
    { title: 'Submission deadline for revised papers.', date: '28 January, 2026' },
    { title: 'Author Registration Deadline.', date: '1 February, 2026' },
    { title: 'Full-Day Workshop.', date: '2 February, 2026' },
    { title: 'Conference Dates.', date: '2 - 6 February, 2026' },
];

const KeyDates = () => {
    return (
        <section className="w-7/8 mx-auto px-4 sm:px-10 py-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 font-titillium">KEY DATES</h2>

            <div className="w-1/2 mx-auto relative border-l-[3px] border-gray-900 pl-6 p-6 grid gap-8">
                {keyDates.map((item, idx) => (
                    <div key={idx} className="relative bg-white px-6 py-4 border-l-[4px] border-l-grey-900 border-1">
                        <div className=" absolute top-1/4 left-0 transform -translate-y-1/2 -translate-x-full w-7 h-[2px] bg-gray-900"></div>
                        <header className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <time className="text-xs font-bold text-gray-700 bg-gray-200 px-2 py-1 rounded-md mb-2 sm:mb-0">
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
