import ImageCard from "@/components/common/ImageCard";
import React, { useState } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold tracking-wide">
          <span className="text-indigo-400">Image</span>
          <span className="text-white">Gen</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm text-gray-300">
          <a className="hover:text-white" href="#">Home</a>
          <a className="hover:text-white" href="#">Gallery</a>
          <a className="hover:text-white" href="#">About</a>
        </nav>
      </header>

      <main className="flex flex-col items-center px-4 pt-10 pb-20">
        <div className="flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-gray-700 text-xs text-gray-300">
          <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" />
          Powered by AI
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold text-center leading-tight mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">Image Generation</span>
          <br />
          <span className="text-white">App</span>
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mb-8">
          Generate stunning images based on your prompts using cutting-edge AI technology.
        </p>

        <div className="w-full max-w-xl bg-gray-800/60 border border-gray-700 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your image... e.g., 'A futuristic city at sunset'"
              className="flex-1 bg-gray-900 text-gray-100 placeholder-gray-500 p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleGenerateImage}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow hover:from-indigo-600 hover:to-purple-600 transition-colors"
            >
              {isLoading ? "Loading..." : "Generate Image"}
            </button>
          </div>
          <button
            onClick={handleGenerateImage}
            className="sm:hidden w-full px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow hover:from-indigo-600 hover:to-purple-600 transition-colors"
          >
            {isLoading ? "Loading..." : "Generate Image"}
          </button>
        </div>

        <div className="mt-10 w-full max-w-2xl">
          {imageUrl ? (
            <ImageCard
              action={() => setImageUrl(imageUrl)}
              imageUrl={imageUrl}
              prompt={prompt}
            />
          ) : (
            <div className="mx-auto h-16 w-16 rounded-full border border-gray-700 flex items-center justify-center text-gray-500">
              <span className="text-2xl">🖼️</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
