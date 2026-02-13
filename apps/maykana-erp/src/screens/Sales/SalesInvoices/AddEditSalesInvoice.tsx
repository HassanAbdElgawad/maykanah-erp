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
import { useSalesInvoicesData } from '@/hooks/useSalesInvoicesData';
import type { SalesInvoice, SalesInvoiceItem } from '@/data/sales/sales-invoices.data';

export const AddEditSalesInvoice = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { salesInvoices, setSalesInvoices } = useSalesInvoicesData();
  const isEditMode = !!id;

  const [formData, setFormData] = useState<Omit<SalesInvoice, 'id'>>({
    invoiceNumber: '',
    customer: '',
    issueDate: '',
    branch: '',
    salesRep: '',
    currency: 'ر.س',
    paymentMethod: '',
    taxNumber: '',
    status: 'unpaid',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
    notes: '',
    discountType: 'percentage',
    discountValue: 0,
  });

  const [items, setItems] = useState<SalesInvoiceItem[]>([
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

  const [showInvoiceInfo, setShowInvoiceInfo] = useState(true);
  const [showItems, setShowItems] = useState(true);
  const [showDiscount, setShowDiscount] = useState(true);
  const [showNotes, setShowNotes] = useState(true);

  useEffect(() => {
    if (isEditMode && id) {
      const invoice = salesInvoices.find((inv) => inv.id === Number(id));
      if (invoice) {
        setFormData(invoice);
        setItems(invoice.items);
      }
    }
  }, [id, isEditMode, salesInvoices]);

  const calculateItemTotal = (item: SalesInvoiceItem): number => {
    const subtotal = item.quantity * item.unitPrice;
    const discountAmount = (subtotal * item.discount) / 100;
    const afterDiscount = subtotal - discountAmount;
    const taxAmount = (afterDiscount * item.tax) / 100;
    return afterDiscount + taxAmount;
  };

  const handleItemChange = (
    index: number,
    field: keyof SalesInvoiceItem,
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

  const updateTotals = (currentItems: SalesInvoiceItem[]) => {
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
      invoiceDiscount = (afterDiscount * (formData.discountValue || 0)) / 100;
    } else {
      invoiceDiscount = formData.discountValue || 0;
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
    const newItem: SalesInvoiceItem = {
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

    const invoiceData: SalesInvoice = {
      ...formData,
      id: isEditMode ? Number(id) : Math.max(...salesInvoices.map((inv) => inv.id)) + 1,
      items,
    };

    if (isEditMode) {
      setSalesInvoices(
        salesInvoices.map((inv) => (inv.id === Number(id) ? invoiceData : inv))
      );
    } else {
      setSalesInvoices([...salesInvoices, invoiceData]);
    }

    navigate('/sales/sales-invoices');
  };

  const handleCancel = () => {
    navigate('/sales/sales-invoices');
  };

  return (
    <Layout>
      <div className="[direction:rtl]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => navigate('/sales/sales-invoices')} 
              className="w-11 h-11 p-0 bg-white text-[#0e0d24] border border-[#e2e2e2] hover:bg-gray-50 rounded-lg shadow-[0px_4px_4px_#0000001a] flex items-center justify-center"
              type="button"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
              {isEditMode ? 'تعديل فاتورة المبيعات' : 'فاتورة مبيعات'}
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
              className={`${buttonClasses.primary} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
            >
              {isEditMode ? 'تحديث الفاتورة' : 'حفظ الفاتورة'}
            </Button>
          </div>
        </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* معلومات الفاتورة */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={() => setShowInvoiceInfo(!showInvoiceInfo)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              معلومات الفاتورة
            </h2>
            {showInvoiceInfo ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {showInvoiceInfo && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  رقم الفاتورة <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={formData.invoiceNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, invoiceNumber: e.target.value })
                  }
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  تاريخ الإصدار <span className="text-red-500">*</span>
                </label>
                <Input
                  type="date"
                  value={formData.issueDate}
                  onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
                  required
                />
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
                    <SelectItem
                      value="مؤسسة البناء المتطور"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      مؤسسة البناء المتطور
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  الفرع ومركز التكلفة <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.branch}
                  onValueChange={(value) => setFormData({ ...formData, branch: value })}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue placeholder="اختر الفرع" />
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

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  مندوب المبيعات <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.salesRep}
                  onValueChange={(value) => setFormData({ ...formData, salesRep: value })}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue placeholder="اختر المندوب" />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem
                      value="أحمد محمد"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      أحمد محمد
                    </SelectItem>
                    <SelectItem
                      value="خالد أحمد"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      خالد أحمد
                    </SelectItem>
                    <SelectItem
                      value="محمد علي"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      محمد علي
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  العملة <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.currency}
                  onValueChange={(value) => setFormData({ ...formData, currency: value })}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem
                      value="ر.س"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      ريال سعودي (ر.س)
                    </SelectItem>
                    <SelectItem
                      value="$"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      دولار أمريكي ($)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  طريق الدفع <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.paymentMethod}
                  onValueChange={(value) =>
                    setFormData({ ...formData, paymentMethod: value })
                  }
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue placeholder="اختر طريقة الدفع" />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem
                      value="آجل"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      آجل
                    </SelectItem>
                    <SelectItem
                      value="بنك"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      بنك
                    </SelectItem>
                    <SelectItem
                      value="صندوق"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      صندوق
                    </SelectItem>
                    <SelectItem
                      value="شيك"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      شيك
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  الرقم الضريبي
                </label>
                <Input
                  type="text"
                  value={formData.taxNumber}
                  onChange={(e) => setFormData({ ...formData, taxNumber: e.target.value })}
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  placeholder="300000000000003"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  الحالة <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.status}
                  onValueChange={(value: any) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem
                      value="paid"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      مدفوعة
                    </SelectItem>
                    <SelectItem
                      value="unpaid"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      غير مدفوعة
                    </SelectItem>
                    <SelectItem
                      value="partial"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      مدفوعة جزئياً
                    </SelectItem>
                    <SelectItem
                      value="cancelled"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      ملغية
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* بنود الطلب والتكاليب */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={() => setShowItems(!showItems)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              بنود الطلب والتكاليب
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
                        كود المادة/الصنف
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
                        الخصم %
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الضريبة %
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        السعر الإجمالي
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
                              <SelectItem
                                value="متر"
                                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                متر
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
                            value={item.discount}
                            onChange={(e) =>
                              handleItemChange(index, 'discount', Number(e.target.value))
                            }
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                            min="0"
                            max="100"
                            step="0.01"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            type="number"
                            value={item.tax}
                            onChange={(e) =>
                              handleItemChange(index, 'tax', Number(e.target.value))
                            }
                            className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                            min="0"
                            max="100"
                            step="0.01"
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

              {/* الإجماليات */}
              <div className="mt-6 border-t pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div></div>
                  <div className="space-y-3 [direction:rtl]">
                    <div className="flex justify-between items-center">
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        إجمالي الفاتورة:
                      </span>
                      <span className="font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-1">
                        {formData.subtotal.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        قيمة الضريبة:
                      </span>
                      <span className="font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-1">
                        {formData.taxAmount.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        إجمالي الخصمية:
                      </span>
                      <span className="font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-1">
                        {formData.discount.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3">
                      <span className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        النهاية شامل الضريبة:
                      </span>
                      <span className="text-lg font-bold text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-1">
                        {formData.total.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
