// Workflows Cards Data - Sample workflow cards for workflow engine
export interface WorkflowCard {
  id: string;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
  status: 'launched' | 'draft';
}

// Note: This uses translation keys, so the actual data will be in the component
// This file exports the structure for workflows that don't use translations
export const WORKFLOW_CARDS_CONFIG = {
  iconColor: '#8B5CF6',
  iconBg: '#F3F4F6',
  statuses: ['launched', 'draft'] as const,
};

// Export a helper to create workflow cards
export const createWorkflowCard = (
  id: string,
  title: string,
  description: string,
  status: 'launched' | 'draft' = 'draft'
): WorkflowCard => ({
  id,
  title,
  description,
  iconColor: WORKFLOW_CARDS_CONFIG.iconColor,
  iconBg: WORKFLOW_CARDS_CONFIG.iconBg,
  status,
});
