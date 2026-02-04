import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
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
  ChevronDown,
} from 'lucide-react';
import { useSalesInvoicesData } from '../../hooks/useSalesInvoicesData';
import type { SalesInvoice, SalesInvoiceStatus } from '../../data/sales-invoices.data';

export const SalesInvoices = (): JSX.Element => {
  const navigate = useNavigate();
  const { salesInvoices, setSalesInvoices } = useSalesInvoicesData();
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

  const filteredInvoices = salesInvoices.filter((invoice) => {
    const matchesSearch =
      invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.salesRep.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleCreateNew = () => {
    navigate('/sales/sales-invoices/add');
  };

  const handleEdit = (invoice: SalesInvoice) => {
    navigate(`/sales/sales-invoices/edit/${invoice.id}`);
    setOpenActionMenuId(null);
  };

  const handleView = (invoice: SalesInvoice) => {
    console.log('View invoice:', invoice);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذه الفاتورة؟')) {
      setSalesInvoices(salesInvoices.filter((inv) => inv.id !== id));
    }
    setOpenActionMenuId(null);
  };

  const handleDuplicate = (invoice: SalesInvoice) => {
    const newInvoice: SalesInvoice = {
      ...invoice,
      id: Math.max(...salesInvoices.map((inv) => inv.id)) + 1,
      invoiceNumber: `INV-2025-${String(salesInvoices.length + 1).padStart(3, '0')}`,
    };
    setSalesInvoices([...salesInvoices, newInvoice]);
    setOpenActionMenuId(null);
  };

  const getStatusBadge = (status: SalesInvoiceStatus) => {
    const statusConfig = {
      paid: { bgColor: 'bg-green-100', textColor: 'text-green-700', dotColor: 'bg-green-500', label: 'مدفوعة' },
      unpaid: { bgColor: 'bg-red-100', textColor: 'text-red-700', dotColor: 'bg-red-500', label: 'غير مدفوعة' },
      partial: { bgColor: 'bg-yellow-100', textColor: 'text-yellow-700', dotColor: 'bg-yellow-500', label: 'مدفوعة جزئياً' },
      cancelled: { bgColor: 'bg-gray-100', textColor: 'text-gray-700', dotColor: 'bg-gray-500', label: 'ملغية' },
    };

    const config = statusConfig[status];

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${config.bgColor} ${config.textColor}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`}></span>
        {config.label}
      </span>
    );
  };

  const columns = [
    {
      key: 'customer',
      label: 'اسم العميل',
      sortable: true,
      render: (invoice: SalesInvoice) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24]">
          {invoice.customer}
        </span>
      ),
    },
    {
      key: 'issueDate',
      label: 'تاريخ الإصدار',
      sortable: true,
      render: (invoice: SalesInvoice) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {invoice.issueDate}
        </span>
      ),
    },
    {
      key: 'total',
      label: 'السعر الإجمالي',
      sortable: true,
      render: (invoice: SalesInvoice) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#0e0d24] flex items-center gap-1">
          {invoice.total.toFixed(2)}
          <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
        </span>
      ),
    },
    {
      key: 'paymentMethod',
      label: 'طريق الدفع',
      sortable: false,
      render: (invoice: SalesInvoice) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {invoice.paymentMethod}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'الحالة',
      sortable: false,
      render: (invoice: SalesInvoice) => getStatusBadge(invoice.status),
    },
    {
      key: 'actions',
      label: '',
      render: (invoice: SalesInvoice) => (
        <div className="relative" ref={(el) => (actionMenuRefs.current[invoice.id] = el)}>
          <button
            onClick={() =>
              setOpenActionMenuId(openActionMenuId === invoice.id ? null : invoice.id)
            }
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>

          {openActionMenuId === invoice.id && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
              <div className="py-1">
                <button
                  onClick={() => handleView(invoice)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Eye className="w-4 h-4" />
                  عرض التفاصيل
                </button>
                <button
                  onClick={() => handleEdit(invoice)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Edit2 className="w-4 h-4" />
                  تعديل
                </button>
                <button
                  onClick={() => handleDuplicate(invoice)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Copy className="w-4 h-4" />
                  نسخ
                </button>
                <button
                  onClick={() => handleDelete(invoice.id)}
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
              placeholder="ابحث من هنا (فاتورة مبيعات...)"
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
                        الحالة
                      </label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
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
                            value="paid"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            مدفوعة
                          </SelectItem>
                          <SelectItem
                            value="unpaid"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            غير مدفوعة
                          </SelectItem>
                          <SelectItem
                            value="partial"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            مدفوعة جزئياً
                          </SelectItem>
                          <SelectItem
                            value="cancelled"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            ملغية
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
                    إنشاء فاتورة مبيعات جديدة
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    طباعة تقرير الفواتير
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <AdvancedTable data={filteredInvoices} columns={columns} />
      </div>
    </Layout>
  );
};
