import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, ChevronUp, Pencil, Download, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { AdvancedTable } from '@/components/ui/Table';
import { buttonClasses } from '@/styles';

interface VendorUser {
  id: string;
  establishment: string;
  branch: string;
  vendorName: string;
  userName: string;
  vendorNumber: string;
  status: 'active' | 'inactive';
}

const mockData: VendorUser[] = [
  {
    id: '1',
    establishment: 'اسم المنشأة',
    branch: 'اسم الفرع هنا',
    vendorName: 'اسم المورد هنا',
    userName: 'اسم المستخدم هنا',
    vendorNumber: '9 - 12 - 2023',
    status: 'active',
  },
  {
    id: '2',
    establishment: 'اسم المنشأة',
    branch: 'اسم الفرع هنا',
    vendorName: 'اسم المورد هنا',
    userName: 'اسم المستخدم هنا',
    vendorNumber: '20 - 2 - 2023',
    status: 'active',
  },
  {
    id: '3',
    establishment: 'اسم المنشأة',
    branch: 'اسم الفرع هنا',
    vendorName: 'اسم المورد هنا',
    userName: 'اسم المستخدم هنا',
    vendorNumber: '15 - 2 - 2023',
    status: 'active',
  },
  {
    id: '4',
    establishment: 'اسم المنشأة',
    branch: 'اسم الفرع هنا',
    vendorName: 'اسم المورد هنا',
    userName: 'اسم المستخدم هنا',
    vendorNumber: '10 - 2 - 2020',
    status: 'active',
  },
];

export const VendorUsers = () => {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);

  const handleCreateNew = () => {
    navigate('/competitions/vendor-users/add');
  };

  const handleEdit = (id: string) => {
    navigate(`/competitions/vendor-users/edit/${id}`);
  };

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
              {t('vendor_users.title')}
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
              onClick={handleCreateNew}
              className={buttonClasses.primary}
            >
              {t('vendor_users.add_new')}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl border border-[#e2e2e2] animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-[#00000099]" dir={dir}>
                  {t('vendor_users.establishment')}
                </Label>
                <select className="w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white">
                  <option value="">{t('common.all')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-[#00000099]" dir={dir}>
                  {t('vendor_users.branch')}
                </Label>
                <select className="w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white">
                  <option value="">{t('common.all')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-[#00000099]" dir={dir}>
                  {t('vendor_users.status')}
                </Label>
                <select className="w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white">
                  <option value="">{t('common.all')}</option>
                  <option value="active">{t('vendor_users.status_active')}</option>
                  <option value="inactive">{t('vendor_users.status_inactive')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-[#00000099]" dir={dir}>
                  {t('vendor_users.vendor_number')}
                </Label>
                <input 
                  type="date" 
                  className="w-full h-[45px] border border-[#cfcfcf] rounded-md px-3 bg-white" 
                  style={{ direction: 'rtl', textAlign: 'right' }}
                  dir="rtl"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={() => setShowFilters(false)} className="px-6 py-2">
                {t('common.cancel')}
              </Button>
              <button className={buttonClasses.primary}>
                {t('common.search')}
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <AdvancedTable
            data={mockData}
            columns={[
              {
                key: 'establishment',
                label: t('vendor_users.establishment'),
              },
              {
                key: 'branch',
                label: t('vendor_users.branch'),
              },
              {
                key: 'vendorName',
                label: t('vendor_users.vendor_name'),
              },
              {
                key: 'userName',
                label: t('vendor_users.user_name'),
              },
              {
                key: 'vendorNumber',
                label: t('vendor_users.vendor_number'),
              },
              {
                key: 'status',
                label: t('vendor_users.status'),
                render: (row: VendorUser) => (
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      row.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {t(`vendor_users.status_${row.status}`)}
                  </span>
                ),
              },
            ]}
            actions={[
              {
                icon: Pencil,
                label: t('common.edit'),
                onClick: (user) => handleEdit(user.id),
                color: 'blue',
              },
            ]}
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-8 py-4">
          <Button variant="outline" className="px-6 py-2 border-[#e7e7e7]">
            {t('customers.previous')}
          </Button>

          <div className="flex items-center gap-3">
            <button className="w-[42px] h-[42px] flex items-center justify-center bg-[#11383f] text-white rounded-lg border border-[#f7f7f7]">
              1
            </button>
            <button className="w-[42px] h-[42px] flex items-center justify-center bg-white text-black rounded-lg border border-[#e7e7e7]">
              2
            </button>
            <button className="w-[42px] h-[42px] flex items-center justify-center bg-white text-black rounded-lg border border-[#e7e7e7]">
              3
            </button>
          </div>

          <button className={buttonClasses.primary}>
            {t('customers.next')}
          </button>
        </div>
      </div>
    </Layout>
  );
};
