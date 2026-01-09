
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Star, Mail, MessageCircle, Github, Twitter, Linkedin } from 'lucide-react';
import { PROJECTS, SKILLS, TESTIMONIALS, SERVICES } from '../constants';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Available for new projects</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                  I'm <span className="gradient-text">Peter Onajite</span>
                  <br />
                  <span className="text-slate-100">Product Builder</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                  Building secure, scalable web and mobile products — from fintech and AI platforms to high-converting e-commerce stores.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-xl flex items-center group transition-all duration-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
                >
                  View Projects <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Contact Me
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4 text-slate-400">
                 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Github size={24} /></a>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Linkedin size={24} /></a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Twitter size={24} /></a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 p-8 glass-card rounded-3xl border-white/10">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 blur-2xl rounded-full"></div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                    <Star className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Senior Expert</h4>
                    <p className="text-xs text-slate-400 tracking-wider uppercase">8+ Years Experience</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-sm italic text-slate-300">"Peter consistently delivers top-tier code and design."</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-1 bg-teal-500 rounded-full"></div>
                    <div className="h-1 bg-teal-500 rounded-full"></div>
                    <div className="h-1 bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-500/10 to-transparent blur-[120px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">Core Competencies</h2>
              <h3 className="text-4xl font-bold">The Tech Stack That <span className="text-slate-500">Powers My Work</span></h3>
            </div>
            <Link to="/skills" className="text-teal-400 font-semibold flex items-center hover:underline group">
              View All Skills <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.slice(0, 4).map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">Portfolio Highlights</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Proven Digital <span className="text-slate-500">Solutions</span></h3>
            <p className="text-slate-400 max-w-2xl mx-auto">A glimpse into some of the high-impact projects I've engineered across fintech, AI, and e-commerce.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 glass-card rounded-2xl hover:bg-white/5 transition-all group font-bold"
            >
              See All Projects <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
            <h3 className="text-4xl font-bold">What Clients <span className="text-slate-500">Say</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl relative">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed italic mb-8">"{t.quote}"</p>
                <div className="flex items-center">
                  <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-teal-500/30 mr-4" />
                  <div>
                    <h4 className="font-bold">{t.author}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-900/40 to-blue-900/40 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Ready to build something <br/><span className="gradient-text">extraordinary?</span></h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Let's combine technical precision with creative vision to grow your brand.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:onajitepeter3@gmail.com"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Mail className="mr-2" size={20} /> Email Me
                </a>
                <a
                  href="https://wa.me/2349139948843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-teal-500 text-white font-bold rounded-2xl flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <MessageCircle className="mr-2" size={20} /> WhatsApp
                </a>
              </div>
            </div>
            {/* Visual fluff */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-3xl -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
