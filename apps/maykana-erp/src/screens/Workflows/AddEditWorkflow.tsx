import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCustomization } from '../../contexts/CustomizationContext';
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
} from 'reactflow';
import 'reactflow/dist/style.css';
import {
  Eye,
  EyeOff,
  Lock,
  Pencil,
  Trash2,
  Copy,
  ArrowDown,
  ArrowUp,
  Settings,
  Plus,
  CheckSquare,
  Grid3x3,
  Monitor,
  Tablet,
  Smartphone,
  ChevronDown,
  Zap,
  Palette,
  X,
} from 'lucide-react';
import { formBuilderNodeTypes } from './components/FormBuilderNodes';
import { ColumnModal, ChecklistItemModal } from './components/WorkflowModals';
import {
  NavigationSidebar,
  FieldsSidebar,
  ActionButtons,
  AddNodeModal,
  CustomFlowNode,
  ViewMode,
  ScreenSize,
  FieldType,
  useSectionHandlers,
} from './components';
import { useWorkflowsData } from '../../hooks/useWorkflowsData';

export const AddEditWorkflow = (): JSX.Element => {
  const { dir } = useLanguage();
  const navigate = useNavigate();
  const { customization } = useCustomization();
  const primaryColor = customization.primaryColor || '#0A3B3D';

  // Get all dummy data from custom hook
  const workflowsData = useWorkflowsData();

  const [showColumnModal, setShowColumnModal] = useState(false);
  const [currentTableIndex, setCurrentTableIndex] = useState<number | null>(null);
  const [newColumnName, setNewColumnName] = useState('');
  const [showChecklistItemModal, setShowChecklistItemModal] = useState(false);
  const [currentChecklistIndex, setCurrentChecklistIndex] = useState<number | null>(null);
  const [newChecklistItemText, setNewChecklistItemText] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<string>('settings');
  const [selectedElement, setSelectedElement] = useState<{
    type: 'section' | 'field' | 'table' | 'checklist';
    sectionIndex: number;
    fieldIndex?: number;
  } | null>(null);
  const [draggedField, setDraggedField] = useState<FieldType | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('form');
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<Edge | null>(null);
  const [showNodeModal, setShowNodeModal] = useState(false);
  const [nodeModalType, setNodeModalType] = useState<'task' | 'condition'>('task');

  // Form Builder States
  const [formBuilderTitle, setFormBuilderTitle] = useState('منطقة بدون عنوان');
  const [formBuilderDescription, setFormBuilderDescription] = useState('إبدأ بكتابة وصف لهذه المنطقة هنا .......');

  const [formBuilderNodes, , onFormBuilderNodesChange] = useNodesState(workflowsData.formBuilderNodes);
  const [formBuilderEdges, , onFormBuilderEdgesChange] = useEdgesState(workflowsData.formBuilderEdges);

  const [screenSize, setScreenSize] = useState<ScreenSize>('desktop');

  // استخدام helper للوظائف المتعلقة بالأقسام
  const {
    addSection,
    moveSection,
    copySection,
    deleteSection,
    handleDropOnSection: dropOnSection,
  } = useSectionHandlers(workflowsData.sections, workflowsData.setSections);

  const openColumnModal = (sectionIndex: number) => {
    setCurrentTableIndex(sectionIndex);
    setNewColumnName('');
    setShowColumnModal(true);
  };

  const addColumn = () => {
    if (currentTableIndex !== null && newColumnName.trim()) {
      const newSections = [...workflowsData.sections];
      const newColumn = {
        id: Date.now(),
        name: newColumnName.trim(),
      };

      if (!newSections[currentTableIndex].columns) {
        newSections[currentTableIndex].columns = [];
      }

      newSections[currentTableIndex].columns.push(newColumn);
      workflowsData.setSections(newSections);
      setShowColumnModal(false);
      setNewColumnName('');
    }
  };

  const openChecklistItemModal = (sectionIndex: number) => {
    setCurrentChecklistIndex(sectionIndex);
    setShowChecklistItemModal(true);
  };

  const addChecklistItem = () => {
    if (currentChecklistIndex !== null && newChecklistItemText.trim()) {
      const newSections = [...workflowsData.sections];
      const newItem = {
        id: Date.now(),
        text: newChecklistItemText.trim(),
        checked: false,
      };

      if (!newSections[currentChecklistIndex].items) {
        newSections[currentChecklistIndex].items = [];
      }

      newSections[currentChecklistIndex].items.push(newItem);
      workflowsData.setSections(newSections);
      setShowChecklistItemModal(false);
      setNewChecklistItemText('');
    }
  };

  const handlePublish = () => {
    console.log('Publishing workflow...');
    navigate('/workflow-engine/workflows');
  };

  const handleSave = () => {
    console.log('Saving workflow...');
    navigate('/workflow-engine/workflows');
  };

  const selectElement = (
    type: 'section' | 'field' | 'table' | 'checklist',
    sectionIndex: number,
    fieldIndex?: number
  ) => {
    setSelectedElement({ type, sectionIndex, fieldIndex });
    setActiveAccordion('settings');
  };

  const updateFieldProperty = (property: string, value: any) => {
    if (!selectedElement || selectedElement.type !== 'field') return;
    const newSections = [...workflowsData.sections];
    if (selectedElement.fieldIndex !== undefined && newSections[selectedElement.sectionIndex]?.fields) {
      const field: any = newSections[selectedElement.sectionIndex].fields![selectedElement.fieldIndex];
      if (field) {
        field[property] = value;
        workflowsData.setSections(newSections);
      }
    }
  };

  const updateSectionProperty = (property: string, value: any) => {
    if (!selectedElement) return;
    const newSections = [...workflowsData.sections];
    const section: any = newSections[selectedElement.sectionIndex];
    if (section) {
      section[property] = value;
      workflowsData.setSections(newSections);
    }
  };

  const deleteSelectedElement = () => {
    if (!selectedElement) return;

    const newSections = [...workflowsData.sections];

    if (selectedElement.type === 'field' && selectedElement.fieldIndex !== undefined) {
      // حذف حقل
      if (newSections[selectedElement.sectionIndex]?.fields) {
        newSections[selectedElement.sectionIndex].fields!.splice(selectedElement.fieldIndex, 1);
      }
    } else if (
      selectedElement.type === 'section' ||
      selectedElement.type === 'table' ||
      selectedElement.type === 'checklist'
    ) {
      // حذف منطقة كاملة
      newSections.splice(selectedElement.sectionIndex, 1);
    }

    workflowsData.setSections(newSections);
    setSelectedElement(null);
  };

  const handleDragStart = (field: FieldType) => {
    setDraggedField(field);
  };

  const handleDragEnd = () => {
    setDraggedField(null);
  };

  const handleDropOnSection = (sectionIndex: number) => {
    if (!draggedField) return;
    dropOnSection(sectionIndex, draggedField);
    setDraggedField(null);
  };

  const getGridCols = () => {
    if (screenSize === 'mobile') return 'grid-cols-1';
    if (screenSize === 'tablet') return 'grid-cols-2';
    return 'grid-cols-3';
  };

  // Use nodes and edges from dummy data hook
  const [nodes, setNodes, onNodesChange] = useNodesState(workflowsData.flowNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(workflowsData.flowEdges);

  // Form Builder Helper Functions
  const updateFormBuilderTableCell = (rowId: string, colId: string, value: string) => {
    workflowsData.setFormBuilderTableRows(
      workflowsData.formBuilderTableRows.map((row) =>
        row.id === rowId ? { ...row, data: { ...row.data, [colId]: value } } : row
      )
    );
  };

  const renderFormBuilderField = (field: any) => {
    const widthClass =
      field.width === 'half'
        ? 'w-[calc(50%-8px)]'
        : field.width === 'third'
          ? 'w-[calc(33.333%-8px)]'
          : 'w-full';

    return (
      <div key={field.id} className={`${widthClass} mb-6`}>
        <div className="relative group">
          <label
            className="block text-sm font-normal text-black mb-2"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
          >
            {field.label}
            {field.required && <span className="text-red-600">*</span>}
          </label>

          {field.type === 'text' || field.type === 'number' ? (
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full h-9 px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm text-[#99a09e] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl', textAlign: 'right' }}
            />
          ) : field.type === 'date' ? (
            <input
              type="date"
              className="w-full h-9 px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl', textAlign: 'right' }}
            />
          ) : field.type === 'select' ? (
            <select
              className="w-full h-9 px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl', textAlign: 'right' }}
            >
              <option value="">اختر...</option>
            </select>
          ) : null}
        </div>
      </div>
    );
  };

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Add new node
  const addNewNode = (type: 'task' | 'success' | 'failure') => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type: 'custom',
      data: {
        label: type === 'task' ? 'مهمة جديدة' : type === 'success' ? 'نتيجة إيجابية' : 'نتيجة سلبية',
        subtitle: type === 'task' ? 'مسؤول' : undefined,
        description: type !== 'task' ? 'وصف النتيجة هنا...' : undefined,
        type: type,
        color: type === 'success' ? '#2cc28d' : type === 'failure' ? '#ff0000' : undefined
      },
      position: { 
        x: selectedNode ? selectedNode.position.x : 400, 
        y: selectedNode ? selectedNode.position.y + 250 : 400 
      },
      style: { width: 388, height: 162 },
      draggable: true
    };
    
    setNodes((nds) => [...nds, newNode]);
    
    // Create edge if there's a selected node
    if (selectedNode) {
      const newEdge: Edge = {
        id: `e-${selectedNode.id}-${newNode.id}`,
        source: selectedNode.id,
        target: newNode.id,
        label: 'يحدث دائما',
        type: 'smoothstep',
        animated: true,
        style: { stroke: '#999', strokeWidth: 2 },
        labelStyle: { fill: '#666', fontWeight: 500, fontSize: 14 },
        labelBgStyle: { fill: 'white', fillOpacity: 0.8 }
      };
      setEdges((eds) => [...eds, newEdge]);
    }
    
    setShowNodeModal(false);
  };

  // Update node data
  const updateNodeData = (nodeId: string, newData: any) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...newData } }
          : node
      )
    );
    // Update selectedNode to reflect changes in the edit panel
    if (selectedNode?.id === nodeId) {
      setSelectedNode((prev) => 
        prev ? { ...prev, data: { ...prev.data, ...newData } } : null
      );
    }
  };

  // Delete selected node
  const deleteSelectedNode = () => {
    if (selectedNode) {
      setNodes((nds) => nds.filter((n) => n.id !== selectedNode.id));
      setEdges((eds) => eds.filter((e) => e.source !== selectedNode.id && e.target !== selectedNode.id));
      setSelectedNode(null);
    }
  };

  // Update edge label
  const updateEdgeLabel = (edgeId: string, newLabel: string) => {
    setEdges((eds) =>
      eds.map((edge) =>
        edge.id === edgeId
          ? { ...edge, label: newLabel }
          : edge
      )
    );
    // Update selectedEdge to reflect changes in the edit panel
    if (selectedEdge?.id === edgeId) {
      setSelectedEdge((prev) => 
        prev ? { ...prev, label: newLabel } : null
      );
    }
  };

  // Delete selected edge
  const deleteSelectedEdge = () => {
    if (selectedEdge) {
      setEdges((eds) => eds.filter((edge) => edge.id !== selectedEdge.id));
      setSelectedEdge(null);
    }
  };

  // Handle node click
  const onNodeClick = useCallback((_: any, node: Node) => {
    setSelectedNode(node);
    setSelectedEdge(null); // Clear edge selection
  }, []);

  // Handle edge click
  const onEdgeClick = useCallback((_: any, edge: Edge) => {
    setSelectedEdge(edge);
    setSelectedNode(null); // Clear node selection
  }, []);
  
  // Open add node modal
  const openAddNodeModal = (type: 'task' | 'condition') => {
    setNodeModalType(type);
    setShowNodeModal(true);
  };

  const nodeTypes = useMemo(
    () => ({
      custom: (props: any) => (
        <CustomFlowNode
          {...props}
          isSelected={selectedNode?.id === props.id}
          onAddNode={openAddNodeModal}
        />
      ),
    }),
    [selectedNode]
  );

  return (
    <Layout>
      <div className="flex h-[calc(100vh-80px)] gap-4" dir={dir}>
        {/* Far Right Sidebar - Navigation Icons (RTL: leftmost) */}
        <NavigationSidebar
          viewMode={viewMode}
          setViewMode={setViewMode}
          primaryColor={primaryColor}
        />

        {/* Right Sidebar - Fields Panel */}
        {viewMode === 'form' && (
          <FieldsSidebar
            fieldTypes={workflowsData.fieldTypes}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            dir={dir}
          />
        )}

        {/* Center - Canvas */}
        <div
          className={`flex-1 ${viewMode === 'formBuilder' ? 'bg-[#f7f7f9]' : 'bg-white'} rounded-xl overflow-y-auto scrollbar-thin ${viewMode !== 'formBuilder' ? 'p-6' : ''}`}
          dir={dir}
          style={viewMode !== 'formBuilder' ? {
            backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          } : {}}
        >
          {/* Workflow Form Builder View */}
          {viewMode === 'formBuilder' ? (
            <div className="flex gap-4 h-full" style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}>
              {/* Right Sidebar - Workflow Steps with React Flow */}
              <div className="w-[400px] bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
                <div className="h-full" style={{ direction: 'rtl', height: '600px' }}>
                  <ReactFlow
                    nodes={formBuilderNodes}
                    edges={formBuilderEdges}
                    onNodesChange={onFormBuilderNodesChange}
                    onEdgesChange={onFormBuilderEdgesChange}
                    nodeTypes={formBuilderNodeTypes}
                    fitView
                    fitViewOptions={{ padding: 0.1, maxZoom: 1 }}
                    minZoom={0.5}
                    maxZoom={1.5}
                    defaultViewport={{ x: 20, y: 20, zoom: 1 }}
                    nodesDraggable={true}
                    nodesConnectable={true}
                    elementsSelectable={true}
                    zoomOnScroll={true}
                    panOnScroll={true}
                    panOnDrag={true}
                    zoomOnDoubleClick={true}
                    preventScrolling={true}
                    translateExtent={[[-200, -100], [700, 700]]}
                    nodeExtent={[[-200, -100], [700, 700]]}
                    proOptions={{ hideAttribution: true }}
                    style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica" }}
                  />
                </div>
              </div>
              
              {/* Main Form Builder Area */}
              <div 
                className="flex-1 bg-[#f7f7f9] rounded-xl overflow-auto"
                style={{
                  direction: 'rtl',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#D9D9D9 transparent'
                }}
              >
                <style>{`
                  .flex-1.bg-\\[\\#f7f7f9\\]::-webkit-scrollbar {
                    width: 4px;
                  }
                  .flex-1.bg-\\[\\#f7f7f9\\]::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  .flex-1.bg-\\[\\#f7f7f9\\]::-webkit-scrollbar-thumb {
                    background-color: #D9D9D9;
                    border-radius: 10px;
                  }
                  .flex-1.bg-\\[\\#f7f7f9\\]::-webkit-scrollbar-thumb:hover {
                    background-color: #BFBFBF;
                  }
                `}</style>

                <div className="px-2">
                  {/* Form Area */}
                  <div className="bg-slate-50 rounded-xl border border-[#0c474921] shadow-[0px_5px_10px_#00000014] p-8 mb-6">
                    {/* Form Title and Actions */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={formBuilderTitle}
                          onChange={(e) => setFormBuilderTitle(e.target.value)}
                          className="text-lg font-bold text-black border-0 focus:outline-none w-full mb-2 bg-transparent"
                          style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
                        />
                        <textarea
                          value={formBuilderDescription}
                          onChange={(e) => setFormBuilderDescription(e.target.value)}
                          className="w-full text-base text-[#00000099] border-0 focus:outline-none resize-none bg-transparent"
                          style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
                          rows={1}
                        />
                      </div>
                      <div className="flex gap-3  items-center">
                        <button
                          className="w-[40px] h-[40px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                          title="إخفاء"
                        >
                          <EyeOff className="w-4 h-4 text-[#555555]" />
                        </button>
                        <button
                          className="w-[40px] h-[40px] flex items-center justify-center bg-[#0c4749] rounded-[14px] hover:bg-[#0d4849] transition-colors shadow-sm"
                          title="قفل"
                        >
                          <Lock className="w-4 h-4 text-white" />
                        </button>
                        <button
                          className="w-[40px] h-[40px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                          title="تحرير"
                        >
                          <Pencil className="w-4 h-4 text-[#555555]" />
                        </button>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      {workflowsData.formBuilderFields.map((field) => renderFormBuilderField(field))}
                    </div>
                  </div>

                  {/* Table Section */}
                  <div className="bg-white rounded-xl border border-[#0c474921] shadow-[0px_5px_10px_#00000014] p-6 mb-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-black mb-2">جدول المواد</h3>
                      <p className="text-base text-[#00000099]">
                        إبدأ بكتابة وصف لهذه الجدول هنا&nbsp;&nbsp;.......
                      </p>
                    </div>

                    <div className="border border-slate-100 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-[#f1f5f980]">
                            <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] border-b border-slate-100">
                              فئة المادة
                            </th>
                            <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] border-b border-slate-100">
                              الوصف
                            </th>
                            <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] border-b border-slate-100 w-20"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {workflowsData.formBuilderTableRows.map((row, index) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                              <td className="px-4 py-3 border-b border-slate-100 text-right text-sm font-semibold text-[#0e0d24]">
                                {index + 1}
                              </td>
                              <td className="px-4 py-3 border-b border-slate-100">
                                <input
                                  type="text"
                                  value={row.data['1'] || ''}
                                  onChange={(e) => updateFormBuilderTableCell(row.id, '1', e.target.value)}
                                  className="w-full px-3 py-2 border-0 bg-transparent text-sm focus:outline-none"
                                  style={{
                                    fontFamily: "'IBM Plex Sans Arabic', Helvetica",
                                    direction: 'rtl',
                                  }}
                                />
                              </td>
                              <td className="px-4 py-3 border-b border-slate-100">
                                <input
                                  type="text"
                                  value={row.data['2'] || ''}
                                  onChange={(e) => updateFormBuilderTableCell(row.id, '2', e.target.value)}
                                  className="w-full px-3 py-2 border-0 bg-transparent text-sm focus:outline-none"
                                  style={{
                                    fontFamily: "'IBM Plex Sans Arabic', Helvetica",
                                    direction: 'rtl',
                                  }}
                                />
                              </td>
                              
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bottom Action Buttons - Sticky */}
                  <div 
                    className="sticky bottom-0 left-0 right-0 z-10 p-4 flex gap-3 justify-end mt-6 mb-6"
                    style={{
                      borderRadius: '12px',
                      border: '1px solid #E2E2E2',
                      background: '#FFF',
                      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <button
                      onClick={() => navigate('/workflow-engine/workflows')}
                      className="h-10 px-6 bg-[#0c47491a] text-[#0c4749] rounded-lg hover:bg-[#0c47492a] transition-colors font-medium"
                      style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica" }}
                    >
                      حفظ وإغلاق
                    </button>
                    <button className="h-10 px-6 bg-[#0c47491a] text-[#0c4749] rounded-lg hover:bg-[#0c47492a] transition-colors font-medium flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      معاينة
                    </button>
                    <button className="h-10 px-6 bg-[#0c4749] hover:bg-[#0d4849] text-white rounded-lg transition-colors font-medium">
                      انشر مباشر
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : viewMode === 'flow' ? (
            <div style={{ width: '100%', height: 'calc(100vh - 200px)' }} className="react-flow-cursor-fix">
              <style>{`
                .react-flow-cursor-fix .react-flow__pane,
                .react-flow-cursor-fix .react-flow__renderer,
                .react-flow-cursor-fix .react-flow__container {
                  cursor: default !important;
                }
                .react-flow-cursor-fix .react-flow__pane.dragging {
                  cursor: grabbing !important;
                }
              `}</style>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                onEdgeClick={onEdgeClick}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"
                style={{ direction: 'ltr' }}
                nodesDraggable={true}
                nodesConnectable={true}
                elementsSelectable={true}
                selectNodesOnDrag={false}
                snapToGrid={true}
                snapGrid={[15, 15]}
                deleteKeyCode="Delete"
                defaultEdgeOptions={{
                  type: 'smoothstep',
                  animated: true,
                  style: { strokeWidth: 2 }
                }}
              >
                <Controls position="bottom-right" />
                <MiniMap 
                  position="bottom-left"
                  zoomable
                  pannable
                  style={{ background: '#f7f7f9' }}
                />
                <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#e5e7eb" />
              </ReactFlow>
              
              {/* Edit Panel for Selected Node */}
              {selectedNode && viewMode === 'flow' && selectedNode.data.type !== 'end' && (
                <div className="absolute top-4 left-4 bg-white rounded-xl shadow-2xl p-4 w-[320px] border border-gray-200 z-20" style={{ direction: 'rtl' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-base">
                      {selectedNode.data.type === 'start' ? 'تعديل نقطة البداية' : 'تعديل العنصر'}
                    </h4>
                    <div className="flex items-center gap-2">
                      {selectedNode.data.type !== 'start' && (
                        <button
                          onClick={deleteSelectedNode}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedNode(null)}
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        title="إغلاق"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium text-gray-700 mb-1 block">
                        العنوان
                      </label>
                      <input
                        type="text"
                        value={selectedNode.data.label || ''}
                        onChange={(e) => updateNodeData(selectedNode.id, { label: e.target.value })}
                        className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] outline-none focus:border-[#0c4749]"
                      />
                    </div>
                    
                    {selectedNode.data.type === 'task' && (
                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium text-gray-700 mb-1 block">
                          المسؤول
                        </label>
                        <input
                          type="text"
                          value={selectedNode.data.subtitle || ''}
                          onChange={(e) => updateNodeData(selectedNode.id, { subtitle: e.target.value })}
                          className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] outline-none focus:border-[#0c4749]"
                        />
                      </div>
                    )}
                    
                    {(selectedNode.data.type === 'success' || selectedNode.data.type === 'failure') && (
                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium text-gray-700 mb-1 block">
                          الوصف
                        </label>
                        <textarea
                          value={selectedNode.data.description || ''}
                          onChange={(e) => updateNodeData(selectedNode.id, { description: e.target.value })}
                          rows={3}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] outline-none focus:border-[#0c4749] resize-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Edit Edge Panel */}
              {selectedEdge && viewMode === 'flow' && (
                <div className="absolute top-4 left-4 bg-white rounded-xl shadow-2xl p-4 w-[320px] border border-gray-200 z-20" style={{ direction: 'rtl' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-base">
                      تعديل الرابط
                    </h4>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={deleteSelectedEdge}
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        title="حذف"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setSelectedEdge(null)}
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        title="إغلاق"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium text-gray-700 mb-1 block">
                        نص الرابط
                      </label>
                      <input
                        type="text"
                        value={(selectedEdge.label as string) || ''}
                        onChange={(e) => updateEdgeLabel(selectedEdge.id, e.target.value)}
                        placeholder="أدخل النص هنا ..."
                        className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] outline-none focus:border-[#0c4749]"
                      />
                    </div>
                    
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        من: <span className="font-medium text-gray-700">{selectedEdge.source}</span>
                      </p>
                      <p className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mt-1">
                        إلى: <span className="font-medium text-gray-700">{selectedEdge.target}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Form View with Device Simulation */
            <div
              className={`mx-auto space-y-6 transition-all duration-300 relative ${
                screenSize === 'tablet'
                  ? 'border-[16px] border-[#1e3a3c] rounded-[36px] p-6 shadow-2xl bg-white'
                  : screenSize === 'mobile'
                    ? 'border-[14px] border-[#1e3a3c] rounded-[32px] p-4 shadow-2xl bg-white'
                    : ''
              }`}
              style={{
                maxWidth:
                  screenSize === 'mobile' ? '450px' : screenSize === 'tablet' ? '768px' : '1280px',
              }}
            >
              {/* Tablet Camera */}
              {screenSize === 'tablet' && (
                <div className="absolute -top-[.8rem] left-1/2 transform -translate-x-1/2 flex gap-1.5 items-center">
                  <div className="w-3 h-3 bg-white rounded-full shadow-md border border-gray-200" />
                  <div className="w-2 h-2 bg-white rounded-full shadow-sm border border-gray-200" />
                </div>
              )}
              {/* Mobile Camera */}
              {screenSize === 'mobile' && (
                <div className="absolute -top-[.7rem] left-1/2 transform -translate-x-1/2 flex gap-1 items-center">
                  <div className="w-2.5 h-2.5 bg-white rounded-full shadow-md border border-gray-200" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm border border-gray-200" />
                </div>
              )}
              {/* Screen Size Switcher */}
              <div className="flex justify-center gap-2 mb-6">
                <button
                  onClick={() => setScreenSize('desktop')}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${screenSize === 'desktop' ? 'text-white' : 'bg-[#f6f8f8] text-gray-600'}`}
                  style={screenSize === 'desktop' ? {
                    backgroundColor: primaryColor,
                    borderColor: `${primaryColor}3b`
                  } : {
                    borderColor: `${primaryColor}3b`
                  }}
                >
                  <Monitor className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setScreenSize('tablet')}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-opacity ${screenSize === 'tablet' ? 'text-white' : 'bg-slate-100 text-gray-700 hover:bg-slate-200'} opacity-60 hover:opacity-100`}
                  style={screenSize === 'tablet' ? { backgroundColor: primaryColor } : undefined}
                >
                  <Tablet className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setScreenSize('mobile')}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-opacity ${screenSize === 'mobile' ? 'text-white' : 'bg-slate-100 text-gray-700 hover:bg-slate-200'} opacity-60 hover:opacity-100`}
                  style={screenSize === 'mobile' ? { backgroundColor: primaryColor } : undefined}
                >
                  <Smartphone className="w-5 h-5" />
                </button>
              </div>

              {/* Sections */}
              {workflowsData.sections.map((section, index) => {
              const isSelected =
                selectedElement?.sectionIndex === index && selectedElement.fieldIndex === undefined;
              const sectionColor = section.color;

              return (
                <>
                  <div
                    key={section.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      const sectionType =
                        section.type === 'checklist'
                          ? 'checklist'
                          : section.type === 'table'
                            ? 'table'
                            : 'section';
                      selectElement(sectionType, index);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleDropOnSection(index);
                    }}
                    className={`bg-white rounded-xl border-2 shadow-sm p-6 cursor-pointer transition-all ${
                      isSelected
                        ? 'shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{
                      ...(sectionColor
                        ? {
                            borderTopColor: sectionColor,
                            borderTopWidth: '4px',
                            boxShadow: isSelected
                              ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                              : `0 0 0 1px ${sectionColor}20 inset, 0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
                          }
                        : {}),
                      ...(isSelected ? { borderColor: primaryColor } : {})
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => {
                            const newSections = [...workflowsData.sections];
                            newSections[index].title = e.target.value;
                            workflowsData.setSections(newSections);
                          }}
                          className="text-lg font-bold text-black border-0 focus:outline-none w-full"
                          style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
                        />
                        <textarea
                          value={section.description}
                          onChange={(e) => {
                            const newSections = [...workflowsData.sections];
                            newSections[index].description = e.target.value;
                            workflowsData.setSections(newSections);
                          }}
                          placeholder="إبدأ بكتابة وصف لهذه المنطقة هنا ......."
                          className="mt-2 w-full text-sm text-gray-600 border-0 focus:outline-none resize-none"
                          style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
                          rows={1}
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200"
                          title="الإعدادات"
                        >
                          <Settings className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                          onClick={() => moveSection(index, 'up')}
                          disabled={index === 0}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="تحريك للأعلى"
                        >
                          <ArrowUp className="w-5 h-5 text-gray-600" />
                        </button>

                        <button
                          onClick={() => moveSection(index, 'down')}
                          disabled={index === workflowsData.sections.length - 1}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="تحريك للأسفل"
                        >
                          <ArrowDown className="w-5 h-5 text-gray-600" />
                        </button>

                        <button
                          onClick={() => copySection(index)}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200"
                          title="نسخ المنطقة"
                        >
                          <Copy className="w-5 h-5 text-gray-600" />
                        </button>

                        <button
                          onClick={() => deleteSection(index)}
                          disabled={workflowsData.sections.length === 1}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="حذف المنطقة"
                        >
                          <Trash2 className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Empty Section - Waiting for drag and drop */}
                    {section.type === 'empty' && (
                      <div className="border-2 border-dashed border-[#0c4749] rounded-lg p-12 text-center bg-[#0c47490a] hover:bg-[#0c47491a] transition-colors">
                        <Grid3x3 className="w-12 h-12 text-[#0c4749] mx-auto mb-4 opacity-50" />
                        <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base text-[#0c4749] font-bold mb-2">
                          اسحب حقلاً أو جدولاً هنا
                        </p>
                        <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-600">
                          اسحب حقول الإدخال لإنشاء منطقة حقول
                          <br />
                          أو اسحب جدول/قائمة تحقق لإنشاء جدول
                        </p>
                      </div>
                    )}

                    {/* Form Section Content */}
                    {section.type === 'form' && (
                      <>
                        {/* Section Fields */}
                        {section.fields && section.fields.length > 0 && (
                          <div className="space-y-4 mb-4">
                            {/* Fields Grid */}
                            <div className={`grid ${getGridCols()} gap-4`}>
                              {section.fields.map((field: any, fieldIndex: number) => {
                                const isSelected =
                                  selectedElement?.sectionIndex === index &&
                                  selectedElement?.fieldIndex === fieldIndex;
                                const fieldColor = field.color;

                                return (
                                  <div
                                    key={field.id}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      selectElement('field', index, fieldIndex);
                                    }}
                                    className={`space-y-2 p-3 rounded-lg transition-all border-2 ${
                                      isSelected
                                        ? 'ring-2 ring-[#0c4749] bg-[#0c47490a] border-[#0c4749]'
                                        : fieldColor
                                          ? 'hover:shadow-md'
                                          : 'hover:bg-gray-50 border-transparent'
                                    }`}
                                    style={
                                      fieldColor
                                        ? {
                                            borderColor: fieldColor,
                                            backgroundColor: isSelected
                                              ? '#0c47490a'
                                              : `${fieldColor}15`,
                                            boxShadow: isSelected
                                              ? undefined
                                              : `0 0 0 1px ${fieldColor}20 inset`,
                                          }
                                        : {}
                                    }
                                  >
                                    <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block">
                                      <span className="text-black font-medium">{field.label}</span>
                                      {field.required && <span className="text-red-600">*</span>}
                                    </label>
                                    <input
                                      type="text"
                                      placeholder={field.placeholder}
                                      className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm text-gray-400 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]"
                                      readOnly
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Add Field Button */}
                        <div className="border-2 border-dashed border-[#0c4749] rounded-lg p-4 text-center bg-white cursor-pointer hover:bg-slate-50 transition-colors">
                          <Plus className="w-5 h-5 text-[#0c4749] mx-auto mb-1" />
                          <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-[#0c4749]">
                            اسحب أو اضغط لإضافة حقل جديد لعمود جديد
                          </p>
                        </div>
                      </>
                    )}

                    {/* Table Section Content */}
                    {section.type === 'table' && (
                      <>
                        {/* Empty Table Placeholder */}
                        {!section.columns || section.columns.length === 0 ? (
                          <div
                            onClick={() => openColumnModal(index)}
                            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 cursor-pointer hover:bg-gray-100 hover:border-[#0c4749] transition-colors"
                          >
                            <Plus className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                            <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base text-gray-600 mb-1">
                              لا توجد أعمدة بعد
                            </p>
                            <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-500">
                              اضغط هنا لإضافة أول عمود
                            </p>
                          </div>
                        ) : (
                          /* Table with Columns */
                          <div className="border border-gray-300 rounded-lg overflow-hidden">
                            <table className="w-full">
                              <thead className="bg-gray-100">
                                <tr>
                                  {/* Add Button Column - First (rightmost in RTL) */}
                                  <th className="px-2 py-3 text-center border-b border-l border-gray-300 w-16">
                                    <button
                                      onClick={() => openColumnModal(index)}
                                      className="w-8 h-8 text-white rounded-lg transition-colors flex items-center justify-center mx-auto"
                                      style={{ backgroundColor: primaryColor }}
                                      title="إضافة عمود جديد"
                                    >
                                      <Plus className="w-5 h-5" />
                                    </button>
                                  </th>
                                  {section.columns?.map((col: any, colIndex: number) => (
                                    <th
                                      key={col.id}
                                      className={`px-4 py-3 text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-bold text-black border-b ${colIndex < (section.columns?.length || 0) - 1 ? 'border-l' : ''} border-gray-300`}
                                    >
                                      <div className="flex items-center justify-center gap-2">
                                        {col.icon && <span className="text-base">{col.icon}</span>}
                                        <span>{col.name}</span>
                                      </div>
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="bg-white">
                                {Array.from({ length: section.rows || 3 }).map((_, rowIndex) => (
                                  <tr
                                    key={rowIndex}
                                    className={
                                      rowIndex < (section.rows || 3) - 1
                                        ? 'border-b border-gray-300'
                                        : ''
                                    }
                                  >
                                    {/* Row Number Column - First (rightmost in RTL) */}
                                    <td className="px-2 py-3 text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-black font-medium border-l border-gray-300">
                                      {rowIndex + 1}
                                    </td>
                                    {section.columns?.map((col: any, colIndex: number) => (
                                      <td
                                        key={col.id}
                                        className={`px-4 py-3 text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-700 ${colIndex < (section.columns?.length || 0) - 1 ? 'border-l' : ''} border-gray-300`}
                                      ></td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </>
                    )}

                    {/* Checklist Section Content */}
                    {section.type === 'checklist' && (
                      <div className="space-y-2">
                        {section.items && section.items.length > 0 ? (
                          section.items.map((item: any) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-gray-300 text-[#0c4749] focus:ring-[#0c4749]"
                                readOnly
                              />
                              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-700 flex-1 [direction:rtl]">
                                {item.text}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                            <CheckSquare className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                            <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base text-gray-600 mb-1">
                              لا توجد عناصر بعد
                            </p>
                            <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-500">
                              اضغط الزر أدناه لإضافة عناصر للقائمة
                            </p>
                          </div>
                        )}

                        <button
                          onClick={() => openChecklistItemModal(index)}
                          className="w-full h-10 border-2 border-dashed border-[#0c4749] rounded-lg text-[#0c4749] hover:bg-[#0c47490a] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium flex items-center justify-center gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          أضف عنصر للقائمة
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Add Section Button - After Each Section (but not after last one before table) */}
                  {index < workflowsData.sections.length - 1 && (
                    <div className="flex items-center gap-4 py-6">
                      <div className="flex-1 h-[2px] bg-[#0c4749]"></div>
                      <button
                        onClick={() => addSection(index + 1)}
                        className="px-6 py-2 bg-slate-100 text-gray-700 rounded-full hover:bg-slate-200 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm whitespace-nowrap"
                      >
                        أضف منطقة
                      </button>
                      <div className="flex-1 h-[2px] bg-[#0c4749]"></div>
                    </div>
                  )}
                </>
              );
            })}

            {/* Add Section Button - Bottom */}
            {viewMode === 'form' && (
              <div className="flex items-center gap-4 py-6">
                <div className="flex-1 h-[2px] bg-[#0c4749]"></div>
                <button
                  onClick={() => addSection(workflowsData.sections.length)}
                  className="px-6 py-2 bg-slate-100 text-gray-700 rounded-full hover:bg-slate-200 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm whitespace-nowrap"
                >
                  أضف منطقة
                </button>
                <div className="flex-1 h-[2px] bg-[#0c4749]"></div>
              </div>
            )}
            </div>
          )}

          {/* Bottom Action Buttons - Sticky في المنتصف */}
          {viewMode !== 'formBuilder' && (
            <ActionButtons
              onSave={handleSave}
              onPublish={handlePublish}
              primaryColor={primaryColor}
            />
          )}
        </div>

        {/* Left Sidebar - Properties Panel */}
        {viewMode === 'form' && (
          <div
            className="w-[280px] bg-white rounded-xl border border-gray-200 overflow-y-auto scrollbar-thin"
            dir={dir}
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
            <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-base [direction:rtl]">
              {selectedElement
                ? selectedElement.type === 'field' && selectedElement.fieldIndex !== undefined
                  ? workflowsData.sections[selectedElement.sectionIndex]?.fields?.[selectedElement.fieldIndex]
                      ?.label || 'حقل بدون عنوان'
                  : workflowsData.sections[selectedElement.sectionIndex]?.title || 'منطقة بدون عنوان'
                : 'الإعدادات'}
            </h3>
          </div>

          {/* Accordion Sections */}
          <div className="divide-y divide-gray-200">
            {/* الإعدادات */}
            <div>
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'settings' ? '' : 'settings')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span
                    className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] ${activeAccordion === 'settings' ? 'font-bold text-black' : 'text-gray-700'}`}
                  >
                    الإعدادات
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${activeAccordion === 'settings' ? 'rotate-180 text-[#0c4749]' : 'text-gray-400'}`}
                />
              </button>
              {activeAccordion === 'settings' && (
                <div className="p-4 space-y-4 bg-gray-50">
                  {selectedElement?.type === 'field' && selectedElement.fieldIndex !== undefined ? (
                    // إعدادات الحقل
                    <>
                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block mb-2">
                          <span className="text-black">اسم الحقل</span>
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={
                            workflowsData.sections[selectedElement.sectionIndex]?.fields?.[
                              selectedElement.fieldIndex
                            ]?.label || ''
                          }
                          onChange={(e) => updateFieldProperty('label', e.target.value)}
                          placeholder="القسم"
                          className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]"
                        />
                      </div>

                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block mb-2">
                          <span className="text-black">نوع الحقل</span>
                          <span className="text-red-600">*</span>
                        </label>
                        <select
                          value={
                            workflowsData.sections[selectedElement.sectionIndex]?.fields?.[
                              selectedElement.fieldIndex
                            ]?.type || 'input'
                          }
                          onChange={(e) => updateFieldProperty('type', e.target.value)}
                          className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]"
                        >
                          <option value="input">حقل إدخال</option>
                          <option value="dropdown">قائمة منسدلة</option>
                          <option value="checkbox">مربع اختيار</option>
                          <option value="radio">زر اختيار فردي</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between py-2">
                        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-black [direction:rtl]">
                          حقل إجباري
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={
                              workflowsData.sections[selectedElement.sectionIndex]?.fields?.[
                                selectedElement.fieldIndex
                              ]?.required || false
                            }
                            onChange={(e) => updateFieldProperty('required', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0c4749]"></div>
                        </label>
                      </div>

                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block mb-2">
                          <span className="text-black">معرف الحقل</span>
                          <span className="text-red-600">*</span>
                          <span className="text-gray-500 text-xs">ID</span>
                        </label>
                        <input
                          type="text"
                          value={
                            workflowsData.sections[selectedElement.sectionIndex]?.fields?.[
                              selectedElement.fieldIndex
                            ]?.id || ''
                          }
                          readOnly
                          placeholder="field_id"
                          className="w-full h-10 px-3 bg-gray-100 rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] outline-none"
                        />
                      </div>

                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block mb-2">
                          <span className="text-black">النص المساعد</span>
                        </label>
                        <input
                          type="text"
                          value={
                            workflowsData.sections[selectedElement.sectionIndex]?.fields?.[
                              selectedElement.fieldIndex
                            ]?.placeholder || ''
                          }
                          onChange={(e) => updateFieldProperty('placeholder', e.target.value)}
                          placeholder="ادخل اسم القسم هنا ..."
                          className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]"
                        />
                      </div>

                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block mb-2">
                          <span className="text-black">القيمة الافتراضية</span>
                        </label>
                        <input
                          type="text"
                          value={
                            workflowsData.sections[selectedElement.sectionIndex]?.fields?.[
                              selectedElement.fieldIndex
                            ]?.defaultValue || ''
                          }
                          onChange={(e) => updateFieldProperty('defaultValue', e.target.value)}
                          className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]"
                        />
                      </div>

                      {/* زر الحذف */}
                      <button
                        onClick={deleteSelectedElement}
                        className="w-full h-10 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        حذف الحقل
                      </button>
                    </>
                  ) : selectedElement?.type === 'section' ||
                    selectedElement?.type === 'table' ||
                    selectedElement?.type === 'checklist' ? (
                    // إعدادات المنطقة/الجدول/قائمة التحقق
                    <>
                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block mb-2">
                          <span className="text-black">
                            اسم{' '}
                            {selectedElement.type === 'table'
                              ? 'الجدول'
                              : selectedElement.type === 'checklist'
                                ? 'القائمة'
                                : 'المنطقة'}
                          </span>
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={workflowsData.sections[selectedElement.sectionIndex]?.title || ''}
                          onChange={(e) => updateSectionProperty('title', e.target.value)}
                          placeholder="اسم المنطقة هنا ..."
                          className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]"
                        />
                      </div>

                      <div>
                        <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block mb-2">
                          <span className="text-black">الوصف</span>
                        </label>
                        <textarea
                          value={workflowsData.sections[selectedElement.sectionIndex]?.description || ''}
                          onChange={(e) => updateSectionProperty('description', e.target.value)}
                          placeholder="إبدأ بكتابة وصف لهذه المنطقة هنا ......."
                          rows={3}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749] resize-none"
                        />
                      </div>

                      {selectedElement.type === 'table' && (
                        <div>
                          <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] block mb-2">
                            <span className="text-black">عدد الصفوف</span>
                          </label>
                          <input
                            type="number"
                            value={workflowsData.sections[selectedElement.sectionIndex]?.rows || 3}
                            onChange={(e) =>
                              updateSectionProperty('rows', parseInt(e.target.value) || 3)
                            }
                            min="1"
                            className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] outline-none focus:border-[#0c4749]"
                          />
                        </div>
                      )}

                      {/* زر الحذف */}
                      <button
                        onClick={deleteSelectedElement}
                        className="w-full h-10 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        حذف{' '}
                        {selectedElement.type === 'table'
                          ? 'الجدول'
                          : selectedElement.type === 'checklist'
                            ? 'القائمة'
                            : 'المنطقة'}
                      </button>
                    </>
                  ) : (
                    // لا يوجد عنصر محدد
                    <div className="text-center py-8">
                      <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-500 [direction:rtl]">
                        اختر حقلاً أو منطقة لعرض الإعدادات
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* الشروط */}
            <div>
              <button
                onClick={() =>
                  setActiveAccordion(activeAccordion === 'conditions' ? '' : 'conditions')
                }
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-gray-600" />
                  <span
                    className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] ${activeAccordion === 'conditions' ? 'font-bold text-black' : 'text-gray-700'}`}
                  >
                    الشروط
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${activeAccordion === 'conditions' ? 'rotate-180 text-[#0c4749]' : 'text-gray-400'}`}
                />
              </button>
              {activeAccordion === 'conditions' && (
                <div className="p-4 space-y-4 bg-gray-50">
                  <div>
                    <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-bold text-black [direction:rtl] mb-3">
                      الظهور
                    </div>

                    {/* الظهور الافتراضي */}
                    <div className="mb-4">
                      <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-black [direction:rtl] mb-2">
                        الظهور الافتراضي
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-700 [direction:rtl]">
                          يظهر للجميع
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0c4749]"></div>
                        </label>
                      </div>
                    </div>

                    {/* ظهور شرطي */}
                    <div className="mb-4">
                      <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-black [direction:rtl] mb-2">
                        ظهور شرطي
                      </div>
                      <div className="flex items-center justify-between py-2 mb-3">
                        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-700 [direction:rtl]">
                          يظهر فقط
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0c4749]"></div>
                        </label>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <select className="flex-1 h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]">
                          <option>مسمى وظيفي</option>
                        </select>
                        <span className="flex items-center text-gray-500">=</span>
                        <select className="flex-1 h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]">
                          <option>مدير فرع</option>
                        </select>
                      </div>
                      <button className="w-full h-10 bg-gray-200 text-gray-700 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs hover:bg-gray-300 transition-colors">
                        أضف شرط ظهور
                      </button>
                    </div>

                    {/* التحقق */}
                    <div>
                      <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-black [direction:rtl] mb-3">
                        التحقق
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs text-gray-600 [direction:rtl] block mb-2">
                            عدد الحروف يجب ألا يتجاوز
                          </label>
                          <div className="mb-2">
                            <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs text-gray-600 [direction:rtl] block mb-1">
                              العدد
                            </label>
                            <input
                              type="text"
                              placeholder="10"
                              className="w-full h-10 px-3 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] outline-none focus:border-[#0c4749]"
                            />
                          </div>
                          <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs text-gray-600 [direction:rtl] block mb-1">
                            تخصيص رسالة الخطأ
                          </label>
                          <div className="bg-gray-100 rounded-lg p-3 mb-2">
                            <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs text-gray-600 [direction:rtl]">
                              لا يمكن تجاوز 10 أحرف في هذا الحقل
                            </p>
                          </div>
                        </div>
                        <button className="w-full h-10 bg-gray-200 text-gray-700 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs hover:bg-gray-300 transition-colors">
                          أضف شرط تحقق
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* المظهر */}
            <div>
              <button
                onClick={() =>
                  setActiveAccordion(activeAccordion === 'appearance' ? '' : 'appearance')
                }
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-gray-600" />
                  <span
                    className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] ${activeAccordion === 'appearance' ? 'font-bold text-black' : 'text-gray-700'}`}
                  >
                    المظهر
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${activeAccordion === 'appearance' ? 'rotate-180 text-[#0c4749]' : 'text-gray-400'}`}
                />
              </button>
              {activeAccordion === 'appearance' && (
                <div className="p-4 bg-gray-50">
                  <div>
                    <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-black [direction:rtl] mb-3">
                      خصص لون من هنا
                    </div>
                    <div className="flex gap-2 flex-wrap mb-3">
                      {[
                        { color: '#f5d5c3', name: 'بيج' },
                        { color: '#2d2d2d', name: 'رمادي غامق' },
                        { color: '#0c4749', name: 'أخضر غامق' },
                        { color: '#16a34a', name: 'أخضر' },
                        { color: '#0ea5e9', name: 'أزرق فاتح' },
                        { color: '#14b8a6', name: 'تركواز' },
                        { color: '#ef4444', name: 'أحمر' },
                        { color: '#a855f7', name: 'بنفسجي' },
                        { color: '#f59e0b', name: 'برتقالي' },
                      ].map(({ color, name }) => {
                        const isSelected =
                          (selectedElement?.type === 'field' &&
                            selectedElement.fieldIndex !== undefined &&
                            workflowsData.sections[selectedElement.sectionIndex]?.fields?.[
                              selectedElement.fieldIndex
                            ]?.color === color) ||
                          ((selectedElement?.type === 'section' ||
                            selectedElement?.type === 'table' ||
                            selectedElement?.type === 'checklist') &&
                            workflowsData.sections[selectedElement.sectionIndex]?.color === color);

                        return (
                          <button
                            key={color}
                            onClick={() => {
                              if (
                                selectedElement?.type === 'field' &&
                                selectedElement.fieldIndex !== undefined
                              ) {
                                updateFieldProperty('color', color);
                              } else if (
                                selectedElement?.type === 'section' ||
                                selectedElement?.type === 'table' ||
                                selectedElement?.type === 'checklist'
                              ) {
                                updateSectionProperty('color', color);
                              }
                            }}
                            className={`w-8 h-8 rounded-lg transition-all ${
                              isSelected
                                ? 'ring-2 ring-offset-2 ring-[#0c4749] scale-110'
                                : 'hover:scale-105'
                            }`}
                            style={{ backgroundColor: color }}
                            title={name}
                          />
                        );
                      })}
                    </div>

                    {/* زر إعادة التهيئة */}
                    <button
                      onClick={() => {
                        if (
                          selectedElement?.type === 'field' &&
                          selectedElement.fieldIndex !== undefined
                        ) {
                          updateFieldProperty('color', null);
                        } else if (
                          selectedElement?.type === 'section' ||
                          selectedElement?.type === 'table' ||
                          selectedElement?.type === 'checklist'
                        ) {
                          updateSectionProperty('color', null);
                        }
                      }}
                      className="w-full h-9 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium"
                    >
                      إعادة التهيئة (بدون لون)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* العمليات */}
            <div>
              <button
                onClick={() =>
                  setActiveAccordion(activeAccordion === 'operations' ? '' : 'operations')
                }
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-gray-600" />
                  <span
                    className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl] ${activeAccordion === 'operations' ? 'font-bold text-black' : 'text-gray-700'}`}
                  >
                    العمليات
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${activeAccordion === 'operations' ? 'rotate-180 text-[#0c4749]' : 'text-gray-400'}`}
                />
              </button>
              {activeAccordion === 'operations' && (
                <div className="p-4 bg-gray-50">
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-500 text-center [direction:rtl]">
                    لا توجد عمليات متاحة
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        )}
      </div>

      {/* Modals */}
      <ColumnModal
        showColumnModal={showColumnModal}
        setShowColumnModal={setShowColumnModal}
        newColumnName={newColumnName}
        setNewColumnName={setNewColumnName}
        addColumn={addColumn}
        primaryColor={primaryColor}
        dir={dir}
      />

      <ChecklistItemModal
        showChecklistItemModal={showChecklistItemModal}
        setShowChecklistItemModal={setShowChecklistItemModal}
        newChecklistItemText={newChecklistItemText}
        setNewChecklistItemText={setNewChecklistItemText}
        addChecklistItem={addChecklistItem}
        primaryColor={primaryColor}
        dir={dir}
      />

      {/* Add Node Modal */}
      <AddNodeModal
        show={showNodeModal}
        onClose={() => setShowNodeModal(false)}
        modalType={nodeModalType}
        onAddNode={addNewNode}
        dir={dir}
      />
    </Layout>
  );
};

