import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { DepartmentsModal } from './DepartmentsModal';

export function NewSalaryPayroll() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showDepartmentsModal, setShowDepartmentsModal] = useState(false);
  const [disbursementMonth, setDisbursementMonth] = useState('');
  const [includeEmployees, setIncludeEmployees] = useState('');
  const [payrollPeriod, setPayrollPeriod] = useState('');

  const handleCreate = () => {
    setShowDepartmentsModal(true);
  };

  const handleSaveDepartments = (selectedDepartments: string[]) => {
    console.log('Selected departments:', selectedDepartments);
    setShowDepartmentsModal(false);
    // Here you would typically save the data and navigate to the details page
    // For now, just navigate back
    navigate('/hr/salaries-rewards');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Back Button and Create Button */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/hr/salaries-rewards')}
              className="text-gray-600 hover:text-gray-800"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-[#11383f]">{t('hr.salary_payroll')}</h1>
          </div>
          <Button
            onClick={handleCreate}
            className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2"
          >
            {t('hr.create')}
          </Button>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6 space-y-6">
          <h2 className="text-lg font-semibold text-[#11383f]">{t('hr.other_information')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Disbursement Month */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t('hr.disbursement_month')}</label>
              <input
                type="month"
                value={disbursementMonth}
                onChange={(e) => setDisbursementMonth(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
              />
            </div>

            {/* Include Employees */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t('hr.include_employees')}</label>
              <select
                value={includeEmployees}
                onChange={(e) => setIncludeEmployees(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
              >
                <option value="">{t('hr.select')}</option>
                <option value="all">{t('hr.all_employees')}</option>
                <option value="active">{t('hr.active_employees')}</option>
              </select>
            </div>

            {/* Payroll Period */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t('hr.payroll_period')}</label>
              <select
                value={payrollPeriod}
                onChange={(e) => setPayrollPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
              >
                <option value="">{t('hr.select')}</option>
                <option value="monthly">{t('hr.monthly')}</option>
                <option value="biweekly">{t('hr.biweekly')}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Modal */}
      {showDepartmentsModal && (
        <DepartmentsModal
          onClose={() => setShowDepartmentsModal(false)}
          onSave={handleSaveDepartments}
        />
      )}
    </Layout>
  );
}
