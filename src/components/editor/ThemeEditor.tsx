import { Section } from "@/lib/types";
import { AccordionContent } from "@/components/ui/accordion";

const THEME_COLORS = ["blue", "darkblue", "green", "yellow", "pink", "purple"];

interface ThemeEditorProps {
  section: Section;
  onToggle: (value: any) => void;
}

export const ThemeEditor = ({ section, onToggle }: ThemeEditorProps) => (
  <AccordionContent>
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {THEME_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => {
              onToggle({ themeColor: color, source: "Validation" }); // Include source
            }}
            className="w-full h-full p-2 rounded-md flex items-center justify-center text-sm font-medium"
            style={{
              backgroundColor: `var(--${color})`,
              borderColor:
                section.content.themeColor === color ? "white" : "transparent",
              boxShadow:
                section.content.themeColor === color
                  ? "0 0 0 2px #000"
                  : "none",
            }}
          >
            <div className="flex items-center justify-center flex-col gap-2">
              <span
                className="text-xs mt-1 text-white p-2 rounded-md"
                style={{
                  backgroundColor: `var(--${color}-secondary)`,
                  borderColor:
                    section.content.themeColor === color
                      ? "white"
                      : "transparent"
                }}
              >
                Button
              </span>
              <span className="font-normal">Text</span>
            </div>
          </button>
        ))}
      </div>
      <input
        type="text"
        id="logo-url"
        name="logo"
        placeholder="Logo URL"
        value={section.content.logo || ""}
        onChange={(e) => onToggle({ logo: e.target.value })}
        className="w-full p-2 border rounded"
      />
    </div>
  </AccordionContent>
);
