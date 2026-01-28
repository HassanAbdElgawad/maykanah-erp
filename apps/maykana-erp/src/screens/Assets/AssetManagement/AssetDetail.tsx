import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { assetsData } from '../../../data/assets.data';

export function AssetDetail() {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  const { id } = useParams();

  // Get asset data based on ID
  const assetData = assetsData.find((asset) => asset.id === id);

  // If asset not found, show error message
  if (!assetData) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-96">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">الأصل غير موجود</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-[#11383f] text-white rounded-lg hover:bg-[#0f2f35]"
          >
            العودة إلى الصفحة السابقة
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate(-1)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              تفاصيل الأصل - {assetData.name}
            </h1>
          </div>
        </div>

        {/* Asset Details */}
        <div className="grid grid-cols-3 gap-4">
          {/* Asset Image */}
          <div className="col-span-1 bg-white rounded-xl border border-[#e2e2e2] p-6">
            <img
              src={assetData.image}
              alt={assetData.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{assetData.name}</h3>
              <p className="text-sm text-gray-600">{assetData.code}</p>
            </div>
          </div>

          {/* Asset Information */}
          <div className="col-span-2 bg-white rounded-xl border border-[#e2e2e2] p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">معلومات الأصل</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">التصنيف</label>
                <p className="text-base text-gray-900">{assetData.category}</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">الحالة</label>
                <p className="text-base text-gray-900">{assetData.status}</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">الموقع</label>
                <p className="text-base text-gray-900">{assetData.location}</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">الموظف المسؤول</label>
                <p className="text-base text-gray-900">{assetData.employee}</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">تاريخ الشراء</label>
                <p className="text-base text-gray-900">{assetData.purchaseDate}</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">سعر الشراء</label>
                <p className="text-base text-gray-900">{assetData.purchasePrice} ريال</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">القيمة الحالية</label>
                <p className="text-base text-gray-900">{assetData.currentValue} ريال</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">كود الأصل</label>
                <p className="text-base text-gray-900">{assetData.code}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">معلومات إضافية</h2>
          <p className="text-gray-600">
            هذا الأصل تحت مسؤولية {assetData.employee} ويقع في {assetData.location}.
            تم شراؤه بتاريخ {assetData.purchaseDate} بقيمة {assetData.purchasePrice} ريال سعودي.
          </p>
        </div>
      </div>
    </Layout>
  );
}
