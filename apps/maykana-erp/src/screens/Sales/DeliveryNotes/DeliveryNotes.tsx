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
import { useDeliveryNotesData } from '@/hooks/useDeliveryNotesData';
import type { DeliveryNote, DeliveryNoteStatus } from '@/data/sales/delivery-notes.data';

export const DeliveryNotes = (): JSX.Element => {
  const navigate = useNavigate();
  const { deliveryNotes, setDeliveryNotes } = useDeliveryNotesData();
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

  const filteredNotes = deliveryNotes.filter((note) => {
    const matchesSearch =
      note.noteNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || note.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleCreateNew = () => {
    navigate('/sales/delivery-notes/add');
  };

  const handleEdit = (note: DeliveryNote) => {
    navigate(`/sales/delivery-notes/edit/${note.id}`);
    setOpenActionMenuId(null);
  };

  const handleView = (note: DeliveryNote) => {
    console.log('View delivery note:', note);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا السند؟')) {
      setDeliveryNotes(deliveryNotes.filter((note) => note.id !== id));
    }
    setOpenActionMenuId(null);
  };

  const handleDuplicate = (note: DeliveryNote) => {
    const newNote: DeliveryNote = {
      ...note,
      id: Math.max(...deliveryNotes.map((n) => n.id)) + 1,
      noteNumber: `DN-2025-${String(deliveryNotes.length + 1).padStart(3, '0')}`,
    };
    setDeliveryNotes([...deliveryNotes, newNote]);
    setOpenActionMenuId(null);
  };

  const getStatusBadge = (status: DeliveryNoteStatus) => {
    const statusConfig = {
      delivered: { bgColor: 'bg-green-100', textColor: 'text-green-700', dotColor: 'bg-green-500', label: 'تم التسليم' },
      pending: { bgColor: 'bg-yellow-100', textColor: 'text-yellow-700', dotColor: 'bg-yellow-500', label: 'قيد الانتظار' },
      'in-transit': { bgColor: 'bg-blue-100', textColor: 'text-blue-700', dotColor: 'bg-blue-500', label: 'قيد النقل' },
      cancelled: { bgColor: 'bg-gray-100', textColor: 'text-gray-700', dotColor: 'bg-gray-500', label: 'ملغي' },
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
      key: 'noteNumber',
      label: 'رقم السند',
      sortable: true,
      render: (note: DeliveryNote) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#0e0d24]">
          {note.noteNumber}
        </span>
      ),
    },
    {
      key: 'customer',
      label: 'اسم العميل',
      sortable: true,
      render: (note: DeliveryNote) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {note.customer}
        </span>
      ),
    },
    {
      key: 'deliveryDate',
      label: 'تاريخ التسليم',
      sortable: true,
      render: (note: DeliveryNote) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {note.deliveryDate}
        </span>
      ),
    },
    {
      key: 'orderNumber',
      label: 'أمر ربح',
      sortable: false,
      render: (note: DeliveryNote) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {note.orderNumber}
        </span>
      ),
    },
    {
      key: 'invoiceNumber',
      label: 'فاتورة المبيعات',
      sortable: false,
      render: (note: DeliveryNote) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {note.invoiceNumber}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'الحالة',
      sortable: false,
      render: (note: DeliveryNote) => getStatusBadge(note.status),
    },
    {
      key: 'actions',
      label: '',
      render: (note: DeliveryNote) => (
        <div className="relative" ref={(el) => (actionMenuRefs.current[note.id] = el)}>
          <button
            onClick={() =>
              setOpenActionMenuId(openActionMenuId === note.id ? null : note.id)
            }
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>

          {openActionMenuId === note.id && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
              <div className="py-1">
                <button
                  onClick={() => handleView(note)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Eye className="w-4 h-4" />
                  عرض التفاصيل
                </button>
                <button
                  onClick={() => handleEdit(note)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Edit2 className="w-4 h-4" />
                  تعديل
                </button>
                <button
                  onClick={() => handleDuplicate(note)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Copy className="w-4 h-4" />
                  نسخ
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
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
              placeholder="ابحث من هنا (سند تسليم...)"
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
                            value="delivered"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            تم التسليم
                          </SelectItem>
                          <SelectItem
                            value="pending"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            قيد الانتظار
                          </SelectItem>
                          <SelectItem
                            value="in-transit"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            قيد النقل
                          </SelectItem>
                          <SelectItem
                            value="cancelled"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            ملغي
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
                    إنشاء سند تسليم جديد
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    طباعة تقرير السندات
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <AdvancedTable data={filteredNotes} columns={columns} />
      </div>
    </Layout>
  );
};
