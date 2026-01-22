import { Settings } from 'lucide-react';
import { FieldType } from './types';

interface FieldsSidebarProps {
  fieldTypes: FieldType[];
  onDragStart: (field: FieldType) => void;
  onDragEnd: () => void;
  dir: string;
}

export const FieldsSidebar = ({
  fieldTypes,
  onDragStart,
  onDragEnd,
  dir,
}: FieldsSidebarProps): JSX.Element => {
  return (
    <div
      className="w-[280px] bg-white rounded-xl border border-gray-200 overflow-y-auto scrollbar-thin"
      dir={dir}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-base">
            جميع الحقول
          </h3>
          <button className="p-2 bg-slate-50 rounded-md hover:bg-slate-100">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="بحث عن حقل من هنا ..."
            className="w-full h-10 px-3 pr-8 bg-slate-50 border border-gray-300 rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
          />
        </div>
      </div>

      {/* Basic Fields */}
      <div className="p-4">
        <div className="mb-3">
          <h4 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-sm text-gray-700 mb-3">
            أساسية
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {fieldTypes
              .filter((f) => f.category === 'basic')
              .map((field) => (
                <div
                  key={field.id}
                  draggable
                  onDragStart={() => onDragStart(field)}
                  onDragEnd={onDragEnd}
                  className="bg-slate-50 border border-gray-200 rounded-lg p-3 cursor-move hover:bg-slate-100 transition-colors"
                >
                  <div className="flex flex-col items-center gap-2">
                    <field.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-xs text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {field.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Control Fields */}
        <div className="mb-3">
          <h4 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-sm text-gray-700 mb-3">
            عناصر التحكم العامة
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {fieldTypes
              .filter((f) => f.category === 'control')
              .map((field) => (
                <div
                  key={field.id}
                  draggable
                  onDragStart={() => onDragStart(field)}
                  onDragEnd={onDragEnd}
                  className="bg-slate-50 border border-gray-200 rounded-lg p-3 cursor-move hover:bg-slate-100 transition-colors"
                >
                  <div className="flex flex-col items-center gap-2">
                    <field.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-xs text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {field.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Tables & Checklists */}
        <div>
          <h4 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-sm text-gray-700 mb-3">
            قوائم التحقق / جداول
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {fieldTypes
              .filter((f) => f.category === 'table')
              .map((field) => (
                <div
                  key={field.id}
                  draggable
                  onDragStart={() => onDragStart(field)}
                  onDragEnd={onDragEnd}
                  className="bg-slate-50 border border-gray-200 rounded-lg p-3 cursor-move hover:bg-slate-100 transition-colors"
                >
                  <div className="flex flex-col items-center gap-2">
                    <field.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-xs text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {field.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
