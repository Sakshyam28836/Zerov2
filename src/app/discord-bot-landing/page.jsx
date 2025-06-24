"use client";
import React from "react";
import NavBar from "../../components/nav-bar";
import TestimonialCard from "../../components/testimonial-card";
import GlowButton from "../../components/glow-button";
import FeatureCard from "../../components/feature-card";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const demoRef = useRef(null);
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Support", href: "#support" },
  ];
  const stats = [
    { value: "50,000+", label: "Servers" },
    { value: "2M+", label: "Users" },
    { value: "99.9%", label: "Uptime" },
  ];
  const features = [
    {
      icon: "fa-solid fa-robot",
      title: "AI-Powered Responses",
      description:
        "Advanced natural language processing for human-like interactions",
      color: "#00FFFF",
    },
    {
      icon: "fa-solid fa-shield",
      title: "Auto Moderation",
      description: "Smart content filtering and user management",
      color: "#FF00FF",
    },
    {
      icon: "fa-solid fa-music",
      title: "Music Streaming",
      description: "High-quality music streaming from multiple sources",
      color: "#00FFFF",
    },
    {
      icon: "fa-solid fa-gamepad",
      title: "Game Integration",
      description: "Real-time game stats and player tracking",
      color: "#FF00FF",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Analytics Dashboard",
      description: "Detailed server insights and activity tracking",
      color: "#00FFFF",
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Custom Commands",
      description: "Create personalized commands for your server",
      color: "#FF00FF",
    },
  ];
  const testimonials = [
    {
      avatar: "/avatar1.png",
      name: "TechServer Owner",
      review:
        "This bot transformed our community engagement! The AI responses are incredibly natural.",
      rating: 5,
      color: "#00FFFF",
    },
    {
      avatar: "/avatar2.png",
      name: "Gaming Guild Leader",
      review:
        "The automated moderation is a game-changer. Haven't had a single spam issue since!",
      rating: 5,
      color: "#FF00FF",
    },
    {
      avatar: "/avatar3.png",
      name: "Community Manager",
      review:
        "Best decision for our server. The custom commands feature is simply amazing!",
      rating: 5,
      color: "#00FFFF",
    },
  ];

  useEffect(() => {
    const demoCommands = [
      "/help",
      "/play music",
      "/stats global",
      "/moderate setup",
    ];
    let currentIndex = 0;
    let currentCharIndex = 0;
    const typeWriter = () => {
      if (currentIndex < demoCommands.length) {
        const command = demoCommands[currentIndex];
        if (currentCharIndex < command.length) {
          setTerminalText((prev) => prev + command[currentCharIndex]);
          currentCharIndex++;
          setTimeout(typeWriter, 100);
        } else {
          setTimeout(() => {
            setTerminalText("");
            currentCharIndex = 0;
            currentIndex++;
            typeWriter();
          }, 2000);
        }
      } else {
        currentIndex = 0;
        typeWriter();
      }
    };

    typeWriter();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-inter">
      <NavBar logo="/bot-logo.png" links={navLinks} />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0A0A0F]/90 to-[#0A0A0F]" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-transparent bg-clip-text">
            Revolutionize Your Discord Server
          </h1>
          <div className="flex justify-center gap-6 mb-12">
            <GlowButton variant="neon" color="#00FFFF">
              Add to Discord
            </GlowButton>
            <GlowButton variant="neon" color="#FF00FF">
              Join Community
            </GlowButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      <section id="demo" ref={demoRef} className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="font-mono text-cyan-400">
              <span className="text-pink-500">{">"}</span> {terminalText}
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 relative">
        <></>
      </section>
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/bot-logo.png" alt="Logo" className="h-8 w-auto mb-4" />
              <p className="text-gray-400">Elevate your Discord experience</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <div className="flex gap-4">
                <GlowButton variant="neon" color="#00FFFF" size="sm">
                  <i className="fab fa-discord"></i>
                </GlowButton>
                <GlowButton variant="neon" color="#FF00FF" size="sm">
                  <i className="fab fa-twitter"></i>
                </GlowButton>
                <GlowButton variant="neon" color="#00FFFF" size="sm">
                  <i className="fab fa-github"></i>
                </GlowButton>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          <i className="fas fa-arrow-up text-white"></i>
        </button>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 4s infinite ease-in-out;
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
          50% { text-shadow: 0 0 40px rgba(255, 0, 255, 0.5); }
        }

        .glow-text {
          animation: glow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;