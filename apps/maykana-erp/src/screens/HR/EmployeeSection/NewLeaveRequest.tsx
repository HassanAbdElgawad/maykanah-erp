import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ArrowLeft, Paperclip, ChevronUp } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const NewLeaveRequest: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState({
    employeeName: '',
    leaveBalanceBefore: '15 يوم',
    leaveBalanceAfter: '12 يوم',
    leaveType: '',
    startDate: '',
    endDate: '',
    substituteEmployee: '',
    notes: '',
  });

  const [employeeInfoOpen, setEmployeeInfoOpen] = useState(true);
  const [otherInfoOpen, setOtherInfoOpen] = useState(true);

  const getBackToList = () => '/hr/employee/leaves-attendance?tab=leaves-attendance';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Leave Request:', formData);
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
            <h1 className="text-xl font-medium text-gray-900">{t('hr.add_leave')}</h1>
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
              <div className="grid grid-cols-3 gap-6">
                {/* Employee Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.employee')}</label>
                  <input
                    type="text"
                    value={formData.employeeName}
                    onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-white"
                    dir="rtl"
                    placeholder={t('hr.employee')}
                  />
                </div>

                {/* Leave Balance Before */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.leave_balance_before')}</label>
                  <input
                    type="text"
                    value={formData.leaveBalanceBefore}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-gray-50"
                    disabled
                    dir="rtl"
                  />
                </div>

                {/* Leave Balance After */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.leave_balance_after')}</label>
                  <input
                    type="text"
                    value={formData.leaveBalanceAfter}
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
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-6">
                  {/* Leave Type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-base text-gray-600 text-right">{t('hr.leave_type')}</label>
                    <select
                      value={formData.leaveType}
                      onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-white"
                      dir="rtl"
                      required
                    >
                      <option value="">{t('hr.leave_type')}</option>
                      <option value="annual">إجازة سنوية</option>
                      <option value="sick">إجازة مرضية</option>
                      <option value="emergency">إجازة طارئة</option>
                      <option value="unpaid">إجازة بدون راتب</option>
                    </select>
                  </div>

                  {/* Start Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-base text-gray-600 text-right">{t('hr.start_date')}</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                      dir="rtl"
                      placeholder={t('hr.start_date')}
                      required
                    />
                  </div>

                  {/* End Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-base text-gray-600 text-right">{t('hr.end_date')}</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                      dir="rtl"
                      placeholder={t('hr.end_date')}
                      required
                    />
                  </div>

                  {/* Substitute Employee */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-base text-gray-600 text-right">{t('hr.substitute_employee')}</label>
                    <select
                      value={formData.substituteEmployee}
                      onChange={(e) => setFormData({ ...formData, substituteEmployee: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-white"
                      dir="rtl"
                    >
                      <option value="">{t('hr.substitute_employee')}</option>
                      <option value="emp1">محمد أحمد</option>
                      <option value="emp2">سارة خالد</option>
                      <option value="emp3">عمر فهد</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.notes')}</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right min-h-[80px]"
                    dir="rtl"
                    placeholder={t('hr.notes')}
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
