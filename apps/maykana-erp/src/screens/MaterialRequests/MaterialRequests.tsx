import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';
import { buttonClasses } from '../../styles';
import InitialFilters from '../../components/InitialFilters';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Search,
  Filter,
  Columns3,
  Download,
  ArrowRight,
  X,
  MoreVertical,
  Plus,
  Edit2,
  Trash2,
  Eye,
} from 'lucide-react';

// Material Request interface
interface MaterialRequest {
  id: number;
  requestNumber: string;
  requestDate: string;
  requiredByDate: string;
  requestType: string;
  department: string;
  costCenter: string;
}

// Mock data matching the design image
const MATERIAL_REQUESTS_DATA: MaterialRequest[] = [
  {
    id: 1,
    requestNumber: 'MR-001',
    requestDate: '10/12/2025',
    requiredByDate: '10/12/2025',
    requestType: 'طلب صرف',
    department: 'مشروع A',
    costCenter: 'مركز تكلفة - 1111',
  },
  {
    id: 2,
    requestNumber: 'MR-002',
    requestDate: '10/12/2025',
    requiredByDate: '30/12/2025',
    requestType: 'طلب صرف',
    department: 'مشروع AB',
    costCenter: 'مركز تكلفة - 1111',
  },
  {
    id: 3,
    requestNumber: 'MR-003',
    requestDate: '10/04/2025',
    requiredByDate: '10/04/2025',
    requestType: 'طلب شراء',
    department: 'مشروع 1',
    costCenter: 'مركز تكلفة - 1111',
  },
  {
    id: 4,
    requestNumber: 'MR-004',
    requestDate: '10/04/2025',
    requiredByDate: '10/04/2025',
    requestType: 'طلب شراء',
    department: 'مشروع',
    costCenter: 'مركز تكلفة - 1111',
  },
  {
    id: 5,
    requestNumber: 'MR-005',
    requestDate: '11/03/2025',
    requiredByDate: '11/03/2025',
    requestType: 'طلب شراء',
    department: 'مشروع AA',
    costCenter: 'مركز تكلفة - 1111',
  },
  {
    id: 6,
    requestNumber: 'MR-006',
    requestDate: '10/12/2025',
    requiredByDate: '05/12/2025',
    requestType: 'طلب شراء',
    department: 'مشروع AB',
    costCenter: 'مركز تكلفة - 1111',
  },
  {
    id: 7,
    requestNumber: 'MR-007',
    requestDate: '10/03/2025',
    requiredByDate: '10/12/2025',
    requestType: 'طلب شراء',
    department: 'مشروع Z',
    costCenter: 'مركز تكلفة - 1111',
  },
  {
    id: 8,
    requestNumber: 'MR-008',
    requestDate: '10/09/2025',
    requiredByDate: '10/09/2025',
    requestType: 'طلب شراء',
    department: 'مشروع AA',
    costCenter: 'مركز تكلفة - 1211',
  },
];

// Column visibility configuration
const ALL_COLUMNS = [
  { key: 'requestNumber', label: 'رقم' },
  { key: 'requestDate', label: 'تاريخ الطلب' },
  { key: 'requiredByDate', label: 'مطلوب بتاريخ' },
  { key: 'requestType', label: 'غرض الطلب' },
  { key: 'department', label: 'القسم/المشروع' },
  { key: 'costCenter', label: 'مركز تكلفة' },
];

export const MaterialRequests = (): JSX.Element => {
  const { dir } = useLanguage();
  const navigate = useNavigate();
  const [requests] = useState<MaterialRequest[]>(MATERIAL_REQUESTS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Filter states
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(ALL_COLUMNS.map((c) => c.key));

  // Filter criteria
  const [filterRequestType, setFilterRequestType] = useState<string>('all');
  const [filterDepartment, setFilterDepartment] = useState<string>('all');

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedRequest, setSelectedRequest] = useState<MaterialRequest | null>(null);

  // Row actions menu state
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);

  // Delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState<MaterialRequest | null>(null);

  // View details modal
  const [showViewModal, setShowViewModal] = useState(false);
  const [requestToView, setRequestToView] = useState<MaterialRequest | null>(null);

  // Refs for click outside detection
  const columnsRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const actionMenuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (columnsRef.current && !columnsRef.current.contains(event.target as Node)) {
        setShowColumnsFilter(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilterOptions(false);
      }
      if (exportRef.current && !exportRef.current.contains(event.target as Node)) {
        setShowExportOptions(false);
      }
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target as Node)) {
        setOpenActionMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredRequests = requests.filter((request) => {
    // Search filter
    const matchesSearch =
      searchQuery === '' ||
      request.requestNumber.includes(searchQuery) ||
      request.department.includes(searchQuery) ||
      request.costCenter.includes(searchQuery) ||
      request.requestType.includes(searchQuery);

    // Request type filter
    const matchesType = filterRequestType === 'all' || request.requestType === filterRequestType;

    // Department filter
    const matchesDepartment = filterDepartment === 'all' || request.department === filterDepartment;

    return matchesSearch && matchesType && matchesDepartment;
  });

  // Get unique values for filter dropdowns
  const uniqueRequestTypes = [...new Set(requests.map((r) => r.requestType))];
  const uniqueDepartments = [...new Set(requests.map((r) => r.department))];

  const handleRowSelect = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredRequests.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredRequests.map((r) => r.id));
    }
  };

  const handleCreateNew = () => {
    navigate('/purchases/material-requests/create');
  };

  const handleSaveRequest = () => {
    // Implementation for saving request
    setShowModal(false);
  };

  const toggleColumnVisibility = (columnKey: string) => {
    setVisibleColumns((prev) =>
      prev.includes(columnKey) ? prev.filter((k) => k !== columnKey) : [...prev, columnKey]
    );
  };

  // Row action handlers
  const handleViewRequest = (request: MaterialRequest) => {
    setRequestToView(request);
    setShowViewModal(true);
    setOpenActionMenuId(null);
  };

  const handleEditRequest = (request: MaterialRequest) => {
    setModalMode('edit');
    setSelectedRequest(request);
    setShowModal(true);
    setOpenActionMenuId(null);
  };

  const handleDeleteClick = (request: MaterialRequest) => {
    setRequestToDelete(request);
    setShowDeleteModal(true);
    setOpenActionMenuId(null);
  };

  const handleConfirmDelete = () => {
    // Mock delete - in real app would call API
    if (requestToDelete) {
      alert(`تم حذف الطلب ${requestToDelete.requestNumber} بنجاح`);
    }
    setShowDeleteModal(false);
    setRequestToDelete(null);
  };

  const handleAddItemToRequest = (request: MaterialRequest) => {
    // Mock add item functionality
    alert(`إضافة مادة جديدة للطلب ${request.requestNumber}`);
    setOpenActionMenuId(null);
  };

  return (
    <Layout>
      <div className="relative">
        {/* Initial Filters Header */}
        <InitialFilters>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/purchases')}
              className="h-8 w-8 rounded-lg hover:bg-gray-100"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </Button>
            <h1 className="text-lg font-semibold text-[#092e32] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              قائمة طلبات المواد
            </h1>
          </div>

          <div className="flex items-center gap-2">
            {/* Filter Button */}
            <div className="relative" ref={filterRef}>
              <Button
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className="h-[43px] px-[10px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-1.5 rounded-lg border border-[#e2e2e2]"
              >
                <Filter className="w-[18px] h-[18px]" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base">فلتر</span>
              </Button>
              {showFilterOptions && (
                <div
                  dir="rtl"
                  className={`absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}
                >
                  <div className="space-y-4">
                    <div>
                      <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm mb-2 block text-right">
                        غرض الطلب
                      </Label>
                      <Select
                        value={filterRequestType}
                        onValueChange={setFilterRequestType}
                        dir="rtl"
                      >
                        <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          <SelectValue placeholder="الكل" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all" className="text-right">
                            الكل
                          </SelectItem>
                          {uniqueRequestTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-right">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm mb-2 block text-right">
                        القسم/المشروع
                      </Label>
                      <Select
                        value={filterDepartment}
                        onValueChange={setFilterDepartment}
                        dir="rtl"
                      >
                        <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          <SelectValue placeholder="الكل" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all" className="text-right">
                            الكل
                          </SelectItem>
                          {uniqueDepartments.map((dept) => (
                            <SelectItem key={dept} value={dept} className="text-right">
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      onClick={() => {
                        setFilterRequestType('all');
                        setFilterDepartment('all');
                      }}
                      className="w-full h-9 bg-gray-100 hover:bg-gray-200 text-gray-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
                    >
                      مسح الفلاتر
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Export Button */}
            <div className="relative" ref={exportRef}>
              <Button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className="h-[43px] px-[10px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-[5px] rounded-lg border border-[#e2e2e2]"
              >
                <Download className="w-4 h-4" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base">تصدير</span>
              </Button>
              {showExportOptions && (
                <div className={`absolute top-full mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-20 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                  <button className="w-full text-right px-3 py-2 hover:bg-gray-100 rounded [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">PDF</button>
                  <button className="w-full text-right px-3 py-2 hover:bg-gray-100 rounded [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">Excel</button>
                  <button className="w-full text-right px-3 py-2 hover:bg-gray-100 rounded [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">CSV</button>
                </div>
              )}
            </div>

            {/* Show/Hide Columns */}
            <div className="relative" ref={columnsRef}>
              <Button
                onClick={() => setShowColumnsFilter(!showColumnsFilter)}
                className="h-[43px] px-[13px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border border-[#e2e2e2]"
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base">
                  إظهار/إخفاء أعمدة
                </span>
              </Button>
              {showColumnsFilter && (
                <div
                  dir="rtl"
                  className={`absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-20 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}
                >
                  <div className="text-sm text-gray-600 p-2 border-b border-gray-100 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                    إظهار/إخفاء أعمدة
                  </div>
                  {ALL_COLUMNS.map((column) => (
                    <label
                      key={column.key}
                      className="flex items-center gap-2 px-2 py-2 hover:bg-gray-50 rounded cursor-pointer flex-row-reverse justify-end"
                    >
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {column.label}
                      </span>
                      <Checkbox
                        checked={visibleColumns.includes(column.key)}
                        onCheckedChange={() => toggleColumnVisibility(column.key)}
                        className="border-gray-300"
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Create New Button */}
            <button
              onClick={() => navigate('/purchases/material-requests/create')}
              className={buttonClasses.primary}
            >
              طلبية جديدة
            </button>
          </div>
        </InitialFilters>

        {/* Search Bar - Now below InitialFilters */}
        <div className="mt-4 mb-4">
          <div className="relative flex-1 max-w-[450px]">
            <Input
              type="text"
              placeholder="ابحث عن مواد، رقم الطلب، القسم/المشروع، ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`h-[43px] ${dir === 'rtl' ? 'pr-10' : 'pl-10'} bg-white border-[#e2e2e2] rounded-lg text-sm`}
            />
            <Search
              className={`absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'right-3' : 'left-3'} w-4 h-4 text-[#99a09e]`}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead className="bg-[#f8f9fa] border-b border-[#e2e2e2]">
                <tr>
                  <th className="px-4 py-3 text-right w-12">
                    <Checkbox
                      checked={
                        selectedRows.length === filteredRequests.length &&
                        filteredRequests.length > 0
                      }
                      onCheckedChange={handleSelectAll}
                      className="border-gray-300"
                    />
                  </th>
                  {visibleColumns.includes('requestNumber') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      رقم
                    </th>
                  )}
                  {visibleColumns.includes('requestDate') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تاريخ الطلب
                    </th>
                  )}
                  {visibleColumns.includes('requiredByDate') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مطلوب بتاريخ
                    </th>
                  )}
                  {visibleColumns.includes('requestType') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      غرض الطلب
                    </th>
                  )}
                  {visibleColumns.includes('department') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      القسم/المشروع
                    </th>
                  )}
                  {visibleColumns.includes('costCenter') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مركز تكلفة
                    </th>
                  )}
                  <th className="px-4 py-3 text-center text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-16">
                    إجراءات
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {filteredRequests.map((request, index) => (
                  <tr
                    key={request.id}
                    className={`hover:bg-gray-50/50 transition-colors ${index === 5 ? 'bg-[#e8f5e9]' : ''}`}
                  >
                    <td className="px-4 py-3">
                      <Checkbox
                        checked={selectedRows.includes(request.id)}
                        onCheckedChange={() => handleRowSelect(request.id)}
                        className="border-gray-300"
                      />
                    </td>
                    {visibleColumns.includes('requestNumber') && (
                      <td className="px-4 py-3 text-right text-sm text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.requestNumber}
                      </td>
                    )}
                    {visibleColumns.includes('requestDate') && (
                      <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.requestDate}
                      </td>
                    )}
                    {visibleColumns.includes('requiredByDate') && (
                      <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.requiredByDate}
                      </td>
                    )}
                    {visibleColumns.includes('requestType') && (
                      <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.requestType}
                      </td>
                    )}
                    {visibleColumns.includes('department') && (
                      <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.department}
                      </td>
                    )}
                    {visibleColumns.includes('costCenter') && (
                      <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.costCenter}
                      </td>
                    )}
                    {/* Actions Column */}
                    <td className="px-4 py-3 text-center">
                      <div
                        className="relative"
                        ref={openActionMenuId === request.id ? actionMenuRef : null}
                      >
                        <button
                          onClick={() =>
                            setOpenActionMenuId(openActionMenuId === request.id ? null : request.id)
                          }
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                        {openActionMenuId === request.id && (
                          <div
                            dir="rtl"
                            className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-30"
                          >
                            <button
                              onClick={() => handleViewRequest(request)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Eye className="w-4 h-4" />
                              <span>عرض التفاصيل</span>
                            </button>
                            <button
                              onClick={() => handleAddItemToRequest(request)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Plus className="w-4 h-4" />
                              <span>إضافة مادة</span>
                            </button>
                            <button
                              onClick={() => handleEditRequest(request)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Edit2 className="w-4 h-4" />
                              <span>تعديل</span>
                            </button>
                            <button
                              onClick={() => handleDeleteClick(request)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>حذف</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Floating Add Button */}
        <button
          onClick={handleCreateNew}
          className="fixed bottom-6 left-6 w-14 h-14 bg-[#093738] hover:bg-[#093738]/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 z-30"
        >
          <span className="text-2xl font-light">+</span>
        </button>

        {/* Slide-in Modal */}
        {showModal && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowModal(false)} />

            {/* Modal Content */}
            <div
              className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full w-[600px] bg-white shadow-2xl z-50 transform transition-transform duration-300`}
              style={{
                transform: showModal
                  ? 'translateX(0)'
                  : dir === 'rtl'
                    ? 'translateX(-100%)'
                    : 'translateX(100%)',
              }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {modalMode === 'create' ? 'إضافة طلب مواد جديد' : 'تعديل طلب مواد'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto h-[calc(100vh-140px)]">
                <div className="space-y-4">
                  {/* Request Number */}
                  <div>
                    <Label
                      htmlFor="requestNumber"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      رقم الطلب <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="requestNumber"
                      placeholder="أدخل رقم الطلب"
                      defaultValue={selectedRequest?.requestNumber}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Request Date */}
                  <div>
                    <Label
                      htmlFor="requestDate"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      تاريخ الطلب <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="requestDate"
                      type="date"
                      defaultValue={selectedRequest?.requestDate}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Required By Date */}
                  <div>
                    <Label
                      htmlFor="requiredByDate"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      مطلوب بتاريخ <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="requiredByDate"
                      type="date"
                      defaultValue={selectedRequest?.requiredByDate}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Request Type */}
                  <div>
                    <Label
                      htmlFor="requestType"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      غرض الطلب <span className="text-red-500">*</span>
                    </Label>
                    <Select defaultValue={selectedRequest?.requestType}>
                      <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <SelectValue placeholder="اختر غرض الطلب" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="طلب صرف">طلب صرف</SelectItem>
                        <SelectItem value="طلب شراء">طلب شراء</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Department/Project */}
                  <div>
                    <Label
                      htmlFor="department"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      القسم/المشروع <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="department"
                      placeholder="أدخل القسم أو المشروع"
                      defaultValue={selectedRequest?.department}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Cost Center */}
                  <div>
                    <Label
                      htmlFor="costCenter"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      مركز تكلفة <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="costCenter"
                      placeholder="أدخل مركز التكلفة"
                      defaultValue={selectedRequest?.costCenter}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white flex gap-3 justify-end">
                <Button
                  onClick={() => setShowModal(false)}
                  className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  إلغاء
                </Button>
                <Button
                  onClick={handleSaveRequest}
                  className="px-6 bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {modalMode === 'create' ? 'إضافة الطلب' : 'حفظ التعديلات'}
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && requestToDelete && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowDeleteModal(false)}
            />

            {/* Modal Content */}
            <div
              dir="rtl"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white rounded-xl shadow-2xl z-50 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Trash2 className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تأكيد الحذف
                  </h3>
                  <p className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    هذا الإجراء لا يمكن التراجع عنه
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                هل أنت متأكد من حذف الطلب{' '}
                <span className="font-semibold text-[#093738]">
                  {requestToDelete.requestNumber}
                </span>
                ؟
              </p>

              <div className="flex gap-3 justify-end">
                <Button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  إلغاء
                </Button>
                <Button
                  onClick={handleConfirmDelete}
                  className="px-4 bg-red-600 hover:bg-red-700 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  حذف
                </Button>
              </div>
            </div>
          </>
        )}

        {/* View Details Modal */}
        {showViewModal && requestToView && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowViewModal(false)}
            />

            {/* Modal Content */}
            <div
              dir="rtl"
              className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full w-[500px] bg-white shadow-2xl z-50`}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  تفاصيل الطلب
                </h2>
                <button
                  onClick={() => setShowViewModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
                <div className="space-y-6">
                  {/* Request Number */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      رقم الطلب
                    </span>
                    <span className="font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.requestNumber}
                    </span>
                  </div>

                  {/* Request Date */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تاريخ الطلب
                    </span>
                    <span className="text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.requestDate}
                    </span>
                  </div>

                  {/* Required By Date */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مطلوب بتاريخ
                    </span>
                    <span className="text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.requiredByDate}
                    </span>
                  </div>

                  {/* Request Type */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      غرض الطلب
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        requestToView.requestType === 'طلب صرف'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      } [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
                    >
                      {requestToView.requestType}
                    </span>
                  </div>

                  {/* Department/Project */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      القسم/المشروع
                    </span>
                    <span className="text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.department}
                    </span>
                  </div>

                  {/* Cost Center */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مركز تكلفة
                    </span>
                    <span className="text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.costCenter}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => {
                        setShowViewModal(false);
                        handleEditRequest(requestToView);
                      }}
                      className="flex-1 h-11 bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica] gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      تعديل الطلب
                    </Button>
                    <Button
                      onClick={() => {
                        setShowViewModal(false);
                        handleDeleteClick(requestToView);
                      }}
                      className="h-11 px-4 bg-red-50 hover:bg-red-100 text-red-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      حذف
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
