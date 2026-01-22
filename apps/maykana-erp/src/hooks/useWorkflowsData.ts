import { useState } from 'react';
import { Node, Edge } from 'reactflow';
import {
  FORM_BUILDER_FIELDS,
  FORM_BUILDER_TABLE_ROWS,
  FORM_BUILDER_INITIAL_NODES,
  FORM_BUILDER_INITIAL_EDGES,
  INITIAL_SECTIONS,
  FIELD_TYPES,
  FLOW_INITIAL_NODES,
  FLOW_INITIAL_EDGES,
} from '../data/workflows.data';
import type { FieldType, Section } from '../screens/Workflows/components/types';

/**
 * Custom Hook for managing all dummy/sample data in the workflow system
 * 
 * This hook centralizes all dummy data management and provides state management
 * for mutable data like sections, nodes, and edges.
 * 
 * @returns {Object} Object containing all dummy data and their state setters where applicable
 */
export const useWorkflowsData = () => {
  // ============================================
  // Form Builder State
  // ============================================
  const [formBuilderFields, setFormBuilderFields] = useState(FORM_BUILDER_FIELDS);
  const [formBuilderTableRows, setFormBuilderTableRows] = useState(FORM_BUILDER_TABLE_ROWS);
  const [formBuilderNodes, setFormBuilderNodes] = useState<Node[]>(FORM_BUILDER_INITIAL_NODES);
  const [formBuilderEdges, setFormBuilderEdges] = useState<Edge[]>(FORM_BUILDER_INITIAL_EDGES);

  // ============================================
  // Form View State
  // ============================================
  const [sections, setSections] = useState<Section[]>(INITIAL_SECTIONS);

  // ============================================
  // Static Data (Read-only)
  // ============================================
  const fieldTypes: FieldType[] = FIELD_TYPES;

  // ============================================
  // Flow View State
  // ============================================
  const [flowNodes, setFlowNodes] = useState<Node[]>(FLOW_INITIAL_NODES);
  const [flowEdges, setFlowEdges] = useState<Edge[]>(FLOW_INITIAL_EDGES);

  return {
    // Form Builder
    formBuilderFields,
    setFormBuilderFields,
    formBuilderTableRows,
    setFormBuilderTableRows,
    formBuilderNodes,
    setFormBuilderNodes,
    formBuilderEdges,
    setFormBuilderEdges,
    
    // Form View
    sections,
    setSections,
    
    // Static Data
    fieldTypes,
    
    // Flow View
    flowNodes,
    setFlowNodes,
    flowEdges,
    setFlowEdges,
  };
};
