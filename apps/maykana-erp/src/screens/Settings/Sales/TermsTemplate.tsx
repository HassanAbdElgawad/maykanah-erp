import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SideDrawer } from '@/components/ui/SideDrawer';
import InitialFilters from '@/components/InitialFilters';
import { ArrowRight, Filter, Download, MoreVertical, ChevronDown } from 'lucide-react';
import { buttonClasses } from '@/styles';
import { getTermsTemplatesSampleData, type TermTemplate } from '@/data/settings/terms-template.data';

export const TermsTemplate = (): JSX.Element => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<TermTemplate[]>(() => getTermsTemplatesSampleData());

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<TermTemplate | null>(null);
  const [formData, setFormData] = useState({
    templateName: '',
    description: '',
    content: '',
    appliedTo: '',
    isActive: true,
  });

  const handleAddNew = () => {
    setSelectedTemplate(null);
    setFormData({
      templateName: '',
      description: '',
      content: '',
      appliedTo: '',
      isActive: true,
    });
    setIsDrawerOpen(true);
  };

  const handleEdit = (template: TermTemplate) => {
    setSelectedTemplate(template);
    setFormData({
      templateName: template.templateName,
      description: template.description,
      content: template.content,
      appliedTo: template.appliedTo,
      isActive: template.isActive,
    });
    setIsDrawerOpen(true);
  };

  const handleSave = () => {
    if (selectedTemplate) {
      // Edit existing
      setTemplates(
        templates.map((t) => (t.id === selectedTemplate.id ? { ...t, ...formData } : t))
      );
    } else {
      // Add new
      const newTemplate: TermTemplate = {
        id: String(templates.length + 1),
        ...formData,
      };
      setTemplates([...templates, newTemplate]);
    }
    setIsDrawerOpen(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section with InitialFilters */}
        <InitialFilters>
          {/* Right side - Back button */}
          <Button
            variant="outline"
            onClick={() => navigate('/settings?module=sales')}
            className="bg-white hover:bg-gray-50 px-4 py-2 h-[43px] rounded-lg gap-2 border-0 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="text-base">قالب الشروط والأحكام</span>
          </Button>

          {/* Left side - Action buttons */}
          <div className="flex gap-2">
            <button className={buttonClasses.secondary}>
              <Download className="h-4 w-4" />
              <span>تحميل</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className={buttonClasses.secondary}>
              <Filter className="h-4 w-4" />
              <span>فلتر</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className={buttonClasses.primary} onClick={handleAddNew}>
              إضافة شروط وأحكام
            </button>
          </div>
        </InitialFilters>

        {/* Main Content Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم القالب
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الوصف
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحتوى
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تطبيق على
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحالة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {templates.map((template) => (
                  <tr key={template.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {template.templateName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {template.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {template.content}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {template.appliedTo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                          template.isActive
                            ? 'text-green-600 bg-green-50'
                            : 'text-red-600 bg-red-50'
                        }`}
                      >
                        {template.isActive ? 'نشط' : 'معطل'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleEdit(template)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Add/Edit Drawer */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="إضافة الشروط والأحكام"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              إغلاق
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg bg-[#0c4749] hover:bg-[#093738] text-white transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              حفظ
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          {/* Template Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              اسم القالب
            </label>
            <input
              type="text"
              value={formData.templateName}
              onChange={(e) => handleInputChange('templateName', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
              placeholder="اسم القالب"
            />
          </div>

          {/* Content Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              المحتوى
            </label>
            <input
              type="text"
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
              placeholder="المحتوى"
            />
          </div>

          {/* Disable Option */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              خيار التعطيل
            </label>
            <div className="flex items-center gap-3">
              <label className="flex-1 flex items-center gap-2 cursor-pointer px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="isActive"
                  checked={formData.isActive === true}
                  onChange={() => handleInputChange('isActive', true)}
                  className="w-4 h-4 accent-[#2F7E79] cursor-pointer"
                />
                <span className="text-sm text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  نعم
                </span>
              </label>
              <label className="flex-1 flex items-center gap-2 cursor-pointer px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="isActive"
                  checked={formData.isActive === false}
                  onChange={() => handleInputChange('isActive', false)}
                  className="w-4 h-4 accent-[#2F7E79] cursor-pointer"
                />
                <span className="text-sm text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  لا
                </span>
              </label>
            </div>
          </div>

          {/* Description with Rich Text Editor */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              الوصف
            </label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {/* Text Editor Toolbar */}
              <div className="bg-gray-50 border-b border-gray-300 px-3 py-2 flex items-center gap-2">
                <button className="p-1.5 hover:bg-gray-200 rounded" title="Bold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3h5a4 4 0 0 1 3 6.766A4.5 4.5 0 0 1 10.5 17H5V3zm3 6h2a2 2 0 1 0 0-4H8v4zm0 2v4h2.5a2.5 2.5 0 0 0 0-5H8z" />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-gray-200 rounded" title="Italic">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3h8v2h-3l-3 10h3v2H5v-2h3l3-10H8V3z" />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-gray-200 rounded" title="Underline">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 3v7a4 4 0 0 0 8 0V3h-2v7a2 2 0 1 1-4 0V3H6zM4 17h12v2H4v-2z" />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-gray-200 rounded" title="Link">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" />
                  </svg>
                </button>
                <div className="w-px h-5 bg-gray-300"></div>
                <button className="p-1.5 hover:bg-gray-200 rounded" title="Align Right">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-gray-200 rounded" title="Align Center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm-3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-gray-200 rounded" title="Align Left">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-gray-200 rounded" title="Justify">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    />
                  </svg>
                </button>
              </div>
              {/* Textarea */}
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={6}
                className="w-full px-4 py-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none resize-none"
                placeholder="توضيح حقوق الملكية الفكرية للمحتوى الموجود على الموقع أو التطبيق"
              />
            </div>
          </div>

          {/* Applied To */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              مطبقة على
            </label>
            <select
              value={formData.appliedTo}
              onChange={(e) => handleInputChange('appliedTo', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
            >
              <option value="">مطبقة علي</option>
              <option value="sales">المبيعات</option>
              <option value="purchases">المشتريات</option>
            </select>
          </div>
        </div>
      </SideDrawer>
    </Layout>
  );
};
