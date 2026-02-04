import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Pencil, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { AdvancedTable } from '../../../components/ui/Table';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

interface OpenOffer {
  id: string;
  competitionTitle: string;
  supplierNumber: string;
  supplierType: string;
  project: string;
  supplierNumber2: string;
  competitionNumber: string;
}

export function OpenOffers() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const handleCreateNew = () => {
    navigate('/competitions/open-offers/add');
  };

  const handleEdit = (id: string) => {
    navigate(`/competitions/open-offers/edit/${id}`);
  };

  const mockData: OpenOffer[] = [
    {
      id: '1',
      competitionTitle: 'أحمد عبد السلام',
      supplierNumber: '2522169654126',
      supplierType: 'جهة حكومية',
      project: 'مشروع معين',
      supplierNumber2: '2023-12-9',
      competitionNumber: '25211137373734',
    },
    {
      id: '2',
      competitionTitle: 'عمر السعيد',
      supplierNumber: '2511685255556',
      supplierType: 'جهة حكومية',
      project: 'مشروع معين',
      supplierNumber2: '2023-2-20',
      competitionNumber: '25211737311',
    },
    {
      id: '3',
      competitionTitle: 'يوسف الحجار',
      supplierNumber: '251165552256',
      supplierType: 'جهة حكومية',
      project: 'مشروع معين',
      supplierNumber2: '2023-2-15',
      competitionNumber: '25211363463411',
    },
    {
      id: '4',
      competitionTitle: 'خالد فؤاد',
      supplierNumber: '2511636985216',
      supplierType: 'جهة حكومية',
      project: 'مشروع معين',
      supplierNumber2: '2020-2-10',
      competitionNumber: '25211163463',
    },
  ];

  const actionButtons = [
    {
      icon: Pencil,
      label: t('common.edit'),
      onClick: (row: OpenOffer) => handleEdit(row.id),
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
              {t('open_offers.title')}
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
              {t('open_offers.add_new')}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl border border-[#e2e2e2] animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.supplier_type')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('open_offers.supplier_type')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.project')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('open_offers.project')}</option>
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
                key: 'competitionTitle',
                label: t('open_offers.competition_title'),
              },
              {
                key: 'supplierNumber',
                label: t('open_offers.supplier_number'),
              },
              {
                key: 'supplierType',
                label: t('open_offers.supplier_type'),
              },
              {
                key: 'project',
                label: t('open_offers.project'),
              },
              {
                key: 'supplierNumber2',
                label: t('open_offers.supplier_number'),
              },
              {
                key: 'competitionNumber',
                label: t('open_offers.competition_number'),
              },
            ]}
            actions={actionButtons}
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-8 py-4">
          <Button variant="outline" className="px-6 py-2 border-[#e7e7e7]">
            {t('open_offers.previous')}
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
            {t('open_offers.next')}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
