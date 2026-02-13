import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { CardContainer } from '@/components/ui/CardContainer';
import { AdvancedTable } from '@/components/ui/Table';
import { Search, Plus, Edit2, Trash2, ChevronDown, Download, Filter, Settings } from 'lucide-react';
import { getInventoryClosingListSampleData } from '@/data/warehouses/inventory-closing-list.data';

export const InventoryClosingList: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showOperationsMenu, setShowOperationsMenu] = useState(false);

  const data = useMemo(() => getInventoryClosingListSampleData(), []);
  const filteredData = data.filter((item) =>
    item.warehouseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section */}
        <CardContainer>
          <div className="p-4">
            <div className="flex items-center justify-between gap-4 ">
              {/* Search Bar */}
              <div className="flex items-center gap-4">
                <div className="relative w-[400px]">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder={t('warehouses.search_inventory_closing')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10 h-[45px] bg-slate-50"
                  />
                </div>
              </div>

              {/* Action Buttons */}
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
                
                {/* Operations Dropdown */}
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
                      {/* Backdrop */}
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowOperationsMenu(false)}
                      />
                      
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              navigate('/warehouses/inventory-closing/add');
                              setShowOperationsMenu(false);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors text-right"
                          >
                            <Plus className="w-4 h-4" />
                            <span>{t('warehouses.add_inventory_closing')}</span>
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

        {/* Table Section */}
        <CardContainer>
          <AdvancedTable
            data={filteredData}
            columns={[
              {
                key: 'warehouseName',
                label: t('warehouses.warehouse_name'),
              },
              {
                key: 'closingDate',
                label: t('warehouses.closing_date'),
              },
              {
                key: 'quantity',
                label: t('warehouses.quantity'),
              },
              {
                key: 'amount',
                label: t('warehouses.amount'),
              },
            ]}
            actions={[
              {
                icon: Edit2,
                label: t('common.edit'),
                onClick: (item) => navigate(`/warehouses/inventory-closing/edit/${item.id}`),
                color: 'blue',
              },
              {
                icon: Trash2,
                label: t('common.delete'),
                onClick: (item) => console.log('Delete inventory closing:', item.id),
                color: 'red',
              },
            ]}
          />
        </CardContainer>
      </div>
    </Layout>
  );
};
