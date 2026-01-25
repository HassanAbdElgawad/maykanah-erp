import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../../components/ui/card';
import { SideDrawer } from '../../components/ui/SideDrawer';
import InitialFilters from '../../components/InitialFilters';
import { Download, Filter, Plus, Search, MoreVertical, Settings } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface TaxSetting {
  id: string;
  name: string;
  taxRate: number;
  accountName: string;
  includedInBasePrice: boolean;
  application: 'sales' | 'purchases';
  isActive: boolean;
}

export const TaxSettings = (): JSX.Element => {
  const { dir } = useLanguage();

  const [taxSettings, setTaxSettings] = useState<TaxSetting[]>([
    {
      id: '1',
      name: 'ضريبة القيمة المضافة 15%',
      taxRate: 15,
      accountName: '2300 - ضريبة القيمة المضافة',
      includedInBasePrice: false,
      application: 'sales',
      isActive: true,
    },
    {
      id: '2',
      name: 'ضريبة القيمة المضافة 5%',
      taxRate: 5,
      accountName: '2300 - ضريبة القيمة المضافة',
      includedInBasePrice: false,
      application: 'sales',
      isActive: true,
    },
    {
      id: '3',
      name: 'ضريبة مبيعات محلية',
      taxRate: 10,
      accountName: '2310 - ضريبة مبيعات',
      includedInBasePrice: false,
      application: 'purchases',
      isActive: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTax, setSelectedTax] = useState<TaxSetting | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleToggleActive = (id: string) => {
    setTaxSettings(prev =>
      prev.map(tax =>
        tax.id === id ? { ...tax, isActive: !tax.isActive } : tax
      )
    );
  };

  const handleEditTax = (tax: TaxSetting) => {
    setSelectedTax(tax);
    setIsEditModalOpen(true);
    setOpenMenuId(null);
  };

  const toggleMenu = (taxId: string) => {
    setOpenMenuId(openMenuId === taxId ? null : taxId);
  };

  const filteredTaxSettings = taxSettings.filter(tax =>
    tax.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tax.accountName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tax.taxRate.toString().includes(searchQuery)
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
                  placeholder="ابحث من هنا (اسم الضريبة، رقم الحساب، اسم الحساب، نسبة الضريبة...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[38px] pr-9 pl-3 bg-white border border-[#e2e2e2] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749] text-right"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm flex items-center gap-2"
              >
                <span>إظهار/إخفاء أعمدة</span>
                <Settings className="h-3.5 w-3.5" />
              </button>

              <button
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm flex items-center"
              >
                <span>تصدير</span>
                <Download className="h-3.5 w-3.5" />
              </button>

              <button
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm flex items-center"
              >
                <span>فلاتر</span>
                <Filter className="h-3.5 w-3.5" />
              </button>

              <button
                className={buttonClasses.primary}
                onClick={() => setIsAddModalOpen(true)}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                إضافة ضريبة جديد
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="overflow-x-auto">
            <table className="w-full" dir={dir}>
              <thead>
                <tr className="border-b border-[#e2e2e2]" style={{ backgroundColor: '#F1F5F980' }}>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    اسم الضريبة
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    نسبة الضريبة
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    اسم الحساب
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    متضمنة في الأسعار الأساسية ؟
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    تطبيق الضريبة
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[200px]">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTaxSettings.map((tax) => (
                  <tr
                    key={tax.id}
                    className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
                  >
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {tax.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {tax.taxRate}%
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {tax.accountName}
                    </td>
                    <td className="px-6 py-4 text-center border-l border-[#F1F5F9]">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                        tax.includedInBasePrice 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {tax.includedInBasePrice ? 'نعم' : 'لا'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-[#F1F5F9]">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                        tax.application === 'sales'
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-pink-100 text-pink-700'
                      }`}>
                        {tax.application === 'sales' ? 'مبيعات' : 'مشتريات'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {/* Status Toggle */}
                        <div className="inline-flex justify-between items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] min-w-[140px]">
                          <button
                            onClick={() => handleToggleActive(tax.id)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              tax.isActive ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                                tax.isActive ? 'translate-x-[0]' : 'translate-x-[-22px]'
                              }`}
                            />
                          </button>

                          <span className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            tax.isActive ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {tax.isActive ? 'نشط' : 'غير نشط'}
                          </span>
                        </div>

                        {/* More options button with dropdown */}
                        <div className="relative dropdown-menu-container">
                          <button
                            onClick={() => toggleMenu(tax.id)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            title="المزيد"
                          >
                            <MoreVertical className="w-4 h-4 text-[#093738]" />
                          </button>
                          
                          {openMenuId === tax.id && (
                            <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                              <button
                                onClick={() => handleEditTax(tax)}
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

      {/* Add Tax SideDrawer */}
      <SideDrawer
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="إضافة قالب ضريبة جديد"
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
              التاريخ
            </label>
            <input
              type="date"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              اسم الضريبة
            </label>
            <input
              type="text"
              placeholder="اسم الضريبة هنا ..."
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              نسبة الضريبة
            </label>
            <input
              type="text"
              placeholder="نسبة الضريبة هنا ..."
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              تطبيق الضريبة
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  مبيعات
                </span>
                <input 
                  type="radio" 
                  name="add-tax-application" 
                  value="sales"
                  defaultChecked 
                  className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                />
              </label>
              <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  مشتريات
                </span>
                <input 
                  type="radio" 
                  name="add-tax-application" 
                  value="purchases"
                  className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              اسم الحساب
            </label>
            <input
              type="text"
              placeholder="اسم الحساب هنا ..."
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              متضمنة في الأسعار الأساسية ؟
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  نعم
                </span>
                <input 
                  type="radio" 
                  name="add-tax-included" 
                  value="yes"
                  className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                />
              </label>
              <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  لا
                </span>
                <input 
                  type="radio" 
                  name="add-tax-included" 
                  value="no"
                  defaultChecked 
                  className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                />
              </label>
            </div>
          </div>
        </div>
      </SideDrawer>

      {/* Edit Tax SideDrawer */}
      <SideDrawer
        isOpen={isEditModalOpen && selectedTax !== null}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedTax(null);
          setOpenMenuId(null);
        }}
        title="تعديل الضريبة"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                setIsEditModalOpen(false);
                setSelectedTax(null);
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
                setSelectedTax(null);
                setOpenMenuId(null);
              }}
            >
              حفظ
            </button>
          </div>
        }
      >
        {selectedTax && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                اسم الضريبة
              </label>
              <input
                type="text"
                defaultValue={selectedTax.name}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                نسبة الضريبة
              </label>
              <input
                type="text"
                defaultValue={`${selectedTax.taxRate}%`}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                تطبيق الضريبة
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مبيعات
                  </span>
                  <input 
                    type="radio" 
                    name="edit-tax-application" 
                    value="sales"
                    defaultChecked={selectedTax.application === 'sales'}
                    className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                  />
                </label>
                <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مشتريات
                  </span>
                  <input 
                    type="radio" 
                    name="edit-tax-application" 
                    value="purchases"
                    defaultChecked={selectedTax.application === 'purchases'}
                    className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                اسم الحساب
              </label>
              <input
                type="text"
                defaultValue={selectedTax.accountName}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                متضمنة في الأسعار الأساسية ؟
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نعم
                  </span>
                  <input 
                    type="radio" 
                    name="edit-tax-included" 
                    value="yes"
                    defaultChecked={selectedTax.includedInBasePrice}
                    className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                  />
                </label>
                <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    لا
                  </span>
                  <input 
                    type="radio" 
                    name="edit-tax-included" 
                    value="no"
                    defaultChecked={!selectedTax.includedInBasePrice}
                    className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                  />
                </label>
              </div>
            </div>
          </div>
        )}
      </SideDrawer>
    </Layout>
  );
};

export default TaxSettings;
