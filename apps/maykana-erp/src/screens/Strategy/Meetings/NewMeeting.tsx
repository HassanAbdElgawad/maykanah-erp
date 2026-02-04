import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export function NewMeeting() {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  
  const [openSections, setOpenSections] = useState({
    basicInfo: true,
    linkMeeting: true,
    attendees: true,
    minutes: true,
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
                اجتماع جديد
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

        {/* Basic Information Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('basicInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                معلومات الاجتماع الأساسية
              </span>
              <svg
                className="w-5 h-5 text-[#11383f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            {openSections.basicInfo ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {openSections.basicInfo && (
            <div className="p-4 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    عنوان الاجتماع
                  </label>
                  <input
                    type="text"
                    placeholder="TSK-025-2025"
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نوع الاجتماع
                  </label>
                  <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    <option>اختر نوع الاجتماع</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تاريخ الاجتماع
                  </label>
                  <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    <option>اختر تاريخ الاجتماع</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الوقت
                  </label>
                  <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    <option>اختر الوقت</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المكان
                  </label>
                  <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    <option>اختر المكان</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الميسر
                  </label>
                  <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    <option>اختر الميسر</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Link Meeting Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('linkMeeting')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                ربط الاجتماع
              </span>
              <svg
                className="w-5 h-5 text-[#11383f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            {openSections.linkMeeting ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {openSections.linkMeeting && (
            <div className="p-4 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نوع المكان
                  </label>
                  <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    <option>اختر نوع المكان</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم المكان
                  </label>
                  <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    <option>اختر اسم المكان</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Attendees Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('attendees')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                الحضور
              </span>
              <svg
                className="w-5 h-5 text-[#11383f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            {openSections.attendees ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {openSections.attendees && (
            <div className="p-4 border-t border-[#e2e2e2]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إضافة الحضور
                  </span>
                </div>
                <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  <option>اختر الحضور</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Meeting Minutes Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('minutes')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                محضر الاجتماع
              </span>
              <svg
                className="w-5 h-5 text-[#11383f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            {openSections.minutes ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {openSections.minutes && (
            <div className="p-4 border-t border-[#e2e2e2]">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  المحضر
                </label>
                <textarea
                  rows={8}
                  placeholder="• مراجعة التقدم في تطوير الواجهة&#10;• مناقشة تأخر ربط مع الأنظمة الحكومية&#10;• الاتفاق على جلسة تعويض الوقت"
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] resize-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
