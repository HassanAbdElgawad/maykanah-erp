import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBreadcrumbs } from '../hooks/useBreadcrumbs';
import { useLanguage } from '../contexts/LanguageContext';

export function Breadcrumbs() {
  const { t, dir } = useLanguage();
  const breadcrumbs = useBreadcrumbs();

  const ArrowIcon = dir === 'rtl' ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <div className="flex items-center gap-2">
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-2">
          {index !== 0 && (
            <ArrowIcon className="w-4 h-4 text-gray-500" />
          )}
          {index !== breadcrumbs.length - 1 ? (
            <Link 
              to={crumb.href} 
              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#093738] text-sm hover:underline whitespace-nowrap"
            >
              {t(crumb.label)}
            </Link>
          ) : (
            <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#093738] text-sm whitespace-nowrap">
              {t(crumb.label)}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
