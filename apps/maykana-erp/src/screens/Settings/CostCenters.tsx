import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../../components/ui/card';
import { SideDrawer } from '../../components/ui/SideDrawer';
import InitialFilters from '../../components/InitialFilters';
import {
  Download,
  Filter,
  Plus,
  MoreVertical,
  Search,
  ChevronDown,
  Folder,
  FolderOpen,
} from 'lucide-react';
import { buttonClasses } from '../../styles';

interface CostCenter {
  id: string;
  code: string;
  name: string;
  isPrimary: boolean;
  accountType: string;
  isActive: boolean;
  children?: CostCenter[];
}

export const CostCenters = (): JSX.Element => {
  const { dir } = useLanguage();

  const [expandedCenters, setExpandedCenters] = useState<Set<string>>(new Set());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCostCenter, setSelectedCostCenter] = useState<CostCenter | null>(null);
  const [parentCenterForAdd, setParentCenterForAdd] = useState<string | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [costCenters, setCostCenters] = useState<CostCenter[]>([
    {
      id: '1',
      code: '1',
      name: 'مركز تكلفة 1',
      isPrimary: true,
      accountType: 'رئيسي',
      isActive: true,
      children: [
        {
          id: '11',
          code: '11',
          name: 'مركز تكلفة 1-1',
          isPrimary: false,
          accountType: '',
          isActive: true,
          children: [
            {
              id: '111',
              code: '111',
              name: 'مركز تكلفة',
              isPrimary: false,
              accountType: '',
              isActive: false,
              children: [
                {
                  id: '1111',
                  code: '1111',
                  name: 'مركز تكلفة - 1111',
                  isPrimary: false,
                  accountType: '',
                  isActive: false,
                },
              ],
            },
            {
              id: '112',
              code: '112',
              name: 'مركز تكلفة 2-1',
              isPrimary: false,
              accountType: 'رئيسي',
              isActive: true,
              children: [
                {
                  id: '1121',
                  code: '1121',
                  name: 'مركز تكلفة 1-2',
                  isPrimary: false,
                  accountType: '',
                  isActive: true,
                },
              ],
            },
            {
              id: '113',
              code: '113',
              name: 'مركز تكلفة 1-3',
              isPrimary: false,
              accountType: '',
              isActive: true,
              children: [
                {
                  id: '1131',
                  code: '1131',
                  name: 'مركز تكلفة 1-3-',
                  isPrimary: false,
                  accountType: '',
                  isActive: false,
                },
              ],
            },
            {
              id: '114',
              code: '114',
              name: 'مركز تكلفة 4-',
              isPrimary: false,
              accountType: '',
              isActive: true,
              children: [
                {
                  id: '1141',
                  code: '1141',
                  name: 'مركز تكلفة 1-4',
                  isPrimary: false,
                  accountType: '',
                  isActive: false,
                },
              ],
            },
            {
              id: '115',
              code: '115',
              name: 'مركز تكلفة 5',
              isPrimary: false,
              accountType: '',
              isActive: true,
              children: [
                {
                  id: '1151',
                  code: '1151',
                  name: 'مركز تكلفة 1-5',
                  isPrimary: false,
                  accountType: '',
                  isActive: true,
                },
              ],
            },
            {
              id: '116',
              code: '116',
              name: 'مركز تكلفة 6',
              isPrimary: false,
              accountType: 'فرعي',
              isActive: true,
              children: [
                {
                  id: '1161',
                  code: '1161',
                  name: 'مركز تكلفة 1-6',
                  isPrimary: false,
                  accountType: '',
                  isActive: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      code: '2',
      name: 'مركز تكلفة 2',
      isPrimary: true,
      accountType: 'رئيسي',
      isActive: true,
      children: [
        {
          id: '21',
          code: '21',
          name: 'مركز تكلفة 2-1',
          isPrimary: false,
          accountType: 'فرعي',
          isActive: true,
          children: [
            {
              id: '211',
              code: '211',
              name: 'مركز تكلفة 2-1-1',
              isPrimary: false,
              accountType: '',
              isActive: true,
            },
            {
              id: '212',
              code: '212',
              name: 'مركز تكلفة 2-1-2',
              isPrimary: false,
              accountType: '',
              isActive: false,
            },
          ],
        },
        {
          id: '22',
          code: '22',
          name: 'مركز تكلفة 2-2',
          isPrimary: false,
          accountType: '',
          isActive: true,
        },
      ],
    },
    {
      id: '3',
      code: '3',
      name: 'مركز تكلفة 3',
      isPrimary: true,
      accountType: 'رئيسي',
      isActive: true,
      children: [
        {
          id: '31',
          code: '31',
          name: 'مركز تكلفة 3-1',
          isPrimary: false,
          accountType: '',
          isActive: true,
          children: [
            {
              id: '311',
              code: '311',
              name: 'مركز تكلفة 3-1-1',
              isPrimary: false,
              accountType: 'فرعي',
              isActive: true,
            },
          ],
        },
      ],
    },
    {
      id: '4',
      code: '4',
      name: 'مركز تكلفة 4',
      isPrimary: true,
      accountType: 'رئيسي',
      isActive: false,
      children: [
        {
          id: '41',
          code: '41',
          name: 'مركز تكلفة 4-1',
          isPrimary: false,
          accountType: '',
          isActive: false,
        },
      ],
    },
    {
      id: '5',
      code: '5',
      name: 'مركز تكلفة 5',
      isPrimary: true,
      accountType: 'رئيسي',
      isActive: true,
      children: [
        {
          id: '51',
          code: '51',
          name: 'مركز تكلفة 5-1',
          isPrimary: false,
          accountType: 'فرعي',
          isActive: true,
        },
        {
          id: '52',
          code: '52',
          name: 'مركز تكلفة 5-2',
          isPrimary: false,
          accountType: '',
          isActive: true,
        },
      ],
    },
  ]);

  // Recursive function to filter and flatten the tree for search
  const filterCentersRecursive = (centers: CostCenter[], query: string): CostCenter[] => {
    if (!query) return centers;
    
    const filtered: CostCenter[] = [];
    
    for (const center of centers) {
      const matchesSearch =
        center.code.toLowerCase().includes(query.toLowerCase()) ||
        center.name.toLowerCase().includes(query.toLowerCase()) ||
        center.accountType.toLowerCase().includes(query.toLowerCase());
      
      if (matchesSearch) {
        filtered.push(center);
      }
      
      if (center.children) {
        const childMatches = filterCentersRecursive(center.children, query);
        filtered.push(...childMatches);
      }
    }
    
    return filtered;
  };

  const filteredCostCenters = searchQuery
    ? filterCentersRecursive(costCenters, searchQuery)
    : costCenters;

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

  const toggleExpand = (id: string) => {
    setExpandedCenters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleEditCostCenter = (center: CostCenter) => {
    setSelectedCostCenter(center);
    setIsEditModalOpen(true);
    setOpenMenuId(null);
  };

  const handleToggleActive = (id: string) => {
    const toggleActiveRecursive = (centers: CostCenter[]): CostCenter[] => {
      return centers.map((center) => {
        if (center.id === id) {
          return { ...center, isActive: !center.isActive };
        }
        if (center.children) {
          return { ...center, children: toggleActiveRecursive(center.children) };
        }
        return center;
      });
    };
    setCostCenters((prev) => toggleActiveRecursive(prev));
  };

  // Recursive render function for cost center rows
  const renderCostCenterRows = (centers: CostCenter[], level: number): JSX.Element[] => {
    const rows: JSX.Element[] = [];

    centers.forEach((center) => {
      const isExpanded = expandedCenters.has(center.id);
      const hasChildren = center.children && center.children.length > 0;
      const paddingRight = level * 40;

      rows.push(
        <tr
          key={center.id}
          className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
        >
          <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            {center.code}
          </td>
          <td
            className="py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]"
            style={{ paddingRight: `${24 + paddingRight}px`, paddingLeft: '24px' }}
          >
            <div className="flex items-center gap-2">
              {hasChildren ? (
                <>
                  <button
                    onClick={() => toggleExpand(center.id)}
                    className="p-0.5 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-[#093738] transition-transform ${
                        isExpanded ? 'rotate-0' : 'rotate-180'
                      }`}
                    />
                  </button>
                  {isExpanded ? (
                    <FolderOpen className={`w-4 h-4 flex-shrink-0 ${level === 0 ? 'text-[#10B981]' : 'text-[#6B7280]'}`} />
                  ) : (
                    <Folder className={`w-4 h-4 flex-shrink-0 ${level === 0 ? 'text-[#10B981]' : 'text-[#6B7280]'}`} />
                  )}
                </>
              ) : (
                <div className="w-[20px] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#6B7280] text-xl leading-none">•</span>
                </div>
              )}
              <span className="truncate">{center.name}</span>
            </div>
          </td>
          <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            <span className={center.accountType ? 'text-[#10B981]' : 'text-[#6B7280]'}>
              {center.accountType || '-'}
            </span>
          </td>
          <td className="px-6 py-2">
            <div className="flex items-center justify-center gap-3">
              {/* Toggle Switch Container */}
              <div className="inline-flex items-center justify-between min-w-[8rem] gap-3 px-2 py-2 rounded-xl bg-[#F5F5F5]">
                <span
                  className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                    center.isActive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {center.isActive ? 'نشط' : 'غير نشط'}
                </span>

                <button
                  onClick={() => handleToggleActive(center.id)}
                  className={`relative inline-flex h-6 w-11  items-center rounded-full transition-colors ${
                    center.isActive ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                      center.isActive ? 'translate-x-[-3px]' : 'translate-x-[-22px]'
                    }`}
                  />
                </button>
              </div>

              {/* More options button with dropdown */}
              <div className="relative dropdown-menu-container">
                <button
                  onClick={() => toggleMenu(center.id)}
                  className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  title="المزيد"
                >
                  <MoreVertical className="w-4 h-4 text-[#093738]" />
                </button>

                {openMenuId === center.id && (
                  <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <button
                      onClick={() => handleEditCostCenter(center)}
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
      );

      // Render children if expanded
      if (isExpanded && hasChildren) {
        rows.push(...renderCostCenterRows(center.children!, level + 1));
      }
    });

    return rows;
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
                  placeholder="ابحث من هنا (رقم مركز التكلفة، اسم مركز التكلفة، نوع مركز التكلفة...)"
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
                <span>تصدير</span>
                <Download className="h-3.5 w-3.5" />
              </button>

              <button className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm flex items-center">
                <span>فلاتر</span>
                <Filter className="h-3.5 w-3.5" />
              </button>

              <button
                className={buttonClasses.primary}
                onClick={() => setIsAddModalOpen(true)}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                مركز تكلفة جديد
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
                    رقم مركز التكلفة
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    اسم مركز التكلفة
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    نوع الحساب
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[200px]">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody>
                {renderCostCenterRows(filteredCostCenters, 0)}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Add Cost Center SideDrawer */}
      <SideDrawer
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="إضافة مركز تكلفة جديد"
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
              رقم مركز التكلفة
            </label>
            <input
              type="text"
              placeholder="CC-00001"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              اسم مركز التكلفة
            </label>
            <input
              type="text"
              placeholder="مركز تكلفة - 1111"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              ما هو مركز التكلفة رئيسي؟
            </label>
            <div className="flex gap-8 items-center h-[45px]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isPrimary"
                  value="yes"
                  className="w-5 h-5 text-[#0c4749] border-gray-300 focus:ring-[#0c4749]"
                />
                <span className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  نعم
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isPrimary"
                  value="no"
                  defaultChecked
                  className="w-5 h-5 text-[#0c4749] border-gray-300 focus:ring-[#0c4749]"
                />
                <span className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  لا
                </span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              حساب مركز التكلفة
            </label>
            <select
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099] appearance-none cursor-pointer"
              dir="rtl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left 12px center',
              }}
            >
              <option value="">ضريبة القيمة – 2300</option>
              <option value="project">مشروع</option>
              <option value="department">قسم</option>
            </select>
          </div>
        </div>
      </SideDrawer>

      {/* Edit Cost Center SideDrawer */}
      <SideDrawer
        isOpen={isEditModalOpen && selectedCostCenter !== null}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedCostCenter(null);
          setOpenMenuId(null);
        }}
        title="تعديل مركز التكلفة"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                setIsEditModalOpen(false);
                setSelectedCostCenter(null);
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
                setSelectedCostCenter(null);
                setOpenMenuId(null);
              }}
            >
              حفظ
            </button>
          </div>
        }
      >
        {selectedCostCenter && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                رقم مركز التكلفة
              </label>
              <input
                type="text"
                defaultValue={selectedCostCenter.code}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                اسم مركز التكلفة
              </label>
              <input
                type="text"
                defaultValue={selectedCostCenter.name}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                ما هو مركز التكلفة رئيسي؟
              </label>
              <div className="flex gap-8 items-center h-[45px]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isPrimaryEdit"
                    value="yes"
                    defaultChecked={selectedCostCenter.isPrimary}
                    className="w-5 h-5 text-[#0c4749] border-gray-300 focus:ring-[#0c4749]"
                  />
                  <span className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نعم
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isPrimaryEdit"
                    value="no"
                    defaultChecked={!selectedCostCenter.isPrimary}
                    className="w-5 h-5 text-[#0c4749] border-gray-300 focus:ring-[#0c4749]"
                  />
                  <span className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    لا
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                حساب مركز التكلفة
              </label>
              <select
                defaultValue={selectedCostCenter.accountType}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099] appearance-none cursor-pointer"
                dir="rtl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left 12px center',
                }}
              >
                <option value="">ضريبة القيمة – 2300</option>
                <option value="project">مشروع</option>
                <option value="department">قسم</option>
              </select>
            </div>
          </div>
        )}
      </SideDrawer>
    </Layout>
  );
};

export default CostCenters;
