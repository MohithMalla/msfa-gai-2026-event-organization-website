import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";

const ContactForm = () => {
    return (
        <section
            id="contact"
            className="relative px-4 sm:px-6 md:px-10 lg:px-20 pb-3"
            style={{ minHeight: "calc(100vh - 64px)", paddingTop: "4rem", paddingBottom: "0" }}
        >
            <img
                src="/beaches-0212.jpg"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />


            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

            <div className="relative z-20 max-w-5xl mx-auto mb-12 text-white">
                <h4 className="uppercase text-sm font-semibold tracking-widest border-b-2 border-orange-400 inline-block mb-2">
                    Contact Details
                </h4>
                <h2 className="text-3xl font-bold mb-6">CONTACT FORM</h2>
            </div>

            <div className="relative z-20 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 text-white">
                <div className="w-full md:w-1/2 space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="bg-yellow-100 p-3 rounded-full">
                            <MdLocationOn className="text-yellow-400 hover:text-yellow-500 text-2xl" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-1">Location:</p>
                            <p>Visakhapatnam</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-yellow-100 p-3 rounded-full">
                            <MdEmail className="text-yellow-400 hover:text-yellow-500 text-2xl" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-1">Email:</p>
                            <p className="break-all">principal@vignaniit.edu.in</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <form className="space-y-4 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 rounded-md backdrop-blur-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-md focus:shadow-yellow-500/30"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 rounded-md backdrop-blur-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-md focus:shadow-yellow-500/30"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 rounded-md backdrop-blur-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-md focus:shadow-yellow-500/30"
                        />
                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 rounded-md backdrop-blur-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-md focus:shadow-yellow-500/30"
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
