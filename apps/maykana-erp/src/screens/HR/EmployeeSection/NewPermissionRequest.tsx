import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ArrowLeft, Paperclip, ChevronUp } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const NewPermissionRequest: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState({
    employee: 'ابراهيم المالكي',
    remainingBalance: '15 يوم',
    date: '',
    fromTime: '',
    toTime: '',
    reason: '',
  });

  const [employeeInfoOpen, setEmployeeInfoOpen] = useState(true);
  const [otherInfoOpen, setOtherInfoOpen] = useState(true);

  const getBackToList = () => '/hr/employee/leaves-attendance?tab=permission';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Permission Request:', formData);
    navigate(getBackToList());
  };

  return (
    <Layout>
      <div style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(getBackToList())}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <h1 className="text-xl font-medium text-gray-900">{t('hr.emp_permission_attendance')}</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <Paperclip className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">{t('hr.add_attachments')}</span>
            </button>

            <button
              onClick={handleSubmit}
              className={buttonClasses.primary}
            >
              {t('hr.submit_request')}
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Section 1: معلومات الموظف */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setEmployeeInfoOpen(!employeeInfoOpen)}
                className="flex items-center justify-center w-8 h-8 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ChevronUp className={`w-4 h-4 text-gray-600 transition-transform ${!employeeInfoOpen ? 'rotate-180' : ''}`} />
              </button>
              <h2 className="text-lg font-medium text-gray-900">{t('hr.employee_information')}</h2>
            </div>

            {employeeInfoOpen && (
              <div className="grid grid-cols-2 gap-6">
                {/* Employee */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.employee')}</label>
                  <input
                    type="text"
                    value={formData.employee}
                    onChange={(e) => setFormData({ ...formData, employee: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-white"
                    dir="rtl"
                    placeholder={t('hr.employee')}
                  />
                </div>

                {/* Remaining Leave Balance */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.remaining_leave_balance')}</label>
                  <input
                    type="text"
                    value={formData.remainingBalance}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-gray-50"
                    disabled
                    dir="rtl"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Section 2: معلومات أخرى */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setOtherInfoOpen(!otherInfoOpen)}
                className="flex items-center justify-center w-8 h-8 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ChevronUp className={`w-4 h-4 text-gray-600 transition-transform ${!otherInfoOpen ? 'rotate-180' : ''}`} />
              </button>
              <h2 className="text-lg font-medium text-gray-900">{t('hr.other_information')}</h2>
            </div>

            {otherInfoOpen && (
              <div className="grid grid-cols-4 gap-6">
                {/* Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.date')}</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    dir="rtl"
                    placeholder={t('hr.date')}
                    required
                  />
                </div>

                {/* From Time */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.from_time')}</label>
                  <input
                    type="time"
                    value={formData.fromTime}
                    onChange={(e) => setFormData({ ...formData, fromTime: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    dir="rtl"
                    placeholder={t('hr.from_time')}
                    required
                  />
                </div>

                {/* To Time */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.to_time')}</label>
                  <input
                    type="time"
                    value={formData.toTime}
                    onChange={(e) => setFormData({ ...formData, toTime: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    dir="rtl"
                    placeholder={t('hr.to_time')}
                    required
                  />
                </div>

                {/* Reason */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.reason')}</label>
                  <input
                    type="text"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-white"
                    dir="rtl"
                    placeholder={t('hr.reason')}
                    required
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
