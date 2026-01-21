import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ChevronDown, Paperclip, FileEdit, ArrowRight } from 'lucide-react';
import { buttonClasses } from '../../../styles';

export const AddEmployee: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [expandedSections, setExpandedSections] = useState({
    basicInfo: true,
    employmentInfo: true,
    contactInfo: true,
  });

  const isRTL = language === 'ar';

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/hr/employee-center')}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-medium text-gray-900">{t('hr.add_employees')}</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <Paperclip className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">{t('hr.add_attachments')}</span>
              <span className="px-2 py-0.5 bg-[#092e321f] text-[#0000005e] rounded text-sm">0</span>
            </button>
            <button className={buttonClasses.primary}>
              {t('hr.submit_request')}
            </button>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className="bg-white rounded-xl border border-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button
              onClick={() => toggleSection('basicInfo')}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  expandedSections.basicInfo ? '' : '-rotate-90'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium text-gray-900">{t('hr.basic_information')}</h2>
              <div className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg">
                <FileEdit className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>

          {expandedSections.basicInfo && (
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.first_name_ar')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder={t('hr.enter_first_name')}
                    dir="rtl"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.father_name_ar')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder={t('hr.enter_father_name')}
                    dir="rtl"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.grandfather_name_ar')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder={t('hr.enter_grandfather_name')}
                    dir="rtl"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.last_name_ar')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder={t('hr.enter_last_name')}
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.first_name_en')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.father_name_en')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    placeholder="Father Name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.grandfather_name_en')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    placeholder="Grandfather Name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.last_name_en')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Employment Information Section */}
        <div className="bg-white rounded-xl border border-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button
              onClick={() => toggleSection('employmentInfo')}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  expandedSections.employmentInfo ? '' : '-rotate-90'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium text-gray-900">
                {t('hr.employment_information')}
              </h2>
              <div className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg">
                <FileEdit className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>

          {expandedSections.employmentInfo && (
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.job_title')}</label>
                  <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right">
                    <option>{t('hr.select_job_title')}</option>
                    <option>مدير</option>
                    <option>موظف</option>
                    <option>محاسب</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.department')}</label>
                  <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right">
                    <option>{t('hr.select_department')}</option>
                    <option>قسم المالية</option>
                    <option>قسم التقنية</option>
                    <option>قسم الموارد البشرية</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.hire_date')}</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.basic_salary')}
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder="0.00"
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.contract_type')}
                  </label>
                  <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right">
                    <option>{t('hr.select_contract_type')}</option>
                    <option>دائم</option>
                    <option>مؤقت</option>
                    <option>محدد المدة</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.direct_manager')}
                  </label>
                  <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right">
                    <option>{t('hr.select_direct_manager')}</option>
                    <option>أحمد محمد</option>
                    <option>فاطمة خالد</option>
                    <option>محمد عبدالله</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.probation_period')}
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder="90"
                    dir="rtl"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.weekly_work_hours')}
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder="40"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Information Section */}
        <div className="bg-white rounded-xl border border-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button
              onClick={() => toggleSection('contactInfo')}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  expandedSections.contactInfo ? '' : '-rotate-90'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium text-gray-900">{t('hr.contact_information')}</h2>
              <div className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg">
                <FileEdit className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>

          {expandedSections.contactInfo && (
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.phone_number')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder="05xxxxxxxx"
                    dir="rtl"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.email')}</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.city')}</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder={t('hr.enter_city')}
                    dir="rtl"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.address')}</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    placeholder={t('hr.enter_address')}
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-4">
                <button
                  onClick={() => navigate('/hr/employee-center')}
                  className={buttonClasses.secondary + " text-xs"}
                >
                  {t('hr.cancel')}
                </button>
                <button className={buttonClasses.primary + " text-xs"}>
                  {t('hr.save_and_add')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
