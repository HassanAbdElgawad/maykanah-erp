import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AssetInfoCard,
  AssetTabs,
  MetadataTab,
  DepreciationTab,
  MovementsTab,
  MaintenanceTab,
  ImprovementsTab,
  DisposalTab,
  AttachmentsTab,
  AssetModals,
  formatCurrency,
} from './components';

// Mock data - replace with actual data fetching
const mockAssetData = {
  id: '1',
  code: 'AS-IT-2023-0054',
  name: 'Laptop Dell Latitude 5420',
  category: 'الأجهزة الإلكترونية',
  group: 'حواسيب محمولة',
  department: 'IT Department',
  costCenter: 'CC-IT-001',
  supplier: 'SaudiTech Distribution',
  purchaseDate: '2023-04-10',
  usageDate: '2023-04-15',
  warranty: 'فعال حتى 10-04-2025',
  depreciationType: 'جاري',
  originalValue: 9800,
  currentValue: 6790,
  depreciationRate: 31,
  custodyHolder: 'IT Support - يوسف الحمراني',
  isActive: true,
  image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop',
};

export function AssetDetail() {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  const [activeTab, setActiveTab] = useState('metadata');
  const [isActive, setIsActive] = useState(mockAssetData.isActive);
  const [isResetDepreciationModalOpen, setIsResetDepreciationModalOpen] = useState(false);
  const [isChangeMethodModalOpen, setIsChangeMethodModalOpen] = useState(false);
  const [isChangePaymentsModalOpen, setIsChangePaymentsModalOpen] = useState(false);
  const [depreciationMethod, setDepreciationMethod] = useState('مستقيمة');
  const [paymentMonths, setPaymentMonths] = useState(48);
  const [isCreateMaintenanceModalOpen, setIsCreateMaintenanceModalOpen] = useState(false);
  const [isAddMaintenanceRecordModalOpen, setIsAddMaintenanceRecordModalOpen] = useState(false);
  const [isEditAssetValueModalOpen, setIsEditAssetValueModalOpen] = useState(false);
  const [isDisposalModalOpen, setIsDisposalModalOpen] = useState(false);

  // Mock data - replace with actual data fetching based on id
  const assetData = mockAssetData;

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
                onClick={() => navigate(-1)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">تفاصيل أصل - {assetData.name}</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#11383f] hover:bg-[#0f2f35] text-white">
                عمليات
                <ChevronDown className="w-4 h-4 mr-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>نقل الأصل</DropdownMenuItem>
              <DropdownMenuItem>طلب صيانة</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsEditAssetValueModalOpen(true)}>
                تعديل قيمة الأصل
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsDisposalModalOpen(true)}>
                استبعاد / بيع
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">مسح الأصل</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Asset Info Card */}
        <AssetInfoCard
          assetData={assetData}
          isActive={isActive}
          onActiveChange={setIsActive}
          formatCurrency={formatCurrency}
        />

        {/* Tabs Navigation */}
        <AssetTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        {activeTab === 'metadata' && <MetadataTab assetData={assetData} />}

        {activeTab === 'depreciation' && (
          <DepreciationTab
            formatCurrency={formatCurrency}
            onOpenResetModal={() => setIsResetDepreciationModalOpen(true)}
            onOpenChangePaymentsModal={() => setIsChangePaymentsModalOpen(true)}
          />
        )}

        {activeTab === 'movements' && <MovementsTab />}

        {activeTab === 'maintenance' && (
          <MaintenanceTab
            formatCurrency={formatCurrency}
            onOpenCreateMaintenanceModal={() => setIsCreateMaintenanceModalOpen(true)}
            onOpenAddMaintenanceRecordModal={() => setIsAddMaintenanceRecordModalOpen(true)}
          />
        )}

        {activeTab === 'improvements' && (
          <ImprovementsTab
            formatCurrency={formatCurrency}
            onOpenEditAssetValueModal={() => setIsEditAssetValueModalOpen(true)}
          />
        )}

        {activeTab === 'disposal' && <DisposalTab formatCurrency={formatCurrency} />}

        {activeTab === 'attachments' && <AttachmentsTab />}

        {/* All Modals */}
        <AssetModals
          isResetDepreciationModalOpen={isResetDepreciationModalOpen}
          onCloseResetDepreciation={() => setIsResetDepreciationModalOpen(false)}
          isChangeMethodModalOpen={isChangeMethodModalOpen}
          onCloseChangeMethod={() => setIsChangeMethodModalOpen(false)}
          depreciationMethod={depreciationMethod}
          setDepreciationMethod={setDepreciationMethod}
          isChangePaymentsModalOpen={isChangePaymentsModalOpen}
          onCloseChangePayments={() => setIsChangePaymentsModalOpen(false)}
          paymentMonths={paymentMonths}
          setPaymentMonths={setPaymentMonths}
          isCreateMaintenanceModalOpen={isCreateMaintenanceModalOpen}
          onCloseCreateMaintenance={() => setIsCreateMaintenanceModalOpen(false)}
          isAddMaintenanceRecordModalOpen={isAddMaintenanceRecordModalOpen}
          onCloseAddMaintenanceRecord={() => setIsAddMaintenanceRecordModalOpen(false)}
          isEditAssetValueModalOpen={isEditAssetValueModalOpen}
          onCloseEditAssetValue={() => setIsEditAssetValueModalOpen(false)}
          isDisposalModalOpen={isDisposalModalOpen}
          onCloseDisposal={() => setIsDisposalModalOpen(false)}
          formatCurrency={formatCurrency}
        />
      </div>
    </Layout>
  );
}
