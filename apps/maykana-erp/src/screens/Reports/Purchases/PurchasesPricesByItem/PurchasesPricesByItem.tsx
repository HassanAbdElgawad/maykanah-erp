import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { buttonClasses } from '@/styles';
import { AdvancedTable } from '@/components/ui/Table';
import { usePurchasesPricesByItemData } from '@/hooks';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import InitialFilters from '@/components/InitialFilters';

export function PurchasesPricesByItem() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { purchasesPricesByItem } = usePurchasesPricesByItemData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItemGroup, setSelectedItemGroup] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [showExportOptions, setShowExportOptions] = useState(false);

  const columns = [
    {
      key: 'itemCode',
      label: t('purchases_prices_by_item.item_code'),
      sortable: true,
    },
    {
      key: 'itemName',
      label: t('purchases_prices_by_item.item_name'),
      sortable: true,
    },
    {
      key: 'description',
      label: t('purchases_prices_by_item.description'),
      sortable: true,
    },
    {
      key: 'itemGroup',
      label: t('purchases_prices_by_item.item_group'),
      sortable: true,
    },
    {
      key: 'purchaseInvoice',
      label: t('purchases_prices_by_item.purchase_invoice'),
      sortable: true,
    },
    {
      key: 'transactionDate',
      label: t('purchases_prices_by_item.transaction_date'),
      sortable: true,
    },
    {
      key: 'purchaseOrder',
      label: t('purchases_prices_by_item.purchase_order'),
      sortable: true,
    },
    {
      key: 'quantity',
      label: t('purchases_prices_by_item.quantity'),
      sortable: true,
    },
    {
      key: 'itemUnit',
      label: t('purchases_prices_by_item.item_unit'),
      sortable: true,
    },
    {
      key: 'price',
      label: t('purchases_prices_by_item.price'),
      sortable: true,
      render: (row: any) => row.price.toLocaleString(),
    },
    {
      key: 'amount',
      label: t('purchases_prices_by_item.amount'),
      sortable: true,
      render: (row: any) => row.amount.toLocaleString(),
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
              {t('purchases_prices_by_item.title')}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Date From */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchases_prices_by_item.date_from')}
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
                {t('purchases_prices_by_item.date_to')}
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Item */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchases_prices_by_item.item')}
              </label>
              <input
                type="text"
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
                placeholder={t('purchases_prices_by_item.item_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Item Group */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchases_prices_by_item.item_group')}
              </label>
              <input
                type="text"
                value={selectedItemGroup}
                onChange={(e) => setSelectedItemGroup(e.target.value)}
                placeholder={t('purchases_prices_by_item.item_group_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Supplier */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchases_prices_by_item.supplier')}
              </label>
              <input
                type="text"
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                placeholder={t('purchases_prices_by_item.supplier_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <AdvancedTable data={purchasesPricesByItem} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
