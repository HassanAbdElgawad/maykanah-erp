import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Search, Filter, Download, MoreVertical, Eye, Edit2, Trash2 } from 'lucide-react';

interface MaterialRequest {
  id: string;
  requestNumber: string;
  requestDate: string;
  supplierName: string;
}

export function MaterialRequestsList() {
  const { language, dir } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openActionMenuId, setOpenActionMenuId] = useState<string | null>(null);

  // Mock data
  const requests: MaterialRequest[] = [
    {
      id: '1',
      requestNumber: 'MR-001',
      requestDate: '13/11/2025',
      supplierName: 'الكاتلي',
    },
    {
      id: '2',
      requestNumber: 'MR-002',
      requestDate: '01/11/2025',
      supplierName: 'شركة التمويل العربية',
    },
    {
      id: '3',
      requestNumber: 'MR-003',
      requestDate: '10/04/2025',
      supplierName: 'شركة مرمي العربية',
    },
    {
      id: '4',
      requestNumber: 'MR-004',
      requestDate: '10/05/2025',
      supplierName: 'شركة الرياض',
    },
    {
      id: '5',
      requestNumber: 'MR-005',
      requestDate: '11/03/2025',
      supplierName: 'شركة الجديد',
    },
    {
      id: '6',
      requestNumber: 'MR-006',
      requestDate: '10/01/2025',
      supplierName: 'شركة التوحيد والنور',
    },
    {
      id: '7',
      requestNumber: 'MR-007',
      requestDate: '10/03/2025',
      supplierName: 'شركة عظمان',
    },
    {
      id: '8',
      requestNumber: 'MR-008',
      requestDate: '10/05/2025',
      supplierName: 'شركة الحديثة',
    },
  ];

  const totalPages = 3;

  const handleViewRequest = (request: MaterialRequest) => {
    navigate(`/purchases/material-requests-list/${request.id}`);
    setOpenActionMenuId(null);
  };

  const handleEditRequest = (request: MaterialRequest) => {
    navigate(`/purchases/material-requests-list/${request.id}?mode=edit`);
    setOpenActionMenuId(null);
  };

  const handleDeleteRequest = (request: MaterialRequest) => {
    console.log('Delete request:', request);
    setOpenActionMenuId(null);
  };

  const breadcrumbs = [
    { label: 'الرئيسية', path: '/' },
    { label: 'إدارة المشتريات', path: '/purchases' },
    { label: 'طلبات المواد', path: '/purchases/material-requests-list' },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="min-h-screen bg-[#f8faf9] font-['IBM_Plex_Sans_Arabic']">
        <div className="p-6">
          {/* Header Section */}
          <div className="mb-6 flex items-center justify-between gap-4">
            {/* Left side - Action buttons */}
            <div className="flex items-center gap-2">
              <Button
                onClick={() => navigate('/purchases/material-requests-list/create')}
                className="bg-[#093738] hover:bg-[#0a4647] text-white px-6"
              >
                طلبية جديد
              </Button>

              <Select>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="إظهار / إخفاء أعمدة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأعمدة</SelectItem>
                  <SelectItem value="number">رقم</SelectItem>
                  <SelectItem value="date">تاريخ الطلب</SelectItem>
                  <SelectItem value="supplier">اسم الورد</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px] bg-white">
                  <SelectValue placeholder="تصدير" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px] bg-white">
                  <SelectValue placeholder="فلتر" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="today">اليوم</SelectItem>
                  <SelectItem value="week">هذا الأسبوع</SelectItem>
                  <SelectItem value="month">هذا الشهر</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Right side - Search */}
            <div className="relative w-96">
              <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="ابحث عن شيء (طلب مواد ، عرض الطلب ، انتظار الإستلام ، ...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 bg-white"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-white border-b">
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">رقم</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                    تاريخ الطلب
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                    اسم الورد
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                    {/* Actions column header */}
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{request.requestNumber}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{request.requestDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{request.supplierName}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenActionMenuId(openActionMenuId === request.id ? null : request.id)
                          }
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MoreVertical size={20} className="text-gray-600" />
                        </button>

                        {openActionMenuId === request.id && (
                          <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                            <button
                              onClick={() => handleViewRequest(request)}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center justify-end gap-2 text-sm"
                            >
                              <span>عرض</span>
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => handleEditRequest(request)}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center justify-end gap-2 text-sm"
                            >
                              <span>تعديل</span>
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteRequest(request)}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center justify-end gap-2 text-sm text-red-600"
                            >
                              <span>حذف</span>
                              <Trash2 size={16} />
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

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              variant="outline"
              className="bg-white"
            >
              السابق
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg ${
                    currentPage === page
                      ? 'bg-[#093738] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <Button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="bg-[#093738] hover:bg-[#0a4647] text-white"
            >
              التالي
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
