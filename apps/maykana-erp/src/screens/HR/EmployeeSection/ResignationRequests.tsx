import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { AdvancedTable } from '../../../components/ui/Table';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';
import { buttonClasses } from '../../../styles';

export const ResignationRequests: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const getBackPath = () => {
    const storedMode = localStorage.getItem('hrViewMode') || 'employee';
    return `/hr?mode=${storedMode}`;
  };

  // Mock data for resignation requests
  const resignationRequests = [
    {
      id: 1,
      employeeName: 'أحمد محمد العلي',
      employeeNumber: 'EMP-2024-001',
      department: 'تقنية المعلومات',
      resignationType: 'استقالة شخصية',
      submissionDate: '2024-02-01',
      lastWorkingDay: '2024-03-01',
      status: 'pending',
    },
    {
      id: 2,
      employeeName: 'فاطمة أحمد السالم',
      employeeNumber: 'EMP-2024-002',
      department: 'الموارد البشرية',
      resignationType: 'استقالة شخصية',
      submissionDate: '2024-02-05',
      lastWorkingDay: '2024-03-05',
      status: 'approved',
    },
    {
      id: 3,
      employeeName: 'خالد عبدالله الشمري',
      employeeNumber: 'EMP-2024-003',
      department: 'المالية',
      resignationType: 'استقالة للتقاعد',
      submissionDate: '2024-02-10',
      lastWorkingDay: '2024-03-10',
      status: 'rejected',
    },
    {
      id: 4,
      employeeName: 'منى سعيد القحطاني',
      employeeNumber: 'EMP-2024-004',
      department: 'التسويق',
      resignationType: 'استقالة شخصية',
      submissionDate: '2024-02-12',
      lastWorkingDay: '2024-03-12',
      status: 'pending',
    },
    {
      id: 5,
      employeeName: 'عمر حسن الدوسري',
      employeeNumber: 'EMP-2024-005',
      department: 'المبيعات',
      resignationType: 'استقالة للتعليم',
      submissionDate: '2024-02-15',
      lastWorkingDay: '2024-03-15',
      status: 'approved',
    },
  ];

  const columns = [
    {
      key: 'employeeName',
      label: t('hr.employee_name'),
      sortable: true,
      align: 'right' as const,
    },
    {
      key: 'employeeNumber',
      label: t('hr.employee_number'),
      sortable: true,
      align: 'right' as const,
    },
    {
      key: 'department',
      label: t('hr.department'),
      sortable: true,
      align: 'right' as const,
    },
    {
      key: 'resignationType',
      label: t('hr.resignation_type'),
      sortable: true,
      align: 'right' as const,
    },
    {
      key: 'submissionDate',
      label: t('hr.submission_date'),
      sortable: true,
      align: 'right' as const,
    },
    {
      key: 'lastWorkingDay',
      label: t('hr.last_working_day'),
      sortable: true,
      align: 'right' as const,
    },
    {
      key: 'status',
      label: t('hr.status'),
      sortable: true,
      align: 'right' as const,
      render: (row: any) => {
        const statusConfig: Record<string, { label: string; color: string }> = {
          pending: { label: t('hr.pending'), color: 'bg-orange-100 text-orange-800' },
          approved: { label: t('hr.approved'), color: 'bg-green-100 text-green-800' },
          rejected: { label: t('hr.rejected'), color: 'bg-red-100 text-red-800' },
        };
        const config = statusConfig[row.status] || statusConfig.pending;
        return (
          <span
            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${config.color}`}
          >
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
            <h1 className="text-xl font-medium text-gray-900">{t('hr.resignation_requests')}</h1>
          </div>

          <button
            onClick={() => navigate('/hr/employee/resignation/new')}
            className={buttonClasses.primary}
          >
            {t('hr.new_resignation_request')}
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200">
          <AdvancedTable
            columns={columns}
            data={resignationRequests}
            emptyMessage={t('common.no_data')}
          />
        </div>
      </div>
    </Layout>
  );
};
