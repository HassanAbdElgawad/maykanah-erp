import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
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
import { Textarea } from '@/components/ui/textarea';
import { buttonClasses } from '@/styles';
import { ArrowRight, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { useWorkOrdersData } from '@/hooks/useWorkOrdersData';
import type {
  WorkOrder,
  WorkOrderItem,
  WorkOrderStatus,
  WorkOrderPriority,
} from '@/data/competitions/work-orders.data';

export const AddEditWorkOrder = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { workOrders, setWorkOrders } = useWorkOrdersData();

  const isEditMode = Boolean(id);
  const existingOrder = isEditMode ? workOrders.find((o) => o.id === Number(id)) : null;

  // Form State
  const [orderNumber, setOrderNumber] = useState(existingOrder?.orderNumber || '');
  const [customer, setCustomer] = useState(existingOrder?.customer || '');
  const [orderDate, setOrderDate] = useState(
    existingOrder?.orderDate || new Date().toISOString().split('T')[0]
  );
  const [deliveryDate, setDeliveryDate] = useState(existingOrder?.deliveryDate || '');
  const [status] = useState<WorkOrderStatus>(existingOrder?.status || 'pending');
  const [priority] = useState<WorkOrderPriority>(
    existingOrder?.priority || 'normal'
  );
  const [assignedTo, setAssignedTo] = useState(existingOrder?.assignedTo || '');
  const [deliveryDateFrom, setDeliveryDateFrom] = useState('');
  const [deliveryDateTo, setDeliveryDateTo] = useState('');
  const [branch, setBranch] = useState('');
  const [discountType, setDiscountType] = useState('percentage');
  const [discountValue, setDiscountValue] = useState(0);
  const [items, setItems] = useState<WorkOrderItem[]>(
    existingOrder?.items || [
      {
        id: 1,
        itemName: '',
        quantity: 1,
        unitPrice: 0,
        discount: 0,
        tax: 15,
        total: 0,
      },
    ]
  );
  const [notes, setNotes] = useState(existingOrder?.notes || '');
  const [priceQuoteNumber, setPriceQuoteNumber] = useState(
    existingOrder?.priceQuoteNumber || ''
  );

  // Sections State
  const [sectionsExpanded, setSectionsExpanded] = useState({
    orderInfo: true,
    items: true,
    notes: true,
  });

  useEffect(() => {
    if (!isEditMode) {
      const maxNumber = Math.max(
        ...workOrders.map((o) => parseInt(o.orderNumber.split('-')[2])),
        0
      );
      setOrderNumber(`WO-2026-${String(maxNumber + 1).padStart(3, '0')}`);
    }
  }, [isEditMode, workOrders]);

  const toggleSection = (section: keyof typeof sectionsExpanded) => {
    setSectionsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const calculateItemTotal = (item: WorkOrderItem) => {
    const subtotal = item.quantity * item.unitPrice;
    const afterDiscount = subtotal - item.discount;
    const taxAmount = (afterDiscount * item.tax) / 100;
    return afterDiscount + taxAmount;
  };

  const handleItemChange = (index: number, field: keyof WorkOrderItem, value: any) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    newItems[index].total = calculateItemTotal(newItems[index]);
    setItems(newItems);
  };

  const addItem = () => {
    const newItem: WorkOrderItem = {
      id: items.length + 1,
      itemName: '',
      quantity: 1,
      unitPrice: 0,
      discount: 0,
      tax: 15,
      total: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const calculateTotals = () => {
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const totalDiscount = items.reduce((sum, item) => sum + item.discount, 0);
    const taxAmount = items.reduce((sum, item) => {
      const itemSubtotal = item.quantity * item.unitPrice - item.discount;
      return sum + (itemSubtotal * item.tax) / 100;
    }, 0);
    const total = subtotal - totalDiscount + taxAmount;

    return { subtotal, totalDiscount, taxAmount, total };
  };

  const totals = calculateTotals();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const orderData: WorkOrder = {
      id: isEditMode ? Number(id) : Math.max(...workOrders.map((o) => o.id)) + 1,
      orderNumber,
      customer,
      orderDate,
      deliveryDate,
      status,
      priority,
      assignedTo,
      items,
      subtotal: totals.subtotal,
      discount: totals.totalDiscount,
      taxAmount: totals.taxAmount,
      total: totals.total,
      notes,
      priceQuoteNumber: priceQuoteNumber || undefined,
    };

    if (isEditMode) {
      setWorkOrders(workOrders.map((o) => (o.id === Number(id) ? orderData : o)));
    } else {
      setWorkOrders([...workOrders, orderData]);
    }

    navigate('/sales/work-orders');
  };

  const SectionHeader = ({
    title,
    section,
  }: {
    title: string;
    section: keyof typeof sectionsExpanded;
  }) => (
    <div
      className="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer"
      onClick={() => toggleSection(section)}
    >
      <h3 className="text-base font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
        {title}
      </h3>
      {sectionsExpanded[section] ? (
        <ChevronUp className="w-5 h-5 text-gray-600" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-600" />
      )}
    </div>
  );

  return (
    <Layout>
      <div className="[direction:rtl]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate('/sales/work-orders')}
              className="w-11 h-11 p-0 bg-white text-[#0e0d24] border border-[#e2e2e2] hover:bg-gray-50 rounded-lg shadow-[0px_4px_4px_#0000001a] flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
              {isEditMode ? 'تعديل أمر توريد' : 'أمر توريد جديد'}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={() => navigate('/sales/work-orders')}
              className={buttonClasses.secondary}
            >
              إلغاء
            </Button>
            <Button type="submit" form="work-order-form" className={buttonClasses.primary}>
              حفظ
            </Button>
          </div>
        </div>

        <form id="work-order-form" onSubmit={handleSubmit} className="space-y-4">
          {/* معلومات المورد */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <SectionHeader title="معلومات المورد" section="orderInfo" />
            {sectionsExpanded.orderInfo && (
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    رقم أمر التوريد
                  </Label>
                  <Input
                    value={orderNumber}
                    readOnly
                    className="bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    تاريخ بدء التوصيل
                  </Label>
                  <div className="flex gap-2 items-center">
                    <Input
                      type="time"
                      value={deliveryDateFrom}
                      onChange={(e) => setDeliveryDateFrom(e.target.value)}
                      placeholder="09:30"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] flex-1 text-right"
                    />
                    <span className="text-[#00000099]">-</span>
                    <Input
                      type="date"
                      value={deliveryDateTo}
                      onChange={(e) => setDeliveryDateTo(e.target.value)}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] flex-1 text-right"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    رقم عروض السعر
                  </Label>
                  <Input
                    value={priceQuoteNumber}
                    onChange={(e) => setPriceQuoteNumber(e.target.value)}
                    placeholder="رقم عروض السعر"
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    العميل
                  </Label>
                  <Select value={customer} onValueChange={setCustomer}>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="اختر العميل" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="اللكنز"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        اللكنز
                      </SelectItem>
                      <SelectItem
                        value="شركة التمويل العربية"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        شركة التمويل العربية
                      </SelectItem>
                      <SelectItem
                        value="شركة مركز العربية"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        شركة مركز العربية
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    التاريخ
                  </Label>
                  <Input
                    type="date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    تاريخ التسليم المتوقع
                  </Label>
                  <Input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    الفرع
                  </Label>
                  <Select value={branch} onValueChange={setBranch}>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="الفرع" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="الرياض"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        الرياض
                      </SelectItem>
                      <SelectItem
                        value="جدة"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        جدة
                      </SelectItem>
                      <SelectItem
                        value="الدمام"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        الدمام
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    مندوب المبيعات
                  </Label>
                  <Select value={assignedTo} onValueChange={setAssignedTo}>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="اختر المسؤول" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="سالم"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        سالم
                      </SelectItem>
                      <SelectItem
                        value="عبد الرحمن المجيدة"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        عبد الرحمن المجيدة
                      </SelectItem>
                      <SelectItem
                        value="العبدي"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        العبدي
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>

          {/* البنود */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <SectionHeader title="بنود الطلب والتكاليب" section="items" />
            {sectionsExpanded.items && (
              <div className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-12 gap-3 text-sm font-medium text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] pb-2 border-b">
                    <div className="col-span-2 text-center">كود المادة / الصنف</div>
                    <div className="col-span-2">وصف المادة</div>
                    <div className="col-span-1 text-center">الوحدة</div>
                    <div className="col-span-1 text-center">الكمية</div>
                    <div className="col-span-1 text-center">السعر الإجمالي</div>
                    <div className="col-span-2 text-center">السعر الإفرادي</div>
                    <div className="col-span-2 text-center">السعر الإجمالي بعد الضريبة</div>
                    <div className="col-span-1 text-center">عمليات</div>
                  </div>

                  {items.map((item, index) => (
                    <div key={item.id} className="grid grid-cols-12 gap-3 items-center">
                      <div className="col-span-2">
                        <Input
                          value={item.itemName}
                          onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                          placeholder="AS220-SD"
                          className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          value={item.itemName}
                          onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                          placeholder="تجليد حساسية إلى تجربة"
                          className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                        />
                      </div>
                      <div className="col-span-1">
                        <Select value="كيلو" onValueChange={() => {}}>
                          <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                            <SelectValue placeholder="كيلو" />
                          </SelectTrigger>
                          <SelectContent className="[direction:rtl]">
                            <SelectItem value="كيلو" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">كيلو</SelectItem>
                            <SelectItem value="المتوج" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">المتوج</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-1">
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleItemChange(index, 'quantity', Number(e.target.value))
                          }
                          className="text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </div>
                      <div className="col-span-1">
                        <Input
                          type="number"
                          step="0.01"
                          value={item.unitPrice * item.quantity}
                          readOnly
                          className="text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica] bg-gray-50"
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          type="number"
                          step="0.01"
                          value={item.unitPrice}
                          onChange={(e) =>
                            handleItemChange(index, 'unitPrice', Number(e.target.value))
                          }
                          className="text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="text-center font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center justify-center gap-1">
                          {item.total.toFixed(2)}
                          <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <button
                          type="button"
                          onClick={() => removeItem(index)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                          disabled={items.length === 1}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  type="button"
                  onClick={addItem}
                  className={`${buttonClasses.secondary} mt-4 gap-2`}
                >
                  <Plus className="w-4 h-4" />
                  إضافة بند
                </Button>

                {/* الخصم */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24] mb-3">الخصم</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                        المخصم
                      </Label>
                      <Select value={discountType} onValueChange={setDiscountType}>
                        <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                          <SelectValue placeholder="الإجمالي قبل الضريبة" />
                        </SelectTrigger>
                        <SelectContent className="[direction:rtl]">
                          <SelectItem value="percentage" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">الإجمالي قبل الضريبة</SelectItem>
                          <SelectItem value="fixed" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">الإجمالي بعد الضريبة</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                        نسبة الخصم
                      </Label>
                      <Input
                        type="number"
                        value={discountValue}
                        onChange={(e) => setDiscountValue(Number(e.target.value))}
                        placeholder="15%"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                        قيمة الخصم
                      </Label>
                      <Input
                        type="text"
                        value="20 ريال"
                        readOnly
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <div className="w-full max-w-md space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <span className="text-[#00000099]">إجمالي الفاتورة</span>
                      <span className="font-medium flex items-center gap-1">{totals.subtotal.toFixed(2)}<img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" /></span>
                    </div>
                    <div className="flex justify-between text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <span className="text-[#00000099]">قيمة الضريبة</span>
                      <span className="font-medium flex items-center gap-1">{totals.taxAmount.toFixed(2)}<img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" /></span>
                    </div>
                    <div className="flex justify-between text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <span className="text-[#00000099]">إجمالي الخصمية</span>
                      <span className="font-medium flex items-center gap-1">
                        {totals.totalDiscount.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] pt-3 border-t">
                      <span>لنهاية شامل الضريبة</span>
                      <span className="flex items-center gap-1">{totals.total.toFixed(2)}<img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" /></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* الملاحظات العامة */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <SectionHeader title="للملاحظات العامة" section="notes" />
            {sectionsExpanded.notes && (
              <div className="p-6">
                <Textarea
                  value={notes}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setNotes(e.target.value)
                  }
                  placeholder="اكتب الملاحظات هنا..."
                  rows={4}
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] resize-none"
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};
