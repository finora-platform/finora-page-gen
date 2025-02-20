
import { Section } from "@/lib/types";
import { Check, Zap, Clock, Shield, BarChart3, Settings } from "lucide-react";

const getIconByIndex = (index: number) => {
  const icons = [Zap, Clock, Shield, BarChart3, Settings, Check];
  const Icon = icons[index % icons.length];
  return <Icon className="w-8 h-8 text-blue-600 mb-4" />;
};

export const BenefitsSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4 bg-[#F2FCE2]">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">{content?.title}</h2>
      <p className="text-xl text-gray-600">{content?.subtitle}</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {content?.items?.map((benefit, index) => (
        <div 
          key={index} 
          className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {getIconByIndex(index)}
          <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
);
