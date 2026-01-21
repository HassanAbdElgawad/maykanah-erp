import { Zap, CheckSquare, GitBranch } from 'lucide-react';

export const StartNode = ({ data }: any) => (
  <div className="w-96 bg-[#ecfbff] rounded-xl p-4">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-[#41d1fe] rounded flex items-center justify-center flex-shrink-0">
        <Zap className="w-5 h-5 text-white" />
      </div>
      <span className="text-sm font-semibold text-[#41d1fe]">{data.label}</span>
    </div>
  </div>
);

export const ActionNode = ({ data }: any) => (
  <div className="w-96">
    <div className="w-full bg-[#0c4749] text-white px-4 py-3 rounded-xl text-sm font-semibold">
      {data.label}
    </div>
  </div>
);

export const BranchNode = ({ data }: any) => (
  <div className="w-[362px] bg-[#e7eded] rounded-xl p-3 flex items-center gap-2">
    <GitBranch className="w-4 h-4 text-[#0c4749] flex-shrink-0" />
    <span className="text-sm font-semibold text-[#0c4749]">{data.label}</span>
  </div>
);

export const EndNode = ({ data }: any) => (
  <div className="w-96 bg-[#eaf9f4] rounded-xl p-4">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-[#2cc28d] rounded flex items-center justify-center flex-shrink-0">
        <CheckSquare className="w-5 h-5 text-white" />
      </div>
      <span className="text-sm font-semibold text-[#2cc28d]">{data.label}</span>
    </div>
  </div>
);

export const nodeTypes = {
  startNode: StartNode,
  actionNode: ActionNode,
  branchNode: BranchNode,
  endNode: EndNode,
};
