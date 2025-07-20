import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Do I get any certificate for participating or presenting in the conference?",
    answer: "Yes, all participants and presenters will receive an e-certificate after successful completion.",
  },
  {
    question: "When will I receive my certificate?",
    answer: "Certificates will be emailed within 7 working days after the event concludes.",
  },
  {
    question: "How do we keep ourselves informed about progress?",
    answer: "We will send necessary updates to the registered email using scheduled notifications.",
  },
  {
    question: "What happens if there is a schedule change?",
    answer: "All participants will be informed via email about any changes in schedule.",
  },
  {
    question: "Why should I pay participation fees? Isn’t it too expensive?",
    answer: "The fee covers organizational costs, platform access, certification, and expert sessions.",
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggle = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-10 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 font-titillium border-b-2 border-yellow-400 pb-2">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between text-left font-medium transition-all duration-300 ${
                openIndexes[index] ? "text-orange-500" : "text-gray-800"
              }`}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-sm">
                {openIndexes[index] ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {openIndexes[index] && (
              <p className="mt-2 text-sm text-gray-600 leading-relaxed transition-opacity duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
