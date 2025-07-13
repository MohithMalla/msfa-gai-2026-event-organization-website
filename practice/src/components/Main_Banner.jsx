import React from 'react';
import vignan_bg from "../assets/vignan_bg.jpg";

const Main_Banner = () => {
    return (
        <div className="mt-30 h-screen relative w-full  sm:h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${vignan_bg})` }}>
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 text-white z-10 max-w-[90%] sm:max-w-[70%]">

                <p className="text-sm sm:text-lg leading-relaxed font-medium">
                    International Conference on Mathematical & Statistical Foundations and Applications of Generative AI (MSFA-GAI)
                    <br />
                    <span className="font-light">5th - 6th February 2026</span>
                    <br /><br />
                    A National Workshop on Medical Applications using GAI
                    <br />
                    <span className="font-light">2nd - 6th February 2026</span>
                </p>

                <div className="mt-6 text-sm sm:text-base leading-relaxed font-light">
                    <p className="font-semibold">Organized By</p>
                    Department of Computer Science Engineering
                    <br />
                    &<br />
                    Department of Advanced Computer Science Engineering
                </div>
            </div>
        </div>
    )
}

export default Main_Banner;
