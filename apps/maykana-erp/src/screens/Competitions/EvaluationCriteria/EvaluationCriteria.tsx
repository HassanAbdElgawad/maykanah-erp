import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Pencil, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { AdvancedTable } from '../../../components/ui/Table';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

interface EvaluationCriteria {
  id: string;
  committeeName: string;
  number: string;
  percentage: string;
  commercialRegister: string;
  accountNumber: string;
}

export function EvaluationCriteria() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const handleCreateNew = () => {
    navigate('/competitions/evaluation-criteria/add');
  };

  const handleEdit = (id: string) => {
    navigate(`/competitions/evaluation-criteria/edit/${id}`);
  };

  const mockData: EvaluationCriteria[] = [
    {
      id: '1',
      committeeName: 'أحمد عبد السلام',
      number: '2522169654126',
      percentage: 'حرية حكومية',
      commercialRegister: '2023-12-9',
      accountNumber: '25211137373734',
    },
    {
      id: '2',
      committeeName: 'عمر السعيد',
      number: '2511685255556',
      percentage: 'حرية حكومية',
      commercialRegister: '2023-2-20',
      accountNumber: '25211737311',
    },
    {
      id: '3',
      committeeName: 'يوسف الحجار',
      number: '251165552256',
      percentage: 'حرية حكومية',
      commercialRegister: '2023-2-15',
      accountNumber: '25211363463411',
    },
    {
      id: '4',
      committeeName: 'خالد فؤاد',
      number: '2511636985216',
      percentage: 'حرية حكومية',
      commercialRegister: '2020-2-10',
      accountNumber: '25211163463',
    },
  ];

  const actionButtons = [
    {
      icon: Pencil,
      label: t('common.edit'),
      onClick: (row: EvaluationCriteria) => handleEdit(row.id),
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
              {t('evaluation_criteria.title')}
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
              {t('evaluation_criteria.add_new')}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl border border-[#e2e2e2] animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.committee_name')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('evaluation_criteria.committee_name')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.percentage')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('evaluation_criteria.percentage')}</option>
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
                key: 'committeeName',
                label: t('evaluation_criteria.committee_name'),
              },
              {
                key: 'number',
                label: t('evaluation_criteria.number'),
              },
              {
                key: 'percentage',
                label: t('evaluation_criteria.percentage'),
              },
              {
                key: 'commercialRegister',
                label: t('evaluation_criteria.commercial_register'),
              },
              {
                key: 'accountNumber',
                label: t('evaluation_criteria.account_number'),
              },
            ]}
            actions={actionButtons}
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-8 py-4">
          <Button variant="outline" className="px-6 py-2 border-[#e7e7e7]">
            {t('evaluation_criteria.previous')}
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
            {t('evaluation_criteria.next')}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
