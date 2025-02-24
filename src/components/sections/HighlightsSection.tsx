
import { Section } from "@/lib/types";

export const HighlightsSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-gray-900">400+</h3>
          <p className="text-gray-600">Clients</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-gray-900">₹11.20 Cr</h3>
          <p className="text-gray-600">Asset under Advisory</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-gray-900">7</h3>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-gray-900">200+</h3>
          <p className="text-gray-600">5-star reviews</p>
        </div>
      </div>
    </div>
  </div>
);
