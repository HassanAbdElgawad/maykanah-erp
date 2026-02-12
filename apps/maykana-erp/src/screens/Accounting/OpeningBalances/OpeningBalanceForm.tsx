import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp, Trash2, Eye, ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/styles';

interface OrderItem {
  id: string;
  itemCode: string;
  itemName: string;
  description: string;
  unit: string;
  quantity: number;
  evaluationRate: number;
  currentQuantity: number;
}

export const OpeningBalanceForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [isClassDataOpen, setIsClassDataOpen] = useState(true);
  const [isOrderItemsOpen, setIsOrderItemsOpen] = useState(true);

  const [formData, setFormData] = useState({
    productName: isEditMode ? 'مستودع مبين A' : '',
    fiscalYear: isEditMode ? 'الأرصدة' : '',
    date: isEditMode ? 'التاريخ' : '',
    accountName: isEditMode ? 'الأرصدة' : '',
  });

  const [orderItems, setOrderItems] = useState<OrderItem[]>(
    isEditMode
      ? [
          {
            id: '1',
            itemCode: 'A5220-SD',
            itemName: 'مادة لاصقة شديدة',
            description: 'وصف هنا أو INV-0001',
            unit: 'كيلو',
            quantity: 1,
            evaluationRate: 2000,
            currentQuantity: 1000.0,
          },
        ]
      : []
  );

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (id: string, field: keyof OrderItem, value: string | number) => {
    setOrderItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddItem = () => {
    const newItem: OrderItem = {
      id: Date.now().toString(),
      itemCode: '',
      itemName: '',
      description: '',
      unit: '',
      quantity: 0,
      evaluationRate: 0,
      currentQuantity: 0,
    };
    setOrderItems((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (id: string) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('Order Items:', orderItems);
    navigate('/warehouses/opening-balances');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/warehouses/opening-balances')}
              className="flex items-center gap-2 text-[#093738] hover:bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-base font-medium">
                {isEditMode ? 'تعديل الأرصدة الافتتاحية' : 'إضافة الأرصدة الافتتاحية'}
              </span>
            </Button>
            <Button onClick={handleSubmit} className={buttonClasses.primary}>
              حفظ
            </Button>
          </div>
        </Card>

        {/* Class Data Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between p-4 bg-[#F1F5F980] cursor-pointer"
            onClick={() => setIsClassDataOpen(!isClassDataOpen)}
          >
            <h2 className="text-lg font-semibold text-[#093738]">بيانات الصنف</h2>
            {isClassDataOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {isClassDataOpen && (
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اسم المنتوج
                  </label>
                  <Input
                    type="text"
                    value={formData.productName}
                    onChange={(e) => handleInputChange('productName', e.target.value)}
                    placeholder="اسم المنتوج"
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    السنة المالية
                  </label>
                  <Input
                    type="text"
                    value={formData.fiscalYear}
                    onChange={(e) => handleInputChange('fiscalYear', e.target.value)}
                    placeholder="السنة المالية"
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    التاريخ
                  </label>
                  <Input
                    type="text"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    placeholder="التاريخ"
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اسم الحساب
                  </label>
                  <Input
                    type="text"
                    value={formData.accountName}
                    onChange={(e) => handleInputChange('accountName', e.target.value)}
                    placeholder="اسم الحساب"
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Order Items Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between p-4 bg-[#F1F5F980] cursor-pointer"
            onClick={() => setIsOrderItemsOpen(!isOrderItemsOpen)}
          >
            <h2 className="text-lg font-semibold text-[#093738]">بنود الطلب</h2>
            {isOrderItemsOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {isOrderItemsOpen && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#F1F5F980] border-b border-gray-200">
                      <th className="px-3 py-3 text-right text-sm font-medium text-[#093738]">
                        كود اللادة / الصنف
                      </th>
                      <th className="px-3 py-3 text-right text-sm font-medium text-[#093738]">
                        اسم اللادة / الصنف
                      </th>
                      <th className="px-3 py-3 text-right text-sm font-medium text-[#093738]">
                        الوصف
                      </th>
                      <th className="px-3 py-3 text-right text-sm font-medium text-[#093738]">
                        الوحدة
                      </th>
                      <th className="px-3 py-3 text-right text-sm font-medium text-[#093738]">
                        الكمية
                      </th>
                      <th className="px-3 py-3 text-right text-sm font-medium text-[#093738]">
                        معدل التقييم
                      </th>
                      <th className="px-3 py-3 text-right text-sm font-medium text-[#093738]">
                        الكمية الحالية
                      </th>
                      <th className="px-3 py-3 text-right text-sm font-medium text-[#093738]">
                        عمليات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orderItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-3 py-3">
                          <Input
                            type="text"
                            value={item.itemCode}
                            onChange={(e) => handleItemChange(item.id, 'itemCode', e.target.value)}
                            className="h-10 bg-white border-[#e2e2e2] text-sm"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <Input
                            type="text"
                            value={item.itemName}
                            onChange={(e) => handleItemChange(item.id, 'itemName', e.target.value)}
                            className="h-10 bg-white border-[#e2e2e2] text-sm"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <Input
                            type="text"
                            value={item.description}
                            onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                            className="h-10 bg-white border-[#e2e2e2] text-sm"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <select
                            value={item.unit}
                            onChange={(e) => handleItemChange(item.id, 'unit', e.target.value)}
                            className="h-10 w-full px-3 rounded-md border border-[#e2e2e2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5f7a]"
                          >
                            <option value="">-</option>
                            <option value="كيلو">كيلو</option>
                            <option value="قطعة">قطعة</option>
                            <option value="متر">متر</option>
                          </select>
                        </td>
                        <td className="px-3 py-3">
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(item.id, 'quantity', Number(e.target.value))}
                            className="h-10 bg-white border-[#e2e2e2] text-sm"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <Input
                            type="number"
                            value={item.evaluationRate}
                            onChange={(e) => handleItemChange(item.id, 'evaluationRate', Number(e.target.value))}
                            className="h-10 bg-white border-[#e2e2e2] text-sm"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <Input
                            type="number"
                            value={item.currentQuantity}
                            onChange={(e) => handleItemChange(item.id, 'currentQuantity', Number(e.target.value))}
                            className="h-10 bg-white border-[#e2e2e2] text-sm"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleDeleteItem(item.id)}
                              className="p-1.5 hover:bg-red-50 rounded text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {orderItems.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  لا توجد بنود. اضغط على "إضافة بند" لإضافة بند جديد
                </div>
              )}

              <div className="mt-4 flex justify-start">
                <Button
                  onClick={handleAddItem}
                  variant="outline"
                  className="border-[#e2e2e2] hover:bg-gray-50"
                >
                  + إضافة بند
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Totals Section */}
        <div className="flex justify-end">
          <div className="min-w-[300px]">
            <div className="text-right text-sm text-gray-600 mb-2">الإجمالي</div>
            <Input
              type="text"
              value={orderItems.reduce((sum, item) => sum + item.evaluationRate * item.quantity, 0).toFixed(2)}
              readOnly
              className="h-[43px] bg-white border-[#e2e2e2] text-left"
              placeholder="الإجمالي"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
