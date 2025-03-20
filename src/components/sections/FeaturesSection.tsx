import { Circle } from "lucide-react";
import { Section } from "@/lib/types";

interface FeaturesSectionProps {
  content: Section["content"];
  themeColor: string;
}

export const FeaturesSection = ({
  content,
  themeColor,
}: FeaturesSectionProps) => {
  const featureCount = content.items.length;
  let gridClasses = "grid gap-8 max-w-6xl mx-auto";

  if (featureCount === 1) {
    gridClasses += " grid-cols-1";
  } else if (featureCount === 2) {
    gridClasses += " grid-cols-2";
  } else {
    gridClasses += " md:grid-cols-2 lg:grid-cols-3";
  }

  return (
    <div className={`py-20 px-36`} style={{ backgroundColor: `var(--${themeColor})` }}>
      <div className="text-center mb-16">
        <h2 className="text-3xl text-left font-bold mb-4 text-white">
          {content.title}
        </h2>
        <p className="text-xl text-left text-gray-200">{content.subtitle}</p>
      </div>
      <div className={gridClasses}>
        {content.items?.map((feature, index) => (
          <div
            key={index}
            className="relative py-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 px-4"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-xl flex items-center justify-center border-black shadow-lg">
              <span className="text-2xl font-bold">
                <Circle stroke={`var(--${themeColor})`} />
              </span>
            </div>
            <h3 className="text-xl text-center font-semibold mb-3 text-[#5D4B8C]">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center" style={{ color : `var(--${themeColor}-secondary)`}}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
