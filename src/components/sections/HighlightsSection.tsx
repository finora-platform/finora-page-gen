import { Section } from "@/lib/types";

export const HighlightsSection = ({
  content,
}: {
  content: Section["content"];
  themeColor: string;
}) => {

  const featureCount = content.items.length;
  let gridClasses = "grid gap-8";

  if (featureCount === 1) {
    gridClasses += " grid-cols-1";
  } else if (featureCount === 2) {
    gridClasses += " grid-cols-2";
  }else if (featureCount === 3) {
    gridClasses += " grid-cols-3";
  }else if (featureCount === 4) {
    gridClasses += " grid-cols-4";
  }else {
    gridClasses += " md:grid-cols-2 lg:grid-cols-5";
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={gridClasses}>
          {content.items?.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
