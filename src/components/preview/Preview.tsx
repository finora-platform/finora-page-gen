
import { Section } from "@/lib/types";

interface PreviewProps {
  sections: Section[];
}

const HeroSection = ({ content }: { content: Section["content"] }) => (
  <div className="text-center py-20 px-4">
    <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
    <p className="text-xl text-gray-600 mb-8">{content.subtitle}</p>
    <a
      href={content.buttonUrl}
      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
    >
      {content.buttonText}
    </a>
    {content.image && (
      <img src={content.image} alt="Hero" className="mt-12 mx-auto max-w-2xl rounded-lg shadow-lg" />
    )}
  </div>
);

const FeaturesSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
      <p className="text-xl text-gray-600">{content.subtitle}</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {content.items?.map((feature, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const SectionComponent = ({ section }: { section: Section }) => {
  switch (section.type) {
    case "hero":
      return <HeroSection content={section.content} />;
    case "features":
      return <FeaturesSection content={section.content} />;
    default:
      return (
        <div className="p-8 border-b last:border-b-0">
          <h3 className="text-lg font-medium mb-2">{section.name}</h3>
          <p className="text-gray-500">Content for {section.name.toLowerCase()} section</p>
        </div>
      );
  }
};

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
          <SectionComponent key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
