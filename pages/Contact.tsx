
import React from 'react';
import { Mail, MessageCircle, ArrowRight, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's <span className="gradient-text">Connect</span></h1>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                Ready to build something powerful and profitable? Reach out and let's discuss your next breakthrough project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-teal-400 flex-shrink-0">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Based in</h4>
                    <p className="text-slate-400">Lagos, Nigeria (Serving clients globally)</p>
                 </div>
              </div>

              <div className="flex items-start space-x-6">
                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-teal-400 flex-shrink-0">
                    <Clock size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Availability</h4>
                    <p className="text-slate-400">Mon - Sat: 9:00 AM - 6:00 PM (GMT+1)</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:onajitepeter3@gmail.com"
              className="group p-8 block glass-card rounded-[2rem] border-white/10 hover:border-teal-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-teal-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Mail size={28} />
                </div>
                <div className="text-teal-400 group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Email Me</h3>
              <p className="text-slate-400 mb-4">onajitepeter3@gmail.com</p>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400/70">Estimated response: 2-4 hours</span>
            </a>

            <a
              href="https://wa.me/2349139948843"
              className="group p-8 block glass-card rounded-[2rem] border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <MessageCircle size={28} />
                </div>
                <div className="text-green-400 group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-slate-400 mb-4">+234 913 994 8843</p>
              <span className="text-xs font-bold uppercase tracking-widest text-green-400/70">Instant messaging</span>
            </a>

            <div className="pt-6 text-center">
               <p className="text-slate-500 text-sm">Preferred communication for initial inquiries is via Email or WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
