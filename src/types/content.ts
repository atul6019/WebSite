export type Product = {
  slug: string;
  name: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: string[];
  image: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  benefits: string[];
  image: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
};
