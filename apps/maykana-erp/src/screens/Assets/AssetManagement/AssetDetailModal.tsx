import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TogglerWithLabel } from '@/components/ui/TogglerWithLabel';

interface Asset {
  id: string;
  code: string;
  name: string;
  location: string;
  responsibleEmployee: string;
  currentBookValue: number;
  status: 'used' | 'available' | 'maintenance';
  originalValue: number;
  depreciationType: string;
  custodyHolder: string;
  depreciationRate: number;
  isActive: boolean;
  usageDate: string;
  images: string[];
}

interface AssetDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  asset: Asset | null;
  onNavigate: (direction: 'prev' | 'next') => void;
  currentIndex: number;
  totalCount: number;
}

export function AssetDetailModal({
  isOpen,
  onClose,
  asset,
  onNavigate,
  currentIndex,
  totalCount,
}: AssetDetailModalProps) {
  const { dir } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !asset) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? asset.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === asset.images.length - 1 ? 0 : prev + 1));
  };

  const formatCurrency = (value: number) => {
    return (
      <span className="flex items-center gap-1">
        {value.toLocaleString('en-US')}
        <img
          src="/images/currency/saudi-riyal.svg"
          alt="ريال سعودي"
          className="w-3.5 h-3.5"
          style={{ filter: 'brightness(0)' }}
        />
      </span>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto ${
          dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''
        }`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex-1"></div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Right Side - Image Carousel */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <img
                  src={asset.images[currentImageIndex]}
                  alt={asset.name}
                  className="w-full h-full object-contain"
                />
                {asset.images.length > 1 && (
                  <>
                    <button
                      onClick={handleNextImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                      onClick={handlePrevImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#11383f] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0f2f35] transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Image Indicators */}
              {asset.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {asset.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-[#11383f]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Left Side - Details */}
            <div className="space-y-4">
              {/* Row 1: Asset Code & Asset Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">اسم الأصل</div>
                  <div className="text-base font-semibold text-gray-900">{asset.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">كود الأصل</div>
                  <div className="text-xl font-bold text-gray-900">{asset.code}</div>
                </div>
              </div>

              {/* Row 2: Original Value & Depreciation Type */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">حالة الإهلاك</div>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {asset.depreciationType}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">القيمة الأصلية</div>
                  <div className="text-sm font-bold text-gray-900">
                    {formatCurrency(asset.originalValue)}
                  </div>
                </div>
              </div>

              {/* Row 3: Custody Holder & Depreciation Rate */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1.5">نسبة الاستهلاك</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${asset.depreciationRate}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-gray-900 min-w-[40px]">
                      {asset.depreciationRate}%
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">العهدة</div>
                  <div className="text-sm font-medium text-gray-900">{asset.custodyHolder}</div>
                </div>
              </div>

              {/* Row 4: Current Book Value & Status Toggle */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="text-right flex flex-col justify-end">
                  <div className="flex justify-between flex-col items-start">
                    <span className="text-xs text-gray-700">الحالة</span>
                    <TogglerWithLabel
                      isActive={asset.isActive}
                      onToggle={() => {}}
                      activeLabel="يعمل"
                      inactiveLabel="معطل"
                      size="md"
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">القيمة الحالية</div>
                  <div className="text-xl font-bold text-green-600">
                    {formatCurrency(asset.currentBookValue)}
                  </div>
                </div>
              </div>

              {/* Row 5: Usage Date (Right side only) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">تاريخ الاستخدام</div>
                  <div className="text-sm font-medium text-gray-900">{asset.usageDate}</div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-center gap-4 p-6 border-t border-gray-200 sticky bottom-0 bg-white">
          <button
            onClick={() => onNavigate('prev')}
            disabled={currentIndex === 0}
            className="w-12 h-12 bg-[#11383f] text-white rounded-lg flex items-center justify-center hover:bg-[#0f2f35] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="text-xl font-semibold text-gray-900 min-w-[60px] text-center">
            {currentIndex + 1}/{totalCount}
          </div>
          <button
            onClick={() => onNavigate('next')}
            disabled={currentIndex === totalCount - 1}
            className="w-12 h-12 bg-[#11383f] text-white rounded-lg flex items-center justify-center hover:bg-[#0f2f35] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
