import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  width?: string;
  footer?: ReactNode;
}

export const SideDrawer = ({
  isOpen,
  onClose,
  title,
  children,
  width = '600px',
  footer,
}: SideDrawerProps): JSX.Element => {
  const { dir } = useLanguage();

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

          {/* Drawer Content */}
          <div
            className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col`}
            style={{
              width,
              transform: isOpen ? 'translateX(0)' : dir === 'rtl' ? 'translateX(-100%)' : 'translateX(100%)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-xl font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#093738]">
                {title}
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6">{children}</div>

            {/* Footer */}
            {footer && (
              <div className="flex-shrink-0 p-6 border-t border-gray-200 bg-white">{footer}</div>
            )}
          </div>
        </>
      )}
    </>
  );
};
