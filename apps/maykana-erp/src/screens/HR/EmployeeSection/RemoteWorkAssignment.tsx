import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { AdvancedTable } from '../../../components/ui/Table';
import { SideDrawer } from '../../../components/ui/SideDrawer';
import { buttonClasses } from '../../../styles';
import { Filter, Download, ArrowLeft, ArrowRight } from 'lucide-react';

export const RemoteWorkAssignment: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState({
    jobTitle: '',
    destination: '',
    department: '',
    startDate: '',
    endDate: '',
    reason: '',
    policyReference: '',
    notes: '',
  });

  const getBackPath = () => {
    const storedMode = localStorage.getItem('hrViewMode') || 'employee';
    return `/hr?mode=${storedMode}`;
  };

  const handleSubmit = () => {
    console.log('Remote Work Assignment:', formData);
    setIsSidebarOpen(false);
    setFormData({
      jobTitle: '',
      destination: '',
      department: '',
      startDate: '',
      endDate: '',
      reason: '',
      policyReference: '',
      notes: '',
    });
  };


  // Mock data
  const requests = [
    {
      id: 1,
      availableDays: '5 أيام',
      date: '9,3,4 - 12 - 2023',
      reason: 'هنا تكتب السبب العين',
      status: 'approved',
    },
    {
      id: 2,
      availableDays: '5 أيام',
      date: '9,3,4 - 12 - 2023',
      reason: 'هنا تكتب السبب العين',
      status: 'approved',
    },
    {
      id: 3,
      availableDays: '5 أيام',
      date: '9,3,4 - 12 - 2023',
      reason: 'هنا تكتب السبب العين',
      status: 'rejected',
    },
    {
      id: 4,
      availableDays: '5 أيام',
      date: '9,3,4 - 12 - 2023',
      reason: 'هنا تكتب السبب العين',
      status: 'approved',
    },
  ];

  const columns = [
    {
      key: 'availableDays',
      label: t('hr.available_days'),
      align: 'right' as const,
    },
    {
      key: 'date',
      label: t('hr.date'),
      align: 'right' as const,
    },
    {
      key: 'reason',
      label: t('hr.reason'),
      align: 'right' as const,
    },
    {
      key: 'status',
      label: t('hr.request_status'),
      align: 'right' as const,
      render: (row: any) => {
        const statusConfig: Record<string, { label: string; color: string }> = {
          pending: { label: t('hr.pending'), color: 'bg-orange-100 text-orange-800' },
          approved: { label: t('hr.approved'), color: 'bg-green-100 text-green-800' },
          rejected: { label: t('hr.rejected'), color: 'bg-red-100 text-red-800' },
        };
        const config = statusConfig[row.status] || statusConfig.pending;
        return (
          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${config.color}`}>
            {config.label}
          </span>
        );
      },
    },
  ];

  return (
    <Layout>
      <div style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(getBackPath())}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <h1 className="text-xl font-medium text-gray-900">
              {t('hr.emp.remote_work_assignment')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className={buttonClasses.secondary}>
              <Download className="w-4 h-4" />
              {t('hr.download')}
            </button>
            <button className={buttonClasses.secondary}>
              <Filter className="w-4 h-4" />
              {t('hr.filter')}
            </button>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className={buttonClasses.primary}
            >
              {t('hr.new_request')}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="rounded-xl">
          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200">
            <AdvancedTable columns={columns} data={requests} emptyMessage={t('common.no_data')} />
          </div>

          {/* Pagination */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <button className={buttonClasses.secondary + ' text-xs'}>{t('hr.next')}</button>
              <div className="flex items-center gap-2">
                <button className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}>
                  3
                </button>
                <button className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}>
                  2
                </button>
                <button className={buttonClasses.primary + ' min-w-[40px] h-10 text-xs'}>
                  1
                </button>
              </div>
              <button className={buttonClasses.secondary + ' text-xs'}>{t('hr.previous')}</button>
            </div>
          </div>
        </div>

        {/* Side Drawer for New Request */}
        <SideDrawer
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          title={t('hr.new_remote_work_assignment_request')}
          footer={
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                {t('common.close')}
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg bg-[#0c4749] hover:bg-[#093738] text-white transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                {t('common.save')}
              </button>
            </div>
          }
        >
          <div className="space-y-6" dir="rtl">
            {/* معلومات الوظيف Section */}
            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900 border-b pb-2">
                {t('hr.job_information')}
              </h3>

              {/* الوظيف */}
              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                  {t('hr.job_title')}
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                  placeholder={t('hr.job_title')}
                />
              </div>
            </div>

            {/* معلومات أخرى Section */}
            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900 border-b pb-2">
                {t('hr.other_information')}
              </h3>

              {/* عدد الأيام */}
              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                  {t('hr.number_of_days')}
                </label>
                <input
                  type="text"
                  className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                  placeholder={t('hr.number_of_days')}
                />
              </div>

              {/* السبب */}
              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                  {t('hr.reason')}
                </label>
                <input
                  type="text"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                  placeholder={t('hr.reason')}
                />
              </div>

              {/* تاريخ البدء & تاريخ الانتهاء */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                    {t('hr.start_date')}
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                    {t('hr.end_date')}
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* مرجع السياسة */}
              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                  {t('hr.policy_reference')}
                </label>
                <select
                  value={formData.policyReference}
                  onChange={(e) => setFormData({ ...formData, policyReference: e.target.value })}
                  className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                >
                  <option value="">{t('hr.policy_reference')}</option>
                  <option value="policy1">سياسة 1</option>
                  <option value="policy2">سياسة 2</option>
                </select>
              </div>
            </div>
          </div>
        </SideDrawer>
      </div>
    </Layout>
  );
};
