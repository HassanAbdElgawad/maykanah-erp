import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../../components/ui/card';
import { SideDrawer } from '../../components/ui/SideDrawer';
import InitialFilters from '../../components/InitialFilters';
import { Download, Filter, Plus, Search, MoreVertical } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface TermsCondition {
  id: string;
  name: string;
  type: string;
  details: string;
  isActive: boolean;
}

export const TermsConditions = (): JSX.Element => {
  const { dir } = useLanguage();

  const [terms, setTerms] = useState<TermsCondition[]>([
    {
      id: '1',
      name: 'شرط المبيعات',
      type: 'مشتريات',
      details: 'تفاصيل شروط المبيعات هنا',
      isActive: true,
    },
    {
      id: '2',
      name: 'شرط المشتريات',
      type: 'مشتريات',
      details: 'تفاصيل شروط المشتريات هنا',
      isActive: true,
    },
    {
      id: '3',
      name: 'شرط العقود المشرية',
      type: 'مشتريات',
      details: 'تفاصيل شروط العقود المشرية هنا',
      isActive: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<TermsCondition | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleToggleActive = (id: string) => {
    setTerms(prev =>
      prev.map(term =>
        term.id === id ? { ...term, isActive: !term.isActive } : term
      )
    );
  };

  const handleEditTerm = (term: TermsCondition) => {
    setSelectedTerm(term);
    setIsEditModalOpen(true);
    setOpenMenuId(null);
  };

  const toggleMenu = (termId: string) => {
    setOpenMenuId(openMenuId === termId ? null : termId);
  };

  const filteredTerms = terms.filter(term =>
    term.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.details.toLowerCase().includes(searchQuery.toLowerCase())
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
                  placeholder="ابحث من هنا (اسم الشرط، نوع الشرط، تفاصيل الشرط...)"
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
                إضافة شروط وأحكام
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
                    اسم الشرط
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    تفاصيل الشرط
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[200px]">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTerms.map((term) => (
                  <tr
                    key={term.id}
                    className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
                  >
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {term.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {term.details}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {/* Status Toggle */}
                        <div className="inline-flex justify-between items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] min-w-[140px]">
                          <button
                            onClick={() => handleToggleActive(term.id)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              term.isActive ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                                term.isActive ? 'translate-x-[0]' : 'translate-x-[-22px]'
                              }`}
                            />
                          </button>

                          <span className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            term.isActive ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {term.isActive ? 'نشط' : 'غير نشط'}
                          </span>
                        </div>

                        {/* More options button with dropdown */}
                        <div className="relative dropdown-menu-container">
                          <button
                            onClick={() => toggleMenu(term.id)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            title="المزيد"
                          >
                            <MoreVertical className="w-4 h-4 text-[#093738]" />
                          </button>
                          
                          {openMenuId === term.id && (
                            <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                              <button
                                onClick={() => handleEditTerm(term)}
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

      {/* Add Terms & Conditions SideDrawer */}
      <SideDrawer
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="إضافة الشروط والأحكام"
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
              اسم الشرط
            </label>
            <input
              type="text"
              placeholder="اسم الشرط هنا ..."
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              نوع الشرط
            </label>
            <select
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            >
              <option value="">مشتريات</option>
              <option value="purchases">مشتريات</option>
              <option value="sales">مبيعات</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              تفاصيل الشرط
            </label>
            <textarea
              placeholder="توضيح حقوق الملكية الفكرية للمحتوى الموجود على الموقع أو التطبيق"
              rows={6}
              className="w-full px-3 py-2 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] resize-none"
              dir="rtl"
            />
          </div>
        </div>
      </SideDrawer>

      {/* Edit Terms & Conditions SideDrawer */}
      <SideDrawer
        isOpen={isEditModalOpen && selectedTerm !== null}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedTerm(null);
          setOpenMenuId(null);
        }}
        title="تعديل الشروط والأحكام"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                setIsEditModalOpen(false);
                setSelectedTerm(null);
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
                setSelectedTerm(null);
                setOpenMenuId(null);
              }}
            >
              حفظ
            </button>
          </div>
        }
      >
        {selectedTerm && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                اسم الشرط
              </label>
              <input
                type="text"
                defaultValue={selectedTerm.name}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                نوع الشرط
              </label>
              <select
                defaultValue={selectedTerm.type}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              >
                <option value="مشتريات">مشتريات</option>
                <option value="مبيعات">مبيعات</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                تفاصيل الشرط
              </label>
              <textarea
                defaultValue={selectedTerm.details}
                rows={6}
                className="w-full px-3 py-2 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] resize-none"
                dir="rtl"
              />
            </div>
          </div>
        )}
      </SideDrawer>
    </Layout>
  );
};

export default TermsConditions;
