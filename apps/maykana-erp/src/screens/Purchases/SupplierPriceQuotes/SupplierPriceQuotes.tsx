import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  Filter,
  FileDown,
  Printer,
  Send,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  Eye,
} from 'lucide-react';

// Supplier Quote interface
interface SupplierQuote {
  id: number;
  quoteNumber: string;
  requestDate: string;
  matchDate: string;
  supplierName: string;
  displayNumber: number;
}

// Mock data matching the design
const SUPPLIER_QUOTES_DATA: SupplierQuote[] = [
  {
    id: 1,
    quoteNumber: 'SQ-001',
    requestDate: '13/11/2025',
    matchDate: '10/11/2025',
    supplierName: 'الكاتي',
    displayNumber: 365,
  },
  {
    id: 2,
    quoteNumber: 'SQ-002',
    requestDate: '01/11/2025',
    matchDate: '10/12/2025',
    supplierName: 'شركة التمويل العربية',
    displayNumber: 214,
  },
  {
    id: 3,
    quoteNumber: 'SQ-003',
    requestDate: '10/04/2025',
    matchDate: '30/12/2025',
    supplierName: 'شركة مرمي العربية',
    displayNumber: 785,
  },
  {
    id: 4,
    quoteNumber: 'SQ-004',
    requestDate: '10/05/2025',
    matchDate: '10/06/2025',
    supplierName: 'شركة الرياض',
    displayNumber: 456,
  },
  {
    id: 5,
    quoteNumber: 'SQ-005',
    requestDate: '11/03/2025',
    matchDate: '10/10/2025',
    supplierName: 'شركة الجزيرة',
    displayNumber: 963,
  },
  {
    id: 6,
    quoteNumber: 'SQ-006',
    requestDate: '10/01/2025',
    matchDate: '10/12/2025',
    supplierName: 'شركة الرشيد والتوفر',
    displayNumber: 552,
  },
  {
    id: 7,
    quoteNumber: 'SQ-007',
    requestDate: '10/03/2025',
    matchDate: '10/11/2025',
    supplierName: 'شركة عطفان',
    displayNumber: 563,
  },
  {
    id: 8,
    quoteNumber: 'SQ-008',
    requestDate: '10/05/2025',
    matchDate: '10/11/2025',
    supplierName: 'شركة الجندة',
    displayNumber: 412,
  },
];

export const SupplierPriceQuotes = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const [quotes] = useState<SupplierQuote[]>(SUPPLIER_QUOTES_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);

  // Filter
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(quotes.length / itemsPerPage);

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      searchQuery === '' ||
      quote.quoteNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.supplierName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const paginatedQuotes = filteredQuotes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewQuote = (quote: SupplierQuote) => {
    navigate(`/purchases/price-quote-requests/${quote.id}?mode=view`);
    setOpenActionMenuId(null);
  };

  const handleEditQuote = (quote: SupplierQuote) => {
    navigate(`/purchases/price-quote-requests/${quote.id}?mode=edit`);
    setOpenActionMenuId(null);
  };

  const handleDeleteQuote = (quote: SupplierQuote) => {
    console.log('Delete quote:', quote);
    setOpenActionMenuId(null);
  };

  return (
    <Layout>
      <div className="relative" dir={dir}>
        {/* Action Bar */}
        <div className="flex items-center justify-between gap-2 mb-4" dir={dir}>
          {/* Search Bar */}
          <div className="relative flex-1 max-w-[450px]">
            <Input
              type="text"
              placeholder={t('supplier_price_quotes.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`h-[43px] ${dir === 'rtl' ? 'pr-10' : 'pl-10'} bg-white border-[#e2e2e2] rounded-lg text-sm`}
            />
            <Search
              className={`absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'right-3' : 'left-3'} w-4 h-4 text-[#99a09e]`}
            />
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Add New Button */}
            

            {/* Filter Button */}
            <Button
              onClick={() => setShowFilterOptions(!showFilterOptions)}
              className="h-[43px] px-3 bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border border-[#e2e2e2]"
            >
              <Filter className="w-4 h-4" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
                {t('common.filter')}
              </span>
            </Button>

            {/* Export Button */}
            <Button className="h-[43px] px-3 bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border border-[#e2e2e2]">
              <FileDown className="w-4 h-4" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
                {t('common.export')}
              </span>
            </Button>

            {/* Print/Send/Add Dropdown */}
            <Select dir={dir}>
              <SelectTrigger className="h-[43px] px-3 bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border border-[#e2e2e2] w-[180px]">
                <Printer className="w-4 h-4" />
                <SelectValue
                  placeholder={t('supplier_price_quotes.print_send_add')}
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="print">
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4" />
                    <span>{t('common.print')}</span>
                  </div>
                </SelectItem>
                <SelectItem value="send">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>{t('common.send')}</span>
                  </div>
                </SelectItem>
                <SelectItem value="add">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    <span>{t('common.add')}</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={() => navigate('/purchases/price-quote-requests/create')}
              className="h-[43px] px-4 bg-[#093738] hover:bg-[#093738]/90 text-white gap-2 rounded-lg"
            >
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium">
                {t('supplier_price_quotes.add_new')}
              </span>
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead className="bg-[#f8f9fa] border-b border-[#e2e2e2]">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('supplier_price_quotes.quote_number')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('supplier_price_quotes.request_date')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('supplier_price_quotes.match_date')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('supplier_price_quotes.supplier_name')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('supplier_price_quotes.display_number')}
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-16">
                    {t('common.actions')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {paginatedQuotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 text-right text-sm text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {quote.quoteNumber}
                    </td>
                    <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {quote.requestDate}
                    </td>
                    <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {quote.matchDate}
                    </td>
                    <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {quote.supplierName}
                    </td>
                    <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {quote.displayNumber}
                    </td>
                    {/* Actions Column */}
                    <td className="px-4 py-3 text-center">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenActionMenuId(openActionMenuId === quote.id ? null : quote.id)
                          }
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                        {openActionMenuId === quote.id && (
                          <div
                            dir="rtl"
                            className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-30"
                          >
                            <button
                              onClick={() => handleViewQuote(quote)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Eye className="w-4 h-4" />
                              <span>{t('common.view')}</span>
                            </button>
                            <button
                              onClick={() => handleEditQuote(quote)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Edit2 className="w-4 h-4" />
                              <span>{t('common.edit')}</span>
                            </button>
                            <button
                              onClick={() => handleDeleteQuote(quote)}
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
        <div className="flex items-center justify-between mt-4">
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="h-[40px] px-4 bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('common.next')}
          </Button>

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

          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="h-[40px] px-4 bg-white hover:bg-gray-100 text-[#093738] border border-gray-200 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('common.previous')}
          </Button>
        </div>
      </div>
    </Layout>
  );
};
