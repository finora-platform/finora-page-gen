import { Section } from "@/lib/types"; // Corrected import path
import { Check } from "lucide-react";

interface PricingSectionProps {
  content: Section["content"];
  themeColor?: string; // Ensure themeColor is defined
}

export const PricingSection = ({ content, themeColor='#5D4B8C' }: PricingSectionProps) => {
  return (
      <div className={`py-20 px-4 md:px-8`} style={{ backgroundColor: themeColor }} w-auto overflow-hidden>




      <div className="pl-6 mb-16">
        <h2 className="text-3xl text-white font-bold mb-4">{content.title}</h2>
        <p className="text-xl text-white">{content.subtitle}</p>
      </div>

      <div className="relative bg-white rounded-xl">

      <div className="relative -top-6 left-1/2 -translate-x-1/2 flex justify-center mb-8  ">
        <div className="inline-flex bg-white rounded-lg p-1 shadow-xl">
          <button className="px-6 py-2 rounded-lg" style={{ backgroundColor: themeColor }} text-white font-medium>

            Monthly
          </button>
          <button className="px-6 py-2 rounded-lg text-gray-600 font-medium flex items-center gap-2">
            Quarterly
            <span className="text-sm text-green-500">(10% off)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-full mx-auto overflow-hidden">



        {content.pricing?.map((plan, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl  bg-white shadow-xl"
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
            <button className="w-full py-3 px-6 rounded-lg font-medium bg-[#5D4B8C] text-white hover:bg-[#4D3B7C] transition">
              Get started
            </button>
          </div>
        ))}
      </div>

      </div>

    </div>
  );
};
