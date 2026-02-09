import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { AdvancedTable } from '../../components/ui/Table';
import { buttonClasses } from '../../styles';
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
  FileText,
  ChevronDown,
} from 'lucide-react';
import { usePriceQuotesData } from '../../hooks/usePriceQuotesData';
import type { PriceQuote, PriceQuoteStatus } from '../../data/price-quotes.data';

export const PriceQuotes = (): JSX.Element => {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  const { priceQuotes, setPriceQuotes } = usePriceQuotesData();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
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

  const filteredQuotes = priceQuotes.filter((quote) => {
    const matchesSearch =
      quote.quoteNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.salesRep.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || quote.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleCreateNew = () => {
    navigate('/sales/price-quotes/add');
  };

  const handleEdit = (quote: PriceQuote) => {
    navigate(`/sales/price-quotes/edit/${quote.id}`);
    setOpenActionMenuId(null);
  };

  const handleView = (quote: PriceQuote) => {
    // يمكن فتح modal أو الانتقال لصفحة العرض
    console.log('View quote:', quote);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    setPriceQuotes(priceQuotes.filter((q) => q.id !== id));
    setOpenActionMenuId(null);
  };

  const handleDuplicate = (quote: PriceQuote) => {
    const newQuote = {
      ...quote,
      id: Math.max(...priceQuotes.map((q) => q.id)) + 1,
      quoteNumber: `RFQ-${String(Math.max(...priceQuotes.map((q) => parseInt(q.quoteNumber.split('-')[1]))) + 1).padStart(3, '0')}`,
      quoteDate: new Date().toLocaleDateString('ar-SA'),
      status: 'pending' as PriceQuoteStatus,
    };
    setPriceQuotes([...priceQuotes, newQuote]);
    setOpenActionMenuId(null);
  };

  const getStatusBadge = (status: PriceQuoteStatus) => {
    const statusConfig = {
      active: {
        text: 'نشط',
        bgColor: 'bg-[#2cc28d1a]',
        textColor: 'text-[#2cc28d]',
        dotColor: 'bg-[#2cc28d]',
      },
      expired: {
        text: 'منتهية',
        bgColor: 'bg-[#ff00001a]',
        textColor: 'text-[#ff0000]',
        dotColor: 'bg-[#ff0000]',
      },
      pending: {
        text: 'بانتظار عرض',
        bgColor: 'bg-[#ffb70026]',
        textColor: 'text-[#ffb700]',
        dotColor: 'bg-[#ffb700]',
      },
    };

    const config = statusConfig[status];

    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${config.bgColor}`}>
        <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
        <span
          className={`${config.textColor} text-sm font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
        >
          {config.text}
        </span>
      </div>
    );
  };

  const columns = [
    {
      key: 'quoteNumber',
      label: 'رقم عرض السعر',
      sortable: true,
      render: (quote: PriceQuote) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {quote.quoteNumber}
        </span>
      ),
    },
    {
      key: 'customer',
      label: 'الفصيل',
      sortable: true,
      render: (quote: PriceQuote) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {quote.customer}
        </span>
      ),
    },
    {
      key: 'quoteDate',
      label: 'تاريخ العرض',
      sortable: true,
      render: (quote: PriceQuote) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {quote.quoteDate}
        </span>
      ),
    },
    {
      key: 'salesRep',
      label: 'مندوب المبيعات',
      sortable: true,
      render: (quote: PriceQuote) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {quote.salesRep}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'الحالة',
      sortable: true,
      render: (quote: PriceQuote) => getStatusBadge(quote.status),
    },
    {
      key: 'actions',
      label: '',
      render: (quote: PriceQuote) => (
        <div className="relative" ref={(el) => (actionMenuRefs.current[quote.id] = el)}>
          <button
            onClick={() => setOpenActionMenuId(openActionMenuId === quote.id ? null : quote.id)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>

          {openActionMenuId === quote.id && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
              <div className="py-1">
                <button
                  onClick={() => handleView(quote)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Eye className="w-4 h-4" />
                  عرض التفاصيل
                </button>
                <button
                  onClick={() => handleEdit(quote)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Edit2 className="w-4 h-4" />
                  تعديل
                </button>
                <button
                  onClick={() => handleDuplicate(quote)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Copy className="w-4 h-4" />
                  نسخ
                </button>
                <button
                  onClick={() => handleDelete(quote.id)}
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
      <div className="relative" dir={dir}>
        {/* Action Bar */}
        <div className="flex items-center justify-between gap-2 mb-4" dir={dir}>
          <div className="relative flex-1 max-w-[533px]">
            <Input
              type="text"
              placeholder="ابحث من هنا (طلبات عروض الأسعار...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-[43px] pr-10 bg-[#f8f8f8] border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Filter Button */}

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
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4 [direction:rtl]">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        رقم عرض السعر
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الفصيل
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        تاريخ العرض
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        مندوب المبيعات
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الحالة
                      </span>
                    </label>
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
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
                  <div className="py-1">
                    <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تصدير Excel
                    </button>
                    <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تصدير PDF
                    </button>
                    <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تصدير CSV
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div ref={filterRef} className="relative">
              <Button
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Filter className="w-4 h-4" />
                فلتر
              </Button>

              {showFilterOptions && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4 [direction:rtl]">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium mb-2 block [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الحالة
                      </Label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                          <SelectValue placeholder="جميع الحالات" />
                        </SelectTrigger>
                        <SelectContent className="[direction:rtl]">
                          <SelectItem
                            value="all"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            جميع الحالات
                          </SelectItem>
                          <SelectItem
                            value="active"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            نشط
                          </SelectItem>
                          <SelectItem
                            value="expired"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            منتهية
                          </SelectItem>
                          <SelectItem
                            value="pending"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            بانتظار عرض
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
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        handleCreateNew();
                        setShowOperationsMenu(false);
                      }}
                      className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      <FileText className="w-4 h-4" />
                      إنشاء عرض سعر جديد
                    </button>
                    <button
                      onClick={() => {
                        setShowOperationsMenu(false);
                      }}
                      className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      <Download className="w-4 h-4" />
                      طباعة تقرير العروض
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
        </div>

        {/* Table */}
        <AdvancedTable data={filteredQuotes} columns={columns} />
      </div>
    </Layout>
  );
};
