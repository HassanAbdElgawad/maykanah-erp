export function AttachmentsTab() {
  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="p-6 space-y-4">
        {[
          {
            name: 'فاتورة الشراء PDF',
            type: 'PDF',
            size: '455 كيلوبايت',
            date: '23 يناير 2025',
          },
          {
            name: 'صورة الجهاز - 1',
            type: 'PNG',
            size: '455 كيلوبايت',
            date: '23 يناير 2025',
          },
          {
            name: 'صورة الجهاز - 2',
            type: 'PNG',
            size: '455 كيلوبايت',
            date: '23 يناير 2025',
          },
          {
            name: 'خدمة الضمان',
            type: 'PDF',
            size: '455 كيلوبايت',
            date: '23 يناير 2025',
          },
        ].map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              {/* أيقونة المرفق */}
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </div>

              {/* معلومات الملف */}
              <div>
                <div className="text-sm font-medium text-gray-900">{file.name}</div>
                <div className="text-xs text-gray-500">
                  {file.size} • {file.date} • {file.type}
                </div>
              </div>
            </div>

            {/* أزرار التحميل والحذف */}
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
