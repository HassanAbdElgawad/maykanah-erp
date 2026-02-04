import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search, Filter, MoreVertical, Edit2, Trash2, Eye, Download } from 'lucide-react';

interface MaterialRequest {
  id: number;
  number: string;
  requestDate: string;
  requiredDate: string;
  deliveryLocation: string;
  progressPercentage: number;
}

const MATERIAL_REQUESTS_DATA: MaterialRequest[] = [
  {
    id: 1,
    number: 'MR-001',
    requestDate: '13/11/2025',
    requiredDate: '10/11/2025',
    deliveryLocation: 'مستودع مشروع A',
    progressPercentage: 90,
  },
  {
    id: 2,
    number: 'MR-002',
    requestDate: '01/11/2025',
    requiredDate: '10/12/2025',
    deliveryLocation: 'مستودع مشروع Aa',
    progressPercentage: 90,
  },
  {
    id: 3,
    number: 'MR-003',
    requestDate: '10/04/2025',
    requiredDate: '30/12/2025',
    deliveryLocation: 'مستودع مشروع 5',
    progressPercentage: 90,
  },
  {
    id: 4,
    number: 'MR-004',
    requestDate: '10/05/2025',
    requiredDate: '10/06/2025',
    deliveryLocation: 'مستودع مشروع Add',
    progressPercentage: 40,
  },
  {
    id: 5,
    number: 'MR-005',
    requestDate: '11/03/2025',
    requiredDate: '10/10/2025',
    deliveryLocation: 'مستودع مشروع A4',
    progressPercentage: 90,
  },
  {
    id: 6,
    number: 'MR-006',
    requestDate: '10/01/2025',
    requiredDate: '10/12/2025',
    deliveryLocation: 'مستودع مشروع Av',
    progressPercentage: 40,
  },
  {
    id: 7,
    number: 'MR-007',
    requestDate: '10/03/2025',
    requiredDate: '10/11/2025',
    deliveryLocation: 'مستودع مشروع Z',
    progressPercentage: 90,
  },
  {
    id: 8,
    number: 'MR-008',
    requestDate: '10/05/2025',
    requiredDate: '10/11/2025',
    deliveryLocation: 'مستودع مشروع And',
    progressPercentage: 40,
  },
];

export const MaterialRequestsReview = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const [requests] = useState<MaterialRequest[]>(MATERIAL_REQUESTS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);
  const [showColumns, setShowColumns] = useState(true);

  // Pagination
  const itemsPerPage = 8;
  const totalPages = 3; // Fixed to 3 pages as shown in design

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      searchQuery === '' ||
      request.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.deliveryLocation.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const paginatedRequests = filteredRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewRequest = (request: MaterialRequest) => {
    navigate(`/purchases/material-requests/${request.id}`);
    setOpenActionMenuId(null);
  };

  const handleEditRequest = (request: MaterialRequest) => {
    navigate(`/purchases/material-requests/${request.id}?mode=edit`);
    setOpenActionMenuId(null);
  };

  const handleDeleteRequest = (request: MaterialRequest) => {
    console.log('Delete request:', request);
    setOpenActionMenuId(null);
  };

  const getProgressColor = (percentage: number): string => {
    if (percentage >= 80) return 'bg-emerald-500';
    return 'bg-red-500';
  };

  return (
    <Layout
    >
      <div className="relative" dir={dir}>
        {/* Header with Action Bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Add New Button */}
            <Button
              onClick={() => navigate('/purchases/material-requests/create')}
              className="h-[40px] px-4 bg-[#093738] hover:bg-[#093738]/90 text-white gap-2 rounded-lg"
            >
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium">
                إنشاء أمر شراء
              </span>
            </Button>

            {/* Filter Button */}
            <Button className="h-[40px] px-3 bg-white hover:bg-slate-50 text-[#374151] gap-2 rounded-lg border border-[#e2e2e2]">
              <Filter className="w-4 h-4" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">فلتر</span>
            </Button>

            {/* Export Button */}
            <Button className="h-[40px] px-3 bg-white hover:bg-slate-50 text-[#374151] gap-2 rounded-lg border border-[#e2e2e2]">
              <Download className="w-4 h-4" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">تصدير</span>
            </Button>

            {/* Show/Hide Columns Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showColumns}
                onChange={(e) => setShowColumns(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#093738] focus:ring-[#093738]"
              />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-[#374151]">
                إظهار/إخفاء أعمدة
              </span>
            </label>
          </div>

          {/* Search Bar */}
          <div className="relative w-[400px]">
            <Input
              type="text"
              placeholder="ابحث من هنا (طلب مواد ، غرض الطلب، المادة أو التصنيف ...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`h-[40px] ${dir === 'rtl' ? 'pr-10' : 'pl-10'} bg-white border-[#e2e2e2] rounded-lg text-sm`}
            />
            <Search
              className={`absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'right-3' : 'left-3'} w-4 h-4 text-[#99a09e]`}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir={dir}>
              <thead className="bg-[#f8f9fa] border-b border-[#e2e2e2]">
                <tr>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-20">
                    رقم
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تاريخ الطلب
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مطلوبة بتاريخ
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[200px]">
                    موقع التسليم
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[140px]">
                    نسبة الفوتر
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {paginatedRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-4 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {request.number}
                    </td>
                    <td className="px-4 py-4 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {request.requestDate}
                    </td>
                    <td className="px-4 py-4 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {request.requiredDate}
                    </td>
                    <td className="px-4 py-4 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {request.deliveryLocation}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-10">
                          {request.progressPercentage}%
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getProgressColor(request.progressPercentage)} rounded-full transition-all`}
                            style={{ width: `${request.progressPercentage}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    {/* Actions Column */}
                    <td className="px-4 py-4 text-center">
                      <div className="relative inline-block">
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
                            dir={dir}
                            className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-30"
                          >
                            <button
                              onClick={() => handleViewRequest(request)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Eye className="w-4 h-4" />
                              <span>{t('common.view')}</span>
                            </button>
                            <button
                              onClick={() => handleEditRequest(request)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Edit2 className="w-4 h-4" />
                              <span>{t('common.edit')}</span>
                            </button>
                            <button
                              onClick={() => handleDeleteRequest(request)}
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

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          {/* Next Button (Left side in RTL) */}
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="h-[40px] px-6 bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            التالي
          </Button>

          {/* Page Numbers (Center) */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm transition-colors ${
                  currentPage === page
                    ? 'bg-[#093738] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Previous Button (Right side in RTL) */}
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="h-[40px] px-6 bg-white hover:bg-gray-100 text-[#374151] border border-gray-200 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            السابق
          </Button>
        </div>
      </div>
    </Layout>
  );
};
