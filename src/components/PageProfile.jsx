import { forwardRef } from 'react';
import {
  Mail,
  Phone,
  GraduationCap,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export const PageProfile = forwardRef((props, ref) => {
  const { resumeData, style, className } = props;

  return (
    <div
      ref={ref}
      style={style}
      className={`page page-inner relative w-full h-full bg-[#faf8f5] text-stone-800 p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-y-auto overflow-x-hidden select-text border-r border-[#ebe5da] ${className || ''}`}
    >
      {/* Margin guide & soft paper lines */}
      <div className="absolute top-0 bottom-0 left-5 md:left-7 w-[2px] bg-rose-400/20 pointer-events-none" />
      <div className="absolute inset-0 paper-lines pointer-events-none opacity-50" />

      {/* Page Header */}
      <div className="relative z-10 pl-4 sm:pl-5">
        <div className="flex items-center justify-between border-b border-[#e8dec8] pb-2">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#a0522d]">
            <span className="w-2 h-2 rounded-full bg-[#c45520] opacity-80" />
            <span>Identity &amp; Education</span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            PAGE 01
          </span>
        </div>
      </div>

      {/* Main Content Area - Vertically Centered with Equal Top & Bottom Space */}
      <div className="relative z-10 pl-4 sm:pl-5 flex-1 flex flex-col justify-center my-auto py-2 space-y-3.5">
        {/* Name in Warm Terracotta & Title */}
        <div className="space-y-1">
          <div className="text-[11px] font-mono text-stone-500 font-medium tracking-wider">
            👋 HELLO WORLD, I AM
          </div>

          {/* Clean Name in Warm Terracotta / Clay */}
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#b84a1b]">
            {resumeData.personal.name}
          </h2>

          <p className="text-xs md:text-sm font-semibold text-stone-700">
            {resumeData.personal.title}
          </p>
        </div>

        {/* EDUCATION Table Frame in Soft Pastel Warm Cream */}
        <div className="p-3 rounded-xl bg-white/95 border border-[#e2d8c3] shadow-xs">
          {/* Table Section Header */}
          <div className="flex items-center gap-2 border-b-2 border-[#d98253]/40 pb-1.5 mb-2">
            <GraduationCap className="w-4 h-4 text-[#b84a1b]" />
            <h3 className="text-xs font-bold tracking-widest uppercase text-stone-900 font-mono">
              EDUCATION
            </h3>
          </div>

          {/* Education Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 font-bold uppercase text-[10px] tracking-wider">
                  <th className="py-1.5 pr-2 font-semibold">DEGREE</th>
                  <th className="py-1.5 px-2 font-semibold">INSTITUTION</th>
                  <th className="py-1.5 px-2 font-semibold whitespace-nowrap">YEAR</th>
                  <th className="py-1.5 pl-2 font-semibold text-right whitespace-nowrap">CGPA / %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {resumeData.education.map((item, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-1.5 pr-2 font-bold text-stone-900 whitespace-nowrap">
                      {item.degree}
                    </td>
                    <td className="py-1.5 px-2 text-stone-700 font-medium">
                      {item.institution}
                    </td>
                    <td className="py-1.5 px-2 text-stone-500 font-mono text-[10px] whitespace-nowrap">
                      {item.year}
                    </td>
                    <td className="py-1.5 pl-2 font-bold text-[#b84a1b] font-mono text-right whitespace-nowrap">
                      {item.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Action Links with Soft Pastel Color Cards */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-500">
            Quick Connect &amp; Channels
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Email - Soft Warm Peach Pastel */}
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="group flex items-center gap-2 p-2 rounded-xl bg-[#fdf8f4] border border-[#ebdccc] hover:border-[#b84a1b] shadow-xs transition-all"
            >
              <div className="p-1.5 rounded-lg bg-[#fae8dc] text-[#a0451e] flex-shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden text-left">
                <span className="block text-[8.5px] text-stone-400 uppercase font-mono">Email</span>
                <span className="block text-[11px] font-semibold text-stone-800 truncate group-hover:text-[#b84a1b]">
                  {resumeData.contact.email}
                </span>
              </div>
            </a>

            {/* Phone - Soft Sage Green Pastel */}
            <a
              href={`tel:${resumeData.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="group flex items-center gap-2 p-2 rounded-xl bg-[#f3f8f5] border border-[#d6e8dc] hover:border-[#2c6e49] shadow-xs transition-all"
            >
              <div className="p-1.5 rounded-lg bg-[#e2f0e7] text-[#2c6e49] flex-shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden text-left">
                <span className="block text-[8.5px] text-stone-400 uppercase font-mono">Phone</span>
                <span className="block text-[11px] font-semibold text-stone-800 truncate group-hover:text-[#2c6e49]">
                  {resumeData.contact.phone}
                </span>
              </div>
            </a>

            {/* LinkedIn - Soft Dusty Slate Blue Pastel */}
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-2 rounded-xl bg-[#f3f7fa] border border-[#d2e2ec] hover:border-[#28536b] shadow-xs transition-all"
            >
              <div className="p-1.5 rounded-lg bg-[#e1edf5] text-[#28536b] flex-shrink-0">
                <LinkedInIcon className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden text-left">
                <span className="block text-[8.5px] text-stone-400 uppercase font-mono">LinkedIn</span>
                <span className="block text-[11px] font-semibold text-stone-800 truncate group-hover:text-[#28536b]">
                  linkedin.com/in/dhanunjay-narra
                </span>
              </div>
            </a>

            {/* GitHub - Soft Muted Lavender Pastel */}
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-2 rounded-xl bg-[#f7f3f9] border border-[#e5d8ec] hover:border-[#5e4b77] shadow-xs transition-all"
            >
              <div className="p-1.5 rounded-lg bg-[#ede1f4] text-[#5e4b77] flex-shrink-0">
                <GitHubIcon className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden text-left">
                <span className="block text-[8.5px] text-stone-400 uppercase font-mono">GitHub</span>
                <span className="block text-[11px] font-semibold text-stone-800 truncate group-hover:text-[#5e4b77]">
                  github.com/Dhanunjay-narra
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Page Footer for Balanced Top/Bottom Symmetry */}
      <div className="relative z-10 pl-4 sm:pl-5 pt-2 flex items-center justify-between border-t border-[#e8dec8] text-[10px] text-stone-500 font-mono">
        <span>{resumeData.personal.name} &bull; Portfolio</span>
        <span>Turn page for Technical Skills &rarr;</span>
      </div>
    </div>
  );
});

PageProfile.displayName = 'PageProfile';
