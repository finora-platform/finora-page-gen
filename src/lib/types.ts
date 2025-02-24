
export interface Section {
  id: string;
  name: string;
  type: string;
  enabled?: boolean;
  content: {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    image?: string;
    logo?: string;
    themeColor?: string;
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
    links?: Array<{
      title: string;
      url: string;
    }>;
  };
}

export type FormField = {
  label: string;
  name: string;
  type: "text" | "textarea" | "url" | "array" | "email" | "number" | "color" | "file";
  arrayFields?: FormField[];
};
