import { motion } from 'framer-motion';
import { Mail, Phone, Globe } from 'lucide-react';

interface ClosingSlideProps {
  isRTL?: boolean;
}

export const ClosingSlide = ({ isRTL = true }: ClosingSlideProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        {/* Thank You Message */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className={`text-7xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'شكراً لكم' : 'Thank You'}
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"
          />
        </motion.div>

        {/* Logo/Brand */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <h2 className={`text-4xl font-bold text-emerald-400 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'نظام ميكنة' : 'Maykana ERP'}
            </h2>
            <p className={`text-lg text-white/80 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'نظام تخطيط موارد المؤسسات المتكامل' : 'Comprehensive Enterprise Resource Planning System'}
            </p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
          >
            <Mail className="w-5 h-5 text-emerald-400" />
            <span className="text-white/90 text-sm">info@maykana.com</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
          >
            <Phone className="w-5 h-5 text-emerald-400" />
            <span className="text-white/90 text-sm" dir="ltr">+966 53 567 3953</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
          >
            <Globe className="w-5 h-5 text-emerald-400" />
            <span className="text-white/90 text-sm">www.maykana.com</span>
          </motion.div>
        </motion.div>

        {/* Footer Message */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-white/60"
        >
          <span className={`text-sm ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'صُنع بـ' : 'Made with'}
          </span>
          <Heart className="w-4 h-4 text-red-400 fill-red-400" />
          <span className={`text-sm ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'في المملكة العربية السعودية' : 'in Saudi Arabia'}
          </span>
        </motion.div> */}

        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-blue-400/10 blur-2xl pointer-events-none"
        />
      </div>
    </div>
  );
};
