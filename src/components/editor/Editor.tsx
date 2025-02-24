
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Section, FormField } from "@/lib/types";
import { GripVertical, Plus } from "lucide-react";
import { sectionFields } from "@/lib/constants";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

interface EditorProps {
  sections: Section[];
  activeSection: Section | undefined;
  onSectionSelect: (id: string) => void;
  onUpdateSection: (id: string, content: any) => void;
  onToggleSection: (id: string, enabled: boolean) => void;
}

const SortableItem = ({ 
  section, 
  isActive,
  onToggle,
  onClick,
  isDraggable = true
}: { 
  section: Section;
  isActive: boolean;
  onToggle: (enabled: boolean) => void;
  onClick: () => void;
  isDraggable?: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: section.id,
    disabled: !isDraggable
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <AccordionItem value={section.id} className="border-none">
        <div className={`flex items-center p-3 mb-2 rounded-lg ${
          isActive ? "bg-white shadow-lg" : "hover:bg-white/50"
        }`}>
          {isDraggable && (
            <div {...attributes} {...listeners} className="mr-2 text-gray-400 hover:text-gray-600">
              <GripVertical className="w-5 h-5" />
            </div>
          )}
          <AccordionTrigger 
            onClick={onClick}
            className="flex-1 hover:no-underline"
          >
            <span className="text-sm font-medium">{section.name}</span>
          </AccordionTrigger>
          {section.type !== 'theme' && (
            <Switch
              checked={section.enabled !== false}
              onCheckedChange={onToggle}
              onClick={e => e.stopPropagation()}
              className="ml-2"
            />
          )}
        </div>
        {section.type === 'theme' && (
          <AccordionContent>
            <div className="p-4 space-y-4">
              <div className="flex flex-wrap gap-2">
                {THEME_COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => onToggle(color)}
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
                onChange={(e) => onClick({ logo: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
          </AccordionContent>
        )}
      </AccordionItem>
    </div>
  );
};

const FormFields = ({ fields, content, onChange }: {
  fields: FormField[];
  content: any;
  onChange: (value: any) => void;
}) => {
  const handleChange = (name: string, value: any) => {
    onChange({ ...content, [name]: value });
  };

  const handleArrayChange = (fieldName: string, index: number, value: any) => {
    const newArray = [...(content[fieldName] || [])];
    newArray[index] = { ...newArray[index], ...value };
    handleChange(fieldName, newArray);
  };

  const addArrayItem = (fieldName: string) => {
    const newArray = [...(content[fieldName] || []), {}];
    handleChange(fieldName, newArray);
  };

  const removeArrayItem = (fieldName: string, index: number) => {
    const newArray = content[fieldName].filter((_: any, i: number) => i !== index);
    handleChange(fieldName, newArray);
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">{field.label}</label>
          {field.type === "array" ? (
            <div className="space-y-4">
              {(content[field.name] || []).map((item: any, index: number) => (
                <div key={index} className="p-4 bg-white rounded-lg space-y-2">
                  {field.arrayFields?.map((arrayField) => (
                    <div key={arrayField.name}>
                      <label className="block text-sm font-medium text-gray-700">{arrayField.label}</label>
                      <input
                        type="text"
                        value={item[arrayField.name] || ""}
                        onChange={(e) => handleArrayChange(field.name, index, { [arrayField.name]: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => removeArrayItem(field.name, index)}
                    className="text-red-600 hover:text-red-700 text-sm flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Remove
                  </button>
                </div>
              ))}
              <button
                onClick={() => addArrayItem(field.name)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                <Plus className="w-4 h-4 mr-1" /> Add {field.label}
              </button>
            </div>
          ) : (
            <input
              type={field.type === "url" ? "url" : "text"}
              value={content[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          )}
        </div>
      ))}
    </div>
  );
};

const Editor = ({ 
  sections, 
  activeSection, 
  onSectionSelect, 
  onUpdateSection,
  onToggleSection 
}: EditorProps) => {
  const configSection = sections.find(s => s.type === 'theme');
  const contentSections = sections.filter(s => s.type !== 'theme');

  return (
    <div className="w-80 h-full border-r bg-gray-50/50 backdrop-blur-xl p-4 overflow-auto">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Site Configuration</h2>
        <Accordion type="single" collapsible className="w-full">
          {configSection && (
            <SortableItem
              key={configSection.id}
              section={configSection}
              isActive={activeSection?.id === configSection.id}
              onToggle={(color) => onUpdateSection(configSection.id, { ...configSection.content, themeColor: color })}
              onClick={(content) => onUpdateSection(configSection.id, { ...configSection.content, ...content })}
              isDraggable={false}
            />
          )}
        </Accordion>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Sections</h2>
        <SortableContext items={contentSections} strategy={verticalListSortingStrategy}>
          <Accordion type="single" collapsible className="w-full">
            {contentSections.map((section) => (
              <SortableItem
                key={section.id}
                section={section}
                isActive={activeSection?.id === section.id}
                onToggle={(enabled) => onToggleSection(section.id, enabled)}
                onClick={() => onSectionSelect(section.id)}
              />
            ))}
          </Accordion>
        </SortableContext>
      </div>
      
      {activeSection && activeSection.type !== 'theme' && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Edit {activeSection.name}</h3>
          <FormFields
            fields={sectionFields[activeSection.type]}
            content={activeSection.content}
            onChange={(content) => onUpdateSection(activeSection.id, content)}
          />
        </div>
      )}
    </div>
  );
};

export default Editor;
