import React from "react";
import Link from "next/link";

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          <Link href="/" className="text-2xl font-bold tracking-tight cursor-pointer">
            <span className="text-white">Image</span>
            <span className="text-indigo-500">Gen</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <Link className="hover:text-white transition-colors duration-200" href="/">Home</Link>
            <Link className="hover:text-white transition-colors duration-200 text-white" href="/gallery">Gallery</Link>
            <Link className="hover:text-white transition-colors duration-200" href="/about">About</Link>
            <Link className="hover:text-white transition-colors duration-200" href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">Image Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse through AI-generated images. Gallery feature coming soon!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
