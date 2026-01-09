
import React from 'react';
import { Award, Target, Rocket, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] relative group">
              {/* Premium Workspace Image representing a high-end product builder environment */}
              <img
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Elite Developer Workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 rounded-2xl border-white/20 shadow-2xl backdrop-blur-xl">
                   <p className="text-lg font-semibold leading-tight text-white mb-2">
                     If you want a website, bring your vision and let's change your dreams into a reality.
                   </p>
                   <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
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
                I am Peter Onajite, a dedicated Full-Stack Web and Mobile Developer with a specialized focus on Fintech, Shopify, and AI-driven solutions. My mission is to build digital products that aren't just functional, but powerful and profitable.
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

        {/* Tree-style Timeline */}
        <div className="mt-32">
          <h3 className="text-3xl font-bold mb-16 text-center">My Professional Growth Tree</h3>
          <div className="relative py-12">
            {/* The Trunk */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500/0 via-teal-500 to-teal-500/0 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-24 relative">
              {[
                { year: '2023 - Present', title: 'Senior Product Builder', desc: 'Leading the development of complex AI and Fintech platforms for global SaaS founders.' },
                { year: '2021 - 2023', title: 'Shopify Expert & Consultant', desc: 'Specialized in high-converting e-commerce strategy and custom liquid development.' },
                { year: '2019 - 2021', title: 'Full-Stack Developer', desc: 'Built and scaled diverse web products using Laravel, React, and Node.js.' },
                { year: '2017 - 2019', title: 'Mobile Solutions Architect', desc: 'Focused on cross-platform mobile app development using Flutter and Firebase.' },
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Panel */}
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card p-6 md:p-8 rounded-[2rem] border-white/10 hover:border-teal-500/30 transition-all group">
                      <span className="text-teal-400 font-bold text-sm tracking-widest uppercase mb-2 block">{item.year}</span>
                      <h4 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Node (The Branch Connection) */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-teal-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(45,212,191,0.8)] z-10"></div>
                    {/* Branch line for desktop */}
                    <div className={`absolute h-0.5 bg-teal-500/30 hidden md:block ${idx % 2 === 0 ? 'right-full w-12' : 'left-full w-12'}`}></div>
                  </div>

                  {/* Empty space for balance on desktop */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
