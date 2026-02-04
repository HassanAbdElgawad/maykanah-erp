interface MetadataTabProps {
  assetData: {
    category: string;
    group: string;
    department: string;
    costCenter: string;
    supplier: string;
    purchaseDate: string;
    usageDate: string;
    warranty: string;
  };
}

export function MetadataTab({ assetData }: MetadataTabProps) {
  return (
    <>
      {/* First Card */}
      <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-sm text-gray-500 mb-2">فئة الأصل</div>
            <div className="text-base font-medium text-gray-900">{assetData.category}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">المجموعة</div>
            <div className="text-base font-medium text-gray-900">{assetData.group}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">القسم</div>
            <div className="text-base font-medium text-gray-900">{assetData.department}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">مركز التكلفة</div>
            <div className="text-base font-medium text-gray-900">{assetData.costCenter}</div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-sm text-gray-500 mb-2">المورد</div>
            <div className="text-base font-medium text-gray-900">{assetData.supplier}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">تاريخ الشراء</div>
            <div className="text-base font-medium text-gray-900">
              {assetData.purchaseDate}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">تاريخ بدء الاستخدام</div>
            <div className="text-base font-medium text-gray-900">{assetData.usageDate}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">الضمان</div>
            <div className="text-base font-medium text-gray-900">{assetData.warranty}</div>
          </div>
        </div>
      </div>
    </>
  );
}
