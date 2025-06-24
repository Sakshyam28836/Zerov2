"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ icon, title, description, color = "#00ff99" }) {
  return (
    <div
      className={`
        group relative overflow-hidden
        transform transition-all duration-300
        hover:-translate-y-1
      `}
    >
      <div className="absolute inset-0 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,153,0.3)]" />

      <div className="card relative bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-lg">
        <div className="card-header space-y-4 p-6">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50"
            style={{
              boxShadow: `0 0 10px ${color}33`,
            }}
          >
            <i className={`${icon} text-xl`} style={{ color }} />
          </div>

          <h3 className="card-title text-xl font-bold text-white font-inter">
            {title}
          </h3>
        </div>

        <div className="card-content p-6 pt-0">
          <p className="text-gray-300 font-inter text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function StoryComponent() {
  const features = [
    {
      icon: "fa-solid fa-rocket",
      title: "Blazing Fast",
      description:
        "Experience lightning-quick performance with our optimized architecture.",
      color: "#00ff99",
    },
    {
      icon: "fa-solid fa-shield",
      title: "Ultra Secure",
      description:
        "Bank-level security ensures your data stays protected 24/7.",
      color: "#ff3366",
    },
    {
      icon: "fa-solid fa-microchip",
      title: "AI Powered",
      description:
        "Advanced artificial intelligence working behind the scenes.",
      color: "#00ccff",
    },
    {
      icon: "fa-solid fa-paint-brush",
      title: "Dark Mode",
      description:
        "Elegant dark theme that's easy on the eyes and looks professional.",
      color: "#9933ff",
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Cloud Sync",
      description: "Seamlessly sync your data across all devices in real-time.",
      color: "#ff9933",
    },
    {
      icon: "fa-solid fa-mobile",
      title: "Mobile First",
      description:
        "Optimized for mobile devices with responsive design principles.",
      color: "#33ff99",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <MainComponent
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            color={feature.color}
          />
        ))}
      </div>
    </div>
  );
});
}