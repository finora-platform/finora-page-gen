
import { Section } from "@/lib/types";

interface PreviewProps {
  sections: Section[];
}

const Preview = ({ sections }: PreviewProps) => {
  return (
    <div className="flex-1 p-8">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50">
            Preview
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg shadow-sm hover:bg-black/90">
            Publish
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm h-[calc(100vh-8rem)] overflow-auto">
        {sections.map((section) => (
          <div key={section.id} className="p-8 border-b last:border-b-0">
            <h3 className="text-lg font-medium mb-2">{section.name}</h3>
            <p className="text-gray-500">Content for {section.name.toLowerCase()} section</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
