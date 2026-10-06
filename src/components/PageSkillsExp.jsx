import { forwardRef } from 'react';
import {
  Server,
  Cloud,
  Terminal,
  Database,
  Globe,
  Building2,
  LineChart,
  Code2,
  Monitor,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import {
  PythonIcon,
  JavaIcon,
  JavaScriptIcon,
  ReactIcon,
  HtmlCssIcon,
  DjangoFlaskIcon,
  MySQLIcon,
  PostgresIcon,
  DockerIcon,
  GitIcon,
  LinuxIcon,
  WindowsIcon,
  StorageIcon,
} from './TechIcons';

export const PageSkillsExp = forwardRef((props, ref) => {
  const { style, className } = props;

  return (
    <div
      ref={ref}
      style={style}
      className={`page page-inner relative w-full h-full bg-[#faf8f5] text-stone-800 p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-y-auto overflow-x-hidden select-text border-l border-[#ebe5da] ${className || ''}`}
    >
      {/* Margin guide & soft paper lines */}
      <div className="absolute top-0 bottom-0 right-5 md:right-7 w-[2px] bg-rose-400/20 pointer-events-none" />
      <div className="absolute inset-0 paper-lines pointer-events-none opacity-50" />

      {/* Page Header */}
      <div className="relative z-10 pr-4 sm:pr-5">
        <div className="flex items-center justify-between border-b border-[#e8dec8] pb-2">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#2c587a]">
            <span className="w-2 h-2 rounded-full bg-[#2c587a] opacity-80" />
            <span>Technical Skills</span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            PAGE 02
          </span>
        </div>
      </div>

      {/* Main Content Area - Vertically Centered with Equal Top & Bottom Space */}
      <div className="relative z-10 pr-4 sm:pr-5 flex-1 flex flex-col justify-center my-auto py-2">
        {/* 6 Skill Category Grid (2 Columns in Humanized Pastel Tones) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
          
          {/* 1. Storage & Infrastructure - Warm Sand Pastel */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#fdfaf5] border border-[#ecdcc8] shadow-xs flex flex-col justify-between hover:border-[#c89b65] transition-all">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 rounded-md bg-[#f6ebdc] text-[#8c5720]">
                  <StorageIcon className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-bold text-stone-900">
                  Storage &amp; Infrastructure
                </h3>
              </div>
              <p className="text-[10.5px] text-stone-600 leading-snug">
                <span className="font-semibold text-[#8c5720]">Storage SME</span> (HPE Alletra, Primera, NetApp, Qumulo &amp; Brocade), Cloud Computing, Systems Engineering
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-[#f0e4d4]">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#fcf4e8] text-[#8c5720] border border-[#ecdcc8]">
                <Server className="w-2.5 h-2.5 text-[#a06828]" /> HPE / NetApp
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#f0f6fa] text-[#2c587a] border border-[#d2e2ec]">
                <Cloud className="w-2.5 h-2.5 text-[#3b729b]" /> Cloud Systems
              </span>
            </div>
          </div>

          {/* 2. Scripting & Automation - Soft Slate Blue Pastel */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#f5f8fb] border border-[#d5e4ee] shadow-xs flex flex-col justify-between hover:border-[#2c587a] transition-all">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 rounded-md bg-[#e3eef5] text-[#2c587a]">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-bold text-stone-900">
                  Scripting &amp; Automation
                </h3>
              </div>
              <p className="text-[10.5px] text-stone-600 leading-snug">
                Python, Java, JavaScript, Scripting, Automation Tools
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-[#e2edf4]">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#edf4f9] text-[#2c587a] border border-[#d2e2ec]">
                <PythonIcon className="w-2.5 h-2.5" /> Python
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#fdf5ed] text-[#a0451e] border border-[#eed9ca]">
                <JavaIcon className="w-2.5 h-2.5" /> Java
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#fdfaeb] text-[#8c6b1f] border border-[#faedcd]">
                <JavaScriptIcon className="w-2.5 h-2.5" /> JS
              </span>
            </div>
          </div>

          {/* 3. Application & Web - Soft Sage Green Pastel */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#f4f8f5] border border-[#d6e7dc] shadow-xs flex flex-col justify-between hover:border-[#2c6e49] transition-all">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 rounded-md bg-[#e4f1e8] text-[#2c6e49]">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-bold text-stone-900">
                  Application &amp; Web
                </h3>
              </div>
              <p className="text-[10.5px] text-stone-600 leading-snug">
                HTML, CSS, React, Flask, Django, REST APIs
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-[#e2efe6]">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#eef8f8] text-[#1c646b] border border-[#cde8eb]">
                <ReactIcon className="w-2.5 h-2.5" /> React
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#fdf3f0] text-[#a83b24] border border-[#f5d5cc]">
                <HtmlCssIcon className="w-2.5 h-2.5" /> HTML/CSS
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#edf6f0] text-[#2c6e49] border border-[#d2e8db]">
                <DjangoFlaskIcon className="w-2.5 h-2.5" /> Flask/Django
              </span>
            </div>
          </div>

          {/* 4. Databases & Tools - Soft Seafoam Pastel */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#f2f9fa] border border-[#cde7ea] shadow-xs flex flex-col justify-between hover:border-[#1c646b] transition-all">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 rounded-md bg-[#dff0f2] text-[#1c646b]">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-bold text-stone-900">
                  Databases &amp; Tools
                </h3>
              </div>
              <p className="text-[10.5px] text-stone-600 leading-snug">
                MySQL, PostgreSQL, Git, GitHub, Docker
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-[#e0f0f2]">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#eef7f8] text-[#1c646b] border border-[#cce8eb]">
                <MySQLIcon className="w-2.5 h-2.5" /> MySQL
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#eff5fa] text-[#28536b] border border-[#d0e2ec]">
                <PostgresIcon className="w-2.5 h-2.5" /> Postgres
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#edf4f9] text-[#255e88] border border-[#cfe1ed]">
                <DockerIcon className="w-2.5 h-2.5" /> Docker
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#fef5ee] text-[#b3471c] border border-[#f5dbcb]">
                <GitIcon className="w-2.5 h-2.5" /> Git
              </span>
            </div>
          </div>

          {/* 5. Operating Systems - Soft Lavender Pastel */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#f7f5fa] border border-[#dfd7eb] shadow-xs flex flex-col justify-between hover:border-[#554777] transition-all">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 rounded-md bg-[#ece5f5] text-[#554777]">
                  <Monitor className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-bold text-stone-900">
                  Operating Systems
                </h3>
              </div>
              <p className="text-[10.5px] text-stone-600 leading-snug">
                In-depth knowledge of Windows and Linux Operating Systems
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-[#ede7f4]">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#f2f0f7] text-[#4d3f6a] border border-[#ded7ec]">
                <LinuxIcon className="w-2.5 h-2.5" /> Linux Systems
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#edf4f9] text-[#2c587a] border border-[#d2e2ec]">
                <WindowsIcon className="w-2.5 h-2.5" /> Windows OS
              </span>
            </div>
          </div>

          {/* 6. Domains - Soft Dusty Rose Pastel */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#faf4f6] border border-[#ebd5dc] shadow-xs flex flex-col justify-between hover:border-[#7a3e52] transition-all">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 rounded-md bg-[#f4e2e8] text-[#7a3e52]">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-bold text-stone-900">
                  Domains
                </h3>
              </div>
              <p className="text-[10.5px] text-stone-600 leading-snug">
                Enterprise IT applications, Software Development, Data &amp; Analytics
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-[#f0dee4]">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#f6eef2] text-[#7a3e52] border border-[#ead4db]">
                <Layers className="w-2.5 h-2.5 text-[#8c485f]" /> Enterprise IT
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#f0f7f3] text-[#2c6e49] border border-[#d4e7db]">
                <Code2 className="w-2.5 h-2.5 text-[#358257]" /> Software Dev
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-[#fcf5eb] text-[#8c5720] border border-[#ecdcc8]">
                <LineChart className="w-2.5 h-2.5 text-[#a46726]" /> Data Analytics
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Page Footer */}
      <div className="relative z-10 pr-4 sm:pr-5 pt-2 flex items-center justify-between border-t border-[#e8dec8] text-[10px] text-stone-500 font-mono">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-[#2c6e49]" /> 6 Core Competencies
        </span>
        <span>Turn page for Certifications &rarr;</span>
      </div>
    </div>
  );
});

PageSkillsExp.displayName = 'PageSkillsExp';
