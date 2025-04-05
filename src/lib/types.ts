export interface SectionContent {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  image?: string;
  logo?: string;
  discount?: number;
  themeColor?: string;
  items?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  pricing?: {
    title: string;
    price: string;
    features: string[];
    cta: string;
  }[];
  testimonials?: {
    name: string;
    role: string;
    content: string;
    avatar?: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  links?: {
    text: string;
    url: string;
  }[];
}

export interface Section {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  content: SectionContent;
}
