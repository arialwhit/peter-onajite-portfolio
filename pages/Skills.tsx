
import React from 'react';
import { SKILLS } from '../constants';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
  const categories = [
    { id: 'frontend', title: 'Frontend Architecture' },
    { id: 'backend', title: 'Backend & Infrastructure' },
    { id: 'mobile', title: 'Mobile & Cloud' },
    { id: 'ecommerce', title: 'E-commerce Mastery' },
    { id: 'other', title: 'Advanced Tech' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tech <span className="gradient-text">Stack</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I leverage a powerful array of modern technologies to build high-performance applications that scale effortlessly.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.id}>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-1 bg-teal-500 mr-4 rounded-full"></span>
                {cat.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILLS.filter(s => s.category === cat.id).map(skill => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-32 glass-card p-12 rounded-[3rem] text-center border-white/5">
          <h3 className="text-3xl font-bold mb-8">Other Tools & Workflows</h3>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400">
            {['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'Figma', 'Terminal', 'Redux', 'Prisma', 'Stripe', 'OpenAI API'].map(tool => (
              <span key={tool} className="px-5 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-teal-500/30 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
