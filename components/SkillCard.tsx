
import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SKILL_DETAILS: Record<string, { description: string; examples: string[] }> = {
  'React': {
    description: 'Core framework for building highly interactive, responsive SaaS applications, financial dashboards, and Shopify custom interfaces with perfect state sync.',
    examples: ['Dynamic Fintech Admin Dashboards', 'Headless E-commerce Frontends', 'Real-time WebSocket Chat Widgets']
  },
  'Next.js': {
    description: 'Leveraged for server-side rendered (SSR) applications to guarantee maximum optimization of Core Web Vitals, custom route performance, and advanced SEO rankings.',
    examples: ['Auto Elite Marketplace App', 'SaaS Product Pitch Deck Landings', 'Blogs with custom Headless CMS configurations']
  },
  'JavaScript': {
    description: 'The foundation of interactive client-side logic. Developed bespoke canvas libraries, calculations pipelines, and fluid UI micro-interactions.',
    examples: ['Interactive Carousel Draw Controllers', 'Event Broadcast Dispatchers', 'Shopify Liquid Custom JS Modules']
  },
  'TypeScript': {
    description: 'Enforced strictly across the full-stack architecture to achieve compile-time type safety, minimizing deployment bugs and simplifying code scaling.',
    examples: ['SaaS App Typed Schema Pipelines', 'Advanced Trading API Wrapper Libraries', 'Wallet Drainer Core Security Scanners']
  },
  'HTML5': {
    description: 'Utilized to construct semantic, accessible, and structured webpage documents that observe the latest standard SEO schemas and WCAG guidelines.',
    examples: ['Semantic Dashboard Layout Frameworks', 'SEO-friendly Product Templates', 'Custom Layout Canvas Elements']
  },
  'CSS3': {
    description: 'Engineered custom hardware-accelerated translations, complex keyframe timelines, fluid transitions, and responsive fluid layout structures.',
    examples: ['Frictionless Modal Entrance Transitions', 'Dynamic Theme Token Variables', 'Bespoke Scrollbar Styling Overrides']
  },
  'Tailwind CSS': {
    description: 'Our primary styling utility framework. Allows extremely fast utility composition, completely custom design system tokens, and rapid UI iterations.',
    examples: ['High-contrast Glassmorphic UI Libraries', 'Responsive Mobile Nav Drawers', 'Fluid Bento Grid Layout Structures']
  },
  'Node.js': {
    description: 'Constructed light, high-concurrency event-driven backends, microservices, secure file-handlers, and intermediate API gateways.',
    examples: ['Secure Subscription Payment Webhooks', 'RESTful API Services', 'Continuous Algorithmic Feed Controllers']
  },
  'Express.js': {
    description: 'Extracted simple routing, request payload parsing, middleware filters, security check-gates, and error interceptors for all APIs.',
    examples: ['Proxy Service for Portfolio Routes', 'User JWT Authentication Controllers', 'E-commerce Checkout Handler APIs']
  },
  'Java': {
    description: 'Engineered enterprise platform services using robust OOP design, type safety, multi-threading control, and scalable computing.',
    examples: ['Fintech Core Transaction Ledger Pipelines', 'Background Clean Data Schedulers', 'Multi-tenant Enterprise REST microservices']
  },
  'REST API Development': {
    description: 'Detailed schema specification, JWT permission audits, payload validations, structure guidelines, and optimized JSON transmission structures.',
    examples: ['Unified Product Variant Access Gateways', 'Secure Multi-role Account REST Endpoints', 'Shopify Custom Order Dispatch Systems']
  },
  'MongoDB': {
    description: 'Flexible JSON documents persistent storage. Managed database connection pools, performance indexing, and atomic aggregate pipelines.',
    examples: ['Unstructured Account Preference Logs', 'User Profiles Databases', 'Dynamic SaaS Configuration Storage']
  },
  'SQL / MySQL': {
    description: 'Designed robust transactional schemas, optimized compound indexing, foreign keys tables, and continuous data consistency check routines.',
    examples: ['Marketplace Automotive Inventories Database', 'Fintech Payment History Ledgers', 'User Access Permissions Control Matrices']
  },
  'JWT': {
    description: 'Established secure, stateless session token validation, ensuring tamper-proof communication between web layers and database layers.',
    examples: ['User Authorization Flow Token Guards', 'Admin Multi-role Claim Security headers', 'Secure Cross-route API Tokens']
  },
  'OAuth': {
    description: 'Deployed industry standard secure authorization frameworks to support safe, streamlined third-party identity connections.',
    examples: ['Google Single Sign-On Account Logins', 'GitHub Developer Tool Authorization Bridges', 'Secure Third-Party API OAuth integrations']
  },
  'Role-Based Access Control': {
    description: 'Designed secure permission tier maps, blocking or showing layouts, buttons, routes, and DB modifications dynamically styled by permissions.',
    examples: ['Multi-tenant Workspace Dashboard Guards', 'E-commerce Admin Content Managers', 'Fintech Secure Permission Auditing']
  },
  'OpenAI API': {
    description: 'Connected advanced LLM model endpoints, implemented smart prompt layouts, system instructions, temperature tunings, and output parsers.',
    examples: ['LevelUp AI Automated Intelligent Copilots', 'Intelligent Meeting Notes Auto-Categorizers', 'Smart Product Match Generators']
  },
  'AI System Integration': {
    description: 'Architecting end-to-end data ingestion paths, matching user contexts with vector caches, and triggering automated steps based on AI inferences.',
    examples: ['Automated Support Ticket Analyzers', 'Custom RAG System Frameworks', 'Intelligent Workflow Orchestration Engines']
  },
  'Prompt Engineering': {
    description: 'Optimized system commands, few-shot prompt libraries, and validation parameters to secure highly predictable, clean structures from AI models.',
    examples: ['Deterministic HTML / JSON Return Prompts', 'Automotive Filtering AI Instructions', 'Secure Assistant Safety Filters']
  },
  'Trading AI Systems': {
    description: 'Integrated neural inferences with live prices feeds, calculating portfolio weight allocations and generating precise buy/sell risk triggers.',
    examples: ['Real-time Signal Forwarders', 'Technical Indicator Predictors', 'Automated Mock Risk Control Monitors']
  },
  'WebSocket': {
    description: 'Maintained absolute minimum overhead duplex tunnels to ensure zero lag updates of client screens from active server notifications.',
    examples: ['Vibrant Global Chat Rooms', 'Live Stocks & Crypto Ticker Buffers', 'Instant Dashboard Activity Feeds']
  },
  'TradingView Integration': {
    description: 'Implemented high-performance charting libraries with responsive indicators, real-time candles updates, and customized technical indicators.',
    examples: ['Advanced Asset Technical Price Charts', 'Historic Trend Overlays Charts', 'Indicators Drawing Panels UI']
  },
  'Market Data API Integration': {
    description: 'Created quick, low-latency, and fail-safe ingestion logic to fetch market updates from mainstream global broker networks.',
    examples: ['Binance & Coinbase Price Ingestion Streams', 'Forex Pair Spreads Trackers', 'Asset Historical High-Low Record Builders']
  },
  'Chart Systems': {
    description: 'Developed gorgeous, performant interactive data lines, bar, and area charts styled to represent financial, e-commerce, and SaaS logs.',
    examples: ['Interactive Stock Performance Graphs', 'Total SaaS Revenue Growth Curves', 'Daily Booking Peak Indicator Panels']
  },
  'Stripe': {
    description: 'The preferred integration library for payment intents, customer records curation, payment card elements, and resilient webhook security checks.',
    examples: ['PCI-compliant Custom SaaS Checkout Views', 'Instant E-commerce Payment Processors', 'Secure Payment Tokenization Gateways']
  },
  'Subscription Systems': {
    description: 'Created subscription state models allowing seamless upgrading, active downgrading, plan trials tracking, and payment failure auto-retry filters.',
    examples: ['Multi-tier Service Subscription Dashboards', 'Recurring Billing Webhook Sync Managers', 'Enterprise License Allocation Hubs']
  },
  'Shopify Development': {
    description: 'Formed bespoke online storefronts with unique custom variants logic, API extensions, hyper-optimized Core Web Vitals, and premium themes.',
    examples: ['Nail Salon Booking Integration Theme', 'Premium Automotive Marketplace Shopify Backend', 'High-Converting Variant Selectors']
  },
  'Payment Integration': {
    description: 'Curated unified multi-gateway options allowing rapid checkouts via local cards and major digital wallets under double-spend safety checks.',
    examples: ['Automobile Booking Deposit Gates', 'Global Multi-currency Checkout Checkpoints', 'Secure Customer Subscriptions Payments']
  },
  'Product Systems': {
    description: 'Engineered smart SKU databases, live multi-variant stock checks, automatic low-stock triggers, and modern digital asset shipping services.',
    examples: ['Real-time Shopify Inventory Variant Trackers', 'Catalog Content Distribution Servers', 'Digital Product Delivery Automations']
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
  const details = SKILL_DETAILS[skill.name] || {
    description: `Expert level development specializing in ${skill.name} to engineer high-performance, secure, and production-ready code.`,
    examples: [`Custom ${skill.name} Web Applications`, `Optimized ${skill.name} Integration Architectures`]
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="glass-card p-6 rounded-2xl hover:border-teal-500/30 transition-all duration-300 group cursor-pointer hover:scale-[1.02] transform transition-transform"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
            <IconComponent size={24} />
          </div>
          <span className="text-2xl font-bold text-slate-700 group-hover:text-teal-500/20 transition-colors">
            {skill.level}%
          </span>
        </div>
        <h4 className="text-lg font-bold mb-3 flex items-center justify-between">
          <span>{skill.name}</span>
          <Icons.Info size={16} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
        </h4>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="glass-card w-full max-w-lg rounded-3xl p-8 relative overflow-hidden border border-white/10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Abs glowing decoration decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl -z-10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl -z-10 rounded-full"></div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl border border-white/5 transition-colors"
                aria-label="Close modal"
              >
                <Icons.X size={18} />
              </button>

              {/* Modal Head Header */}
              <div className="flex items-center space-x-4 mb-6 pt-2">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                  <IconComponent size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                    {skill.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
                      Expertise level:
                    </span>
                    <span className="text-xs bg-teal-500/20 text-teal-200 px-2 py-0.5 rounded font-mono">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Application Desc */}
              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                    Commercial Application
                  </h5>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {details.description}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3 text-left">
                    Proven Implementations
                  </h5>
                  <ul className="space-y-2.5">
                    {details.examples.map((example, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-300">
                        <span className="w-4 h-4 bg-teal-500/10 text-teal-400 rounded-md flex items-center justify-center mr-3 mt-0.5 font-bold shrink-0">
                          ✓
                        </span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal footer */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm rounded-xl transition-colors border border-white/5"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SkillCard;
