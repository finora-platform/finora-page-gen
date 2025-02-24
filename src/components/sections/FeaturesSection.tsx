
import { Section } from "@/lib/types";

export const FeaturesSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4 bg-[#6B46C1] text-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Why Us</h2>
      <p className="text-xl opacity-90 max-w-2xl mb-16">
        {content.subtitle}
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {content.items?.map((feature, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 relative text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#6B46C1]" />
            </div>
            <h3 className="text-[#6B46C1] text-xl font-semibold mt-4 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
