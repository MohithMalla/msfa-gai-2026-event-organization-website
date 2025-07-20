import React from "react";
import { FaDownload, FaBookOpen } from "react-icons/fa";

function Submission() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12" id="submission">
      <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 border-b-2 border-orange-400 inline-block mb-2 ">
        Submission Procedures
      </h4>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 my-3">SUBMISSION</h2>

      <div className="space-y-4">
        <div className="bg-white shadow-md rounded-md px-6 py-5 flex items-center gap-4">
          <FaDownload className="text-pink-500 text-3xl" />
          <a
            href="#"
            className="text-orange-600 hover:underline text-lg font-medium"
          >
            Click to Download the Format
          </a>
        </div>

        <div className="bg-white shadow-md rounded-md px-6 py-5 flex items-start gap-4">
          <FaBookOpen className="text-yellow-500 text-3xl mt-1" />
          <div>
            <p className="font-bold text-gray-800 text-base">
              Submitters/Authors are requested to Register yourself and then upload your papers by using your login.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Submitted paper length should be 8 and 10 pages.
            </p>
          </div>
        </div>
      </div>

      <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
        <li>
          Submitted papers should not have been previously published nor be currently under consideration for publication elsewhere.
        </li>
        <li>
          All submissions will be thoroughly peer-reviewed by experts based on originality, significance and clarity.
        </li>
        <li>
          Only papers presenting novel research results or successful innovative applications will be considered for publication in the conference proceedings.
        </li>
      </ul>
    </section>
  );
}

export default Submission;
