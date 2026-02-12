import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight, Eye, FileText } from 'lucide-react';
import { AdvancedTable } from '@/components/ui/Table';
import { buttonClasses } from '@/styles';
import { useMyRequestsData } from '@/hooks';

export const MyRequests: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const { requests } = useMyRequestsData();

  const hasRequests = requests.length > 0;

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
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div
          className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/hr')}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-medium text-gray-900 relative">{t('hr.my_requests')}</h1>
          </div>
          <button
            onClick={() => navigate('/hr/my-requests/new')}
            className={buttonClasses.primary}
          >
            <FileText className="w-4 h-4" />
            {t('hr.add_new_request')}
          </button>
        </div>

        {/* Main Content */}
        {!hasRequests ? (
          /* Empty State */
          <div className="bg-white rounded-xl border border-[#e2e2e2] py-20">
            <div className="flex flex-col items-center gap-14 max-w-md mx-auto">
              {/* Illustration */}
              <div className="flex flex-col items-center gap-10">
                <svg
                  width="248"
                  height="248"
                  viewBox="0 0 248 248"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="124" cy="124" r="124" fill="#F0F4F7" />
                  <path
                    d="M124 60C88.6538 60 60 88.6538 60 124C60 159.346 88.6538 188 124 188C159.346 188 188 159.346 188 124C188 88.6538 159.346 60 124 60ZM124 172C97.4903 172 76 150.51 76 124C76 97.4903 97.4903 76 124 76C150.51 76 172 97.4903 172 124C172 150.51 150.51 172 124 172Z"
                    fill="#093738"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M140 108H108C104.686 108 102 110.686 102 114V134C102 137.314 104.686 140 108 140H140C143.314 140 146 137.314 146 134V114C146 110.686 143.314 108 140 108Z"
                    fill="#093738"
                  />
                  <circle cx="124" cy="100" r="12" fill="#093738" fillOpacity="0.5" />
                </svg>

                {/* Text */}
                <div className="flex flex-col items-center gap-1.5 w-full">
                  <h2
                    className="text-2xl font-bold text-black text-center"
                    style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica' }}
                  >
                    {t('hr.as_new_employee')}
                  </h2>
                  <p
                    className="text-base font-medium text-black text-center"
                    style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica' }}
                  >
                    {t('hr.confirm_work_start_request')}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => navigate('/hr/my-requests/new')}
                className={buttonClasses.primary}
              >
                {t('hr.work_start_request')}
              </button>
            </div>
          </div>
        ) : (
          /* Requests List */
          <AdvancedTable
            columns={[
              {
                key: 'requestNumber',
                label: t('hr.request_number'),
                align: 'right',
              },
              {
                key: 'requestType',
                label: t('hr.request_type'),
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
                onClick: (row) => navigate(`/hr/my-requests/${row.id}`),
                color: 'blue',
              },
            ]}
            emptyMessage={t('hr.no_requests')}
          />
        )}
      </div>
    </Layout>
  );
};
