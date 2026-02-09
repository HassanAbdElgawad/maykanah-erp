import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { AdvancedTable } from '../../components/ui/Table';
import { useItemsRequiredOrderReceiptData } from '../../hooks';
import { DownloadIcon, ColumnsIcon } from 'lucide-react';

export function ItemsRequiredOrderReceipt() {
  const { t } = useLanguage();
  const { itemsRequired } = useItemsRequiredOrderReceiptData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedMaterialRequest, setSelectedMaterialRequest] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

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
      <div className="p-6" style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#0c4749]">
            {t('items_required_order_receipt.title')}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Date From */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('items_required_order_receipt.date_from')}
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
              {t('items_required_order_receipt.date_to')}
            </label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Material Request */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('items_required_order_receipt.material_request_filter')}
            </label>
            <input
              type="text"
              value={selectedMaterialRequest}
              onChange={(e) => setSelectedMaterialRequest(e.target.value)}
              placeholder={t('items_required_order_receipt.material_request_placeholder')}
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
              {t('items_required_order_receipt.item_filter')}
            </label>
            <input
              type="text"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              placeholder={t('items_required_order_receipt.item_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <AdvancedTable data={itemsRequired} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}
