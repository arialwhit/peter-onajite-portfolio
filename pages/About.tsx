
import React from 'react';
import { Award, Target, Rocket, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] relative">
              <img
                src="https://picsum.photos/seed/peter/800/1000"
                alt="Coach Peter Onajite"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 rounded-2xl border-white/20">
                   <p className="text-sm italic text-slate-200">"Solving complex problems with elegant code is my passion. Building for profitability is my expertise."</p>
                </div>
              </div>
            </div>
            {/* Visual elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-teal-500 rounded-tl-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-blue-500 rounded-br-3xl"></div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">About the Architect</h2>
              <h1 className="text-5xl font-bold mb-6">Elevating Digital <span className="gradient-text">Experiences</span></h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                I am Coach Peter Onajite, a dedicated Full-Stack Web and Mobile Developer with a specialized focus on Fintech, Shopify, and AI-driven solutions. My mission is to build digital products that aren't just functional, but powerful and profitable.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="font-bold">Experience</h4>
                </div>
                <p className="text-slate-400 text-sm">Over 8 years of building high-stakes applications for international clients and startups.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Target size={20} />
                  </div>
                  <h4 className="font-bold">Approach</h4>
                </div>
                <p className="text-slate-400 text-sm">Security-first mindset combined with clean, maintainable architecture and rapid scalability.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <Rocket size={20} />
                  </div>
                  <h4 className="font-bold">Vision</h4>
                </div>
                <p className="text-slate-400 text-sm">Bridging the gap between cutting-edge AI technology and real-world business growth.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                    <Award size={20} />
                  </div>
                  <h4 className="font-bold">Results</h4>
                </div>
                <p className="text-slate-400 text-sm">Consistently delivering products that increase conversion and user engagement.</p>
              </div>
            </div>

            <div className="pt-6">
               <a
                  href="#/contact"
                  className="inline-flex items-center px-8 py-4 bg-teal-500 text-white font-bold rounded-2xl hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/20"
                >
                  Let's Work Together
                </a>
            </div>
          </div>
        </div>

        {/* Timeline placeholder */}
        <div className="mt-32">
          <h3 className="text-3xl font-bold mb-12 text-center">My Professional Journey</h3>
          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-1/2 before:w-0.5 before:bg-slate-800 before:-translate-x-1/2 hidden md:block">
            {[
              { year: '2023 - Present', title: 'Senior Product Builder', desc: 'Leading the development of complex AI and Fintech platforms for global SaaS founders.' },
              { year: '2021 - 2023', title: 'Shopify Expert & Consultant', desc: 'Specialized in high-converting e-commerce strategy and custom liquid development.' },
              { year: '2019 - 2021', title: 'Full-Stack Developer', desc: 'Built and scaled diverse web products using Laravel, React, and Node.js.' },
              { year: '2017 - 2019', title: 'Mobile Solutions Architect', desc: 'Focused on cross-platform mobile app development using Flutter and Firebase.' },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center justify-between gap-12 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h4 className="text-teal-400 font-bold mb-1">{item.year}</h4>
                  <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                  <p className="text-slate-400 text-sm max-w-md ml-auto mr-0">{item.desc}</p>
                </div>
                <div className="relative z-10 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-950 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
          {/* Mobile timeline */}
          <div className="md:hidden space-y-8">
             {[
              { year: '2023 - Present', title: 'Senior Product Builder', desc: 'Leading the development of complex AI and Fintech platforms for global SaaS founders.' },
              { year: '2021 - 2023', title: 'Shopify Expert & Consultant', desc: 'Specialized in high-converting e-commerce strategy and custom liquid development.' },
              { year: '2019 - 2021', title: 'Full-Stack Developer', desc: 'Built and scaled diverse web products using Laravel, React, and Node.js.' },
              { year: '2017 - 2019', title: 'Mobile Solutions Architect', desc: 'Focused on cross-platform mobile app development using Flutter and Firebase.' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border-white/10">
                <span className="text-teal-400 font-bold text-xs uppercase tracking-widest">{item.year}</span>
                <h5 className="text-xl font-bold mt-1 mb-2">{item.title}</h5>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
