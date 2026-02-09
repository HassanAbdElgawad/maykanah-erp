import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { buttonClasses } from '../../styles';
import { AdvancedTable } from '../../components/ui/Table';
import { usePurchasePricesByCategoryData } from '../../hooks';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import InitialFilters from '../../components/InitialFilters';

export function PurchasePricesByCategory() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { purchasePrices } = usePurchasePricesByCategoryData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [showExportOptions, setShowExportOptions] = useState(false);

  const columns = [
    {
      key: 'itemCode',
      label: t('purchase_prices_by_category.item_code'),
      sortable: true,
    },
    {
      key: 'itemName',
      label: t('purchase_prices_by_category.item_name'),
      sortable: true,
    },
    {
      key: 'description',
      label: t('purchase_prices_by_category.description'),
      sortable: true,
    },
    {
      key: 'categoryGroup',
      label: t('purchase_prices_by_category.category_group'),
      sortable: true,
    },
    {
      key: 'purchaseInvoice',
      label: t('purchase_prices_by_category.purchase_invoice'),
      sortable: true,
    },
    {
      key: 'transactionDate',
      label: t('purchase_prices_by_category.transaction_date'),
      sortable: true,
    },
    {
      key: 'purchaseOrder',
      label: t('purchase_prices_by_category.purchase_order'),
      sortable: true,
    },
    {
      key: 'quantity',
      label: t('purchase_prices_by_category.quantity'),
      sortable: true,
      render: (row: any) => row.quantity.toLocaleString(),
    },
    {
      key: 'unitOfMeasure',
      label: t('purchase_prices_by_category.unit_of_measure'),
      sortable: true,
    },
    {
      key: 'price',
      label: t('purchase_prices_by_category.price'),
      sortable: true,
      render: (row: any) => row.price.toLocaleString(),
    },
    {
      key: 'total',
      label: t('purchase_prices_by_category.total'),
      sortable: true,
      render: (row: any) => row.total.toLocaleString(),
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
              {t('purchase_prices_by_category.title')}
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
                {t('purchase_prices_by_category.date_from')}
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
                {t('purchase_prices_by_category.date_to')}
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchase_prices_by_category.category')}
              </label>
              <input
                type="text"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                placeholder={t('purchase_prices_by_category.category_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Category Group */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchase_prices_by_category.category_group_filter')}
              </label>
              <input
                type="text"
                value={selectedCategoryGroup}
                onChange={(e) => setSelectedCategoryGroup(e.target.value)}
                placeholder={t('purchase_prices_by_category.category_group_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Supplier */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('purchase_prices_by_category.supplier')}
              </label>
              <input
                type="text"
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                placeholder={t('purchase_prices_by_category.supplier_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <AdvancedTable data={purchasePrices} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
