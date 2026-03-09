import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  type FooterProps = {
    personalData: {
      email: string;
      phone: string;
      location: string;
      github: string;
      linkedIn: string;
    };
  };
  
  const Footer = ({ personalData }: FooterProps) => {
    return (
      <footer className="bg-[#050505] border-t border-white/10 text-gray-300">
  
        <div className="max-w-7xl mx-auto px-6 py-8">
  
          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
  
            {/* Logo + name */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
  
              <span className="font-semibold text-white tracking-wide">
                Your Name
              </span>
            </div>
  
            {/* Contact */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
  
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <FaEnvelope className="text-red-500" />
                {personalData.email}
              </a>
  
              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <FaPhone className="text-red-500" />
                {personalData.phone}
              </a>
  
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {personalData.location}
              </div>
  
            </div>
  
            {/* Social */}
            <div className="flex items-center gap-3">
  
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500 hover:text-red-500 transition"
              >
                <FaGithub size={16} />
              </a>
  
              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500 hover:text-red-500 transition"
              >
                <FaLinkedin size={16} />
              </a>
  
            </div>
  
          </div>
  
          {/* Bottom */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
  
            <p>
              © {new Date().getFullYear()} sutheera preenan
            </p>
  
            <p className="flex items-center gap-1">
              Built with React + Tailwind 
              <span className="text-red-500 animate-pulse">❤</span>
            </p>
  
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;