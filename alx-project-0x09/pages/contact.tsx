import React from "react";
import Link from "next/link";

const Contact: React.FC = () => {
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
            <Link className="hover:text-white transition-colors duration-200" href="/gallery">Gallery</Link>
            <Link className="hover:text-white transition-colors duration-200" href="/about">About</Link>
            <Link className="hover:text-white transition-colors duration-200 text-white" href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">Get in Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Have questions or feedback? We'd love to hear from you!
          </p>
          
          <div className="grid gap-6 max-w-md mx-auto text-left">
            <div className="p-4 bg-[#0a0a0a] border border-gray-800 rounded-xl">
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">support@imagegen.ai</p>
            </div>
            <div className="p-4 bg-[#0a0a0a] border border-gray-800 rounded-xl">
              <h3 className="text-white font-semibold mb-2">Support</h3>
              <p className="text-gray-400 text-sm">Available 24/7 for your questions</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
