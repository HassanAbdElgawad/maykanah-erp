import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Filter, ChevronDown, MoreVertical, Plus, FileText, ChevronRight } from 'lucide-react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Connection,
  BackgroundVariant,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { buildPlanTrackingTreeData, type PlanTrackingPlan } from '@/data/strategy/plan-tracking.data';

// تحويل البيانات الشجرية إلى nodes و edges لـ ReactFlow
const convertTreeToFlowData = (treeData: PlanTrackingPlan[]) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  let yOffset = 0;

  const processNode = (plan: PlanTrackingPlan, x: number, y: number, parentId?: string) => {
    const borderColor = plan.level === 0 ? '#41D1FE' : (plan.progress >= 70 ? '#2CC28D' : '#F00');
    const statusColor = plan.isActive ? '#4caf50' : '#9e9e9e';

    nodes.push({
      id: plan.id,
      type: 'default',
      position: { x, y },
      data: {
        label: (
          <div className="text-right" style={{ minWidth: '200px' }}>
            <div className="font-semibold text-sm text-[#0e0d24] mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {plan.planName}
            </div>
            <div className="text-xs text-gray-500 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {plan.planNumber}
            </div>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${plan.progress}%`,
                    backgroundColor: borderColor,
                  }}
                ></div>
              </div>
              <span className="text-xs font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" style={{ color: borderColor }}>
                {plan.progress}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {plan.linkType}
              </span>
              <div className="flex items-center gap-1">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: statusColor }}
                ></div>
                <span className="text-xs [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" style={{ color: statusColor }}>
                  {plan.isActive ? 'نشط' : 'غير نشط'}
                </span>
              </div>
            </div>
          </div>
        ),
      },
      style: {
        background: '#ffffff',
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        padding: '12px',
        width: 280,
      },
    });

    if (parentId) {
      edges.push({
        id: `e${parentId}-${plan.id}`,
        source: parentId,
        target: plan.id,
        type: 'smoothstep',
        animated: true,
        style: { stroke: '#11383f', strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#11383f',
        },
      });
    }

    if (plan.children && plan.children.length > 0) {
      const childY = y + 250;
      const totalWidth = plan.children.length * 600;
      const startX = x - totalWidth / 2 + 300;

      plan.children.forEach((child, index) => {
        const childX = startX + index * 600;
        processNode(child, childX, childY, plan.id);
      });
    }
  };

  treeData.forEach((rootPlan, index) => {
    processNode(rootPlan, index * 1000, yOffset);
    yOffset += 1000;
  });

  return { nodes, edges };
};

export function PlanTracking() {
  const navigate = useNavigate();
  const { dir, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'list' | 'structure'>('list');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['1']));
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const treeData = useMemo(() => buildPlanTrackingTreeData(), []);
  const flowData = convertTreeToFlowData(treeData);

  const [nodes, , onNodesChange] = useNodesState(flowData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(flowData.edges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getProgressColor = (progress: number) => {
    return progress >= 70 ? 'bg-[#2CC28D]' : 'bg-[#F00]';
  };

  const getProgressTextColor = (progress: number) => {
    return progress >= 70 ? '#2CC28D' : '#F00';
  };

  const renderPlanRow = (plan: PlanTrackingPlan): React.ReactNode[] => {
    const rows: React.ReactNode[] = [];
    const isExpanded = expandedIds.has(plan.id);
    const hasChildren = plan.children && plan.children.length > 0;

    rows.push(
      <tr key={plan.id} className="hover:bg-gray-50 transition-colors border-b border-[#e2e2e2]">
        <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {plan.planNumber}
        </td>
        <td className="px-4 py-4">
          <div className="flex items-center gap-2" style={{ paddingRight: `${plan.level * 24}px` }}>
            {hasChildren && (
              <button
                onClick={() => toggleExpand(plan.id)}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <ChevronRight
                  className={`w-4 h-4 text-gray-600 transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`}
                />
              </button>
            )}
            {!hasChildren && <div className="w-6" />}
            <FileText className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {plan.planName}
            </span>
          </div>
        </td>
        <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {plan.linkType}
        </td>
        <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {plan.linkDate}
        </td>
        <td className="px-4 py-4">
          <div className="flex items-center gap-3">
            <span
              className="text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              style={{ color: getProgressTextColor(plan.progress) }}
            >
              {plan.progress}%
            </span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden min-w-[100px]">
              <div
                className={`h-full rounded-full transition-all ${getProgressColor(plan.progress)}`}
                style={{ width: `${plan.progress}%` }}
              ></div>
            </div>
          </div>
        </td>
        <td className="px-4 py-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={plan.isActive}
              className="sr-only peer"
              readOnly
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            <span
              className={`ms-3 text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                plan.isActive ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              {plan.isActive ? 'نشط' : 'غير نشط'}
            </span>
          </label>
        </td>
        <td className="px-4 py-4 relative">
          <button
            onClick={() => setOpenMenuId(openMenuId === plan.id ? null : plan.id)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
          
          {openMenuId === plan.id && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpenMenuId(null)}
              />
              <div className="absolute left-0 top-full mt-1 bg-white border border-[#e2e2e2] rounded-lg shadow-lg py-1 z-20 min-w-[180px]">
                <button
                  onClick={() => {
                    navigate(`/strategy/plan-tracking/${plan.id}`);
                    setOpenMenuId(null);
                  }}
                  className="w-full px-4 py-2 text-right text-sm text-[#0e0d24] hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  تفاصيل ربط خطة
                </button>
                <button
                  onClick={() => {
                    setOpenMenuId(null);
                  }}
                  className="w-full px-4 py-2 text-right text-sm text-[#0e0d24] hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  تعديل
                </button>
                <button
                  onClick={() => {
                    setOpenMenuId(null);
                  }}
                  className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  حذف
                </button>
              </div>
            </>
          )}
        </td>
      </tr>
    );

    if (isExpanded && hasChildren) {
      plan.children!.forEach((child) => {
        rows.push(...renderPlanRow(child));
      });
    }

    return rows;
  };


  return (
    <Layout>
      <div className="space-y-4" dir={dir}>
        {/* Header with Search and Actions */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder={t('common.search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                إخفاء/إظهار أعمدة
                <ChevronDown className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Download className="w-4 h-4" />
                تحميل
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Filter className="w-4 h-4" />
                فلتر
              </Button>

              <Button
                onClick={() => navigate('/strategy/plan-tracking/new')}
                className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Plus className="w-4 h-4" />
                ربط خطة جديدة
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs and Table Container */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          {/* Tabs */}
          <div className="bg-[#f5f5f5] border-b border-[#e2e2e2]">
            <div className="flex">
              <button
                onClick={() => setActiveTab('list')}
                className={`px-6 py-3 text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] transition-colors relative ${
                  activeTab === 'list'
                    ? 'text-[#11383f] bg-white'
                    : 'text-gray-600 hover:text-[#11383f]'
                }`}
              >
                قائمة الربط
                {activeTab === 'list' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#11383f]"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('structure')}
                className={`px-6 py-3 text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] transition-colors relative ${
                  activeTab === 'structure'
                    ? 'text-[#11383f] bg-white'
                    : 'text-gray-600 hover:text-[#11383f]'
                }`}
              >
                هيكل الخطط
                {activeTab === 'structure' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#11383f]"></div>
                )}
              </button>
            </div>
          </div>

          {/* Table Content */}
          {activeTab === 'list' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f8f9fa] border-b border-[#e2e2e2]">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      اسم الخطة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الخطة الرئيسية
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      نوع الربط
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تاريخ الربط
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      نسبة التقدم
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-[#0e0d24] w-16">
                      {/* ... */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {treeData.map((plan) => renderPlanRow(plan))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'structure' && (
            <div style={{ width: '100%', height: '700px', direction: 'ltr' }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                attributionPosition="bottom-left"
              >
                <Controls />
                <MiniMap
                  nodeColor={(node) => {
                    const border = node.style?.border;
                    return typeof border === 'string' && border.includes('#2CC28D') ? '#2CC28D' : '#F00';
                  }}
                  maskColor="rgba(0, 0, 0, 0.1)"
                />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
              </ReactFlow>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
