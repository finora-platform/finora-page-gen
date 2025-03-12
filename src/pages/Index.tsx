
import { useState, useEffect } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Editor from "@/components/editor/Editor";
import Preview from "@/components/preview/Preview";
import { sections as defaultSections } from "@/lib/constants";
import { Section } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "lovable_sections";

const Index = () => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sectionList, setSectionList] = useState<Section[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultSections;
  });
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sectionList));
  }, [sectionList]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setSectionList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const validateContent = (content: any) => {
    const errors: string[] = [];
    
    if (!content.title?.trim()) {
      errors.push("Title is required");
    }
    if (!content.subtitle?.trim()) {
      errors.push("Subtitle is required");
    }
    
    if (content.items && content.items.length > 0) {
      content.items.forEach((item: any, index: number) => {
        if (!item.title?.trim()) {
          errors.push(`Item ${index + 1} title is required`);
        }
        if (!item.description?.trim()) {
          errors.push(`Item ${index + 1} description is required`);
        }
      });
    }

    return errors;
  };

  const handleUpdateSection = (id: string, content: any) => {
    const errors = validateContent(content);
    
    if (errors.length > 0) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: (
          <ul className="mt-2 list-disc list-inside">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        ),
      });
      return;
    }

    setSectionList((sections) =>
      sections.map((section) =>
        section.id === id ? { ...section, content } : section
      )
    );

    toast({
      title: "Success",
      description: "Section updated successfully",
    });
  };

  const handleToggleSection = (id: string, enabled: boolean) => {
    setSectionList((sections) =>
      sections.map((section) =>
        section.id === id ? { ...section, enabled } : section
      )
    );

    toast({
      title: enabled ? "Section Enabled" : "Section Disabled",
      description: `${sectionList.find(s => s.id === id)?.name} has been ${enabled ? 'enabled' : 'disabled'}.`,
    });
  };

  return (
    <div className="flex w-full bg-gray-50">
      <DndContext onDragEnd={handleDragEnd}>
        {isSidebarOpen && (
          <Editor
            sections={sectionList}
            activeSection={sectionList.find((s) => s.id === activeSectionId)}
            onSectionSelect={setActiveSectionId}
            onUpdateSection={handleUpdateSection}
            onToggleSection={handleToggleSection}
          />
        )}
        <Preview 
          sections={sectionList} 
          activeSectionId={activeSectionId}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
      </DndContext>
    </div>
  );
};

export default Index;
