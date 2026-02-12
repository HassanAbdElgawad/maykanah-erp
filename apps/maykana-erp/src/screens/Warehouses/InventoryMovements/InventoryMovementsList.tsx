import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { CardContainer } from '@/components/ui/CardContainer';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedTable } from '@/components/ui/Table';
import { buttonClasses } from '@/styles';
import { Search, Plus, Edit2, Trash2, Eye } from 'lucide-react';

interface InventoryMovement {
  id: string;
  code: string;
  movementNumber: string;
  date: string;
  itemName: string;
  movementType: string;
  warehouseFrom: string;
  warehouseTo: string;
}

export const InventoryMovementsList = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const movements: InventoryMovement[] = [
    {
      id: '1',
      code: '547B12300015',
      movementNumber: '1222236',
      date: '2025-5-20',
      itemName: 'هوائي',
      movementType: 'صرف',
      warehouseFrom: 'مستودع الرياض - A',
      warehouseTo: 'مستودع الرياض - A',
    },
    {
      id: '2',
      code: '547B12300015',
      movementNumber: '1222236',
      date: '2025-5-20',
      itemName: 'هوائي',
      movementType: 'استلام',
      warehouseFrom: 'مستودع الرياض',
      warehouseTo: 'مستودع الرياض',
    },
    {
      id: '3',
      code: '547B12300015',
      movementNumber: '1222236',
      date: '2025-5-20',
      itemName: 'هوائي',
      movementType: 'استلام',
      warehouseFrom: 'مستودع الرياض',
      warehouseTo: 'مستودع الرياض',
    },
    {
      id: '4',
      code: '547B12300015',
      movementNumber: '1222236',
      date: '2025-5-20',
      itemName: 'هوائي',
      movementType: 'تحويل',
      warehouseFrom: 'مستودع الرياض',
      warehouseTo: 'مستودع الرياض',
    },
    {
      id: '5',
      code: '547B12300015',
      movementNumber: '1222236',
      date: '2025-5-20',
      itemName: 'هوائي',
      movementType: 'تحويل',
      warehouseFrom: 'مستودع الرياض',
      warehouseTo: 'مستودع الرياض',
    },
    {
      id: '6',
      code: '547B12300015',
      movementNumber: '1222236',
      date: '2025-5-20',
      itemName: 'هوائي',
      movementType: 'استلام',
      warehouseFrom: 'مستودع الرياض',
      warehouseTo: 'مستودع الرياض',
    },
    {
      id: '7',
      code: '547B12300015',
      movementNumber: '1222236',
      date: '2025-5-20',
      itemName: 'هوائي',
      movementType: 'استلام',
      warehouseFrom: 'مستودع الرياض',
      warehouseTo: 'مستودع الرياض',
    },
    {
      id: '8',
      code: '547B12300015',
      movementNumber: '12222361222236',
      date: '2025-5-20',
      itemName: 'هوائي',
      movementType: 'استلام',
      warehouseFrom: 'مستودع ماريابش',
      warehouseTo: 'مستودع ماريابش',
    },
  ];

  const filteredMovements = movements.filter((movement) => {
    return (
      movement.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.movementNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.movementType.toLowerCase().includes(searchTerm.toLowerCase())
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
                  placeholder={t('warehouses.search_inventory_movements')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-[45px] bg-slate-50"
                />
              </div>
            </div>
            <button
              onClick={() => navigate('/warehouses/inventory-movements/add')}
              className={buttonClasses.primary}
            >
              <Plus className="w-5 h-5" />
              {t('warehouses.add_inventory_movement')}
            </button>
          </div>
        </CardContainer>

        {/* Table Section */}
        <CardContainer>
          <AdvancedTable
            data={filteredMovements}
            columns={[
              {
                key: 'code',
                label: t('warehouses.code'),
              },
              {
                key: 'movementNumber',
                label: t('warehouses.movement_number'),
              },
              {
                key: 'date',
                label: t('warehouses.date'),
                render: (item) =>
                  new Date(item.date).toLocaleDateString(
                    language === 'ar' ? 'ar-SA' : 'en-US'
                  ),
              },
              {
                key: 'itemName',
                label: t('warehouses.item_name'),
              },
              {
                key: 'movementType',
                label: t('warehouses.movement_type'),
              },
              {
                key: 'warehouseFrom',
                label: t('warehouses.warehouse_from'),
              },
              {
                key: 'warehouseTo',
                label: t('warehouses.warehouse_to'),
              },
            ]}
            actions={[
              {
                icon: Eye,
                label: t('common.view'),
                onClick: (item) =>
                  navigate(`/warehouses/inventory-movements/${item.id}`),
                color: 'green',
              },
              {
                icon: Edit2,
                label: t('common.edit'),
                onClick: (item) =>
                  navigate(`/warehouses/inventory-movements/edit/${item.id}`),
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
