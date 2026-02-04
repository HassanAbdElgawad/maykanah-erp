import { AssetTabsProps } from './types';

const tabs = [
  { id: 'metadata', label: 'بيانات تعريف الأصل' },
  { id: 'depreciation', label: 'الإهلاك' },
  { id: 'movements', label: 'سجل الحركات' },
  { id: 'maintenance', label: 'الصيانة' },
  { id: 'improvements', label: 'التحسينات' },
  { id: 'disposal', label: 'الاستبعاد / البيع' },
  { id: 'attachments', label: 'المرفقات' },
];

export function AssetTabs({ activeTab, onTabChange }: AssetTabsProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-3 text-sm font-medium transition-colors border-b-4 ${
              activeTab === tab.id
                ? 'border-[#11383f] text-[#11383f] '
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
