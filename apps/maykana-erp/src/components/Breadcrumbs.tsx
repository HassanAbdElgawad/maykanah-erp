import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import { sidebarMenuItems } from '../config/navigation.config';
import { useState, useRef, useEffect } from 'react';

export function Breadcrumbs() {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs();
  const [isModuleDropdownOpen, setIsModuleDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get selected module from URL or default to accounting
  const getSelectedModuleFromUrl = () => {
    const params = new URLSearchParams(location.search);
    // For Settings page, use 'module' parameter, for Reports use 'selected'
    const moduleParam = params.get('module');
    const selectedParam = params.get('selected');
    const paramValue = moduleParam || selectedParam;
    
    if (paramValue === 'accounting') return 'sidebar.accounting';
    if (paramValue === 'sales') return 'sidebar.sales';
    if (paramValue === 'purchases') return 'sidebar.purchases';
    if (paramValue === 'warehouses') return 'sidebar.warehouses';
    if (paramValue === 'workflow-engine' || paramValue === 'workflow') return 'sidebar.workflow';
    if (paramValue === 'assets') return 'sidebar.assets';
    if (paramValue === 'hr') return 'sidebar.hr';
    if (paramValue === 'strategy') return 'sidebar.strategy';
    if (paramValue === 'competitions') return 'sidebar.competitions';
    
    return 'sidebar.accounting'; // default
  };

  const [selectedModule, setSelectedModule] = useState(getSelectedModuleFromUrl());

  // Update selectedModule when URL changes
  useEffect(() => {
    setSelectedModule(getSelectedModuleFromUrl());
  }, [location.search]);

  const ArrowIcon = dir === 'rtl' ? ChevronLeftIcon : ChevronRightIcon;

  // Check if current page is Reports or Settings
  const isReportsPage = location.pathname === '/reports' || location.pathname.startsWith('/reports/');
  const isSettingsPage = location.pathname === '/settings' || location.pathname.startsWith('/settings/');
  
  // Check if we're in a specific module reports/settings page (not the main page)
  // For settings: /settings/accounting/company has length 4, so > 3 means we're in a sub-page
  const isInSpecificReportModule = location.pathname.split('/').filter(Boolean).length > 2 && location.pathname.startsWith('/reports/');
  const isInSpecificSettingsModule = location.pathname.split('/').filter(Boolean).length > 2 && location.pathname.startsWith('/settings/');

  // Get main modules (exclude Home and Inbox)
  const mainModules = sidebarMenuItems.filter(
    item => item.titleKey !== 'sidebar.home' && item.titleKey !== 'sidebar.inbox'
  );

  // Get modules for Reports page (exclude Home, Inbox, Reports, Settings, Support, and temporarily hidden modules)
  const reportsModules = sidebarMenuItems.filter(
    item => 
      item.titleKey !== 'sidebar.home' && 
      item.titleKey !== 'sidebar.inbox' &&
      item.titleKey !== 'sidebar.reports' &&
      item.titleKey !== 'sidebar.settings' &&
      item.titleKey !== 'sidebar.support' &&
      item.titleKey !== 'sidebar.competitions' &&
      item.titleKey !== 'sidebar.assets' &&
      item.titleKey !== 'sidebar.hr' &&
      item.titleKey !== 'sidebar.strategy' &&
      item.titleKey !== 'sidebar.workflow'
  );

  // Get modules for Settings page (exclude Home, Inbox, Reports, Settings, Support, and temporarily hidden modules)
  const settingsModules = sidebarMenuItems.filter(
    item => 
      item.titleKey !== 'sidebar.home' && 
      item.titleKey !== 'sidebar.inbox' &&
      item.titleKey !== 'sidebar.reports' &&
      item.titleKey !== 'sidebar.settings' &&
      item.titleKey !== 'sidebar.support' &&
      item.titleKey !== 'sidebar.competitions' &&
      item.titleKey !== 'sidebar.hr' &&
      item.titleKey !== 'sidebar.strategy'
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
      const moduleName = modulePath.substring(1);
      navigate(`/reports?selected=${moduleName}`);
    } else if (isSettingsPage) {
      setSelectedModule(moduleKey);
      const moduleName = modulePath.substring(1);
      navigate(`/settings?module=${moduleName}`);
    } else {
      navigate(modulePath);
    }
  };

  // Check if the first breadcrumb (after Reports) is a module that should be selectable
  // Only show dropdown on the main module page (breadcrumbs.length === 1)
  const isFirstBreadcrumbModule = breadcrumbs.length === 1 && 
    mainModules.some(module => breadcrumbs[0]?.label === module.titleKey);

  return (
    <div className="flex items-center gap-2">
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-2">
          {index !== 0 && (
            <ArrowIcon className="w-4 h-4 text-gray-500" />
          )}
          {/* If it's the first breadcrumb and it's a module, show dropdown */}
          {index === 0 && isFirstBreadcrumbModule && !isReportsPage && !isSettingsPage ? (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsModuleDropdownOpen(!isModuleDropdownOpen)}
                className="flex items-center gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#093738] text-sm hover:underline whitespace-nowrap cursor-pointer"
              >
                {t(crumb.label)}
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
              to={
                // إذا كان الـ breadcrumb هو وحدة ونحن في صفحة تقارير، نوجه إلى /reports?selected=module
                (crumb.label === 'sidebar.accounting' || crumb.label === 'sidebar.sales' || crumb.label === 'sidebar.purchases' || crumb.label === 'sidebar.warehouses' || crumb.label === 'sidebar.assets') && location.pathname.startsWith('/reports/')
                  ? `/reports?selected=${crumb.href.split('/').pop()}`
                // إلى /reports?selected=reports عندما يضغط على "التقارير"
                : crumb.label === 'sidebar.reports' && location.pathname.startsWith('/reports/')
                  ? '/reports?selected=reports'
                // إذا كان الـ breadcrumb هو وحدة ونحن في صفحة إعدادات، نوجه إلى /settings?module=module
                : (crumb.label === 'sidebar.accounting' || crumb.label === 'sidebar.sales' || crumb.label === 'sidebar.purchases' || crumb.label === 'sidebar.warehouses' || crumb.label === 'sidebar.assets' || crumb.label === 'sidebar.workflow') && location.pathname.startsWith('/settings/')
                  ? `/settings?module=${crumb.href.split('/').pop()}`
                // إذا كان "الإعدادات" ونحن في صفحة إعدادات فرعية، نرجع للصفحة الرئيسية مع الوحدة الحالية
                : crumb.label === 'sidebar.settings' && isInSpecificSettingsModule
                  ? `/settings?module=${location.pathname.split('/')[2]}`
                  : crumb.href
              } 
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
      
      {/* Module Selector for Reports Page - Only show when on main reports page, not in specific reports */}
      {isReportsPage && breadcrumbs.length === 1 && !isInSpecificReportModule && (
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

      {/* Module Selector for Settings Page - Only show when on main settings page, not in specific settings */}
      {isSettingsPage && breadcrumbs.length === 1 && !isInSpecificSettingsModule && (
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
                {settingsModules.map((module) => {
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
