import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Section } from "@/lib/types";
import { GripVertical } from "lucide-react";
import { sectionFields } from "@/lib/constants";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ThemeEditor } from "./ThemeEditor";
import { FormEditor } from "./FormEditor";

interface EditorProps {
  sections: Section[];
  activeSection: Section | undefined;
  onSectionSelect: (id: string) => void;
  onUpdateSection: (id: string, content: any) => void;
  onToggleSection: (id: string, enabled: boolean) => void;
}

interface SortableItemProps {
  section: Section;
  isActive: boolean;
  onToggle: (value: any) => void;
  onClick: () => void;
  isDraggable?: boolean;
  onUpdateSection: (id: string, content: any) => void; // Ensure this is included
}

const SortableItem = ({ 
  section, 
  isActive,
  onToggle,
  onClick,
  isDraggable = true,
  onUpdateSection // Ensure this is included
}: SortableItemProps) => {
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
              className="ml-auto scale-80" // Added scale-90 to make switch slightly smaller
            />
          )}
        </div>
        {section.type === 'theme' ? (
          <ThemeEditor section={section} onToggle={onToggle} />
        ) : (
          <AccordionContent>
            <div className="p-4">
              <FormEditor
                fields={sectionFields[section.type]}
                content={section.content}
                onChange={(content) => onUpdateSection(section.id, content)} // Updated to use onUpdateSection
              />
            </div>
          </AccordionContent>
        )}
      </AccordionItem>
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
    <div className="fixed w-80 h-full border-r bg-white backdrop-blur-xl p-4 overflow-auto">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Site Configuration</h2>
        <Accordion type="single" collapsible className="w-full">
          {configSection && (
            <SortableItem
              key={configSection.id}
              section={configSection}
              isActive={activeSection?.id === configSection.id}
              onToggle={(content) => onUpdateSection(configSection.id, { ...configSection.content, ...content })}
              onClick={() => onSectionSelect(configSection.id)}
              isDraggable={false}
              onUpdateSection={onUpdateSection} // Ensure this is passed
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
                onUpdateSection={onUpdateSection} // Ensure this is passed
              />
            ))}          
          </Accordion>
        </SortableContext>
      </div>
    </div>
  );
};

export default Editor;
