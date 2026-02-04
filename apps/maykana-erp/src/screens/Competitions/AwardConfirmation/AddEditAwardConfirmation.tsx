import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Paperclip } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function AddEditAwardConfirmation() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();
  const isEdit = !!id;

  // Form states
  const [formData, setFormData] = useState({
    confirmationNumber: '',
    supplier: '',
    confirmationDate: '',
    executionStartDate: '',
    description: '',
    termsConditions: '',
  });

  // Mock items data
  const [items] = useState([
    {
      itemNumber: '5521',
      itemName: 'اسم البند',
      quantity: '12',
      unit: 'صندوق',
      total: '59520363',
      discountPercentage: '2633',
      taxPercentage: '2633',
      taxValue: '2633',
      totalAmount: '2633',
      net: '2633',
    },
  ]);

  // Mock files data
  const [files] = useState([
    {
      notificationNumber: 'رقم الإشعار',
      attachmentName: 'اسم المرفق',
      attachmentDate: 'تاريخ المرفق',
      attachment: 'مرفق',
    },
  ]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/competitions/award-confirmation')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              {isEdit
                ? t('competitions.award_confirmation.title')
                : t('competitions.award_confirmation.add_new')}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className={buttonClasses.outline}
              onClick={() => {}}
            >
              <Paperclip className="w-4 h-4" />
              {t('common.add_attachments')}
            </Button>
            <Button className={buttonClasses.primary} onClick={handleSubmit}>
              {t('competitions.award_confirmation.submit_request')}
            </Button>
          </div>
        </div>

        {/* Confirmation Data Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-[#1a5f5f] rounded-full"></div>
            <h2 className="text-lg font-bold text-gray-900">
              {t('competitions.award_confirmation.confirmation_data')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="confirmationNumber">
                {t('competitions.award_confirmation.confirmation_number')}
              </Label>
              <Input
                id="confirmationNumber"
                value={formData.confirmationNumber}
                onChange={(e) => handleInputChange('confirmationNumber', e.target.value)}
                className="h-[43px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supplier">
                {t('competitions.award_confirmation.supplier')}
              </Label>
              <Input
                id="supplier"
                value={formData.supplier}
                onChange={(e) => handleInputChange('supplier', e.target.value)}
                className="h-[43px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmationDate">
                {t('competitions.award_confirmation.confirmation_date')}
              </Label>
              <Input
                id="confirmationDate"
                type="date"
                value={formData.confirmationDate}
                onChange={(e) => handleInputChange('confirmationDate', e.target.value)}
                className="h-[43px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="executionStartDate">
                {t('competitions.award_confirmation.execution_start_date')}
              </Label>
              <Input
                id="executionStartDate"
                type="date"
                value={formData.executionStartDate}
                onChange={(e) => handleInputChange('executionStartDate', e.target.value)}
                className="h-[43px]"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">
                {t('competitions.award_confirmation.description')}
              </Label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="h-[43px]"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="termsConditions">
                {t('competitions.award_confirmation.terms_conditions')}
              </Label>
              <textarea
                id="termsConditions"
                value={formData.termsConditions}
                onChange={(e) => handleInputChange('termsConditions', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5f5f] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Items Data Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-[#1a5f5f] rounded-full"></div>
            <h2 className="text-lg font-bold text-gray-900">
              {t('competitions.award_confirmation.items_data')}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e2e2e2]">
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.item_name')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.item_number')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.quantity')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.unit')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.total')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.discount_percentage')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.tax_percentage')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.tax_value')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.total_amount')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.net')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b border-[#e2e2e2] last:border-0">
                    <td className="px-4 py-3 text-sm text-gray-700">{item.itemName}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.itemNumber}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.quantity}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.unit}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.total}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.discountPercentage}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.taxPercentage}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.taxValue}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.totalAmount}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Files Data Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-[#1a5f5f] rounded-full"></div>
            <h2 className="text-lg font-bold text-gray-900">
              {t('competitions.award_confirmation.files_data')}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e2e2e2]">
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.attachment_name')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.notification_number')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.attachment_date')}
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">
                    {t('competitions.award_confirmation.attachment')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index} className="border-b border-[#e2e2e2] last:border-0">
                    <td className="px-4 py-3 text-sm text-gray-700">{file.attachmentName}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{file.notificationNumber}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{file.attachmentDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <button className="text-[#1a5f5f] hover:underline">
                        {file.attachment}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
