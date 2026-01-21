import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  SparklesIcon
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Header } from './Header';
import { CustomizationButton } from './CustomizationButton';
import { useLanguage } from '../contexts/LanguageContext';
import { useCustomization } from '../contexts/CustomizationContext';
import { useSidebar } from '../contexts/SidebarContext';
import { sidebarMenuItems, bottomMenuItems } from '../config/navigation.config';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const { t, dir } = useLanguage();
  const { customization } = useCustomization();
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to check if a menu item is active
  const isMenuItemActive = (itemPath: string) => {
    return location.pathname === itemPath || location.pathname.startsWith(itemPath + '/');
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f7f7f9]" dir={dir}>
      {/* Customization Button */}
      <CustomizationButton />

      {/* Header */}
      <div
        className={`fixed top-2 z-20 transition-all duration-300 ${
          isSidebarOpen
            ? dir === 'rtl'
              ? 'right-[337px] left-4'
              : 'left-[337px] right-4'
            : dir === 'rtl'
              ? 'right-[102px] left-4'
              : 'left-[102px] right-4'
        }`}
      >
        <Header />
      </div>

      {/* Main Content */}
      <main
        className={`pt-[85px] pb-8 transition-all duration-300 ${
          isSidebarOpen
            ? dir === 'rtl'
              ? 'mr-[337px] pl-4'
              : 'ml-[337px] pr-4'
            : dir === 'rtl'
              ? 'mr-[102px] pl-4'
              : 'ml-[102px] pr-4'
        }`}
      >
        {children}
      </main>

      {/* Sidebar */}
      <aside
        className={`fixed top-2 ${dir === 'rtl' ? 'right-4' : 'left-4'} ${
          isSidebarOpen ? 'w-[305px]' : 'w-[70px]'
        } h-[calc(100vh-16px)] bg-[url(https://c.animaapp.com/mkd2vucjeF4nNd/img/rectangle-1.png)] bg-cover bg-center rounded-lg overflow-hidden z-30 transition-all duration-300`}
        style={
          customization.primaryColor && 
          customization.primaryColor !== '#0A3B3D' && 
          customization.primaryColor !== '#093738'
            ? {
                backgroundColor: customization.primaryColor,
                backgroundBlendMode: 'overlay',
              }
            : undefined
        }
      >
        <div className="flex flex-col h-full">
          {/* Logo & Toggle */}
          <div className={`flex items-center h-[61px] px-4 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
            {isSidebarOpen ? (
              <>
                <div className="flex items-center justify-center flex-1">
                  <img
                    className="w-[100px] h-[41px]"
                    alt="Maykna horizintal"
                    src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-3.png"
                  />
                </div>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    className="w-5 h-3"
                    alt="Toggle Sidebar"
                    src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-2.png"
                  />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  className="w-5 h-3"
                  alt="Toggle Sidebar"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-2.png"
                />
              </button>
            )}
          </div>

          <Separator className="bg-white/10" />

          {/* Main Menu */}
          <nav className="flex-1 px-[13px] py-5 space-y-[5px]">
            {sidebarMenuItems.map((item, index) => {
              const isActive = isMenuItemActive(item.path);
              const secondaryColor = customization.sidebarSecondaryColor || '#ffffff0a';
              return (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => item.path && navigate(item.path)}
                  className={`w-full h-10 ${
                    isSidebarOpen ? 'justify-between' : 'justify-center'
                  } px-2 rounded-lg flex-row ${
                    isActive
                      ? 'bg-white hover:bg-white/90 text-[#104633]'
                      : 'hover:bg-[#ffffff1a] text-white'
                  }`}
                  style={!isActive ? { backgroundColor: secondaryColor } : {}}
                >
                  {isSidebarOpen ? (
                    <>
                      <div className="flex items-center gap-2">
                        <item.icon className="w-[19px] h-[19px]" />
                        <span
                          className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base ${
                            isActive ? 'font-semibold' : 'font-normal'
                          }`}
                        >
                          {t(item.titleKey)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.status && (
                          <Badge className="h-[20px] px-1.5 bg-[#ff6b351a] hover:bg-[#ff6b351a] text-[#ff6b35] text-[10px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold uppercase">
                            {item.status}
                          </Badge>
                        )}
                        {item.badge && (
                          <Badge className="h-[25px] px-2 bg-[#f0f4f766] hover:bg-[#f0f4f766] text-white text-[13px] [font-family:'Graphik_Arabic-Medium',Helvetica] font-medium">
                            {item.badge}
                          </Badge>
                        )}
                        {item.hasDropdown &&
                          (dir === 'rtl' ? (
                            <ChevronLeftIcon className="w-[13px] h-[13px]" />
                          ) : (
                            <ChevronRightIcon className="w-[13px] h-[13px]" />
                          ))}
                      </div>
                    </>
                  ) : (
                    <div className="relative">
                      <item.icon className="w-[19px] h-[19px]" />
                      {item.badge && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#f0f4f766] text-white text-[10px] rounded-full flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </Button>
              );
            })}
          </nav>

          {/* Bottom Menu */}
          <div className="px-[13px] pb-5 space-y-[5px]">
            {/* Virtual Assistant Button */}
            {isSidebarOpen ? (
              <Button
                variant="ghost"
                className="w-full h-[51px] justify-center gap-3 rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 text-white"
              >
                <span style={{ fontFamily: "'Graphik Arabic', Helvetica, sans-serif" }} className="font-medium text-base">
                  {t('common.virtual_assistant')}
                </span>
                <SparklesIcon className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="w-full h-10 justify-center rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 text-white"
              >
                <SparklesIcon className="w-5 h-5" />
              </Button>
            )}

            <Separator className="bg-white/20" />

            {/* Bottom Menu Items */}
            {bottomMenuItems.map((item, index) => {
              const isActive = isMenuItemActive(item.path);
              const secondaryColor = customization.sidebarSecondaryColor || '#ffffff0a';
              return (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => item.path && navigate(item.path)}
                  className={`w-full h-10 ${
                    isSidebarOpen ? 'justify-between' : 'justify-center'
                  } px-2 rounded-lg flex-row ${
                    isActive
                      ? 'bg-white hover:bg-white/90 text-[#104633]'
                      : 'hover:bg-[#ffffff1a] text-white'
                  }`}
                  style={!isActive ? { backgroundColor: secondaryColor } : {}}
                >
                {isSidebarOpen ? (
                  <>
                    <div className="flex items-center gap-2">
                      <item.icon className="w-[18px] h-[18px]" />
                      <span className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base ${
                        isActive ? 'font-semibold' : 'font-normal'
                      }`}>
                        {t(item.titleKey)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.status && (
                        <Badge className="h-[25px] px-2 bg-[#f0f4f757] hover:bg-[#f0f4f757] text-white text-[13px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium gap-1">
                          <span>{t(item.status)}</span>
                          <div className="w-2 h-2 bg-[#2cc28d] rounded-full border border-white" />
                        </Badge>
                      )}
                      {dir === 'rtl' ? (
                        <ChevronLeftIcon className="w-[13px] h-[13px]" />
                      ) : (
                        <ChevronRightIcon className="w-[13px] h-[13px]" />
                      )}
                    </div>
                  </>
                ) : (
                  <div className="relative">
                    <item.icon className="w-[18px] h-[18px]" />
                    {item.status && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#2cc28d] rounded-full border border-white" />
                    )}
                  </div>
                )}
              </Button>
            );
            })}

            <Separator className="bg-white/20 my-2" />
          </div>
        </div>
      </aside>
    </div>
  );
};
