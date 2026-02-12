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
  ChevronDown,
  Folder,
  FolderOpen,
} from 'lucide-react';
import { buttonClasses } from '@/styles';

interface Department {
  id: string;
  code: string;
  name: string;
  isPrimary: boolean;
  accountType: string;
  isActive: boolean;
  children?: Department[];
}

export const DepartmentManagement = (): JSX.Element => {
  const { dir } = useLanguage();

  const [expandedDepartments, setExpandedDepartments] = useState<Set<string>>(new Set());
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [departments, setDepartments] = useState<Department[]>([
    {
      id: '1',
      code: 'CC-1',
      name: 'قسم-1',
      isPrimary: true,
      accountType: 'رئيسي',
      isActive: true,
      children: [
        {
          id: '11',
          code: 'CC-11',
          name: 'قسم-2',
          isPrimary: false,
          accountType: '',
          isActive: true,
        },
        {
          id: '12',
          code: 'CC-12',
          name: 'قسم-3',
          isPrimary: false,
          accountType: '',
          isActive: false,
        },
      ],
    },
    {
      id: '2',
      code: 'CC-2',
      name: 'قسم-1',
      isPrimary: true,
      accountType: 'رئيسي',
      isActive: true,
      children: [
        {
          id: '21',
          code: 'CC-21',
          name: 'قسم-2',
          isPrimary: false,
          accountType: '',
          isActive: true,
        },
        {
          id: '22',
          code: 'CC-22',
          name: 'قسم-3',
          isPrimary: false,
          accountType: '',
          isActive: true,
        },
        {
          id: '23',
          code: 'CC-23',
          name: 'قسم-4',
          isPrimary: false,
          accountType: '',
          isActive: false,
        },
        {
          id: '24',
          code: 'CC-24',
          name: 'قسم-5',
          isPrimary: false,
          accountType: '',
          isActive: true,
        },
      ],
    },
    {
      id: '3',
      code: 'CC-2',
      name: 'قسم-1',
      isPrimary: true,
      accountType: 'رئيسي',
      isActive: false,
    },
  ]);

  // Recursive function to filter and flatten the tree for search
  const filterDepartmentsRecursive = (depts: Department[], query: string): Department[] => {
    if (!query) return depts;
    
    const filtered: Department[] = [];
    
    for (const dept of depts) {
      const matchesSearch =
        dept.code.toLowerCase().includes(query.toLowerCase()) ||
        dept.name.toLowerCase().includes(query.toLowerCase()) ||
        dept.accountType.toLowerCase().includes(query.toLowerCase());
      
      if (matchesSearch) {
        filtered.push(dept);
      }
      
      if (dept.children) {
        const childMatches = filterDepartmentsRecursive(dept.children, query);
        filtered.push(...childMatches);
      }
    }
    
    return filtered;
  };

  const filteredDepartments = searchQuery
    ? filterDepartmentsRecursive(departments, searchQuery)
    : departments;

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
    setExpandedDepartments((prev) => {
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

  const handleEditDepartment = (_dept: Department) => {
    // TODO: Implement edit functionality
    setOpenMenuId(null);
  };

  const handleToggleActive = (id: string) => {
    const toggleActiveRecursive = (depts: Department[]): Department[] => {
      return depts.map((dept) => {
        if (dept.id === id) {
          return { ...dept, isActive: !dept.isActive };
        }
        if (dept.children) {
          return { ...dept, children: toggleActiveRecursive(dept.children) };
        }
        return dept;
      });
    };
    setDepartments((prev) => toggleActiveRecursive(prev));
  };

  // Recursive render function for department rows
  const renderDepartmentRows = (depts: Department[], level: number): JSX.Element[] => {
    const rows: JSX.Element[] = [];

    depts.forEach((dept) => {
      const isExpanded = expandedDepartments.has(dept.id);
      const hasChildren = dept.children && dept.children.length > 0;
      const paddingRight = level * 40;

      rows.push(
        <tr
          key={dept.id}
          className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
        >
          <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            {dept.code}
          </td>
          <td
            className="py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]"
            style={{ paddingRight: `${24 + paddingRight}px`, paddingLeft: '24px' }}
          >
            <div className="flex items-center gap-2">
              {hasChildren ? (
                <>
                  <button
                    onClick={() => toggleExpand(dept.id)}
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
              <span className="truncate">{dept.name}</span>
            </div>
          </td>
          <td className="px-6 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            <span className={dept.accountType ? 'text-[#10B981]' : 'text-[#6B7280]'}>
              {dept.accountType || '-'}
            </span>
          </td>
          <td className="px-6 py-2">
            <div className="flex items-center justify-center gap-3">
              {/* Toggle Switch Container */}
              <div className="inline-flex items-center justify-between min-w-[8rem] gap-3 px-2 py-2 rounded-xl bg-[#F5F5F5]">
                <span
                  className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                    dept.isActive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {dept.isActive ? 'نشط' : 'غير نشط'}
                </span>

                <button
                  onClick={() => handleToggleActive(dept.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    dept.isActive ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                      dept.isActive ? 'translate-x-[-3px]' : 'translate-x-[-22px]'
                    }`}
                  />
                </button>
              </div>

              {/* More options button with dropdown */}
              <div className="relative dropdown-menu-container">
                <button
                  onClick={() => toggleMenu(dept.id)}
                  className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  title="المزيد"
                >
                  <MoreVertical className="w-4 h-4 text-[#093738]" />
                </button>

                {openMenuId === dept.id && (
                  <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <button
                      onClick={() => handleEditDepartment(dept)}
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
        rows.push(...renderDepartmentRows(dept.children!, level + 1));
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
                  placeholder="ابحث من هنا (رقم القسم، اسم القسم، نوع القسم...)"
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
                onClick={() => {/* TODO: Implement add functionality */}}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                قسم جديد
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
                    رقم القسم
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    اسم القسم
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
                {renderDepartmentRows(filteredDepartments, 0)}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Layout>
  );
};
