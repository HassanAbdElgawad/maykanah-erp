import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BellIcon, ChevronDownIcon, SearchIcon, LogOutIcon } from 'lucide-react';
import { Input } from './ui/input';
import { Breadcrumbs } from './Breadcrumbs';
import { ModuleIcon } from './ModuleIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { useCustomization } from '../contexts/CustomizationContext';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';
import { SEARCHABLE_PAGES, MOCK_NOTIFICATIONS } from '../data/ui.data';
import type { SearchResult } from '../data/ui.data';

const searchablePages = SEARCHABLE_PAGES;
const notifications = MOCK_NOTIFICATIONS;

export const Header = (): JSX.Element => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t, dir } = useLanguage();
  const { customization } = useCustomization();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      const filtered = searchablePages.filter((page) => {
        const titleMatch = language === 'ar' 
          ? page.title.toLowerCase().includes(query)
          : page.titleEn.toLowerCase().includes(query);
        const locationMatch = language === 'ar'
          ? page.location.toLowerCase().includes(query)
          : page.locationEn.toLowerCase().includes(query);
        return titleMatch || locationMatch;
      });
      setSearchResults(filtered);
      setIsSearchOpen(filtered.length > 0);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  }, [searchQuery, language]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login-page');
  };

  const handleLanguageSwitch = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const handleSearchResultClick = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'warning':
        return '⚠';
      case 'error':
        return '✕';
      default:
        return 'ℹ';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-600';
      case 'warning':
        return 'bg-yellow-100 text-yellow-600';
      case 'error':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <header className="h-[61px] bg-white rounded-xl border border-solid border-[#e2e2e2]">
      <div className="flex items-center justify-between h-full px-2 md:px-4 gap-2 md:gap-3">
        {/* Right Section - Breadcrumbs */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
          <ModuleIcon />
          <div className="hidden md:block">
            <Breadcrumbs />
          </div>
        </div>

        {/* Left Section - Search + Language + Notifications + User */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Search - Hidden on mobile */}
          <div className="hidden md:block relative w-[350px]" ref={searchRef}>
            <Input
              className={`w-full h-[45px] bg-[#F8FAFC] rounded-lg border-0 ${
                dir === 'rtl' ? 'pr-10 text-right' : 'pl-10 text-left'
              } [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-light text-[#00000080]`}
              placeholder={dir === 'rtl' ? 'بحثك عن هنا ...' : 'Search here ...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon
              className={`absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#00000080] ${
                dir === 'rtl' ? 'right-3' : 'left-3'
              }`}
            />
            
            {/* Search Results Dropdown */}
            {isSearchOpen && searchResults.length > 0 && (
              <div className={`absolute top-full mt-2 ${dir === 'rtl' ? 'right-0' : 'left-0'} bg-white rounded-lg shadow-lg border border-[#e2e2e2] py-2 w-full max-h-[400px] overflow-y-auto z-50`}>
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearchResultClick(result.path)}
                    className={`w-full px-4 py-3 ${dir === 'rtl' ? 'text-right' : 'text-left'} hover:bg-[#f0f4f7] flex flex-col gap-1 transition-colors`}
                  >
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#092e32] text-sm">
                      {language === 'ar' ? result.title : result.titleEn}
                    </span>
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#5f6c72] text-xs">
                      {language === 'ar' ? result.location : result.locationEn}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher - Flag with small dropdown icon */}
          <div className="hidden md:block relative" ref={languageMenuRef}>
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="h-[45px] px-3 bg-[#F8FAFC] hover:opacity-80 transition-opacity flex items-center justify-center gap-1.5 rounded-lg"
            >
              <img
                className="w-8 h-6 rounded-sm object-cover"
                alt={language === 'ar' ? 'Saudi Flag' : 'US Flag'}
                src={
                  language === 'ar'
                    ? 'https://flagcdn.com/w40/sa.png'
                    : 'https://flagcdn.com/w40/us.png'
                }
              />
              <ChevronDownIcon className="w-3 h-3 text-gray-600" />
            </button>

            {isLanguageMenuOpen && (
              <div
                className={`absolute top-full mt-2 ${dir === 'rtl' ? 'left-0' : 'right-0'} bg-white rounded-lg shadow-lg border border-[#e2e2e2] py-2 min-w-[150px] z-50`}
              >
                <button
                  onClick={() => handleLanguageSwitch('ar')}
                  className={`w-full px-4 py-2 ${dir === 'rtl' ? 'text-right' : 'text-left'} hover:bg-[#f0f4f7] flex items-center gap-2 ${
                    language === 'ar' ? 'bg-[#f0f4f7]' : ''
                  }`}
                >
                  <img
                    className="w-7 h-5 rounded-sm"
                    alt="Saudi Flag"
                    src="https://flagcdn.com/w40/sa.png"
                  />
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-sm">
                    العربية
                  </span>
                </button>
                <button
                  onClick={() => handleLanguageSwitch('en')}
                  className={`w-full px-4 py-2 ${dir === 'rtl' ? 'text-right' : 'text-left'} hover:bg-[#f0f4f7] flex items-center gap-2 ${
                    language === 'en' ? 'bg-[#f0f4f7]' : ''
                  }`}
                >
                  <img
                    className="w-7 h-5 rounded-sm"
                    alt="US Flag"
                    src="https://flagcdn.com/w40/us.png"
                  />
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-sm">
                    English
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Notifications - Bell with red dot */}
          <div className="relative" ref={notificationsRef}>
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="h-[45px] w-[45px] bg-[#F8FAFC] hover:opacity-80 transition-opacity flex items-center justify-center rounded-lg relative"
            >
              <BellIcon className="w-[22px] h-[22px] text-gray-700" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[9px] font-semibold">{unreadCount}</span>
                </span>
              )}
            </button>

            {isNotificationsOpen && (
              <div
                className={`absolute top-full mt-2 ${dir === 'rtl' ? 'left-0' : 'right-0'} bg-white rounded-lg shadow-lg border border-[#e2e2e2] w-[400px] max-h-[500px] overflow-hidden z-50`}
              >
                {/* Header */}
                <div className="px-4 py-3 border-b border-[#e2e2e2] flex items-center justify-between">
                  <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#092e32] text-base">
                    {language === 'ar' ? 'الإشعارات' : 'Notifications'}
                  </h3>
                  {unreadCount > 0 && (
                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                      {unreadCount} {language === 'ar' ? 'جديد' : 'new'}
                    </span>
                  )}
                </div>

                {/* Notifications List */}
                <div className="max-h-[400px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 border-b border-[#e2e2e214] hover:bg-[#f0f4f7] cursor-pointer transition-colors ${
                        !notification.isRead ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationColor(notification.type)}`}>
                          <span className="text-lg font-bold">{getNotificationIcon(notification.type)}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#092e32] text-sm ${
                              !notification.isRead ? 'text-[#093738]' : ''
                            }`}>
                              {language === 'ar' ? notification.title : notification.titleEn}
                            </h4>
                            {!notification.isRead && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1" />
                            )}
                          </div>
                          <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#5f6c72] text-xs mt-1 line-clamp-2">
                            {language === 'ar' ? notification.description : notification.descriptionEn}
                          </p>
                          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#5f6c7280] text-xs mt-1 inline-block">
                            {notification.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-[#e2e2e2] text-center">
                  <button className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#093738] text-xs hover:underline">
                    {language === 'ar' ? 'عرض جميع الإشعارات' : 'View All Notifications'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Menu - Avatar with small dropdown icon */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="h-[45px] px-3 bg-[#F8FAFC] hover:opacity-80 transition-opacity flex items-center justify-center gap-1.5 rounded-lg"
            >
              <img
                className="w-[35px] h-[35px] rounded-full object-cover"
                alt="User Avatar"
                src={customization.avatarImage || "/images/icons/dummy_user_avatar.png"}
              />
              <ChevronDownIcon className="w-3 h-3 text-gray-600" />
            </button>

            {isUserMenuOpen && (
              <div
                className={`absolute top-full mt-2 ${dir === 'rtl' ? 'left-0' : 'right-0'} bg-white rounded-lg shadow-lg border border-[#e2e2e2] py-2 min-w-[180px] z-50`}
              >
                <div className="px-4 py-2 border-b border-[#e2e2e2] text-center">
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#092e32] text-sm">
                    {t('common.user')}
                  </p>
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e3280] text-xs">
                    {customization.userEmail || t('common.email')}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className={`w-full px-4 py-2  hover:bg-[#f0f4f7] flex items-center gap-2`}
                >
                  <LogOutIcon className="w-4 h-4 text-red-500" />
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-red-500 text-sm">
                    {t('common.logout')}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
