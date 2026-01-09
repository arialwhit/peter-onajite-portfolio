
import { Project, Skill, Testimonial, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'wallet-drainer',
    title: 'Wallet Drainer',
    description: 'A sophisticated security analysis tool for blockchain wallets, ensuring robustness against unauthorized withdrawals.',
    vimeoId: '1152824290',
    tags: ['Web3', 'Blockchain', 'Security'],
  },
  {
    id: 'investment-platform',
    title: 'Investment Platform',
    description: 'High-performance fintech application featuring real-time market data and secure portfolio management.',
    vimeoId: '1152824114',
    tags: ['Fintech', 'React', 'Node.js'],
  },
  {
    id: 'auto-elite',
    title: 'Auto Elite Marketplace',
    description: 'Premium automotive marketplace with advanced filtering, booking systems, and seamless user experience.',
    vimeoId: '1152824397',
    tags: ['E-commerce', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 'levelup-ai',
    title: 'LevelUp AI',
    description: 'Enterprise AI solution leveraging LLMs to automate business workflows and enhance productivity.',
    vimeoId: '1152825246',
    tags: ['AI', 'Python', 'Machine Learning'],
  },
  {
    id: 'golden-gates',
    title: 'Golden Gates Housing',
    description: 'Modern real estate platform with virtual tours and integrated lead management.',
    vimeoId: '1152825130',
    tags: ['Real Estate', 'UI/UX', 'Cloud'],
  },
  {
    id: 'housing-platform',
    title: 'Housing Platform',
    description: 'Scalable housing management system for property owners and tenants.',
    vimeoId: '1152825078',
    tags: ['SaaS', 'Full-Stack', 'Management'],
  },
  {
    id: 'nail-salon',
    title: 'Nail Salon Booking',
    description: 'Intuitive booking engine for lifestyle businesses with automated reminders and payments.',
    vimeoId: '1152825201',
    tags: ['Shopify', 'Booking', 'Automation'],
  },
  {
    id: 'banking-platform',
    title: 'Banking Platform',
    description: 'Secure, scalable digital banking solution with multi-currency support.',
    vimeoId: '1152826354',
    tags: ['Fintech', 'Security', 'Laravel'],
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description: 'Comprehensive analytics and control panel for multi-tenant applications.',
    vimeoId: '1152826417',
    tags: ['Admin', 'Dashboard', 'Data Viz'],
  },
];

export const SKILLS: Skill[] = [
  { name: 'HTML/CSS', level: 98, icon: 'Layout', category: 'frontend' },
  { name: 'JavaScript', level: 95, icon: 'Code', category: 'frontend' },
  { name: 'React', level: 92, icon: 'Layers', category: 'frontend' },
  { name: 'Tailwind CSS', level: 96, icon: 'Zap', category: 'frontend' },
  { name: 'PHP/Laravel', level: 94, icon: 'Server', category: 'backend' },
  { name: 'SQL/MySQL', level: 90, icon: 'Database', category: 'backend' },
  { name: 'Flutter', level: 88, icon: 'Smartphone', category: 'mobile' },
  { name: 'Firebase', level: 85, icon: 'Flame', category: 'mobile' },
  { name: 'Shopify', level: 97, icon: 'ShoppingBag', category: 'ecommerce' },
  { name: 'AI Integration', level: 89, icon: 'Cpu', category: 'other' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Peter is a phenomenal developer. He transformed our complex fintech vision into a seamless, high-performance reality.",
    author: "James Wilson",
    role: "CEO, FinStream",
    avatar: "https://picsum.photos/seed/james/100/100",
  },
  {
    quote: "The Shopify store Peter built for us exceeded all expectations. Our conversion rate increased by 40% within the first month.",
    author: "Sarah Chen",
    role: "Founder, GlowStyle",
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    quote: "Professional, efficient, and highly skilled. Peter knows exactly how to build for scale.",
    author: "Marcus Thorne",
    role: "CTO, TechPulse",
    avatar: "https://picsum.photos/seed/marcus/100/100",
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end development of secure, scalable, and high-performance web applications using modern stacks.',
    iconName: 'Globe',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile solutions using Flutter for seamless iOS and Android user experiences.',
    iconName: 'Smartphone',
  },
  {
    title: 'Shopify Design & Dev',
    description: 'Custom Shopify stores optimized for conversion, high speed, and premium aesthetics.',
    iconName: 'ShoppingBag',
  },
  {
    title: 'Fintech & SaaS Solutions',
    description: 'Specialized building of investment platforms, banking systems, and complex SaaS architectures.',
    iconName: 'CreditCard',
  },
  {
    title: 'AI Product Building',
    description: 'Integrating advanced AI capabilities into your products to automate tasks and drive intelligence.',
    iconName: 'Cpu',
  },
  {
    title: 'E-commerce Strategy',
    description: 'Strategic planning and technical implementation to scale your digital sales to the next level.',
    iconName: 'TrendingUp',
  },
];
