import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Input } from '../../components/ui/input';
import { CardContainer } from '../../components/ui/CardContainer';
import { useLanguage } from '../../contexts/LanguageContext';
import { AdvancedTable } from '../../components/ui/Table';
import { buttonClasses } from '../../styles';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
} from 'lucide-react';
import { useInventoryCountData } from '../../hooks';

export const InventoryCount = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const { inventoryCountItems } = useInventoryCountData();

  const filteredInventoryCount = inventoryCountItems.filter((item) => {
    const name = language === 'ar' ? item.nameAr : item.nameEn;
    const notes = language === 'ar' ? item.notesAr : item.notesEn;
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notes.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section */}
        <CardContainer>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={t('warehouses.search_inventory_count')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-[45px] bg-slate-50"
                />
              </div>
            </div>
            <button
              onClick={() => navigate('/warehouses/inventory-count/add')}
              className={buttonClasses.primary}
            >
              <Plus className="w-5 h-5" />
              {t('warehouses.add_inventory_count')}
            </button>
          </div>
        </CardContainer>

        {/* Table Section */}
        <CardContainer>
          <AdvancedTable
            data={filteredInventoryCount}
            columns={[
              {
                key: 'name',
                label: t('warehouses.warehouse_name'),
                render: (item) => language === 'ar' ? item.nameAr : item.nameEn,
              },
              {
                key: 'countDate',
                label: t('warehouses.count_date'),
                render: (item) => new Date(item.countDate).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US'),
              },
              {
                key: 'notes',
                label: t('warehouses.notes'),
                render: (item) => language === 'ar' ? item.notesAr : item.notesEn,
              },
              {
                key: 'systemQuantity',
                label: t('warehouses.system_quantity'),
              },
              {
                key: 'actualQuantity',
                label: t('warehouses.actual_quantity'),
              },
              {
                key: 'difference',
                label: t('warehouses.difference'),
                render: (item) => {
                  const difference = item.actualQuantity - item.systemQuantity;
                  return (
                    <span
                      className={
                        difference < 0
                          ? 'text-red-600 font-semibold'
                          : difference > 0
                          ? 'text-green-600 font-semibold'
                          : 'text-black'
                      }
                    >
                      {difference > 0 ? '+' : ''}{difference}
                    </span>
                  );
                },
              },
            ]}
            actions={[
              {
                icon: Edit2,
                label: t('common.edit'),
                onClick: (item) => navigate(`/warehouses/inventory-count/edit/${item.id}`),
                color: 'blue',
              },
              {
                icon: Trash2,
                label: t('common.delete'),
                onClick: (item) => console.log('Delete', item.id),
                color: 'red',
              },
            ]}
          />
        </CardContainer>
      </div>
    </Layout>
  );
};
