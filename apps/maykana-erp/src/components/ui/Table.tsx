import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'right' | 'center';
  width?: string;
  render?: (row: any) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  onRowClick?: (row: any) => void;
  emptyMessage?: string;
  hoverable?: boolean;
  striped?: boolean;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  onRowClick,
  emptyMessage = 'لا توجد بيانات',
  hoverable = true,
  striped = false,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const getAlignmentClass = (align?: string) => {
    const alignment = align || 'right';
    return alignment === 'right' ? 'text-right' : alignment === 'left' ? 'text-left' : 'text-center';
  };

  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
          <thead className="bg-[#f1f5f980] border-b border-slate-100">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key || index}
                  className={`px-6 py-3.5 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${getAlignmentClass(column.align)}`}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={row.id || rowIndex}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={`
                    ${hoverable ? 'hover:bg-gray-50/50 transition-colors' : ''}
                    ${onRowClick ? 'cursor-pointer' : ''}
                    ${striped && rowIndex % 2 === 1 ? 'bg-gray-25' : ''}
                  `}
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={column.key || colIndex}
                      className={`px-6 py-3.5 text-sm text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${getAlignmentClass(column.align)}`}
                    >
                      {column.render
                        ? column.render(row)
                        : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Advanced Table with Actions
export interface ActionButton {
  icon: React.ElementType;
  label: string;
  onClick: (row: any) => void;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'gray';
  show?: (row: any) => boolean;
}

export interface AdvancedTableProps extends TableProps {
  actions?: ActionButton[];
  selectableRows?: boolean;
  selectedRows?: any[];
  onSelectRow?: (row: any) => void;
  onSelectAll?: (selected: boolean) => void;
}

export const AdvancedTable: React.FC<AdvancedTableProps> = ({
  columns,
  data,
  actions = [],
  selectableRows = false,
  selectedRows = [],
  onSelectRow,
  onSelectAll,
  ...tableProps
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const allSelected = data.length > 0 && selectedRows.length === data.length;
  const someSelected = selectedRows.length > 0 && !allSelected;

  const getActionColorClass = (color?: string) => {
    switch (color) {
      case 'blue':
        return 'hover:bg-blue-50 text-blue-600';
      case 'green':
        return 'hover:bg-green-50 text-green-600';
      case 'red':
        return 'hover:bg-red-50 text-red-600';
      case 'yellow':
        return 'hover:bg-yellow-50 text-yellow-600';
      case 'gray':
        return 'hover:bg-gray-50 text-gray-600';
      default:
        return 'hover:bg-gray-50 text-gray-600';
    }
  };

  const getAlignmentClass = (align?: string) => {
    const alignment = align || 'right';
    return alignment === 'right' ? 'text-right' : alignment === 'left' ? 'text-left' : 'text-center';
  };

  const enhancedColumns = [...columns];
  if (actions.length > 0) {
    enhancedColumns.push({
      key: 'actions',
      label: 'الإجراءات',
      align: 'center',
      render: (row) => (
        <div className="flex items-center gap-1 justify-center">
          {actions.map((action, index) => {
            const shouldShow = action.show ? action.show(row) : true;
            if (!shouldShow) return null;

            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  action.onClick(row);
                }}
                title={action.label}
                className={`p-2 rounded-lg transition-all hover:scale-105 ${getActionColorClass(action.color)}`}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      ),
    });
  }

  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
          <thead className="bg-[#f1f5f980] border-b border-slate-100">
            <tr>
              {selectableRows && (
                <th className="px-6 py-3.5 w-12">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    ref={(input) => {
                      if (input) input.indeterminate = someSelected;
                    }}
                    onChange={(e) => onSelectAll && onSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-[#093738] focus:ring-[#093738]"
                  />
                </th>
              )}
              {enhancedColumns.map((column, index) => (
                <th
                  key={column.key || index}
                  className={`px-6 py-3.5 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${getAlignmentClass(column.align)}`}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={enhancedColumns.length + (selectableRows ? 1 : 0)}
                  className="px-6 py-12 text-center text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {tableProps.emptyMessage || 'لا توجد بيانات'}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => {
                const isSelected = selectedRows.some((r) => r.id === row.id);
                return (
                  <tr
                    key={row.id || rowIndex}
                    onClick={() => tableProps.onRowClick && tableProps.onRowClick(row)}
                    className={`
                      ${tableProps.hoverable !== false ? 'hover:bg-gray-50/50 transition-colors' : ''}
                      ${tableProps.onRowClick ? 'cursor-pointer' : ''}
                      ${isSelected ? 'bg-blue-50/30' : ''}
                      ${tableProps.striped && rowIndex % 2 === 1 ? 'bg-gray-25' : ''}
                    `}
                  >
                    {selectableRows && (
                      <td className="px-6 py-3.5">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => onSelectRow && onSelectRow(row)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-4 h-4 rounded border-gray-300 text-[#093738] focus:ring-[#093738]"
                        />
                      </td>
                    )}
                    {enhancedColumns.map((column, colIndex) => (
                      <td
                        key={column.key || colIndex}
                        className={`px-6 py-3.5 text-sm text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${getAlignmentClass(column.align)}`}
                      >
                        {column.render
                          ? column.render(row)
                          : row[column.key]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Export both as named exports
export default Table;
