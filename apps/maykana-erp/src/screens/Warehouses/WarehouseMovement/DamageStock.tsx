import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { CardContainer } from '@/components/ui/CardContainer';
import { CollapsibleSection } from '@/components/ui/CollapsibleSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Trash2 } from 'lucide-react';
import { buttonClasses } from '@/styles';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface OrderItem {
  id: string;
  itemCode: string;
  itemName: string;
  description: string;
  unit: string;
  quantity: number;
  price: number;
  total: number;
}

interface AdditionalCost {
  id: string;
  number: string;
  expenseAccount: string;
  description: string;
  price: number;
}

export const DamageStock = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, language } = useLanguage();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    movementNumber: '',
    movementDate: '',
    movementType: 'damage',
    costCenter: '',
    defaultWarehouse: '',
  });

  const [orderItems, setOrderItems] = useState<OrderItem[]>([
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
  ]);

  const [additionalCosts, setAdditionalCosts] = useState<AdditionalCost[]>([
    {
      id: '1',
      number: '1',
      expenseAccount: 'مصاريف تحويل',
      description: 'تضمين',
      price: 500,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/warehouses/warehouse-movement');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleDeleteItem = (itemId: string) => {
    setOrderItems(orderItems.filter((item) => item.id !== itemId));
  };

  const handleDeleteCost = (costId: string) => {
    setAdditionalCosts(additionalCosts.filter((cost) => cost.id !== costId));
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
                onClick={() => navigate('/warehouses/warehouse-movement')}
                className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg hover:bg-gray-200 transition-colors"
              >
                {language === 'ar' ? (
                  <ArrowRight className="w-6 h-6 text-gray-700" />
                ) : (
                  <ArrowLeft className="w-6 h-6 text-gray-700" />
                )}
              </button>
              <h1 className="text-xl font-medium text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {isEditMode
                  ? t('warehouses.edit_damage_stock')
                  : t('warehouses.damage_stock')}
              </h1>
            </div>
            <button type="submit" className={buttonClasses.primary}>
              {t('common.save')}
            </button>
          </div>
        </CardContainer>

        {/* Damage Stock Information */}
        <CollapsibleSection title={t('warehouses.damage_stock_info')} defaultOpen={true}>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.movement_number')}
              </label>
              <Input
                type="text"
                value={formData.movementNumber}
                onChange={(e) => handleInputChange('movementNumber', e.target.value)}
                className="h-[45px] bg-slate-50"
                placeholder={t('warehouses.movement_number_placeholder')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.movement_date')}
              </label>
              <Input
                type="date"
                value={formData.movementDate}
                onChange={(e) => handleInputChange('movementDate', e.target.value)}
                className="h-[45px] bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.movement_type')}
              </label>
              <Input
                type="text"
                value={t('warehouses.damage')}
                className="h-[45px] bg-slate-50"
                disabled
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.cost_center')}
              </label>
              <Select
                value={formData.costCenter}
                onValueChange={(value) => handleInputChange('costCenter', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_cost_center')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="center1">
                    {t('warehouses.cost_center_1')}
                  </SelectItem>
                  <SelectItem value="center2">
                    {t('warehouses.cost_center_2')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 col-span-2">
              <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.default_warehouse')}
              </label>
              <Select
                value={formData.defaultWarehouse}
                onValueChange={(value) => handleInputChange('defaultWarehouse', value)}
              >
                <SelectTrigger className="h-[45px] bg-slate-50">
                  <SelectValue placeholder={t('warehouses.select_default_warehouse')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="warehouse1">
                    {t('warehouses.riyadh_warehouse')}
                  </SelectItem>
                  <SelectItem value="warehouse2">
                    {t('warehouses.jeddah_warehouse')}
                  </SelectItem>
                  <SelectItem value="warehouse3">
                    {t('warehouses.dammam_warehouse')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                  <th className="border border-gray-200 px-4 py-2 text-center text-sm font-medium text-gray-700">
                    {t('warehouses.actions')}
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
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {item.unit}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {item.quantity}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {item.price}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {item.total}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => handleDeleteItem(item.id)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className="mt-4 text-teal-600 hover:text-teal-700 text-sm font-medium"
            >
              + {t('warehouses.add_item')}
            </button>
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
                  <th className="border border-gray-200 px-4 py-2 text-center text-sm font-medium text-gray-700">
                    {t('warehouses.actions')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalCosts.map((cost) => (
                  <tr key={cost.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {cost.number}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {cost.expenseAccount}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {cost.description}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">
                      {cost.price}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => handleDeleteCost(cost.id)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className="mt-4 text-teal-600 hover:text-teal-700 text-sm font-medium"
            >
              + {t('warehouses.add_cost')}
            </button>
          </div>
        </CollapsibleSection>

        {/* General Notes */}
        <CollapsibleSection title={t('warehouses.general_notes')} defaultOpen={false}>
          <div className="space-y-2">
            <textarea
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg bg-slate-50 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder={t('warehouses.general_notes_placeholder')}
            />
          </div>
        </CollapsibleSection>
      </form>
    </Layout>
  );
};
