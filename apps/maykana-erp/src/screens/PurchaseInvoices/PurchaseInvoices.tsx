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
import { Search, MoreVertical, Eye, Edit2, Trash2 } from 'lucide-react';

interface PurchaseInvoice {
  id: string;
  invoiceNumber: string;
  invoiceDate: string;
  supplierName: string;
}

export function PurchaseInvoices() {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openActionMenuId, setOpenActionMenuId] = useState<string | null>(null);

  // Mock data
  const invoices: PurchaseInvoice[] = [
    {
      id: '1',
      invoiceNumber: 'MR-001',
      invoiceDate: '13/11/2025',
      supplierName: 'الكاتلي',
    },
    {
      id: '2',
      invoiceNumber: 'MR-002',
      invoiceDate: '01/11/2025',
      supplierName: 'شركة التمويل العربية',
    },
    {
      id: '3',
      invoiceNumber: 'MR-003',
      invoiceDate: '10/04/2025',
      supplierName: 'شركة مرمي العربية',
    },
    {
      id: '4',
      invoiceNumber: 'MR-004',
      invoiceDate: '10/05/2025',
      supplierName: 'شركة الرياض',
    },
    {
      id: '5',
      invoiceNumber: 'MR-005',
      invoiceDate: '11/03/2025',
      supplierName: 'شركة الجديد',
    },
    {
      id: '6',
      invoiceNumber: 'MR-006',
      invoiceDate: '10/01/2025',
      supplierName: 'شركة التوحيد والنور',
    },
    {
      id: '7',
      invoiceNumber: 'MR-007',
      invoiceDate: '10/03/2025',
      supplierName: 'شركة عظمان',
    },
    {
      id: '8',
      invoiceNumber: 'MR-008',
      invoiceDate: '10/05/2025',
      supplierName: 'شركة الحديثة',
    },
  ];

  const totalPages = 3;

  const handleViewInvoice = (invoice: PurchaseInvoice) => {
    navigate(`/purchases/purchase-invoices/${invoice.id}`);
    setOpenActionMenuId(null);
  };

  const handleEditInvoice = (invoice: PurchaseInvoice) => {
    navigate(`/purchases/purchase-invoices/${invoice.id}?mode=edit`);
    setOpenActionMenuId(null);
  };

  const handleDeleteInvoice = (invoice: PurchaseInvoice) => {
    console.log('Delete invoice:', invoice);
    setOpenActionMenuId(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#f8faf9] font-['IBM_Plex_Sans_Arabic']">
        <div className="p-6">
          {/* Header Section */}
          <div className="mb-6 flex items-center justify-between gap-4" dir={dir}>
            {/* Right side - Search */}
            <div className="relative flex-1 max-w-[450px]">
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

            {/* Left side - Action buttons */}
            <div className="flex items-center gap-2">
              <Button
                onClick={() => navigate('/purchases/purchase-invoices/create')}
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
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{invoice.invoiceNumber}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{invoice.invoiceDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{invoice.supplierName}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenActionMenuId(openActionMenuId === invoice.id ? null : invoice.id)
                          }
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MoreVertical size={20} className="text-gray-600" />
                        </button>

                        {openActionMenuId === invoice.id && (
                          <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                            <button
                              onClick={() => handleViewInvoice(invoice)}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center justify-end gap-2 text-sm"
                            >
                              <span>عرض</span>
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => handleEditInvoice(invoice)}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center justify-end gap-2 text-sm"
                            >
                              <span>تعديل</span>
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteInvoice(invoice)}
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
