
import { Section } from "@/lib/types";

export const HeroSection = ({ content }: { content: Section["content"] }) => (
  <div className="text-center py-20 px-4 bg-[#5D4B8C] text-white rounded-3xl">
    <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
    <h2 className="text-4xl font-bold mb-8">{content.subtitle}</h2>
    {content.buttonText && content.buttonUrl && (
      <a 
        href={content.buttonUrl}
        className="inline-block px-8 py-3 bg-[#7C68AA] text-white rounded-lg hover:bg-[#6A579B] transition-colors"
      >
        {content.buttonText}
      </a>
    )}
  </div>
);
