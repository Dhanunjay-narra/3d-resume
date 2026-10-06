import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

export const PageBackCover = forwardRef((props, ref) => {
  const { onRestartBook, style, className } = props;

  return (
    <div
      ref={ref}
      style={style}
      className={`page page-cover relative w-full h-full bg-gradient-to-br from-[#1c1d22] via-[#222126] to-[#2b2420] text-[#f4eee5] overflow-hidden shadow-2xl select-none ${className || ''}`}
      data-density="hard"
    >
      {/* Background Vintage Leather Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#c89b65_1px,transparent_1px)] [background-size:18px_18px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />

      {/* Decorative Golden Embossed Outer Border */}
      <div className="absolute inset-4 md:inset-6 border-2 border-[#c89b65]/35 rounded-lg pointer-events-none">
        <div className="absolute inset-1 border border-[#dfc7a7]/20 rounded-md" />
        {/* Corner Accents */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#dfc7a7]" />
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#dfc7a7]" />
        <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#dfc7a7]" />
        <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#dfc7a7]" />
      </div>

      {/* 100% Dead-Center Content: Absolute Inset-0 Flex Centering */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 space-y-4 z-10 pointer-events-auto">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#faf5ee] via-[#eddcc8] to-[#d6ad7a] font-serif drop-shadow-md"
        >
          Thank You!
        </motion.h1>

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#dfc7a7]/60 to-transparent" />

        <motion.button
          onClick={onRestartBook}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#27262c]/90 hover:bg-[#34323b] text-[#e8ded1] hover:text-[#faf5ee] border border-[#c89b65]/40 text-xs font-mono shadow-md transition-all cursor-pointer mt-1"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#dfc7a7]" />
          <span>Return to Front Cover</span>
        </motion.button>
      </div>
    </div>
  );
});

PageBackCover.displayName = 'PageBackCover';
