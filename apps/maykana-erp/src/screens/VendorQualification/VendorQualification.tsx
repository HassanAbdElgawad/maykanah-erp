import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown, ChevronUp, Pencil } from 'lucide-react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { AdvancedTable } from '../../components/ui/Table';

interface Vendor {
  id: string;
  name: string;
  registrationNumber: string;
  vendorType: string;
  nationality: string;
  commercialRegister: string;
  accountNumber: string;
}

export const VendorQualification = () => {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const vendors: Vendor[] = [
    {
      id: '1',
      name: 'أحمد عبد السلام',
      registrationNumber: '2522169654126',
      vendorType: 'جهه حكومية',
      nationality: 'جنسية معين',
      commercialRegister: '9 - 12 - 2023',
      accountNumber: '252111373734',
    },
    {
      id: '2',
      name: 'عمر السعيد',
      registrationNumber: '2511685255556',
      vendorType: 'جهه حكومية',
      nationality: 'جنسية معين',
      commercialRegister: '20 - 2 - 2023',
      accountNumber: '25211737311',
    },
    {
      id: '3',
      name: 'يوسف النجار',
      registrationNumber: '251165552256',
      vendorType: 'جهه حكومية',
      nationality: 'جنسية معين',
      commercialRegister: '15 - 2 - 2023',
      accountNumber: '252113634611',
    },
    {
      id: '4',
      name: 'خالد فؤاد',
      registrationNumber: '2511636985216',
      vendorType: 'جهه حكومية',
      nationality: 'جنسية معين',
      commercialRegister: '10 - 2 - 2020',
      accountNumber: '25211163463',
    },
  ];

  const handleCreateNew = () => {
    navigate('/competitions/vendor-qualification/add');
  };

  const handleEdit = (vendorId: string) => {
    navigate(`/competitions/vendor-qualification/edit/${vendorId}`);
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
            <div className="relative">
              <Input
                type="text"
                placeholder={t('search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-[300px] bg-slate-50 border-[#cfcfcf] ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                dir={dir}
              />
              <Search
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 ${dir === 'rtl' ? 'right-3' : 'left-3'}`}
              />
            </div>
          </div>

          <div className='flex gap-2'>
            {' '}
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {t('filter')}
              {showFilters ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
            <Button
              onClick={handleCreateNew}
              className="bg-[#093738] hover:bg-[#0d4849] text-white px-4 py-2 rounded-lg shadow-[0px_4px_4px_#0000001a]"
            >
              {t('vendor_qualification.new_vendor')}
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl border border-[#e2e2e2] animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-[#00000099]" dir={dir}>
                  {t('vendor_qualification.vendor_type')}
                </Label>
                <select className="w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white">
                  <option value="">{t('select')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-[#00000099]" dir={dir}>
                  {t('vendor_qualification.nationality')}
                </Label>
                <select className="w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white">
                  <option value="">{t('select')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-[#00000099]" dir={dir}>
                  {t('vendor_qualification.status')}
                </Label>
                <select className="w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white">
                  <option value="">{t('select')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-[#00000099]" dir={dir}>
                  {t('vendor_qualification.registration_date')}
                </Label>
                <Input type="date" className="w-full h-[45px] border-[#cfcfcf]" />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={() => setShowFilters(false)} className="px-6 py-2">
                {t('cancel')}
              </Button>
              <Button className="bg-[#093738] hover:bg-[#0d4849] text-white px-6 py-2">
                {t('apply')}
              </Button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <AdvancedTable
            data={vendors}
            columns={[
              {
                key: 'name',
                label: t('name'),
              },
              {
                key: 'registrationNumber',
                label: t('vendor_qualification.registration_number'),
              },
              {
                key: 'vendorType',
                label: t('vendor_qualification.vendor_type'),
              },
              {
                key: 'nationality',
                label: t('vendor_qualification.nationality'),
              },
              {
                key: 'commercialRegister',
                label: t('vendor_qualification.commercial_register'),
              },
              {
                key: 'accountNumber',
                label: t('vendor_qualification.account_number'),
              },
            ]}
            actions={[
              {
                icon: Pencil,
                label: t('edit'),
                onClick: (vendor) => handleEdit(vendor.id),
                color: 'blue',
              },
            ]}
          />

          {/* Pagination */}
          <div className="flex items-center justify-between px-8 py-4 border-t border-[#e2e2e2]">
            <Button variant="outline" className="px-6 py-2 border-[#e7e7e7]">
              {t('previous')}
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

            <Button className="bg-[#11383f] hover:bg-[#0d4849] text-white px-6 py-2">
              {t('next')}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
