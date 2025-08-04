import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Submission", id: "submission" },
        { name: "Extended Publications", id: "publication" },
        { name: "Topics", id: "topics" },
        { name: "Key Dates", id: "keydates" },
        { name: "Keynote Speakers", id: "speakers" },
        { name: "Register", id: "register" },
        { name: "FAQ", id: "faq" },
        { name: "Committee", id: "committee" },
        { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) {
                    setActiveSection(visible.target.id);
                }
            },
            { threshold: 0.6 }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="bg-white border-b shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">

                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="lg:hidden text-gray-700 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <ul className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`text-sm font-medium px-2 py-1 transition-all duration-200 ${activeSection === item.id
                                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                                    : "text-gray-700 hover:text-blue-600"
                                    }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {isMobileOpen && (
                <div className="lg:hidden px-4 pb-4">
                    <ul className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`block text-sm font-medium px-2 py-1 ${activeSection === item.id
                                        ? "text-blue-600 font-semibold"
                                        : "text-gray-700 hover:text-blue-600"
                                        }`}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
