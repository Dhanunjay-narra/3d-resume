import { forwardRef } from 'react';
import {
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
  ZoomIn,
  Rocket,
} from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

export const PageCertifications = forwardRef(
  ({ resumeData, onSelectCert }, ref) => {
    return (
      <div
        ref={ref}
        className="page page-inner relative w-full h-full bg-[#fcfbf7] dark:bg-[#181a20] text-slate-800 dark:text-slate-100 p-6 md:p-8 flex flex-col justify-between overflow-y-auto overflow-x-hidden select-text border-r border-slate-200 dark:border-slate-800"
      >
        {/* Notebook Paper Styling & Margin */}
        <div className="absolute top-0 bottom-0 left-8 md:left-10 w-[2px] bg-rose-400/30 dark:bg-rose-500/20 pointer-events-none" />
        <div className="absolute inset-0 paper-lines pointer-events-none opacity-40 dark:opacity-10" />

        {/* Page Header */}
        <div className="relative z-10 pl-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Section 03 &bull; Certifications &amp; Proof of Work</span>
            </div>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              PAGE 03
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 pl-6 my-auto space-y-4">
          {/* Certifications Gallery Grid */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Verified Credentials &amp; Certifications</span>
              </h3>
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">
                Click to inspect
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {resumeData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => onSelectCert(cert)}
                  className="group relative bg-white dark:bg-slate-800/90 rounded-xl p-2.5 border border-slate-200 dark:border-slate-700/70 shadow-xs hover:shadow-md hover:border-amber-500/60 dark:hover:border-amber-400/60 transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  {/* Certificate Image Preview Card */}
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-900 border border-slate-700/50 mb-2">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[2px]">
                      <ZoomIn className="w-4 h-4" />
                      <span>Preview</span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div>
                    <h4 className="font-bold text-[11px] md:text-xs text-slate-900 dark:text-white line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-slate-400">
                      <span className="inline-flex items-center gap-0.5">
                        <Calendar className="w-2.5 h-2.5" />
                        {cert.date}
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-0.5">
                        <ShieldCheck className="w-2.5 h-2.5" /> Verified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proof of Work / Highlighted Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5 text-sky-500" />
              <span>Proof of Work &bull; Shipped Projects</span>
            </h3>

            <div className="space-y-2">
              {resumeData.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60"
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                        {proj.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        title="View Code"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-500 hover:text-white transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-1.5">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="relative z-10 pl-6 pt-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-mono">
          <span className="text-[11px]">All credentials verified</span>
          <span className="text-[11px]">Turn to Closing &rarr;</span>
        </div>
      </div>
    );
  }
);

PageCertifications.displayName = 'PageCertifications';

