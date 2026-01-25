import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { SideDrawer } from '../../components/ui/SideDrawer';
import InitialFilters from '../../components/InitialFilters';
import { Download, Filter, Plus, Search, MoreVertical, Settings } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface Currency {
  id: string;
  baseCurrency: string;
  targetCurrency: string;
  exchangeRate: number;
  date: string;
  isActive: boolean;
}

export const Currencies = (): JSX.Element => {
  const { dir } = useLanguage();

  const [currencies, setCurrencies] = useState<Currency[]>([
    {
      id: '1',
      baseCurrency: 'USD',
      targetCurrency: 'SAR',
      exchangeRate: 3.75,
      date: '2024-07-03',
      isActive: true,
    },
    {
      id: '2',
      baseCurrency: 'EUR',
      targetCurrency: 'SAR',
      exchangeRate: 4.4,
      date: '2024-07-10',
      isActive: true,
    },
    {
      id: '3',
      baseCurrency: 'GBP',
      targetCurrency: 'SAR',
      exchangeRate: 4.7,
      date: '2024-07-17',
      isActive: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleToggleActive = (id: string) => {
    setCurrencies((prev) =>
      prev.map((currency) =>
        currency.id === id ? { ...currency, isActive: !currency.isActive } : currency
      )
    );
  };

  const handleEditCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    setIsEditModalOpen(true);
    setOpenMenuId(null);
  };

  const toggleMenu = (currencyId: string) => {
    setOpenMenuId(openMenuId === currencyId ? null : currencyId);
  };

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.baseCurrency.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.targetCurrency.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.exchangeRate.toString().includes(searchQuery)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (openMenuId && !target.closest('.dropdown-menu-container')) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuId]);

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
                  placeholder="ابحث من هنا (العب، سعر الصرف، ...)"
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
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              >
                <span>إظهار/إخفاء أعمدة</span>
                <Settings className="h-3.5 w-3.5" />
              </Button>

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
                onClick={() => setIsAddModalOpen(true)}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                إضافة جديد
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="">
            <table className="w-full" dir={dir}>
              <thead>
                <tr className="border-b border-[#e2e2e2]" style={{ backgroundColor: '#F1F5F980' }}>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    العملة الرئيسية
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    العملة المحول إليها
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    سعر الصرف
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    التاريخ
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[200px]">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCurrencies.map((currency) => (
                  <tr
                    key={currency.id}
                    className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
                  >
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {currency.baseCurrency}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {currency.targetCurrency}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {currency.exchangeRate.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {currency.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {/* Status Toggle */}
                        <div className="inline-flex justify-between items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] min-w-[140px]">
                          <button
                            onClick={() => handleToggleActive(currency.id)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              currency.isActive ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                currency.isActive ? 'translate-x-[-4px]' : 'translate-x-[-22px]'
                              }`}
                            />
                          </button>

                          <span
                            className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                              currency.isActive ? 'text-green-500' : 'text-red-500'
                            }`}
                          >
                            {currency.isActive ? 'نشط' : 'غير نشط'}
                          </span>
                        </div>

                        {/* More options button with dropdown */}
                        <div className="relative dropdown-menu-container">
                          <button
                            onClick={() => toggleMenu(currency.id)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            title="المزيد"
                          >
                            <MoreVertical className="w-4 h-4 text-[#093738]" />
                          </button>

                          {openMenuId === currency.id && (
                            <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                              <button
                                onClick={() => handleEditCurrency(currency)}
                                className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                تعديل
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Add Currency SideDrawer */}
      <SideDrawer
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="إضافة عملة جديدة"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              إغلاق
            </button>
            <button
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg bg-[#0c4749] hover:bg-[#093738] text-white transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              onClick={() => setIsAddModalOpen(false)}
            >
              حفظ
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              العملة الرئيسية
            </label>
            <input
              type="text"
              placeholder="مثال: USD"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              العملة المحول إليها
            </label>
            <input
              type="text"
              placeholder="مثال: SAR"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              سعر الصرف
            </label>
            <input
              type="text"
              placeholder="مثال: 3.75"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              التاريخ
            </label>
            <input
              type="date"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>
        </div>
      </SideDrawer>

      {/* Edit Currency SideDrawer */}
      <SideDrawer
        isOpen={isEditModalOpen && selectedCurrency !== null}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedCurrency(null);
          setOpenMenuId(null);
        }}
        title="تعديل العملة"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                setIsEditModalOpen(false);
                setSelectedCurrency(null);
                setOpenMenuId(null);
              }}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              إغلاق
            </button>
            <button
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg bg-[#0c4749] hover:bg-[#093738] text-white transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              onClick={() => {
                setIsEditModalOpen(false);
                setSelectedCurrency(null);
                setOpenMenuId(null);
              }}
            >
              حفظ
            </button>
          </div>
        }
      >
        {selectedCurrency && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                العملة الرئيسية
              </label>
              <input
                type="text"
                defaultValue={selectedCurrency.baseCurrency}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                العملة المحول إليها
              </label>
              <input
                type="text"
                defaultValue={selectedCurrency.targetCurrency}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                سعر الصرف
              </label>
              <input
                type="text"
                defaultValue={selectedCurrency.exchangeRate}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                التاريخ
              </label>
              <input
                type="date"
                defaultValue={selectedCurrency.date}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>
          </div>
        )}
      </SideDrawer>
    </Layout>
  );
};

export default Currencies;
