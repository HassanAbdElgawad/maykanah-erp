import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedTable } from '@/components/ui/Table';
import { SideDrawer } from '@/components/ui/SideDrawer';
import { buttonClasses } from '@/styles';
import { Filter, Download, ChevronRight } from 'lucide-react';

export const RemoteWorkPolicies: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    policyName: '',
    startDate: '',
    endDate: '',
    maxDays: '',
    reason: '',
    policyType: '',
    notes: '',
  });

  const getBackPath = () => {
    const storedMode = localStorage.getItem('hrViewMode') || 'employee';
    return `/hr?mode=${storedMode}`;
  };

  const handleSubmit = () => {
    console.log('Remote Work Policy:', formData);
    setIsSidebarOpen(false);
    setFormData({
      policyName: '',
      startDate: '',
      endDate: '',
      maxDays: '',
      reason: '',
      policyType: '',
      notes: '',
    });
  };

  // Mock data
  const policies = [
    {
      id: 1,
      policyName: 'الاسم بالعربية',
      maxDays: '5 أيام',
      startDate: '9,3,4 - 12 - 2023',
      status: 'approved',
    },
    {
      id: 2,
      policyName: 'الاسم بالعربية',
      maxDays: '5 أيام',
      startDate: '9,3,4 - 12 - 2023',
      status: 'approved',
    },
    {
      id: 3,
      policyName: 'الاسم بالعربية',
      maxDays: '5 أيام',
      startDate: '9,3,4 - 12 - 2023',
      status: 'approved',
    },
  ];

  const columns = [
    {
      key: 'policyName',
      label: t('hr.policy_name'),
      align: 'right' as const,
    },
    {
      key: 'maxDays',
      label: t('hr.max_days'),
      align: 'right' as const,
    },
    {
      key: 'startDate',
      label: t('hr.start_date'),
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
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-medium text-gray-900">{t('hr.emp.remote_work_policies')}</h1>
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
            <AdvancedTable columns={columns} data={policies} emptyMessage={t('common.no_data')} />
          </div>

          {/* Pagination */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <button className={buttonClasses.secondary + ' text-xs'}>{t('hr.previous')}</button>
              <div className="flex items-center gap-2">
                <button className={buttonClasses.primary + ' min-w-[40px] h-10 text-xs'}>1</button>
                <button className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}>2</button>
                <button className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}>3</button>
              </div>
              <button className={buttonClasses.primary + ' text-xs'}>{t('hr.next')}</button>
            </div>
          </div>
        </div>

        {/* Side Drawer for New Policy */}
        <SideDrawer
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          title={t('hr.new_remote_work_policy')}
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
          <div className="space-y-4" dir="rtl">
            {/* Policy Name */}
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                {t('hr.policy_name')}
              </label>
              <input
                type="text"
                value={formData.policyName}
                onChange={(e) => setFormData({ ...formData, policyName: e.target.value })}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
                placeholder={t('hr.policy_name')}
              />
            </div>

            {/* Start Date & End Date */}
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

            {/* Max Days */}
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                {t('hr.max_days')}
              </label>
              <input
                type="text"
                value={formData.maxDays}
                onChange={(e) => setFormData({ ...formData, maxDays: e.target.value })}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
                placeholder="5"
              />
            </div>

            {/* Policy Type */}
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                {t('hr.policy_type')}
              </label>
              <select
                value={formData.policyType}
                onChange={(e) => setFormData({ ...formData, policyType: e.target.value })}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              >
                <option value="">{t('hr.policy_type')}</option>
                <option value="weekly">أسبوعي</option>
                <option value="monthly">شهري</option>
                <option value="quarterly">ربع سنوي</option>
              </select>
            </div>

            {/* Reason */}
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

            {/* Notes */}
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                {t('hr.notes')}
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-h-[80px]"
                dir="rtl"
                placeholder={t('hr.notes')}
              />
            </div>
          </div>
        </SideDrawer>
      </div>
    </Layout>
  );
};
