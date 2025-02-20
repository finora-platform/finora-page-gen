
import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Editor from "@/components/editor/Editor";
import Preview from "@/components/preview/Preview";
import { sections } from "@/lib/constants";
import { Section } from "@/lib/types";

const Index = () => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [sectionList, setSectionList] = useState<Section[]>(sections);

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

  const handleUpdateSection = (id: string, content: any) => {
    setSectionList((sections) =>
      sections.map((section) =>
        section.id === id ? { ...section, content } : section
      )
    );
  };

  return (
    <div className="flex w-full h-screen bg-gray-50">
      <DndContext onDragEnd={handleDragEnd}>
        <Editor
          sections={sectionList}
          activeSection={sectionList.find((s) => s.id === activeSectionId)}
          onSectionSelect={setActiveSectionId}
          onUpdateSection={handleUpdateSection}
        />
        <Preview sections={sectionList} />
      </DndContext>
    </div>
  );
};

export default Index;
