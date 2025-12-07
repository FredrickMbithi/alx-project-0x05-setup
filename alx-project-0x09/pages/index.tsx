import ImageCard from "@/components/common/ImageCard";
import React, { useState } from "react";
import Link from "next/link";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleGenerateImage = async () => {
    setIsLoading(true);
    const resp = await fetch("/api/generate-image", {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: { "Content-Type": "application/json" }
    });


    if (!resp.ok) {
      setIsLoading(false);
      return;
    }

    const data = await resp.json();
    setImageUrl(data.message);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-indigo-500/30">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          <Link href="/" className="text-2xl font-bold tracking-tight cursor-pointer">
            <span className="text-white">Image</span>
            <span className="text-indigo-500">Gen</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <Link className="hover:text-white transition-colors duration-200 text-white" href="/">Home</Link>
            <Link className="hover:text-white transition-colors duration-200" href="/gallery">Gallery</Link>
            <Link className="hover:text-white transition-colors duration-200" href="/about">About</Link>
            <Link className="hover:text-white transition-colors duration-200" href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20 pt-10">
        <div className="mb-10">
          <div className="mx-auto w-fit flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-[#121212] text-xs font-medium text-gray-400 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Powered by AI
          </div>
        </div>

        <div className="text-center mb-12 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-white">Image Generation</span>
            <span className="block text-indigo-500">App</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Generate stunning images based on your prompts using cutting-edge AI technology.
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <div className="relative flex items-center w-full p-2 bg-[#18181b] border border-gray-800 rounded-xl shadow-2xl ring-1 ring-white/5">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your image... e.g., 'A futuristic city at sunset'"
              className="flex-1 bg-transparent text-white placeholder-gray-500 px-4 py-3 text-base focus:outline-none"
            />
            <button
              onClick={handleGenerateImage}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              {isLoading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        <div className="mt-16 w-full max-w-3xl flex justify-center">
          {imageUrl ? (
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <ImageCard
                action={() => setImageUrl(imageUrl)}
                imageUrl={imageUrl}
                prompt={prompt}
              />
            </div>
          ) : (
            <div className="h-64 w-full max-w-md border border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center text-gray-600 bg-[#0a0a0a]">
              <span className="text-4xl mb-4 opacity-50">🎨</span>
              <p className="text-sm">Your generated image will appear here</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
