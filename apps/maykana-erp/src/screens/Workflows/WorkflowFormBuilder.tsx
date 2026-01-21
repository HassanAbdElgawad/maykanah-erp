import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Copy, Grid3x3, Zap, CheckSquare, GitBranch, Eye } from 'lucide-react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  useNodesState,
  useEdgesState,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface FormField {
  id: string;
  type: 'text' | 'date' | 'select' | 'number';
  label: string;
  placeholder?: string;
  required?: boolean;
  width?: 'full' | 'half' | 'third';
}

interface TableColumn {
  id: string;
  label: string;
}

interface TableRow {
  id: string;
  data: { [key: string]: string };
}

// Custom Node Components
const StartNode = ({ data }: any) => (
  <div className="w-96 bg-[#ecfbff] rounded-xl p-4">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-[#41d1fe] rounded flex items-center justify-center flex-shrink-0">
        <Zap className="w-5 h-5 text-white" />
      </div>
      <span className="text-sm font-semibold text-[#41d1fe]">{data.label}</span>
    </div>
  </div>
);

const ActionNode = ({ data }: any) => (
  <div className="w-96">
    <div className="w-full bg-[#0c4749] text-white px-4 py-3 rounded-xl text-sm font-semibold">
      {data.label}
    </div>
  </div>
);

const BranchNode = ({ data }: any) => (
  <div className="w-[362px] bg-[#e7eded] rounded-xl p-3 flex items-center gap-2">
    <GitBranch className="w-4 h-4 text-[#0c4749] flex-shrink-0" />
    <span className="text-sm font-semibold text-[#0c4749]">{data.label}</span>
  </div>
);

const EndNode = ({ data }: any) => (
  <div className="w-96 bg-[#eaf9f4] rounded-xl p-4">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-[#2cc28d] rounded flex items-center justify-center flex-shrink-0">
        <CheckSquare className="w-5 h-5 text-white" />
      </div>
      <span className="text-sm font-semibold text-[#2cc28d]">{data.label}</span>
    </div>
  </div>
);

const nodeTypes = {
  startNode: StartNode,
  actionNode: ActionNode,
  branchNode: BranchNode,
  endNode: EndNode,
};

export const WorkflowFormBuilder = (): JSX.Element => {
  const { dir } = useLanguage();
  const navigate = useNavigate();

  // Define workflow nodes
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'startNode',
      position: { x: 0, y: 0 },
      data: { label: 'بداية العملية عند تقديم نموذج الطلب' },
      sourcePosition: Position.Bottom,
    },
    {
      id: '2',
      type: 'actionNode',
      position: { x: 0, y: 80 },
      data: { label: 'تعبئة نموذج الطلب' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '3',
      type: 'branchNode',
      position: { x: -140, y: 160 },
      data: { label: 'الفرع الأول : موافقة رئيس القسم' },
      targetPosition: Position.Right,
    },
    {
      id: '4',
      type: 'branchNode',
      position: { x: -140, y: 235 },
      data: { label: 'الفرع الثاني: موافقة قسم المالية' },
      targetPosition: Position.Right,
    },
    {
      id: '5',
      type: 'branchNode',
      position: { x: -140, y: 310 },
      data: { label: 'الفرع الثالث: تنفيذ قسم المشتريات' },
      targetPosition: Position.Right,
    },
    {
      id: '6',
      type: 'endNode',
      position: { x: 0, y: 390 },
      data: { label: 'إنتهاء عملية طلب مواد' },
      targetPosition: Position.Top,
    },
  ];

  const initialEdges: Edge[] = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'straight',
      style: { stroke: '#b5b5b5', strokeWidth: 2 },
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      type: 'smoothstep',
      style: { stroke: '#b5b5b5', strokeWidth: 2 },
    },
    {
      id: 'e2-4',
      source: '2',
      target: '4',
      type: 'smoothstep',
      style: { stroke: '#b5b5b5', strokeWidth: 2 },
    },
    {
      id: 'e2-5',
      source: '2',
      target: '5',
      type: 'smoothstep',
      style: { stroke: '#b5b5b5', strokeWidth: 2 },
    },
    {
      id: 'e3-6',
      source: '3',
      target: '6',
      type: 'smoothstep',
      style: { stroke: '#b5b5b5', strokeWidth: 2 },
    },
    {
      id: 'e4-6',
      source: '4',
      target: '6',
      type: 'smoothstep',
      style: { stroke: '#b5b5b5', strokeWidth: 2 },
    },
    {
      id: 'e5-6',
      source: '5',
      target: '6',
      type: 'smoothstep',
      style: { stroke: '#b5b5b5', strokeWidth: 2 },
    },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const [formTitle, setFormTitle] = useState('منطقة بدون عنوان');
  const [formDescription, setFormDescription] = useState(
    'إبدأ بكتابة وصف لهذه المنطقة هنا .......'
  );

  const [formFields, setFormFields] = useState<FormField[]>([
    {
      id: '1',
      type: 'text',
      label: 'رقم الطلب',
      placeholder: 'رقم الطلب هنا ...',
      required: true,
      width: 'half',
    },
    {
      id: '2',
      type: 'text',
      label: 'اسم مقدم الطلب',
      placeholder: 'اسم مقدم الطلب من هنا ...',
      required: true,
      width: 'half',
    },
    { id: '3', type: 'text', label: 'القسم', placeholder: '', required: true, width: 'half' },
    { id: '4', type: 'date', label: 'تاريخ الطلب', required: true, width: 'half' },
    { id: '5', type: 'select', label: 'قائمة منسدلة بدون عنوان', required: true, width: 'half' },
  ]);

  const [tableColumns] = useState<TableColumn[]>([
    { id: '1', label: 'فئة المادة' },
    { id: '2', label: 'الوصف' },
  ]);

  const [tableRows, setTableRows] = useState<TableRow[]>([
    { id: '1', data: { '1': '', '2': '' } },
    { id: '2', data: { '1': '', '2': '' } },
  ]);

  const addFormField = () => {
    const newField: FormField = {
      id: Date.now().toString(),
      type: 'text',
      label: 'حقل جديد',
      placeholder: 'أدخل النص...',
      width: 'full',
    };
    setFormFields([...formFields, newField]);
  };

  const removeFormField = (id: string) => {
    setFormFields(formFields.filter((field) => field.id !== id));
  };

  const duplicateFormField = (field: FormField) => {
    const newField = { ...field, id: Date.now().toString() };
    const index = formFields.findIndex((f) => f.id === field.id);
    const newFields = [...formFields];
    newFields.splice(index + 1, 0, newField);
    setFormFields(newFields);
  };

  const addTableRow = () => {
    const newRow: TableRow = {
      id: Date.now().toString(),
      data: tableColumns.reduce((acc, col) => ({ ...acc, [col.id]: '' }), {}),
    };
    setTableRows([...tableRows, newRow]);
  };

  const removeTableRow = (id: string) => {
    if (tableRows.length > 1) {
      setTableRows(tableRows.filter((row) => row.id !== id));
    }
  };

  const updateTableCell = (rowId: string, colId: string, value: string) => {
    setTableRows(
      tableRows.map((row) =>
        row.id === rowId ? { ...row, data: { ...row.data, [colId]: value } } : row
      )
    );
  };

  const renderFormField = (field: FormField) => {
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
              style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
            />
          ) : field.type === 'date' ? (
            <input
              type="date"
              className="w-full h-9 px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
            />
          ) : field.type === 'select' ? (
            <select
              className="w-full h-9 px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
            >
              <option value="">اختر...</option>
            </select>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div
        className="flex gap-4 h-[calc(100vh-120px)] bg-[#f7f7f9]"
        style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
      >
        {/* Right Sidebar - Workflow Steps with React Flow */}
        <div className="w-[502px] bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="h-full" style={{ direction: 'ltr', minHeight: '600px' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.2 }}
              minZoom={0.8}
              maxZoom={1.2}
              defaultViewport={{ x: 250, y: 50, zoom: 1 }}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              zoomOnScroll={false}
              panOnScroll={false}
              panOnDrag={false}
              preventScrolling={false}
              proOptions={{ hideAttribution: true }}
              style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica" }}
            >
              <Background color="#f0f0f0" gap={16} size={0.5} />
            </ReactFlow>
          </div>
        </div>
        {/* Main Form Builder Area */}
        <div className="flex-1 bg-[#f7f7f9] rounded-xl overflow-auto">
          {/* Header with Tabs */}
          <div className="bg-white rounded-t-xl mb-4">
            <div className="flex gap-1 px-4 pt-4">
              <button className="px-8 py-2.5 font-medium text-[#0c4749] bg-[#e7eded] rounded-[17.5px] text-base">
                النموذج
              </button>
              <button className="px-8 py-2.5 font-medium text-[#0c4749] bg-[#0c47491a] rounded-[17.5px] text-base">
                سير العمل
              </button>
              <button className="px-8 py-2.5 font-medium text-white bg-[#0c4749] rounded-[17.5px] text-base">
                الصلاحيات
              </button>
            </div>
          </div>

          <div className="px-4">
            {/* Form Area */}
            <div className="bg-slate-50 rounded-xl border border-[#0c474921] shadow-[0px_5px_10px_#00000014] p-8 mb-6">
              {/* Form Title and Actions */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="text-lg font-bold text-black border-0 focus:outline-none w-full mb-2 bg-transparent"
                    style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
                  />
                  <textarea
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    className="w-full text-base text-[#00000099] border-0 focus:outline-none resize-none bg-transparent"
                    style={{ fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}
                    rows={1}
                  />
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    className="w-[37px] h-[37px] flex items-center justify-center bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                    title="معاينة"
                  >
                    <Eye className="w-[18px] h-[18px] text-gray-600" />
                  </button>
                  <button
                    className="w-[37px] h-[37px] flex items-center justify-center bg-[#0c4749] rounded-lg hover:bg-[#0d4849] transition-colors"
                    title="إعدادات"
                  >
                    <Grid3x3 className="w-[22px] h-[22px] text-white" />
                  </button>
                  <button
                    className="w-[37px] h-[37px] flex items-center justify-center bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                    title="نسخ"
                  >
                    <Copy className="w-[18px] h-[18px] text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-wrap gap-4 mb-4">
                {formFields.map((field) => renderFormField(field))}
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
                    {tableRows.map((row, index) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 border-b border-slate-100 text-right text-sm font-semibold text-[#0e0d24]">
                          {index + 1}
                        </td>
                        <td className="px-4 py-3 border-b border-slate-100">
                          <input
                            type="text"
                            value={row.data['1'] || ''}
                            onChange={(e) => updateTableCell(row.id, '1', e.target.value)}
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
                            onChange={(e) => updateTableCell(row.id, '2', e.target.value)}
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
            <div className="sticky bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 flex gap-3 justify-end mt-6">
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
    </Layout>
  );
};
