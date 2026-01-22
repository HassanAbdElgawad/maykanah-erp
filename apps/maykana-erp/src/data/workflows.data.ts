import { Node, Edge, Position } from 'reactflow';
import {
  CheckSquare,
  List,
  Type,
  Upload,
  User,
  Star,
  Grid3x3,
  FileCheck,
} from 'lucide-react';
import type { FieldType, Section } from '../screens/Workflows/components/types';

// ============================================
// Form Builder Data
// ============================================

export const FORM_BUILDER_FIELDS = [
  { id: '1', type: 'text', label: 'رقم الطلب', placeholder: 'رقم الطلب هنا ...', required: true, width: 'half' },
  { id: '2', type: 'text', label: 'اسم مقدم الطلب', placeholder: 'اسم مقدم الطلب من هنا ...', required: true, width: 'half' },
  { id: '3', type: 'text', label: 'القسم', placeholder: '', required: true, width: 'half' },
  { id: '4', type: 'date', label: 'تاريخ الطلب', required: true, width: 'half' },
  { id: '5', type: 'select', label: 'قائمة منسدلة بدون عنوان', required: true, width: 'half' },
];

export const FORM_BUILDER_TABLE_ROWS = [
  { id: '1', data: { '1': '', '2': '' } },
  { id: '2', data: { '1': '', '2': '' } },
];

export const FORM_BUILDER_INITIAL_NODES: Node[] = [
  { 
    id: '1', 
    type: 'processStart', 
    position: { x: 15, y: 0 }, 
    data: { label: 'بداية العملية عند تقديم نموذج الطلب' }, 
    sourcePosition: Position.Right 
  },
  { 
    id: '2', 
    type: 'processActive', 
    position: { x: 15, y: 85 }, 
    data: { label: 'تعبئة نموذج الطلب' }, 
    sourcePosition: Position.Right, 
    targetPosition: Position.Right 
  },
  { 
    id: '3', 
    type: 'processBranch', 
    position: { x: -60, y: 170 }, 
    data: { label: 'الفرع الأول : موافقة رئيس القسم' }, 
    sourcePosition: Position.Right, 
    targetPosition: Position.Right 
  },
  { 
    id: '4', 
    type: 'processBranch', 
    position: { x: -60, y: 255 }, 
    data: { label: 'الفرع الثاني: موافقة قسم المالية' }, 
    sourcePosition: Position.Right, 
    targetPosition: Position.Right 
  },
  { 
    id: '5', 
    type: 'processBranch', 
    position: { x: -60, y: 340 }, 
    data: { label: 'الفرع الثالث: تنفيذ قسم المشتريات' }, 
    sourcePosition: Position.Right, 
    targetPosition: Position.Right 
  },
  { 
    id: '6', 
    type: 'processEnd', 
    position: { x: 15, y: 425 }, 
    data: { label: 'إنتهاء عملية طلب مواد' }, 
    targetPosition: Position.Right 
  },
];

export const FORM_BUILDER_INITIAL_EDGES: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', sourceHandle: null, targetHandle: null, style: { stroke: '#D9D9D9', strokeWidth: 2 }, markerEnd: undefined },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', sourceHandle: null, targetHandle: null, style: { stroke: '#D9D9D9', strokeWidth: 2 }, markerEnd: undefined },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', sourceHandle: null, targetHandle: null, style: { stroke: '#D9D9D9', strokeWidth: 2 }, markerEnd: undefined },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', sourceHandle: null, targetHandle: null, style: { stroke: '#D9D9D9', strokeWidth: 2 }, markerEnd: undefined },
  { id: 'e3-6', source: '3', target: '6', type: 'smoothstep', sourceHandle: null, targetHandle: null, style: { stroke: '#D9D9D9', strokeWidth: 2 }, markerEnd: undefined },
  { id: 'e4-6', source: '4', target: '6', type: 'smoothstep', sourceHandle: null, targetHandle: null, style: { stroke: '#D9D9D9', strokeWidth: 2 }, markerEnd: undefined },
  { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', sourceHandle: null, targetHandle: null, style: { stroke: '#D9D9D9', strokeWidth: 2 }, markerEnd: undefined },
];

// ============================================
// Initial Sections Data
// ============================================

export const INITIAL_SECTIONS: Section[] = [
  {
    id: 1,
    type: 'form',
    title: 'منطقة بدون عنوان',
    description: 'إبدأ بكتابة وصف لهذه المنطقة هنا .......',
    fields: [
      { id: 1, label: 'رقم الطلب', placeholder: 'رقم الطلب هنا ...', required: true },
      {
        id: 2,
        label: 'اسم مقدم الطلب',
        placeholder: 'اسم مقدم الطلب من هنا ...',
        required: true,
      },
      { id: 3, label: 'القسم', placeholder: '', required: true },
      {
        id: 4,
        label: 'قائمة منسدلة بدون عنوان',
        placeholder: 'اسحب أو اضغط لإضافة حقل جديد لعمود جديد',
        required: false,
      },
      {
        id: 5,
        label: 'تاريخ الطلب',
        placeholder: 'اسم الوقت هنا ...',
        required: true,
      },
    ],
  },
  {
    id: 2,
    type: 'table',
    title: 'جدول بدون عنوان',
    description: 'إبدأ بكتابة وصف لجدول هنا ......',
    columns: [
      { id: 1, name: 'عمود بدون عنوان' },
      { id: 2, name: 'عمود بدون عنوان' },
      { id: 3, name: 'عمود بدون عنوان' },
    ],
    rows: 3,
  },
];

// ============================================
// Field Types Data
// ============================================

export const FIELD_TYPES: FieldType[] = [
  { id: 'input', name: 'حقل إدخال', nameEn: 'Input Field', icon: Type, category: 'basic' },
  { id: 'dropdown', name: 'قائمة منسدلة', nameEn: 'Dropdown', icon: List, category: 'basic' },
  {
    id: 'multi-select',
    name: 'ق/ متعددة الاختيار',
    nameEn: 'Multi-Select',
    icon: CheckSquare,
    category: 'basic',
  },
  {
    id: 'radio',
    name: 'زر اختيار فردي',
    nameEn: 'Radio Button',
    icon: CheckSquare,
    category: 'basic',
  },
  {
    id: 'checkbox',
    name: 'مربع اختيار',
    nameEn: 'Checkbox',
    icon: CheckSquare,
    category: 'basic',
  },
  {
    id: 'toggle',
    name: 'زر تشغيل / إيقاف',
    nameEn: 'Toggle',
    icon: CheckSquare,
    category: 'basic',
  },
  {
    id: 'user-select',
    name: 'اختيار المستخدم',
    nameEn: 'User Select',
    icon: User,
    category: 'basic',
  },
  { id: 'button', name: 'زر تفاعلي', nameEn: 'Button', icon: CheckSquare, category: 'control' },
  { id: 'image', name: 'صورة', nameEn: 'Image', icon: CheckSquare, category: 'control' },
  { id: 'rating', name: 'مراجعة', nameEn: 'Rating', icon: Star, category: 'control' },
  { id: 'grid', name: 'شبكة', nameEn: 'Grid', icon: Grid3x3, category: 'control' },
  { id: 'file', name: 'رفع ملف', nameEn: 'File Upload', icon: Upload, category: 'control' },
  {
    id: 'checklist',
    name: 'قائمة تحقق',
    nameEn: 'Checklist',
    icon: FileCheck,
    category: 'table',
  },
  { id: 'table', name: 'جدول', nameEn: 'Table', icon: Grid3x3, category: 'table' },
];

// ============================================
// Flow View Data
// ============================================

export const FLOW_INITIAL_NODES: Node[] = [
  {
    id: '1',
    type: 'custom',
    data: { 
      label: 'بداية العملية عند تقديم نموذج الطلب',
      type: 'start',
      color: '#41d1fe'
    },
    position: { x: 400, y: 50 },
    style: { width: 388, height: 124 },
    draggable: true
  },
  {
    id: '2',
    type: 'custom',
    data: { 
      label: 'تعبئة فحص النظافة',
      subtitle: 'مشرف الفرع',
      type: 'task',
      icon: 'form'
    },
    position: { x: 400, y: 240 },
    style: { width: 388, height: 162 },
    draggable: true
  },
  {
    id: '3',
    type: 'custom',
    data: { 
      label: 'مراجعة وتقييم الفحص',
      subtitle: 'مدير الفرع',
      type: 'task',
      icon: 'review'
    },
    position: { x: 400, y: 480 },
    style: { width: 388, height: 162 },
    draggable: true
  },
  {
    id: '4',
    type: 'custom',
    data: { 
      label: 'نظافة غير كافية',
      description: 'النظافة دون المستوى المطلوب، يعاد الفحص بعد تصحيح الملاحظات',
      type: 'failure',
      color: '#ff0000',
      icon: 'alert'
    },
    position: { x: 120, y: 720 },
    style: { width: 388, height: 162 },
    draggable: true
  },
  {
    id: '5',
    type: 'custom',
    data: { 
      label: 'نظافة مقبولة',
      description: 'النظافة في مستوى جيد، يرسل التقرير إلى الإدارة لاعتماده النهائي',
      type: 'success',
      color: '#2cc28d',
      icon: 'check'
    },
    position: { x: 820, y: 720 },
    style: { width: 388, height: 162 },
    draggable: true
  },
  {
    id: '6',
    type: 'custom',
    data: { 
      label: 'إنتهى',
      type: 'end',
      color: '#2cc28d'
    },
    position: { x: 520, y: 1020 },
    style: { width: 130, height: 51 },
    draggable: true
  }
];

export const FLOW_INITIAL_EDGES: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'يحدث دائما',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#999', strokeWidth: 2 },
    labelStyle: { fill: '#666', fontWeight: 500, fontSize: 14 },
    labelBgStyle: { fill: 'white', fillOpacity: 0.8 }
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    label: 'يحدث دائما',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#999', strokeWidth: 2 },
    labelStyle: { fill: '#666', fontWeight: 500, fontSize: 14 },
    labelBgStyle: { fill: 'white', fillOpacity: 0.8 }
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    label: 'إذا كانت نسبة الالتزام < 80٪',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#ff0000', strokeWidth: 2 },
    labelStyle: { fill: '#ff0000', fontWeight: 600, fontSize: 14 },
    labelBgStyle: { fill: 'white', fillOpacity: 0.9 }
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    label: 'إذا كانت نسبة الالتزام ≥ 80٪',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#2cc28d', strokeWidth: 2 },
    labelStyle: { fill: '#2cc28d', fontWeight: 600, fontSize: 14 },
    labelBgStyle: { fill: 'white', fillOpacity: 0.9 }
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    label: 'يحدث دائما',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#999', strokeWidth: 2 },
    labelStyle: { fill: '#666', fontWeight: 500, fontSize: 14 },
    labelBgStyle: { fill: 'white', fillOpacity: 0.8 }
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    label: 'يحدث دائما',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#999', strokeWidth: 2 },
    labelStyle: { fill: '#666', fontWeight: 500, fontSize: 14 },
    labelBgStyle: { fill: 'white', fillOpacity: 0.8 }
  }
];
