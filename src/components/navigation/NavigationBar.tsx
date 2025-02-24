
import { useEffect, useState } from "react";
import { Section } from "@/lib/types";

interface NavigationBarProps {
  sections: Section[];
  onNavigate: (sectionId: string) => void;
}

export const NavigationBar = ({ sections, onNavigate }: NavigationBarProps) => {
  const [navItems, setNavItems] = useState<Section[]>([]);

  useEffect(() => {
    const relevantSections = sections.filter(section => 
      ["features", "testimonials", "faq"].includes(section.type)
    );
    setNavItems(relevantSections);
  }, [sections]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1">
            <span className="text-xl font-semibold">Logo</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
