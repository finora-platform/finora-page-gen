
import { Section } from "@/lib/types";
import { Check } from "lucide-react";

export const PricingSection = ({ content }: { content: Section["content"] }) => {
  return (
    <div className="py-20 px-4 bg-[#F8F8FF]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
        <p className="text-xl text-gray-600">{content.subtitle}</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
          <button className="px-6 py-2 rounded-lg bg-[#5D4B8C] text-white font-medium">
            Monthly
          </button>
          <button className="px-6 py-2 rounded-lg text-gray-600 font-medium flex items-center gap-2">
            Quarterly
            <span className="text-sm text-green-500">(10% off)</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {content.pricing?.map((plan, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl shadow-lg bg-white"
          >
            <div className="text-[#5D4B8C] text-sm font-medium mb-2">{plan.plan}</div>
            <div className="mb-6">
              <div className="text-4xl font-bold flex items-start">
                <span className="text-2xl mr-1">₹</span>
                {plan.price}
              </div>
              <div className="text-gray-500 text-sm mt-1">
                or, ₹{Math.round(parseInt(plan.price) / 30)}.3 per day
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#5D4B8C]" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              className="w-full py-3 px-6 rounded-lg font-medium bg-[#5D4B8C] text-white hover:bg-[#4D3B7C] transition"
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
