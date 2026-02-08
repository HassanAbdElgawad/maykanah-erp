import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { SideDrawer } from '../../components/ui/SideDrawer';
import InitialFilters from '../../components/InitialFilters';
import { Download, Filter, Plus, Search, MoreVertical, Settings, Eye, Edit2, Trash2, X, ChevronDown, ChevronUp } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface AssetCategory {
  id: string;
  code: string;
  name: string;
  depreciationMethod: string;
  usefulLife: string;
  residualValue: string;
  assetAccount: string;
  isActive: boolean;
}

export const AssetCategories = (): JSX.Element => {
  const { dir } = useLanguage();
  const navigate = useNavigate();

  const [categories, setCategories] = useState<AssetCategory[]>([
    {
      id: '1',
      code: 'CAT-001',
      name: 'أجهزة الحاسوب',
      depreciationMethod: 'القسط الثابت',
      usefulLife: '5 سنوات',
      residualValue: '10%',
      assetAccount: '150101',
      isActive: true,
    },
    {
      id: '2',
      code: 'CAT-002',
      name: 'الأثاث المكتبي',
      depreciationMethod: 'القسط الثابت',
      usefulLife: '10 سنوات',
      residualValue: '5%',
      assetAccount: '150201',
      isActive: true,
    },
    {
      id: '3',
      code: 'CAT-003',
      name: 'المركبات',
      depreciationMethod: 'القسط الثابت',
      usefulLife: '4 سنوات',
      residualValue: '₪ 5,000',
      assetAccount: '150301',
      isActive: true,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState({
    definition: true,
    accounts: false,
    depreciation: false,
  });

  const toggleSection = (section: 'definition' | 'accounts' | 'depreciation') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleViewDetails = (category: AssetCategory) => {
    setSelectedCategory(category);
    setIsDetailsModalOpen(true);
    setOpenMenuId(null);
  };

  const handleEditCategory = (category: AssetCategory) => {
    navigate(`/settings/assets/asset-categories/edit/${category.id}`);
    setOpenMenuId(null);
  };

  const handleDeleteCategory = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الفئة؟')) {
      setCategories((prev) => prev.filter((category) => category.id !== id));
      setOpenMenuId(null);
    }
  };

  const toggleMenu = (categoryId: string) => {
    setOpenMenuId(openMenuId === categoryId ? null : categoryId);
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.assetAccount.includes(searchQuery)
  );

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
        <InitialFilters>
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث من هنا (كود، اسم الفئة، رقم الحساب...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[38px] pr-9 pl-3 bg-white border border-[#e2e2e2] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749] text-right"
                  dir="rtl"
                />
              </div>
            </div>

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
                <span>تحميل</span>
                <Download className="h-3.5 w-3.5" />
              </Button>

              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              >
                <span>فلتر</span>
                <Filter className="h-3.5 w-3.5" />
              </Button>

              <button
                className={buttonClasses.primary}
                onClick={() => navigate('/settings/assets/asset-categories/create')}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                فئة جديدة
              </button>
            </div>
          </div>
        </InitialFilters>

        <Card className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="">
            <table className="w-full" dir={dir}>
              <thead>
                <tr className="border-b border-[#e2e2e2]" style={{ backgroundColor: '#F1F5F980' }}>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    كود الفئة
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    اسم الفئة
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    طريقة الإهلاك
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    العمر الافتراضي
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    القيمة المتبقية
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    حساب الأصل
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[200px]">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
                  >
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {category.code}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {category.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {category.depreciationMethod}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {category.usefulLife}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {category.residualValue}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {category.assetAccount}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] min-w-[140px]">
                          <span
                            className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                              category.isActive ? 'text-green-500' : 'text-red-500'
                            }`}
                          >
                            {category.isActive ? 'نشط' : 'غير نشط'}
                          </span>
                        </div>

                        <div className="relative dropdown-menu-container">
                          <button
                            onClick={() => toggleMenu(category.id)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <MoreVertical className="w-4 h-4 text-[#093738]" />
                          </button>

                          {openMenuId === category.id && (
                            <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                              <button
                                onClick={() => handleViewDetails(category)}
                                className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                <Eye className="w-4 h-4" />
                                عرض التفاصيل
                              </button>
                              <button
                                onClick={() => handleEditCategory(category)}
                                className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                <Edit2 className="w-4 h-4" />
                                تعديل بيانات الفئة
                              </button>
                              <button
                                onClick={() => handleDeleteCategory(category.id)}
                                className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 rounded-b-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                <Trash2 className="w-4 h-4" />
                                مسح الأصل
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

      <SideDrawer
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="فئة جديدة"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              إلغاء
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
              كود الفئة
            </label>
            <input
              type="text"
              placeholder="مثال: CAT-001"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              اسم الفئة
            </label>
            <input
              type="text"
              placeholder="مثال: أجهزة الحاسوب"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              طريقة الإهلاك
            </label>
            <select
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            >
              <option value="القسط الثابت">القسط الثابت</option>
              <option value="الرصيد المتناقص">الرصيد المتناقص</option>
              <option value="مجموع أرقام السنوات">مجموع أرقام السنوات</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              العمر الافتراضي
            </label>
            <input
              type="text"
              placeholder="مثال: 5 سنوات"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              القيمة المتبقية
            </label>
            <input
              type="text"
              placeholder="مثال: 10%"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              حساب الأصل
            </label>
            <input
              type="text"
              placeholder="مثال: 150101"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>
        </div>
      </SideDrawer>

      {/* Details Modal */}
      {isDetailsModalOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-[#e2e2e2] px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تفاصيل فئة الأصول - {selectedCategory.name}
              </h2>
              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#093738]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Definition Section */}
              <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
                <button
                  onClick={() => toggleSection('definition')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    بيانات تعريف الفئة
                  </h3>
                  {expandedSections.definition ? (
                    <ChevronUp className="w-5 h-5 text-[#093738]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#093738]" />
                  )}
                </button>

                {expandedSections.definition && (
                  <div className="px-6 pb-6 border-t border-[#e2e2e2]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          كود الفئة
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {selectedCategory.code}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          اسم الفئة
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {selectedCategory.name}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          طريقة الإهلاك
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {selectedCategory.depreciationMethod}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          العمر الافتراضي
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {selectedCategory.usefulLife}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          حساب الأصل
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {selectedCategory.assetAccount}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          القيمة المتبقية(% أو SAR)
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {selectedCategory.residualValue}
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          الحالة
                        </label>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-600 rounded-lg text-sm font-medium">
                          نشطة
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accounting Accounts Section */}
              <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
                <button
                  onClick={() => toggleSection('accounts')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحسابات المحاسبية
                  </h3>
                  {expandedSections.accounts ? (
                    <ChevronUp className="w-5 h-5 text-[#093738]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#093738]" />
                  )}
                </button>

                {expandedSections.accounts && (
                  <div className="px-6 pb-6 border-t border-[#e2e2e2]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          حساب الأصل الثابت
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          أجهزة وتقنية المعلومات
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          حساب مجمع الإهلاك
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          أجهزة وتقنية المعلومات
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          حساب مصروف الإهلاك
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          أجهزة وتقنية المعلومات
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Depreciation Policy Section */}
              <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
                <button
                  onClick={() => toggleSection('depreciation')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    سياسة الإهلاك
                  </h3>
                  {expandedSections.depreciation ? (
                    <ChevronUp className="w-5 h-5 text-[#093738]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#093738]" />
                  )}
                </button>

                {expandedSections.depreciation && (
                  <div className="px-6 pb-6 border-t border-[#e2e2e2]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          طريقة الإهلاك
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          الإهلاك الخطي
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          العمر الافتراضي(سنوات أو أشهر)
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {selectedCategory.usefulLife}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          عدد دفعات الإهلاك
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          60
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                          نسبة مئوية
                        </label>
                        <p className="text-base font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          20%
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
