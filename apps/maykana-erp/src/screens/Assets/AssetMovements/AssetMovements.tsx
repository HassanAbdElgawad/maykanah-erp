import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Eye, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { AdvancedTable } from '@/components/ui/Table';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { buttonClasses } from '@/styles';

export function AssetMovements() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [filters, setFilters] = useState({
    movementNumber: '',
    assetName: '',
    movementType: '',
    status: '',
  });

  // Mock data
  const mockData = [
    {
      id: 1,
      movementNumber: 'MV-2026-045',
      assetName: 'Laptop Dell 5420',
      fromLocation: 'القسم الرئيسي – IT – مكتب 2',
      toLocation: 'القسم الرئيسي – HR – مكتب 1',
      fromEntity: 'يوسف الصواف',
      toEntity: 'هاجر بترينية',
      date: '30/11/2025',
      movementType: 'نقل عهدة + نقل موقع',
      status: 'مكتمل',
    },
    {
      id: 2,
      movementNumber: 'MV-2026-046',
      assetName: 'مكتب خشبي',
      fromLocation: 'القسم الرئيسي – IT – مكتب 2',
      toLocation: 'القسم الرئيسي – HR – مكتب 1',
      fromEntity: 'يوسف الصواف',
      toEntity: 'هاجر بترينية',
      date: '30/11/2025',
      movementType: 'نقل عهدة + نقل موقع',
      status: 'مكتمل',
    },
    {
      id: 3,
      movementNumber: 'MV-2026-047',
      assetName: 'كرسي مكتب متحرك',
      fromLocation: 'القسم الرئيسي – HR – مكتب 1',
      toLocation: 'القسم الرئيسي – IT – مكتب 2',
      fromEntity: 'يوسف الصواف',
      toEntity: 'هاجر بترينية',
      date: '30/11/2025',
      movementType: 'نقل عهدة + نقل موقع',
      status: 'مكتمل',
    },
    {
      id: 4,
      movementNumber: 'MV-2026-048',
      assetName: 'لوحة مفاتيح + فأرة + سلكية',
      fromLocation: 'القسم الرئيسي – HR – مكتب 1',
      toLocation: 'القسم الرئيسي – IT – مكتب 2',
      fromEntity: 'يوسف الصواف',
      toEntity: 'هاجر بترينية',
      date: '30/11/2025',
      movementType: 'نقل عهدة + نقل موقع',
      status: 'مكتمل',
    },
  ];

  const actionButtons = [
    {
      icon: Eye,
      label: t('common.view'),
      onClick: (row: any) => handleView(row.id),
      color: 'blue' as const,
    },
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleView = (id: number) => {
    navigate(`/assets/asset-movements/${id}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate('/assets')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('assets.asset_movements.title')}
            </h1>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center gap-2 px-4 h-[43px] rounded-lg"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {t('common.filter')}
              {showFilters ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 px-4 h-[43px] rounded-lg"
            >
              <Download className="w-4 h-4" />
              {t('common.download')}
            </Button>
            <button
              onClick={() => navigate('/assets/asset-movements/add')}
              className={buttonClasses.primary}
            >
              {t('assets.asset_movements.add_new')}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl border border-[#e2e2e2] animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('assets.asset_movements.movement_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('assets.asset_movements.movement_number')}
                  value={filters.movementNumber}
                  onChange={(e) => handleFilterChange('movementNumber', e.target.value)}
                  className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('assets.asset_movements.asset_name')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('assets.asset_movements.asset_name')}
                  value={filters.assetName}
                  onChange={(e) => handleFilterChange('assetName', e.target.value)}
                  className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('assets.asset_movements.movement_type')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('assets.asset_movements.movement_type')}
                  value={filters.movementType}
                  onChange={(e) => handleFilterChange('movementType', e.target.value)}
                  className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('assets.asset_movements.status')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('assets.asset_movements.status')}
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <AdvancedTable
            data={mockData}
            columns={[
              {
                key: 'movementNumber',
                label: t('assets.asset_movements.movement_number'),
              },
              {
                key: 'assetName',
                label: t('assets.asset_movements.asset_name'),
              },
              {
                key: 'fromLocation',
                label: t('assets.asset_movements.from_location'),
              },
              {
                key: 'toLocation',
                label: t('assets.asset_movements.to_location'),
              },
              {
                key: 'fromEntity',
                label: t('assets.asset_movements.from_entity'),
              },
              {
                key: 'toEntity',
                label: t('assets.asset_movements.to_entity'),
              },
              {
                key: 'date',
                label: t('assets.asset_movements.date'),
              },
              {
                key: 'movementType',
                label: t('assets.asset_movements.movement_type'),
              },
              {
                key: 'status',
                label: t('assets.asset_movements.status'),
              },
            ]}
            actions={actionButtons}
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className={buttonClasses.outline}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            {t('common.previous')}
          </Button>
          
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  currentPage === index + 1
                    ? 'bg-[#11383f] text-white'
                    : 'bg-white text-gray-700 border border-[#e2e2e2] hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            className={buttonClasses.outline}
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            {t('common.next')}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
