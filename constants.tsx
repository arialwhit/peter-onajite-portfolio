
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
  // Frontend
  { name: 'React', level: 96, icon: 'Layers', category: 'frontend' },
  { name: 'Next.js', level: 94, icon: 'Zap', category: 'frontend' },
  { name: 'JavaScript', level: 98, icon: 'Code', category: 'frontend' },
  { name: 'TypeScript', level: 95, icon: 'Code', category: 'frontend' },
  { name: 'HTML5', level: 97, icon: 'Layout', category: 'frontend' },
  { name: 'CSS3', level: 93, icon: 'Palette', category: 'frontend' },
  { name: 'Tailwind CSS', level: 96, icon: 'Zap', category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 94, icon: 'Server', category: 'backend' },
  { name: 'Express.js', level: 91, icon: 'Cpu', category: 'backend' },
  { name: 'Java', level: 89, icon: 'Coffee', category: 'backend' },
  { name: 'REST API Development', level: 93, icon: 'Globe', category: 'backend' },

  // Database
  { name: 'MongoDB', level: 90, icon: 'Database', category: 'database' },
  { name: 'SQL / MySQL', level: 92, icon: 'Database', category: 'database' },

  // Authentication & Security
  { name: 'JWT', level: 92, icon: 'Key', category: 'auth' },
  { name: 'OAuth', level: 91, icon: 'Key', category: 'auth' },
  { name: 'Role-Based Access Control', level: 93, icon: 'Shield', category: 'auth' },

  // AI / Advanced Integrations
  { name: 'OpenAI API', level: 94, icon: 'Sparkles', category: 'ai' },
  { name: 'AI System Integration', level: 92, icon: 'Cpu', category: 'ai' },
  { name: 'Prompt Engineering', level: 95, icon: 'Terminal', category: 'ai' },
  { name: 'Trading AI Systems', level: 88, icon: 'TrendingUp', category: 'ai' },

  // Real-Time / Financial
  { name: 'WebSocket', level: 91, icon: 'Activity', category: 'realtime' },
  { name: 'TradingView Integration', level: 90, icon: 'AreaChart', category: 'realtime' },
  { name: 'Market Data API Integration', level: 89, icon: 'Coins', category: 'realtime' },
  { name: 'Chart Systems', level: 91, icon: 'LineChart', category: 'realtime' },

  // Payments / SaaS
  { name: 'Stripe', level: 95, icon: 'CreditCard', category: 'payments' },
  { name: 'Subscription Systems', level: 92, icon: 'Repeat', category: 'payments' },

  // E-commerce / CMS
  { name: 'Shopify Development', level: 97, icon: 'ShoppingBag', category: 'ecommerce' },
  { name: 'Payment Integration', level: 94, icon: 'CreditCard', category: 'ecommerce' },
  { name: 'Product Systems', level: 93, icon: 'Package', category: 'ecommerce' }
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
