
import { Section } from "@/lib/types";

export const HeroSection = ({ content }: { content: Section["content"] }) => (
  <div className="text-center py-20 px-4 bg-[#5D4B8C] text-white rounded-3xl">
    <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
    <h2 className="text-4xl font-bold mb-8">{content.subtitle}</h2>
    <p className="text-xl mb-12 max-w-3xl mx-auto opacity-80">
      {content.description}
    </p>
    <div className="flex gap-4 max-w-3xl mx-auto justify-center">
      <input
        type="text"
        placeholder="Name"
        className="flex-1 px-4 py-3 rounded-lg text-gray-800"
      />
      <input
        type="tel"
        placeholder="Mobile number"
        className="flex-1 px-4 py-3 rounded-lg text-gray-800"
      />
      <button className="px-8 py-3 bg-[#7C68AA] text-white rounded-lg hover:bg-[#6A579B] transition-colors">
        Submit
      </button>
    </div>
  </div>
);
