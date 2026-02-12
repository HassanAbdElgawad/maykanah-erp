import React, { useState, useEffect } from 'react';
import { X, Upload, Download, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';

interface SaleDisposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  operation: any;
}

export function SaleDisposalModal({ isOpen, onClose, operation }: SaleDisposalModalProps) {
  const { dir } = useLanguage();

  const [formData, setFormData] = useState({
    bookValue: 1200,
    disposalType: 'بيع',
    buyer: '',
    buyingCompany: 3000,
    date: '30/11/2025',
    disposalReason: 'بيع الأصل',
    salePrice: 2000,
    attachments: [] as File[],
  });

  useEffect(() => {
    if (operation) {
      setFormData({
        bookValue: operation.bookValue,
        disposalType: operation.type,
        buyer: '',
        buyingCompany: 3000,
        date: operation.date,
        disposalReason: operation.type === 'بيع' ? 'بيع الأصل' : 'استبعاد الأصل',
        salePrice: operation.salePrice || 0,
        attachments: [],
      });
    }
  }, [operation]);

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
    console.log('Submitting disposal operation:', formData);
    onClose();
  };

  const profitLoss = formData.salePrice - formData.bookValue;

  const formatCurrency = (value: number) => {
    return (
      <span className="flex items-center gap-1">
        {value.toLocaleString('en-US')}
        <img
          src="/images/currency/saudi-riyal.svg"
          alt="ريال سعودي"
          className="w-3.5 h-3.5"
          style={{ filter: 'brightness(0)' }}
        />
      </span>
    );
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
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
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
          {/* Row 1: Book Value & Disposal Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">القيمة الدفترية الحالية</Label>
              <Input
                type="text"
                value={`${formData.bookValue.toLocaleString('en-US')} ر.س`}
                disabled
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">نوع الاستبعاد</Label>
              <select
                value={formData.disposalType}
                onChange={(e) => setFormData({ ...formData, disposalType: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
              >
                <option value="بيع">بيع</option>
                <option value="تخريد">تخريد</option>
                <option value="تبرع">تبرع</option>
              </select>
            </div>
          </div>

          {/* Row 2: Buyer & Buying Company */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">المشتري</Label>
              <Input
                type="text"
                value={formData.buyer}
                onChange={(e) => setFormData({ ...formData, buyer: e.target.value })}
                placeholder="اختر المشتري"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">الشركة المشترية</Label>
              <Input
                type="text"
                value={formData.buyingCompany.toLocaleString('en-US')}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    buyingCompany: parseInt(e.target.value.replace(/,/g, '')) || 0,
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Row 3: Date (half width) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-gray-700 mb-2 block">التاريخ</Label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div></div>
          </div>

          {/* Disposal Reason */}
          <div>
            <Label className="text-sm text-gray-700 mb-2 block">سبب الاستبعاد</Label>
            <textarea
              value={formData.disposalReason}
              onChange={(e) => setFormData({ ...formData, disposalReason: e.target.value })}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none"
              placeholder="أدخل سبب الاستبعاد"
            />
          </div>

          {/* File Upload */}
          <div>
            <Label className="text-sm text-gray-700 mb-2 block">صور أو مرفقات</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">سحب وإفلات أو إضغط للتحميل</p>
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
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pre-existing file (from mockup) */}
            <div className="mt-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">فاتورة بيع.PDF</span>
                  <span className="text-xs text-gray-500">455 كيلوبايت 23 يناير 2025 - 09:23</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">القيمة الدفترية</span>
              <span className="text-sm font-medium text-gray-900">
                {formatCurrency(formData.bookValue)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">سعر البيع (بدون ضريبة)</span>
              <span className="text-sm font-medium text-gray-900">
                {formatCurrency(formData.salePrice)}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">ربح/خسارة</span>
              <span
                className={`text-sm font-bold ${
                  profitLoss >= 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {profitLoss >= 0 ? '+' : '-'}
                {Math.abs(profitLoss).toLocaleString('en-US')} ر.س
              </span>
            </div>
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
            حفظ
          </Button>
        </div>
      </div>
    </div>
  );
}
