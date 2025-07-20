import React from 'react';

function KeynoteSpeakers() {
  const speakers = [
    "Prof. Dipti Parasd Mukherjee, Indian Statistical Institute, Kolkata, India",
    "Prof. Young-cheol Byun, Jeju National University, Jeju Island, South Korea",
    "Dr. Pelin Angin, Middle East Technical University, Ankara, Turkey",
    "Prof. Sanjoy Kumar Saha, Jadavpur University, Kolkata, India",
    "Dr. Jeroslav Frnda, University of Zilina, Zilina, Slovak Republic",
    "Dr. Joydeep Chandra, IIT Patna, India",
    "Prof. Paul Kwan, Central Queensland University, Brisbane, Australia",
    "Dr. Susmit Sannigrahi, Tennessee Technological University, USA"
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-12" id="submission">
      <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 border-b-2 border-orange-400 inline-block mb-2 ">
        Key Speakers
      </h4>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 my-3">SPEAKERS</h2>
      <ul className="space-y-4 list-disc list-inside text-gray-700">
        {speakers.map((speaker, index) => (
          <li key={index} className="leading-relaxed">
            <span className="font-semibold">{speaker.split(',')[0]}</span>
            {"," + speaker.substring(speaker.indexOf(','))}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default KeynoteSpeakers;
