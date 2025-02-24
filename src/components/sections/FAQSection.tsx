
import { Section } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = ({ content }: { content: Section["content"] }) => (
  <div className="py-20 px-4">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
      <p className="text-xl text-gray-600">{content.subtitle}</p>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {content.faqs?.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-4 rounded-lg border p-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="text-lg font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="bg-[#6B46C1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5B3AA6] transition">
          Get in touch
        </button>
      </div>
    </div>
  </div>
);
