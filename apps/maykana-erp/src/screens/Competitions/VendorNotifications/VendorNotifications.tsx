import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Pencil, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { AdvancedTable } from '../../../components/ui/Table';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

interface VendorNotification {
  id: string;
  supplierName: string;
  notificationTitle: string;
  notificationNumber: string;
  notificationDate: string;
  notificationDetails: string;
  notificationType: string;
}

export function VendorNotifications() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const handleCreateNew = () => {
    navigate('/competitions/vendor-notifications/add');
  };

  const handleEdit = (id: string) => {
    navigate(`/competitions/vendor-notifications/edit/${id}`);
  };

  const mockData: VendorNotification[] = [
    {
      id: '1',
      supplierName: 'أحمد عبد السلام',
      notificationTitle: 'عنوان الإشعار',
      notificationNumber: '2522169654126',
      notificationDate: '2023-12-9',
      notificationDetails: 'رقم الإشعار',
      notificationType: 'حرية حكومية',
    },
    {
      id: '2',
      supplierName: 'عمر السعيد',
      notificationTitle: 'عنوان الإشعار',
      notificationNumber: '2511685255556',
      notificationDate: '2023-2-20',
      notificationDetails: 'رقم الإشعار',
      notificationType: 'حرية حكومية',
    },
    {
      id: '3',
      supplierName: 'يوسف الحجار',
      notificationTitle: 'عنوان الإشعار',
      notificationNumber: '251165552256',
      notificationDate: '2023-2-15',
      notificationDetails: 'رقم الإشعار',
      notificationType: 'حرية حكومية',
    },
    {
      id: '4',
      supplierName: 'خالد فؤاد',
      notificationTitle: 'عنوان الإشعار',
      notificationNumber: '2511636985216',
      notificationDate: '2020-2-10',
      notificationDetails: 'رقم الإشعار',
      notificationType: 'حرية حكومية',
    },
  ];

  const actionButtons = [
    {
      icon: Pencil,
      label: t('common.edit'),
      onClick: (row: VendorNotification) => handleEdit(row.id),
      color: 'blue' as const,
    },
  ];

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
                onClick={() => navigate('/competitions')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('vendor_notifications.title')}
            </h1>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
            >
              <Download className="w-4 h-4" />
              {t('common.download')}
            </Button>
            <button
              onClick={handleCreateNew}
              className={buttonClasses.primary}
            >
              {t('vendor_notifications.add_new')}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl border border-[#e2e2e2] animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('vendor_notifications.supplier_name')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('vendor_notifications.supplier_name')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('vendor_notifications.notification_type')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('vendor_notifications.notification_type')}</option>
                </select>
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
                key: 'supplierName',
                label: t('vendor_notifications.supplier_name'),
              },
              {
                key: 'notificationTitle',
                label: t('vendor_notifications.notification_title'),
              },
              {
                key: 'notificationNumber',
                label: t('vendor_notifications.notification_number'),
              },
              {
                key: 'notificationDate',
                label: t('vendor_notifications.notification_date'),
              },
              {
                key: 'notificationDetails',
                label: t('vendor_notifications.notification_details'),
              },
              {
                key: 'notificationType',
                label: t('vendor_notifications.notification_type'),
              },
            ]}
            actions={actionButtons}
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-8 py-4">
          <Button variant="outline" className="px-6 py-2 border-[#e7e7e7]">
            {t('vendor_notifications.previous')}
          </Button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-[42px] h-[42px] flex items-center justify-center rounded-lg border ${
                currentPage === 1
                  ? 'bg-[#11383f] text-white border-[#f7f7f7]'
                  : 'bg-white text-black border-[#e7e7e7]'
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`w-[42px] h-[42px] flex items-center justify-center rounded-lg border ${
                currentPage === 2
                  ? 'bg-[#11383f] text-white border-[#f7f7f7]'
                  : 'bg-white text-black border-[#e7e7e7]'
              }`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`w-[42px] h-[42px] flex items-center justify-center rounded-lg border ${
                currentPage === 3
                  ? 'bg-[#11383f] text-white border-[#f7f7f7]'
                  : 'bg-white text-black border-[#e7e7e7]'
              }`}
            >
              3
            </button>
          </div>

          <Button variant="outline" className="px-6 py-2 border-[#e7e7e7]">
            {t('vendor_notifications.next')}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
