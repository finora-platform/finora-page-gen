import { Section } from "@/lib/types";
import { useEffect, useRef } from "react";
import JSZip from "jszip";
import { Header } from "../navigation/Header";
import { HeroSection } from "../sections/HeroSection";
import { HighlightsSection } from "../sections/HighlightsSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { PricingSection } from "../sections/PricingSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { FAQSection } from "../sections/FAQSection";
import ContactSection from "../sections/ContactSection";
import { FooterSection } from "../sections/FooterSection";
import { Button } from "../ui/button";
import { PanelLeftClose, PanelLeftOpen, Eye, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PreviewProps {
  sections: Section[];
  activeSectionId: string | null;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

interface SectionComponentProps {
  section: Section;
  isActive: boolean;
  themeColor: string;
}

const SectionComponent = ({
  section,
  isActive,
  themeColor,
}: SectionComponentProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isActive]);

  if (section.enabled === false) return null;

  const Component = (() => {
    switch (section.type) {
      case "hero":
        return HeroSection;
      case "highlights":
        return HighlightsSection;
      case "features":
        return FeaturesSection;
      case "pricing":
        return PricingSection;
      case "testimonials":
        return TestimonialsSection;
      case "faq":
        return FAQSection;
      case "contact":
        return ContactSection;
      case "footer":
        return FooterSection;
      default:
        return null;
    }
  })();

  if (!Component) return null;

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-300 ${
        isActive ? "ring-2 ring-blue-500 ring-offset-2" : ""
      }`}
    >
      <Component content={section.content} themeColor={themeColor} />
    </div>
  );
};

const Preview = ({
  sections,
  activeSectionId,
  onToggleSidebar,
  isSidebarOpen = true,
}: PreviewProps) => {
  const { toast } = useToast();
  const previewRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (sectionId: string) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      const element = document.getElementById(section.id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePreview = () => {
    if (previewRef.current) {
      previewRef.current.requestFullscreen();
    }
  };

  const handlePublish = async () => {
    try {
      toast({
        title: "Preparing website package...",
        description: "This may take a moment.",
      });

      if (!previewRef.current) return;

      // Create zip file
      const zip = new JSZip();
      const assets = zip.folder("assets");

      // Get all styles from the document
      const styles = Array.from(
        document.querySelectorAll('style, link[rel="stylesheet"]')
      )
        .map((el) => el.outerHTML)
        .join("\n");

      // Get all script tags
      const scripts = Array.from(document.querySelectorAll("script[src]"))
        .map((el) => `<script src="${el.getAttribute("src")}"></script>`)
        .join("\n");

      // Create HTML content
      const htmlContent = `<!DOCTYPE html>
      <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  ${styles}
</head>
<body>
  ${previewRef.current.innerHTML}
  ${scripts}
</body>
</html>`;

      // Add files to zip
      zip.file("index.html", htmlContent);

      // Add all images to assets folder
      const images = previewRef.current.querySelectorAll("img");
      images.forEach((img, i) => {
        const src = img.getAttribute("src");
        if (src && !src.startsWith("data:")) {
          assets.file(`image-${i}.${src.split(".").pop()}`, src);
        }
      });

      // Generate zip file
      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);

      // Trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = "website-package.zip";
      document.body.appendChild(a);
      a.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);

      toast({
        title: "Download ready!",
        description: "Your website package has been generated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate website package.",
        variant: "destructive",
      });
      console.error("Package generation error:", error);
    }
  };

  const themeSection = sections.find((s) => s.type === "theme");
  const themeColor = themeSection?.content.themeColor || "blue";
  const logo = themeSection?.content.logo;

  return (
    <div className={`flex-1 bg-[#e5e7eb] ${isSidebarOpen ? "pl-80" : "pl-0"}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            onToggleSidebar();
          }}
        >
          {isSidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="mr-2" />
            Preview
          </Button>
          <Button
            style={{ backgroundColor: `var(--${themeColor}-secondary)` }}
            onClick={handlePublish}
          >
            <Rocket className="mr-2" />
            Publish
          </Button>
        </div>
      </div>
      <div
        ref={previewRef}
        className="bg-white rounded-xl shadow-sm mx-6 mb-6 overflow-auto"
      >
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
                themeColor={themeColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
