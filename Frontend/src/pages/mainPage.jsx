import React from "react";

function MainPage() {
    return (
        <div className="font-[Roboto,sans-serif]">
            <div className="flex items-center px-4 sm:px-6 lg:px-8 py-3 bg-white border-b border-gray-300">
                <img
                    src="/clg_logo.png"
                    alt="Logo"
                    className="h-10 sm:h-12 lg:h-14 w-auto mr-3 sm:mr-4"
                />
                <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black leading-tight">
                    Conference
                </h3>
            </div>

            <div className="relative w-full h-[89vh] overflow-hidden">

                <img
                    src="/banner.png"
                    alt="Background"
                    className="absolute w-full h-full object-cover"
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

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

                <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 sm:px-6 md:px-8 max-w-screen-lg w-full">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-snug drop-shadow-md">
                        International Conference on Mathematical & Statistical Foundations and Applications of Generative AI (MSFA-GAI)
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-yellow-400 font-medium mb-6 drop-shadow-md">
                        5<sup>th</sup> – 6<sup>th</sup> February 2026
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-snug drop-shadow-md">
                        A National Workshop on Medical Applications using GAI
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-yellow-400 font-medium drop-shadow-md">
                        2<sup>nd</sup> – 6<sup>th</sup> February 2026
                    </p>
                </div>

                <div className="p-3 text-2l absolute bottom-3 right-3 sm:right-8  sm:text-sm  bg-transparent text-white font-serif z-30 drop-shadow border-0 rounded">
                    <strong className="text-2xl">Organised by</strong>  <br />Department of Computer Science & Engineering
                </div>
            </div>
        </div>
    );
}

export default MainPage;
