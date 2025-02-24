
import { Section } from "@/lib/types";
import { Check } from "lucide-react";

export const PricingSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4 bg-[#6B46C1] text-white">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
      <p className="text-xl opacity-90">{content.subtitle}</p>
    </div>
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-full p-1 inline-flex text-gray-700">
        <button className="px-6 py-2 rounded-full bg-[#6B46C1] text-white">Monthly</button>
        <button className="px-6 py-2 rounded-full">Quarterly</button>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[
        { plan: "Basic", price: "₹999", perDay: "₹33.3" },
        { plan: "Pro", price: "₹12,999", perDay: "₹433.3" },
        { plan: "Enterprise", price: "₹45,999", perDay: "₹1533.3" }
      ].map((plan, index) => (
        <div key={index} className="bg-white rounded-3xl p-8 text-gray-900">
          <span className="text-[#6B46C1] text-sm font-medium">Plan name</span>
          <div className="mt-4 mb-1">
            <span className="text-5xl font-bold">{plan.price}</span>
          </div>
          <div className="text-gray-500 mb-8">or, {plan.perDay} per day</div>
          <button className="w-full py-3 rounded-lg font-medium bg-[#6B46C1] text-white hover:bg-[#5B3AA6] transition mb-8">
            Get started
          </button>
          <ul className="space-y-4">
            {Array(5).fill(null).map((_, i) => (
              <li key={i} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
