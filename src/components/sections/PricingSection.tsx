
import { Section } from "@/lib/types";
import { Check } from "lucide-react";

export const PricingSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4 bg-gray-50">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
      <p className="text-xl text-gray-600">{content.subtitle}</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {content.pricing?.map((plan, index) => (
        <div 
          key={index} 
          className={`p-8 rounded-2xl shadow-lg ${
            index === 1 ? 'bg-blue-600 text-white' : 'bg-white'
          }`}
        >
          <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
          <p className="text-3xl font-bold mb-6">{plan.price}</p>
          <ul className="space-y-4">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <Check className={`w-5 h-5 mr-2 ${index === 1 ? 'text-white' : 'text-blue-600'}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button 
            className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition ${
              index === 1 
                ? 'bg-white text-blue-600 hover:bg-gray-100' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  </div>
);
