import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ChevronDown, ChevronUp, ChevronLeft, ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/styles/components/buttons';

export const AssetLocationForm = (): JSX.Element => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    definition: true,
    additionalInfo: false,
  });

  const toggleSection = (section: 'definition' | 'additionalInfo') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
    navigate('/settings/assets/asset-locations');
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/settings/assets/asset-locations')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="رجوع"
            >
              <ArrowRight className="w-5 h-5 text-[#093738]" />
            </button>
            <h1 className="text-2xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              موقع جديد
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 h-[38px] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              onClick={() => navigate('/settings/assets/asset-locations')}
            >
              إضافة مرفقات
              <span className="mr-2 text-xs text-gray-500">(0)</span>
            </button>
            <button
              className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
              onClick={handleSubmit}
            >
              <span>إرسال الطلب</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-[#e2e2e2]">
          {/* Definition Section */}
          <div className="border-b border-[#e2e2e2]">
            <button
              onClick={() => toggleSection('definition')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                التعريف
              </span>
              {expandedSections.definition ? (
                <ChevronUp className="w-5 h-5 text-[#093738]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#093738]" />
              )}
            </button>
            {expandedSections.definition && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* كود الموقع */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      كود الموقع
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      placeholder="أدخل كود الموقع"
                    />
                  </div>

                  {/* اسم الموقع */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      اسم الموقع
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      placeholder="أدخل اسم الموقع"
                    />
                  </div>

                  {/* المدينة */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المدينة
                    </label>
                    <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <option value="">اختر المدينة</option>
                      <option value="riyadh">الرياض</option>
                      <option value="jeddah">جدة</option>
                      <option value="dammam">الدمام</option>
                      <option value="makkah">مكة</option>
                      <option value="madinah">المدينة</option>
                    </select>
                  </div>

                  {/* الفرع */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الفرع
                    </label>
                    <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <option value="">اختر الفرع</option>
                      <option value="main">الفرع الرئيسي</option>
                      <option value="jeddah-main">جدة الرئيسي</option>
                      <option value="north">الفرع الشمالي</option>
                      <option value="south">الفرع الجنوبي</option>
                    </select>
                  </div>

                  {/* القسم */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      القسم
                    </label>
                    <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <option value="">اختر القسم</option>
                      <option value="it">تقنية المعلومات</option>
                      <option value="finance">المالية</option>
                      <option value="operations">التشغيل</option>
                      <option value="hr">الموارد البشرية</option>
                      <option value="marketing">التسويق</option>
                    </select>
                  </div>

                  {/* الحالة */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </label>
                    <div className="flex items-center h-[42px]">
                      <div className="inline-flex px-4 py-2 bg-green-100 text-green-600 rounded-lg text-sm font-medium">
                        نشط
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Additional Info Section */}
          <div>
            <button
              onClick={() => toggleSection('additionalInfo')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                معلومات إضافية
              </span>
              {expandedSections.additionalInfo ? (
                <ChevronUp className="w-5 h-5 text-[#093738]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#093738]" />
              )}
            </button>
            {expandedSections.additionalInfo && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* ملاحظات */}
                  <div className="md:col-span-4">
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      ملاحظات
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      placeholder="أدخل ملاحظات إضافية..."
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
