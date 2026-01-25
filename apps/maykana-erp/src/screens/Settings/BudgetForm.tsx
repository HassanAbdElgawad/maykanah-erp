import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/ui/card';
import { ChevronDown } from 'lucide-react';
import { buttonClasses } from '../../styles';
import InitialFilters from '../../components/InitialFilters';

interface BudgetAccount {
  id: string;
  name: string;
  amount: number;
}

export const BudgetForm = (): JSX.Element => {
  const navigate = useNavigate();

  const [budgetAccounts, setBudgetAccounts] = useState<BudgetAccount[]>([
    { id: '1', name: 'حساب 1', amount: 1000 },
    { id: '2', name: 'حساب 2', amount: 200 },
    { id: '3', name: 'حساب 3', amount: 800 },
  ]);

  const [attachedNotes] = useState(2);

  // Calculate total budget
  const totalBudget = budgetAccounts.reduce((sum, account) => sum + account.amount, 0);

  const handleAmountChange = (id: string, value: number) => {
    setBudgetAccounts((prev) =>
      prev.map((account) => (account.id === id ? { ...account, amount: value } : account))
    );
  };

  const handleSave = () => {
    // TODO: Implement save logic
    navigate('/settings/accounting/budget');
  };

  const handleCancel = () => {
    navigate('/settings/accounting/budget');
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header with InitialFilters */}
        <InitialFilters>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <button
                onClick={handleCancel}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#093738"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                إنشاء موازنة جديدة
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                أضف مرفقات{' '}
                <button className="text-[#0c4749] hover:underline">
                  <svg
                    className="w-4 h-4 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </span>

              <div className="flex items-center gap-2 text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                <span
                  className="w-6 h-6 rounded-full bg-[#0c4749] text-white flex items-center justify-center text-xs font-medium"
                  style={{ fontFamily: 'IBM Plex Sans Arabic, Helvetica' }}
                >
                  {attachedNotes}
                </span>
              </div>

              <button
                onClick={handleSave}
                className={`${buttonClasses.primary} h-[38px] px-6`}
                style={{ fontSize: '14px' }}
              >
                أرسل الطلب
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Form Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] p-8">
          <div className="grid grid-cols-3 gap-6">
            {/* Budget Name */}
            <div>
              <label className="block text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                اسم الموازنة
              </label>
              <input
                type="text"
                placeholder="موازنة رقم 1"
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                dir="rtl"
              />
            </div>

            {/* Fiscal Year */}
            <div>
              <label className="block text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                السنة المالية
              </label>
              <div className="relative">
                <select
                  className="w-full h-[45px] px-3 pr-10 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                  dir="rtl"
                  defaultValue="2026"
                >
                  <option value="2026">سنة 2026</option>
                  <option value="2025">سنة 2025</option>
                  <option value="2024">سنة 2024</option>
                </select>
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Fiscal Period */}
            <div>
              <label className="block text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                الفترة المالية
              </label>
              <div className="relative">
                <select
                  className="w-full h-[45px] px-3 pr-10 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                  dir="rtl"
                  defaultValue="1"
                >
                  <option value="1">فترة محاسبية 1</option>
                  <option value="2">فترة محاسبية 2</option>
                  <option value="3">فترة محاسبية 3</option>
                </select>
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Budget Type */}
            <div>
              <label className="block text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                نوع الموازنة
              </label>
              <div className="flex gap-8 items-center h-[45px]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="budgetType"
                    value="project"
                    defaultChecked
                    className="w-4 h-4 text-[#0c4749] border-gray-300 focus:ring-[#0c4749]"
                  />
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مشروع
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="budgetType"
                    value="costCenter"
                    className="w-4 h-4 text-[#0c4749] border-gray-300 focus:ring-[#0c4749]"
                  />
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مركز تكلفة
                  </span>
                </label>
              </div>
            </div>

            {/* Cost Center */}
            <div>
              <label className="block text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                مركز تكلفة
              </label>
              <div className="relative">
                <select
                  className="w-full h-[45px] px-3 pr-10 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                  dir="rtl"
                  defaultValue="1"
                >
                  <option value="1">مركز تكلفة رقم 1</option>
                  <option value="2">مركز تكلفة رقم 2</option>
                  <option value="3">مركز تكلفة رقم 3</option>
                </select>
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Budget Status */}
            <div>
              <label className="block text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                في حالة تحاول الموازنة المضمدة
              </label>
              <div className="flex gap-8 items-center h-[45px]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="budgetStatus"
                    value="suspended"
                    className="w-4 h-4 text-[#0c4749] border-gray-300 focus:ring-[#0c4749]"
                  />
                  <span className="text-sm text-red-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إيقاف الموازنة
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="budgetStatus"
                    value="awaiting"
                    defaultChecked
                    className="w-4 h-4 text-[#0c4749] border-gray-300 focus:ring-[#0c4749]"
                  />
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تحجيل
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Card>

        {/* Budget Values Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              تحديد قيم الموازنة لكل حساب
            </h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="6" width="18" height="2" rx="1" fill="#093738" />
                <rect x="3" y="11" width="18" height="2" rx="1" fill="#093738" />
                <rect x="3" y="16" width="18" height="2" rx="1" fill="#093738" />
              </svg>
            </button>
          </div>

          <Card className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" dir="rtl">
                <thead>
                  <tr
                    className="border-b border-[#e2e2e2]"
                    style={{ backgroundColor: '#F1F5F980' }}
                  >
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحساب
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      قيمة الموازنة
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {budgetAccounts.map((account) => (
                    <tr
                      key={account.id}
                      className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {account.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <div className="relative w-64">
                            <input
                              type="number"
                              value={account.amount}
                              onChange={(e) =>
                                handleAmountChange(account.id, Number(e.target.value))
                              }
                              className="w-full h-[45px] px-3 pr-12 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                              dir="rtl"
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                              <img
                                src="/images/currency/saudi-riyal.svg"
                                alt="ريال"
                                className="w-3 h-3"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-base font-bold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مبلغ الموازنة الإجمالي
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 text-lg font-bold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <img
                            src="/images/currency/saudi-riyal.svg"
                            alt="ريال"
                            className="w-4 h-4"
                          />
                          <span>{totalBudget.toLocaleString()}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* General Notes */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] p-8">
          <label className="block text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-3">
            ملاحظات عامة
          </label>
          <textarea
            rows={5}
            placeholder="ملاحظاتك هنا ..."
            className="w-full px-4 py-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] resize-none focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
            dir="rtl"
          />
        </Card>
      </div>
    </Layout>
  );
};

export default BudgetForm;
