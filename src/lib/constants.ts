import { Section, FormField } from "./types";

export const sections: Section[] = [
  { 
    id: "site-config", 
    name: "Site Configuration", 
    type: "theme",
    content: {
      themeColor: "purple",
      logo: "",
    }
  },
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
    id: "highlights",
    name: "Highlights",
    type: "highlights",
    content: {
      items: [
        { title: "400+", description: "Clients" },
        { title: "₹11.20 Cr", description: "Asset under Advisory" },
        { title: "7", description: "Year of Experience" },
        { title: "200+", description: "5 star reviews" },
      ],
    },
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
        },
        
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
          features: [
            "Up to 10 users",
            "Basic analytics",
            "24/7 email support",
            "2 team projects",
            "5GB storage",
            "API access",
            "Basic integrations",
            "Community support"
          ]
        },
        {
          plan: "Pro",
          price: "$29/mo",
          features: [
            "Up to 50 users",
            "Advanced analytics",
            "24/7 priority support",
            "Unlimited projects",
            "50GB storage",
            "Advanced API access",
            "Premium integrations",
            "Dedicated account manager"
          ]
        },
        {
          plan: "Enterprise",
          price: "$99/mo",
          features: [
            "Unlimited users",
            "Custom analytics",
            "24/7 VIP support",
            "Unlimited everything",
            "Unlimited storage",
            "Custom API solutions",
            "Custom integrations",
            "Strategic consulting"
          ]
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
  theme: [
    { label: "Theme Color", name: "themeColor", type: "color" },
    { label: "Logo URL", name: "logo", type: "url" }
  ],
  hero: [
    { label: "Title", name: "title", type: "text" },
    { label: "Subtitle", name: "subtitle", type: "textarea" },
    { label: "Button Text", name: "buttonText", type: "text" },
    { label: "Button URL", name: "buttonUrl", type: "url" },
    { label: "Image URL", name: "image", type: "url" }
  ],
  highlights: [
    { label: "Highlights",
      name: "items",
      type: "array",
      arrayFields: [
        { label: "Title", name: "title", type: "text" },
        { label: "Description", name: "description", type: "textarea" }
      ] 
    },
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
