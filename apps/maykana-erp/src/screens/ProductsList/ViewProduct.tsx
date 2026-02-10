import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { CardContainer } from '../../components/ui/CardContainer';
import { CollapsibleSection } from '../../components/ui/CollapsibleSection';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Edit2 } from 'lucide-react';
import { buttonClasses } from '../../styles';

export const ViewProduct = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, language } = useLanguage();

  // Mock data - In production, fetch from API
  const product = {
    productCode: 'PRD-001',
    productName: 'منتج تجريبي',
    productNameEn: 'Test Product',
    itemGroup: 'إلكترونيات',
    itemSubGroup: 'مجموعة فرعية 1',
    itemType: 'نشط',
    isSale: 'نعم',
    department: 'جاهز',
    accountType: 'نوع 1',
    quantitySold: '1000',
    metricGroup: 'مجموعة 1',
    balanceByMass: '500',
    balanceCost: '7500',
    reorderPoint: '100',
    assemblyTime: '5 أيام',
    foreignCurrencies: 'SAR',
    pricingMethod: 'متوسط',
    priceApproval: 'نعم',
  };

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="space-y-1">
      <div className="text-sm font-medium text-gray-500">{label}</div>
      <div className="text-base text-gray-900">{value || '-'}</div>
    </div>
  );

  return (
    <Layout>
      <div className="space-y-4">
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
                {t('warehouses.view_product')}
              </h1>
            </div>
            <button
              onClick={() => navigate(`/warehouses/products-list/edit/${id}`)}
              className={buttonClasses.primary}
            >
              <Edit2 className="w-5 h-5" />
              {t('common.edit')}
            </button>
          </div>
        </CardContainer>

        {/* Basic Product Information */}
        <CollapsibleSection title={t('warehouses.basic_product_info')} defaultOpen={true}>
          <div className="grid grid-cols-4 gap-6">
            <InfoRow label={t('warehouses.product_code')} value={product.productCode} />
            <InfoRow label={t('warehouses.product_name')} value={product.productName} />
            <InfoRow label={t('warehouses.product_name_en')} value={product.productNameEn} />
            <InfoRow label={t('warehouses.item_group')} value={product.itemGroup} />
            <InfoRow label={t('warehouses.item_sub_group')} value={product.itemSubGroup} />
            <InfoRow label={t('warehouses.item_type')} value={product.itemType} />
            <InfoRow label={t('warehouses.is_sale')} value={product.isSale} />
            <InfoRow label={t('warehouses.department')} value={product.department} />
            <InfoRow label={t('warehouses.account_type')} value={product.accountType} />
            <InfoRow label={t('warehouses.quantity_sold')} value={product.quantitySold} />
            <InfoRow label={t('warehouses.metric_group')} value={product.metricGroup} />
          </div>
        </CollapsibleSection>

        {/* Balance by Mass */}
        <CollapsibleSection title={t('warehouses.balance_by_mass')} defaultOpen={true}>
          <div className="grid grid-cols-4 gap-6">
            <InfoRow label={t('warehouses.balance_by_mass')} value={product.balanceByMass} />
            <InfoRow label={t('warehouses.balance_cost')} value={product.balanceCost} />
            <InfoRow label={t('warehouses.reorder_point')} value={product.reorderPoint} />
            <InfoRow label={t('warehouses.assembly_time')} value={product.assemblyTime} />
            <InfoRow
              label={t('warehouses.foreign_currencies')}
              value={product.foreignCurrencies}
            />
            <InfoRow label={t('warehouses.pricing_method')} value={product.pricingMethod} />
            <InfoRow label={t('warehouses.price_approval')} value={product.priceApproval} />
          </div>
        </CollapsibleSection>

        {/* Advanced Options */}
        <CollapsibleSection title={t('warehouses.advanced_options')} defaultOpen={false}>
          <div className="grid grid-cols-4 gap-6">
            <InfoRow label={t('warehouses.product_code')} value="-" />
            <InfoRow label={t('warehouses.employee_category')} value="-" />
            <InfoRow label={t('warehouses.reorder_category')} value="-" />
            <InfoRow label={t('warehouses.field_1')} value="-" />
          </div>
        </CollapsibleSection>

        {/* Manufacturing Components */}
        <CollapsibleSection
          title={t('warehouses.manufacturing_components')}
          defaultOpen={false}
        >
          <div className="grid grid-cols-4 gap-6">
            <InfoRow label={t('warehouses.internal_exception_code')} value="45220-SD" />
            <InfoRow label={t('warehouses.resource_capacity')} value="-" />
            <InfoRow label={t('warehouses.total_cost')} value="-" />
            <InfoRow label={t('warehouses.return_rate')} value="5%" />
            <InfoRow label={t('warehouses.profit_rate')} value="20%" />
            <InfoRow label={t('warehouses.price_per_unit')} value="-" />
          </div>
        </CollapsibleSection>

        {/* Attachments */}
        <CollapsibleSection title={t('warehouses.attachments')} defaultOpen={false}>
          <div className="grid grid-cols-4 gap-6">
            <InfoRow label={t('warehouses.product_code')} value="AS220-SD" />
            <InfoRow label={t('warehouses.value')} value="-" />
          </div>
        </CollapsibleSection>
      </div>
    </Layout>
  );
};
