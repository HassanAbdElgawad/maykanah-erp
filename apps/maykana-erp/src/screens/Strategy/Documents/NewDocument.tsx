import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight, ChevronDown, ChevronUp, Upload, Trash2, Paperclip } from 'lucide-react';

export function NewDocument() {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  
  const [openSections, setOpenSections] = useState({
    basicInfo: true,
    linkDocument: true,
    uploadFile: true,
    permissions: true,
  });

  const [permissions, setPermissions] = useState({
    public: true,
    allowDownload: true,
    allowEdit: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
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
                مستند جديد
              </h1>
            </div>

            {/* Left Side: Action Button */}
            <div className="flex items-center gap-2">
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
                المعلومات الأساسية
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم المستند
                  </label>
                  <input
                    type="text"
                    placeholder="TSK-025-2025"
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    علامة أو وسم (Tags)
                  </label>
                  <input
                    type="text"
                    placeholder="اسم الوحة ..."
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Link Document Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('linkDocument')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                ربط المستند
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
            {openSections.linkDocument ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {openSections.linkDocument && (
            <div className="p-4 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* Upload File Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('uploadFile')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تحميل الملف
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
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            {openSections.uploadFile ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {openSections.uploadFile && (
            <div className="p-4 border-t border-[#e2e2e2]">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-[#e2e2e2] rounded-lg p-8 text-center mb-4">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                  سحب وإفلات أو اختر ملف للتحميل
                </p>
              </div>

              {/* Uploaded File */}
              <div className="bg-[#fff5f5] border border-[#ffe0e0] rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded">
                      <Paperclip className="w-5 h-5 text-[#11383f]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        pdf.(SAB) يمكن تحويل بحمل
                      </p>
                      <p className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        455 بايت · تم 24 يناير 2025 - 09:23
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Permissions Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('permissions')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                الصلاحيات
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            {openSections.permissions ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {openSections.permissions && (
            <div className="p-4 border-t border-[#e2e2e2]">
              <div className="space-y-4">
                {/* Access Permission */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الوصول
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      عام
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={permissions.public}
                        onChange={() => togglePermission('public')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      <span className="ms-3 text-sm font-medium text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        نعم
                      </span>
                    </label>
                  </div>
                </div>

                {/* Download Permission */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    السماح بالتنزيل
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={permissions.allowDownload}
                      onChange={() => togglePermission('allowDownload')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    <span className="ms-3 text-sm font-medium text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      نعم
                    </span>
                  </label>
                </div>

                {/* Edit Permission */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    السماح بالتعديل
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={permissions.allowEdit}
                      onChange={() => togglePermission('allowEdit')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    <span className="ms-3 text-sm font-medium text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      نعم
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
