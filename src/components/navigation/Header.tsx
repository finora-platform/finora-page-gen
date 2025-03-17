import { Section } from "@/lib/types";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

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
    <header className="sticky top-0 rounded-xl bg-white/80 backdrop-blur-sm z-50 border-b w-full">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <nav className="flex-shrink-0 flex space-x-8">
            {logo ? (
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            ) : (
              <div className="h-8 w-8 rounded bg-gray-200"></div>
            )}
            {navItems.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {section.name}
              </button>
            ))}
          </nav>
          <nav className="hidden md:flex space-x-4">
            <Button variant="outline" onClick={() => onNavigate('contact')}>Contact Us</Button>
            <Button className={`text-white bg-[${themeColor}] hover:bg-[${themeColor}/80]`} style={{ backgroundColor: themeColor }} onClick={() => onNavigate('pricing')}>See plans</Button>

          </nav>
        </div>
      </div>
    </header>
  );
};
