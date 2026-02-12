import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AdvancedTable } from '@/components/ui/Table';
import { buttonClasses } from '@/styles';
import {
  Search,
  Filter,
  Download,
  Columns3,
  Edit2,
  Trash2,
  MoreVertical,
  Eye,
  Copy,
  ChevronDown,
} from 'lucide-react';
import { usePriceListsData } from '@/hooks/usePriceListsData';
import type { PriceList, PriceListType } from '../../../data/sales/price-lists.data';

export const PriceLists = (): JSX.Element => {
  const navigate = useNavigate();
  const { priceLists, setPriceLists } = usePriceListsData();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showOperationsMenu, setShowOperationsMenu] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);

  const columnsRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const operationsRef = useRef<HTMLDivElement>(null);
  const actionMenuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (columnsRef.current && !columnsRef.current.contains(event.target as Node)) {
        setShowColumnsFilter(false);
      }
      if (exportRef.current && !exportRef.current.contains(event.target as Node)) {
        setShowExportOptions(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilterOptions(false);
      }
      if (operationsRef.current && !operationsRef.current.contains(event.target as Node)) {
        setShowOperationsMenu(false);
      }

      if (openActionMenuId !== null) {
        const currentMenuRef = actionMenuRefs.current[openActionMenuId];
        if (currentMenuRef && !currentMenuRef.contains(event.target as Node)) {
          setOpenActionMenuId(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openActionMenuId]);

  const filteredLists = priceLists.filter((list) => {
    const matchesSearch =
      list.listNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      list.listName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      list.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'all' || list.listType === typeFilter;
    const matchesActive = 
      activeFilter === 'all' || 
      (activeFilter === 'active' && list.isActive) ||
      (activeFilter === 'inactive' && !list.isActive);

    return matchesSearch && matchesType && matchesActive;
  });

  const handleCreateNew = () => {
    navigate('/sales/price-lists/add');
  };

  const handleEdit = (list: PriceList) => {
    navigate(`/sales/price-lists/edit/${list.id}`);
    setOpenActionMenuId(null);
  };

  const handleView = (list: PriceList) => {
    console.log('View price list:', list);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذه القائمة؟')) {
      setPriceLists(priceLists.filter((list) => list.id !== id));
    }
    setOpenActionMenuId(null);
  };

  const handleDuplicate = (list: PriceList) => {
    const newList: PriceList = {
      ...list,
      id: Math.max(...priceLists.map((l) => l.id)) + 1,
      listNumber: `PL-2025-${String(priceLists.length + 1).padStart(3, '0')}`,
      listName: `${list.listName} (نسخة)`,
    };
    setPriceLists([...priceLists, newList]);
    setOpenActionMenuId(null);
  };

  const getTypeBadge = (type: PriceListType) => {
    const typeConfig = {
      sales: { bgColor: 'bg-blue-100', textColor: 'text-blue-700', label: 'مبيعات' },
      purchase: { bgColor: 'bg-purple-100', textColor: 'text-purple-700', label: 'مشتريات' },
    };

    const config = typeConfig[type];

    return (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${config.bgColor} ${config.textColor}`}
      >
        {config.label}
      </span>
    );
  };

  const getActiveBadge = (isActive: boolean) => {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
          isActive
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-700'
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-500'}`}></span>
        {isActive ? 'نشط' : 'غير نشط'}
      </span>
    );
  };

  const columns = [
    {
      key: 'listNumber',
      label: 'رقم القائمة',
      sortable: true,
      render: (list: PriceList) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#0e0d24]">
          {list.listNumber}
        </span>
      ),
    },
    {
      key: 'listName',
      label: 'اسم القائمة',
      sortable: true,
      render: (list: PriceList) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {list.listName}
        </span>
      ),
    },
    {
      key: 'listType',
      label: 'نوع القائمة',
      sortable: false,
      render: (list: PriceList) => getTypeBadge(list.listType),
    },
    {
      key: 'currency',
      label: 'العملة',
      sortable: false,
      render: (list: PriceList) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {list.currency}
        </span>
      ),
    },
    {
      key: 'createdDate',
      label: 'تاريخ الإنشاء',
      sortable: true,
      render: (list: PriceList) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {list.createdDate}
        </span>
      ),
    },
    {
      key: 'isActive',
      label: 'الحالة',
      sortable: false,
      render: (list: PriceList) => getActiveBadge(list.isActive),
    },
    {
      key: 'actions',
      label: '',
      render: (list: PriceList) => (
        <div className="relative" ref={(el) => (actionMenuRefs.current[list.id] = el)}>
          <button
            onClick={() =>
              setOpenActionMenuId(openActionMenuId === list.id ? null : list.id)
            }
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>

          {openActionMenuId === list.id && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
              <div className="py-1">
                <button
                  onClick={() => handleView(list)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Eye className="w-4 h-4" />
                  عرض التفاصيل
                </button>
                <button
                  onClick={() => handleEdit(list)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Edit2 className="w-4 h-4" />
                  تعديل
                </button>
                <button
                  onClick={() => handleDuplicate(list)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Copy className="w-4 h-4" />
                  نسخ
                </button>
                <button
                  onClick={() => handleDelete(list.id)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm text-red-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Trash2 className="w-4 h-4" />
                  حذف
                </button>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="relative">
        {/* Action Bar */}
        <div className="flex items-center gap-2 mb-4 justify-between">
          <div className="relative flex-1 max-w-[533px]">
            <Input
              type="text"
              placeholder="ابحث من هنا (قائمة أسعار...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-[43px] pr-10 bg-[#f8f8f8] border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Columns Button */}
            <div ref={columnsRef} className="relative">
              <Button
                onClick={() => setShowColumnsFilter(!showColumnsFilter)}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Columns3 className="w-4 h-4" />
                إظهار/إخفاء الأعمدة
              </Button>

              {showColumnsFilter && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 [direction:rtl]">
                  <div className="space-y-2">
                    {columns.slice(0, -1).map((col) => (
                      <label
                        key={col.key}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
                      >
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {col.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Download Button */}
            <div ref={exportRef} className="relative">
              <Button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Download className="w-4 h-4" />
                تحميل
              </Button>

              {showExportOptions && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 [direction:rtl]">
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إكسل
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    PDF
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    CSV
                  </button>
                </div>
              )}
            </div>

            {/* Filter Button */}
            <div ref={filterRef} className="relative">
              <Button
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Filter className="w-4 h-4" />
                فلتر
              </Button>

              {showFilterOptions && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 [direction:rtl]">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        نوع القائمة
                      </label>
                      <Select value={typeFilter} onValueChange={setTypeFilter}>
                        <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="[direction:rtl]">
                          <SelectItem
                            value="all"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            الكل
                          </SelectItem>
                          <SelectItem
                            value="sales"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            مبيعات
                          </SelectItem>
                          <SelectItem
                            value="purchase"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            مشتريات
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الحالة
                      </label>
                      <Select value={activeFilter} onValueChange={setActiveFilter}>
                        <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="[direction:rtl]">
                          <SelectItem
                            value="all"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            الكل
                          </SelectItem>
                          <SelectItem
                            value="active"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            نشط
                          </SelectItem>
                          <SelectItem
                            value="inactive"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            غير نشط
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Operations Menu Button */}
            <div ref={operationsRef} className="relative">
              <Button
                onClick={() => setShowOperationsMenu(!showOperationsMenu)}
                className={`${buttonClasses.primary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                العمليات
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showOperationsMenu && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 [direction:rtl]">
                  <button
                    onClick={() => {
                      handleCreateNew();
                      setShowOperationsMenu(false);
                    }}
                    className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    إنشاء قائمة أسعار جديدة
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    طباعة تقرير القوائم
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <AdvancedTable data={filteredLists} columns={columns} />
      </div>
    </Layout>
  );
};
