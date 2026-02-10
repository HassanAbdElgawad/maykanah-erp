import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { CardContainer } from '../../components/ui/CardContainer';
import { CollapsibleSection } from '../../components/ui/CollapsibleSection';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Edit2 } from 'lucide-react';
import { buttonClasses } from '../../styles';

export const ViewInventoryMovement = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, language } = useLanguage();

  // Mock data
  const movement = {
    movementNumber: '1222236',
    movementType: 'تحويل',
    movementDate: '2025-5-20',
    costCenter: 'مركز التكلفة الرئيسي',
    generalNotes: 'ملاحظات عامة هنا',
  };

  const orderItems = [
    {
      id: '1',
      itemCode: 'AS220-SD',
      itemName: 'مادة لمعاملة جيدة',
      description: 'وصف هنا ال, وصف هنا ال',
      unit: 'كيلو',
      quantity: 2,
      price: 250,
      total: 500,
    },
  ];

  const additionalCosts = [
    {
      id: '1',
      number: '1',
      expenseAccount: 'مصاريف تحويل',
      description: 'تضمين',
      price: 500,
    },
  ];

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
                onClick={() => navigate('/warehouses/inventory-movements')}
                className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg hover:bg-gray-200 transition-colors"
              >
                {language === 'ar' ? (
                  <ArrowRight className="w-6 h-6 text-gray-700" />
                ) : (
                  <ArrowLeft className="w-6 h-6 text-gray-700" />
                )}
              </button>
              <h1 className="text-xl font-medium text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.view_inventory_movement')}
              </h1>
            </div>
            <button
              onClick={() => navigate(`/warehouses/inventory-movements/edit/${id}`)}
              className={buttonClasses.primary}
            >
              <Edit2 className="w-5 h-5" />
              {t('common.edit')}
            </button>
          </div>
        </CardContainer>

        {/* Item Information */}
        <CollapsibleSection title={t('warehouses.item_info')} defaultOpen={true}>
          <div className="grid grid-cols-4 gap-6">
            <InfoRow
              label={t('warehouses.movement_number')}
              value={movement.movementNumber}
            />
            <InfoRow label={t('warehouses.movement_type')} value={movement.movementType} />
            <InfoRow label={t('warehouses.movement_date')} value={movement.movementDate} />
            <InfoRow label={t('warehouses.cost_center')} value={movement.costCenter} />
          </div>
        </CollapsibleSection>

        {/* Order Items */}
        <CollapsibleSection title={t('warehouses.order_items')} defaultOpen={true}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.item_code')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.item_name')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.description')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.unit')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.quantity')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.price')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.total')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {item.itemCode}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {item.itemName}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {item.description}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">{item.unit}</td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {item.quantity}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">{item.price}</td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>

        {/* Additional Costs */}
        <CollapsibleSection title={t('warehouses.additional_costs')} defaultOpen={true}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.number')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.expense_account')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.description')}
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-right text-sm font-medium text-gray-700">
                    {t('warehouses.price')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalCosts.map((cost) => (
                  <tr key={cost.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-sm">{cost.number}</td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {cost.expenseAccount}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {cost.description}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">{cost.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>

        {/* General Notes */}
        <CollapsibleSection title={t('warehouses.general_notes')} defaultOpen={false}>
          <div className="text-gray-900">{movement.generalNotes}</div>
        </CollapsibleSection>
      </div>
    </Layout>
  );
};
