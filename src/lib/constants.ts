import { Section } from "./types";

export const sections: Section[] = [
  { 
    id: "hero", 
    name: "Hero", 
    type: "hero",
    content: {
      title: "Welcome to Our Platform",
      subtitle: "The best solution for your needs",
      buttonText: "Get Started",
      buttonUrl: "#",
      image: "/placeholder.svg"
    }
  },
  { 
    id: "features", 
    name: "Features", 
    type: "features",
    content: {
      title: "Our Features",
      subtitle: "What makes us different",
      items: [
        {
          title: "Feature 1",
          description: "Description of feature 1"
        },
        {
          title: "Feature 2",
          description: "Description of feature 2"
        }
      ]
    }
  },
  { id: "benefits", name: "Benefits", type: "benefits" },
  { id: "pricing", name: "Pricing", type: "pricing" },
  { id: "testimonials", name: "Testimonials", type: "testimonials" },
  { id: "faq", name: "FAQ", type: "faq" },
  { id: "contact", name: "Contact", type: "contact" },
  { id: "footer", name: "Footer", type: "footer" },
];

export const sectionFields: Record<string, FormField[]> = {
  hero: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    { label: "Button Text", name: "buttonText", type: "text" },
    { label: "Button URL", name: "buttonUrl", type: "url" },
    { label: "Image URL", name: "image", type: "url" }
  ],
  features: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    {
      label: "Features",
      name: "items",
      type: "array",
      arrayFields: [
        { label: "Title", name: "title", type: "text" },
        { label: "Description", name: "description", type: "textarea" }
      ]
    }
  ],
  benefits: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    { label: "Description", name: "description", type: "textarea" }
  ],
  pricing: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    { label: "Price", name: "price", type: "number" }
  ],
  testimonials: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    { label: "Testimonial", name: "testimonial", type: "textarea" }
  ],
  faq: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    { label: "Question", name: "question", type: "textarea" },
    { label: "Answer", name: "answer", type: "textarea" }
  ],
  contact: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    { label: "Address", name: "address", type: "textarea" },
    { label: "Phone", name: "phone", type: "text" },
    { label: "Email", name: "email", type: "email" }
  ],
  footer: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    { label: "Links", name: "links", type: "array", arrayFields: [{ label: "Link", name: "link", type: "url" }] }
  ]
};
