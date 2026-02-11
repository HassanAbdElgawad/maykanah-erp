import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { AdvancedTable } from '../../../components/ui/Table';
import { buttonClasses } from '../../../styles';
import { Filter, Download, ChevronRight, Plus } from 'lucide-react';

interface TabButton {
  id: string;
  label: string;
  isEnabled: boolean;
}

export const SalariesCompensations: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'salaries');

  const getBackPath = () => {
    const storedMode = localStorage.getItem('hrViewMode') || 'employee';
    return `/hr?mode=${storedMode}`;
  };

  const tabs: TabButton[] = [
    { id: 'salaries', label: t('hr.salaries'), isEnabled: true },
    { id: 'advances', label: t('hr.advance_requests'), isEnabled: true },
    { id: 'promotions', label: t('hr.promotion_requests'), isEnabled: true },
  ];

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab]);

  // ============ TAB 1: الرواتب ============
  const salaries = [
    {
      id: 1,
      totalGrossSalary: '2522169654126',
      disbursementDate: '9 - 12 - 2023',
      status: 'successful',
    },
    {
      id: 2,
      totalGrossSalary: '2511685255556',
      disbursementDate: '20 - 2 - 2023',
      status: 'successful',
    },
    {
      id: 3,
      totalGrossSalary: '251165552256',
      disbursementDate: '15 - 2 - 2023',
      status: 'successful',
    },
    {
      id: 4,
      totalGrossSalary: '2511636985216',
      disbursementDate: '10 - 2 - 2020',
      status: 'successful',
    },
  ];

  const salariesColumns = [
    {
      key: 'totalGrossSalary',
      label: t('hr.total_gross_salary'),
      align: 'right' as const,
    },
    {
      key: 'disbursementDate',
      label: t('hr.disbursement_date'),
      align: 'right' as const,
    },
    {
      key: 'status',
      label: t('hr.status'),
      align: 'right' as const,
      render: (row: any) => {
        const statusConfig: Record<string, { label: string; color: string }> = {
          successful: { label: t('hr.successful'), color: 'bg-green-100 text-green-800' },
          pending: { label: t('hr.pending'), color: 'bg-orange-100 text-orange-800' },
          failed: { label: t('hr.failed'), color: 'bg-red-100 text-red-800' },
        };
        const config = statusConfig[row.status] || statusConfig.successful;
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

  // ============ TAB 2: طلبات السلف ============
  const advances = [
    {
      id: 1,
      amount: 500,
      effectiveDate: '9 - 12 - 2023',
      paymentPlan: 'نوع التعديل للطلوب',
      status: 'active',
    },
    {
      id: 2,
      amount: 400,
      effectiveDate: '20 - 2 - 2023',
      paymentPlan: 'نوع التعديل للطلوب',
      status: 'inactive',
    },
    {
      id: 3,
      amount: 300,
      effectiveDate: '15 - 2 - 2023',
      paymentPlan: 'نوع التعديل للطلوب',
      status: 'active',
    },
    {
      id: 4,
      amount: 500,
      effectiveDate: '10 - 2 - 2020',
      paymentPlan: 'متبى الخدمة',
      status: 'inactive',
    },
  ];

  const advancesColumns = [
    {
      key: 'amount',
      label: t('hr.amount'),
      align: 'right' as const,
    },
    {
      key: 'effectiveDate',
      label: t('hr.effective_date'),
      align: 'right' as const,
    },
    {
      key: 'paymentPlan',
      label: t('hr.payment_plan'),
      align: 'right' as const,
    },
    {
      key: 'status',
      label: t('hr.status'),
      align: 'right' as const,
      render: (row: any) => {
        const statusConfig: Record<string, { label: string; color: string }> = {
          active: { label: t('hr.active'), color: 'bg-green-100 text-green-800' },
          inactive: { label: t('hr.inactive'), color: 'bg-gray-100 text-gray-800' },
        };
        const config = statusConfig[row.status] || statusConfig.active;
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

  // ============ TAB 3: طلبات الترقية ============
  const promotions = [
    {
      id: 1,
      effectiveDate: '9 - 12 - 2023',
      modificationType: 'نوع التعديل للطلوب',
      promoteTo: 'ترقية إلى',
      status: 'active',
    },
    {
      id: 2,
      effectiveDate: '20 - 2 - 2023',
      modificationType: 'نوع التعديل للطلوب',
      promoteTo: 'ترقية إلى',
      status: 'inactive',
    },
    {
      id: 3,
      effectiveDate: '15 - 2 - 2023',
      modificationType: 'نوع التعديل للطلوب',
      promoteTo: 'ترقية إلى',
      status: 'active',
    },
    {
      id: 4,
      effectiveDate: '10 - 2 - 2020',
      modificationType: 'نوع التعديل للطلوب',
      promoteTo: 'ترقية إلى',
      status: 'inactive',
    },
  ];

  const promotionsColumns = [
    {
      key: 'effectiveDate',
      label: t('hr.effective_date'),
      align: 'right' as const,
    },
    {
      key: 'modificationType',
      label: t('hr.modification_type'),
      align: 'right' as const,
    },
    {
      key: 'promoteTo',
      label: t('hr.promote_to'),
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
          <span
            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${config.color}`}
          >
            {config.label}
          </span>
        );
      },
    },
  ];

  const getCurrentColumns = () => {
    switch (activeTab) {
      case 'salaries':
        return salariesColumns;
      case 'advances':
        return advancesColumns;
      case 'promotions':
        return promotionsColumns;
      default:
        return salariesColumns;
    }
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case 'salaries':
        return salaries;
      case 'advances':
        return advances;
      case 'promotions':
        return promotions;
      default:
        return salaries;
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
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-medium text-gray-900">
              {t('hr.emp.salaries_compensations')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className={buttonClasses.secondary}>
              <Filter className="w-4 h-4" />
              {t('hr.filter')}
            </button>
            <button className={buttonClasses.secondary}>
              <Download className="w-4 h-4" />
              {t('hr.download')}
            </button>
            {activeTab === 'advances' && (
              <button
                onClick={() => navigate('/hr/employee/salaries-compensations/new-advance')}
                className={buttonClasses.primary}
              >
                <Plus className="w-4 h-4" />
                {t('hr.new_request')}
              </button>
            )}
            {activeTab === 'promotions' && (
              <button
                onClick={() => navigate('/hr/employee/salaries-compensations/new-promotion')}
                className={buttonClasses.primary}
              >
                <Plus className="w-4 h-4" />
                {t('hr.new_request')}
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 bg-[#0937381A] mb-4 rounded-xl">
          <div className="flex gap-6 px-6 pt-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

        {/* Main Content */}
        <div className="rounded-xl">
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
              <button className={buttonClasses.secondary + ' text-xs'}>{t('hr.previous')}</button>
              <div className="flex items-center gap-2">
                <button className={buttonClasses.primary + ' min-w-[40px] h-10 text-xs'}>1</button>
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
      </div>
    </Layout>
  );
};
