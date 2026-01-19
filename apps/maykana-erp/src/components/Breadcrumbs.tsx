import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useBreadcrumbs } from '../hooks/useBreadcrumbs';
import { useLanguage } from '../contexts/LanguageContext';
import { sidebarMenuItems } from '../config/navigation.config';
import { useState, useRef, useEffect } from 'react';

export function Breadcrumbs() {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs();
  const [isModuleDropdownOpen, setIsModuleDropdownOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState('sidebar.accounting');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const ArrowIcon = dir === 'rtl' ? ChevronLeftIcon : ChevronRightIcon;

  // Check if current page is Reports
  const isReportsPage = location.pathname === '/reports' || location.pathname.startsWith('/reports/');

  // Get main modules (exclude Home and Inbox)
  const mainModules = sidebarMenuItems.filter(
    item => item.titleKey !== 'sidebar.home' && item.titleKey !== 'sidebar.inbox'
  );

  // Get modules for Reports page (exclude Home, Inbox, Reports, Settings, Support)
  const reportsModules = sidebarMenuItems.filter(
    item => 
      item.titleKey !== 'sidebar.home' && 
      item.titleKey !== 'sidebar.inbox' &&
      item.titleKey !== 'sidebar.reports' &&
      item.titleKey !== 'sidebar.settings' &&
      item.titleKey !== 'sidebar.support'
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsModuleDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleModuleChange = (modulePath: string, moduleKey: string) => {
    setIsModuleDropdownOpen(false);
    if (isReportsPage) {
      setSelectedModule(moduleKey);
      // يمكن إضافة منطق هنا لتصفية التقارير حسب الوحدة المختارة
    } else {
      navigate(modulePath);
    }
  };

  // Check if the first breadcrumb (after Reports) is a module that should be selectable
  const isFirstBreadcrumbModule = breadcrumbs.length > 1 && 
    mainModules.some(module => breadcrumbs[0]?.label === module.titleKey);

  return (
    <div className="flex items-center gap-2">
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-2">
          {index !== 0 && (
            <ArrowIcon className="w-4 h-4 text-gray-500" />
          )}
          {/* If it's the first breadcrumb and it's a module, show dropdown */}
          {index === 0 && isFirstBreadcrumbModule && !isReportsPage ? (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsModuleDropdownOpen(!isModuleDropdownOpen)}
                className="flex items-center gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#093738] text-sm hover:underline whitespace-nowrap cursor-pointer"
              >
                {t(crumb.label)}
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              {isModuleDropdownOpen && (
                <div className={`absolute top-full ${dir === 'rtl' ? 'right-0' : 'left-0'} mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto`}>
                  {mainModules.map((module) => {
                    const Icon = module.icon;
                    const isActive = crumb.label === module.titleKey;
                    
                    return (
                      <button
                        key={module.titleKey}
                        onClick={() => handleModuleChange(module.path, module.titleKey)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${dir === 'rtl' ? 'text-right' : 'text-left'} ${isActive ? 'bg-blue-50' : ''}`}
                      >
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#093738]' : 'text-gray-600'}`} />
                        <span className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm ${isActive ? 'font-semibold text-[#093738]' : 'font-normal text-gray-700'}`}>
                          {t(module.titleKey)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : index !== breadcrumbs.length - 1 ? (
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
      
      {/* Module Selector for Reports Page */}
      {isReportsPage && breadcrumbs.length === 1 && (
        <span className="flex items-center gap-2">
          <ArrowIcon className="w-4 h-4 text-gray-500" />
          
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsModuleDropdownOpen(!isModuleDropdownOpen)}
              className="flex items-center justify-between gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#093738] text-sm whitespace-nowrap cursor-pointer px-4 bg-[#F1F5F9] border border-[#CFCFCF] rounded-lg"
              style={{ width: '264px', height: '45px' }}
            >
              {t(selectedModule)}
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            
            {/* Dropdown Menu */}
            {isModuleDropdownOpen && (
              <div className={`absolute top-full ${dir === 'rtl' ? 'right-0' : 'left-0'} mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto`}>
                {reportsModules.map((module) => {
                  const Icon = module.icon;
                  const isActive = selectedModule === module.titleKey;
                  
                  return (
                    <button
                      key={module.titleKey}
                      onClick={() => handleModuleChange(module.path, module.titleKey)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${dir === 'rtl' ? 'text-right' : 'text-left'} ${isActive ? 'bg-blue-50' : ''}`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#093738]' : 'text-gray-600'}`} />
                      <span className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm ${isActive ? 'font-semibold text-[#093738]' : 'font-normal text-gray-700'}`}>
                        {t(module.titleKey)}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </span>
      )}
    </div>
  );
}
