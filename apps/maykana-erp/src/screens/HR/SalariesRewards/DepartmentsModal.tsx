import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronDown, ChevronLeft } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  children?: Department[];
  color?: string;
}

interface DepartmentsModalProps {
  onClose: () => void;
  onSave: (selectedDepartments: string[]) => void;
}

export function DepartmentsModal({ onClose, onSave }: DepartmentsModalProps) {
  const { dir, t } = useLanguage();
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>(['1']);

  const departments: Department[] = [
    {
      id: 'main',
      name: 'الفرع الرئيسي',
      color: 'bg-gray-100',
    },
    {
      id: '1',
      name: 'القسم الأول',
      color: 'bg-green-50',
      children: [
        { id: '1.1', name: 'اسم هنا للتعريف' },
        { id: '1.2', name: 'اسم هنا للتعريف' },
        { id: '1.3', name: 'اسم هنا للتعريف' },
        { id: '1.4', name: 'اسم هنا للتعريف' },
      ],
    },
    {
      id: '2',
      name: 'القسم الثاني',
      color: 'bg-blue-50',
    },
    {
      id: '3',
      name: 'القسم الثالث',
      color: 'bg-red-50',
    },
    {
      id: '4',
      name: 'القسم الرابع',
      color: 'bg-yellow-50',
    },
    {
      id: '5',
      name: 'القسم الخامس',
      color: 'bg-gray-100',
    },
    {
      id: 'tourism',
      name: 'الفرع السياحية',
      color: 'bg-gray-100',
    },
  ];

  const toggleDepartment = (id: string, dept?: Department) => {
    const isCurrentlySelected = selectedDepartments.includes(id);
    
    if (isCurrentlySelected) {
      // Unselect department and all its children
      const idsToRemove = [id];
      if (dept?.children) {
        dept.children.forEach(child => idsToRemove.push(child.id));
      }
      setSelectedDepartments((prev) => prev.filter((d) => !idsToRemove.includes(d)));
    } else {
      // Select department and all its children
      const idsToAdd = [id];
      if (dept?.children) {
        dept.children.forEach(child => idsToAdd.push(child.id));
      }
      setSelectedDepartments((prev) => [...prev, ...idsToAdd]);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedDepartments((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    onSave(selectedDepartments);
  };

  const renderDepartment = (dept: Department, level: number = 0, parentId: string = '') => {
    const hasChildren = dept.children && dept.children.length > 0;
    const isExpanded = expandedDepartments.includes(dept.id);
    const isSelected = selectedDepartments.includes(dept.id);
    
    // Display ID with proper formatting
    const displayId = parentId ? `${parentId}.${dept.id.split('.').pop()}` : dept.id;

    return (
      <div key={dept.id}>
        <div
          className={`flex items-center gap-3 p-3 rounded-lg ${dept.color || 'bg-white'} ${
            level > 0 ? 'mr-8' : ''
          }`}
        >
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleDepartment(dept.id, dept)}
            className="w-4 h-4 text-[#11383f] focus:ring-[#11383f] border-gray-300 rounded"
          />
          
          {hasChildren && (
            <button
              onClick={() => toggleExpand(dept.id)}
              className="text-gray-600 hover:text-gray-800"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : dir === 'rtl' ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4 transform rotate-180" />
              )}
            </button>
          )}

          <span className="flex-1 text-sm text-gray-800">{dept.name}</span>
          <span className="text-xs text-gray-500">{displayId}</span>
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-2">
            {dept.children!.map((child) => renderDepartment(child, level + 1, dept.id))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#11383f]">{t('hr.included_departments')}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">{departments.map((dept) => renderDepartment(dept))}</div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {t('hr.close')}
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-[#11383f] hover:bg-[#0f2f35] text-white rounded-lg transition-colors"
          >
            {t('hr.save')}
          </button>
        </div>
      </div>
    </div>
  );
}
