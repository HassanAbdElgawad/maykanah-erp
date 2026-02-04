import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export function NewStrategicPlan() {
  const navigate = useNavigate();
  const { dir } = useLanguage();

  const [openSections, setOpenSections] = useState({
    basicInfo: true,
    framework: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Layout>
      <div className="space-y-4" dir={dir}>
        {/* Header */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between">
            {/* Right Side: Back Button + Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#0e0d24]" />
              </button>
              <h1 className="text-xl font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                خطة جديدة
              </h1>
            </div>

            {/* Left Side: Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                أضف مرفقات
                <span className="flex items-center justify-center w-5 h-5 bg-[#11383f] text-white rounded text-xs font-semibold">
                  2
                </span>
              </Button>
              <Button className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                إرسال الطلب
              </Button>
            </div>
          </div>
        </div>

        {/* المعلومات الأساسية */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('basicInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                المعلومات الأساسية
              </span>
            </div>
            {openSections.basicInfo ? (
              <ChevronUp className="w-5 h-5 text-[#11383f]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#11383f]" />
            )}
          </button>

          {openSections.basicInfo && (
            <div className="p-6 pt-0 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* رقم الخطة */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    رقم الخطة
                  </label>
                  <input
                    type="text"
                    defaultValue="2025-PL-001"
                    className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                  />
                </div>

                {/* اسم الخطة */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم الخطة
                  </label>
                  <input
                    type="text"
                    placeholder="اسم الخطة ..."
                    className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                  />
                </div>

                {/* النموذج المستخدم */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    النموذج المستخدم
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>اختر النموذج المستخدم</option>
                    <option>بطاقة الأداء المتوازن (Balanced Scorecard)</option>
                    <option>نموذج التميز المؤسسي</option>
                  </select>
                </div>

                {/* التوجه الوطني */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    التوجه الوطني
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>اختر التوجه الوطني أو السياسة أو الرؤية</option>
                    <option>رؤية المملكة 2030</option>
                    <option>برنامج التحول الوطني</option>
                  </select>
                </div>

                {/* سنة البداية */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    سنة البداية
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>سنة البداية</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                  </select>
                </div>

                {/* سنة النهاية */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    سنة النهاية
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>سنة النهاية</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                  </select>
                </div>

                {/* مدير الخطة */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مدير الخطة
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>مدير الخطة</option>
                    <option>م. أحمد العرفاني</option>
                    <option>سارة الباجري</option>
                    <option>خالد الديومي</option>
                  </select>
                </div>

                {/* الفريق المسؤول */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الفريق المسؤول
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>اختر الفريق المسؤول</option>
                    <option>فريق التحول الرقمي</option>
                    <option>فريق التميز المؤسسي</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* الإطار الحقوقي للخطة */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('framework')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                الإطار الحقوقي للخطة
              </span>
            </div>
            {openSections.framework ? (
              <ChevronUp className="w-5 h-5 text-[#11383f]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#11383f]" />
            )}
          </button>

          {openSections.framework && (
            <div className="p-6 pt-0 border-t border-[#e2e2e2]">
              <div className="space-y-6">
                {/* الرسالة */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الرسالة
                  </label>
                  <textarea
                    rows={4}
                    placeholder="الرسالة هنا ..."
                    className="w-full px-4 py-3 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                {/* الرؤية */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الرؤية
                  </label>
                  <textarea
                    rows={4}
                    placeholder="الرؤية هنا ..."
                    className="w-full px-4 py-3 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                {/* القيم */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    القيم
                  </label>
                  <textarea
                    rows={4}
                    placeholder="القيم هنا ..."
                    className="w-full px-4 py-3 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
