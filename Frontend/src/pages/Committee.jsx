import React from 'react';

function Committee() {
  const committeeData = [
    // {
    //   title: "Chief Patrons",
    //   members: [
    //     "Er. K. Satyanarayana, President, KLEF",
    //     "Er. K. L. Havish, Vice-President, KLEF",
    //     "Er. K. Raja Hareen, Vice-President, KLEF"
    //   ],
    // },
    // {
    //   title: "Co-Patrons",
    //   members: [
    //     "Dr. K. S. Jaganatha Rao, Pro Chancellor, KLEF",
    //     "Dr. G. P. Saradhi Varma, Vice Chancellor, KLEF",
    //     "Dr. N. Venkatram, Pro Vice-Chancellor, KLEF",
    //     "Dr. A. V. S. Prasad, Pro Vice-Chancellor, KLEF",
    //     "Dr. K. Rajasekhara Rao, Pro Vice-Chancellor, KLEF",
    //     "Dr. K. Subba Rao, Registrar, KLEF"
    //   ],
    // },
    // {
    //   title: "General Chairs",
    //   members: [
    //     "Osvaldo Gervasi, University of Perugia, Italy",
    //     "L Koteswara Rao, KLEF, Bowrampet Campus, Hyderabad, India"
    //   ],
    // },
    // {
    //   title: "Technical Program Committee",
    //   members: [
    //     "Yu-Chen Hu, Tunghai University, Taichung City, Taiwan",
    //     "Debnath Bhattacharyya, KL University, Hyderabad, India",
    //     "Jaroslav Frnda, University of Zilina, Zilina, Slovak Republic",
    //     "Rajib Ghosh, National Institute of Technology, Patna, India"
    //   ],
    // },
    // {
    //   title: "International Advisory Committee",
    //   members: [
    //     "Debapriya Hazra, McGowan Institute, University of Pittsburgh, USA",
    //     "Pelin ANGIN, Middle East Technical University, Ankara, Turkey",
    //     "Nilgun Sengoz, Burdur Mehmet Akif Ersoy University, Turkey",
    //     "Joydeep Chandra, IIT, Patna, Bihar, India",
    //     "Paul Kwan, Central Queensland University, Australia",
    //     "Arindam Biswas, Kazi Nazrul University, India",
    //     "Sanjoy Kumar Saha, Jadavpur University, India",
    //     "Tom Yeh, University of Colorado Boulder, USA",
    //     "Philippe Fournier-Viger, Shenzhen University, China",
    //     "Susmit Shannigrahi, Tennessee Tech University, USA",
    //     "Snehanshu Pal, NIT, Rourkela, India",
    //     "Zhihan Lv, Uppsala University, Sweden",
    //     "Paul S. Pang, Federation University, Australia",
    //     "Sabah Mohammed, Lakehead University, Canada",
    //     "Sekhar Verma, IIIT Allahabad, India",
    //     "Tseren-Onolt Ishdorj, MUST, Mongolia",
    //     "Sourav Sen Gupta, IMEC, Belgium",
    //     "N. Venkatram, KL University, Guntur, India",
    //     "Tai-hoon Kim, Chonnam National University, South Korea",
    //     "Jinan Fiaidhi, Lakehead University, Canada",
    //     "Y. Byun, Jeju National University, South Korea",
    //     "Khuder Altangeral, MIST, Mongolia",
    //     "Rosslin Robles, University of San Agustin, Philippines",
    //     "Alexey Setekein, Immanuel Kant BFU, Russia",
    //     "Sayan K. Ray, MIT, New Zealand",
    //     "JIN Xue-bo, BTBU, Beijing, China"
    //   ],
    // },
    // {
    //   title: "Organizing Secretary",
    //   members: [
    //     "Megha Bhushan, University of Seville, Spain",
    //     "P. Ramesh Babu, KLEF, Hyderabad, India",
    //     "Kingsley Ogudo, University of Johannesburg, South Africa",
    //     "P. Venkateswara Rao, KLEF, Hyderabad, India"
    //   ],
    // },
    // {
    //   title: "Arrangement Committee",
    //   members: [
    //     "Ramona Trestian, Middlesex University, UK",
    //     "Rita Roy, GITAM, Visakhapatnam, India",
    //     "K. Sreerama Murthy, KLEF, Hyderabad, India",
    //     "Victoria Fast, University of Calgary, Italy",
    //     "Dipanwita Debnath, KLEF, Hyderabad, India",
    //     "Omar Saad, MOHESR, Iraq",
    //     "K. Madhavi, KLEF, Hyderabad, India",
    //     "Laila Moussaid, ENSEM Casablanca, Maroc",
    //     "A. Srilakshmi, KLEF, Hyderabad, India",
    //     "Gayatri S. Mirajkar, Arvind Gavali College, India",
    //     "SK. Khaja Shareef, KLEF, Hyderabad, India",
    //     "Kunal Das, APC College, WB, India"
    //   ],
    // },
    // {
    //   title: "Execution Committee",
    //   members: [
    //     "Shumaila Javaid, Tongji University, China",
    //     "P. Dhilleswara Rao, KLEF, Hyderabad, India",
    //     "Randy Santocildes Tolentino, Hanseo University, South Korea",
    //     "S. Srinivasa Rao, KLEF, Hyderabad, India",
    //     "Shanta Phani, BIT, Kolkata, India",
    //     "Nilgun Sengoz, Burdur Mehmet Akif Ersoy University, Turkey",
    //     "P. Krishnanjaneyulu, KLEF, Hyderabad, India"
    //   ],
    // },
    // {
    //   title: "Hospitality Committee",
    //   members: [
    //     "V. Muniraju Naidu, KLEF, Hyderabad, India",
    //     "K. Swanthana, KLEF, Hyderabad, India",
    //     "K. Swapnika, KLEF, Hyderabad, India",
    //     "R. Sai Shankar, KLEF, Hyderabad, India"
    //   ],
    // },
    {
      title: "Convener",
      members: [
        "Kolli Srinivas, KLEF, Hyderabad, India (Mobile: +91 9949928399, Email: k.srinivas@klh.edu.in)",
        "P. Sirisha, KLEF, Hyderabad, India (Mobile: +91 9963349962, Email: sirisha@klh.edu.in)"
      ],
    },
    {
      title: "Technical Operations Team",
      members: [
        "Dhiren Dommeti, Clark University, USA (dhiren2910dommeti@gmail.com)",
        "Nallapati Siva Ramakrishna, Clark University, USA (srk.nlpt@gmail.com)"
      ],
    }
  ];

  return (
<section className="max-w-5xl mx-auto px-4 py-12 min-h-[60vh]" id="committee">      <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 border-b-2 border-orange-400 inline-block mb-2 ">
        Committee Info
      </h4>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 my-3" id="committee">COMMITTEE</h2>
      {committeeData.map((section, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-600">{section.title}</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-800">
            {section.members.map((member, j) => (
              <li key={j}>
                <span className="font-medium">
                  {member.split(",")[0]}
                </span>
                {member.includes(",") ? member.substring(member.indexOf(",")) : ""}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Committee;
