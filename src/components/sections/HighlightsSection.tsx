
import { Section } from "@/lib/types";

export const HighlightsSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {content.items?.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-4xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
