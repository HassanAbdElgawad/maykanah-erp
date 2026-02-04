import { useNavigate } from 'react-router-dom';
import { ArrowRight, Paperclip } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function AddEditOffersInspection() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
                onClick={() => navigate('/competitions/offers-inspection')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('competitions.offers_inspection.title')}
            </h1>
          </div>

          <div className="flex gap-2">
            <button className={buttonClasses.outline}>
              <Paperclip className="w-4 h-4" />
              {t('common.add_attachments')}
            </button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('competitions.offers_inspection.submit_request')}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Section 1: Submitted Offers Inspection Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('competitions.offers_inspection.submitted_inspection_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.competition_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.competition_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.competition_title')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.competition_title')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.request_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competitions.offers_inspection.request_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.supplier_name')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.supplier_name')}
                  className="h-[42px]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Technical Evaluation Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('competitions.offers_inspection.technical_evaluation_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.competition_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.competition_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.competition_title')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.competition_title')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.competition_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competitions.offers_inspection.competition_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.criteria_type')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.criteria_type')}
                  className="h-[42px]"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Financial Evaluation Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('competitions.offers_inspection.financial_evaluation_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.competition_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.competition_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.competition_title')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.competition_title')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.competition_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competitions.offers_inspection.competition_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.percentage')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competitions.offers_inspection.percentage')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5 col-span-4">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competitions.offers_inspection.recommendations')}
                </Label>
                <textarea
                  rows={4}
                  placeholder={t('competitions.offers_inspection.recommendations')}
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
