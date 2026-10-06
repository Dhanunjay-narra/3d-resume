import { forwardRef } from 'react';
import {
  FolderGit2,
  ExternalLink,
  GitBranch,
} from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

export const PageProjects = forwardRef((props, ref) => {
  const { resumeData, style, className } = props;

  return (
    <div
      ref={ref}
      style={style}
      className={`page page-inner relative w-full h-full bg-[#faf8f5] text-stone-800 p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-y-auto overflow-x-hidden select-text border-l border-[#ebe5da] ${className || ''}`}
    >
      {/* Soft paper texture */}
      <div className="absolute inset-0 paper-lines pointer-events-none opacity-50" />

      {/* Page Header */}
      <div className="relative z-10 pr-4 sm:pr-5">
        <div className="flex items-center justify-between border-b border-[#e8dec8] pb-2">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#5e4b77]">
            <span className="w-2 h-2 rounded-full bg-[#5e4b77] opacity-80" />
            <span>Projects &amp; GitHub Showcase</span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            PAGE 09
          </span>
        </div>
      </div>

      {/* Main Content Area - Vertically Centered with Equal Top & Bottom Space */}
      <div className="relative z-10 pr-4 sm:pr-5 flex-1 flex flex-col justify-center my-auto py-2 space-y-2.5">
        
        {/* GitHub Profile Banner Card in Soft Pastel Slate/Lavender */}
        <a
          href={resumeData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-2.5 rounded-xl bg-[#f6f2f9] text-stone-900 border border-[#ded3ea] hover:border-[#5e4b77] shadow-xs transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#ebdcf5] text-[#5e4b77] group-hover:scale-105 transition-transform">
              <GitHubIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-stone-900 group-hover:text-[#5e4b77] transition-colors">
                  github.com/Dhanunjay-narra
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[#faedcd] text-[#8c6b1f] border border-[#faedcd]">
                  Public Profile
                </span>
              </div>
              <p className="text-[10px] text-stone-500 font-mono">
                Open Source Repositories &amp; Live Projects
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#5e4b77] group-hover:translate-x-0.5 transition-transform font-medium">
            <span>Explore</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </a>

        {/* Real GitHub Projects Grid in Warm Pastel Cards */}
        <div className="space-y-2">
          {resumeData.projects.slice(0, 4).map((proj, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-white/95 border border-[#e2d8c3] shadow-xs hover:border-[#5e4b77] transition-all"
            >
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#5e4b77] flex-shrink-0" />
                  <h4 className="font-bold text-xs text-stone-900 truncate">
                    {proj.title}
                  </h4>
                  <span className="hidden sm:inline-block text-[8.5px] font-mono px-1.5 py-0.2 rounded bg-[#f5eff9] text-[#5e4b77] border border-[#e5d8ec]">
                    {proj.category}
                  </span>
                </div>
                
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-mono bg-[#f4eff8] text-[#5e4b77] hover:bg-[#5e4b77] hover:text-white transition-colors flex-shrink-0 font-medium border border-[#ded3ea]"
                >
                  <GitHubIcon className="w-2.5 h-2.5" />
                  <span>Repo</span>
                  <ExternalLink className="w-2 h-2" />
                </a>
              </div>

              <p className="text-[9.5px] sm:text-[10px] text-stone-600 leading-relaxed mb-1.5 line-clamp-2">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[#f4f2ec] text-stone-700 border border-[#e6e2d8]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Page Footer */}
      <div className="relative z-10 pr-4 sm:pr-5 pt-1.5 flex items-center justify-between border-t border-[#e8dec8] text-[10px] text-stone-500 font-mono">
        <span className="flex items-center gap-1">
          <GitBranch className="w-3 h-3 text-[#5e4b77]" /> GitHub: @Dhanunjay-narra
        </span>
        <span>Turn to Closing &rarr;</span>
      </div>
    </div>
  );
});

PageProjects.displayName = 'PageProjects';
