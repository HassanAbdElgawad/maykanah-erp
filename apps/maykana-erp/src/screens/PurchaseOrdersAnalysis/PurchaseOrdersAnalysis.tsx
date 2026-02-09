import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { buttonClasses } from '../../styles';
import { AdvancedTable } from '../../components/ui/Table';
import { usePurchaseOrdersAnalysisData } from '../../hooks';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import InitialFilters from '../../components/InitialFilters';

export function PurchaseOrdersAnalysis() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { purchaseOrders } = usePurchaseOrdersAnalysisData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedPurchaseOrder, setSelectedPurchaseOrder] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showExportOptions, setShowExportOptions] = useState(false);

  const columns = [
    {
      key: 'date',
      label: t('purchase_orders_analysis.date'),
      sortable: true,
    },
    {
      key: 'requiredDate',
      label: t('purchase_orders_analysis.required_date'),
      sortable: true,
    },
    {
      key: 'purchaseOrder',
      label: t('purchase_orders_analysis.purchase_order'),
      sortable: true,
    },
    {
      key: 'status',
      label: t('purchase_orders_analysis.status'),
      sortable: true,
    },
    {
      key: 'supplier',
      label: t('purchase_orders_analysis.supplier'),
      sortable: true,
    },
    {
      key: 'project',
      label: t('purchase_orders_analysis.project'),
      sortable: true,
    },
    {
      key: 'itemCode',
      label: t('purchase_orders_analysis.item_code'),
      sortable: true,
    },
    {
      key: 'quantityRequired',
      label: t('purchase_orders_analysis.quantity_required'),
      sortable: true,
      render: (row: any) => row.quantityRequired.toLocaleString(),
    },
    {
      key: 'quantityReceived',
      label: t('purchase_orders_analysis.quantity_received'),
      sortable: true,
      render: (row: any) => row.quantityReceived.toLocaleString(),
    },
    {
      key: 'quantityToReceive',
      label: t('purchase_orders_analysis.quantity_to_receive'),
      sortable: true,
      render: (row: any) => row.quantityToReceive.toLocaleString(),
    },
    {
      key: 'quantityPending',
      label: t('purchase_orders_analysis.quantity_pending'),
      sortable: true,
      render: (row: any) => row.quantityPending.toLocaleString(),
    },
    {
      key: 'quantityForInvoice',
      label: t('purchase_orders_analysis.quantity_for_invoice'),
      sortable: true,
      render: (row: any) => row.quantityForInvoice.toLocaleString(),
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
              {t('purchase_orders_analysis.title')}
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Date From */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchase_orders_analysis.date_from')}
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
                {t('purchase_orders_analysis.date_to')}
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Project */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchase_orders_analysis.project')}
              </label>
              <input
                type="text"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                placeholder={t('purchase_orders_analysis.project_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Purchase Order Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchase_orders_analysis.purchase_order_number')}
              </label>
              <input
                type="text"
                value={selectedPurchaseOrder}
                onChange={(e) => setSelectedPurchaseOrder(e.target.value)}
                placeholder={t('purchase_orders_analysis.purchase_order_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchase_orders_analysis.status_filter')}
              </label>
              <input
                type="text"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                placeholder={t('purchase_orders_analysis.status_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              /></div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <AdvancedTable data={purchaseOrders} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
