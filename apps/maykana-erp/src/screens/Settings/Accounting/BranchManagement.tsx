import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import InitialFilters from '@/components/InitialFilters';
import {
  Download,
  Filter,
  Plus,
  MoreVertical,
  Search,
} from 'lucide-react';
import { buttonClasses } from '@/styles';
import { getBranchesSampleData, type Branch } from '@/data/settings/branch-management.data';

export const BranchManagement = (): JSX.Element => {
  const { dir } = useLanguage();

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [branches, setBranches] = useState<Branch[]>(() => getBranchesSampleData());

  const filteredBranches = branches.filter((branch) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      branch.code.toLowerCase().includes(query) ||
      branch.name.toLowerCase().includes(query) ||
      branch.address.toLowerCase().includes(query) ||
      branch.phone.toLowerCase().includes(query)
    );
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-menu-container')) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleEditBranch = (_branch: Branch) => {
    // TODO: Implement edit functionality
    setOpenMenuId(null);
  };

  const handleToggleActive = (id: string) => {
    setBranches((prev) =>
      prev.map((branch) =>
        branch.id === id ? { ...branch, isActive: !branch.isActive } : branch
      )
    );
  };

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
                  placeholder="ابحث من هنا (رقم الفرع، إسم الفرع، رقم الفرع الرئيسي ...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[38px] pr-9 pl-3 bg-white border border-[#e2e2e2] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749] text-right"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm flex items-center gap-2">
                <span>تحميل</span>
                <Download className="h-3.5 w-3.5" />
              </button>

              <button className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm flex items-center">
                <span>فلتر</span>
                <Filter className="h-3.5 w-3.5" />
              </button>

              <button
                className={buttonClasses.primary}
                onClick={() => {/* TODO: Implement add functionality */}}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                فرع جديد
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="overflow-x-auto">
            <table className="w-full" dir={dir}>
              <thead>
                <tr
                  className="border-b border-[#e2e2e2]"
                  style={{ backgroundColor: '#F1F5F980' }}
                >
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    معرف الفرع
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    إسم الفرع
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    عنوان الفرع
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    هاتف الفرع
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[200px]">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBranches.map((branch) => (
                  <tr
                    key={branch.id}
                    className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
                  >
                    <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {branch.code}
                    </td>
                    <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {branch.name}
                    </td>
                    <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {branch.address}
                    </td>
                    <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {branch.phone}
                    </td>
                    <td className="px-6 py-2">
                      <div className="flex items-center justify-center gap-3">
                        {/* Toggle Switch Container */}
                        <div className="inline-flex items-center justify-between min-w-[8rem] gap-3 px-2 py-2 rounded-xl bg-[#F5F5F5]">
                          <span
                            className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                              branch.isActive ? 'text-green-600' : 'text-red-600'
                            }`}
                          >
                            {branch.isActive ? 'نشط' : 'غير نشط'}
                          </span>

                          <button
                            onClick={() => handleToggleActive(branch.id)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              branch.isActive ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                                branch.isActive ? 'translate-x-[-3px]' : 'translate-x-[-22px]'
                              }`}
                            />
                          </button>
                        </div>

                        {/* More options button with dropdown */}
                        <div className="relative dropdown-menu-container">
                          <button
                            onClick={() => toggleMenu(branch.id)}
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            title="المزيد"
                          >
                            <MoreVertical className="w-4 h-4 text-[#093738]" />
                          </button>

                          {openMenuId === branch.id && (
                            <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                              <button
                                onClick={() => handleEditBranch(branch)}
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
    </Layout>
  );
};
