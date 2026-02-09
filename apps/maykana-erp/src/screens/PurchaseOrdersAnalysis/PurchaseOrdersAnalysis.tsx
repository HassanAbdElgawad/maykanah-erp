import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { AdvancedTable } from '../../components/ui/Table';
import { usePurchaseOrdersAnalysisData } from '../../hooks';
import { DownloadIcon, ColumnsIcon } from 'lucide-react';

export function PurchaseOrdersAnalysis() {
  const { t } = useLanguage();
  const { purchaseOrders } = usePurchaseOrdersAnalysisData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedPurchaseOrder, setSelectedPurchaseOrder] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

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
      <div className="p-6" style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#0c4749]">
            {t('purchase_orders_analysis.title')}
          </h1>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              <ColumnsIcon className="w-4 h-4" />
              {t('common.show_hide_columns')}
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              <DownloadIcon className="w-4 h-4" />
              {t('common.download')}
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {/* Date From */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchase_orders_analysis.date_from')}
            </label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Date To */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchase_orders_analysis.date_to')}
            </label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Project */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchase_orders_analysis.project')}
            </label>
            <input
              type="text"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              placeholder={t('purchase_orders_analysis.project_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Purchase Order Number */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchase_orders_analysis.purchase_order_number')}
            </label>
            <input
              type="text"
              value={selectedPurchaseOrder}
              onChange={(e) => setSelectedPurchaseOrder(e.target.value)}
              placeholder={t('purchase_orders_analysis.purchase_order_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Status */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchase_orders_analysis.status_filter')}
            </label>
            <input
              type="text"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              placeholder={t('purchase_orders_analysis.status_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <AdvancedTable data={purchaseOrders} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
