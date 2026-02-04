import { useNavigate } from 'react-router-dom';
import { ArrowRight, Paperclip } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function AddEditOpenOffers() {
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
                onClick={() => navigate('/competitions/open-offers')}
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
            <button className={buttonClasses.outline}>
              <Paperclip className="w-4 h-4" />
              {t('open_offers.add_attachments')}
            </button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('open_offers.submit_request')}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Section 1: Submitted Open Offers Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('open_offers.submitted_open_offers_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.competition_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('open_offers.competition_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.competition_title')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('open_offers.competition_title')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.request_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('open_offers.request_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.supplier_name')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('open_offers.supplier_name')}
                  className="h-[42px]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Offer Provider Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('open_offers.offer_provider_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.supplier_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('open_offers.supplier_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.supplier_name')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('open_offers.supplier_name')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('open_offers.date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.total_offer')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('open_offers.total_offer')}
                  className="h-[42px]"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Open Offers Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('open_offers.open_offers_data')}
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 text-right">
                      {t('open_offers.item_name')}
                    </th>
                    <th className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 text-right">
                      {t('open_offers.serial_number')}
                    </th>
                    <th className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 text-right">
                      {t('open_offers.warranties_guarantees')}
                    </th>
                    <th className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 text-right">
                      {t('open_offers.foreign_exchange_terms')}
                    </th>
                    <th className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 text-right">
                      {t('open_offers.delivery_terms')}
                    </th>
                    <th className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 text-right">
                      {t('open_offers.local_manufacturer')}
                    </th>
                    <th className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 text-right">
                      {t('open_offers.foreign_manufacturer')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-1">
                      <Input type="text" className="h-[36px] w-full" />
                    </td>
                    <td className="border border-gray-200 p-1">
                      <Input type="text" className="h-[36px] w-full" />
                    </td>
                    <td className="border border-gray-200 p-1">
                      <Input type="text" className="h-[36px] w-full" />
                    </td>
                    <td className="border border-gray-200 p-1">
                      <Input type="text" className="h-[36px] w-full" />
                    </td>
                    <td className="border border-gray-200 p-1">
                      <Input type="text" className="h-[36px] w-full" />
                    </td>
                    <td className="border border-gray-200 p-1">
                      <Input type="text" className="h-[36px] w-full" />
                    </td>
                    <td className="border border-gray-200 p-1">
                      <Input type="text" className="h-[36px] w-full" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Files Data */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-[#11383f] rounded-full"></div>
              <h2 className="text-lg font-medium text-gray-900">
                {t('open_offers.files_data')}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.attachment_number')}
                </Label>
                <Input
                  type="text"
                  placeholder={t('open_offers.attachment_number')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.attachment_date')}
                </Label>
                <Input
                  type="date"
                  placeholder={t('open_offers.attachment_date')}
                  className="h-[42px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  {t('open_offers.attachment')}
                </Label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={t('open_offers.attachment')}
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
