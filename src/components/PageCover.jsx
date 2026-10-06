import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const PageCover = forwardRef((props, ref) => {
  const { resumeData, style, className } = props;

  return (
    <div
      ref={ref}
      style={style}
      className={`page page-cover relative w-full h-full bg-gradient-to-br from-[#1c1d22] via-[#222126] to-[#2b2420] text-[#f4eee5] overflow-hidden shadow-2xl select-none cursor-pointer group ${className || ''}`}
      data-density="hard"
    >
      {/* Vintage Leather & Paper Texture Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#c89b65_1px,transparent_1px)] [background-size:18px_18px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />

      {/* Decorative Golden Embossed Outer Border */}
      <div className="absolute inset-4 md:inset-6 border-2 border-[#c89b65]/35 rounded-lg pointer-events-none group-hover:border-[#c89b65]/55 transition-colors">
        <div className="absolute inset-1 border border-[#dfc7a7]/20 rounded-md" />
        {/* Corner Accents */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#dfc7a7]" />
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#dfc7a7]" />
        <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#dfc7a7]" />
        <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#dfc7a7]" />
      </div>

      {/* 100% Dead-Center Content: Absolute Inset-0 Flex Centering */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5 z-10 pointer-events-auto">
        {/* Profile Avatar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-2 border-[#dfc7a7]/70 p-1.5 bg-gradient-to-br from-[#c89b65]/25 to-[#1c1d22]/90 backdrop-blur flex items-center justify-center shadow-[0_0_30px_rgba(200,155,101,0.25)] relative flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full border border-[#dfc7a7]/30 border-dashed animate-spin-slow" />
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#dfc7a7]/80 shadow-inner bg-stone-900">
            <img
              src={resumeData.personal.avatar}
              alt={resumeData.personal.name}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Name & Single Clean Subtitle */}
        <div className="space-y-2 max-w-sm mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#faf5ee] via-[#eddcc8] to-[#d6ad7a] font-serif drop-shadow-md">
            {resumeData.personal.name}
          </h1>

          <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#dfc7a7]/60 to-transparent" />

          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#e8ded1]/90 leading-relaxed font-mono px-2">
            Computer Science Engineering | Front End Developer | Full Stack AI
          </p>
        </div>
      </div>
    </div>
  );
});

PageCover.displayName = 'PageCover';
