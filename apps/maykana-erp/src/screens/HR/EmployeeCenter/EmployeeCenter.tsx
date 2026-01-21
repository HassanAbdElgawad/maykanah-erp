import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { AdvancedTable } from '../../../components/ui/Table';
import { buttonClasses } from '../../../styles';
import {
  UserPlus,
  FileText,
  UserCheck,
  UserX,
  Filter,
  Download,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

interface TabButton {
  id: string;
  label: string;
  isEnabled: boolean;
}

export const EmployeeCenter: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'new-employee');

  const isRTL = language === 'ar';

  const tabs: TabButton[] = [
    { id: 'new-employee', label: t('hr.new_employees'), isEnabled: true },
    { id: 'work-start', label: t('hr.work_start_requests'), isEnabled: true },
    { id: 'contract-renewal', label: t('hr.contract_renewal'), isEnabled: true },
    { id: 'resignation', label: t('hr.resignation_termination'), isEnabled: true },
  ];

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab]);

  // Mock data for new employees
  const newEmployees = [
    {
      id: 1,
      name: 'أحمد محمد العلي',
      position: 'مدير مشاريع',
      department: 'قسم التطوير',
      date: '2024-01-15',
      status: 'pending',
    },
    {
      id: 2,
      name: 'فاطمة خالد السعيد',
      position: 'محاسب',
      department: 'قسم المالية',
      date: '2024-01-16',
      status: 'approved',
    },
    {
      id: 3,
      name: 'محمد عبدالله الشمري',
      position: 'مطور برمجيات',
      department: 'قسم التقنية',
      date: '2024-01-17',
      status: 'pending',
    },
  ];

  // Mock data for work start requests
  const workStartRequests = [
    {
      id: 1,
      name: 'سارة أحمد الحربي',
      position: 'مدير موارد بشرية',
      department: 'الموارد البشرية',
      date: '2024-01-18',
      status: 'pending',
    },
    {
      id: 2,
      name: 'خالد عبدالرحمن القحطاني',
      position: 'محلل مالي',
      department: 'قسم المالية',
      date: '2024-01-17',
      status: 'approved',
    },
    {
      id: 3,
      name: 'نورة محمد الدوسري',
      position: 'مصمم جرافيك',
      department: 'قسم التسويق',
      date: '2024-01-16',
      status: 'approved',
    },
    {
      id: 4,
      name: 'عبدالعزيز سعد المطيري',
      position: 'مهندس شبكات',
      department: 'قسم تقنية المعلومات',
      date: '2024-01-15',
      status: 'pending',
    },
  ];

  // Mock data for contract renewal
  const contractRenewalRequests = [
    {
      id: 1,
      name: 'ريم عبدالله الشمري',
      position: 'مسؤول مشتريات',
      department: 'قسم المشتريات',
      date: '2024-02-01',
      status: 'pending',
    },
    {
      id: 2,
      name: 'طلال فهد العتيبي',
      position: 'محاسب رئيسي',
      department: 'قسم المحاسبة',
      date: '2024-02-05',
      status: 'approved',
    },
    {
      id: 3,
      name: 'منى سليمان الزهراني',
      position: 'مدير مبيعات',
      department: 'قسم المبيعات',
      date: '2024-02-10',
      status: 'pending',
    },
    {
      id: 4,
      name: 'فيصل ماجد الغامدي',
      position: 'مدير مشروع',
      department: 'قسم المشاريع',
      date: '2024-02-15',
      status: 'rejected',
    },
    {
      id: 5,
      name: 'هند عمر البقمي',
      position: 'مسؤول علاقات عامة',
      department: 'قسم العلاقات العامة',
      date: '2024-02-20',
      status: 'approved',
    },
  ];

  // Mock data for resignation and termination
  const resignationRequests = [
    {
      id: 1,
      name: 'بدر أحمد الشهري',
      position: 'مطور واجهات',
      department: 'قسم التطوير',
      date: '2024-01-20',
      status: 'pending',
    },
    {
      id: 2,
      name: 'أمل ناصر الحارثي',
      position: 'محلل بيانات',
      department: 'قسم التحليل',
      date: '2024-01-18',
      status: 'approved',
    },
    {
      id: 3,
      name: 'يوسف راشد العمري',
      position: 'مدير عمليات',
      department: 'قسم العمليات',
      date: '2024-01-15',
      status: 'approved',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 bg-[#fef3e0]';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return t('hr.approved');
      case 'pending':
        return t('hr.pending');
      case 'rejected':
        return t('hr.rejected');
      default:
        return status;
    }
  };

  // Get data based on active tab
  const getCurrentData = () => {
    switch (activeTab) {
      case 'new-employee':
        return newEmployees;
      case 'work-start':
        return workStartRequests;
      case 'contract-renewal':
        return contractRenewalRequests;
      case 'resignation':
        return resignationRequests;
      default:
        return newEmployees;
    }
  };

  const currentData = getCurrentData();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
            <button
              onClick={() => navigate('/hr')}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <h1 className="text-xl font-medium text-gray-900">{t('hr.employee_center')}</h1>
          </div>

          {/* Action Buttons */}
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
              onClick={() => navigate('/hr/employee-center/add')}
              className={buttonClasses.primary}
            >
              <UserPlus className="w-4 h-4" />
              {t('hr.new_employee')}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className=" rounded-xl shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200 bg-[#0937381A] mb-4 rounded-xl">
            <div className="flex gap-6 px-6 pt-5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => tab.isEnabled && setActiveTab(tab.id)}
                  disabled={!tab.isEnabled}
                  className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${
                    activeTab === tab.id ? 'text-[#093738]' : tab.isEnabled ? 'text-gray-600 hover:text-[#093738]' : 'text-gray-400 cursor-not-allowed'
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
          <div className="pb-6">
            <AdvancedTable
              columns={[
                {
                  key: 'name',
                  label: t('hr.employee_name'),
                  align: 'right',
                  render: (row) => (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="text-white font-semibold text-sm">
                          {row.name.charAt(0)}
                        </span>
                      </div>
                      <div className="font-medium text-gray-900">{row.name}</div>
                    </div>
                  ),
                },
                {
                  key: 'position',
                  label: t('hr.position'),
                  align: 'right',
                },
                {
                  key: 'department',
                  label: t('hr.department'),
                  align: 'right',
                },
                {
                  key: 'date',
                  label: t('hr.application_date'),
                  align: 'right',
                },
                {
                  key: 'status',
                  label: t('hr.status'),
                  align: 'right',
                  render: (row) => (
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}
                    >
                      {getStatusText(row.status)}
                    </span>
                  ),
                },
              ]}
              data={currentData}
              actions={[
                {
                  icon: FileText,
                  label: t('hr.view_details'),
                  onClick: (row) => console.log('View', row),
                  color: 'blue',
                },
                {
                  icon: UserCheck,
                  label: t('hr.approve'),
                  onClick: (row) => console.log('Approve', row),
                  color: 'green',
                },
                {
                  icon: UserX,
                  label: t('hr.reject'),
                  onClick: (row) => console.log('Reject', row),
                  color: 'red',
                },
              ]}
            />
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-white border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                {t('hr.showing')} <span className="font-semibold text-gray-900">1-{currentData.length}</span>{' '}
                {t('hr.of')} <span className="font-semibold text-gray-900">{currentData.length}</span>{' '}
                {t('hr.employee')}
              </div>
              <div className="flex items-center gap-2">
                <button className={buttonClasses.secondary + " text-xs"}>
                  {isRTL ? t('hr.next') : t('hr.previous')}
                </button>
                <button className={buttonClasses.primary + " min-w-[40px] h-10 text-xs"}>
                  1
                </button>
                <button className={buttonClasses.secondary + " text-xs"}>
                  {t('hr.next')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
