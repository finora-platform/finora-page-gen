import { Section } from "@/lib/types";
import { AccordionContent } from "@/components/ui/accordion";

const THEME_COLORS = [
  "#6B46C1", // Purple
  "#2563EB", // Blue
  "#16A34A", // Green
  "#EA580C", // Orange
  "#DC2626", // Red
  "#DB2777", // Pink
  "#7C3AED", // Violet
  "#2DD4BF", // Teal
];

interface ThemeEditorProps {
  section: Section;
  onToggle: (value: any) => void;
}

export const ThemeEditor = ({ section, onToggle }: ThemeEditorProps) => (
  <AccordionContent>
    <div className="p-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        {THEME_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => onToggle({ themeColor: color })}
            className="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110"
            style={{ 
              backgroundColor: color,
              borderColor: section.content.themeColor === color ? 'white' : 'transparent',
              boxShadow: section.content.themeColor === color ? '0 0 0 2px #000' : 'none'
            }}
          />
        ))}
      </div>
      <input
        type="text"
        placeholder="Logo URL"
        value={section.content.logo || ''}
        onChange={(e) => onToggle({ logo: e.target.value })}
        className="w-full p-2 border rounded"
      />
    </div>
  </AccordionContent>
);