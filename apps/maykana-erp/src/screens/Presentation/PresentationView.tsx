import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Maximize, Minimize, Home, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CoverSlide } from './components/slides/CoverSlide';
import { PasswordProtection } from './components/PasswordProtection';
import { OverviewSlide } from './components/slides/OverviewSlide';
import { GoalsSlide } from './components/slides/GoalsSlide';
import { TechStackSlide } from './components/slides/TechStackSlide';

export const PresentationView = () => {
  const { slideNumber } = useParams();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = 4; // تم الانتهاء من 4 سلايدات حتى الآن

  // تحديث السلايد من URL
  useEffect(() => {
    if (slideNumber) {
      const slideNum = parseInt(slideNumber, 10);
      if (slideNum > 0 && slideNum <= totalSlides) {
        setCurrentSlide(slideNum - 1);
      }
    }
  }, [slideNumber, totalSlides]);

  // التنقل للسلايد التالي
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      const nextSlideNum = currentSlide + 1;
      setCurrentSlide(nextSlideNum);
      navigate(`/presentation/${nextSlideNum + 1}`);
    }
  };

  // التنقل للسلايد السابق
  const prevSlide = () => {
    if (currentSlide > 0) {
      const prevSlideNum = currentSlide - 1;
      setCurrentSlide(prevSlideNum);
      navigate(`/presentation/${prevSlideNum + 1}`);
    }
  };

  // الذهاب لسلايد محدد
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    navigate(`/presentation/${index + 1}`);
  };

  // التحكم بالكيبورد
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          // عكس الاتجاه للغة العربية
          prevSlide();
          break;
        case 'ArrowLeft':
          // عكس الاتجاه للغة العربية
          nextSlide();
          break;
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'Home':
          goToSlide(0);
          break;
        case 'End':
          goToSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) toggleFullscreen();
          break;
        case 'l':
        case 'L':
          toggleLanguage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, language, isFullscreen]);

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Slide variants للـ animation
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
  };

  // Check authentication first
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 overflow-hidden">
      {/* Header Controls */}
      <Header
        language={language}
        onLanguageToggle={toggleLanguage}
        onFullscreenToggle={toggleFullscreen}
        isFullscreen={isFullscreen}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onClose={() => navigate('/')}
      />

      {/* Slides Container */}
      <div className="h-full w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            className="h-full w-full"
          >
            {renderSlide(currentSlide)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {!isFullscreen && (
        <>
          <NavigationButton
            direction="prev"
            onClick={() => {
              prevSlide();
              paginate(-1);
            }}
            disabled={currentSlide === 0}
            isRTL={language === 'ar'}
          />
          <NavigationButton
            direction="next"
            onClick={() => {
              nextSlide();
              paginate(1);
            }}
            disabled={currentSlide === totalSlides - 1}
            isRTL={language === 'ar'}
          />
        </>
      )}

      {/* Progress Dots */}
      <ProgressDots totalSlides={totalSlides} currentSlide={currentSlide} onDotClick={goToSlide} />

      {/* Progress Bar */}
      <ProgressBar current={currentSlide + 1} total={totalSlides} />
    </div>
  );
};

// Render Slide based on index
const renderSlide = (index: number) => {
  switch (index) {
    case 0:
      return <CoverSlide />;
    case 1:
      return <OverviewSlide />;
    case 2:
      return <GoalsSlide />;
    case 3:
      return <TechStackSlide />;
    default:
      return <CoverSlide />;
  }
};

// Header Component
interface HeaderProps {
  language: string;
  onLanguageToggle: () => void;
  onFullscreenToggle: () => void;
  isFullscreen: boolean;
  currentSlide: number;
  totalSlides: number;
  onClose: () => void;
}

const Header = ({
  language,
  onLanguageToggle,
  onFullscreenToggle,
  isFullscreen,
  currentSlide,
  totalSlides,
  onClose,
}: HeaderProps) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="absolute top-0 left-0 right-0 z-50 p-6 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
    >
      <div className="flex justify-between items-center max-w-8xl mx-0">
        {/* Left: Logo & Title */}
        <div className="flex items-center justify-center gap-4 min-w-[10%]">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <img src="/images/logo/LamdaX-logo.png" alt="LamdaX" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-sm text-white/70">Powered by</span>
              <span className="text-lg text-white font-bold">ميكنة</span>
            </div>
          </motion.div>
        </div>

        {/* Center: Slide Number */}
        <div className="text-white/80 font-medium text-lg  min-w-[10%] flex justify-center">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center justify-center gap-3 min-w-[10%]">
          {/* Language Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLanguageToggle}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium transition-all border border-white/20"
          >
            {language === 'ar' ? '🇬🇧 EN' : '🇸🇦 AR'}
          </motion.button>

          {/* Fullscreen Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onFullscreenToggle}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white transition-all border border-white/20"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </motion.button>

          {/* Home Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white transition-all border border-white/20"
          >
            <Home className="w-5 h-5" />
          </motion.button>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm p-2 rounded-lg text-white transition-all border border-red-500/30"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Navigation Button
interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
  isRTL: boolean;
}

const NavigationButton = ({ direction, onClick, disabled, isRTL }: NavigationButtonProps) => {
  const isPrev = direction === 'prev';
  const side = isRTL ? (isPrev ? 'right' : 'left') : isPrev ? 'left' : 'right';
  // تصحيح اتجاه الأسهم للـ RTL
  const Icon = isPrev ? (isRTL ? ChevronRight : ChevronLeft) : isRTL ? ChevronLeft : ChevronRight;

  return (
    <motion.button
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      animate={{ opacity: disabled ? 0.3 : 1, x: 0 }}
      transition={{ delay: 0.5 }}
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${side}-6 top-1/2 -translate-y-1/2 z-40 
        bg-white/10 hover:bg-white/20 disabled:hover:bg-white/10 
        backdrop-blur-sm p-4 rounded-full 
        transition-all border border-white/20
        disabled:cursor-not-allowed
        group`}
      whileHover={!disabled ? { scale: 1.1 } : {}}
      whileTap={!disabled ? { scale: 0.9 } : {}}
    >
      <Icon className="w-8 h-8 text-white" />
    </motion.button>
  );
};

// Progress Dots
interface ProgressDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

const ProgressDots = ({ totalSlides, currentSlide, onDotClick }: ProgressDotsProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 flex gap-3"
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-3 rounded-full transition-all ${
            index === currentSlide ? 'bg-[#2cc28d] w-12' : 'bg-white/40 hover:bg-white/60 w-3'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </motion.div>
  );
};

// Progress Bar
interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="absolute bottom-0 left-0 right-0 z-40"
    >
      <div className="h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2cc28d] to-[#07b664]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="absolute bottom-2 right-6 text-white/60 text-sm font-medium">
        {Math.round(progress)}%
      </div>
    </motion.div>
  );
};
