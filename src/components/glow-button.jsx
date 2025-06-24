"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({
  children,
  color = "#00ff99",
  className = "",
  variant = "neon",
  size = "default",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 relative";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    neon: `
      bg-gray-900/40 
      backdrop-blur-md 
      text-white 
      border-2
      hover:scale-105
    `,
    default: "bg-white text-gray-900 hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <>
      <button
        className={`
          ${baseStyle}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${className}
        `}
        style={{
          borderColor: variant === "neon" ? color : "transparent",
        }}
        data-variant={variant}
        {...props}
      >
        {children}
      </button>
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        button[data-variant="neon"] {
          animation: pulse 2s infinite;
        }
        
        button[data-variant="neon"]:hover {
          box-shadow: 0 0 20px ${color}, 0 0 40px ${color}33, 0 0 60px ${color}22 !important;
        }
      `}</style>
    </>
  );
}

function StoryComponent() {
  return (
    <div className="p-12 space-y-8 bg-white dark:bg-gray-900">
      <div className="space-x-4">
        <MainComponent>Default Neon</MainComponent>
        <MainComponent variant="default">Default Shadcn</MainComponent>
        <MainComponent variant="secondary">Secondary Shadcn</MainComponent>
        <MainComponent variant="destructive">Destructive Shadcn</MainComponent>
      </div>

      <div className="space-x-4">
        <MainComponent color="#00ff99">Green Neon</MainComponent>
        <MainComponent color="#ff0099">Pink Neon</MainComponent>
        <MainComponent color="#0099ff">Blue Neon</MainComponent>
      </div>

      <div className="space-x-4">
        <MainComponent size="sm">Small Button</MainComponent>
        <MainComponent size="default">Default Size</MainComponent>
        <MainComponent size="lg">Large Button</MainComponent>
      </div>

      <div className="space-x-4">
        <MainComponent disabled className="opacity-50">
          Disabled Neon
        </MainComponent>
        <MainComponent variant="default" disabled>
          Disabled Default
        </MainComponent>
      </div>

      <div className="space-x-4">
        <MainComponent variant="outline" color="#00ff99">
          Outline + Neon
        </MainComponent>
        <MainComponent variant="ghost" color="#ff0099">
          Ghost + Neon
        </MainComponent>
      </div>
    </div>
  );
});
}