
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Section } from "@/lib/types";
import { GripVertical, Settings } from "lucide-react";

interface EditorProps {
  sections: Section[];
  activeSection: Section | undefined;
  onSectionSelect: (id: string) => void;
}

const SortableItem = ({ section, isActive, onClick }: { 
  section: Section; 
  isActive: boolean;
  onClick: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all ${
        isActive ? "bg-white shadow-lg" : "hover:bg-white/50"
      }`}
      onClick={onClick}
    >
      <div {...attributes} {...listeners} className="mr-2 text-gray-400 hover:text-gray-600">
        <GripVertical className="w-5 h-5" />
      </div>
      <span className="flex-1 text-sm font-medium">{section.name}</span>
      <Settings className="w-4 h-4 text-gray-400" />
    </div>
  );
};

const Editor = ({ sections, activeSection, onSectionSelect }: EditorProps) => {
  return (
    <div className="w-80 h-full border-r bg-gray-50/50 backdrop-blur-xl p-4">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Sections</h2>
        <SortableContext items={sections} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {sections.map((section) => (
              <SortableItem
                key={section.id}
                section={section}
                isActive={activeSection?.id === section.id}
                onClick={() => onSectionSelect(section.id)}
              />
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};

export default Editor;
