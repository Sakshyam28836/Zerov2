"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({
  avatar,
  name,
  review,
  rating = 5,
  color = "#00ff99",
  variant = "default",
}) {
  const cardVariants = {
    default: "bg-gray-900/40",
    solid: "bg-gray-900",
    outline: "bg-transparent border-2",
  };

  return (
    <div
      className={`
        relative p-6
        ${cardVariants[variant]}
        backdrop-blur-md
        rounded-lg
        border-gray-700/50
        transform transition-all duration-300
        hover:-translate-y-2
        group
      `}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}33`,
        }}
      />

      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              boxShadow: `0 0 20px ${color}`,
            }}
          />
          <div
            className="h-20 w-20 rounded-full overflow-hidden border-2 transition-all duration-300"
            style={{ borderColor: color }}
          >
            <img
              src={avatar}
              alt={`${name}'s avatar`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex space-x-1">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="fa-solid fa-star text-sm" style={{ color }} />
          ))}
        </div>

        <blockquote className="text-gray-300 font-inter text-sm leading-relaxed italic">
          "{review}"
        </blockquote>

        <cite className="text-white font-inter font-medium not-italic">
          {name}
        </cite>
      </div>
    </div>
  );
}

function StoryComponent() {
  const testimonials = [
    {
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "Sarah Johnson",
      review:
        "This product completely transformed how I work. The interface is intuitive and the features are exactly what I needed.",
      rating: 5,
      color: "#00ff99",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=2",
      name: "Michael Chen",
      review:
        "Incredible value for money. The support team is responsive and helpful. Highly recommended!",
      rating: 4,
      color: "#ff3366",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=3",
      name: "Emma Wilson",
      review:
        "I've tried many similar products, but this one stands out. It's clearly made with attention to detail.",
      rating: 5,
      color: "#00ccff",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="space-y-12">
        <h2 className="text-2xl font-bold text-white mb-6">Default Variant</h2>
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-float"
              style={{ "--index": index }}
            >
              <MainComponent {...testimonial} variant="default" />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Solid Variant</h2>
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-float"
              style={{ "--index": index }}
            >
              <MainComponent {...testimonial} variant="solid" />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Outline Variant</h2>
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-float"
              style={{ "--index": index }}
            >
              <MainComponent {...testimonial} variant="outline" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
          animation-delay: calc(var(--index) * 1s);
        }
      `}</style>
    </div>
  );
});
}