interface DisposalTabProps {
  formatCurrency: (value: number) => React.ReactNode;
}

export function DisposalTab({ formatCurrency }: DisposalTabProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">الاستبعاد / البيع</h3>
        </div>

        <div className="grid grid-cols-5 gap-6">
          <div>
            <div className="text-sm text-gray-500 mb-2">تاريخ البيع</div>
            <div className="text-base font-medium text-gray-900">2026-06-20</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">سعر البيع</div>
            <div className="text-base font-medium text-gray-900">{formatCurrency(2000)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">القيمة الدفترية وقت البيع</div>
            <div className="text-base font-medium text-gray-900">{formatCurrency(1200)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">ربح / خسارة</div>
            <div className="text-base font-medium text-green-600">+ {formatCurrency(800)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">القيد المحاسبي</div>
            <div className="text-base font-medium text-green-600">مشهور</div>
          </div>
        </div>
      </div>
    </div>
  );
}
