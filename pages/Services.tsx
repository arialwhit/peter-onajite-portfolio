
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Expert <span className="gradient-text">Services</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Tailored digital solutions designed to solve your toughest business challenges and drive meaningful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = (Icons as any)[service.iconName] || Icons.Code;
            return (
              <div key={idx} className="group p-8 glass-card rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-teal-500/40">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <a href="#/contact" className="inline-flex items-center text-teal-400 font-semibold group/link">
                  Learn More <Icons.ArrowRight size={18} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">My Development Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business goals and user needs thoroughly.' },
              { step: '02', title: 'Design', desc: 'Crafting premium UI/UX that aligns with your brand identity.' },
              { step: '03', title: 'Development', desc: 'Writing clean, high-performance code with a security-first approach.' },
              { step: '04', title: 'Launch', desc: 'Rigorous testing and seamless deployment to the global market.' },
            ].map((item, idx) => (
              <div key={idx} className="relative p-6">
                <span className="text-6xl font-black text-slate-800/30 absolute -top-4 left-4 -z-10">{item.step}</span>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
