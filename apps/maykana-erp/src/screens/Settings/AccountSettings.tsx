import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import InitialFilters from '../../components/InitialFilters';
import { Download, Filter, Save, Search, ChevronDown } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface AccountSetting {
  id: string;
  label: string;
  selectedAccount: string;
}

export const AccountSettings = (): JSX.Element => {
  const { dir } = useLanguage();

  const [accountSettings, setAccountSettings] = useState<AccountSetting[]>([
    { id: 'sales', label: 'مبيعات', selectedAccount: 'مبيعات' },
    { id: 'default-customer', label: 'حساب العملاء (الافتراضي)', selectedAccount: 'حساب الموردين' },
    { id: 'debtors', label: 'المدين', selectedAccount: 'الدائنين' },
    { id: 'creditors', label: 'الدائنين', selectedAccount: '' },
    { id: 'default-warehouse', label: 'المستودع الافتراضي', selectedAccount: 'المستودع الإفتراضي' },
    { id: 'cost-center', label: 'مركز تكلفة الرياض', selectedAccount: 'مركز التكلفة' },
    { id: 'discounts', label: 'خصومات', selectedAccount: 'حساب الخصم' },
    { id: 'unavailable-warehouse', label: 'مستودع متاجر غير موفر', selectedAccount: 'مخزون الوسيط' },
    { id: 'proportion-expenses', label: 'مصاريف نسبية', selectedAccount: 'تسوية الخزون' },
    { id: 'asset-valuation', label: 'نفقات مدرجة في تقييم الأصول', selectedAccount: 'نفقات مدرجة في تقييم الأصول' },
    { id: 'asset-disposal', label: 'الربح/الخسارة غير يتخلص من الأصول', selectedAccount: 'الربح/الخسارة الخاص يتخلص من الأصول' },
    { id: 'damaged-cost', label: 'تكلفة المنتجة التالفة', selectedAccount: 'تكلفة المنتجة التالفة' },
    { id: 'employee-advances', label: 'سلف الموظفين', selectedAccount: 'حساب الإفتراضي للموظفين' },
    { id: 'outstanding-revenues', label: 'روايات مستحقة', selectedAccount: 'حساب الرواتب' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Mock accounts for dropdowns
  const availableAccounts = [
    'مبيعات',
    'حساب الموردين',
    'الدائنين',
    'المستودع الإفتراضي',
    'مركز التكلفة',
    'حساب الخصم',
    'مخزون الوسيط',
    'تسوية الخزون',
    'نفقات مدرجة في تقييم الأصول',
    'الربح/الخسارة الخاص يتخلص من الأصول',
    'تكلفة المنتجة التالفة',
    'حساب الإفتراضي للموظفين',
    'حساب الرواتب',
  ];

  const handleAccountChange = (id: string, value: string) => {
    setAccountSettings(prev =>
      prev.map(setting =>
        setting.id === id ? { ...setting, selectedAccount: value } : setting
      )
    );
  };

  const handleSave = () => {
    console.log('Saving account settings:', accountSettings);
    // TODO: Implement save functionality
  };

  const filteredSettings = accountSettings.filter(setting =>
    setting.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    setting.selectedAccount.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section with InitialFilters */}
        <InitialFilters>
          <div className="flex items-center justify-between gap-3 w-full">
            {/* Search box */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث من هنا (الحقل، اسم الحساب، التصنيف، ...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[38px] pr-9 pl-3 bg-white border border-[#e2e2e2] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749] text-right"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              >
                
                <span>تصدير</span>
                <Download className="h-3.5 w-3.5" />
              </Button>

              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              >
               
                <span>فلاتر</span>
                 <Filter className="h-3.5 w-3.5" />
              </Button>

              <button
                className={buttonClasses.primary}
                onClick={handleSave}
                style={{ height: '38px', fontSize: '14px' }}
              >
                {/* <Save className="h-3.5 w-3.5" /> */}
                حفظ التغييرات
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir={dir}>
              <thead>
                <tr className="border-b border-[#e2e2e2]" style={{ backgroundColor: '#F1F5F980' }}>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-1/2 border-l border-[#F1F5F9]">
                    الحسابات الافتراضية
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-1/2">
                    اسم الحساب
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredSettings.map((setting, index) => (
                  <tr
                    key={setting.id}
                    className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
                  >
                    <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {setting.label}
                    </td>
                    <td className="px-6 py-1.5">
                      <div className="relative">
                        <select
                          value={setting.selectedAccount}
                          onChange={(e) => handleAccountChange(setting.id, e.target.value)}
                          className="w-full h-[40px] pl-10 pr-3 bg-transparent border-0 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none appearance-none cursor-pointer"
                          dir="rtl"
                        >
                          <option value="">اختر حساب</option>
                          {availableAccounts.map((account) => (
                            <option key={account} value={account}>
                              {account}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default AccountSettings;
