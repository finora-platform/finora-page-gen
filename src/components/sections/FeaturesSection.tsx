
import { Section } from "@/lib/types";

export const FeaturesSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4 bg-[#5D4B8C]">
    <div className="text-center mb-16">
      <h2 className="text-3xl text-left font-bold mb-4 text-white">{content.title}</h2>
      <p className="text-xl text-left text-gray-200">{content.subtitle}</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {content.items?.map((feature, index) => (
        <div key={index} className="relative pt-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#5D4B8A] rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{index + 1}</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#5D4B8C]">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);
