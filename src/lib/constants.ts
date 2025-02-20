
import { Section, FormField } from "./types";

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
  { 
    id: "benefits", 
    name: "Benefits", 
    type: "benefits",
    content: {
      title: "Why Choose Us",
      subtitle: "Benefits that set us apart",
      items: [
        {
          title: "Benefit 1",
          description: "Description of benefit 1"
        },
        {
          title: "Benefit 2",
          description: "Description of benefit 2"
        }
      ]
    }
  },
  { 
    id: "pricing", 
    name: "Pricing", 
    type: "pricing",
    content: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that works best for you",
      pricing: [
        {
          plan: "Basic",
          price: "$9/mo",
          features: ["Feature 1", "Feature 2", "Feature 3"]
        },
        {
          plan: "Pro",
          price: "$29/mo",
          features: ["All Basic features", "Feature 4", "Feature 5"]
        },
        {
          plan: "Enterprise",
          price: "$99/mo",
          features: ["All Pro features", "Feature 6", "Feature 7"]
        }
      ]
    }
  },
  { 
    id: "testimonials", 
    name: "Testimonials", 
    type: "testimonials",
    content: {
      title: "What Our Customers Say",
      subtitle: "Trusted by thousands of users",
      testimonials: [
        {
          quote: "Amazing product!",
          author: "John Doe",
          role: "CEO, Company Inc"
        }
      ]
    }
  },
  { 
    id: "faq", 
    name: "FAQ", 
    type: "faq",
    content: {
      title: "Frequently Asked Questions",
      subtitle: "Got questions? We've got answers",
      faqs: [
        {
          question: "What is your product?",
          answer: "Our product is a comprehensive solution..."
        }
      ]
    }
  },
  { 
    id: "contact", 
    name: "Contact", 
    type: "contact",
    content: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you",
      buttonText: "Send Message"
    }
  },
  { 
    id: "footer", 
    name: "Footer", 
    type: "footer",
    content: {
      title: "Company Name",
      subtitle: "© 2024 All rights reserved",
      links: [
        { title: "About", url: "#" },
        { title: "Terms", url: "#" },
        { title: "Privacy", url: "#" }
      ]
    }
  }
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
