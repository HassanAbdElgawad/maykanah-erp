import { useState, useRef } from 'react';
import { X, RotateCcw, Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useCustomization } from '../contexts/CustomizationContext';
import { useLanguage } from '../contexts/LanguageContext';

interface CustomizationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

// Color palette for selection
const COLOR_PALETTE = [
  '#0A3B3D', '#104633', '#1a5c4e', '#2a7d6f',
  '#0f4c5c', '#1b6b93', '#2874a6', '#3498db',
  '#5f27cd', '#6c5ce7', '#a55eea', '#8e44ad',
  '#c0392b', '#e74c3c', '#e67e22', '#d35400',
  '#27ae60', '#2ecc71', '#16a085', '#1abc9c',
  '#2c3e50', '#34495e', '#7f8c8d', '#95a5a6',
];

export const CustomizationPanel = ({ isOpen, onClose }: CustomizationPanelProps) => {
  const { customization, updateCustomization, resetField, resetAll } = useCustomization();
  const { t, dir } = useLanguage();
  const brandImageInputRef = useRef<HTMLInputElement>(null);
  const avatarImageInputRef = useRef<HTMLInputElement>(null);

  const [tempValues, setTempValues] = useState({
    brandName: customization.brandName || '',
    brandImage: customization.brandImage || '',
    avatarImage: customization.avatarImage || '',
    userEmail: customization.userEmail || '',
    primaryColor: customization.primaryColor || '#0A3B3D',
    sidebarSecondaryColor: customization.sidebarSecondaryColor || '#ffffff0a',
  });

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'brandImage' | 'avatarImage'
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setTempValues((prev) => ({ ...prev, [field]: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateCustomization(tempValues);
    onClose();
  };

  const handleReset = (field: keyof typeof tempValues) => {
    const defaultValues: Record<string, string> = {
      brandName: '',
      brandImage: '',
      avatarImage: '',
      userEmail: '',
      primaryColor: '#0A3B3D',
      sidebarSecondaryColor: '#ffffff0a',
    };
    
    setTempValues((prev) => ({ ...prev, [field]: defaultValues[field] }));
    resetField(field as keyof typeof customization);
  };

  const handleResetAll = () => {
    resetAll();
    setTempValues({
      brandName: '',
      brandImage: '',
      avatarImage: '',
      userEmail: '',
      primaryColor: '#0A3B3D',
      sidebarSecondaryColor: '#ffffff0a',
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full w-[450px] bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in-right`}
        dir={dir}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#0A3B3D] to-[#104633]">
            <h2 className="text-xl font-semibold text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('customization.title') || 'تخصيص المظهر'}
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-6">
            {/* Brand Name */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="brandName" className="text-sm font-medium text-gray-700">
                  {t('customization.brand_name') || 'اسم العلامة التجارية'}
                </Label>
                <button
                  onClick={() => handleReset('brandName')}
                  className="text-xs text-gray-500 hover:text-[#0A3B3D] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t('common.reset') || 'إعادة تعيين'}
                </button>
              </div>
              <Input
                id="brandName"
                value={tempValues.brandName}
                onChange={(e) => setTempValues((prev) => ({ ...prev, brandName: e.target.value }))}
                placeholder={t('customization.brand_name_placeholder') || 'أدخل اسم العلامة التجارية'}
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
              <p className="text-xs text-gray-500">
                {t('customization.brand_name_note') || 'ليس له مكان حاليًا (محجوز للمستقبل)'}
              </p>
            </div>

            {/* Brand Image */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-gray-700">
                  {t('customization.brand_image') || 'صورة العلامة التجارية'}
                </Label>
                <button
                  onClick={() => handleReset('brandImage')}
                  className="text-xs text-gray-500 hover:text-[#0A3B3D] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t('common.reset') || 'إعادة تعيين'}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <input
                  ref={brandImageInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, 'brandImage')}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => brandImageInputRef.current?.click()}
                  className="flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  {t('customization.upload_image') || 'رفع صورة'}
                </Button>
                {tempValues.brandImage && (
                  <div className="relative w-20 h-20 border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={tempValues.brandImage}
                      alt="Brand"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500">
                {t('customization.brand_image_note') || 'ليس له مكان حاليًا (محجوز للمستقبل)'}
              </p>
            </div>

            {/* Avatar Image */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-gray-700">
                  {t('customization.avatar_image') || 'صورة الملف الشخصي'}
                </Label>
                <button
                  onClick={() => handleReset('avatarImage')}
                  className="text-xs text-gray-500 hover:text-[#0A3B3D] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t('common.reset') || 'إعادة تعيين'}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <input
                  ref={avatarImageInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, 'avatarImage')}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => avatarImageInputRef.current?.click()}
                  className="flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  {t('customization.upload_image') || 'رفع صورة'}
                </Button>
                {tempValues.avatarImage && (
                  <div className="relative w-20 h-20 border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={tempValues.avatarImage}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500">
                {t('customization.avatar_image_note') || 'سيظهر في أعلى الصفحة بدلاً من الصورة الافتراضية'}
              </p>
            </div>

            {/* User Email */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="userEmail" className="text-sm font-medium text-gray-700">
                  {t('customization.user_email') || 'البريد الإلكتروني'}
                </Label>
                <button
                  onClick={() => handleReset('userEmail')}
                  className="text-xs text-gray-500 hover:text-[#0A3B3D] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t('common.reset') || 'إعادة تعيين'}
                </button>
              </div>
              <Input
                id="userEmail"
                type="email"
                value={tempValues.userEmail}
                onChange={(e) => setTempValues((prev) => ({ ...prev, userEmail: e.target.value }))}
                placeholder={t('customization.user_email_placeholder') || 'البريد الإلكتروني'}
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
              <p className="text-xs text-gray-500">
                {t('customization.user_email_note') || 'سيظهر في قائمة المستخدم في الأعلى'}
              </p>
            </div>

            {/* Primary Color */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-gray-700">
                  {t('customization.primary_color') || 'اللون الرئيسي'}
                </Label>
                <button
                  onClick={() => handleReset('primaryColor')}
                  className="text-xs text-gray-500 hover:text-[#0A3B3D] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t('common.reset') || 'إعادة تعيين'}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={tempValues.primaryColor}
                  onChange={(e) =>
                    setTempValues((prev) => ({ ...prev, primaryColor: e.target.value }))
                  }
                  className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-300"
                />
                <Input
                  value={tempValues.primaryColor}
                  onChange={(e) =>
                    setTempValues((prev) => ({ ...prev, primaryColor: e.target.value }))
                  }
                  className="flex-1 font-mono"
                />
              </div>
              {/* Color Palette */}
              <div className="grid grid-cols-8 gap-2 mt-3">
                {COLOR_PALETTE.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setTempValues((prev) => ({ ...prev, primaryColor: color }))
                    }
                    className={`w-8 h-8 rounded-lg border-2 transition-all ${
                      tempValues.primaryColor === color
                        ? 'border-[#0A3B3D] scale-110'
                        : 'border-gray-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500">
                {t('customization.primary_color_note') || 'يتم تطبيق هذا اللون على جميع عناصر التطبيق'}
              </p>
            </div>

            {/* Sidebar Secondary Color */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-gray-700">
                  {t('customization.sidebar_secondary_color') || 'اللون الثانوي للشريط الجانبي'}
                </Label>
                <button
                  onClick={() => handleReset('sidebarSecondaryColor')}
                  className="text-xs text-gray-500 hover:text-[#0A3B3D] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t('common.reset') || 'إعادة تعيين'}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={
                    tempValues.sidebarSecondaryColor.startsWith('#')
                      ? tempValues.sidebarSecondaryColor
                      : '#ffffff'
                  }
                  onChange={(e) =>
                    setTempValues((prev) => ({ ...prev, sidebarSecondaryColor: e.target.value }))
                  }
                  className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-300"
                />
                <Input
                  value={tempValues.sidebarSecondaryColor}
                  onChange={(e) =>
                    setTempValues((prev) => ({ ...prev, sidebarSecondaryColor: e.target.value }))
                  }
                  className="flex-1 font-mono"
                  placeholder="#ffffff0a"
                />
              </div>
              {/* Color Palette */}
              <div className="grid grid-cols-8 gap-2 mt-3">
                {COLOR_PALETTE.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setTempValues((prev) => ({
                        ...prev,
                        sidebarSecondaryColor: color + '0a',
                      }))
                    }
                    className={`w-8 h-8 rounded-lg border-2 transition-all ${
                      tempValues.sidebarSecondaryColor.startsWith(color)
                        ? 'border-[#0A3B3D] scale-110'
                        : 'border-gray-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color + '0a' }}
                    title={color + '0a'}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500">
                {t('customization.sidebar_secondary_color_note') ||
                  'لون العناصر غير النشطة في الشريط الجانبي'}
              </p>
            </div>

            {/* Reset All Button */}
            <div className="pt-4 border-t border-gray-200">
              <Button
                type="button"
                variant="outline"
                onClick={handleResetAll}
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-red-300"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {t('customization.reset_all') || 'إعادة تعيين الكل'}
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50 flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              {t('common.cancel') || 'إلغاء'}
            </Button>
            <Button
              type="button"
              onClick={handleSave}
              className="flex-1 bg-[#0A3B3D] hover:bg-[#0A3B3D]/90"
            >
              {t('common.save') || 'حفظ'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
