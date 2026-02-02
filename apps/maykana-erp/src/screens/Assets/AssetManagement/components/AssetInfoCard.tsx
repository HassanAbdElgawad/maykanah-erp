import { TogglerWithLabel } from '../../../../components/ui/TogglerWithLabel';
import { AssetInfoCardProps } from './types';
import { AssetImageSlider } from './AssetImageSlider';

export function AssetInfoCard({
  assetData,
  isActive,
  onActiveChange,
  formatCurrency,
}: AssetInfoCardProps) {
  const images = [
    assetData.image,
    'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=800&fit=crop',
  ];

  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Image Section with Slider */}
        <div className="col-span-3">
          <AssetImageSlider images={images} assetName={assetData.name} />
        </div>

        {/* Details Section */}
        <div className="col-span-9 space-y-4">
          {/* Row 1: اسم الأصل، كود الأصل، الحالة */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">اسم الأصل</div>
              <div className="text-base font-semibold text-gray-900">{assetData.name}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">كود الأصل</div>
              <div className="text-base font-bold text-gray-900">{assetData.code}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">الحالة</div>
              <TogglerWithLabel
                isActive={isActive}
                onToggle={() => onActiveChange(!isActive)}
                activeLabel="مُفعل"
                inactiveLabel="غير مُفعل"
              />
            </div>
          </div>

          {/* Row 2: حالة الإهلاك، القيمة الأصلية، القيمة الحالية */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">حالة الإهلاك</div>
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                {assetData.depreciationType}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">القيمة الأصلية</div>
              <div className="text-sm font-bold text-gray-900">
                {formatCurrency(assetData.originalValue)}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">القيمة الحالية</div>
              <div className="text-sm font-bold text-gray-900">
                {formatCurrency(assetData.currentValue)}
              </div>
            </div>
          </div>

          {/* Row 3: نسبة الاستهلاك، العهدة، تاريخ الاستخدام */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-gray-500 mb-1.5">نسبة الاستهلاك</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#11383f] h-2 rounded-full"
                    style={{ width: `${assetData.depreciationRate}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {assetData.depreciationRate}%
                </span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">العهدة</div>
              <div className="text-sm text-gray-900">{assetData.custodyHolder}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">تاريخ الاستخدام</div>
              <div className="text-sm text-gray-900">{assetData.usageDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
