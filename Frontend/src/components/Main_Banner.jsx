import React, { useState, useEffect } from "react";
import vignan_logo from "../assets/vignan_logo.png";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const Main_Banner = () => {
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setShowFirst((prev) => !prev);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full">
            <div className="flex items-center bg-white shadow-md px-4 py-3 sm:px-5">
                <img
                    src={vignan_logo}
                    alt="Vignan Logo"
                    className="h-20 ml-4 sm:ml-20"
                />
                <p className="lg:ml-6 text-xl sm:text-2xl font-semibold text-gray-900">
                    Vignan's IIT
                </p>
                <p className="sm:ml-4 ml-4 text-xl text-amber-600">Conference</p>
            </div>

            <div className="relative h-[90vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${showFirst ? banner2 : banner1})` }}
                />

                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 z-20">
                    {[...Array(24)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-black"
                            style={{
                                animation: `revealSquare 1s ease forwards`,
                                animationDelay: `${(i % 6 + Math.floor(i / 6)) * 100}ms`,
                            }}
                        />
                    ))}
                </div>

                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 z-10"
                    style={{ backgroundImage: `url(${showFirst ? banner1 : banner2})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white">
                        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-4xl leading-snug">
                            {showFirst
                                ? "National Workshop on Medical Applications using GAI"
                                : "International Conference on Mathematical & Statistical Foundations and Applications of Generative AI (MSFA-GAI)"
                            }
                        </h2>
                        <p className="text-lg sm:text-xl text-amber-400 font-medium">
                            {showFirst ? (
                                <>
                                    2<sup>nd</sup> – 6<sup>th</sup> February 2026
                                </>
                            ) : (
                                <>
                                    5<sup>th</sup> – 6<sup>th</sup> February 2026
                                </>
                            )}
                        </p>
                        <h3 className="font-bold">Vignan's Institute of Information Technology, Visakhapatnam, India</h3>

                        <br /><br />
                        <p className="mt-10 sm:text-base text-slate-200">
                            <span className="font-bold">Organized by:</span><br />
                            Department of Computer Science Engineering
                            <br />
                            &<br />
                            Department of Advanced Computer Science Engineering
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main_Banner;
