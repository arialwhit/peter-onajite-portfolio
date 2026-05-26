
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 110, 
      damping: 16 
    } 
  }
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web3', 'Fintech', 'E-commerce', 'AI', 'Shopify', 'SaaS'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter === tag));

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Product <span className="gradient-text">Showcase</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive collection of my engineering work, ranging from complex financial systems to high-conversion stores.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter ? 'bg-teal-500 text-white' : 'bg-slate-900 border border-white/10 text-slate-400 hover:border-teal-500/50'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid with entry animation */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
