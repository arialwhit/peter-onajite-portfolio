
import React from 'react';
import * as Icons from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // Dynamic icon selection
  const IconComponent = (Icons as any)[skill.icon] || Icons.Code;

  return (
    <div className="glass-card p-6 rounded-2xl hover:border-teal-500/30 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
          <IconComponent size={24} />
        </div>
        <span className="text-2xl font-bold text-slate-700 group-hover:text-teal-500/20 transition-colors">
          {skill.level}%
        </span>
      </div>
      <h4 className="text-lg font-bold mb-3">{skill.name}</h4>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
