import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { ChevronDown, ChevronUp, ChevronLeft, ArrowRight } from 'lucide-react';
import { buttonClasses } from '../../styles';

export const AssetCategoryForm = (): JSX.Element => {
  const navigate = useNavigate();
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

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
    navigate('/settings/asset-categories');
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/settings/assets/asset-categories')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="رجوع"
            >
              <ArrowRight className="w-5 h-5 text-[#093738]" />
            </button>
            <h1 className="text-2xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              فئة جديدة
            </h1>
          </div>
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
              onClick={handleSubmit}
              style={{ height: '38px', fontSize: '14px' }}
            >
              إرسال الطلب
              <ChevronLeft className="h-3.5 w-3.5" />
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
            <div className="px-6 pb-6 space-y-4 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    كود الفئة
                  </label>
                  <input
                    type="text"
                    placeholder="CAT-FA-001"
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    اسم الفئة
                  </label>
                  <input
                    type="text"
                    placeholder="أجهزة الحاسوب"
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    طريقة الإهلاك
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">اختر طريقة الإهلاك</option>
                    <option value="القسط الثابت">القسط الثابت</option>
                    <option value="الرصيد المتناقص">الرصيد المتناقص</option>
                    <option value="مجموع أرقام السنوات">مجموع أرقام السنوات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    العمر الافتراضي
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">اختر العمر الافتراضي</option>
                    <option value="3">3 سنوات</option>
                    <option value="5">5 سنوات</option>
                    <option value="10">10 سنوات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    الحالة
                  </label>
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-600 rounded-lg text-sm font-medium">
                    نشيط
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    القيمة المتبقية(% أو SAR)
                  </label>
                  <input
                    type="text"
                    placeholder="10%"
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    حساب الأصل
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">اختر حساب</option>
                    <option value="150101">150101 - أجهزة وتقنية المعلومات</option>
                    <option value="150201">150201 - الأثاث المكتبي</option>
                    <option value="150301">150301 - المركبات</option>
                  </select>
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
            <div className="px-6 pb-6 space-y-4 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    حساب الأصل الثابت
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">اختر حساب</option>
                    <option value="150101">150101 - أجهزة وتقنية المعلومات</option>
                    <option value="150201">150201 - الأثاث المكتبي</option>
                    <option value="150301">150301 - المركبات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    حساب مجمع الإهلاك
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">اختر حساب</option>
                    <option value="160101">160101 - مجمع إهلاك الأجهزة</option>
                    <option value="160201">160201 - مجمع إهلاك الأثاث</option>
                    <option value="160301">160301 - مجمع إهلاك المركبات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    حساب مصروف الإهلاك
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">اختر حساب</option>
                    <option value="510101">510101 - مصروف إهلاك الأجهزة</option>
                    <option value="510201">510201 - مصروف إهلاك الأثاث</option>
                    <option value="510301">510301 - مصروف إهلاك المركبات</option>
                  </select>
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
            <div className="px-6 pb-6 space-y-4 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    طريقة الإهلاك
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="القسط الثابت">أجهزة وتقنية المعلومات</option>
                    <option value="الرصيد المتناقص">الرصيد المتناقص</option>
                    <option value="مجموع أرقام السنوات">مجموع أرقام السنوات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    العمر الافتراضي
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">اختر العمر الافتراضي</option>
                    <option value="3">3 سنوات</option>
                    <option value="5">5 سنوات</option>
                    <option value="10">10 سنوات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                    عدد دفعات الإهلاك
                  </label>
                  <select
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="60">60</option>
                    <option value="48">48</option>
                    <option value="36">36</option>
                    <option value="24">24</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                  نسبة مئوية
                </label>
                <div className="relative">
                  <input
                    type="number"
                    defaultValue="20"
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#00000099]">
                    %
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
