
export interface Section {
  id: string;
  name: string;
  type: string;
  content: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonUrl?: string;
    image?: string;
    items?: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
    pricing?: Array<{
      plan: string;
      price: string;
      features: string[];
    }>;
    testimonials?: Array<{
      quote: string;
      author: string;
      role: string;
    }>;
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export type FormField = {
  label: string;
  name: string;
  type: "text" | "textarea" | "url" | "array";
  arrayFields?: FormField[];
};
