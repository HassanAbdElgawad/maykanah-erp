import { motion } from 'framer-motion';
import { 
  responsiveText, 
  responsiveContainer,
  responsiveGrid,
  cn 
} from '../../utils/responsive';
import { LucideIcon } from 'lucide-react';

interface GenericModuleSlideProps {
  title: string;
  bullets: string[];
  icons: LucideIcon[];
  colorFrom?: string;
  colorTo?: string;
  isRTL?: boolean;
}

export const GenericModuleSlide = ({
  title,
  bullets,
  icons,
  colorFrom = '#2cc28d',
  colorTo = '#1e7e34',
  isRTL = false,
}: GenericModuleSlideProps) => {

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex items-center justify-center pt-28 pb-12 px-4 md:px-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="module-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#module-grid)" />
        </svg>
      </div>

      <div className={cn(
        responsiveContainer.wide,
        'relative z-10'
      )}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className={cn(
            responsiveText.h2,
            'text-white font-bold mb-3'
          )}>
            {title}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-32 mx-auto rounded-full"
            style={{ backgroundColor: colorFrom }}
          />
        </motion.div>

        {/* Features Grid */}
        <div className={cn(
          'grid',
          responsiveGrid.cols3,
          'gap-4 md:gap-6'
        )}>
          {bullets?.map((bullet, index) => {
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.5 + (index * 0.15),
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className={cn(
                  'bg-white/10 backdrop-blur-md rounded-xl border border-white/20',
                  `hover:bg-white/15 hover:border-[${colorFrom}]/50`,
                  'transition-all duration-300',
                  'p-4',
                  'h-full flex flex-col'
                )}>
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={cn(
                        'bg-gradient-to-br',
                        'rounded-lg p-2.5 flex-shrink-0',
                        'w-fit'
                      )}
                      style={{ backgroundImage: `linear-gradient(to bottom right, ${colorFrom}, ${colorTo})` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Text */}
                    <p className={cn(
                      responsiveText.body,
                      'text-white leading-snug flex-1'
                    )}>
                      {bullet}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-auto pt-2">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="h-0.5 rounded-full origin-left"
                      style={{ backgroundColor: colorFrom }}
                    />
                  </div>
                </div>

                {/* Glowing effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl transition-all duration-300 -z-10 blur-xl opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: `${colorFrom}10` }} // 10 is hex for alpha
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
