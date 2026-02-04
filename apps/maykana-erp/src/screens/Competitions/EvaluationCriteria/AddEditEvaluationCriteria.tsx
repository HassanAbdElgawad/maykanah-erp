import { useNavigate } from 'react-router-dom';
import { ArrowRight, Paperclip } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function AddEditEvaluationCriteria() {
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
                onClick={() => navigate('/competitions/evaluation-criteria')}
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
            <button className={buttonClasses.outline}>
              <Paperclip className="w-4 h-4" />
              {t('evaluation_criteria.add_attachments')}
            </button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('evaluation_criteria.submit_request')}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Section 1: Basic Criteria Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('evaluation_criteria.basic_criteria_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.criteria_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('evaluation_criteria.criteria_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.criteria_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('evaluation_criteria.criteria_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('evaluation_criteria.date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.status')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('evaluation_criteria.status')}</option>
                  <option>{t('common.active')}</option>
                  <option>{t('common.inactive')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Item Details Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('evaluation_criteria.item_details_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.item_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('evaluation_criteria.item_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.item_name')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('evaluation_criteria.item_name')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.percentage')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('evaluation_criteria.percentage')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.type')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('evaluation_criteria.type')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Files Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('evaluation_criteria.files_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.attachment_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('evaluation_criteria.attachment_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.attachment_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('evaluation_criteria.attachment_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.attachment')}
                </Label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={t('evaluation_criteria.attachment')}
                    className="h-[42px]"
                    readOnly
                  />
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  >
                    <Paperclip className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('evaluation_criteria.type')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('evaluation_criteria.type')}</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
