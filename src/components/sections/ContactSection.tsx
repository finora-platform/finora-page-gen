
import { Section } from "@/lib/types";

export const ContactSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4">
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
        <p className="text-xl text-gray-600">{content.subtitle}</p>
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B46C1] focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B46C1] focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B46C1] focus:border-transparent"
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#6B46C1] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5B3AA6] transition"
        >
          {content.buttonText}
        </button>
      </form>
    </div>
  </div>
);
