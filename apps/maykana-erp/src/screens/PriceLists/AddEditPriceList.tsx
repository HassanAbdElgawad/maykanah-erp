import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { buttonClasses } from '../../styles';
import { ArrowRight, ChevronUp, ChevronDown, Plus, Trash2 } from 'lucide-react';
import { usePriceListsData } from '../../hooks/usePriceListsData';
import type { PriceList, PriceListItem, PriceListType } from '../../data/price-lists.data';

export const AddEditPriceList = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { priceLists, setPriceLists } = usePriceListsData();

  const [listInfoExpanded, setListInfoExpanded] = useState(true);
  const [itemsExpanded, setItemsExpanded] = useState(true);

  const [formData, setFormData] = useState<Partial<PriceList>>({
    listNumber: '',
    listName: '',
    listType: 'sales',
    currency: 'ريال سعودي',
    description: '',
    items: [],
    createdDate: new Date().toISOString().split('T')[0],
    isActive: true,
  });

  useEffect(() => {
    if (id) {
      const list = priceLists.find((l) => l.id === parseInt(id));
      if (list) {
        setFormData(list);
      }
    } else {
      const nextNumber = priceLists.length + 1;
      setFormData((prev) => ({
        ...prev,
        listNumber: `PL-2025-${String(nextNumber).padStart(3, '0')}`,
      }));
    }
  }, [id, priceLists]);

  const handleInputChange = (field: keyof PriceList, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddItem = () => {
    const newItem: PriceListItem = {
      id: (formData.items?.length || 0) + 1,
      itemCode: '',
      itemName: '',
      unit: '',
      unitPrice: 0,
      discount: 0,
      tax: 15,
      totalPrice: 0,
    };
    setFormData((prev) => ({
      ...prev,
      items: [...(prev.items || []), newItem],
    }));
  };

  const handleItemChange = (index: number, field: keyof PriceListItem, value: any) => {
    const updatedItems = [...(formData.items || [])];
    updatedItems[index] = { ...updatedItems[index], [field]: value };

    // Calculate total price
    const item = updatedItems[index];
    const subtotal = item.unitPrice;
    const discountAmount = (subtotal * item.discount) / 100;
    const afterDiscount = subtotal - discountAmount;
    const taxAmount = (afterDiscount * item.tax) / 100;
    item.totalPrice = afterDiscount + taxAmount;

    setFormData((prev) => ({ ...prev, items: updatedItems }));
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = formData.items?.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, items: updatedItems }));
  };

  const calculateTotals = () => {
    const items = formData.items || [];
    const subtotal = items.reduce((sum, item) => sum + item.unitPrice, 0);
    const totalDiscount = items.reduce(
      (sum, item) => sum + (item.unitPrice * item.discount) / 100,
      0
    );
    const totalTax = items.reduce((sum, item) => {
      const afterDiscount = item.unitPrice - (item.unitPrice * item.discount) / 100;
      return sum + (afterDiscount * item.tax) / 100;
    }, 0);
    const total = items.reduce((sum, item) => sum + item.totalPrice, 0);

    return { subtotal, totalDiscount, totalTax, total };
  };

  const handleSubmit = () => {
    if (!formData.listName || !formData.listType) {
      alert('يرجى تعبئة جميع الحقول المطلوبة');
      return;
    }

    if (id) {
      setPriceLists(
        priceLists.map((list) =>
          list.id === parseInt(id) ? { ...list, ...formData } as PriceList : list
        )
      );
    } else {
      const newList: PriceList = {
        ...(formData as PriceList),
        id: Math.max(...priceLists.map((l) => l.id), 0) + 1,
      };
      setPriceLists([...priceLists, newList]);
    }

    navigate('/sales/price-lists');
  };

  const handleCancel = () => {
    navigate('/sales/price-lists');
  };

  const totals = calculateTotals();

  return (
    <Layout>
      <div className="[direction:rtl]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <button
              onClick={handleCancel}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
              {id ? 'تعديل قائمة أسعار' : 'إضافة قائمة أسعار جديدة'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handleCancel} className={buttonClasses.secondary}>
              إلغاء
            </Button>
            <Button onClick={handleSubmit} className={buttonClasses.primary}>
              حفظ
            </Button>
          </div>
        </div>

        {/* معلومات القائمة */}
        <div className="mb-6 bg-white rounded-lg border border-gray-200">
          <button
            onClick={() => setListInfoExpanded(!listInfoExpanded)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
              معلومات القائمة
            </h2>
            {listInfoExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {listInfoExpanded && (
            <div className="p-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    رقم القائمة
                  </label>
                  <Input
                    value={formData.listNumber}
                    onChange={(e) => handleInputChange('listNumber', e.target.value)}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم القائمة <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.listName}
                    onChange={(e) => handleInputChange('listName', e.target.value)}
                    placeholder="أدخل اسم القائمة"
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نوع القائمة <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.listType}
                    onValueChange={(value) => handleInputChange('listType', value as PriceListType)}
                  >
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="sales"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        مبيعات
                      </SelectItem>
                      <SelectItem
                        value="purchase"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        مشتريات
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    العملة
                  </label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) => handleInputChange('currency', value)}
                  >
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="ريال سعودي"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        ريال سعودي
                      </SelectItem>
                      <SelectItem
                        value="دولار أمريكي"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        دولار أمريكي
                      </SelectItem>
                      <SelectItem
                        value="يورو"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        يورو
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تاريخ الإنشاء
                  </label>
                  <Input
                    type="date"
                    value={formData.createdDate}
                    onChange={(e) => handleInputChange('createdDate', e.target.value)}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحالة
                  </label>
                  <Select
                    value={formData.isActive ? 'active' : 'inactive'}
                    onValueChange={(value) => handleInputChange('isActive', value === 'active')}
                  >
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="active"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        نشط
                      </SelectItem>
                      <SelectItem
                        value="inactive"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        غير نشط
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الوصف
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="أدخل وصف القائمة"
                    rows={3}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بنود الطلب */}
        <div className="mb-6 bg-white rounded-lg border border-gray-200">
          <button
            onClick={() => setItemsExpanded(!itemsExpanded)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
              بنود القائمة
            </h2>
            {itemsExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {itemsExpanded && (
            <div className="p-4 border-t border-gray-200">
              <div className="mb-4">
                <Button onClick={handleAddItem} className={`${buttonClasses.primary} gap-2`}>
                  <Plus className="w-4 h-4" />
                  إضافة صنف
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        كود الصنف
                      </th>
                      <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        اسم الصنف
                      </th>
                      <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الوحدة
                      </th>
                      <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        سعر الوحدة
                      </th>
                      <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الخصم %
                      </th>
                      <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الضريبة %
                      </th>
                      <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الإجمالي
                      </th>
                      <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        إجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.items && formData.items.length > 0 ? (
                      formData.items.map((item, index) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="p-2">
                            <Input
                              value={item.itemCode}
                              onChange={(e) => handleItemChange(index, 'itemCode', e.target.value)}
                              placeholder="كود"
                              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                            />
                          </td>
                          <td className="p-2">
                            <Input
                              value={item.itemName}
                              onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                              placeholder="اسم الصنف"
                              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                            />
                          </td>
                          <td className="p-2">
                            <Input
                              value={item.unit}
                              onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                              placeholder="وحدة"
                              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                            />
                          </td>
                          <td className="p-2">
                            <Input
                              type="number"
                              value={item.unitPrice}
                              onChange={(e) =>
                                handleItemChange(index, 'unitPrice', parseFloat(e.target.value) || 0)
                              }
                              placeholder="0.00"
                              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
                            />
                          </td>
                          <td className="p-2">
                            <Input
                              type="number"
                              value={item.discount}
                              onChange={(e) =>
                                handleItemChange(index, 'discount', parseFloat(e.target.value) || 0)
                              }
                              placeholder="0"
                              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
                            />
                          </td>
                          <td className="p-2">
                            <Input
                              type="number"
                              value={item.tax}
                              onChange={(e) =>
                                handleItemChange(index, 'tax', parseFloat(e.target.value) || 0)
                              }
                              placeholder="15"
                              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
                            />
                          </td>
                          <td className="p-2">
                            <div className="flex items-center gap-1 justify-end [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {item.totalPrice.toFixed(2)}
                              <img
                                src="/images/currency/saudi-riyal.svg"
                                alt="SAR"
                                className="w-4 h-4"
                              />
                            </div>
                          </td>
                          <td className="p-2">
                            <button
                              onClick={() => handleDeleteItem(index)}
                              className="p-2 hover:bg-red-50 rounded-lg text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-gray-500">
                          <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                            لا توجد أصناف. اضغط على "إضافة صنف" لإضافة أصناف جديدة.
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              {formData.items && formData.items.length > 0 && (
                <div className="mt-6 flex justify-end">
                  <div className="w-full max-w-md space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
                        المجموع الفرعي:
                      </span>
                      <div className="flex items-center gap-1 font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {totals.subtotal.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
                        إجمالي الخصم:
                      </span>
                      <div className="flex items-center gap-1 font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-red-600">
                        -{totals.totalDiscount.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
                        إجمالي الضريبة:
                      </span>
                      <div className="flex items-center gap-1 font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {totals.totalTax.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                      <span className="text-base font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الإجمالي النهائي:
                      </span>
                      <div className="flex items-center gap-1 text-lg font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
                        {totals.total.toFixed(2)}
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
