import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { buttonClasses } from '../../styles';
import { AdvancedTable } from '../../components/ui/Table';
import { usePurchasesAnalysisData } from '../../hooks';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import InitialFilters from '../../components/InitialFilters';

export function PurchasesAnalysis() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { purchasesAnalysis } = usePurchasesAnalysisData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState('');
  const [showExportOptions, setShowExportOptions] = useState(false);

  const columns = [
    {
      key: 'invoiceNumber',
      label: t('purchases_analysis.invoice_number'),
      sortable: true,
    },
    {
      key: 'date',
      label: t('purchases_analysis.date'),
      sortable: true,
    },
    {
      key: 'supplier',
      label: t('purchases_analysis.supplier'),
      sortable: true,
    },
    {
      key: 'purchaseOrder',
      label: t('purchases_analysis.purchase_order'),
      sortable: true,
    },
    {
      key: 'project',
      label: t('purchases_analysis.project'),
      sortable: true,
    },
    {
      key: 'totalBeforeTax',
      label: t('purchases_analysis.total_before_tax'),
      sortable: true,
      render: (row: any) => row.totalBeforeTax.toLocaleString(),
    },
    {
      key: 'taxAmount',
      label: t('purchases_analysis.tax_amount'),
      sortable: true,
      render: (row: any) => row.taxAmount.toLocaleString(),
    },
    {
      key: 'totalWithTax',
      label: t('purchases_analysis.total_with_tax'),
      sortable: true,
      render: (row: any) => row.totalWithTax.toLocaleString(),
    },
    {
      key: 'status',
      label: t('purchases_analysis.status'),
      sortable: true,
    },
  ];

  return (
    <Layout>
      <div className="[direction:rtl] space-y-4">
        {/* Header with InitialFilters */}
        <InitialFilters>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/reports?selected=purchases')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <span className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('purchases_analysis.title')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}>
              {t('common.download')}
              <Download className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setShowExportOptions(!showExportOptions)}
              className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
            >
              {t('common.show_hide_columns')}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </InitialFilters>

        {/* Filters Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-4" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Date From */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchases_analysis.date_from')}
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Date To */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchases_analysis.date_to')}
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Supplier */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchases_analysis.supplier_filter')}
              </label>
              <input
                type="text"
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                placeholder={t('purchases_analysis.supplier_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Invoice Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchases_analysis.invoice_filter')}
              </label>
              <input
                type="text"
                value={selectedInvoice}
                onChange={(e) => setSelectedInvoice(e.target.value)}
                placeholder={t('purchases_analysis.invoice_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <AdvancedTable data={purchasesAnalysis} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
