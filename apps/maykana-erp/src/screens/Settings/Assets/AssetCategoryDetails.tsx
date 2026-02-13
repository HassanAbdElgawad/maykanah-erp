import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { buttonClasses } from '@/styles';
import { getAssetCategoryById } from '@/data/settings/asset-categories.data';

export const AssetCategoryDetails = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const category = useMemo(() => (id ? getAssetCategoryById(id) : null), [id]);

  const [expandedSections, setExpandedSections] = useState({
    definition: true,
    accounts: false,
    depreciation: false,
  });

  const toggleSection = (section: 'definition' | 'accounts' | 'depreciation') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!category) {
    return (
      <Layout>
        <div className="text-center text-gray-500">الفئة غير موجودة</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            تفاصيل فئة الأصول - {category.name}
          </h1>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 h-[38px] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              onClick={() => navigate('/settings/assets/asset-categories')}
            >
              إضافة مرفقات
              <span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs bg-gray-200 rounded-full">
                0
              </span>
            </button>
            <button
              className={buttonClasses.primary}
              onClick={() => navigate('/settings/assets/asset-categories')}
              style={{ height: '38px', fontSize: '14px' }}
            >
              عمليات
            </button>
          </div>
        </div>

        {/* Definition Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('definition')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              بيانات تعريف الفئة
            </h2>
            {expandedSections.definition ? (
              <ChevronUp className="w-5 h-5 text-[#093738]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#093738]" />
            )}
          </button>

          {expandedSections.definition && (
            <div className="px-6 pb-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    كود الفئة
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.code}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    اسم الفئة
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.name}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    طريقة الإهلاك
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.depreciationMethod}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    العمر الافتراضي
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.usefulLife}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    حساب الأصل
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.assetAccount}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    القيمة المتبقية(% أو SAR)
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.residualValue}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    الحالة
                  </label>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-600 rounded-lg text-sm font-medium">
                    نشطة
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Accounting Accounts Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('accounts')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              الحسابات المحاسبية
            </h2>
            {expandedSections.accounts ? (
              <ChevronUp className="w-5 h-5 text-[#093738]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#093738]" />
            )}
          </button>

          {expandedSections.accounts && (
            <div className="px-6 pb-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    حساب الأصل الثابت
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.assetAccountName}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    حساب مجمع الإهلاك
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.accumulatedDepreciationAccount}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    حساب مصروف الإهلاك
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.depreciationExpenseAccount}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Depreciation Policy Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('depreciation')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              سياسة الإهلاك
            </h2>
            {expandedSections.depreciation ? (
              <ChevronUp className="w-5 h-5 text-[#093738]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#093738]" />
            )}
          </button>

          {expandedSections.depreciation && (
            <div className="px-6 pb-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    طريقة الإهلاك
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الإهلاك الخطي
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    العمر الافتراضي(سنوات أو أشهر)
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.usefulLife}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    عدد دفعات الإهلاك
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.depreciationPeriods}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    نسبة مئوية
                  </label>
                  <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {category.depreciationRate}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* AI Assistant Button */}
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2.5 rounded-lg text-white text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            style={{
              background: 'linear-gradient(90deg, #60A5FA 0%, #A78BFA 100%)',
            }}
          >
            المساعد الذكي ✨
          </button>
        </div>
      </div>
    </Layout>
  );
};
