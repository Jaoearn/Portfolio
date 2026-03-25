import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (item: NavItem, isMobile = false) => {
    const baseClasses = isMobile
      ? "block cursor-pointer py-3 text-lg font-semibold transition-all duration-300 border-b border-white/5"
      : "cursor-pointer relative group px-2 py-1 text-sm lg:text-base font-medium transition";

    return (
      <ScrollLink
        key={item.to}
        to={item.to}
        spy
        smooth
        offset={-80}
        duration={500}
        activeClass="text-orange-400"
        className={`${baseClasses} text-slate-300 hover:text-white`}
        onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
      >
        {item.label}

        {!isMobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 group-hover:w-full [.text-orange-400_&]:w-full" />
        )}
      </ScrollLink>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? "bg-[#030303]/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto px-4 lg:px-8 py-3">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg md:text-xl font-black tracking-tight text-white hover:scale-105 transition-transform"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
            Sutheera
          </span>
          <span className="ml-1">Preenan</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => renderLink(item))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 md:hidden">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
            {navItems.map((item) => renderLink(item, true))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;