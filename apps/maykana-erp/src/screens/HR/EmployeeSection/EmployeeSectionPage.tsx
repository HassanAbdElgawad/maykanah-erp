import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SECTION_TABS: Record<string, { tab: string; titleKey: string }[]> = {
  'leaves-attendance': [
    { tab: 'leaves-attendance', titleKey: 'hr.emp.leaves_attendance' },
    { tab: 'compensatory', titleKey: 'hr.emp.compensatory_leave' },
    { tab: 'permission', titleKey: 'hr.emp.permission_requests' },
    { tab: 'attendance-correction', titleKey: 'hr.emp.attendance_correction' },
  ],
  'salaries-compensations': [
    { tab: 'salaries', titleKey: 'hr.emp.salaries_compensations' },
    { tab: 'advances', titleKey: 'hr.emp.advance_requests' },
    { tab: 'promotions', titleKey: 'hr.emp.promotion_requests' },
  ],
  'evaluations-training': [
    { tab: 'evaluations', titleKey: 'hr.emp.evaluations' },
    { tab: 'training', titleKey: 'hr.emp.training' },
  ],
};

const SECTION_TITLE_KEYS: Record<string, string> = {
  'start-work': 'hr.emp.start_work',
  'contract-renewal': 'hr.emp.contract_renewal',
  'resignation': 'hr.emp.resignation',
  'leaves-attendance': 'hr.emp.leaves_attendance',
  'remote-work-policies': 'hr.emp.remote_work_policies',
  'remote-work-assignment': 'hr.emp.remote_work_assignment',
  'secondment-requests': 'hr.emp.secondment_requests',
  'salaries-compensations': 'hr.emp.salaries_compensations',
  'evaluations-training': 'hr.emp.evaluations',
};

export const EmployeeSectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { section } = useParams<{ section: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const tabs = section ? SECTION_TABS[section] : [];
  const defaultTab = tabs[0]?.tab ?? '';
  const currentTab = searchParams.get('tab') || defaultTab;
  const [activeTab, setActiveTab] = useState(currentTab);

  useEffect(() => {
    setActiveTab(currentTab);
  }, [currentTab]);

  useEffect(() => {
    if (tabs.length && !searchParams.get('tab')) {
      setSearchParams({ tab: defaultTab }, { replace: true });
    }
  }, [section, tabs.length, defaultTab, setSearchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const titleKey = section ? SECTION_TITLE_KEYS[section] || `hr.emp.${section?.replace(/-/g, '_')}` : 'hr.emp.my_requests';

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/hr')}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <h1 className="text-xl font-medium text-gray-900">{t(titleKey)}</h1>
          </div>
        </div>

        {tabs.length > 0 && (
          <div className="border-b border-gray-200 bg-[#0937381A] mb-4 rounded-xl">
            <div className="flex gap-6 px-6 pt-5">
              {tabs.map(({ tab, titleKey: tabTitleKey }) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${
                    activeTab === tab ? 'text-[#093738]' : 'text-gray-600 hover:text-[#093738]'
                  }`}
                >
                  {t(tabTitleKey)}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 right-0 left-0 h-1 bg-[#093738] rounded-t-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500 text-lg">{t('common.coming_soon') || 'قريباً'}</p>
        </div>
      </div>
    </Layout>
  );
};
