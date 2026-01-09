
export interface Project {
  id: string;
  title: string;
  description: string;
  vimeoId: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'ecommerce' | 'other';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}
