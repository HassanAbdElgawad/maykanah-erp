import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Search, Download, Filter } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  basicSalary: number;
  deductions: number;
  absences: number;
  advances: number;
  finalAmount: number;
}

export function SalaryPayrollDetails() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const employees: Employee[] = [
    {
      id: '1',
      name: 'أحمد عبد السلام',
      employeeId: '2522169654126',
      department: 'الكترونى',
      basicSalary: 15000,
      deductions: 100,
      absences: 5,
      advances: 300,
      finalAmount: 14700,
    },
    {
      id: '2',
      name: 'عمر السعيد',
      employeeId: '2511685255556',
      department: 'التقني',
      basicSalary: 15000,
      deductions: 100,
      absences: 5,
      advances: 700,
      finalAmount: 14300,
    },
    {
      id: '3',
      name: 'يوسف النجار',
      employeeId: '251165552256',
      department: 'التقني',
      basicSalary: 15000,
      deductions: 100,
      absences: 3,
      advances: 500,
      finalAmount: 14500,
    },
    {
      id: '4',
      name: 'خالد فؤاد',
      employeeId: '2511636985216',
      department: 'التقني',
      basicSalary: 15000,
      deductions: 100,
      absences: 2,
      advances: 200,
      finalAmount: 14800,
    },
  ];

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#11383f]">
            {t('hr.salary_payroll_details')} ({t('hr.january')} 2025)
          </h1>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate('/hr/salaries-rewards')}
            >
              {t('hr.back')}
            </Button>
            <Button className="bg-[#11383f] hover:bg-[#0f2f35] text-white flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t('hr.download')}
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 flex items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('hr.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {t('hr.filter')}
              </Button>
            </div>
            <Button className="bg-[#11383f] hover:bg-[#0f2f35] text-white">
              {t('hr.apply')}
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    {t('hr.name')}
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    {t('hr.employee_id')}
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    {t('hr.department')}
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    {t('hr.basic_salary')}
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    {t('hr.deductions')}
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    {t('hr.absences')}
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    {t('hr.advances')}
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    {t('hr.final_amount')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{employee.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{employee.employeeId}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{employee.department}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {employee.basicSalary.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{employee.deductions}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{employee.absences}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{employee.advances}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {employee.finalAmount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <button className="text-sm text-gray-600 hover:text-gray-800">{t('hr.previous')}</button>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-lg bg-[#11383f] text-white">1</button>
            <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
              3
            </button>
          </div>
          <button className="px-4 py-2 rounded-lg bg-[#11383f] hover:bg-[#0f2f35] text-white text-sm">
            {t('hr.next')}
          </button>
        </div>
      </div>
    </Layout>
  );
}
