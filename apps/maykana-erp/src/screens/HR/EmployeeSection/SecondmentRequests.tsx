import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { AdvancedTable } from '../../../components/ui/Table';
import { SideDrawer } from '../../../components/ui/SideDrawer';
import { buttonClasses } from '../../../styles';
import { Filter, Download, ChevronRight } from 'lucide-react';

export const SecondmentRequests: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    jobTitle: '',
    currentLocation: '',
    currentDepartment: '',
    newDepartment: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const getBackPath = () => {
    const storedMode = localStorage.getItem('hrViewMode') || 'employee';
    return `/hr?mode=${storedMode}`;
  };

  const handleSubmit = () => {
    console.log('Secondment Request:', formData);
    setIsSidebarOpen(false);
    setFormData({
      jobTitle: '',
      currentLocation: '',
      currentDepartment: '',
      newDepartment: '',
      startDate: '',
      endDate: '',
      reason: '',
    });
  };

  // Mock data
  const requests = [
    {
      id: 1,
      jobTitle: 'أحمد عبد السلام',
      employeeId: '2522169654126',
      originalDepartment: 'القسم الضيف',
      newDepartment: 'الإلكتروني',
      date: '9 - 12 - 2023',
      status: 'active',
    },
    {
      id: 2,
      jobTitle: 'عمر السعيد',
      employeeId: '2511685255556',
      originalDepartment: 'القسم الضيف',
      newDepartment: 'التقني',
      date: '20 - 2 - 2023',
      status: 'inactive',
    },
    {
      id: 3,
      jobTitle: 'يوسف الحجار',
      employeeId: '251165552256',
      originalDepartment: 'القسم الضيف',
      newDepartment: 'التقني',
      date: '15 - 2 - 2023',
      status: 'active',
    },
    {
      id: 4,
      jobTitle: 'خالد فؤاد',
      employeeId: '2511636985216',
      originalDepartment: 'القسم الضيف',
      newDepartment: 'التقني',
      date: '10 - 2 - 2020',
      status: 'inactive',
    },
  ];

  const columns = [
    {
      key: 'jobTitle',
      label: t('hr.job_title'),
      align: 'right' as const,
    },
    {
      key: 'employeeId',
      label: t('hr.employee_id'),
      align: 'right' as const,
    },
    {
      key: 'originalDepartment',
      label: t('hr.original_department'),
      align: 'right' as const,
    },
    {
      key: 'newDepartment',
      label: t('hr.new_department'),
      align: 'right' as const,
    },
    {
      key: 'date',
      label: t('hr.date'),
      align: 'right' as const,
    },
    {
      key: 'status',
      label: t('hr.job_status'),
      align: 'right' as const,
      render: (row: any) => {
        const statusConfig: Record<string, { label: string; color: string }> = {
          active: { label: t('hr.active'), color: 'bg-green-100 text-green-800' },
          inactive: { label: t('hr.inactive'), color: 'bg-gray-100 text-gray-800' },
        };
        const config = statusConfig[row.status] || statusConfig.active;
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
            <h1 className="text-xl font-medium text-gray-900">
              {t('hr.emp.secondment_requests')}
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
              {t('hr.send_request')}
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
              <button className={buttonClasses.secondary + ' text-xs'}>{t('hr.previous')}</button>
              <div className="flex items-center gap-2">
                <button className={buttonClasses.primary + ' min-w-[40px] h-10 text-xs'}>
                  1
                </button>
                <button className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}>
                  2
                </button>
                <button className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}>
                  3
                </button>
              </div>
              <button className={buttonClasses.primary + ' text-xs'}>{t('hr.next')}</button>
            </div>
          </div>
        </div>

        {/* Side Drawer for New Request */}
        <SideDrawer
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          title={t('hr.secondment_requests')}
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

              {/* الموقع الحالي & القسم الحالي */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                    {t('hr.current_location')}
                  </label>
                  <select
                    value={formData.currentLocation}
                    onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">{t('hr.current_location')}</option>
                    <option value="location1">الموقع الحالي</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5 text-right">
                    {t('hr.current_department')}
                  </label>
                  <select
                    value={formData.currentDepartment}
                    onChange={(e) => setFormData({ ...formData, currentDepartment: e.target.value })}
                    className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option value="">{t('hr.current_department')}</option>
                    <option value="dept1">القسم الحالي</option>
                  </select>
                </div>
              </div>

              {/* تاريخ الابتداء & تاريخ الانتهاء */}
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
            </div>
          </div>
        </SideDrawer>
      </div>
    </Layout>
  );
};
