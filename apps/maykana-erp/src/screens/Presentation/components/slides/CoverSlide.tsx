import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, coverSlide as coverSlideContent } from '../../translations';

export const CoverSlide = () => {
  const { language } = useLanguage();
  const t = getTranslation(coverSlideContent, language);
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34]">
      {/* Background Animated Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(44, 194, 141, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(44, 194, 141, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(44, 194, 141, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        {/* LamdaX Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src="/images/logo/LamdaX-text-Logo.svg"
            alt="LamdaX"
            className="h-6 md:h-8 w-auto"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Maykana Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 1.5,
            delay: 0.4,
          }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.img
              src="/images/logo/Maykna_Horizintal_Version_4_1.svg"
              alt="ميكنة"
              className="h-28 md:h-36 w-auto drop-shadow-2xl"
              animate={{
                filter: [
                  'drop-shadow(0 10px 40px rgba(255, 255, 255, 0.3))',
                  'drop-shadow(0 10px 60px rgba(255, 255, 255, 0.5))',
                  'drop-shadow(0 10px 40px rgba(255, 255, 255, 0.3))',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-2xl md:text-3xl text-white/90 mb-6 font-light"
        >
          {t.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-[#2cc28d] mb-6 font-medium"
        >
          {t.content[0]}
        </motion.p>

        {/* Vision 2030 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <Vision2030Badge text={t.footer!} />
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-base md:text-lg text-white/70"
        >
          {t.content[1]}
        </motion.p>
      </div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2cc28d] to-transparent"
      />
    </div>
  );
};

// Vision 2030 Badge Component
const Vision2030Badge = ({ text }: { text: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e7e34] to-[#093738] px-8 py-4 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm"
    >
      <motion.span
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-4xl"
      >
        🇸🇦
      </motion.span>
      <div className="flex flex-col items-center">
        <span className="text-white font-bold text-xl">{text}</span>
      </div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-2 h-2 bg-[#2cc28d] rounded-full"
      />
    </motion.div>
  );
};
