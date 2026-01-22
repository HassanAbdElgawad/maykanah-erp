import { Node, Edge } from 'reactflow';

export type ViewMode = 'form' | 'flow' | 'formBuilder';
export type ScreenSize = 'mobile' | 'tablet' | 'desktop';

export interface FieldType {
  id: string;
  name: string;
  nameEn: string;
  icon: any;
  category: 'basic' | 'control' | 'table';
}

export interface Field {
  id: number | string;
  label: string;
  placeholder?: string;
  required: boolean;
  type?: string;
  width?: 'full' | 'half' | 'third';
  defaultValue?: string;
  color?: string;
}

export interface TableColumn {
  id: number;
  name: string;
}

export interface ChecklistItem {
  id: number;
  text: string;
  checked: boolean;
}

export interface Section {
  id: number;
  type: 'form' | 'table' | 'checklist' | 'empty';
  title: string;
  description: string;
  fields?: Field[];
  columns?: TableColumn[];
  rows?: number;
  items?: ChecklistItem[];
  color?: string;
}

export interface SelectedElement {
  type: 'section' | 'field' | 'table' | 'checklist';
  sectionIndex: number;
  fieldIndex?: number;
}

export interface CustomNodeData {
  label: string;
  subtitle?: string;
  description?: string;
  type: 'start' | 'task' | 'success' | 'failure' | 'end';
  color?: string;
  icon?: string;
}

export interface WorkflowState {
  sections: Section[];
  setSections: (sections: Section[]) => void;
  screenSize: ScreenSize;
  setScreenSize: (size: ScreenSize) => void;
  selectedElement: SelectedElement | null;
  setSelectedElement: (element: SelectedElement | null) => void;
  draggedField: FieldType | null;
  setDraggedField: (field: FieldType | null) => void;
  activeAccordion: string;
  setActiveAccordion: (accordion: string) => void;
}

export interface FlowState {
  nodes: Node[];
  edges: Edge[];
  setNodes: any;
  setEdges: any;
  onNodesChange: any;
  onEdgesChange: any;
  selectedNode: Node | null;
  setSelectedNode: (node: Node | null) => void;
  selectedEdge: Edge | null;
  setSelectedEdge: (edge: Edge | null) => void;
}
