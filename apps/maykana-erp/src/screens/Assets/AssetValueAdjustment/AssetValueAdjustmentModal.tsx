import React, { useState, useEffect } from 'react';
import { X, Upload, Download } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { TogglerWithLabel } from '../../../components/ui/TogglerWithLabel';
import { useLanguage } from '../../../contexts/LanguageContext';

interface AssetValueAdjustmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  asset: any;
}

export function AssetValueAdjustmentModal({
  isOpen,
  onClose,
  asset,
}: AssetValueAdjustmentModalProps) {
  const { dir } = useLanguage();
  
  const [formData, setFormData] = useState({
    currentValue: 6790,
    newValue: 9790,
    adjustmentAmount: 3000,
    adjustmentType: '',
    adjustmentDate: '30/11/2025',
    isIncrease: true,
    deprecationConfirm: false,
    adjustmentReason: '',
    valueIncrease: '',
    attachments: [] as File[],
  });

  useEffect(() => {
    if (asset) {
      setFormData({
        currentValue: asset.previousValue,
        newValue: asset.newValue,
        adjustmentAmount: Math.abs(asset.difference),
        adjustmentType: asset.adjustmentType,
        adjustmentDate: asset.date,
        isIncrease: asset.difference >= 0,
        deprecationConfirm: false,
        adjustmentReason: '',
        valueIncrease: '',
        attachments: [],
      });
    }
  }, [asset]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        attachments: [...formData.attachments, ...Array.from(e.target.files)],
      });
    }
  };

  const handleRemoveFile = (index: number) => {
    setFormData({
      ...formData,
      attachments: formData.attachments.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = () => {
    console.log('Submitting adjustment:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${
          dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''
        }`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-xl font-semibold text-gray-900">تعديل قيمة الأصل</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Row 1: Current Value & New Value */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">القيمة الحالية</Label>
              <Input
                type="text"
                value={formData.currentValue.toLocaleString('en-US')}
                onChange={(e) =>
                  setFormData({ ...formData, currentValue: parseInt(e.target.value.replace(/,/g, '')) || 0 })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">القيمة الجديدة</Label>
              <Input
                type="text"
                value={formData.newValue.toLocaleString('en-US')}
                onChange={(e) =>
                  setFormData({ ...formData, newValue: parseInt(e.target.value.replace(/,/g, '')) || 0 })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Row 2: Adjustment Amount & Adjustment Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">مقدار التعديل</Label>
              <Input
                type="text"
                value={formData.adjustmentAmount.toLocaleString('en-US')}
                onChange={(e) =>
                  setFormData({ ...formData, adjustmentAmount: parseInt(e.target.value.replace(/,/g, '')) || 0 })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">نوع التعديل</Label>
              <Input
                type="text"
                value={formData.adjustmentType}
                onChange={(e) =>
                  setFormData({ ...formData, adjustmentType: e.target.value })
                }
                placeholder="اختر نوع التعديل"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Row 3: Date (half width, aligned right in RTL) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">تاريخ التعديل</Label>
              <Input
                type="date"
                value={formData.adjustmentDate}
                onChange={(e) =>
                  setFormData({ ...formData, adjustmentDate: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div></div>
          </div>

          {/* Depreciation Effect Toggle */}
          <div className='flex justify-between items-center'>
            <Label className="text-sm text-gray-700">التأثير على الإهلاك</Label>
            <TogglerWithLabel
              isActive={formData.isIncrease}
              onToggle={() => setFormData({ ...formData, isIncrease: !formData.isIncrease })}
              activeLabel="نعم"
              inactiveLabel="لا"
              size="md"
            />
          </div>

          {/* Adjustment Reason */}
          <div>
            <Label className="text-sm text-gray-700 mb-2 block">سبب التعديل</Label>
            <textarea
              value={formData.adjustmentReason}
              onChange={(e) =>
                setFormData({ ...formData, adjustmentReason: e.target.value })
              }
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none"
              placeholder="أدخل سبب التعديل"
            />
          </div>

          {/* File Upload */}
          <div>
            <Label className="text-sm text-gray-700 mb-2 block">صور أو مرفقات</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">سحب وإفلات أو اضغط للتحميل</p>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="text-sm text-[#11383f] hover:underline cursor-pointer"
              >
                اختر ملف
              </label>
            </div>

            {/* Uploaded Files */}
            {formData.attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                {formData.attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(2)} KB
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 sticky bottom-0 bg-white">
          <Button
            onClick={onClose}
            variant="outline"
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            إلغاء
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
          >
            حفظ التعديل
          </Button>
        </div>
      </div>
    </div>
  );
}
