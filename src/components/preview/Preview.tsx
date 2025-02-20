
import { Section } from "@/lib/types";
import { HeroSection } from "../sections/HeroSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { BenefitsSection } from "../sections/BenefitsSection";
import { PricingSection } from "../sections/PricingSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { FAQSection } from "../sections/FAQSection";
import { ContactSection } from "../sections/ContactSection";
import { FooterSection } from "../sections/FooterSection";

interface PreviewProps {
  sections: Section[];
}

const SectionComponent = ({ section }: { section: Section }) => {
  switch (section.type) {
    case "hero":
      return <HeroSection content={section.content} />;
    case "features":
      return <FeaturesSection content={section.content} />;
    case "benefits":
      return <BenefitsSection content={section.content} />;
    case "pricing":
      return <PricingSection content={section.content} />;
    case "testimonials":
      return <TestimonialsSection content={section.content} />;
    case "faq":
      return <FAQSection content={section.content} />;
    case "contact":
      return <ContactSection content={section.content} />;
    case "footer":
      return <FooterSection content={section.content} />;
    default:
      return null;
  }
};

const Preview = ({ sections }: PreviewProps) => {
  return (
    <div className="flex-1 p-8">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50">
            Preview
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg shadow-sm hover:bg-black/90">
            Publish
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm h-[calc(100vh-8rem)] overflow-auto">
        {sections.map((section) => (
          <SectionComponent key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
