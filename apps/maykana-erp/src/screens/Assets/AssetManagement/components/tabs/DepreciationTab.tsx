import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DepreciationTabProps {
  formatCurrency: (value: number) => React.ReactNode;
  onOpenResetModal: () => void;
  onOpenChangePaymentsModal: () => void;
}

export function DepreciationTab({ 
  formatCurrency, 
  onOpenResetModal,
  onOpenChangePaymentsModal 
}: DepreciationTabProps) {
  const [selectedMonth, setSelectedMonth] = useState('آخر 6 شهور');

  return (
    <>
      {/* First Card - Depreciation Info */}
      <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-sm text-gray-500 mb-2">طريقة الإهلاك</div>
            <div className="text-base font-medium text-gray-900">مستقيمة</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">العمر الافتراضي (سنوات / أشهر)</div>
            <div className="text-base font-medium text-gray-900">3 أشهر</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">القيمة الأصلية</div>
            <div className="text-base font-medium text-gray-900">{formatCurrency(9800)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">القيمة الحالية</div>
            <div className="text-base font-medium text-gray-900">{formatCurrency(6790)}</div>
          </div>
        </div>
      </div>

      {/* Second Card - Depreciation Values */}
      <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-sm text-gray-500 mb-2">قيمة الإهلاك السنوي</div>
            <div className="text-base font-medium text-gray-900">{formatCurrency(3266)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">قيمة الإهلاك الشهري</div>
            <div className="text-base font-medium text-gray-900">{formatCurrency(272)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">عدد الدفعات المنفذة</div>
            <div className="text-base font-medium text-gray-900">12 من 36</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">آخر تاريخ إهلاك</div>
            <div className="text-base font-medium text-gray-900">2026-05</div>
          </div>
        </div>
      </div>

      {/* Depreciation Table */}
      <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">جدول الإهلاك</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenResetModal}
              >
                إعادة ضبط الإهلاك بالكامل
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenChangePaymentsModal}
              >
                تعديل عدد الدفعات
              </Button>
              <Button variant="outline" size="sm">
                إنشاء قيد إهلاك
              </Button>
              <Button size="sm" className="bg-[#11383f] hover:bg-[#0f2f35] text-white">
                حساب الإهلاك من جديد
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    {selectedMonth}
                    <ChevronDown className="w-4 h-4 mr-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSelectedMonth('آخر 6 شهور')}>
                    آخر 6 شهور
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedMonth('آخر 12 شهر')}>
                    آخر 12 شهر
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedMonth('الكل')}>
                    الكل
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    الشهر
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    قيمة الإهلاك
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    القيمة الدفترية
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    القيد المحاسبي
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    month: '2026-01',
                    value: 272,
                    bookValue: 9984,
                    entry: 'GV-001',
                    status: 'مكتمل',
                  },
                  {
                    month: '2026-02',
                    value: 272,
                    bookValue: 8712,
                    entry: 'GV-002',
                    status: 'مكتمل',
                  },
                  {
                    month: '2026-03',
                    value: 272,
                    bookValue: 8440,
                    entry: 'GV-003',
                    status: 'مكتمل',
                  },
                  {
                    month: '2026-04',
                    value: 272,
                    bookValue: 8168,
                    entry: 'GV-004',
                    status: 'مكتمل',
                  },
                  {
                    month: '2026-05',
                    value: 272,
                    bookValue: 7896,
                    entry: '-------',
                    status: 'ينتظر الفترة المالية',
                  },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{row.month}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatCurrency(row.value)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatCurrency(row.bookValue)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {row.entry === '-------' ? (
                        <span className="text-gray-400">{row.entry}</span>
                      ) : (
                        <span className="text-green-600 cursor-pointer hover:underline">
                          {row.entry}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {row.status === 'مكتمل' ? (
                        <span className="text-green-600">{row.status}</span>
                      ) : (
                        <span className="text-yellow-600">{row.status}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
