import { ReactNode } from "react";

export interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TestimonialProps {
  name: string;
  role?: string;
  content: string;
  image?: string;
  stars: number;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}
