import { Handle, Position } from 'reactflow';
import { User, CheckSquare, GitBranch, SquareCode, Plus } from 'lucide-react';
import { CustomNodeData } from './types';

interface CustomFlowNodeProps {
  data: CustomNodeData;
  isSelected: boolean;
  onAddNode: (type: 'task' | 'condition') => void;
}

export const CustomFlowNode = ({
  data,
  isSelected,
  onAddNode,
}: CustomFlowNodeProps): JSX.Element => {
  if (data.type === 'start') {
    return (
      <div
        className={`bg-white rounded-xl border-2 shadow-sm p-6 relative ${
          isSelected ? 'ring-2 border-[#41d1fe]' : 'border-[#41d1fe]'
        }`}
      >
        <Handle type="source" position={Position.Bottom} style={{ background: '#41d1fe' }} />

        {/* Action Buttons */}
        {isSelected && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddNode('task');
              }}
              className="bg-[#8b5cf6] text-white rounded-lg px-3 py-1.5 text-sm flex items-center gap-1 shadow-lg hover:bg-[#7c3aed] transition-colors whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              إضافة مرحلة جديدة
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddNode('condition');
              }}
              className="bg-[#10b981] text-white rounded-lg px-3 py-1.5 text-sm flex items-center gap-1 shadow-lg hover:bg-[#059669] transition-colors whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              إضافة شرط جديدة
            </button>
          </div>
        )}

        <div className="flex justify-center mb-4">
          <div className="bg-[#41d1fe] rounded-lg px-6 py-2">
            <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-white text-base [direction:rtl]">
              بداية العملية
            </span>
          </div>
        </div>
        <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-black text-lg text-center [direction:rtl]">
          {data.label}
        </p>
      </div>
    );
  }

  if (data.type === 'task') {
    return (
      <div
        className={`bg-white rounded-xl border-2 shadow-sm p-6 relative ${
          isSelected ? 'ring-2' : 'border-gray-200'
        }`}
      >
        <Handle type="target" position={Position.Top} style={{ background: '#0a3738' }} />
        <Handle type="source" position={Position.Bottom} style={{ background: '#0a3738' }} />

        {/* Action Buttons */}
        {isSelected && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddNode('task');
              }}
              className="bg-[#8b5cf6] text-white rounded-lg px-3 py-1.5 text-sm flex items-center gap-1 shadow-lg hover:bg-[#7c3aed] transition-colors whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              إضافة مرحلة جديدة
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddNode('condition');
              }}
              className="bg-[#10b981] text-white rounded-lg px-3 py-1.5 text-sm flex items-center gap-1 shadow-lg hover:bg-[#059669] transition-colors whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              إضافة شرط جديدة
            </button>
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-black text-lg [direction:rtl]">
              {data.label}
            </h3>
          </div>
          <div className="w-10 h-10 bg-[#0a37381a] rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-[#0a3738]" />
          </div>
        </div>
        <div className="border-t border-gray-200 pt-3">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-gray-400" />
            <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-black text-base [direction:rtl]">
              {data.subtitle}
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-gray-500">
          <CheckSquare className="w-5 h-5" />
          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl]">
            يحدث دائما
          </span>
        </div>
      </div>
    );
  }

  if (data.type === 'success' || data.type === 'failure') {
    const bgColor = data.type === 'success' ? '#2cc28d' : '#ff0000';
    const iconBg = data.type === 'success' ? '#12a773' : '#c40303';

    return (
      <div
        className={`bg-white rounded-xl border-2 shadow-sm overflow-hidden relative ${
          isSelected ? 'ring-2' : ''
        }`}
        style={{
          borderColor: bgColor,
        }}
      >
        <Handle type="target" position={Position.Top} style={{ background: bgColor }} />
        <Handle type="source" position={Position.Bottom} style={{ background: bgColor }} />

        {/* Action Buttons */}
        {isSelected && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddNode('task');
              }}
              className="bg-[#8b5cf6] text-white rounded-lg px-3 py-1.5 text-sm flex items-center gap-1 shadow-lg hover:bg-[#7c3aed] transition-colors whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              إضافة مرحلة جديدة
            </button>
          </div>
        )}

        <div
          className="h-[49px] flex items-center justify-between px-6"
          style={{ backgroundColor: bgColor }}
        >
          <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-white text-lg [direction:rtl]">
            {data.label}
          </h3>
          <div
            className="w-[37px] h-[37px] rounded-xl flex items-center justify-center"
            style={{ backgroundColor: iconBg }}
          >
            <GitBranch className="w-[22px] h-[22px] text-white" />
          </div>
        </div>
        <div className="p-4">
          <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-black text-sm mb-3 [direction:rtl]">
            {data.description}
          </p>
          <div className="border-t border-gray-200 pt-3 flex items-center gap-2">
            {data.type === 'success' ? (
              <>
                <CheckSquare className="w-6 h-6 text-gray-400" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-500 text-base [direction:rtl]">
                  يحدث دائما
                </span>
              </>
            ) : (
              <>
                <SquareCode className="w-6 h-6 text-gray-400" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-500 text-base [direction:rtl]">
                  يحدث على أساس شرطي
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (data.type === 'end') {
    return (
      <div className="bg-white rounded-xl border-2 border-[#2cc28d] shadow-sm p-4 flex items-center justify-center relative">
        <Handle type="target" position={Position.Top} style={{ background: '#2cc28d' }} />
        <div className="flex items-center gap-2">
          <CheckSquare className="w-8 h-8 text-[#2cc28d]" />
          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-[#2cc28d] text-xl [direction:rtl]">
            {data.label}
          </span>
        </div>
      </div>
    );
  }

  return <div>{data.label}</div>;
};
