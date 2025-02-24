
import { Section } from "@/lib/types";

export const HighlightsSection = ({ content }: { content: Section["content"] }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {content.items?.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
