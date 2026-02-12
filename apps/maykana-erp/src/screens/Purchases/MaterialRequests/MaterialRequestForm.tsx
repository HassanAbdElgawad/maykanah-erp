import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Search,
  Plus,
  Trash2,
  X,
  ArrowRight,
  Columns3,
  Paperclip
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Material Item interface
interface MaterialItem {
  id: number;
  rowNumber: number;
  materialName: string;
  materialCode: string;
  unit: string;
  quantity: number;
  description: string;
  inventory: string;
  costCenter: string;
}

// Mock data for dropdowns
const UNITS = ['قطعة', 'متر', 'كيلو', 'طن', 'لتر', 'علبة', 'كرتون'];
const INVENTORIES = ['مخزون', 'مخزون رئيسي', 'مخزون فرعي'];
const COST_CENTERS = ['مركز تكلفة - 1111', 'مركز تكلفة - 1211', 'مركز تكلفة - 2222'];

// Mock materials for search
const MOCK_MATERIALS = [
  { code: 'K1220-50', name: 'حديد تسليح جديدة' },
  { code: 'ACMY-9985', name: 'وحدة بناء جديدة' },
  { code: 'MTR-001', name: 'اسمنت بورتلاندي' },
  { code: 'MTR-002', name: 'رمل ناعم' },
  { code: 'MTR-003', name: 'بلوك خرساني' },
];

export const MaterialRequestForm = (): JSX.Element => {
  const navigate = useNavigate();

  // Form state
  const [notes, setNotes] = useState('');

  // Items state
  const [items, setItems] = useState<MaterialItem[]>([
    {
      id: 1,
      rowNumber: 1,
      materialName: 'حديد تسليح جديدة',
      materialCode: 'K1220-50',
      unit: 'طن',
      quantity: 1,
      description: 'وصف عام',
      inventory: 'مخزون',
      costCenter: 'مركز تكلفة - 1111'
    },
    {
      id: 2,
      rowNumber: 2,
      materialName: 'وحدة بناء جديدة',
      materialCode: 'ACMY-9985',
      unit: 'قطعة',
      quantity: 2,
      description: 'وصف عام',
      inventory: 'مخزون',
      costCenter: 'مركز تكلفة - 1111'
    }
  ]);

  // Material search modal
  const [showMaterialSearch, setShowMaterialSearch] = useState(false);
  const [materialSearchQuery, setMaterialSearchQuery] = useState('');

  // Attachments count
  const [attachmentsCount] = useState(0);

  // Show/hide columns
  const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);

  const handleAddItem = () => {
    const newItem: MaterialItem = {
      id: Date.now(),
      rowNumber: items.length + 1,
      materialName: '',
      materialCode: '',
      unit: 'قطعة',
      quantity: 1,
      description: '',
      inventory: 'مخزون',
      costCenter: 'مركز تكلفة - 1111'
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id).map((item, index) => ({
      ...item,
      rowNumber: index + 1
    })));
  };

  const handleItemChange = (id: number, field: keyof MaterialItem, value: string | number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSelectMaterial = (material: { code: string; name: string }, itemId: number) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, materialName: material.name, materialCode: material.code } : item
    ));
    setShowMaterialSearch(false);
    setMaterialSearchQuery('');
  };

  const handleSave = () => {
    // Mock save - in real app would call API
    alert('تم حفظ طلب المواد بنجاح');
    navigate('/purchases/material-requests');
  };

  const handleCancel = () => {
    navigate('/purchases/material-requests');
  };

  const filteredMaterials = MOCK_MATERIALS.filter(m =>
    m.name.includes(materialSearchQuery) || m.code.includes(materialSearchQuery)
  );

  return (
    <Layout>
      <div className="relative" dir="rtl">
        {/* Header Bar - Matching the design exactly */}
        <div className="flex items-center justify-between bg-white border border-[#e2e2e2] rounded-xl px-6 py-4 mb-6">
          {/* Right side - Back arrow and title */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCancel}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-base font-medium text-[#092e32] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              إنشاء طلب مواد جديد
            </h1>
          </div>

          {/* Left side - Actions */}
          <div className="flex items-center gap-4">
            {/* Dashed separator */}
            <div className="h-6 border-r border-dashed border-gray-300"></div>

            {/* Show/Hide Columns */}
            <button
              onClick={() => setShowColumnsDropdown(!showColumnsDropdown)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Columns3 className="w-4 h-4" />
              <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">إظهار/إخفاء أعمدة</span>
            </button>

            {/* Add Attachments */}
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Paperclip className="w-4 h-4" />
              <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">أضف مرفقات</span>
              <span className="text-sm text-gray-400">{attachmentsCount}</span>
            </button>

            {/* Submit Button */}
            <Button
              onClick={handleSave}
              className="h-9 px-5 bg-[#093738] hover:bg-[#093738]/90 text-white rounded-md [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
            >
              ارسل الطلب
            </Button>
          </div>
        </div>

        {/* Items Table Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden mb-6">
          {/* Table Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#e2e2e2] bg-[#f8f9fa]">
            <h2 className="text-base font-semibold text-[#092e32] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              جدول الطلب
            </h2>
            <Button
              onClick={handleAddItem}
              className="h-9 px-3 bg-[#093738] hover:bg-[#093738]/90 text-white gap-2 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
            >
              <Plus className="w-4 h-4" />
              إضافة مادة
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8f9fa] border-b border-[#e2e2e2]">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-12">
                    م
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم المادة / الصنف
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-24">
                    الوحدة
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-24">
                    الكمية
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الوصف
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-32">
                    مخزون
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-40">
                    مركز تكلفة
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-16">
                    إجراء
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    {/* Row Number */}
                    <td className="px-4 py-3 text-right text-sm text-[#374151] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.rowNumber}
                    </td>

                    {/* Material Name */}
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <Input
                          type="text"
                          placeholder="اسم المادة"
                          value={item.materialName}
                          onChange={(e) => handleItemChange(item.id, 'materialName', e.target.value)}
                          className="h-9 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                        <span className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {item.materialCode || 'INV-XXXX'}
                        </span>
                      </div>
                    </td>

                    {/* Unit */}
                    <td className="px-4 py-3">
                      <Select
                        value={item.unit}
                        onValueChange={(value) => handleItemChange(item.id, 'unit', value)}
                        dir="rtl"
                      >
                        <SelectTrigger className="h-9 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {UNITS.map(unit => (
                            <SelectItem key={unit} value={unit} className="text-right">
                              {unit}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>

                    {/* Quantity */}
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(item.id, 'quantity', parseInt(e.target.value) || 1)}
                        className="h-9 text-sm text-center"
                      />
                    </td>

                    {/* Description */}
                    <td className="px-4 py-3">
                      <Input
                        type="text"
                        placeholder="الوصف"
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                        className="h-9 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </td>

                    {/* Inventory */}
                    <td className="px-4 py-3">
                      <Select
                        value={item.inventory}
                        onValueChange={(value) => handleItemChange(item.id, 'inventory', value)}
                        dir="rtl"
                      >
                        <SelectTrigger className="h-9 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {INVENTORIES.map(inv => (
                            <SelectItem key={inv} value={inv} className="text-right">
                              {inv}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>

                    {/* Cost Center */}
                    <td className="px-4 py-3">
                      <Select
                        value={item.costCenter}
                        onValueChange={(value) => handleItemChange(item.id, 'costCenter', value)}
                        dir="rtl"
                      >
                        <SelectTrigger className="h-9 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {COST_CENTERS.map(cc => (
                            <SelectItem key={cc} value={cc} className="text-right">
                              {cc}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-500 hover:text-red-600"
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

          {/* Add Item Button (Below Table) */}
          <div className="p-4 border-t border-[#e2e2e2]">
            <button
              onClick={handleAddItem}
              className="flex items-center gap-2 text-[#093738] hover:text-[#093738]/80 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
            >
              <Plus className="w-4 h-4" />
              إضافة على مستوى المادة
            </button>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6 mb-6">
          <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm mb-2 block text-gray-700">
            ملاحظات على مستوى المادة
          </label>
          <textarea
            placeholder="أضف ملاحظاتك هنا..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full min-h-[100px] px-3 py-2 border border-[#e2e2e2] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#093738]/20 focus:border-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
          />
        </div>

        {/* Footer Actions */}
        {/* <div className="flex items-center justify-start gap-3"> */}
        {/*   <Button */}
        {/*     onClick={handleCancel} */}
        {/*     className="h-10 px-5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm" */}
        {/*   > */}
        {/*     إلغاء */}
        {/*   </Button> */}
        {/*   <Button */}
        {/*     onClick={handleSave} */}
        {/*     className="h-10 px-5 bg-[#093738] hover:bg-[#093738]/90 text-white rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm" */}
        {/*   > */}
        {/*     حفظ الطلب */}
        {/*   </Button> */}
        {/* </div> */}

        {/* Material Search Modal */}
        {showMaterialSearch && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowMaterialSearch(false)}
            />
            <div
              dir="rtl"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] bg-white rounded-xl shadow-2xl z-50"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  البحث عن مادة
                </h3>
                <button
                  onClick={() => setShowMaterialSearch(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="relative mb-4">
                  <Input
                    type="text"
                    placeholder="ابحث عن المادة بالاسم أو الرمز..."
                    value={materialSearchQuery}
                    onChange={(e) => setMaterialSearchQuery(e.target.value)}
                    className="pr-10 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  />
                  <Search className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-gray-400" />
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {filteredMaterials.map(material => (
                    <button
                      key={material.code}
                      onClick={() => handleSelectMaterial(material, 0)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">{material.name}</span>
                      <span className="text-sm text-gray-500">{material.code}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
