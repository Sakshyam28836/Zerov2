"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ logo = "/logo.png", links = [] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <nav
        className={`
          fixed w-full z-50 px-4 py-2
          transition-all duration-300 ease-in-out
          ${scrolled ? "bg-black/50" : "bg-black/70"} 
          backdrop-blur-lg
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Company Logo" className="h-8 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-cyan-400 transition-colors duration-300 navigation-menu-item"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i
              className={`fa-solid ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>
        </div>

        <div
          className={`
            md:hidden fixed inset-0 z-50 
            transform transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            bg-black/90 backdrop-blur-lg
          `}
          style={{ top: "3.5rem" }}
        >
          <div className="flex flex-col items-center pt-8 space-y-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-cyan-400 transition-colors duration-300 text-lg navigation-menu-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <style jsx global>{`
        @keyframes glow {
          0% { text-shadow: 0 0 8px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 16px rgba(255,255,255,0.7); }
          100% { text-shadow: 0 0 8px rgba(255,255,255,0.5); }
        }
        .navigation-menu-item {
          animation: glow 2s infinite;
        }
        .navigation-menu-item:hover {
          animation: none;
        }
      `}</style>
    </>
  );
}

function StoryComponent() {
  const demoLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-[200vh] bg-gradient-to-b from-gray-900 to-black">
      <MainComponent logo="/logo.png" links={demoLinks} />
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl font-inter">
          Scroll to see navbar effect
        </h1>
      </div>
    </div>
  );
});
}