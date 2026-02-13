import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { getBudgetsSampleData, type BudgetItem } from '@/data/settings/budget.data';

export const Budget = (): JSX.Element => {
  const { dir } = useLanguage();
  const navigate = useNavigate();

  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [budgets] = useState<BudgetItem[]>(() => getBudgetsSampleData());

  // Filter budgets based on search
  const filterBudgetsRecursive = (items: BudgetItem[], query: string): BudgetItem[] => {
    if (!query) return items;

    const filtered: BudgetItem[] = [];

    for (const item of items) {
      const matchesSearch =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.account.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase());

      if (matchesSearch) {
        filtered.push(item);
      }

      if (item.children) {
        const childMatches = filterBudgetsRecursive(item.children, query);
        filtered.push(...childMatches);
      }
    }

    return filtered;
  };

  const filteredBudgets = searchQuery ? filterBudgetsRecursive(budgets, searchQuery) : budgets;

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
    setExpandedItems((prev) => {
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

  const handleEditBudget = (budget: BudgetItem) => {
    navigate(`/settings/accounting/budget/edit/${budget.id}`);
    setOpenMenuId(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'awaiting':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-md bg-yellow-50 text-yellow-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            تحجيل
          </span>
        );
      case 'suspended':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-md bg-red-50 text-red-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            إيقاف الموازنة
          </span>
        );
      default:
        return null;
    }
  };

  // Recursive render function for budget rows (only 2 levels)
  const renderBudgetRows = (items: BudgetItem[], level: number): JSX.Element[] => {
    const rows: JSX.Element[] = [];

    items.forEach((item) => {
      const isExpanded = expandedItems.has(item.id);
      const hasChildren = item.children && item.children.length > 0;
      const isParent = level === 0;

      rows.push(
        <tr
          key={item.id}
          className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
        >
          <td
            className="py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]"
            style={{ paddingRight: isParent ? '24px' : '64px', paddingLeft: '24px' }}
          >
            <div className="flex items-center gap-2">
              {hasChildren ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="p-0.5 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-[#093738] transition-transform ${
                        isExpanded ? 'rotate-0' : 'rotate-180'
                      }`}
                    />
                  </button>
                  {isExpanded ? (
                    <FolderOpen className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  ) : (
                    <Folder className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  )}
                </>
              ) : (
                <div className="w-[20px] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#6B7280] text-xl leading-none">•</span>
                </div>
              )}
              <span className="truncate">{item.name}</span>
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-center text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            {item.account}
          </td>
          <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            <div className="flex items-center gap-1.5 text-green-600">
              <span>{item.approvedAmount.toLocaleString()}</span>
              <img src="/images/currency/saudi-riyal.svg" alt="ريال" className="w-3 h-3" />
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            <div className="flex items-center gap-1.5">
              <span>{item.spentAmount.toLocaleString()}</span>
              <img src="/images/currency/saudi-riyal.svg" alt="ريال" className="w-3 h-3" />
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            <div
              className={`flex items-center gap-1.5 ${item.remainingAmount === 0 ? 'text-red-600' : ''}`}
            >
              <span>{item.remainingAmount.toLocaleString()}</span>
              <img src="/images/currency/saudi-riyal.svg" alt="ريال" className="w-3 h-3" />
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-center text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
            {item.type}
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center justify-center gap-3">
              {getStatusBadge(item.status)}
            </div>
          </td>
          <td className="px-6 py-4 ">
            <div className="relative dropdown-menu-container flex items-center justify-end">
              <button
                onClick={() => toggleMenu(item.id)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                title="المزيد"
              >
                <MoreVertical className="w-4 h-4 text-[#093738]" />
              </button>

              {openMenuId === item.id && (
                <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <button
                    onClick={() => handleEditBudget(item)}
                    className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    تعديل
                  </button>
                </div>
              )}
            </div>
          </td>
        </tr>
      );

      // Render children if expanded (only one level deep)
      if (isExpanded && hasChildren) {
        rows.push(...renderBudgetRows(item.children!, level + 1));
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
                  placeholder="ابحث من هنا (اسم الموازنة، الحساب، النوع،الاسم،...)"
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
                onClick={() => navigate('/settings/accounting/budget/create')}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                موازنة جديدة
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2]">
          <div>
            <table className="w-full" dir={dir}>
              <thead>
                <tr className="border-b border-[#e2e2e2]" style={{ backgroundColor: '#F1F5F980' }}>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    اسم الموازنة
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    الحساب
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    المبلغ المعتمد
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    المبلغ المصروف
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    المبلغ المتبقي
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    النوع
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    في حالة تحاول الموازنة
                  </th>
                </tr>
              </thead>
              <tbody>{renderBudgetRows(filteredBudgets, 0)}</tbody>
            </table>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Budget;
