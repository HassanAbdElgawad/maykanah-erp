import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { CardContainer } from '@/components/ui/CardContainer';
import { CollapsibleSection } from '@/components/ui/CollapsibleSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/styles';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const AddEditProduct = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, language } = useLanguage();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    // Basic Information
    productCode: '',
    productName: '',
    productNameEn: '',
    itemGroup: '',
    itemSubGroup: '',
    itemType: 'active',
    isSale: 'yes',
    department: '',
    accountType: '',
    quantitySold: '',
    metricGroup: '',
    
    // Balance by Mass
    balanceByMass: '',
    balanceCost: '',
    reorderPoint: '',
    assemblyTime: '',
    foreignCurrencies: '',
    pricingMethod: '',
    priceApproval: '',
    
    // Advanced Options
    advProductCode: '',
    employeeCategory: '',
    reorderCategory: '',
    field1: '',
    field2: '',
    field3: '',
    
    // Manufacturing Components
    internalExceptionCode: '',
    resourceCapacity: '',
    totalCost: '',
    returnRate: '',
    profitRate: '',
    pricePerUnit: '',
    
    // Attachments
    attachmentCode: '',
    attachmentValue: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/warehouses/products-list');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Header */}
        <CardContainer>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/warehouses/products-list')}
                className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg hover:bg-gray-200 transition-colors"
              >
                {language === 'ar' ? (
                  <ArrowRight className="w-6 h-6 text-gray-700" />
                ) : (
                  <ArrowLeft className="w-6 h-6 text-gray-700" />
                )}
              </button>
              <h1 className="text-xl font-medium text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {isEditMode ? t('warehouses.edit_product') : t('warehouses.add_product')}
              </h1>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => navigate('/warehouses/products-list')}
                className={buttonClasses.secondary}
              >
                {t('common.cancel')}
              </button>
              <button type="submit" className={buttonClasses.primary}>
                {t('common.save')}
              </button>
            </div>
          </div>
        </CardContainer>

        {/* Basic Product Information */}
        <CollapsibleSection title={t('warehouses.basic_product_info')} defaultOpen={true}>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.product_code')}
              </label>
              <Input
                type="text"
                value={formData.productCode}
                onChange={(e) => handleInputChange('productCode', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder={t('warehouses.product_code_placeholder')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.product_name')}
              </label>
              <Input
                type="text"
                value={formData.productName}
                onChange={(e) => handleInputChange('productName', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder={t('warehouses.product_name_placeholder')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.product_name_en')}
              </label>
              <Input
                type="text"
                value={formData.productNameEn}
                onChange={(e) => handleInputChange('productNameEn', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder={t('warehouses.product_name_en_placeholder')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.item_group')}
              </label>
              <Select
                value={formData.itemGroup}
                onValueChange={(value) => handleInputChange('itemGroup', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_item_group')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">{t('warehouses.electronics')}</SelectItem>
                  <SelectItem value="furniture">{t('warehouses.furniture')}</SelectItem>
                  <SelectItem value="consumables">{t('warehouses.consumables')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.item_sub_group')}
              </label>
              <Select
                value={formData.itemSubGroup}
                onValueChange={(value) => handleInputChange('itemSubGroup', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_sub_group')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sub1">{t('warehouses.sub_group_1')}</SelectItem>
                  <SelectItem value="sub2">{t('warehouses.sub_group_2')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 col-span-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.item_type')}
              </label>
              <div className="flex gap-4 h-[45px] items-center">
                {['active', 'medium', 'inactive', 'hidden'].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="itemType"
                      value={type}
                      checked={formData.itemType === type}
                      onChange={(e) => handleInputChange('itemType', e.target.value)}
                      className="w-4 h-4 text-teal-600"
                    />
                    <span className="text-sm text-gray-700">
                      {t(`warehouses.type_${type}`)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.is_sale')}
              </label>
              <Select
                value={formData.isSale}
                onValueChange={(value) => handleInputChange('isSale', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">{t('common.yes')}</SelectItem>
                  <SelectItem value="no">{t('common.no')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.department')}
              </label>
              <Select
                value={formData.department}
                onValueChange={(value) => handleInputChange('department', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_department')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ready">{t('warehouses.ready')}</SelectItem>
                  <SelectItem value="processing">{t('warehouses.processing')}</SelectItem>
                  <SelectItem value="not_ready">{t('warehouses.not_ready')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.account_type')}
              </label>
              <Select
                value={formData.accountType}
                onValueChange={(value) => handleInputChange('accountType', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_account_type')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type1">{t('warehouses.account_type_1')}</SelectItem>
                  <SelectItem value="type2">{t('warehouses.account_type_2')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.quantity_sold')}
              </label>
              <Input
                type="number"
                value={formData.quantitySold}
                onChange={(e) => handleInputChange('quantitySold', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.metric_group')}
              </label>
              <Select
                value={formData.metricGroup}
                onValueChange={(value) => handleInputChange('metricGroup', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_metric_group')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric1">{t('warehouses.metric_group_1')}</SelectItem>
                  <SelectItem value="metric2">{t('warehouses.metric_group_2')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CollapsibleSection>

        {/* Balance by Mass */}
        <CollapsibleSection title={t('warehouses.balance_by_mass')} defaultOpen={false}>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.balance_by_mass')}
              </label>
              <Input
                type="number"
                value={formData.balanceByMass}
                onChange={(e) => handleInputChange('balanceByMass', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.balance_cost')}
              </label>
              <Input
                type="number"
                value={formData.balanceCost}
                onChange={(e) => handleInputChange('balanceCost', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.reorder_point')}
              </label>
              <Input
                type="number"
                value={formData.reorderPoint}
                onChange={(e) => handleInputChange('reorderPoint', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.assembly_time')}
              </label>
              <Input
                type="text"
                value={formData.assemblyTime}
                onChange={(e) => handleInputChange('assemblyTime', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder={t('warehouses.assembly_time_placeholder')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.foreign_currencies')}
              </label>
              <Select
                value={formData.foreignCurrencies}
                onValueChange={(value) => handleInputChange('foreignCurrencies', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_currency')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SAR">SAR</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.pricing_method')}
              </label>
              <Select
                value={formData.pricingMethod}
                onValueChange={(value) => handleInputChange('pricingMethod', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_pricing_method')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="average">{t('warehouses.average')}</SelectItem>
                  <SelectItem value="fifo">{t('warehouses.fifo')}</SelectItem>
                  <SelectItem value="lifo">{t('warehouses.lifo')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.price_approval')}
              </label>
              <Select
                value={formData.priceApproval}
                onValueChange={(value) => handleInputChange('priceApproval', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_price_approval')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">{t('common.yes')}</SelectItem>
                  <SelectItem value="no">{t('common.no')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CollapsibleSection>

        {/* Advanced Options */}
        <CollapsibleSection title={t('warehouses.advanced_options')} defaultOpen={false}>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.product_code')}
              </label>
              <Input
                type="text"
                value={formData.advProductCode}
                onChange={(e) => handleInputChange('advProductCode', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.employee_category')}
              </label>
              <Select
                value={formData.employeeCategory}
                onValueChange={(value) => handleInputChange('employeeCategory', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_category')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cat1">{t('warehouses.category_1')}</SelectItem>
                  <SelectItem value="cat2">{t('warehouses.category_2')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.reorder_category')}
              </label>
              <Select
                value={formData.reorderCategory}
                onValueChange={(value) => handleInputChange('reorderCategory', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_category')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cat1">{t('warehouses.category_1')}</SelectItem>
                  <SelectItem value="cat2">{t('warehouses.category_2')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.field_1')}
              </label>
              <Input
                type="text"
                value={formData.field1}
                onChange={(e) => handleInputChange('field1', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.field_2')}
              </label>
              <Input
                type="text"
                value={formData.field2}
                onChange={(e) => handleInputChange('field2', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.field_3')}
              </label>
              <Input
                type="text"
                value={formData.field3}
                onChange={(e) => handleInputChange('field3', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>
          </div>
        </CollapsibleSection>

        {/* Manufacturing Components */}
        <CollapsibleSection
          title={t('warehouses.manufacturing_components')}
          defaultOpen={false}
        >
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.internal_exception_code')}
              </label>
              <Input
                type="text"
                value={formData.internalExceptionCode}
                onChange={(e) => handleInputChange('internalExceptionCode', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder="45220-SD"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.resource_capacity')}
              </label>
              <Input
                type="text"
                value={formData.resourceCapacity}
                onChange={(e) => handleInputChange('resourceCapacity', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.total_cost')}
              </label>
              <Input
                type="number"
                value={formData.totalCost}
                onChange={(e) => handleInputChange('totalCost', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.return_rate')}
              </label>
              <Input
                type="text"
                value={formData.returnRate}
                onChange={(e) => handleInputChange('returnRate', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder="5%"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.profit_rate')}
              </label>
              <Input
                type="text"
                value={formData.profitRate}
                onChange={(e) => handleInputChange('profitRate', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder="20%"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.price_per_unit')}
              </label>
              <Input
                type="text"
                value={formData.pricePerUnit}
                onChange={(e) => handleInputChange('pricePerUnit', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>
          </div>
        </CollapsibleSection>

        {/* Attachments */}
        <CollapsibleSection title={t('warehouses.attachments')} defaultOpen={false}>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.product_code')}
              </label>
              <Input
                type="text"
                value={formData.attachmentCode}
                onChange={(e) => handleInputChange('attachmentCode', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder="AS220-SD"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.value')}
              </label>
              <Input
                type="text"
                value={formData.attachmentValue}
                onChange={(e) => handleInputChange('attachmentValue', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>
          </div>
        </CollapsibleSection>
      </form>
    </Layout>
  );
};
