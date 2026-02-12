import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { CardContainer } from '@/components/ui/CardContainer';
import { AdvancedTable } from '@/components/ui/Table';
import { Search, Plus, Edit2, Trash2, ChevronDown, Download, Filter, Settings } from 'lucide-react';

interface MaterialRequest {
  id: number;
  requestNumber: string;
  requestDate: string;
  requestType: 'transfer' | 'damage';
  warehouseName: string;
}

const mockData: MaterialRequest[] = [
  { id: 1, requestNumber: '547812300015', requestDate: '2025-5-20', requestType: 'transfer', warehouseName: 'مشروع A' },
  { id: 2, requestNumber: '547812300015', requestDate: '2025-5-20', requestType: 'transfer', warehouseName: 'مشروع A8' },
  { id: 3, requestNumber: '547812300015', requestDate: '2025-5-20', requestType: 'transfer', warehouseName: 'مشروع B' },
  { id: 4, requestNumber: '547812300015', requestDate: '2025-5-20', requestType: 'transfer', warehouseName: 'مشروع Add' },
  { id: 5, requestNumber: '547812300015', requestDate: '2025-5-20', requestType: 'transfer', warehouseName: 'مشروع A4' },
  { id: 6, requestNumber: '547812300015', requestDate: '2025-5-20', requestType: 'damage', warehouseName: 'مشروع A7' },
  { id: 7, requestNumber: '547812300015', requestDate: '2025-5-20', requestType: 'damage', warehouseName: 'مشروع Z' },
  { id: 8, requestNumber: '547812300015', requestDate: '2025-5-20', requestType: 'damage', warehouseName: 'مشروع And' },
];

export const MaterialRequestsList: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showOperationsMenu, setShowOperationsMenu] = useState(false);

  const filteredData = mockData.filter((item) =>
    item.requestNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.warehouseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRequestTypeText = (type: 'transfer' | 'damage') =>
    type === 'transfer' ? t('warehouses.transfer') : t('warehouses.damage_stock');

  return (
    <Layout>
      <div className="space-y-4">
        <CardContainer>
          <div className="p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-[400px]">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder={t('warehouses.search_material_requests')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10 h-[45px] bg-slate-50"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors h-[45px]">
                  <Filter className="w-4 h-4" />
                  <span>{t('common.filter')}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors h-[45px]">
                  <Download className="w-4 h-4" />
                  <span>{t('common.download')}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors h-[45px]">
                  <Settings className="w-4 h-4" />
                  <span>{t('common.show_hide_columns')}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowOperationsMenu(!showOperationsMenu)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#093738] text-white rounded-md hover:bg-[#0a4849] transition-colors h-[45px]"
                  >
                    <span>{t('common.operations')}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {showOperationsMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowOperationsMenu(false)}
                      />
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              navigate('/warehouses/material-requests/damage/add');
                              setShowOperationsMenu(false);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            <Plus className="w-4 h-4" />
                            <span>{t('warehouses.damage_stock')}</span>
                          </button>
                          <button
                            onClick={() => {
                              navigate('/warehouses/material-requests/transfer/add');
                              setShowOperationsMenu(false);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          >
                            <Plus className="w-4 h-4" />
                            <span>{t('warehouses.transfer_stock')}</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContainer>

        <CardContainer>
          <AdvancedTable
            data={filteredData}
            columns={[
              {
                key: 'requestNumber',
                label: t('warehouses.request_number'),
              },
              {
                key: 'requestDate',
                label: t('warehouses.request_date'),
              },
              {
                key: 'requestType',
                label: t('warehouses.request_type'),
                render: (item) => (
                  <span className="text-sm text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {getRequestTypeText(item.requestType)}
                  </span>
                ),
              },
              {
                key: 'warehouseName',
                label: t('warehouses.warehouse_name'),
              },
            ]}
            actions={[
              {
                icon: Edit2,
                label: t('common.edit'),
                onClick: (item) => navigate(`/warehouses/material-requests/${item.requestType}/edit/${item.id}`),
                color: 'blue',
              },
              {
                icon: Trash2,
                label: t('common.delete'),
                onClick: (item) => console.log('Delete request:', item.id),
                color: 'red',
              },
            ]}
          />
        </CardContainer>
      </div>
    </Layout>
  );
};
