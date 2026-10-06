import { useState, useRef, useEffect, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';

import { PageCover } from './components/PageCover';
import { PageProfile } from './components/PageProfile';
import { PageSkillsExp } from './components/PageSkillsExp';
import { PageSingleCertificate } from './components/PageSingleCertificate';
import { PageProjects } from './components/PageProjects';
import { PageBackCover } from './components/PageBackCover';
import { CertificateModal } from './components/CertificateModal';

import { resumeData } from './data/resumeData';
import { soundEffects } from './utils/soundEffects';

export function App() {
  const bookRef = useRef(null);
  const [, setCurrentPage] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [bookDimensions, setBookDimensions] = useState({ width: 500, height: 700 });

  // Responsive dimension calculations for balanced 4-sided centering
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth < 640) {
        // Mobile Single Page
        const w = Math.min(windowWidth - 32, 420);
        const h = Math.min(windowHeight - 48, 640);
        setBookDimensions({ width: Math.max(w, 280), height: Math.max(h, 440) });
      } else if (windowWidth < 1024) {
        // Tablet Spread
        const w = Math.min((windowWidth - 48) / 2, 460);
        const h = Math.min(windowHeight - 64, 680);
        setBookDimensions({ width: Math.max(w, 320), height: Math.max(h, 480) });
      } else {
        // Desktop Spread
        const w = Math.min(520, (windowWidth - 80) / 2);
        const h = Math.min(720, windowHeight - 80);
        setBookDimensions({ width: Math.max(w, 400), height: Math.max(h, 560) });
      }
    };

    handleResize();
    setIsReady(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedCert) {
        if (e.key === 'Escape') setSelectedCert(null);
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        handleFlipNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handleFlipPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  // Page Flip Handlers
  const handleFlipNext = useCallback(() => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipNext();
      } catch {}
    }
  }, []);

  const handleFlipPrev = useCallback(() => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipPrev();
      } catch {}
    }
  }, []);

  const handleOpenBook = useCallback(() => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flipNext();
      } catch {}
    }
  }, []);

  const handleRestartBook = useCallback(() => {
    if (bookRef.current) {
      try {
        bookRef.current.pageFlip().flip(0);
      } catch {}
    }
  }, []);

  const handleFlipEvent = (e) => {
    if (e && typeof e.data === 'number') {
      setCurrentPage(e.data);
      soundEffects.playPageTurn();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#181a20] text-stone-100 selection:bg-amber-600/30 selection:text-amber-900 overflow-hidden">
      {/* 3D Flipbook Stage (Cleanly Centered on All 4 Sides) */}
      <main className="w-full flex items-center justify-center my-auto">
        <div className="flipbook-container relative w-full flex items-center justify-center">
          {/* Subtle Warm Pastel Ambient Atmosphere */}
          <div className="absolute inset-0 max-w-4xl max-h-[720px] mx-auto rounded-3xl bg-gradient-to-tr from-amber-200/5 via-stone-400/5 to-sky-200/5 blur-3xl pointer-events-none" />

          {/* HTMLFlipBook Component */}
          {isReady && (
            <HTMLFlipBook
              ref={bookRef}
              width={bookDimensions.width}
              height={bookDimensions.height}
              size="fixed"
              minWidth={280}
              maxWidth={560}
              minHeight={400}
              maxHeight={760}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={handleFlipEvent}
              className="shadow-2xl rounded-lg"
              style={{ margin: '0 auto' }}
              flippingTime={600}
              usePortrait={true}
              startPage={0}
              drawShadow={true}
              autoSize={true}
              showPageCorners={false}
              clickEventForward={false}
              disableFlipByClick={false}
            >
              {/* Page 0: Hardcover */}
              <PageCover onOpenBook={handleOpenBook} resumeData={resumeData} />

              {/* Page 1: Profile & Contact */}
              <PageProfile resumeData={resumeData} />

              {/* Page 2: Skills & Experience Timeline */}
              <PageSkillsExp resumeData={resumeData} />

              {/* Page 3: Certificate 1 (APSSDC Python Data Analysis) */}
              <PageSingleCertificate
                cert={resumeData.certifications[0]}
                totalCerts={resumeData.certifications.length}
                onSelectCert={setSelectedCert}
              />

              {/* Page 4: Certificate 2 (SkillDzire AICTE AI Internship) */}
              <PageSingleCertificate
                cert={resumeData.certifications[1]}
                totalCerts={resumeData.certifications.length}
                onSelectCert={setSelectedCert}
              />

              {/* Page 5: Certificate 3 (Blackbucks 6-Months Business & Data Analytics) */}
              <PageSingleCertificate
                cert={resumeData.certifications[2]}
                totalCerts={resumeData.certifications.length}
                onSelectCert={setSelectedCert}
              />

              {/* Page 6: Certificate 4 (Infosys Software Engineering & Agile) */}
              <PageSingleCertificate
                cert={resumeData.certifications[3]}
                totalCerts={resumeData.certifications.length}
                onSelectCert={setSelectedCert}
              />

              {/* Page 7: Certificate 5 (Infosys Development & Testing with Agile: XP) */}
              <PageSingleCertificate
                cert={resumeData.certifications[4]}
                totalCerts={resumeData.certifications.length}
                onSelectCert={setSelectedCert}
              />

              {/* Page 8: Certificate 6 (Infosys Next Gen Technologies) */}
              <PageSingleCertificate
                cert={resumeData.certifications[5]}
                totalCerts={resumeData.certifications.length}
                onSelectCert={setSelectedCert}
              />

              {/* Page 9: Projects & Proof of Work */}
              <PageProjects resumeData={resumeData} />

              {/* Page 10: Back Hardcover */}
              <PageBackCover
                onRestartBook={handleRestartBook}
                resumeData={resumeData}
              />
            </HTMLFlipBook>
          )}
        </div>
      </main>

      {/* Certificate Modal Lightbox Preview (When a Certificate is clicked) */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}

export default App;
