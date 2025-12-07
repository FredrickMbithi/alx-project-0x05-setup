import { GeneratedImageProps } from "@/interfaces";

const ImageCard: React.FC<GeneratedImageProps> = ({ imageUrl, prompt, width, action }) => {
  return (
    <div onClick={() => action(imageUrl)} className="mt-6 border border-gray-800 rounded-xl overflow-hidden hover:cursor-pointer transition-transform hover:scale-[1.02]">
      <img src={imageUrl} alt={prompt} className={`w-full rounded-t-xl`} />
      <div className="p-4 bg-[#0a0a0a]">
        <h2 className={`${width ? 'text-sm' : 'text-lg'} font-semibold text-white mb-2`}>Your Prompt:</h2>
        <p className={`${width ? 'text-xs' : 'text-base'} text-gray-400`}>{prompt}</p>
      </div>
    </div>
  )
}

export default ImageCard;
