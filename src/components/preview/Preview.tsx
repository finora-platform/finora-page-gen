import { Section } from "@/lib/types"; // Corrected import path
import { useEffect, useRef } from "react";
import { Header } from "../navigation/Header";
import { HeroSection } from "../sections/HeroSection";
import { HighlightsSection } from "../sections/HighlightsSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { BenefitsSection } from "../sections/BenefitsSection";
import { PricingSection } from "../sections/PricingSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { FAQSection } from "../sections/FAQSection";
import { ContactSection } from "../sections/ContactSection";
import { FooterSection } from "../sections/FooterSection";
import { Button } from "../ui/button";
import { PanelLeftClose, PanelLeftOpen, Eye, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast"; // Corrected import path

interface PreviewProps {
  sections: Section[];
  activeSectionId: string | null;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

const SectionComponent = ({ 
  section,
  isActive,
  themeColor,
}: { 
  section: Section;
  isActive: boolean;
  themeColor: string;
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

  if (section.enabled === false) return null;

  const Component = (() => {
    switch (section.type) {
      case "hero": return HeroSection;
      case "highlights": return HighlightsSection;
      case "features": return FeaturesSection;
      case "benefits": return BenefitsSection;
      case "pricing": return PricingSection; // Adjusted to ensure proper JSX usage
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
      className={`transition-all duration-300 ${isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
    >
      <Component content={section.content} themeColor={themeColor} />
    </div>
  );
};

const Preview = ({ sections, activeSectionId, onToggleSidebar, isSidebarOpen = true }: PreviewProps) => {
  const { toast } = useToast();
  const previewRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      const element = document.getElementById(section.id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePreview = () => {
    if (previewRef.current) {
      previewRef.current.requestFullscreen();
    }
  };

  const handlePublish = () => {
    toast({
      title: "Publishing...",
      description: "Your site is being published. This may take a few minutes.",
    });
  };

  const themeSection = sections.find(s => s.type === 'theme');
  const themeColor = themeSection?.content.themeColor || '#6B46C1';
  const logo = themeSection?.content.logo;

  return (
    <div className="flex-1 bg-[#e5e7eb]">
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <Button 
          variant="outline" 
          size="icon"
          onClick={onToggleSidebar}
        >
          {isSidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
        <div className="flex gap-2">
          <Button 
            variant="outline"
            onClick={handlePreview}
          >
            <Eye className="mr-2" />
            Preview
          </Button>
          <Button 
            onClick={handlePublish}
          >
            <Rocket className="mr-2" />
            Publish
          </Button>
        </div>
      </div>
      <div ref={previewRef} className="bg-white rounded-xl shadow-sm mx-6 my-6">
        <Header 
          sections={sections} 
          themeColor={themeColor}
          logo={logo}
          onNavigate={handleNavigation} 
        />
        <div className="flex space-y-16 flex-col">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <SectionComponent 
                section={section} 
                isActive={section.id === activeSectionId}
                themeColor={themeColor} // Pass themeColor here
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
