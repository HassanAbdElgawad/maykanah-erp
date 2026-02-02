import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { 
  Search, 
  Filter, 
  Download, 
  Settings, 
  MoreVertical, 
  Eye, 
  ArrowRightLeft, 
  Wrench, 
  TrendingUp, 
  DollarSign, 
  Trash2 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import { AssetDetailModal } from './AssetDetailModal';

interface Asset {
  id: string;
  code: string;
  name: string;
  location: string;
  responsibleEmployee: string;
  currentBookValue: number;
  status: 'used' | 'available' | 'maintenance';
  originalValue: number;
  depreciationType: string;
  custodyHolder: string;
  depreciationRate: number;
  isActive: boolean;
  usageDate: string;
  images: string[];
}

export function AssetManagement() {
  const { dir } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  // Sample data
  const assets: Asset[] = [
    {
      id: '1',
      code: 'AS-000234',
      name: 'طابعة HP LaserJet',
      location: 'الرياض',
      responsibleEmployee: 'محمد الحسيني',
      currentBookValue: 800000,
      status: 'used',
      originalValue: 9800,
      depreciationType: 'جاري',
      custodyHolder: 'IT Support - يوسف الحمراني',
      depreciationRate: 31,
      isActive: true,
      usageDate: '2023-04-15',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=800&fit=crop',
      ],
    },
    {
      id: '2',
      code: 'AS-000234',
      name: 'طابعة HP LaserJet',
      location: 'الرياض',
      responsibleEmployee: 'محمد الحسيني',
      currentBookValue: 800000,
      status: 'used',
      originalValue: 9800,
      depreciationType: 'خاص',
      custodyHolder: 'IT Support - يوسف الحمراني',
      depreciationRate: 31,
      isActive: true,
      usageDate: '2023-04-15',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop',
      ],
    },
    {
      id: '3',
      code: '2023-11-08',
      name: 'طابعة HP LaserJet',
      location: 'الرياض',
      responsibleEmployee: 'محمد الحسيني',
      currentBookValue: 800000,
      status: 'maintenance',
      originalValue: 9800,
      depreciationType: 'خاص',
      custodyHolder: 'IT Support - يوسف الحمراني',
      depreciationRate: 31,
      isActive: true,
      usageDate: '2023-04-15',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop',
      ],
    },
    {
      id: '4',
      code: '2023-11-09',
      name: 'طابعة HP LaserJet',
      location: 'الرياض',
      responsibleEmployee: 'محمد الحسيني',
      currentBookValue: 800000,
      status: 'available',
      originalValue: 9800,
      depreciationType: 'خاص',
      custodyHolder: 'IT Support - يوسف الحمراني',
      depreciationRate: 31,
      isActive: true,
      usageDate: '2023-04-15',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop',
      ],
    },
  ];

  const getStatusBadge = (status: Asset['status']) => {
    const statusConfig = {
      used: {
        label: 'مستخدم',
        className: 'bg-green-100 text-green-800',
      },
      available: {
        label: 'فارغ',
        className: 'bg-gray-100 text-gray-800',
      },
      maintenance: {
        label: 'صيانة',
        className: 'bg-yellow-100 text-yellow-800',
      },
    };

    const config = statusConfig[status];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
        {config.label}
      </span>
    );
  };

  const formatCurrency = (value: number) => {
    return (
      <span className="flex items-center gap-1">
        {value.toLocaleString('en-US')}
      </span>
    );
  };

  const handleViewDetails = (asset: Asset, index: number) => {
    setSelectedAsset(asset);
    setCurrentAssetIndex(index);
    setIsDetailModalOpen(true);
  };

  const handleNavigateAsset = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' ? currentAssetIndex - 1 : currentAssetIndex + 1;
    if (newIndex >= 0 && newIndex < assets.length) {
      setCurrentAssetIndex(newIndex);
      setSelectedAsset(assets[newIndex]);
    }
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
                placeholder="ابحث من هنا (رقم المبدأ، التاريخ، اسم الموظف، ...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              <Filter className="w-4 h-4 ml-2" />
              فلتر
            </Button>
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              <Download className="w-4 h-4 ml-2" />
              تحميل
            </Button>
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              <Settings className="w-4 h-4 ml-2" />
              إظهار/إخفاء أعمدة
            </Button>
            <Button
              onClick={() => navigate('/assets/asset-management/add')}
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
            >
              أصل جديد
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    كود الأصل
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    اسم الأصل
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    الموقع
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    الموظف المسؤول
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    القيمة الدفترية الحالية
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    الحالة
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {assets.map((asset, index) => (
                  <tr
                    key={asset.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleViewDetails(asset, index)}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">{asset.code}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{asset.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{asset.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{asset.responsibleEmployee}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatCurrency(asset.currentBookValue)}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(asset.status)}
                    </td>
                    <td className="px-6 py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button 
                            className="text-gray-400 hover:text-gray-600"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/assets/asset-management/${asset.id}`);
                            }}
                          >
                            <Eye className="w-4 h-4 ml-2" />
                            <span>تفاصيل الأصل</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/assets/asset-movements/add?assetId=${asset.id}`);
                            }}
                          >
                            <ArrowRightLeft className="w-4 h-4 ml-2" />
                            <span>نقل الأصل</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/assets/maintenance/add?assetId=${asset.id}`);
                            }}
                          >
                            <Wrench className="w-4 h-4 ml-2" />
                            <span>طلب صيانة</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/assets/asset-value-adjustment?assetId=${asset.id}`);
                            }}
                          >
                            <TrendingUp className="w-4 h-4 ml-2" />
                            <span>تعديل قيمة الأصل</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/assets/sale-disposal?assetId=${asset.id}`);
                            }}
                          >
                            <DollarSign className="w-4 h-4 ml-2" />
                            <span>استبعاد / بيع</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => e.stopPropagation()}
                            className="text-red-600 focus:text-red-600"
                          >
                            <Trash2 className="w-4 h-4 ml-2" />
                            <span>مسح الأصل</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Asset Detail Modal */}
      <AssetDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        asset={selectedAsset}
        onNavigate={handleNavigateAsset}
        currentIndex={currentAssetIndex}
        totalCount={assets.length}
      />
    </Layout>
  );
}
