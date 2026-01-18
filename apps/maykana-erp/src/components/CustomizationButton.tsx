import { useState } from 'react';
import { Palette } from 'lucide-react';
import { CustomizationPanel } from './CustomizationPanel';
import { useLanguage } from '../contexts/LanguageContext';

export const CustomizationButton = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { dir } = useLanguage();

  return (
    <>
      {/* Floating Button - Opposite side from sidebar */}
      <button
        onClick={() => setIsPanelOpen(true)}
        className={`fixed bottom-6 ${
          dir === 'rtl' ? 'left-6' : 'right-6'
        } z-30 w-10 h-10 bg-gradient-to-br from-[#0A3B3D] to-[#104633] hover:from-[#104633] hover:to-[#1a5c4e] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
        title="تخصيص المظهر"
      >
        <Palette className="w-6 h-6 transition-transform group-hover:rotate-12" />
      </button>

      {/* Customization Panel */}
      <CustomizationPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  );
};
