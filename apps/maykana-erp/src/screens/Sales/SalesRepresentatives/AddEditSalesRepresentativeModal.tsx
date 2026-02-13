import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { buttonClasses } from '@/styles';
import { X, Plus, Trash2 } from 'lucide-react';
import type { SalesRepresentative, SalesRepresentativeItem } from '@/data/sales/sales-representatives.data';

interface AddEditSalesRepresentativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  representative: SalesRepresentative | null;
  onSave: (representative: SalesRepresentative) => void;
}

export const AddEditSalesRepresentativeModal = ({
  isOpen,
  onClose,
  representative,
  onSave,
}: AddEditSalesRepresentativeModalProps): JSX.Element | null => {
  const [formData, setFormData] = useState<Partial<SalesRepresentative>>({
    name: '',
    nameEn: '',
    nationality: '',
    mobileNumber: '+966',
    email: '',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: true,
    itemGroup: 'أيفون',
    items: [],
  });

  useEffect(() => {
    if (representative) {
      setFormData(representative);
    } else {
      setFormData({
        name: '',
        nameEn: '',
        nationality: '',
        mobileNumber: '+966',
        email: '',
        invoiceCommission: true,
        invoiceCommissionPercentage: 15,
        itemCommission: true,
        itemGroup: 'أيفون',
        items: [],
      });
    }
  }, [representative, isOpen]);

  const handleInputChange = (field: keyof SalesRepresentative, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddItem = () => {
    const newItem: SalesRepresentativeItem = {
      id: (formData.items?.length || 0) + 1,
      jobName: 'أحمد الخالدي',
      itemCode: 'هاتف أيفون',
      date: new Date().toISOString().split('T')[0],
      percentage: 15,
    };
    setFormData((prev) => ({
      ...prev,
      items: [...(prev.items || []), newItem],
    }));
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = formData.items?.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, items: updatedItems }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.mobileNumber) {
      alert('يرجى تعبئة جميع الحقول المطلوبة');
      return;
    }

    onSave(formData as SalesRepresentative);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Side Modal */}
      <div className="fixed left-0 top-0 h-full w-full max-w-[450px] bg-white shadow-2xl z-50 [direction:rtl] flex flex-col">
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
            <h2 className="text-xl font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
              {representative ? 'تعديل مندوب' : 'اسم المندوب'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
            {/* اسم المندوب */}
            <div>
              <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                اسم المندوب
              </label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="اسم المندوب"
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
              />
            </div>

            {/* اسم المندوب بالإنجليزي */}
            <div>
              <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                اسم المندوب
              </label>
              <Input
                value={formData.nameEn}
                onChange={(e) => handleInputChange('nameEn', e.target.value)}
                placeholder="Name in English"
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
              />
            </div>

            {/* رقم الهاتف */}
            <div>
              <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                رقم الهاتف
              </label>
              <div className="flex gap-2">
                <div className="w-20">
                  <Input
                    value="+966"
                    disabled
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center"
                  />
                </div>
                <Input
                  value={formData.mobileNumber?.replace('+966', '')}
                  onChange={(e) => handleInputChange('mobileNumber', '+966' + e.target.value)}
                  placeholder="5xxxxxxxx"
                  className="flex-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
                />
              </div>
            </div>

            {/* رقم الهاتف (مكرر) */}
            <div>
              <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                رقم الهاتف
              </label>
              <Input
                value={formData.mobileNumber}
                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                placeholder="+966xxxxxxxxx"
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
              />
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                البريد الإلكتروني
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="email@example.com"
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
              />
            </div>

            {/* البريد الإلكتروني (مكرر) */}
            <div>
              <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                البريد الإلكتروني
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="email@example.com"
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
              />
            </div>

            {/* عمولة على الفاتورة */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                عمولة على الفاتورة
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.invoiceCommission}
                  onChange={(e) => handleInputChange('invoiceCommission', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                <span className="mr-3 text-sm font-medium text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  نعم
                </span>
              </label>
            </div>

            {/* نسبة العمولة % */}
            <div>
              <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                نسبة العمولة %
              </label>
              <Input
                type="number"
                value={formData.invoiceCommissionPercentage}
                onChange={(e) => handleInputChange('invoiceCommissionPercentage', parseFloat(e.target.value) || 0)}
                placeholder="15"
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] text-right"
              />
            </div>

            {/* نسبة العمولة % (مكرر) */}
            <div>
              <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                نسبة العمولة %
              </label>
              <Select
                value={formData.invoiceCommissionPercentage?.toString()}
                onValueChange={(value) => handleInputChange('invoiceCommissionPercentage', parseFloat(value))}
              >
                <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="[direction:rtl]">
                  <SelectItem value="5" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    5 %
                  </SelectItem>
                  <SelectItem value="10" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    10 %
                  </SelectItem>
                  <SelectItem value="15" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    15 %
                  </SelectItem>
                  <SelectItem value="20" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    20 %
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* عمولة على الأصناف */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                عمولة على الأصناف
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.itemCommission}
                  onChange={(e) => handleInputChange('itemCommission', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                <span className="mr-3 text-sm font-medium text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  نعم
                </span>
              </label>
            </div>

            {/* مجموعة الأصناف */}
            {formData.itemCommission && (
              <div>
                <label className="block text-sm font-medium mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  مجموعة الأصناف
                </label>
                <Select
                  value={formData.itemGroup}
                  onValueChange={(value) => handleInputChange('itemGroup', value)}
                >
                  <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="[direction:rtl]">
                    <SelectItem value="أيفون" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      أيفون
                    </SelectItem>
                    <SelectItem value="سامسونج" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      سامسونج
                    </SelectItem>
                    <SelectItem value="إلكترونيات" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      إلكترونيات
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* جدول الأصناف */}
            {formData.itemCommission && (
              <div className="border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gray-50">
                  <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الأصناف
                  </span>
                  <Button
                    onClick={handleAddItem}
                    className={`${buttonClasses.primary} h-8 px-3 text-xs gap-1`}
                  >
                    <Plus className="w-3 h-3" />
                    إضافة صنف
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="p-2 text-right text-xs font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          اسم الوظيفة
                        </th>
                        <th className="p-2 text-right text-xs font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          كود الصنف
                        </th>
                        <th className="p-2 text-right text-xs font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          التاريخ
                        </th>
                        <th className="p-2 text-right text-xs font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          النسبة
                        </th>
                        <th className="p-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.items && formData.items.length > 0 ? (
                        formData.items.map((item, index) => (
                          <tr key={item.id} className="border-b border-gray-200">
                            <td className="p-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {item.jobName}
                            </td>
                            <td className="p-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {item.itemCode}
                            </td>
                            <td className="p-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                              {item.date}
                            </td>
                            <td className="p-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {item.percentage} %
                            </td>
                            <td className="p-2">
                              <button
                                onClick={() => handleDeleteItem(index)}
                                className="p-1 hover:bg-red-50 rounded text-red-600"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="p-4 text-center text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                            لا توجد أصناف
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-3 p-4 border-t border-gray-200 bg-white">
            <Button onClick={onClose} className={buttonClasses.secondary}>
              إلغاء
            </Button>
            <Button onClick={handleSubmit} className={buttonClasses.primary}>
              حفظ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
