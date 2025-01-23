/* eslint-disable @next/next/no-img-element */
import React from "react";

// Avatar Root Component
export function Avatar({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200 w-10 h-10">{children}</div>;
}

// Avatar Image Component
export function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="object-cover w-full h-full" />;
}

// Avatar Fallback Component
export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-700">{children}</div>;
}

// Default Export
export default Avatar;
