import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, Trash2, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { buttonClasses } from '@/styles';

interface RequestItem {
  id: number;
  itemCode: string;
  itemName: string;
  description: string;
  unit: string;
  quantity: number;
}

export const AddEditMaterialRequest: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id?: string }>();
  
  // استخراج نوع الطلب من المسار
  const getRequestTypeFromPath = (): 'damage' | 'transfer' => {
    if (location.pathname.includes('/damage/')) {
      return 'damage';
    }
    return 'transfer';
  };
  
  const requestType = getRequestTypeFromPath();
  const isEditMode = !!id;

  const [isItemsSectionOpen, setIsItemsSectionOpen] = useState(true);
  const [isNotesSectionOpen, setIsNotesSectionOpen] = useState(true);

  const [formData, setFormData] = useState({
    requestType: requestType === 'transfer' ? 'نقل' : 'إتلاف',
    requestDate: new Date().toISOString().split('T')[0],
    reason: '',
    sourceWarehouse: '',
    targetWarehouse: '',
    warehouse: '',
    costCenter: '',
  });

  // Items State
  const [items, setItems] = useState<RequestItem[]>([
    { 
      id: 1, 
      itemCode: 'AS220-SD', 
      itemName: 'مادة لاصقة شديدة', 
      description: 'وصف ها ن 1 INV-0001', 
      unit: 'كيلو', 
      quantity: 1 
    }
  ]);

  const addItem = () => {
    setItems([...items, { 
      id: items.length + 1, 
      itemCode: '', 
      itemName: '', 
      description: '', 
      unit: '', 
      quantity: 1 
    }]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const pageTitle = isEditMode
    ? requestType === 'transfer' ? 'تعديل طلب نقل مواد' : 'تعديل طلب إتلاف مواد'
    : requestType === 'transfer' ? 'طلب نقل مواد' : 'طلب إتلاف مواد';

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/warehouses/material-requests')}
              className="flex items-center gap-2 text-[#093738] hover:bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-base font-medium">{pageTitle}</span>
            </Button>
            <Button className={buttonClasses.primary}>
              حفظ
            </Button>
          </div>
        </Card>

        {/* Main Form - Request Type Section */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div 
            className="flex items-center justify-between p-4 bg-[#F1F5F980] cursor-pointer"
            onClick={() => setIsItemsSectionOpen(!isItemsSectionOpen)}
          >
            <h2 className="text-lg font-semibold text-[#093738]">
              {requestType === 'transfer' ? 'نقل المواد' : 'إتلاف المواد'}
            </h2>
            {isItemsSectionOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {isItemsSectionOpen && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* نوع الطلب */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#093738]">
                    نوع الطلب
                  </label>
                  <Input
                    value={formData.requestType}
                    readOnly
                    className="bg-gray-50 border-[#e2e2e2]"
                  />
                </div>

                {/* تاريخ الطلب */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#093738]">
                    تاريخ الطلب
                  </label>
                  <Input
                    type="date"
                    value={formData.requestDate}
                    onChange={(e) => setFormData({...formData, requestDate: e.target.value})}
                    className="bg-white border-[#e2e2e2]"
                  />
                </div>

                {/* سبب الطلب */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#093738]">
                    سبب الطلب
                  </label>
                  <Input
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    placeholder="سبب الطلب"
                    className="bg-white border-[#e2e2e2]"
                  />
                </div>

                {/* Conditional fields based on request type */}
                {requestType === 'transfer' ? (
                  <>
                    {/* المستودع المطلوب منه */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#093738]">
                        المستودع المطلوب منه
                      </label>
                      <Select
                        value={formData.sourceWarehouse}
                        onValueChange={(value) => setFormData({...formData, sourceWarehouse: value})}
                      >
                        <SelectTrigger className="bg-white border-[#e2e2e2]">
                          <SelectValue placeholder="المستودع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warehouse1">مستودع الرياض</SelectItem>
                          <SelectItem value="warehouse2">مستودع جدة</SelectItem>
                          <SelectItem value="warehouse3">مستودع الدمام</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* المستودع */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#093738]">
                        المستودع
                      </label>
                      <Select
                        value={formData.targetWarehouse}
                        onValueChange={(value) => setFormData({...formData, targetWarehouse: value})}
                      >
                        <SelectTrigger className="bg-white border-[#e2e2e2]">
                          <SelectValue placeholder="المستودع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warehouse1">مستودع الرياض</SelectItem>
                          <SelectItem value="warehouse2">مستودع جدة</SelectItem>
                          <SelectItem value="warehouse3">مستودع الدمام</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                ) : (
                  <>
                    {/* المستودع */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#093738]">
                        المستودع
                      </label>
                      <Select
                        value={formData.warehouse}
                        onValueChange={(value) => setFormData({...formData, warehouse: value})}
                      >
                        <SelectTrigger className="bg-white border-[#e2e2e2]">
                          <SelectValue placeholder="المستودع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warehouse1">مستودع الرياض</SelectItem>
                          <SelectItem value="warehouse2">مستودع جدة</SelectItem>
                          <SelectItem value="warehouse3">مستودع الدمام</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* مركز التكلفة */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#093738]">
                        مركز التكلفة
                      </label>
                      <Select
                        value={formData.costCenter}
                        onValueChange={(value) => setFormData({...formData, costCenter: value})}
                      >
                        <SelectTrigger className="bg-white border-[#e2e2e2]">
                          <SelectValue placeholder="مركز التكلفة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cost1">مركز تكلفة 1</SelectItem>
                          <SelectItem value="cost2">مركز تكلفة 2</SelectItem>
                          <SelectItem value="cost3">مركز تكلفة 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </Card>

        {/* Items Section */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div 
            className="flex items-center justify-between p-4 bg-[#F1F5F980] cursor-pointer"
            onClick={() => setIsNotesSectionOpen(!isNotesSectionOpen)}
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-[#093738]">بنود الطلب</h2>
              <span className="text-sm text-gray-500">({items.length})</span>
            </div>
            {isNotesSectionOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {isNotesSectionOpen && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full" dir="rtl">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">عمليات</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">الكمية</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">الوحدة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">الوصف</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">اسم الصنف / اللادة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">كود اللادة / الصنف</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="p-1.5 hover:bg-gray-100 rounded text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => {
                              const newItems = [...items];
                              newItems[index].quantity = parseInt(e.target.value) || 0;
                              setItems(newItems);
                            }}
                            className="w-24 h-9 text-center border-[#e2e2e2]"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Select
                            value={item.unit}
                            onValueChange={(value) => {
                              const newItems = [...items];
                              newItems[index].unit = value;
                              setItems(newItems);
                            }}
                          >
                            <SelectTrigger className="w-32 h-9 border-[#e2e2e2]">
                              <SelectValue placeholder="الوحدة" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="كيلو">كيلو</SelectItem>
                              <SelectItem value="قطعة">قطعة</SelectItem>
                              <SelectItem value="متر">متر</SelectItem>
                              <SelectItem value="لتر">لتر</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            value={item.description}
                            onChange={(e) => {
                              const newItems = [...items];
                              newItems[index].description = e.target.value;
                              setItems(newItems);
                            }}
                            placeholder="الوصف"
                            className="min-w-[200px] h-9 border-[#e2e2e2]"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            value={item.itemName}
                            onChange={(e) => {
                              const newItems = [...items];
                              newItems[index].itemName = e.target.value;
                              setItems(newItems);
                            }}
                            placeholder="اسم الصنف"
                            className="min-w-[200px] h-9 border-[#e2e2e2]"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            value={item.itemCode}
                            onChange={(e) => {
                              const newItems = [...items];
                              newItems[index].itemCode = e.target.value;
                              setItems(newItems);
                            }}
                            placeholder="كود الصنف"
                            className="min-w-[150px] h-9 border-[#e2e2e2]"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {items.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  لا توجد بنود مضافة
                </div>
              )}

              <div className="mt-4">
                <Button
                  onClick={addItem}
                  variant="outline"
                  className="border-[#e2e2e2] text-[#093738] hover:bg-gray-50"
                >
                  + إضافة بند
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Notes Section */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-4 bg-[#F1F5F980]">
            <h2 className="text-lg font-semibold text-[#093738]">للملاحظات العامة</h2>
          </div>
          <div className="p-6">
            <textarea
              className="w-full min-h-[100px] p-3 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] resize-none"
              placeholder="اكتب ملاحظاتك هنا..."
            />
          </div>
        </Card>
      </div>
    </Layout>
  );
};
