
import { Section } from "@/lib/types";
import { useEffect, useRef } from "react";
import { NavigationBar } from "../navigation/NavigationBar";
import { HeroSection } from "../sections/HeroSection";
import { HighlightsSection } from "../sections/HighlightsSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { BenefitsSection } from "../sections/BenefitsSection";
import { PricingSection } from "../sections/PricingSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { FAQSection } from "../sections/FAQSection";
import { ContactSection } from "../sections/ContactSection";
import { FooterSection } from "../sections/FooterSection";

interface PreviewProps {
  sections: Section[];
  activeSectionId: string | null;
}

const SectionComponent = ({ 
  section, 
  isActive 
}: { 
  section: Section;
  isActive: boolean;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [isActive]);

  const Component = (() => {
    switch (section.type) {
      case "hero": return HeroSection;
      case "highlights": return HighlightsSection;
      case "features": return FeaturesSection;
      case "benefits": return BenefitsSection;
      case "pricing": return PricingSection;
      case "testimonials": return TestimonialsSection;
      case "faq": return FAQSection;
      case "contact": return ContactSection;
      case "footer": return FooterSection;
      default: return null;
    }
  })();

  if (!Component) return null;

  return (
    <div 
      ref={sectionRef}
      className={`transition-all duration-300 ${
        isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''
      }`}
    >
      <Component content={section.content} />
    </div>
  );
};

const Preview = ({ sections, activeSectionId }: PreviewProps) => {
  const handleNavigation = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      const element = document.getElementById(section.id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex-1">
      <NavigationBar sections={sections} onNavigate={handleNavigation} />
      <div className="pt-16">
        <div className="mb-4 flex justify-between items-center p-8">
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
            <div key={section.id} id={section.id}>
              <SectionComponent 
                section={section} 
                isActive={section.id === activeSectionId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
