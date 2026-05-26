
import React, { useState, useEffect } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (project.vimeoId) {
      fetch(`https://vimeo.com/api/v2/video/${project.vimeoId}.json`)
        .then((res) => res.json())
        .then((data) => {
          if (isMounted && data && data[0]) {
            setThumbnailUrl(data[0].thumbnail_large || data[0].thumbnail_medium);
          }
        })
        .catch(() => {
          // Fallback handled gracefully
        });
    }
    return () => {
      isMounted = false;
    };
  }, [project.vimeoId]);

  return (
    <div
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-teal-500/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
        {/* Placeholder Gradient / Loading Shimmer */}
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
        </div>

        {/* Thumbnail Image */}
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={`${project.title} preview`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-105 opacity-40' : 'opacity-80'}`}
          />
        )}

        {/* Delayed Active Video Iframe (mounted dynamically on hover) */}
        {isHovered && (
          <iframe
            src={`https://player.vimeo.com/video/${project.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
            title={`${project.title} showcase`}
            className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
          ></iframe>
        )}

        {/* Play Overlay */}
        <div className={`absolute inset-0 bg-slate-950/60 transition-opacity duration-300 flex items-center justify-center z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
           <div className="text-white flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Play size={40} className="mb-2 fill-teal-400 text-teal-400" />
              <span className="font-bold text-sm tracking-widest uppercase">Live Showcase</span>
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <button className="text-teal-400 text-sm font-semibold flex items-center group/btn">
            Full Demo <ExternalLink size={14} className="ml-1 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
