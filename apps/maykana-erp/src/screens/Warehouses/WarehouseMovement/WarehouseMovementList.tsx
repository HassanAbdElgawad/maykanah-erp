import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { CardContainer } from '@/components/ui/CardContainer';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedTable } from '@/components/ui/Table';
import { buttonClasses } from '@/styles';
import { Search, Plus, Edit2, Trash2, Eye } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface WarehouseMovement {
  id: string;
  code: string;
  movementNumber: string;
  date: string;
  movementType: 'transfer' | 'damage';
  itemName: string;
  warehouseFrom: string;
  warehouseTo: string;
  costCenter: string;
}

export const WarehouseMovementList = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  // Mock data
  const movements: WarehouseMovement[] = [
    {
      id: '1',
      code: '547B12300015',
      movementNumber: '1222236',
      date: '2025-5-20',
      movementType: 'transfer',
      itemName: 'هوائي',
      warehouseFrom: 'مستودع الرياض',
      warehouseTo: 'مستودع جدة',
      costCenter: 'مركز التكلفة الرئيسي',
    },
    {
      id: '2',
      code: '547B12300016',
      movementNumber: '1222237',
      date: '2025-5-21',
      movementType: 'damage',
      itemName: 'مادة تالفة',
      warehouseFrom: 'مستودع الرياض',
      warehouseTo: '-',
      costCenter: 'مركز التكلفة الفرعي',
    },
    {
      id: '3',
      code: '547B12300017',
      movementNumber: '1222238',
      date: '2025-5-22',
      movementType: 'transfer',
      itemName: 'قطع غيار',
      warehouseFrom: 'مستودع مكة',
      warehouseTo: 'مستودع الدمام',
      costCenter: 'مركز التكلفة الرئيسي',
    },
  ];

  const getMovementTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      transfer: t('warehouses.transfer_stock'),
      damage: t('warehouses.damage_stock'),
    };
    return labels[type] || type;
  };

  const getMovementTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      transfer: 'text-blue-600 bg-blue-50',
      damage: 'text-red-600 bg-red-50',
    };
    return colors[type] || 'text-gray-600 bg-gray-50';
  };

  const filteredMovements = movements.filter((movement) => {
    const matchesSearch =
      movement.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.movementNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.itemName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === 'all' || movement.movementType === filterType;

    return matchesSearch && matchesType;
  });

  const handleAddClick = () => {
    // Navigate to a selection page or show modal to choose movement type
    navigate('/warehouses/warehouse-movement/select-type');
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section */}
        <CardContainer>
          <div className="p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={t('warehouses.search_warehouse_movement')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-[45px] bg-slate-50"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[200px] h-[45px] bg-slate-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('warehouses.all_types')}</SelectItem>
                  <SelectItem value="transfer">{t('warehouses.transfer_stock')}</SelectItem>
                  <SelectItem value="damage">{t('warehouses.damage_stock')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button onClick={handleAddClick} className={buttonClasses.primary}>
              <Plus className="w-5 h-5" />
              {t('warehouses.add_warehouse_movement')}
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
                key: 'movementType',
                label: t('warehouses.movement_type'),
                render: (item) => (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getMovementTypeColor(
                      item.movementType
                    )}`}
                  >
                    {getMovementTypeLabel(item.movementType)}
                  </span>
                ),
              },
              {
                key: 'itemName',
                label: t('warehouses.item_name'),
              },
              {
                key: 'warehouseFrom',
                label: t('warehouses.warehouse_from'),
              },
              {
                key: 'warehouseTo',
                label: t('warehouses.warehouse_to'),
              },
              {
                key: 'costCenter',
                label: t('warehouses.cost_center'),
              },
            ]}
            actions={[
              {
                icon: Eye,
                label: t('common.view'),
                onClick: (item) =>
                  navigate(`/warehouses/warehouse-movement/${item.movementType}/${item.id}`),
                color: 'green',
              },
              {
                icon: Edit2,
                label: t('common.edit'),
                onClick: (item) =>
                  navigate(
                    `/warehouses/warehouse-movement/${item.movementType}/edit/${item.id}`
                  ),
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
