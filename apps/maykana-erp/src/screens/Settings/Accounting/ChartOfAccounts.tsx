import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SideDrawer } from '@/components/ui/SideDrawer';
import InitialFilters from '@/components/InitialFilters';
import {
  Download,
  Filter,
  Settings,
  Plus,
  Lock,
  MoreVertical,
  ChevronDown,
  Search,
  FolderOpen,
  Folder,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { buttonClasses } from '@/styles';

interface Account {
  id: string;
  number: string;
  name: string;
  isPrimary: boolean;
  company: string;
  type: string;
  children?: Account[];
}

export const ChartOfAccounts = (): JSX.Element => {
  const { dir } = useLanguage();

  const [expandedAccounts, setExpandedAccounts] = useState<Set<string>>(new Set());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [parentAccountForAdd, setParentAccountForAdd] = useState<string | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Complete tree data with children - matching the screenshot exactly
  const [accounts] = useState<Account[]>([
    {
      id: '1',
      number: '1',
      name: 'الأصول',
      isPrimary: true,
      company: 'قائمة المركز المالي',
      type: '------------',
      children: [
        {
          id: '11',
          number: '11',
          name: 'الأصول المتداولة',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '111',
              number: '111',
              name: 'المعادن',
              isPrimary: false,
              company: '------------',
              type: '------------',
              children: [
                {
                  id: '1111',
                  number: '1111',
                  name: 'مديونون • SAR',
                  isPrimary: false,
                  company: 'CDUXP',
                  type: 'مستحق',
                },
              ],
            },
            {
              id: '112',
              number: '112',
              name: 'مستودع',
              isPrimary: false,
              company: 'CDUXP',
              type: 'مستحق',
              children: [
                {
                  id: '1121',
                  number: '1121',
                  name: 'مستودع الفرع • SAR',
                  isPrimary: false,
                  company: 'CDUXP',
                  type: 'مستودع',
                },
              ],
            },
            {
              id: '113',
              number: '113',
              name: 'النقدية',
              isPrimary: false,
              company: '------------',
              type: '------------',
              children: [
                {
                  id: '1131',
                  number: '1131',
                  name: 'الصندوق • SAR',
                  isPrimary: true,
                  company: 'CDUXP',
                  type: 'نقد',
                },
              ],
            },
            {
              id: '114',
              number: '114',
              name: 'البنوك',
              isPrimary: false,
              company: '------------',
              type: '------------',
              children: [
                {
                  id: '1141',
                  number: '1141',
                  name: 'بنك الراجحي • SAR',
                  isPrimary: false,
                  company: 'CDUXP',
                  type: 'بنك',
                },
              ],
            },
            {
              id: '115',
              number: '115',
              name: 'القروض والسلفيات',
              isPrimary: false,
              company: '------------',
              type: '------------',
              children: [
                {
                  id: '1151',
                  number: '1151',
                  name: 'سلف الموظفين • SAR',
                  isPrimary: true,
                  company: 'CDUXP',
                  type: 'مستحق',
                },
              ],
            },
            {
              id: '116',
              number: '116',
              name: 'حساب اشتراكي مؤقت',
              isPrimary: false,
              company: '------------',
              type: '------------',
              children: [
                {
                  id: '1161',
                  number: '1161',
                  name: 'اشتراكي مؤقت • SAR',
                  isPrimary: false,
                  company: 'CDUXP',
                  type: 'اشتراكي مؤقت',
                },
              ],
            },
          ],
        },
        {
          id: '12',
          number: '12',
          name: 'الأصول الثابتة',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '121',
              number: '121',
              name: 'سيارات',
              isPrimary: false,
              company: 'CDUXP',
              type: 'أصول ثابتة',
            },
            {
              id: '122',
              number: '122',
              name: 'معدات',
              isPrimary: false,
              company: 'CDUXP',
              type: 'أصول ثابتة',
            },
            {
              id: '123',
              number: '123',
              name: 'أثاث مكتبي',
              isPrimary: false,
              company: 'CDUXP',
              type: 'أصول ثابتة',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      number: '2',
      name: 'الإلتزامات',
      isPrimary: true,
      company: 'قائمة المركز المالي',
      type: '------------',
      children: [
        {
          id: '21',
          number: '21',
          name: 'الموردين',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '212',
              number: '212',
              name: 'الدائنين',
              isPrimary: false,
              company: 'CDUXP',
              type: 'واجب الدفع',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      number: '3',
      name: 'حقوق الملكية',
      isPrimary: true,
      company: 'قائمة المركز المالي',
      type: '------------',
      children: [
        {
          id: '31',
          number: '31',
          name: 'رأس المال',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '311',
              number: '311',
              name: 'رأس المال المدفوع • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'حقوق ملكية',
            },
          ],
        },
        {
          id: '32',
          number: '32',
          name: 'الاحتياطيات',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '321',
              number: '321',
              name: 'الاحتياطي النظامي • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'حقوق ملكية',
            },
            {
              id: '322',
              number: '322',
              name: 'الاحتياطي الاختياري • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'حقوق ملكية',
            },
          ],
        },
        {
          id: '33',
          number: '33',
          name: 'الأرباح المحتجزة',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '331',
              number: '331',
              name: 'أرباح مرحلة • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'حقوق ملكية',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      number: '4',
      name: 'الإيرادات',
      isPrimary: true,
      company: 'قائمة الأرباح والخسائر',
      type: '------------',
      children: [
        {
          id: '41',
          number: '41',
          name: 'إيرادات المبيعات',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '411',
              number: '411',
              name: 'مبيعات محلية • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'إيراد',
            },
            {
              id: '412',
              number: '412',
              name: 'مبيعات تصدير • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'إيراد',
            },
          ],
        },
        {
          id: '42',
          number: '42',
          name: 'إيرادات الخدمات',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '421',
              number: '421',
              name: 'إيرادات استشارات • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'إيراد',
            },
          ],
        },
        {
          id: '43',
          number: '43',
          name: 'إيرادات أخرى',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '431',
              number: '431',
              name: 'إيرادات متنوعة • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'إيراد',
            },
          ],
        },
      ],
    },
    {
      id: '5',
      number: '5',
      name: 'المصروفات',
      isPrimary: true,
      company: 'قائمة الأرباح والخسائر',
      type: '------------',
      children: [
        {
          id: '51',
          number: '51',
          name: 'تكلفة المبيعات',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '511',
              number: '511',
              name: 'تكلفة البضاعة المباعة • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'مصروف',
            },
          ],
        },
        {
          id: '52',
          number: '52',
          name: 'المصروفات الإدارية',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '521',
              number: '521',
              name: 'رواتب الإداريين • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'مصروف',
            },
            {
              id: '522',
              number: '522',
              name: 'إيجارات • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'مصروف',
            },
            {
              id: '523',
              number: '523',
              name: 'مصاريف كهرباء وماء • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'مصروف',
            },
          ],
        },
        {
          id: '53',
          number: '53',
          name: 'المصروفات التسويقية',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '531',
              number: '531',
              name: 'مصاريف إعلانات • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'مصروف',
            },
            {
              id: '532',
              number: '532',
              name: 'عمولات مبيعات • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'مصروف',
            },
          ],
        },
        {
          id: '54',
          number: '54',
          name: 'المصروفات المالية',
          isPrimary: false,
          company: '------------',
          type: '------------',
          children: [
            {
              id: '541',
              number: '541',
              name: 'فوائد بنكية • SAR',
              isPrimary: false,
              company: 'CDUXP',
              type: 'مصروف',
            },
          ],
        },
      ],
    },
  ]);

  const toggleExpand = (accountId: string) => {
    const newExpanded = new Set(expandedAccounts);
    if (newExpanded.has(accountId)) {
      newExpanded.delete(accountId);
    } else {
      newExpanded.add(accountId);
    }
    setExpandedAccounts(newExpanded);
  };

  const expandAll = () => {
    const allIds = new Set<string>();
    const collectIds = (accounts: Account[]) => {
      accounts.forEach((account) => {
        if (account.children && account.children.length > 0) {
          allIds.add(account.id);
          collectIds(account.children);
        }
      });
    };
    collectIds(accounts);
    setExpandedAccounts(allIds);
  };

  const collapseAll = () => {
    setExpandedAccounts(new Set());
  };

  const handleAddAccount = (parentId?: string) => {
    setParentAccountForAdd(parentId || null);
    setIsAddModalOpen(true);
  };

  const handleEditAccount = (account: Account) => {
    setSelectedAccount(account);
    setIsEditModalOpen(true);
    setOpenMenuId(null);
  };

  const toggleMenu = (accountId: string) => {
    setOpenMenuId(openMenuId === accountId ? null : accountId);
  };

  // Filter accounts based on search query
  const filterAccounts = (accounts: Account[], query: string): Account[] => {
    if (!query.trim()) return accounts;

    const lowerQuery = query.toLowerCase();
    
    const filterRecursive = (account: Account): Account | null => {
      const matchesSearch = 
        account.number.toLowerCase().includes(lowerQuery) ||
        account.name.toLowerCase().includes(lowerQuery) ||
        account.company.toLowerCase().includes(lowerQuery) ||
        account.type.toLowerCase().includes(lowerQuery);

      const filteredChildren = account.children
        ? account.children.map(filterRecursive).filter((child): child is Account => child !== null)
        : [];

      if (matchesSearch || filteredChildren.length > 0) {
        return {
          ...account,
          children: filteredChildren.length > 0 ? filteredChildren : account.children,
        };
      }

      return null;
    };

    return accounts.map(filterRecursive).filter((account): account is Account => account !== null);
  };

  const filteredAccounts = filterAccounts(accounts, searchQuery);

  // Recursive function to render account rows
  const renderAccountRow = (
    account: Account,
    level: number = 0,
    rowIndex: number = 0
  ): JSX.Element[] => {
    const isExpanded = expandedAccounts.has(account.id);
    const hasChildren = account.children && account.children.length > 0;
    const paddingLeft = level * 40; // 40px per level

    // Determine folder color based on account number
    const getFolderColor = () => {
      if (account.number.startsWith('1')) return 'text-green-400'; // green for assets
      if (account.number.startsWith('2')) return 'text-pink-300'; // pink for liabilities
      if (account.number.startsWith('3')) return 'text-pink-300'; // pink for equity
      if (account.number.startsWith('4')) return 'text-green-400'; // green for revenue
      if (account.number.startsWith('5')) return 'text-green-400'; // green for expenses
      return 'text-gray-400';
    };

    // Determine background color based on account number and level (alternating colors)
    const getBackgroundColor = () => {
      const isEvenLevel = level % 2 === 0;

      if (account.number.startsWith('1')) {
        return isEvenLevel ? 'bg-green-50' : 'bg-white';
      }
      if (account.number.startsWith('2')) {
        return isEvenLevel ? 'bg-red-50' : 'bg-white';
      }
      if (account.number.startsWith('3')) {
        return isEvenLevel ? 'bg-red-50' : 'bg-white';
      }
      if (account.number.startsWith('4')) {
        return isEvenLevel ? 'bg-green-50' : 'bg-white';
      }
      if (account.number.startsWith('5')) {
        return isEvenLevel ? 'bg-green-50' : 'bg-white';
      }
      return 'bg-white';
    };

    const rows: JSX.Element[] = [
      <tr
        key={account.id}
        className={`group border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors ${getBackgroundColor()}`}
      >
        <td className="px-4 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold">
          {account.number}
        </td>
        <td className="px-4 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          <div className="flex items-center gap-2" style={{ paddingRight: `${paddingLeft}px` }}>
            {hasChildren ? (
              <button
                onClick={() => toggleExpand(account.id)}
                className="flex items-center justify-center p-0.5 hover:bg-gray-100 rounded transition-colors"
              >
                <ChevronDown
                  className={`w-4 h-4 text-[#093738] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>
            ) : (
              <div className="flex items-center justify-center p-0.5">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
              </div>
            )}
            {isExpanded ? (
              <FolderOpen className={`w-5 h-5 ${getFolderColor()}`} />
            ) : (
              <Folder className={`w-5 h-5 ${getFolderColor()}`} />
            )}
            <span className="flex items-center gap-2">
              {account.name.replace(' • SAR', '')}
              {account.name.includes('• SAR') && (
                <span className="flex items-center gap-1">
                  <span>•</span>
                  <span>SAR</span>
                  <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                </span>
              )}
            </span>
          </div>
        </td>
        <td className="px-4 py-2 text-center">
          {account.isPrimary && account.company !== '------------' ? (
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="inline-flex items-center justify-center px-3 py-0.5 rounded-full bg-white border border-gray-200 text-[#093738] text-xs [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {account.company}
              </span>
              <span className="text-sm text-gray-400">-----------</span>
            </div>
          ) : (
            <span className="text-sm text-gray-400">------------</span>
          )}
        </td>
        <td className="px-4 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
          <span className="text-sm text-gray-400">------------</span>
        </td>
        <td className="px-4 py-2 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
          <span className="text-sm text-gray-400">------------</span>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center justify-center gap-2">
            {/* Add child button - only visible on hover */}
            <button
              onClick={() => handleAddAccount(account.id)}
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0c4749] hover:bg-[#093738] transition-all opacity-0 group-hover:opacity-100"
              title="إضافة حساب فرعي"
            >
              <Plus className="w-4 h-4 text-white" />
            </button>
            {/* Expand/Collapse toggle button - always visible, disabled if no children */}
            <div className="p-1 bg-[white] rounded-xl">
              <button
                onClick={() => hasChildren && toggleExpand(account.id)}
                disabled={!hasChildren}
                className={`m-1.5 p-1 rounded-lg bg-white transition-colors shadow-sm border-[#292D32] border-[1.5px] ${
                  hasChildren ? 'hover:bg-gray-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                }`}
                title={
                  hasChildren ? (isExpanded ? 'إغلاق العنصر' : 'فتح العنصر') : 'لا توجد عناصر فرعية'
                }
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4 text-[#292D32]" />
                ) : (
                  <Maximize2 className="w-4 h-4 text-[#292D32]" />
                )}
              </button>
            </div>

            {/* Lock button */}
            <div className="p-1 bg-[white] rounded-xl">
              <button
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                title="قفل"
              >
                <Lock className="w-4 h-4 text-[#093738]" />
              </button>
            </div>

            {/* More options button */}
            <div className="p-1 bg-[white] rounded-xl relative">
              <button
                onClick={() => toggleMenu(account.id)}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                title="المزيد"
              >
                <MoreVertical className="w-4 h-4 text-[#093738]" />
              </button>
              {/* Dropdown menu */}
              {openMenuId === account.id && (
                <div className="absolute left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <button
                    onClick={() => handleEditAccount(account)}
                    className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-lg"
                  >
                    تعديل
                  </button>
                </div>
              )}
            </div>
          </div>
        </td>
      </tr>,
    ];

    // Add children rows if expanded
    let childRowIndex = rowIndex;
    if (isExpanded && hasChildren) {
      account.children!.forEach((child) => {
        childRowIndex++;
        rows.push(...renderAccountRow(child, level + 1, childRowIndex));
      });
    }

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
                  placeholder="ابحث من هنا (رقم الحساب، اسم الحساب، سعر الصرف، ...)"
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
                <Settings className="h-3.5 w-3.5" />
                <span>إظهار/إخفاء أعمدة</span>
              </Button>

              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              >
                <Download className="h-3.5 w-3.5" />
                <span>تصدير</span>
              </Button>

              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              >
                <Filter className="h-3.5 w-3.5" />
                <span>فلاتر</span>
              </Button>

              <button
                className={buttonClasses.primary}
                onClick={() => handleAddAccount()}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                حساب جديد
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir={dir}>
              <thead>
                <tr className="border-b border-[#e2e2e2]" style={{ backgroundColor: '#f9f9f9' }}>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[120px]">
                    رقم الحساب
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم الحساب
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[150px]">
                    حساب رئيسي ؟
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[200px]">
                    الشركة
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[200px]">
                    نوع الحساب
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-[150px]">
                    <div className="flex items-center justify-center gap-2">
                      <div className="p-1 bg-[white] rounded-xl">
                        <button
                          onClick={expandAll}
                          className="m-1.5 p-1 rounded-lg bg-white hover:bg-gray-100 transition-colors shadow-sm  border-[#292D32] border-[1.5px]"
                          title="فتح الكل"
                        >
                          <Maximize2 className="w-4 h-4 text-[#292D32]" />
                        </button>
                      </div>
                      <div className="p-1 bg-[white] rounded-xl">
                        <button
                          onClick={collapseAll}
                          className="m-1.5 p-1 rounded-lg bg-white hover:bg-gray-100 transition-colors shadow-sm  border-[#292D32] border-[1.5px]"
                          title="إغلاق الكل"
                        >
                          <Minimize2 className="w-4 h-4 text-[#292D32]" />
                        </button>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>{filteredAccounts.map((account, index) => renderAccountRow(account, 0, index))}</tbody>
            </table>
          </div>
        </Card>

        {/* Add Account Drawer */}
        <SideDrawer
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title={parentAccountForAdd ? 'إضافة حساب جديد' : 'إضافة حساب رئيسي جديد'}
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
                رقم الحساب
              </label>
              <input
                type="text"
                placeholder="11222"
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                اسم الحساب الرئيسي
              </label>
              <input
                type="text"
                placeholder="حساب رئيسي"
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                اسم الشركة
              </label>
              <select
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              >
                <option>شركة تصميم تجربة المستخدم للمحترفين</option>
                <option>CDUXP</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                العملة
              </label>
              <div className="relative">
                <select
                  className="w-full h-[45px] pl-12 pr-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                >
                  <option>الريال السعودي</option>
                </select>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                  <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                نسبة الضريبة
              </label>
              <input
                type="text"
                placeholder="15%"
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                نوع
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    قائمة المركز المالي
                  </span>
                  <input 
                    type="radio" 
                    name="add-account-type" 
                    value="balance-sheet"
                    defaultChecked 
                    className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                  />
                </label>
                <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                  <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    قائمة الأرباح والخسائر
                  </span>
                  <input 
                    type="radio" 
                    name="add-account-type" 
                    value="income-statement"
                    className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                  />
                </label>
              </div>
            </div>
          </div>
        </SideDrawer>

        {/* Edit Account Drawer */}
        <SideDrawer
          isOpen={isEditModalOpen && selectedAccount !== null}
          onClose={() => setIsEditModalOpen(false)}
          title="تعديل الحساب"
          footer={
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                إغلاق
              </button>
              <button
                className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg bg-[#0c4749] hover:bg-[#093738] text-white transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                onClick={() => setIsEditModalOpen(false)}
              >
                حفظ
              </button>
            </div>
          }
        >
          {selectedAccount && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                  رقم الحساب
                </label>
                <input
                  type="text"
                  defaultValue={selectedAccount.number}
                  className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                  اسم الحساب الرئيسي
                </label>
                <input
                  type="text"
                  defaultValue={selectedAccount.name.replace(' • SAR', '')}
                  className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                  اسم الشركة
                </label>
                <select
                  defaultValue={selectedAccount.company}
                  className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                >
                  <option>شركة تصميم تجربة المستخدم للمحترفين</option>
                  <option>CDUXP</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                  العملة
                </label>
                <div className="relative">
                  <select
                    className="w-full h-[45px] pl-12 pr-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  >
                    <option>الريال السعودي</option>
                  </select>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                    <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                  نسبة الضريبة
                </label>
                <input
                  type="text"
                  placeholder="15%"
                  className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                  نوع
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                    <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      قائمة المركز المالي
                    </span>
                    <input 
                      type="radio" 
                      name="edit-account-type" 
                      value="balance-sheet"
                      defaultChecked={selectedAccount.company === 'قائمة المركز المالي'}
                      className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                    />
                  </label>
                  <label className="flex items-center justify-between px-4 py-3 border border-[#cfcfcf] rounded-lg cursor-pointer hover:border-[#0c4749] transition-colors bg-white">
                    <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      قائمة الأرباح والخسائر
                    </span>
                    <input 
                      type="radio" 
                      name="edit-account-type" 
                      value="income-statement"
                      defaultChecked={selectedAccount.company === 'قائمة الأرباح والخسائر'}
                      className="w-5 h-5 text-[#0c4749] focus:ring-[#0c4749]" 
                    />
                  </label>
                </div>
              </div>
            </div>
          )}
        </SideDrawer>
      </div>
    </Layout>
  );
};

export default ChartOfAccounts;
