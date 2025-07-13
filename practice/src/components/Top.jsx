import React from 'react';
import vignan_logo from "../assets/vignan_logo.png";
import grad_bg from "../assets/grad_bg.jpg";

const Top_Title = () => {
    return (
        <div className="w-full bg-white py-4 px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between shadow-md">
            <div className="flex items-center mb-4  sm:mb-0">
                <img
                    src={vignan_logo}
                    alt="Vignan Logo"
                    className="h-18 sm:h-24 w-auto ml-0 sm:ml-[120px]"
                />
                <span className="sm:ml-[40px] text-4xl sm:text-2xl" style={{ fontFamily: `'Segoe UI', 'Trebuchet MS', sans-serif` }}>
                    Conference
                </span>
            </div>
        </div>
    );
};

export default Top_Title;
