import { Section } from "@/lib/types";
import { CircleCheck } from "lucide-react";
import { useState } from "react";

interface PricingSectionProps {
  content: Section["content"];
  themeColor?: string; // Ensure themeColor is defined
}

export const PricingSection = ({
  content,
  themeColor = "#5D4B8C",
}: PricingSectionProps) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">(
    "monthly"
  );

  const calculatePrice = (monthlyPrice: number) => {
    if (billingCycle === "monthly") {
      return monthlyPrice;
    } else {
      return monthlyPrice * 3 - (monthlyPrice * content.discount) / 100;
    }
  };

  // Calculate daily price
  const calculateDailyPrice = (price: number) => {
    const days = billingCycle === "monthly" ? 30 : 90;
    return (price / days).toFixed(1);
  };

  return (
    <div
      className={`py-20 px-4 md:px-8 overflow-hidden`}
      style={{ backgroundColor: `var(--${themeColor})` }}
    >
      <div className="pl-6 mb-16">
        <h2 className="text-4xl font-semibold mb-4">{content.title}</h2>
        <p className="text-xl">{content.subtitle}</p>
      </div>

      <div className="relative bg-white rounded-xl">
        <div className="relative -top-6 left-1/2 -translate-x-1/2 flex justify-center ">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className="px-6 py-2 rounded-lg font-medium"
              style={
                billingCycle == "monthly"
                  ? {
                      backgroundColor: `var(--${themeColor}-secondary)`,
                      color: "white",
                    }
                  : { backgroundColor: "white" }
              }
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className="px-6 py-2 rounded-lg font-medium flex items-center gap-2"
              style={
                billingCycle == "quarterly"
                  ? {
                      backgroundColor: `var(--${themeColor}-secondary)`,
                      color: "white",
                    }
                  : { backgroundColor: "white" }
              }
            >
              Quarterly
              <span className="text-sm text-green-500">({content.discount}% off)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 pb-11 px-8 md:grid-cols-3 gap-8 max-w-full mx-auto overflow-hidden">
          {content.pricing?.map((plan, index) => {
            const price = calculatePrice(parseInt(plan.price));
            const dailyPrice = calculateDailyPrice(price);
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-xl border"
              >
                <div className="flex justify-center mb-2">
                  <div
                    className="border text-sm font-medium mb-2 text-center py-1 px-3 rounded-full"
                    style={{
                      color: `var(--${themeColor}-secondary)`,
                      borderColor: `var(--${themeColor})`,
                      background: `var(--${themeColor})`,
                    }}
                  >
                    <span> {plan.plan} </span>
                  </div>
                </div>
                <div className="mb-6 flex flex-col items-center">
                  <div className="text-4xl font-bold flex items-start">
                    <span className="mr-1">₹</span>
                    {price.toLocaleString("en-IN")}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    or, ₹{dailyPrice} per day
                  </div>
                </div>
                <button
                  className="w-full py-3 px-6 rounded-lg font-medium text-white transition"
                  style={{ backgroundColor: `var(--${themeColor}-secondary)` }}
                >
                  Get started
                </button>
                <ul className="space-y-4 mt-8 ">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CircleCheck className="w-5 h-5 mr-2 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
