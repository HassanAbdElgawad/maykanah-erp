import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { AdvancedTable } from '../../../components/ui/Table';
import { buttonClasses } from '../../../styles';
import { Filter, Download, ArrowLeft, ArrowRight, Plus } from 'lucide-react';

interface TabButton {
  id: string;
  label: string;
  isEnabled: boolean;
}

export const EvaluationsTraining: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'evaluations');

  const isRTL = language === 'ar';

  const getBackPath = () => {
    const storedMode = localStorage.getItem('hrViewMode') || 'employee';
    return `/hr?mode=${storedMode}`;
  };

  const tabs: TabButton[] = [
    { id: 'evaluations', label: t('hr.evaluations'), isEnabled: true },
    { id: 'training', label: t('hr.training'), isEnabled: true },
  ];

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab]);

  // ============ TAB 1: التقييمات ============
  const evaluations = [
    {
      id: 1,
      evaluationType: 'تقييم الأداء السنوي',
      period: '9 - 12 - 2023',
      singleFreedom: 'الحرية الواحدة',
      estimatedCost: 'التكلفة التقديرية',
    },
    {
      id: 2,
      evaluationType: 'تقييم الكفاءة',
      period: '20 - 2 - 2023',
      singleFreedom: 'الحرية الواحدة',
      estimatedCost: 'التكلفة التقديرية',
    },
    {
      id: 3,
      evaluationType: 'تقييم المهارات',
      period: '15 - 2 - 2023',
      singleFreedom: 'الحرية الواحدة',
      estimatedCost: 'التكلفة التقديرية',
    },
    {
      id: 4,
      evaluationType: 'تقييم الأداء',
      period: '10 - 2 - 2020',
      singleFreedom: 'الحرية الواحدة',
      estimatedCost: 'التكلفة التقديرية',
    },
  ];

  const evaluationsColumns = [
    {
      key: 'evaluationType',
      label: t('hr.evaluation_type'),
      align: 'right' as const,
    },
    {
      key: 'period',
      label: t('hr.period'),
      align: 'right' as const,
    },
    {
      key: 'singleFreedom',
      label: t('hr.single_freedom'),
      align: 'right' as const,
    },
    {
      key: 'estimatedCost',
      label: t('hr.estimated_cost'),
      align: 'right' as const,
    },
  ];

  // ============ TAB 2: التدريب ============
  const trainings = [
    {
      id: 1,
      trainingType: 'الإلكتروني',
      period: '9 - 12 - 2023',
      singleFreedom: 'الحرية الواحدة',
      estimatedCost: 'التكلفة التقديرية',
    },
    {
      id: 2,
      trainingType: 'التقني',
      period: '20 - 2 - 2023',
      singleFreedom: 'الحرية الواحدة',
      estimatedCost: 'التكلفة التقديرية',
    },
    {
      id: 3,
      trainingType: 'التقني',
      period: '15 - 2 - 2023',
      singleFreedom: 'الحرية الواحدة',
      estimatedCost: 'التكلفة التقديرية',
    },
    {
      id: 4,
      trainingType: 'التقني',
      period: '10 - 2 - 2020',
      singleFreedom: 'الحرية الواحدة',
      estimatedCost: 'التكلفة التقديرية',
    },
  ];

  const trainingsColumns = [
    {
      key: 'trainingType',
      label: t('hr.training_type'),
      align: 'right' as const,
    },
    {
      key: 'period',
      label: t('hr.period'),
      align: 'right' as const,
    },
    {
      key: 'singleFreedom',
      label: t('hr.single_freedom'),
      align: 'right' as const,
    },
    {
      key: 'estimatedCost',
      label: t('hr.estimated_cost'),
      align: 'right' as const,
    },
  ];

  const getCurrentColumns = () => {
    switch (activeTab) {
      case 'evaluations':
        return evaluationsColumns;
      case 'training':
        return trainingsColumns;
      default:
        return evaluationsColumns;
    }
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case 'evaluations':
        return evaluations;
      case 'training':
        return trainings;
      default:
        return evaluations;
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
            <h1 className="text-xl font-medium text-gray-900">
              {activeTab === 'evaluations'
                ? t('hr.evaluations')
                : t('hr.training')}
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
            {activeTab === 'evaluations' && (
              <button
                onClick={() =>
                  navigate('/hr/employee/evaluations-training/new-evaluation')
                }
                className={buttonClasses.primary}
              >
                <Plus className="w-4 h-4" />
                {t('hr.new_request')}
              </button>
            )}
            {activeTab === 'training' && (
              <button
                onClick={() =>
                  navigate('/hr/employee/evaluations-training/new-training')
                }
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
              <button className={buttonClasses.secondary + ' text-xs'}>
                {t('hr.next')}
              </button>
              <div className="flex items-center gap-2">
                <button
                  className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}
                >
                  3
                </button>
                <button
                  className={buttonClasses.secondary + ' min-w-[40px] h-10 text-xs'}
                >
                  2
                </button>
                <button
                  className={buttonClasses.primary + ' min-w-[40px] h-10 text-xs'}
                >
                  1
                </button>
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
