import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { AdvancedTable } from '../../components/ui/Table';
import { usePurchasePricesByCategoryData } from '../../hooks';
import { DownloadIcon, ColumnsIcon } from 'lucide-react';

export function PurchasePricesByCategory() {
  const { t } = useLanguage();
  const { purchasePrices } = usePurchasePricesByCategoryData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');

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
      <div className="p-6" style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#0c4749]">
            {t('purchase_prices_by_category.title')}
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
              {t('purchase_prices_by_category.date_from')}
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
              {t('purchase_prices_by_category.date_to')}
            </label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Category */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchase_prices_by_category.category')}
            </label>
            <input
              type="text"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              placeholder={t('purchase_prices_by_category.category_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Category Group */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchase_prices_by_category.category_group_filter')}
            </label>
            <input
              type="text"
              value={selectedCategoryGroup}
              onChange={(e) => setSelectedCategoryGroup(e.target.value)}
              placeholder={t('purchase_prices_by_category.category_group_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Supplier */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchase_prices_by_category.supplier')}
            </label>
            <input
              type="text"
              value={selectedSupplier}
              onChange={(e) => setSelectedSupplier(e.target.value)}
              placeholder={t('purchase_prices_by_category.supplier_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <AdvancedTable data={purchasePrices} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
