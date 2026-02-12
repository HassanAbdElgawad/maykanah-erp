import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

const CORRECT_PASSWORD = 'Maykanah@2030';
const SESSION_KEY = 'presentation_auth';
const SESSION_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export const PasswordProtection = ({ onAuthenticated }: PasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Check if already authenticated
  useEffect(() => {
    const checkAuth = () => {
      const authData = sessionStorage.getItem(SESSION_KEY);
      if (authData) {
        try {
          const { timestamp } = JSON.parse(authData);
          const elapsed = Date.now() - timestamp;

          if (elapsed < SESSION_DURATION) {
            // Still valid
            onAuthenticated();
          } else {
            // Session expired
            sessionStorage.removeItem(SESSION_KEY);
          }
        } catch {
          sessionStorage.removeItem(SESSION_KEY);
        }
      }
    };

    checkAuth();
  }, [onAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate slight delay for security appearance
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        // Store authentication timestamp
        const authData = {
          timestamp: Date.now(),
          authenticated: true,
        };
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(authData));
        onAuthenticated();
      } else {
        setError('كلمة المرور غير صحيحة');
        setPassword('');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-[7%] flex items-center justify-center"
      >
        <img
          src="/images/logo/Maykna_Horizintal_Version_4_1.svg"
          alt="Maykana"
          className="h-16 md:h-20"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 md:p-10 shadow-2xl">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-success/20 p-4 rounded-full">
              <Lock className="w-8 h-8 text-success" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-2"
          >
            العرض التقديمي محمي
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/70 text-center mb-8"
          >
            الرجاء إدخال كلمة المرور للمتابعة
          </motion.p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="كلمة المرور"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-success/50 focus:border-success/50 transition-all"
                // dir="ltr"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-500/20 border border-red-500/50 rounded-lg px-4 py-3 text-red-200 text-sm text-center"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading || !password}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-success hover:bg-success/90 disabled:bg-white/10 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-success/50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  جاري التحقق...
                </span>
              ) : (
                'دخول'
              )}
            </motion.button>
          </form>

          {/* Session Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-center text-white/50 text-sm"
          >
            <p>الجلسة صالحة لمدة ساعة واحدة</p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center text-white/30 text-sm"
        >
          <p>LamdaX © 2024 | رؤية 2030</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
