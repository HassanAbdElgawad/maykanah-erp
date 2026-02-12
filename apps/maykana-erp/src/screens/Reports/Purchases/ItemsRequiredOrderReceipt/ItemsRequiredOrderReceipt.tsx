import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { buttonClasses } from '@/styles';
import { AdvancedTable } from '@/components/ui/Table';
import { useItemsRequiredOrderReceiptData } from '@/hooks';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import InitialFilters from '@/components/InitialFilters';

export function ItemsRequiredOrderReceipt() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { itemsRequired } = useItemsRequiredOrderReceiptData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedMaterialRequest, setSelectedMaterialRequest] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [showExportOptions, setShowExportOptions] = useState(false);

  const columns = [
    {
      key: 'materialRequest',
      label: t('items_required_order_receipt.material_request'),
      sortable: true,
    },
    {
      key: 'date',
      label: t('items_required_order_receipt.date'),
      sortable: true,
    },
    {
      key: 'requiredDate',
      label: t('items_required_order_receipt.required_date'),
      sortable: true,
    },
    {
      key: 'itemCode',
      label: t('items_required_order_receipt.item_code'),
      sortable: true,
    },
    {
      key: 'itemName',
      label: t('items_required_order_receipt.item_name'),
      sortable: true,
    },
    {
      key: 'description',
      label: t('items_required_order_receipt.description'),
      sortable: true,
    },
    {
      key: 'majorUnit',
      label: t('items_required_order_receipt.major_unit'),
      sortable: true,
    },
    {
      key: 'itemUnit',
      label: t('items_required_order_receipt.item_unit'),
      sortable: true,
    },
    {
      key: 'quantity',
      label: t('items_required_order_receipt.quantity'),
      sortable: true,
      render: (row: any) => row.quantity.toLocaleString(),
    },
    {
      key: 'quantityMinorUnit',
      label: t('items_required_order_receipt.quantity_minor_unit'),
      sortable: true,
      render: (row: any) => row.quantityMinorUnit.toLocaleString(),
    },
    {
      key: 'quantityReceived',
      label: t('items_required_order_receipt.quantity_received'),
      sortable: true,
      render: (row: any) => row.quantityReceived.toLocaleString(),
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
              {t('items_required_order_receipt.title')}
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
                {t('items_required_order_receipt.date_from')}
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
                {t('items_required_order_receipt.date_to')}
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Material Request */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('items_required_order_receipt.material_request_filter')}
              </label>
              <input
                type="text"
                value={selectedMaterialRequest}
                onChange={(e) => setSelectedMaterialRequest(e.target.value)}
                placeholder={t('items_required_order_receipt.material_request_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Item */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('items_required_order_receipt.item_filter')}
              </label>
              <input
                type="text"
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
                placeholder={t('items_required_order_receipt.item_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <AdvancedTable data={itemsRequired} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
