
import { Section } from "@/lib/types";

export const FeaturesSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4 bg-gray-50">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
      <p className="text-xl text-gray-600">{content.subtitle}</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {content.items?.map((feature, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);
