import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';
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
  RotateCcw,
  X,
  MoreVertical,
  Edit2,
  Trash2,
  Eye,
} from 'lucide-react';

// Price Quote Request interface
interface PriceQuoteRequest {
  id: number;
  requestNumber: string;
  sendDate: string;
  suppliersCount: number;
  quotesCount: number;
  status: 'active' | 'closed' | 'waiting_offer';
}

// Mock data matching the design image
const PRICE_QUOTE_REQUESTS_DATA: PriceQuoteRequest[] = [
  {
    id: 1,
    requestNumber: 'RFQ-001',
    sendDate: '13/11/2025',
    suppliersCount: 4,
    quotesCount: 4,
    status: 'active',
  },
  {
    id: 2,
    requestNumber: 'RFQ-002',
    sendDate: '10/04/2025',
    suppliersCount: 4,
    quotesCount: 3,
    status: 'active',
  },
  {
    id: 3,
    requestNumber: 'RFQ-003',
    sendDate: '10/04/2025',
    suppliersCount: 3,
    quotesCount: 3,
    status: 'closed',
  },
  {
    id: 4,
    requestNumber: 'RFQ-004',
    sendDate: '10/04/2025',
    suppliersCount: 2,
    quotesCount: 2,
    status: 'closed',
  },
  {
    id: 5,
    requestNumber: 'RFQ-005',
    sendDate: '11/03/2025',
    suppliersCount: 2,
    quotesCount: 2,
    status: 'waiting_offer',
  },
  {
    id: 6,
    requestNumber: 'RFQ-006',
    sendDate: '11/03/2025',
    suppliersCount: 2,
    quotesCount: 2,
    status: 'waiting_offer',
  },
  {
    id: 7,
    requestNumber: 'RFQ-007',
    sendDate: '10/03/2025',
    suppliersCount: 2,
    quotesCount: 2,
    status: 'waiting_offer',
  },
  {
    id: 8,
    requestNumber: 'RFQ-008',
    sendDate: '10/09/2025',
    suppliersCount: 2,
    quotesCount: 2,
    status: 'waiting_offer',
  },
];

// Column visibility configuration
const ALL_COLUMNS = [
  { key: 'requestNumber', labelKey: 'price_quote_requests.request_number' },
  { key: 'sendDate', labelKey: 'price_quote_requests.send_date' },
  { key: 'suppliersCount', labelKey: 'price_quote_requests.suppliers_count' },
  { key: 'quotesCount', labelKey: 'price_quote_requests.quotes_count' },
  { key: 'status', labelKey: 'price_quote_requests.status' },
];

export const PriceQuoteRequests = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const [requests] = useState<PriceQuoteRequest[]>(PRICE_QUOTE_REQUESTS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Filter states
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(ALL_COLUMNS.map((c) => c.key));

  // Filter criteria
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedRequest, setSelectedRequest] = useState<PriceQuoteRequest | null>(null);

  // Row actions menu state
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);

  // Delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState<PriceQuoteRequest | null>(null);

  // View details modal
  const [showViewModal, setShowViewModal] = useState(false);
  const [requestToView, setRequestToView] = useState<PriceQuoteRequest | null>(null);

  // Refs for click outside detection
  const columnsRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
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
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target as Node)) {
        setOpenActionMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getStatusLabel = (status: PriceQuoteRequest['status']) => {
    const statusLabels = {
      active: t('price_quote_requests.status_active'),
      closed: t('price_quote_requests.status_closed'),
      waiting_offer: t('price_quote_requests.status_waiting_offer'),
    };
    return statusLabels[status];
  };

  const getStatusStyle = (status: PriceQuoteRequest['status']) => {
    const statusStyles = {
      active: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800',
      waiting_offer: 'bg-blue-100 text-blue-800',
    };
    return statusStyles[status];
  };

  const filteredRequests = requests.filter((request) => {
    // Search filter
    const matchesSearch =
      searchQuery === '' || request.requestNumber.toLowerCase().includes(searchQuery.toLowerCase());

    // Status filter
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

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

  const handleReset = () => {
    setSearchQuery('');
    setFilterStatus('all');
    setSelectedRows([]);
    setVisibleColumns(ALL_COLUMNS.map((c) => c.key));
  };

  const handleCreateNew = () => {
    navigate('/purchases/price-quote-requests/create');
  };

  const handleSaveRequest = () => {
    setShowModal(false);
  };

  const toggleColumnVisibility = (columnKey: string) => {
    setVisibleColumns((prev) =>
      prev.includes(columnKey) ? prev.filter((k) => k !== columnKey) : [...prev, columnKey]
    );
  };

  // Row action handlers
  const handleViewRequest = (request: PriceQuoteRequest) => {
    setRequestToView(request);
    setShowViewModal(true);
    setOpenActionMenuId(null);
  };

  const handleEditRequest = (request: PriceQuoteRequest) => {
    setModalMode('edit');
    setSelectedRequest(request);
    setShowModal(true);
    setOpenActionMenuId(null);
  };

  const handleDeleteClick = (request: PriceQuoteRequest) => {
    setRequestToDelete(request);
    setShowDeleteModal(true);
    setOpenActionMenuId(null);
  };

  const handleConfirmDelete = () => {
    if (requestToDelete) {
      alert(`${t('price_quote_requests.deleted_success')} ${requestToDelete.requestNumber}`);
    }
    setShowDeleteModal(false);
    setRequestToDelete(null);
  };

  return (
    <Layout>
      <div className="relative">
        {/* Action Bar */}
        <div className="flex items-center gap-2 mb-4 justify-between">
          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Add New Button */}
            <Button
              onClick={handleCreateNew}
              className="h-[43px] px-4 bg-[#093738] hover:bg-[#093738]/90 text-white gap-2 rounded-lg"
            >
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium">
                {t('price_quote_requests.add_new')}
              </span>
            </Button>

            {/* Filter Button */}
            <div className="relative" ref={filterRef}>
              <Button
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className={`h-[43px] px-3 bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border ${
                  filterStatus !== 'all' ? 'border-[#093738] bg-[#093738]/5' : 'border-[#e2e2e2]'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
                  {t('common.filter')}
                </span>
                {filterStatus !== 'all' && (
                  <span className="w-2 h-2 bg-[#093738] rounded-full"></span>
                )}
              </Button>
              {showFilterOptions && (
                <div
                  dir="rtl"
                  className={`absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}
                >
                  <div className="space-y-4">
                    <div>
                      <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm mb-2 block text-right">
                        {t('price_quote_requests.status')}
                      </Label>
                      <Select value={filterStatus} onValueChange={setFilterStatus} dir="rtl">
                        <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          <SelectValue placeholder={t('common.all')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all" className="text-right">
                            {t('common.all')}
                          </SelectItem>
                          <SelectItem value="active" className="text-right">
                            {t('price_quote_requests.status_active')}
                          </SelectItem>
                          <SelectItem value="closed" className="text-right">
                            {t('price_quote_requests.status_closed')}
                          </SelectItem>
                          <SelectItem value="waiting_offer" className="text-right">
                            {t('price_quote_requests.status_waiting_offer')}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      onClick={() => setFilterStatus('all')}
                      className="w-full h-9 bg-gray-100 hover:bg-gray-200 text-gray-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
                    >
                      {t('price_quote_requests.clear_filters')}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Reset Button */}
            <Button
              onClick={handleReset}
              className="h-[43px] px-3 bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border border-[#e2e2e2]"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
                {t('common.reset')}
              </span>
            </Button>

            {/* Show/Hide Columns */}
            <div className="relative" ref={columnsRef}>
              <Button
                onClick={() => setShowColumnsFilter(!showColumnsFilter)}
                className="h-[43px] px-3 bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border border-[#e2e2e2]"
              >
                <Columns3 className="w-4 h-4" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
                  {t('common.show_hide_columns')}
                </span>
              </Button>
              {showColumnsFilter && (
                <div
                  dir="rtl"
                  className={`absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-20 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}
                >
                  <div className="text-sm text-gray-600 p-2 border-b border-gray-100 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                    {t('common.show_hide_columns')}
                  </div>
                  {ALL_COLUMNS.map((column) => (
                    <label
                      key={column.key}
                      className="flex items-center gap-2 px-2 py-2 hover:bg-gray-50 rounded cursor-pointer flex-row-reverse justify-end"
                    >
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {t(column.labelKey)}
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
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-[450px]">
            <Input
              type="text"
              placeholder={t('price_quote_requests.search_placeholder')}
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
                      {t('price_quote_requests.request_number')}
                    </th>
                  )}
                  {visibleColumns.includes('sendDate') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t('price_quote_requests.send_date')}
                    </th>
                  )}
                  {visibleColumns.includes('suppliersCount') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t('price_quote_requests.suppliers_count')}
                    </th>
                  )}
                  {visibleColumns.includes('quotesCount') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t('price_quote_requests.quotes_count')}
                    </th>
                  )}
                  {visibleColumns.includes('status') && (
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t('price_quote_requests.status')}
                    </th>
                  )}
                  <th className="px-4 py-3 text-center text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-16">
                    {t('common.actions')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50/50 transition-colors">
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
                    {visibleColumns.includes('sendDate') && (
                      <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.sendDate}
                      </td>
                    )}
                    {visibleColumns.includes('suppliersCount') && (
                      <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.suppliersCount}
                      </td>
                    )}
                    {visibleColumns.includes('quotesCount') && (
                      <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {request.quotesCount}
                      </td>
                    )}
                    {visibleColumns.includes('status') && (
                      <td className="px-4 py-3 text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(request.status)} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
                        >
                          {getStatusLabel(request.status)}
                        </span>
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
                              <span>{t('price_quote_requests.view_details')}</span>
                            </button>
                            <button
                              onClick={() => handleEditRequest(request)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Edit2 className="w-4 h-4" />
                              <span>{t('common.edit')}</span>
                            </button>
                            <button
                              onClick={() => handleDeleteClick(request)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>{t('common.delete')}</span>
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
                  {modalMode === 'create'
                    ? t('price_quote_requests.add_new')
                    : t('price_quote_requests.edit_request')}
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
                      {t('price_quote_requests.request_number')}{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="requestNumber"
                      placeholder={t('price_quote_requests.enter_request_number')}
                      defaultValue={selectedRequest?.requestNumber}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Send Date */}
                  <div>
                    <Label
                      htmlFor="sendDate"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      {t('price_quote_requests.send_date')} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="sendDate"
                      type="date"
                      defaultValue={selectedRequest?.sendDate}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Suppliers Count */}
                  <div>
                    <Label
                      htmlFor="suppliersCount"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      {t('price_quote_requests.suppliers_count')}{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="suppliersCount"
                      type="number"
                      min="0"
                      defaultValue={selectedRequest?.suppliersCount}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Quotes Count */}
                  <div>
                    <Label
                      htmlFor="quotesCount"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      {t('price_quote_requests.quotes_count')}{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="quotesCount"
                      type="number"
                      min="0"
                      defaultValue={selectedRequest?.quotesCount}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <Label
                      htmlFor="status"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2"
                    >
                      {t('price_quote_requests.status')} <span className="text-red-500">*</span>
                    </Label>
                    <Select defaultValue={selectedRequest?.status || 'active'}>
                      <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <SelectValue placeholder={t('price_quote_requests.select_status')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">
                          {t('price_quote_requests.status_active')}
                        </SelectItem>
                        <SelectItem value="closed">
                          {t('price_quote_requests.status_closed')}
                        </SelectItem>
                        <SelectItem value="waiting_offer">
                          {t('price_quote_requests.status_waiting_offer')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white flex gap-3 justify-end">
                <Button
                  onClick={() => setShowModal(false)}
                  className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {t('common.cancel')}
                </Button>
                <Button
                  onClick={handleSaveRequest}
                  className="px-6 bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {modalMode === 'create'
                    ? t('price_quote_requests.add_request')
                    : t('common.save')}
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
                    {t('price_quote_requests.confirm_delete')}
                  </h3>
                  <p className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('price_quote_requests.delete_warning')}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('price_quote_requests.delete_confirm_message')}{' '}
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
                  {t('common.cancel')}
                </Button>
                <Button
                  onClick={handleConfirmDelete}
                  className="px-4 bg-red-600 hover:bg-red-700 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {t('common.delete')}
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
                  {t('price_quote_requests.request_details')}
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
                      {t('price_quote_requests.request_number')}
                    </span>
                    <span className="font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.requestNumber}
                    </span>
                  </div>

                  {/* Send Date */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t('price_quote_requests.send_date')}
                    </span>
                    <span className="text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.sendDate}
                    </span>
                  </div>

                  {/* Suppliers Count */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t('price_quote_requests.suppliers_count')}
                    </span>
                    <span className="text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.suppliersCount}
                    </span>
                  </div>

                  {/* Quotes Count */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t('price_quote_requests.quotes_count')}
                    </span>
                    <span className="text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {requestToView.quotesCount}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t('price_quote_requests.status')}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(requestToView.status)} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
                    >
                      {getStatusLabel(requestToView.status)}
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
                      {t('price_quote_requests.edit_request')}
                    </Button>
                    <Button
                      onClick={() => {
                        setShowViewModal(false);
                        handleDeleteClick(requestToView);
                      }}
                      className="h-11 px-4 bg-red-50 hover:bg-red-100 text-red-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      {t('common.delete')}
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
