
import { Section } from "@/lib/types";
import { useState, useEffect } from "react";

interface HeaderProps {
  sections: Section[];
  themeColor?: string;
  logo?: string;
  onNavigate: (sectionId: string) => void;
}

export const Header = ({ sections, themeColor = '#6B46C1', logo, onNavigate }: HeaderProps) => {
  const [navItems, setNavItems] = useState<Section[]>([]);

  useEffect(() => {
    const navTypes = ["features", "testimonials", "faq"];
    const items = sections
      .filter(section => navTypes.includes(section.type))
      .sort((a, b) => {
        const aIndex = sections.findIndex(s => s.id === a.id);
        const bIndex = sections.findIndex(s => s.id === b.id);
        return aIndex - bIndex;
      });
    setNavItems(items);
  }, [sections]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            {logo ? (
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            ) : (
              <div className="h-8 w-8 rounded bg-gray-200" />
            )}
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                style={{ 
                  '--hover-color': themeColor,
                  ':hover': { color: themeColor }
                } as any}
              >
                {section.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
