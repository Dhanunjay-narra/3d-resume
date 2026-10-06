import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Send, CheckCircle2, Mail } from 'lucide-react';

export const PageBackCover = forwardRef((props, ref) => {
  const { onRestartBook, style, className } = props;
  const [senderInfo, setSenderInfo] = useState('');
  const [senderNote, setSenderNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const emailTo = 'narradhanunjay5002@gmail.com';
    const subject = encodeURIComponent('Direct Inquiry from 3D Portfolio - Narra Dhanunjay');
    const body = encodeURIComponent(
      `Hello Dhanunjay,\n\nSender Contact: ${senderInfo || 'Not specified'}\nNote / Inquiry: ${senderNote || 'Looking forward to connecting!'}\n\nSent via 3D Interactive Portfolio`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    }, 400);

    setTimeout(() => {
      setSubmitted(false);
      setSenderInfo('');
      setSenderNote('');
    }, 4000);
  };

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
      <div className="absolute inset-3 sm:inset-4 md:inset-6 border-2 border-[#c89b65]/35 rounded-lg pointer-events-none">
        <div className="absolute inset-1 border border-[#dfc7a7]/20 rounded-md" />
        {/* Corner Accents */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#dfc7a7]" />
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#dfc7a7]" />
        <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#dfc7a7]" />
        <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#dfc7a7]" />
      </div>

      {/* 100% Dead-Center Content: Absolute Inset-0 Flex Centering */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 z-10 pointer-events-auto max-w-md mx-auto my-auto">
        
        {/* Thank You Heading */}
        <div className="space-y-1">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#faf5ee] via-[#eddcc8] to-[#d6ad7a] font-serif drop-shadow-md"
          >
            Thank You!
          </motion.h1>
          <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#dfc7a7]/60 to-transparent" />
        </div>

        {/* Direct Inquiry Card Matching Portfolio Aesthetic */}
        <div className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#18191f]/90 border border-[#c89b65]/35 shadow-xl backdrop-blur-md text-left space-y-2.5">
          <div>
            <div className="text-[9.5px] font-mono font-bold uppercase tracking-widest text-[#dfc7a7]/80 flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#dfc7a7]" />
              <span>DIRECT INQUIRY</span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white mt-0.5">
              Let's Connect &amp; Collaborate
            </h3>
            <p className="text-[10px] sm:text-[10.5px] text-stone-400 leading-snug">
              Drop your handle or project brief below to establish direct connection.
            </p>
          </div>

          <form onSubmit={handleSendInquiry} className="space-y-2">
            <div className="space-y-1.5">
              <input
                type="text"
                placeholder="Your Email or LinkedIn"
                value={senderInfo}
                onChange={(e) => setSenderInfo(e.target.value)}
                required
                className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#25262e] border border-stone-700/80 focus:border-[#dfc7a7] text-white placeholder-stone-500 outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Brief note or role/project type"
                value={senderNote}
                onChange={(e) => setSenderNote(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#25262e] border border-stone-700/80 focus:border-[#dfc7a7] text-white placeholder-stone-500 outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#b84a1b] to-[#d97736] hover:from-[#a03e15] hover:to-[#c4682c] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Opening Mail Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Email &amp; Introduction</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Return to Front Cover Button */}
        <motion.button
          onClick={onRestartBook}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#27262c]/90 hover:bg-[#34323b] text-[#e8ded1] hover:text-[#faf5ee] border border-[#c89b65]/35 text-[11px] font-mono shadow-md transition-all cursor-pointer"
        >
          <RotateCcw className="w-3 h-3 text-[#dfc7a7]" />
          <span>Return to Front Cover</span>
        </motion.button>
      </div>
    </div>
  );
});

PageBackCover.displayName = 'PageBackCover';
