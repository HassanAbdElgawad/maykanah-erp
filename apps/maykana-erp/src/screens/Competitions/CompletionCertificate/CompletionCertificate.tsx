import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Pencil, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { AdvancedTable } from '../../../components/ui/Table';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function CompletionCertificate() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [filters, setFilters] = useState({
    supplier: '',
    certificateNumber: '',
    supplierType: '',
    project: '',
  });

  // Mock data
  const mockData = [
    {
      id: 1,
      supplier: 'أحمد عبد السلام',
      certificateNumber: '15123222121',
      supplierType: 'جهة حكومية',
      project: 'مشروع معين',
      confirmationDate: '2023-12-9',
      competitionNumber: '252111373734',
    },
    {
      id: 2,
      supplier: 'عمر السعيد',
      certificateNumber: '15123222121',
      supplierType: 'جهة حكومية',
      project: 'مشروع معين',
      confirmationDate: '2023-2-20',
      competitionNumber: '25211737311',
    },
    {
      id: 3,
      supplier: 'يوسف الحجار',
      certificateNumber: '15123222121',
      supplierType: 'جهة حكومية',
      project: 'مشروع معين',
      confirmationDate: '2023-2-15',
      competitionNumber: '252113634611',
    },
    {
      id: 4,
      supplier: 'خالد فؤاد',
      certificateNumber: '15123222121',
      supplierType: 'جهة حكومية',
      project: 'مشروع معين',
      confirmationDate: '2020-2-10',
      competitionNumber: '25211163463',
    },
  ];

  const actionButtons = [
    {
      icon: Pencil,
      label: t('common.edit'),
      onClick: (row: any) => handleEdit(row.id),
      color: 'blue' as const,
    },
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleEdit = (id: number) => {
    navigate(`/competitions/completion-certificate/edit/${id}`);
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
                onClick={() => navigate('/competitions')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('competitions.completion_certificate.title')}
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
              onClick={() => navigate('/competitions/completion-certificate/add')}
              className={buttonClasses.primary}
            >
              {t('competitions.completion_certificate.add_new')}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl border border-[#e2e2e2] animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.completion_certificate.supplier')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.completion_certificate.supplier')}
                  value={filters.supplier}
                  onChange={(e) => handleFilterChange('supplier', e.target.value)}
                  className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.completion_certificate.certificate_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.completion_certificate.certificate_number')}
                  value={filters.certificateNumber}
                  onChange={(e) => handleFilterChange('certificateNumber', e.target.value)}
                  className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.completion_certificate.supplier_type')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.completion_certificate.supplier_type')}
                  value={filters.supplierType}
                  onChange={(e) => handleFilterChange('supplierType', e.target.value)}
                  className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.completion_certificate.project')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.completion_certificate.project')}
                  value={filters.project}
                  onChange={(e) => handleFilterChange('project', e.target.value)}
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
                key: 'supplier',
                label: t('competitions.completion_certificate.supplier'),
              },
              {
                key: 'certificateNumber',
                label: t('competitions.completion_certificate.certificate_number'),
              },
              {
                key: 'supplierType',
                label: t('competitions.completion_certificate.supplier_type'),
              },
              {
                key: 'project',
                label: t('competitions.completion_certificate.project'),
              },
              {
                key: 'confirmationDate',
                label: t('competitions.completion_certificate.confirmation_date'),
              },
              {
                key: 'competitionNumber',
                label: t('competitions.completion_certificate.competition_number'),
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
