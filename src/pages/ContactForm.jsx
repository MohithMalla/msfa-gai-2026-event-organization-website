import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto mb-12">
        
        <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 border-b-2 border-orange-400 inline-block mb-2">
          Contact Details
        </h4>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">CONTACT FORM</h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <MdLocationOn className="text-yellow-400 hover:text-yellow-500 text-2xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-1">Location:</p>
              <p className="text-gray-700">Visakhapatnam</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <MdEmail className="text-yellow-400 hover:text-yellow-500 text-2xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-1">Email:</p>
              <p className="text-gray-700 break-all">principal@vignaniit.edu.in</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form className="space-y-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
