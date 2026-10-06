import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Sparkles,
  BookOpen,
  Maximize2,
  Minimize2,
  User,
  Award,
  Rocket,
} from 'lucide-react';

export const BookControls = ({
  currentPage,
  totalPages,
  onFlipPrev,
  onFlipNext,
  onJumpToPage,
  soundEnabled,
  onToggleSound,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const getPageTitle = (pageNum) => {
    switch (pageNum) {
      case 0:
        return 'Front Cover';
      case 1:
        return 'Page 1 &bull; Profile & Contact';
      case 2:
        return 'Page 2 &bull; Skills & Timeline';
      case 3:
        return 'Page 3 &bull; Cert 1: APSSDC Python';
      case 4:
        return 'Page 4 &bull; Cert 2: SkillDzire AI';
      case 5:
        return 'Page 5 &bull; Cert 3: Blackbucks Analytics';
      case 6:
        return 'Page 6 &bull; Cert 4: Infosys Agile SWE';
      case 7:
        return 'Page 7 &bull; Cert 5: Infosys XP &amp; Testing';
      case 8:
        return 'Page 8 &bull; Cert 6: Infosys NextGen';
      case 9:
        return 'Page 9 &bull; Projects &amp; Proof of Work';
      case 10:
        return 'Back Cover &bull; Closing &amp; Contact';
      default:
        return `Page ${pageNum}`;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-2.5 px-2 flex flex-col items-center gap-2">
      {/* Scrollable Quick Category Jump Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-lg text-[11px] overflow-x-auto max-w-full scrollbar-none">
        <button
          onClick={() => onJumpToPage(0)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 0
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-3 h-3" />
          <span>Cover</span>
        </button>

        <button
          onClick={() => onJumpToPage(1)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 1 || currentPage === 2
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <User className="w-3 h-3" />
          <span>Profile</span>
        </button>

        <button
          onClick={() => onJumpToPage(3)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 3
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Award className="w-3 h-3" />
          <span>1. APSSDC</span>
        </button>

        <button
          onClick={() => onJumpToPage(4)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 4
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Award className="w-3 h-3" />
          <span>2. SkillDzire AI</span>
        </button>

        <button
          onClick={() => onJumpToPage(5)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 5
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Award className="w-3 h-3" />
          <span>3. Blackbucks</span>
        </button>

        <button
          onClick={() => onJumpToPage(6)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 6
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Award className="w-3 h-3" />
          <span>4. Infosys SWE</span>
        </button>

        <button
          onClick={() => onJumpToPage(7)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 7
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Award className="w-3 h-3" />
          <span>5. Infosys XP</span>
        </button>

        <button
          onClick={() => onJumpToPage(8)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 8
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Award className="w-3 h-3" />
          <span>6. Infosys NextGen</span>
        </button>

        <button
          onClick={() => onJumpToPage(9)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage === 9
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Rocket className="w-3 h-3" />
          <span>Projects</span>
        </button>

        <button
          onClick={() => onJumpToPage(totalPages - 1)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium whitespace-nowrap ${
            currentPage >= totalPages - 1
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          <span>Back Cover</span>
        </button>
      </div>

      {/* Main Navigation Controls Bar */}
      <div className="flex items-center justify-between w-full p-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-xl">
        {/* Previous Button */}
        <button
          onClick={onFlipPrev}
          disabled={currentPage === 0}
          className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-all cursor-pointer disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Center Page Status Indicator */}
        <div className="text-center px-2">
          <div
            className="text-xs font-semibold text-slate-200 font-mono tracking-wide"
            dangerouslySetInnerHTML={{ __html: getPageTitle(currentPage) }}
          />
          <div className="text-[10px] text-slate-500 font-mono hidden sm:block">
            Page {currentPage + 1} of {totalPages} &bull; Flip by dragging page edge or arrows
          </div>
        </div>

        {/* Action Controls & Next Button */}
        <div className="flex items-center gap-1.5">
          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
              soundEnabled
                ? 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20'
                : 'bg-slate-800 text-slate-500 hover:bg-slate-700'
            }`}
            title={soundEnabled ? 'Mute Page Flip Sound' : 'Enable Page Flip Sound'}
            aria-label="Toggle flip sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Fullscreen Toggle */}
          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer hidden sm:flex"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          )}

          {/* Next Button */}
          <button
            onClick={onFlipNext}
            disabled={currentPage >= totalPages - 1}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-30 disabled:hover:bg-amber-500 text-slate-950 text-xs font-bold transition-all cursor-pointer disabled:cursor-not-allowed shadow-md"
            aria-label="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
