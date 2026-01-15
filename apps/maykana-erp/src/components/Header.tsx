import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
  LogOutIcon,
} from 'lucide-react';
import { Input } from './ui/input';
import { Breadcrumbs } from './Breadcrumbs';
import { useLanguage } from '../contexts/LanguageContext';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

export const Header = (): JSX.Element => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t, dir } = useLanguage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login-page');
  };

  const handleLanguageSwitch = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="h-[61px] bg-white rounded-xl border border-solid border-[#e2e2e2]">
      <div className="flex items-center justify-between h-full px-4 gap-3">
        {/* Right Section - Breadcrumbs */}
        <div className={`flex items-center gap-4`}>
          <Breadcrumbs />
        </div>

        {/* Left Section - Search + Language + Notifications + User */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative w-[350px]">
            <Input
              className={`w-full h-[45px] bg-[#F8FAFC] rounded-lg border-0 ${
                dir === 'rtl' ? 'pr-10 text-right' : 'pl-10 text-left'
              } [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-light text-[#00000080]`}
              placeholder={dir === 'rtl' ? 'بحثك عن هنا ...' : 'Search here ...'}
            />
            <SearchIcon
              className={`absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#00000080] ${
                dir === 'rtl' ? 'right-3' : 'left-3'
              }`}
            />
          </div>

          {/* Language Switcher - Flag with small dropdown icon */}
          <div className="relative" ref={languageMenuRef}>
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="h-[45px] px-3 bg-[#F8FAFC] hover:opacity-80 transition-opacity flex items-center justify-center gap-1.5 rounded-lg"
            >
              <img
                className="w-8 h-6 rounded-sm object-cover"
                alt={language === 'ar' ? 'Saudi Flag' : 'UK Flag'}
                src={
                  language === 'ar'
                    ? 'https://flagcdn.com/w40/sa.png'
                    : 'https://flagcdn.com/w40/gb.png'
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
                    alt="UK Flag"
                    src="https://flagcdn.com/w40/gb.png"
                  />
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-sm">
                    English
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Notifications - Bell with red dot */}
          <button className="h-[45px] w-[45px] bg-[#F8FAFC] hover:opacity-80 transition-opacity flex items-center justify-center rounded-lg relative">
            <BellIcon className="w-[22px] h-[22px] text-gray-700" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User Menu - Avatar with small dropdown icon */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="h-[45px] px-3 bg-[#F8FAFC] hover:opacity-80 transition-opacity flex items-center justify-center gap-1.5 rounded-lg"
            >
              <img
                className="w-[35px] h-[35px] rounded-full object-cover"
                alt="User Avatar"
                src="/images/icons/dummy_user_avatar.png"
              />
              <ChevronDownIcon className="w-3 h-3 text-gray-600" />
            </button>

            {isUserMenuOpen && (
              <div
                className={`absolute top-full mt-2 ${dir === 'rtl' ? 'left-0' : 'right-0'} bg-white rounded-lg shadow-lg border border-[#e2e2e2] py-2 min-w-[180px] z-50`}
              >
                <div className="px-4 py-2 border-b border-[#e2e2e2]">
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#092e32] text-sm">
                    {t('common.user')}
                  </p>
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e3280] text-xs">
                    {t('common.email')}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className={`w-full px-4 py-2 ${dir === 'rtl' ? 'text-right' : 'text-left'} hover:bg-[#f0f4f7] flex items-center gap-2`}
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
