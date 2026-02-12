import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Filter, Download, Settings, ChevronDown } from 'lucide-react';
import { AssetValueAdjustmentModal } from './AssetValueAdjustmentModal';

interface AssetAdjustment {
  id: string;
  assetCode: string;
  assetName: string;
  previousValue: number;
  newValue: number;
  difference: number;
  adjustmentType: string;
  date: string;
  user: string;
  status: string;
  attachmentsCount: number;
}

export function AssetValueAdjustment() {
  const { dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAsset, setSelectedAsset] = useState<AssetAdjustment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data
  const adjustments: AssetAdjustment[] = [
    {
      id: '1',
      assetCode: 'MN-12345',
      assetName: 'جهاز الكمبيوتر',
      previousValue: 6790,
      newValue: 9790,
      difference: 2210,
      adjustmentType: 'زيادة قيمة',
      date: '2026-06-10',
      user: 'Admin',
      status: 'مكتمل',
      attachmentsCount: 3,
    },
    {
      id: '2',
      assetCode: 'MN-67890',
      assetName: 'الدسم الكميادي',
      previousValue: 1950,
      newValue: 1000,
      difference: -950,
      adjustmentType: 'تخفيض قيمة',
      date: '2026-03-18',
      user: 'IT Manager',
      status: 'مكتمل',
      attachmentsCount: 4,
    },
    {
      id: '3',
      assetCode: 'MN-54321',
      assetName: 'النقل الرئيسي للمؤسسة',
      previousValue: 3200000,
      newValue: 3650000,
      difference: 450000,
      adjustmentType: 'زيادة قيمة',
      date: '2026-01-05',
      user: 'Finance Director',
      status: 'مكتمل',
      attachmentsCount: 5,
    },
    {
      id: '4',
      assetCode: 'MN-98765',
      assetName: 'الطابعة',
      previousValue: 160000,
      newValue: 110000,
      difference: -50000,
      adjustmentType: 'تخفيض قيمة',
      date: '2026-02-22',
      user: 'Fleet Manager',
      status: 'مكتمل',
      attachmentsCount: 6,
    },
  ];

  const handleAddNew = () => {
    setSelectedAsset(null);
    setIsModalOpen(true);
  };

  const handleEdit = (adjustment: AssetAdjustment) => {
    setSelectedAsset(adjustment);
    setIsModalOpen(true);
  };

  const formatCurrency = (value: number) => {
    return (
      <span className="flex items-center gap-1">
        {value.toLocaleString('en-US')}
        <img
          src="/images/currency/saudi-riyal.svg"
          alt="ريال سعودي"
          className="w-3.5 h-3.5"
          style={{ filter: 'brightness(0)' }}
        />
      </span>
    );
  };

  const formatDifference = (value: number) => {
    const sign = value >= 0 ? '+' : '-';
    const absValue = Math.abs(value);
    return (
      <span className="flex items-center gap-1">
        <span className="flex items-center gap-1">
          {absValue.toLocaleString('en-US')}
          <span>{sign}</span>
          <img
            src="/images/currency/saudi-riyal.svg"
            alt="ريال سعودي"
            className="w-3.5 h-3.5"
            style={{
              filter:
                value >= 0
                  ? 'brightness(0) sepia(1) hue-rotate(90deg) saturate(5)'
                  : 'brightness(0) sepia(1) hue-rotate(330deg) saturate(5)',
            }}
          />
        </span>
      </span>
    );
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث من هنا (الأصل، القيمة السابقة، نوع التعديل، ...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
                  خيارات
                  <ChevronDown className="w-4 h-4 mr-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Filter className="w-4 h-4 ml-2" />
                  فلتر
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="w-4 h-4 ml-2" />
                  تحميل
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 ml-2" />
                  إظهار/إخفاء الأعمدة
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              onClick={handleAddNew}
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
            >
              تعديل قيمة الأصل
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">الأصل</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    القيمة السابقة
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    القيمة الجديدة
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">الفرق</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    نوع التعديل
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    التاريخ
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    المستخدم
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    المرفقات
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {adjustments.map((adjustment) => (
                  <tr
                    key={adjustment.id}
                    onClick={() => handleEdit(adjustment)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">{adjustment.assetName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatCurrency(adjustment.previousValue)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatCurrency(adjustment.newValue)}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm font-medium ${
                        adjustment.difference >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {formatDifference(adjustment.difference)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{adjustment.adjustmentType}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{adjustment.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{adjustment.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {adjustment.attachmentsCount}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AssetValueAdjustmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        asset={selectedAsset}
      />
    </Layout>
  );
}
