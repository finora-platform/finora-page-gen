
import { Section } from "@/lib/types";

export const HeroSection = ({ content }: { content: Section["content"] }) => (
  <div className="text-center py-20 px-4">
    <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
    <p className="text-xl text-gray-600 mb-8">{content.subtitle}</p>
    <a
      href={content.buttonUrl}
      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
    >
      {content.buttonText}
    </a>
    {content.image && (
      <img src={content.image} alt="Hero" className="mt-12 mx-auto max-w-2xl rounded-lg shadow-lg" />
    )}
  </div>
);
