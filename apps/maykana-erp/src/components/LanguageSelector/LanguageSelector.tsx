import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageSelectorProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

export const LanguageSelector = ({
  className = '',
  size = 'md',
  variant = 'default',
}: LanguageSelectorProps): JSX.Element => {
  const { language, setLanguage, dir } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'ar' | 'en');
  };

  // Size configurations
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  // Variant configurations
  const variantClasses = {
    default: 'bg-white border border-[#e2e2e2] focus:ring-2 focus:ring-[#093738]',
    minimal: 'bg-transparent border border-gray-300 focus:ring-1 focus:ring-gray-400',
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className={`rounded-lg font-medium focus:outline-none cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${dir === 'rtl' ? 'text-right' : 'text-left'} ${className}`}
    >
      <option value="ar">العربية</option>
      <option value="en">English</option>
    </select>
  );
};
