import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { AdvancedTable } from '../../components/ui/Table';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
} from 'lucide-react';

interface InventoryCountItem {
  id: string;
  nameAr: string;
  nameEn: string;
  countDate: string;
  systemQuantity: number;
  actualQuantity: number;
  notesAr: string;
  notesEn: string;
}

const sampleInventoryCount: InventoryCountItem[] = [
  {
    id: '1',
    nameAr: 'مستودع مشروع A',
    nameEn: 'Project A Warehouse',
    countDate: '2026-01-15',
    systemQuantity: 500,
    actualQuantity: 498,
    notesAr: 'ملاحظات مستودع مشروع A',
    notesEn: 'Project A Warehouse Notes',
  },
  {
    id: '2',
    nameAr: 'مستودع مشروع B',
    nameEn: 'Project B Warehouse',
    countDate: '2026-01-14',
    systemQuantity: 900,
    actualQuantity: 895,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project B Warehouse Notes',
  },
  {
    id: '3',
    nameAr: 'مستودع مشروع C',
    nameEn: 'Project C Warehouse',
    countDate: '2026-01-13',
    systemQuantity: 145,
    actualQuantity: 145,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project C Warehouse Notes',
  },
  {
    id: '4',
    nameAr: 'مستودع مشروع D',
    nameEn: 'Project D Warehouse',
    countDate: '2026-01-12',
    systemQuantity: 411,
    actualQuantity: 410,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project D Warehouse Notes',
  },
  {
    id: '5',
    nameAr: 'مستودع مشروع E',
    nameEn: 'Project E Warehouse',
    countDate: '2026-01-11',
    systemQuantity: 123,
    actualQuantity: 120,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project E Warehouse Notes',
  },
  {
    id: '6',
    nameAr: 'مستودع مشروع F',
    nameEn: 'Project F Warehouse',
    countDate: '2026-01-10',
    systemQuantity: 200,
    actualQuantity: 200,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project F Warehouse Notes',
  },
  {
    id: '7',
    nameAr: 'مستودع مشروع G',
    nameEn: 'Project G Warehouse',
    countDate: '2026-01-09',
    systemQuantity: 200,
    actualQuantity: 198,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project G Warehouse Notes',
  },
  {
    id: '8',
    nameAr: 'مستودع مشروع H',
    nameEn: 'Project H Warehouse',
    countDate: '2026-01-08',
    systemQuantity: 500,
    actualQuantity: 500,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project H Warehouse Notes',
  },
];

export const InventoryCount = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInventoryCount = sampleInventoryCount.filter((item) => {
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
        <MaykanaCard>
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
            <Button
              onClick={() => navigate('/warehouses/inventory-count/add')}
              className="bg-[#093738] hover:bg-[#0a4849] text-white h-[45px] gap-2"
            >
              <Plus className="w-5 h-5" />
              {t('warehouses.add_inventory_count')}
            </Button>
          </div>
        </MaykanaCard>

        {/* Table Section */}
        <MaykanaCard>
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
        </MaykanaCard>
      </div>
    </Layout>
  );
};
