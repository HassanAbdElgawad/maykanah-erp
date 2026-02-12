import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown, ChevronUp, Plus, Trash2, ArrowLeft } from 'lucide-react';

interface ReceiptItem {
  id: number;
  itemCode: string;
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface MaterialReceiptsFormProps {
  mode?: 'view' | 'edit' | 'create';
  data?: any;
}

export const MaterialReceiptsForm = ({
  mode: propMode = 'create',
  data: propData,
}: MaterialReceiptsFormProps): JSX.Element => {
  const { dir } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryMode = searchParams.get('mode') as 'view' | 'edit' | 'create' | null;
  const mode = (queryMode || propMode) as 'view' | 'edit' | 'create';
  const data = propData || { id };

  // Collapsible sections state
  const [openSections, setOpenSections] = useState({
    information: true,
    items: true,
    summary: true,
    terms: false,
    seal: false,
  });

  // Form state
  const [formData, setFormData] = useState({
    receiptName: data?.receiptName || 'اسم الوارد',
    receiptNumber: data?.receiptNumber || '12563/23',
    requiredDate: data?.requiredDate || '30/12/2025',
    shippingDate: data?.shippingDate || '06:30 - 10/11/2026',
    warehouse: data?.warehouse || 'المستودع',
    truckNumber: data?.truckNumber || '555231664644',
  });

  // Receipt items state
  const [receiptItems, setReceiptItems] = useState<ReceiptItem[]>(
    data?.items || [
      {
        id: 1,
        itemCode: 'A5220-SD',
        description: 'تحديد خصائص البنود شرها عن عرض',
        unit: 'كم',
        quantity: 1,
        unitPrice: 1000.0,
        totalPrice: 2000,
      },
    ]
  );

  const [newItem, setNewItem] = useState<Partial<ReceiptItem>>({
    unit: 'كم',
    quantity: 1,
    unitPrice: 0,
  });

  const [termsAndConditions, setTermsAndConditions] = useState(data?.termsAndConditions || '');
  const [seal, setSeal] = useState(data?.seal || '');

  // Toggle section visibility
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Calculate totals
  const totalValue = receiptItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const discountValue = data?.discountValue || 20;
  const taxValue = data?.taxValue || 10.5;
  const totalWithTax = totalValue - discountValue + taxValue;

  // Handle item changes
  const handleItemChange = (id: number, field: keyof ReceiptItem, value: any) => {
    setReceiptItems(
      receiptItems.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };

          // Calculate prices if quantity or unitPrice changes
          if (field === 'quantity' || field === 'unitPrice') {
            const qty = field === 'quantity' ? parseFloat(value) || 0 : item.quantity;
            const price = field === 'unitPrice' ? parseFloat(value) || 0 : item.unitPrice;
            updatedItem.totalPrice = qty * price;
          }

          return updatedItem;
        }
        return item;
      })
    );
  };

  // Handle add item
  const handleAddItem = () => {
    if (newItem.itemCode && newItem.description) {
      const item: ReceiptItem = {
        id: Date.now(),
        itemCode: newItem.itemCode || '',
        description: newItem.description || '',
        unit: newItem.unit || 'كم',
        quantity: newItem.quantity || 1,
        unitPrice: newItem.unitPrice || 0,
        totalPrice: (newItem.quantity || 1) * (newItem.unitPrice || 0),
      };
      setReceiptItems([...receiptItems, item]);
      setNewItem({ unit: 'كم', quantity: 1, unitPrice: 0 });
    }
  };

  // Handle remove item
  const handleRemoveItem = (id: number) => {
    setReceiptItems(receiptItems.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="space-y-4 pb-8" dir={dir}>
        {/* Header with Title and Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/purchases/material-receipts')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              استلام المواد
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {mode === 'edit' || mode === 'create' ? (
              <>
                <Button className="px-6 h-[43px] bg-white hover:bg-gray-50 text-[#093738] border border-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  أضف منتجات
                </Button>
                <Button className="px-6 h-[43px] bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  إرسال الطلب
                </Button>
              </>
            ) : null}
          </div>
        </div>

        {/* Receipt Information Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('information')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              معلومات الوارد
            </h3>
            {openSections.information ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.information && (
            <div className="p-6 space-y-4">
              {/* First Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    اسم الوارد
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.receiptName}
                    </div>
                  ) : (
                    <Input
                      value={formData.receiptName}
                      onChange={(e) => setFormData({ ...formData, receiptName: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir={dir}
                    />
                  )}
                </div>

                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    رقم الوارد
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.receiptNumber}
                    </div>
                  ) : (
                    <Input
                      value={formData.receiptNumber}
                      onChange={(e) => setFormData({ ...formData, receiptNumber: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir={dir}
                    />
                  )}
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    مطلوبة بتاريخ
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.requiredDate}
                    </div>
                  ) : (
                    <Input
                      type="date"
                      value={formData.requiredDate}
                      onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  )}
                </div>

                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    تاريخ الشحن
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.shippingDate}
                    </div>
                  ) : (
                    <Input
                      value={formData.shippingDate}
                      onChange={(e) => setFormData({ ...formData, shippingDate: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir={dir}
                    />
                  )}
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    المستودع
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.warehouse}
                    </div>
                  ) : (
                    <Select
                      value={formData.warehouse}
                      onValueChange={(value) => setFormData({ ...formData, warehouse: value })}
                    >
                      <SelectTrigger className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="المستودع">المستودع</SelectItem>
                        <SelectItem value="مستودع 1">مستودع 1</SelectItem>
                        <SelectItem value="مستودع 2">مستودع 2</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>

                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    رقم شاحنة الوارد
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.truckNumber}
                    </div>
                  ) : (
                    <Input
                      value={formData.truckNumber}
                      onChange={(e) => setFormData({ ...formData, truckNumber: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir={dir}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Items Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('items')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              طلب المواد والاحتياجات
            </h3>
            {openSections.items ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.items && (
            <div className="p-6">
              {/* Add New Item - Only in edit/create mode */}
              {(mode === 'edit' || mode === 'create') && (
                <div className="mb-6 pb-6 border-b border-gray-200 space-y-3">
                  <div className="grid grid-cols-5 gap-3">
                    <Input
                      placeholder="كود المادة / الصنف"
                      value={newItem.itemCode || ''}
                      onChange={(e) => setNewItem({ ...newItem, itemCode: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir={dir}
                    />
                    <Input
                      placeholder="وصف المادة"
                      value={newItem.description || ''}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] col-span-2"
                      dir={dir}
                    />
                    <Select
                      value={newItem.unit || 'كم'}
                      onValueChange={(v) => setNewItem({ ...newItem, unit: v })}
                    >
                      <SelectTrigger className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="كم">كم</SelectItem>
                        <SelectItem value="قطعة">قطعة</SelectItem>
                        <SelectItem value="صندوق">صندوق</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={handleAddItem}
                      className="h-[43px] bg-[#093738] hover:bg-[#093738]/90 text-white gap-2"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Items Table */}
              {receiptItems.length > 0 && (
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full" dir={dir}>
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          كود المادة / الصنف
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right min-w-[200px]">
                          وصف المادة
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          السعر الفردي
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          السعر الإجمالي
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          الكمية
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          الوحدة
                        </th>
                        {(mode === 'edit' || mode === 'create') && (
                          <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
                            العمليات
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {receiptItems.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.itemCode}
                              </div>
                            ) : (
                              <Input
                                value={item.itemCode}
                                onChange={(e) =>
                                  handleItemChange(item.id, 'itemCode', e.target.value)
                                }
                                className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                                dir={dir}
                              />
                            )}
                          </td>
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.description}
                              </div>
                            ) : (
                              <Input
                                value={item.description}
                                onChange={(e) =>
                                  handleItemChange(item.id, 'description', e.target.value)
                                }
                                className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                                dir={dir}
                              />
                            )}
                          </td>
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.unitPrice.toFixed(1)}
                              </div>
                            ) : (
                              <Input
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) =>
                                  handleItemChange(item.id, 'unitPrice', e.target.value)
                                }
                                className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                                min="0"
                                step="0.01"
                              />
                            )}
                          </td>
                          <td className="p-2">
                            <div className="p-2 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
                              {item.totalPrice}
                            </div>
                          </td>
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.quantity}
                              </div>
                            ) : (
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleItemChange(item.id, 'quantity', e.target.value)
                                }
                                className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                                min="0"
                              />
                            )}
                          </td>
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.unit}
                              </div>
                            ) : (
                              <Select
                                value={item.unit}
                                onValueChange={(value) => handleItemChange(item.id, 'unit', value)}
                              >
                                <SelectTrigger className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="كم">كم</SelectItem>
                                  <SelectItem value="قطعة">قطعة</SelectItem>
                                  <SelectItem value="صندوق">صندوق</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          </td>
                          {(mode === 'edit' || mode === 'create') && (
                            <td className="p-2 text-center">
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Summary Box */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                  <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إجمالي العادة
                  </span>
                  <span className="text-base font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    ر.س {totalValue.toFixed(0)}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                  <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    قيمة الخصم
                  </span>
                  <span className="text-base font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    ر.س {discountValue}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                  <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إجمالي الخاصرة
                  </span>
                  <span className="text-base font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    ر.س {taxValue}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#093738] rounded border border-gray-200">
                  <span className="text-sm font-medium text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المبلغ شامل الضريبة
                  </span>
                  <span className="text-lg font-bold text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    ر.س {totalWithTax.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Terms and Conditions Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('terms')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              الشروط والأحكام - الملاحظات العامة
            </h3>
            {openSections.terms ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.terms && (
            <div className="p-6 space-y-4">
              <div>
                <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                  الشروط والأحكام
                </Label>
                {mode === 'view' ? (
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-h-[100px]">
                    {termsAndConditions || 'لا توجد شروط'}
                  </div>
                ) : (
                  <textarea
                    value={termsAndConditions}
                    onChange={(e) => setTermsAndConditions(e.target.value)}
                    placeholder="شروط السداد"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[100px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir={dir}
                    rows={4}
                  />
                )}
              </div>

              <div>
                <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                  الملاحظات
                </Label>
                {mode === 'view' ? (
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-h-[100px]">
                    لا توجد ملاحظات
                  </div>
                ) : (
                  <textarea
                    placeholder="الملاحظات"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[100px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir={dir}
                    rows={4}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Seal Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('seal')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              الختم
            </h3>
            {openSections.seal ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.seal && (
            <div className="p-6">
              {mode === 'view' ? (
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-h-[150px]">
                  {seal || 'لا يوجد ختم'}
                </div>
              ) : (
                <textarea
                  value={seal}
                  onChange={(e) => setSeal(e.target.value)}
                  placeholder="الختم"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[150px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir={dir}
                  rows={6}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
