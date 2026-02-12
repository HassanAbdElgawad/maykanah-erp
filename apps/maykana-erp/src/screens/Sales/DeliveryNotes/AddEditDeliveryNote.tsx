import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { buttonClasses } from '@/styles';
import { Trash2, Plus, ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';
import { useDeliveryNotesData } from '@/hooks/useDeliveryNotesData';
import type { DeliveryNote, DeliveryNoteItem } from '../../../data/sales/delivery-notes.data';

export const AddEditDeliveryNote = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { deliveryNotes, setDeliveryNotes } = useDeliveryNotesData();
  const isEditMode = !!id;

  const [formData, setFormData] = useState<Omit<DeliveryNote, 'id'>>({
    noteNumber: '',
    customer: '',
    deliveryDate: '',
    orderNumber: '',
    invoiceNumber: '',
    warehouse: '',
    deliveryAddress: '',
    deliveredBy: '',
    status: 'pending',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
    notes: '',
    discountType: 'percentage',
    discountValue: 0,
  });

  const [items, setItems] = useState<DeliveryNoteItem[]>([
    {
      id: 1,
      itemCode: '',
      itemName: '',
      unit: '',
      quantity: 0,
      unitPrice: 0,
      discount: 0,
      tax: 0,
      totalPrice: 0,
    },
  ]);

  const [showCustomerInfo, setShowCustomerInfo] = useState(true);
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(true);
  const [showItems, setShowItems] = useState(true);
  const [showDiscount, setShowDiscount] = useState(true);
  const [showNotes, setShowNotes] = useState(true);

  useEffect(() => {
    if (isEditMode && id) {
      const note = deliveryNotes.find((n) => n.id === Number(id));
      if (note) {
        setFormData(note);
        setItems(note.items);
      }
    }
  }, [id, isEditMode, deliveryNotes]);

  const calculateItemTotal = (item: DeliveryNoteItem): number => {
    const subtotal = item.quantity * item.unitPrice;
    const discountAmount = (subtotal * item.discount) / 100;
    const afterDiscount = subtotal - discountAmount;
    const taxAmount = (afterDiscount * item.tax) / 100;
    return afterDiscount + taxAmount;
  };

  const handleItemChange = (
    index: number,
    field: keyof DeliveryNoteItem,
    value: string | number
  ) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    if (['quantity', 'unitPrice', 'discount', 'tax'].includes(field)) {
      updatedItems[index].totalPrice = calculateItemTotal(updatedItems[index]);
    }

    setItems(updatedItems);
    updateTotals(updatedItems);
  };

  const updateTotals = (currentItems: DeliveryNoteItem[]) => {
    const subtotal = currentItems.reduce((sum, item) => {
      return sum + item.quantity * item.unitPrice;
    }, 0);

    const totalDiscount = currentItems.reduce((sum, item) => {
      return sum + (item.quantity * item.unitPrice * item.discount) / 100;
    }, 0);

    const afterDiscount = subtotal - totalDiscount;

    const totalTax = currentItems.reduce((sum, item) => {
      const itemSubtotal = item.quantity * item.unitPrice;
      const itemDiscount = (itemSubtotal * item.discount) / 100;
      const afterItemDiscount = itemSubtotal - itemDiscount;
      return sum + (afterItemDiscount * item.tax) / 100;
    }, 0);

    let invoiceDiscount = 0;
    if (formData.discountType === 'percentage') {
      invoiceDiscount = (afterDiscount * formData.discountValue) / 100;
    } else {
      invoiceDiscount = formData.discountValue;
    }

    const total = afterDiscount + totalTax - invoiceDiscount;

    setFormData({
      ...formData,
      items: currentItems,
      subtotal: subtotal,
      taxAmount: totalTax,
      discount: invoiceDiscount,
      total: total,
    });
  };

  const addItem = () => {
    const newItem: DeliveryNoteItem = {
      id: Math.max(...items.map((i) => i.id)) + 1,
      itemCode: '',
      itemName: '',
      unit: '',
      quantity: 0,
      unitPrice: 0,
      discount: 0,
      tax: 0,
      totalPrice: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
      updateTotals(updatedItems);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const noteData: DeliveryNote = {
      ...formData,
      id: isEditMode ? Number(id) : Math.max(...deliveryNotes.map((n) => n.id)) + 1,
      items,
    };

    if (isEditMode) {
      setDeliveryNotes(
        deliveryNotes.map((n) => (n.id === Number(id) ? noteData : n))
      );
    } else {
      setDeliveryNotes([...deliveryNotes, noteData]);
    }

    navigate('/sales/delivery-notes');
  };

  const handleCancel = () => {
    navigate('/sales/delivery-notes');
  };

  return (
    <Layout>
      <div className="[direction:rtl]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => navigate('/sales/delivery-notes')} 
              className="w-11 h-11 p-0 bg-white text-[#0e0d24] border border-[#e2e2e2] hover:bg-gray-50 rounded-lg shadow-[0px_4px_4px_#0000001a] flex items-center justify-center"
              type="button"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
              {isEditMode ? 'تعديل سند التسليم' : 'سند تسليم'}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={handleCancel}
              className={`${buttonClasses.secondary} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
            >
              إلغاء
            </Button>
            <Button
              type="submit"
              form="delivery-note-form"
              className={`${buttonClasses.primary} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
            >
              {isEditMode ? 'تحديث السند' : 'حفظ السند'}
            </Button>
          </div>
        </div>

      <form id="delivery-note-form" onSubmit={handleSubmit} className="space-y-6">
        {/* معلومات العميل */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={() => setShowCustomerInfo(!showCustomerInfo)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              معلومات العميل
            </h2>
            {showCustomerInfo ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {showCustomerInfo && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  المستودع <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.warehouse}
                  onValueChange={(value) => setFormData({ ...formData, warehouse: value })}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue placeholder="اختر المستودع" />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem
                      value="المستودع الرئيسي"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      المستودع الرئيسي
                    </SelectItem>
                    <SelectItem
                      value="مستودع جدة"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      مستودع جدة
                    </SelectItem>
                    <SelectItem
                      value="مستودع الدمام"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      مستودع الدمام
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  العميل <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.customer}
                  onValueChange={(value) => setFormData({ ...formData, customer: value })}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue placeholder="اختر العميل" />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem
                      value="شركة الأمل التجارية"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      شركة الأمل التجارية
                    </SelectItem>
                    <SelectItem
                      value="مؤسسة النجاح"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      مؤسسة النجاح
                    </SelectItem>
                    <SelectItem
                      value="شركة التقنية الحديثة"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      شركة التقنية الحديثة
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  رقم عروض السعر
                </label>
                <Select
                  value={formData.orderNumber}
                  onValueChange={(value) => setFormData({ ...formData, orderNumber: value })}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue placeholder="رقم التاوئر" />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem
                      value="WO-2026-001"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      WO-2026-001
                    </SelectItem>
                    <SelectItem
                      value="WO-2026-002"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      WO-2026-002
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* سند التسليم */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              سند التسليم
            </h2>
            {showDeliveryInfo ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {showDeliveryInfo && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  رقم الجوال <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={formData.noteNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, noteNumber: e.target.value })
                  }
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  placeholder="رقم الجوال"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  اسم المستلم <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={formData.deliveredBy}
                  onChange={(e) => setFormData({ ...formData, deliveredBy: e.target.value })}
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  placeholder="اسم المستلم"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  تاريخ التسليم <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <Input
                    type="time"
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right flex-1"
                  />
                  <Input
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right flex-1"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بنود الطلب */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={() => setShowItems(!showItems)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              بنود الطلب
            </h2>
            {showItems ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {showItems && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full [direction:rtl]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        كود المادة / الصنف
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        وصف المادة
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الوحدة
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الكمية
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        السعر الإفرادي
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        السعر الإجمالي
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        السعر الإفرادي
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        السعر الإجمالي بعد الضريبة
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        عمليات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={item.id} className="border-t">
                        <td className="px-4 py-3">
                          <Input
                            type="text"
                            value={item.itemCode}
                            onChange={(e) =>
                              handleItemChange(index, 'itemCode', e.target.value)
                            }
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            type="text"
                            value={item.itemName}
                            onChange={(e) =>
                              handleItemChange(index, 'itemName', e.target.value)
                            }
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Select
                            value={item.unit}
                            onValueChange={(value) => handleItemChange(index, 'unit', value)}
                          >
                            <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                              <SelectValue placeholder="اختر" />
                            </SelectTrigger>
                            <SelectContent className="[direction:rtl]">
                              <SelectItem
                                value="قطعة"
                                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                قطعة
                              </SelectItem>
                              <SelectItem
                                value="كرتون"
                                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                كرتون
                              </SelectItem>
                              <SelectItem
                                value="كيلو"
                                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                كيلو
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              handleItemChange(index, 'quantity', Number(e.target.value))
                            }
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                            min="0"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            type="number"
                            value={item.unitPrice}
                            onChange={(e) =>
                              handleItemChange(index, 'unitPrice', Number(e.target.value))
                            }
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                            min="0"
                            step="0.01"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            type="number"
                            value={(item.quantity * item.unitPrice).toFixed(2)}
                            readOnly
                            className="bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            type="number"
                            value={item.unitPrice}
                            readOnly
                            className="bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            type="number"
                            value={item.totalPrice.toFixed(2)}
                            readOnly
                            className="bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                          />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="p-1 hover:bg-red-50 rounded text-red-600"
                            disabled={items.length === 1}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Button
                type="button"
                onClick={addItem}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Plus className="w-4 h-4" />
                إضافة صنف جديد
              </Button>
            </div>
          )}
        </div>

        {/* الخصم */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={() => setShowDiscount(!showDiscount)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              الخصم
            </h2>
            {showDiscount ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {showDiscount && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  المخصم
                </label>
                <Select
                  value={formData.discountType}
                  onValueChange={(value: any) => {
                    setFormData({ ...formData, discountType: value, discountValue: 0 });
                    updateTotals(items);
                  }}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem
                      value="percentage"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      نسبة مئوية
                    </SelectItem>
                    <SelectItem
                      value="fixed"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      قيمة ثابتة
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {formData.discountType === 'percentage' ? 'نسبة الخصم %' : 'قيمة الخصم'}
                </label>
                <Input
                  type="number"
                  value={formData.discountValue}
                  onChange={(e) => {
                    setFormData({ ...formData, discountValue: Number(e.target.value) });
                    setTimeout(() => updateTotals(items), 0);
                  }}
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  قيمة الخصم النهائي
                </label>
                <Input
                  type="number"
                  value={formData.discount.toFixed(2)}
                  readOnly
                  className="bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                />
              </div>
            </div>
          )}
        </div>

        {/* للملاحظات العامة */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={() => setShowNotes(!showNotes)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              للملاحظات العامة
            </h2>
            {showNotes ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {showNotes && (
            <Textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="min-h-[120px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
              placeholder="أضف ملاحظاتك هنا..."
            />
          )}
        </div>

      </form>
      </div>
    </Layout>
  );
};
