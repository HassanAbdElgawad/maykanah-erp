import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Eye, FileText, Plus } from 'lucide-react';
import { AdvancedTable } from '../../../components/ui/Table';
import { buttonClasses } from '../../../styles';

interface StartWorkRequest {
  id: string;
  requestNumber: string;
  employeeName: string;
  department: string;
  startDate: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

// Sample data
const mockRequests: StartWorkRequest[] = [
  {
    id: '1',
    requestNumber: 'WS-001',
    employeeName: 'أحمد محمد',
    department: 'تقنية المعلومات',
    startDate: '2024-03-15',
    submissionDate: '2024-03-01',
    status: 'approved',
  },
  {
    id: '2',
    requestNumber: 'WS-002',
    employeeName: 'فاطمة علي',
    department: 'الموارد البشرية',
    startDate: '2024-03-20',
    submissionDate: '2024-03-05',
    status: 'pending',
  },
  {
    id: '3',
    requestNumber: 'WS-003',
    employeeName: 'خالد عبدالله',
    department: 'المبيعات',
    startDate: '2024-04-01',
    submissionDate: '2024-03-10',
    status: 'approved',
  },
  {
    id: '4',
    requestNumber: 'WS-004',
    employeeName: 'نورة سعيد',
    department: 'التسويق',
    startDate: '2024-04-10',
    submissionDate: '2024-03-15',
    status: 'rejected',
  },
  {
    id: '5',
    requestNumber: 'WS-005',
    employeeName: 'عمر حسن',
    department: 'المالية',
    startDate: '2024-04-15',
    submissionDate: '2024-03-20',
    status: 'pending',
  },
];

export const StartWorkRequests: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [requests] = useState<StartWorkRequest[]>(mockRequests);

  // Get stored HR view mode for back navigation
  const getBackPath = () => {
    const storedMode = localStorage.getItem('hrViewMode') || 'employee';
    return `/hr?mode=${storedMode}`;
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return t('hr.approved');
      case 'rejected':
        return t('hr.rejected');
      case 'pending':
        return t('hr.pending');
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-[#10b981]/10 text-[#10b981]';
      case 'rejected':
        return 'bg-[#ef4444]/10 text-[#ef4444]';
      case 'pending':
        return 'bg-[#f59e0b]/10 text-[#f59e0b]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(getBackPath())}
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
              {t('hr.work_start_requests')}
            </h1>
          </div>
          <button
            onClick={() => navigate('/hr/employee/start-work/new')}
            className={buttonClasses.primary}
          >
            <Plus className="w-4 h-4" />
            {t('hr.work_start_request')}
          </button>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <AdvancedTable
            columns={[
              {
                key: 'requestNumber',
                label: t('hr.request_number'),
                align: 'right',
              },
              {
                key: 'employeeName',
                label: t('hr.employee_name'),
                align: 'right',
              },
              {
                key: 'department',
                label: t('hr.department'),
                align: 'right',
              },
              {
                key: 'startDate',
                label: t('hr.work_start_date'),
                align: 'right',
              },
              {
                key: 'submissionDate',
                label: t('hr.submission_date'),
                align: 'right',
              },
              {
                key: 'status',
                label: t('hr.status'),
                align: 'right',
                render: (row) => (
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(row.status)}`}
                  >
                    {getStatusText(row.status)}
                  </span>
                ),
              },
            ]}
            data={requests}
            actions={[
              {
                icon: Eye,
                label: t('hr.view_details'),
                onClick: (row) => navigate(`/hr/employee/start-work/${row.id}`),
                color: 'blue',
              },
            ]}
            emptyMessage={t('common.no_data')}
          />
        </div>
      </div>
    </Layout>
  );
};
