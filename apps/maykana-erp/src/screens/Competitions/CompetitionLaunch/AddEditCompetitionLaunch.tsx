import { useNavigate } from 'react-router-dom';
import { ArrowRight, Paperclip } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function AddEditCompetitionLaunch() {
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
                onClick={() => navigate('/competitions/competition-launch')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('competition_launch.title')}
            </h1>
          </div>

          <div className="flex gap-2">
            <button className={buttonClasses.outline}>
              <Paperclip className="w-4 h-4" />
              {t('competition_launch.add_attachments')}
            </button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('competition_launch.submit_request')}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Section 1: Competition Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('competition_launch.competition_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.competition_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.competition_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.competition_title')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.competition_title')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.competition_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competition_launch.competition_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.description')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.description')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.terms_conditions')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.terms_conditions')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.terms_conditions_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competition_launch.terms_conditions_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.status')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('competition_launch.status')}</option>
                  <option>{t('common.active')}</option>
                  <option>{t('common.inactive')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.decision_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competition_launch.decision_date')}
                  className="h-[42px]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Items Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('competition_launch.items_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.item_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.item_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.item_name')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.item_name')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.quantity')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.quantity')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.item_details')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.item_details')}
                  className="h-[42px]"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Launch Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('competition_launch.launch_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.launch_type')}
                </Label>
                <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                  <option>{t('competition_launch.launch_type')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.submission_method')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.submission_method')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.evaluation_standard')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.evaluation_standard')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.deadline_for_questions')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competition_launch.deadline_for_questions')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.last_date_for_offers')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competition_launch.last_date_for_offers')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.offer_opening_location')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.offer_opening_location')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.offer_opening_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competition_launch.offer_opening_date')}
                  className="h-[42px]"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Stability Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('competition_launch.stability_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.attachment_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('competition_launch.attachment_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.attachment_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('competition_launch.attachment_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('competition_launch.attachment')}
                </Label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={t('competition_launch.attachment')}
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
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
