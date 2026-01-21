import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Input } from '../../components/ui/input';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { AdvancedTable } from '../../components/ui/Table';
import { buttonClasses } from '../../styles';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Package,
} from 'lucide-react';

interface InventoryMaterial {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  category: string;
  unit: string;
  quantity: number;
  minQuantity: number;
  price: number;
  status: 'available' | 'low' | 'out';
}

const sampleMaterials: InventoryMaterial[] = [
  {
    id: '1',
    code: 'MAT-001',
    nameAr: 'ورق A4',
    nameEn: 'A4 Paper',
    category: 'قرطاسية',
    unit: 'حزمة',
    quantity: 150,
    minQuantity: 50,
    price: 25.00,
    status: 'available',
  },
  {
    id: '2',
    code: 'MAT-002',
    nameAr: 'أقلام جاف',
    nameEn: 'Ballpoint Pens',
    category: 'قرطاسية',
    unit: 'علبة',
    quantity: 30,
    minQuantity: 20,
    price: 15.00,
    status: 'available',
  },
  {
    id: '3',
    code: 'MAT-003',
    nameAr: 'حبر طابعة أسود',
    nameEn: 'Black Printer Ink',
    category: 'مستلزمات طباعة',
    unit: 'قطعة',
    quantity: 5,
    minQuantity: 10,
    price: 120.00,
    status: 'low',
  },
  {
    id: '4',
    code: 'MAT-004',
    nameAr: 'ملفات حفظ',
    nameEn: 'File Folders',
    category: 'قرطاسية',
    unit: 'علبة',
    quantity: 0,
    minQuantity: 15,
    price: 35.00,
    status: 'out',
  },
  {
    id: '5',
    code: 'MAT-005',
    nameAr: 'دباسة مكتبية',
    nameEn: 'Office Stapler',
    category: 'أدوات مكتبية',
    unit: 'قطعة',
    quantity: 25,
    minQuantity: 10,
    price: 45.00,
    status: 'available',
  },
  {
    id: '6',
    code: 'MAT-006',
    nameAr: 'شريط لاصق',
    nameEn: 'Adhesive Tape',
    category: 'أدوات مكتبية',
    unit: 'قطعة',
    quantity: 80,
    minQuantity: 30,
    price: 8.00,
    status: 'available',
  },
];

export const InventoryMaterials = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [materials] = useState<InventoryMaterial[]>(sampleMaterials);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      available: {
        bg: 'bg-[#2cc28d26]',
        text: 'text-[#2cc28d]',
        label: t('warehouses.status_available'),
      },
      low: {
        bg: 'bg-[#fbbf2426]',
        text: 'text-[#fbbf24]',
        label: t('warehouses.status_low'),
      },
      out: {
        bg: 'bg-[#ef444426]',
        text: 'text-[#ef4444]',
        label: t('warehouses.status_out'),
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <div className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 ${config.bg} rounded-lg`}>
        <span className={`${config.text} [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-sm`}>
          {config.label}
        </span>
      </div>
    );
  };

  const filteredMaterials = materials.filter((material) =>
    searchTerm === '' ||
    material.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.nameAr.includes(searchTerm) ||
    material.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header with Search and Actions */}
        <MaykanaCard>
          <div className="flex items-center justify-between gap-4 p-4">
            {/* Search */}
            <div className="relative flex-1 max-w-[535px]">
              <Input
                type="text"
                placeholder={t('warehouses.search_materials')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/warehouses/inventory-materials/add')}
                className={buttonClasses.primary}
              >
                <Plus className="w-5 h-5" />
                {t('warehouses.add_material')}
              </button>
            </div>
          </div>
        </MaykanaCard>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-4">
          <MaykanaCard>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    {t('warehouses.total_materials')}
                  </p>
                  <h3 className="text-2xl font-bold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {materials.length}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-[#40d2fe1a] rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#093738]" />
                </div>
              </div>
            </div>
          </MaykanaCard>

          <MaykanaCard>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    {t('warehouses.available_items')}
                  </p>
                  <h3 className="text-2xl font-bold text-[#2cc28d] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {materials.filter(m => m.status === 'available').length}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-[#2cc28d26] rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#2cc28d]" />
                </div>
              </div>
            </div>
          </MaykanaCard>

          <MaykanaCard>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    {t('warehouses.low_stock')}
                  </p>
                  <h3 className="text-2xl font-bold text-[#fbbf24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {materials.filter(m => m.status === 'low').length}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-[#fbbf2426] rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#fbbf24]" />
                </div>
              </div>
            </div>
          </MaykanaCard>

          <MaykanaCard>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    {t('warehouses.out_of_stock')}
                  </p>
                  <h3 className="text-2xl font-bold text-[#ef4444] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {materials.filter(m => m.status === 'out').length}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-[#ef444426] rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#ef4444]" />
                </div>
              </div>
            </div>
          </MaykanaCard>
        </div>

        {/* Materials Table */}
        <MaykanaCard>
          <AdvancedTable
            data={filteredMaterials}
            columns={[
              {
                key: 'code',
                label: t('warehouses.material_code'),
              },
              {
                key: 'name',
                label: t('warehouses.material_name'),
                render: (item) => language === 'ar' ? item.nameAr : item.nameEn,
              },
              {
                key: 'category',
                label: t('warehouses.category'),
              },
              {
                key: 'unit',
                label: t('warehouses.unit'),
              },
              {
                key: 'quantity',
                label: t('warehouses.quantity'),
                render: (item) => (
                  <>
                    <span className={item.quantity <= item.minQuantity ? 'text-red-500 font-bold' : ''}>
                      {item.quantity}
                    </span>
                    <span className="text-gray-400 text-xs mr-1">/ {item.minQuantity}</span>
                  </>
                ),
              },
              {
                key: 'price',
                label: t('warehouses.price'),
                render: (item) => `${item.price.toFixed(2)} ${t('common.currency')}`,
              },
              {
                key: 'status',
                label: t('warehouses.status'),
                render: (item) => getStatusBadge(item.status),
              },
            ]}
            actions={[
              {
                icon: Edit2,
                label: t('common.edit'),
                onClick: (item) => navigate(`/warehouses/inventory-materials/edit/${item.id}`),
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
