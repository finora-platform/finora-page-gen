import { Section } from "@/lib/types";
import { AccordionContent } from "@/components/ui/accordion";

const THEME_COLORS = [
  "purple", // Purple
  "blue", // Blue
  "green", // Green
  "orange", // Orange
  "red", // Red
  "pink", // Pink
  "violet", // Violet
  "teal", // Teal
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
    onClick={() => {
        onToggle({ themeColor: color, source: 'Validation' }); // Include source
    }}

            className="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110"
            style={{ 
              backgroundColor: `var(--${color})`,
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
