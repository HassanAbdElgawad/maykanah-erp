import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { AdvancedTable } from '../../../components/ui/Table';
import { buttonClasses } from '../../../styles';
import { Filter, Download, ArrowLeft, ArrowRight } from 'lucide-react';

interface TabButton {
  id: string;
  label: string;
  isEnabled: boolean;
}

export const LeavesAttendanceEmp: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'leaves-attendance');

  const isRTL = language === 'ar';

  const getBackPath = () => {
    const storedMode = localStorage.getItem('hrViewMode') || 'employee';
    return `/hr?mode=${storedMode}`;
  };

  const tabs: TabButton[] = [
    { id: 'leaves-attendance', label: t('hr.emp_leave_requests'), isEnabled: true },
    { id: 'compensatory', label: t('hr.emp_compensatory_leave'), isEnabled: true },
    { id: 'permission', label: t('hr.emp_permission_attendance'), isEnabled: true },
    { id: 'attendance-correction', label: t('hr.emp_attendance_correction'), isEnabled: true },
  ];

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab]);

  // ============ TAB 1: طلبات الإجازة ============
  const leaveRequests = [
    {
      id: 1,
      leaveType: 'نوع الإجازة',
      remainingDays: 5,
      date: '2023-12-09',
      status: 'approved',
    },
    {
      id: 2,
      leaveType: 'نوع الإجازة',
      remainingDays: 4,
      date: '2023-02-20',
      status: 'approved',
    },
    {
      id: 3,
      leaveType: 'نوع الإجازة',
      remainingDays: 16,
      date: '2023-02-15',
      status: 'rejected',
    },
    {
      id: 4,
      leaveType: 'نوع الإجازة',
      remainingDays: 2,
      date: '2020-02-10',
      status: 'approved',
    },
  ];

  const leaveColumns = [
    {
      key: 'leaveType',
      label: t('hr.leave_type'),
      align: 'right' as const,
    },
    {
      key: 'remainingDays',
      label: t('hr.remaining_leave_days'),
      align: 'right' as const,
    },
    {
      key: 'date',
      label: t('hr.date'),
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

  // ============ TAB 2: إجازات تعويضية ============
  const compensatoryData = [
    { id: 1, requestedDays: '5 أيام', date: '9,3,4 - 12 - 2023', status: 'approved' },
    { id: 2, requestedDays: '5 أيام', date: '9,3,4 - 12 - 2023', status: 'approved' },
    { id: 3, requestedDays: '5 أيام', date: '9,3,4 - 12 - 2023', status: 'rejected' },
    { id: 4, requestedDays: '5 أيام', date: '9,3,4 - 12 - 2023', status: 'approved' },
  ];

  const compensatoryColumns = [
    {
      key: 'requestedDays',
      label: t('hr.requested_days'),
      align: 'right' as const,
    },
    {
      key: 'date',
      label: t('hr.date'),
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

  // ============ TAB 3: الحضور والاستئذان ============
  const permissionData = [
    { id: 1, date: '9 - 12 - 2023', time: '12:00', reason: 'الالكتروني', status: 'approved' },
    { id: 2, date: '20 - 2 - 2023', time: '12:00', reason: 'التقي', status: 'approved' },
    { id: 3, date: '15 - 2 - 2023', time: '12:00', reason: 'التقي', status: 'rejected' },
    { id: 4, date: '10 - 2 - 2020', time: '12:00', reason: 'التقي', status: 'approved' },
  ];

  const permissionColumns = [
    {
      key: 'date',
      label: t('hr.date'),
      align: 'right' as const,
    },
    {
      key: 'time',
      label: t('hr.time'),
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

  // ============ TAB 4: طلبات تصحيح الحضور ============
  const attendanceCorrectionData = [
    { id: 1, correctedTimes: '9 - 12 - 2023', reason: 'الالكتروني', status: 'approved' },
    { id: 2, correctedTimes: '20 - 2 - 2023', reason: 'التقي', status: 'approved' },
    { id: 3, correctedTimes: '15 - 2 - 2023', reason: 'التقي', status: 'rejected' },
    { id: 4, correctedTimes: '10 - 2 - 2020', reason: 'التقي', status: 'approved' },
  ];

  const attendanceCorrectionColumns = [
    {
      key: 'correctedTimes',
      label: t('hr.corrected_times'),
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

  const getCurrentData = () => {
    switch (activeTab) {
      case 'leaves-attendance':
        return leaveRequests;
      case 'compensatory':
        return compensatoryData;
      case 'permission':
        return permissionData;
      case 'attendance-correction':
        return attendanceCorrectionData;
      default:
        return leaveRequests;
    }
  };

  const getCurrentColumns = () => {
    switch (activeTab) {
      case 'leaves-attendance':
        return leaveColumns;
      case 'compensatory':
        return compensatoryColumns;
      case 'permission':
        return permissionColumns;
      case 'attendance-correction':
        return attendanceCorrectionColumns;
      default:
        return leaveColumns;
    }
  };

  const getNewRequestPath = () => {
    switch (activeTab) {
      case 'compensatory':
        return '/hr/employee/leaves-attendance/new-compensatory';
      case 'permission':
        return '/hr/employee/leaves-attendance/new-permission';
      case 'attendance-correction':
        return '/hr/employee/leaves-attendance/new-attendance-correction';
      default:
        return '/hr/employee/leaves-attendance/new';
    }
  };

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
            <h1 className="text-xl font-medium text-gray-900">{t('hr.emp.leaves_attendance')}</h1>
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
              onClick={() => navigate(getNewRequestPath())}
              className={buttonClasses.primary}
            >
              {t('hr.new_request')}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="rounded-xl">
          {/* Tabs */}
          <div className="border-b border-gray-200 bg-[#0937381A] mb-4 rounded-xl">
            <div className="flex gap-6 px-6 pt-5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => tab.isEnabled && setActiveTab(tab.id)}
                  disabled={!tab.isEnabled}
                  className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-[#093738]'
                      : tab.isEnabled
                        ? 'text-gray-600 hover:text-[#093738]'
                        : 'text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 right-0 left-0 h-1 bg-[#093738] rounded-t-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200">
            <AdvancedTable
              columns={getCurrentColumns()}
              data={getCurrentData()}
              emptyMessage={t('common.no_data')}
            />
          </div>

          {/* Pagination */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <button className={buttonClasses.secondary + ' text-xs'}>
                {t('hr.next')}
              </button>
              <div className="flex items-center gap-2">
                <button className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}>3</button>
                <button className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}>2</button>
                <button className={buttonClasses.primary + ' min-w-[40px] h-10 text-xs'}>1</button>
              </div>
              <button className={buttonClasses.secondary + ' text-xs'}>
                {t('hr.previous')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
