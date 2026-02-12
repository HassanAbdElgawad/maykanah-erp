import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  FileText,
  ChevronDown,
} from 'lucide-react';
import { useWorkOrdersData } from '@/hooks/useWorkOrdersData';
import type { WorkOrder, WorkOrderStatus, WorkOrderPriority } from '@/data/competitions/work-orders.data';

export const WorkOrders = (): JSX.Element => {
  const navigate = useNavigate();
  const { workOrders, setWorkOrders } = useWorkOrdersData();
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

  const filteredOrders = workOrders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.assignedTo.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleCreateNew = () => {
    navigate('/sales/work-orders/add');
  };

  const handleEdit = (order: WorkOrder) => {
    navigate(`/sales/work-orders/edit/${order.id}`);
    setOpenActionMenuId(null);
  };

  const handleView = (order: WorkOrder) => {
    console.log('View order:', order);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    setWorkOrders(workOrders.filter((o) => o.id !== id));
    setOpenActionMenuId(null);
  };

  const handleDuplicate = (order: WorkOrder) => {
    const newOrder = {
      ...order,
      id: Math.max(...workOrders.map((o) => o.id)) + 1,
      orderNumber: `WO-2026-${String(
        Math.max(...workOrders.map((o) => parseInt(o.orderNumber.split('-')[2]))) + 1
      ).padStart(3, '0')}`,
      orderDate: new Date().toLocaleDateString('ar-SA'),
      status: 'pending' as WorkOrderStatus,
    };
    setWorkOrders([...workOrders, newOrder]);
    setOpenActionMenuId(null);
  };

  const getStatusBadge = (status: WorkOrderStatus) => {
    const statusConfig = {
      pending: {
        text: 'قيد الانتظار',
        bgColor: 'bg-[#ffb70026]',
        textColor: 'text-[#ffb700]',
        dotColor: 'bg-[#ffb700]',
      },
      'in-progress': {
        text: 'قيد التنفيذ',
        bgColor: 'bg-[#2196f326]',
        textColor: 'text-[#2196f3]',
        dotColor: 'bg-[#2196f3]',
      },
      completed: {
        text: 'مكتمل',
        bgColor: 'bg-[#2cc28d1a]',
        textColor: 'text-[#2cc28d]',
        dotColor: 'bg-[#2cc28d]',
      },
      cancelled: {
        text: 'ملغي',
        bgColor: 'bg-[#ff00001a]',
        textColor: 'text-[#ff0000]',
        dotColor: 'bg-[#ff0000]',
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

  const getPriorityBadge = (priority: WorkOrderPriority) => {
    const priorityConfig = {
      low: {
        text: 'منخفضة',
        bgColor: 'bg-gray-100',
        textColor: 'text-gray-600',
      },
      normal: {
        text: 'عادية',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-600',
      },
      high: {
        text: 'عالية',
        bgColor: 'bg-orange-100',
        textColor: 'text-orange-600',
      },
      urgent: {
        text: 'عاجلة',
        bgColor: 'bg-red-100',
        textColor: 'text-red-600',
      },
    };

    const config = priorityConfig[priority];

    return (
      <span
        className={`inline-flex px-2 py-1 rounded text-xs font-medium ${config.bgColor} ${config.textColor} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
      >
        {config.text}
      </span>
    );
  };

  const columns = [
    {
      key: 'orderNumber',
      label: 'رقم أمر العمل',
      sortable: true,
      render: (order: WorkOrder) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {order.orderNumber}
        </span>
      ),
    },
    {
      key: 'customer',
      label: 'العميل',
      sortable: true,
      render: (order: WorkOrder) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {order.customer}
        </span>
      ),
    },
    {
      key: 'orderDate',
      label: 'تاريخ الطلب',
      sortable: true,
      render: (order: WorkOrder) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {order.orderDate}
        </span>
      ),
    },
    {
      key: 'deliveryDate',
      label: 'تاريخ التسليم',
      sortable: true,
      render: (order: WorkOrder) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {order.deliveryDate}
        </span>
      ),
    },
    {
      key: 'assignedTo',
      label: 'المسؤول',
      sortable: true,
      render: (order: WorkOrder) => (
        <span className="text-[#0e0d24] font-normal [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {order.assignedTo}
        </span>
      ),
    },
    {
      key: 'priority',
      label: 'الأولوية',
      sortable: true,
      render: (order: WorkOrder) => getPriorityBadge(order.priority),
    },
    {
      key: 'status',
      label: 'الحالة',
      sortable: true,
      render: (order: WorkOrder) => getStatusBadge(order.status),
    },
    {
      key: 'actions',
      label: '',
      render: (order: WorkOrder) => (
        <div className="relative" ref={(el) => (actionMenuRefs.current[order.id] = el)}>
          <button
            onClick={() => setOpenActionMenuId(openActionMenuId === order.id ? null : order.id)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>

          {openActionMenuId === order.id && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
              <div className="py-1">
                <button
                  onClick={() => handleView(order)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Eye className="w-4 h-4" />
                  عرض التفاصيل
                </button>
                <button
                  onClick={() => handleEdit(order)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Edit2 className="w-4 h-4" />
                  تعديل
                </button>
                <button
                  onClick={() => handleDuplicate(order)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Copy className="w-4 h-4" />
                  نسخ
                </button>
                <button
                  onClick={() => handleDelete(order.id)}
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
              placeholder="ابحث من هنا (أوامر العمل...)"
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
                إظهار/إخفاء أعمدة
              </Button>

              {showColumnsFilter && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4 [direction:rtl]">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        رقم أمر العمل
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        العميل
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المسؤول
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الأولوية
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
                            value="pending"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            قيد الانتظار
                          </SelectItem>
                          <SelectItem
                            value="in-progress"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            قيد التنفيذ
                          </SelectItem>
                          <SelectItem
                            value="completed"
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            مكتمل
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
                      إنشاء أمر عمل جديد
                    </button>
                    <button
                      onClick={() => {
                        setShowOperationsMenu(false);
                      }}
                      className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      <Download className="w-4 h-4" />
                      طباعة تقرير الأوامر
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <AdvancedTable data={filteredOrders} columns={columns} />
      </div>
    </Layout>
  );
};
