import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { AdvancedTable } from '../../components/ui/Table';
import { usePurchasesPricesByItemData } from '../../hooks';
import { DownloadIcon, ColumnsIcon } from 'lucide-react';

export function PurchasesPricesByItem() {
  const { t } = useLanguage();
  const { purchasesPricesByItem } = usePurchasesPricesByItemData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItemGroup, setSelectedItemGroup] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');

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
      <div className="p-6" style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#0c4749]">
            {t('purchases_prices_by_item.title')}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {/* Date From */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchases_prices_by_item.date_from')}
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
              {t('purchases_prices_by_item.date_to')}
            </label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Item */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchases_prices_by_item.item')}
            </label>
            <input
              type="text"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              placeholder={t('purchases_prices_by_item.item_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Item Group */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchases_prices_by_item.item_group')}
            </label>
            <input
              type="text"
              value={selectedItemGroup}
              onChange={(e) => setSelectedItemGroup(e.target.value)}
              placeholder={t('purchases_prices_by_item.item_group_placeholder')}
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
              {t('purchases_prices_by_item.supplier')}
            </label>
            <input
              type="text"
              value={selectedSupplier}
              onChange={(e) => setSelectedSupplier(e.target.value)}
              placeholder={t('purchases_prices_by_item.supplier_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <AdvancedTable data={purchasesPricesByItem} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
