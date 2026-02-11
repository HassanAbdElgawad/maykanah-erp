import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Calendar, Paperclip } from 'lucide-react';
import { buttonClasses } from '../../../styles';

export const NewStartWorkRequest: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  // Get stored HR view mode for back navigation
  const getBackToList = () => '/hr/employee/start-work';

  const [formData, setFormData] = useState({
    employeeName: 'الموظف',
    employeeNumber: '',
    department: '',
    startDate: '',
    notes: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    navigate(getBackToList());
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(getBackToList())}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <h1
              className="text-xl font-medium text-gray-900"
              style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica' }}
            >
              {t('hr.emp.start_work')}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 h-[43px] px-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Paperclip className="w-4 h-4 text-[#092e32]" />
              <span
                className="text-base font-normal text-[#092e32]"
                style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica' }}
              >
                {t('hr.add_attachments')}
              </span>
              <span className="px-2 py-0.5 text-xs bg-[#092e321f] rounded text-[#0000005e]">0</span>
            </button>
            <button type="submit" className={buttonClasses.primary} onClick={handleSubmit}>
              {t('hr.submit_request')}
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 bg-[#f0f4f7] rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2
                  className="text-xl font-medium text-black"
                  style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica' }}
                >
                  {t('hr.basic_information')}
                </h2>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 bg-[#f0f4f7] rounded-lg"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
                {/* Employee Name (Disabled) */}
                <div className="space-y-1.5 opacity-60">
                  <label
                    className="block text-base font-normal text-[#00000099]"
                    style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                  >
                    {t('hr.employee_name')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="employeeName"
                      value={formData.employeeName}
                      disabled
                      className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-black text-base text-right"
                      style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                    />
                  </div>
                </div>

                {/* Employee Number (Disabled) */}
                <div className="space-y-1.5 opacity-60">
                  <label
                    className="block text-base font-normal text-[#00000099]"
                    style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                  >
                    رقم الموظف
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="employeeNumber"
                      value={formData.employeeNumber}
                      disabled
                      placeholder="رقم الموظف"
                      className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-black text-base text-right"
                      style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                    />
                  </div>
                </div>

                {/* Department */}
                <div className="space-y-1.5">
                  <label
                    className="block text-base font-normal text-[#00000099]"
                    style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                  >
                    {t('hr.department')}
                  </label>
                  <div className="relative">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-black text-base text-right appearance-none"
                      style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                      required
                    >
                      <option value="">{t('hr.select_department')}</option>
                      <option value="it">تقنية المعلومات</option>
                      <option value="hr">الموارد البشرية</option>
                      <option value="sales">المبيعات</option>
                      <option value="marketing">التسويق</option>
                      <option value="finance">المالية</option>
                    </select>
                  </div>
                </div>

                {/* Start Date */}
                <div className="space-y-1.5">
                  <label
                    className="block text-base font-normal text-[#00000099]"
                    style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                  >
                    {t('hr.work_start_date')}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-black text-base text-right"
                      style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                      required
                    />
                    <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-3.5 space-y-1.5">
                <label
                  className="block text-base font-normal text-[#00000099]"
                  style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                >
                  {t('hr.notes')}
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder={t('hr.enter_notes')}
                  rows={3}
                  className="w-full px-2.5 py-2 bg-white rounded-lg border border-[#cfcfcf] text-black text-base text-right resize-none"
                  style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica', direction: 'rtl' }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
