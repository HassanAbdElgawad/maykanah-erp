import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { AdvancedTable } from '@/components/ui/Table';
import { buttonClasses } from '@/styles';
import {
  Filter,
  Upload,
  RowsIcon,
  Plus,
  Search,
  Calendar,
  Pencil,
  Trash2,
} from 'lucide-react';
import { useAccountingEntriesData } from '@/hooks/useAccountingEntriesData';
import type { AccountingEntryItem } from '../../../data/accounting/accounting-entries.data';

// Entry Type Badge Component
const EntryTypeBadge = ({ type }: { type: AccountingEntryItem['type'] }) => {
  const { t } = useLanguage();

  const typeConfig = {
    daily: {
      bg: 'bg-[#2ac8a30f]',
      text: 'text-[#2ac8a3]',
      label: t('accounting.entryTypes.daily'),
    },
    expense: {
      bg: 'bg-[#8a38f50f]',
      text: 'text-[#8a38f5]',
      label: t('accounting.entryTypes.expense'),
    },
    revenue: {
      bg: 'bg-[#00b2ff0f]',
      text: 'text-[#00b3ff]',
      label: t('accounting.entryTypes.revenue'),
    },
    closing: {
      bg: 'bg-[#ff00000f]',
      text: 'text-[#ff0000]',
      label: t('accounting.entryTypes.closing'),
    },
  };

  const config = typeConfig[type];

  return (
    <div
      className={`inline-flex items-center justify-center gap-1.5 px-1.5 py-1.5 rounded-lg ${config.bg}`}
    >
      <span className={`text-sm ${config.text} whitespace-nowrap`}>{config.label}</span>
    </div>
  );
};

// Status Badge Component
const StatusBadge = ({ status }: { status: AccountingEntryItem['status'] }) => {
  const { t } = useLanguage();

  const statusConfig = {
    approved: {
      bg: 'bg-[#07b6640f]',
      text: 'text-[#07b664]',
      label: t('accounting.status.approved'),
    },
    rejected: {
      bg: 'bg-[#ff00000f]',
      text: 'text-[#ff0000]',
      label: t('accounting.status.rejected'),
    },
    pending: {
      bg: 'bg-[#edc5000f]',
      text: 'text-[#ecc500]',
      label: t('accounting.status.pending'),
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`inline-flex items-center justify-center gap-1.5 px-1.5 py-1.5 rounded-lg ${config.bg}`}
    >
      <span className={`text-sm ${config.text} whitespace-nowrap`}>{config.label}</span>
    </div>
  );
};

// Filters Component
interface FiltersProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  dateEnabled: boolean;
  typeEnabled: boolean;
  debitEnabled: boolean;
  creditEnabled: boolean;
  statusEnabled: boolean;
  dateFrom: string;
  dateTo: string;
}

const EntriesFilters = ({ isOpen, filters, onFilterChange }: FiltersProps) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleCheckboxChange = (field: keyof FilterState) => {
    onFilterChange({ ...filters, [field]: !filters[field] });
  };

  return (
    <div className="absolute top-full mt-2 right-0 z-50">
      <Card className="w-[203px] px-[17px] py-[18px] bg-white rounded-lg border border-[#d9d9d9] shadow-[0px_22px_44px_#00000014]">
        <div className="space-y-6">
          {/* Date Filter */}
          <div className="flex items-start justify-between">
            <label className="text-lg text-black cursor-pointer">
              {t('accounting.entries.date')}
            </label>
            <div className="relative w-5 h-5">
              <input
                type="checkbox"
                checked={filters.dateEnabled}
                onChange={() => handleCheckboxChange('dateEnabled')}
                className="w-5 h-5 rounded border border-[#11383f] cursor-pointer accent-[#11383f]"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div className="flex items-start justify-between">
            <label className="text-lg text-[#0000004c] cursor-pointer">
              {t('accounting.entries.type')}
            </label>
            <div className="relative w-5 h-5">
              <input
                type="checkbox"
                checked={filters.typeEnabled}
                onChange={() => handleCheckboxChange('typeEnabled')}
                className="w-5 h-5 rounded border border-[#11383f4c] cursor-pointer"
              />
            </div>
          </div>

          {/* Debit Filter */}
          <div className="flex items-start justify-between">
            <label className="text-lg text-[#0000004c] cursor-pointer">
              {t('accounting.entries.debit')}
            </label>
            <div className="relative w-5 h-5">
              <input
                type="checkbox"
                checked={filters.debitEnabled}
                onChange={() => handleCheckboxChange('debitEnabled')}
                className="w-5 h-5 rounded border border-[#11383f4c] cursor-pointer"
              />
            </div>
          </div>

          {/* Credit Filter */}
          <div className="flex items-start justify-between">
            <label className="text-lg text-[#0000004c] cursor-pointer">
              {t('accounting.entries.credit')}
            </label>
            <div className="relative w-5 h-5">
              <input
                type="checkbox"
                checked={filters.creditEnabled}
                onChange={() => handleCheckboxChange('creditEnabled')}
                className="w-5 h-5 rounded border border-[#11383f4c] cursor-pointer"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex items-start justify-between">
            <label className="text-lg text-black cursor-pointer">
              {t('accounting.entries.status')}
            </label>
            <div className="relative w-5 h-5">
              <input
                type="checkbox"
                checked={filters.statusEnabled}
                onChange={() => handleCheckboxChange('statusEnabled')}
                className="w-5 h-5 rounded border border-[#11383f] cursor-pointer accent-[#11383f]"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Export Options Component
interface ExportOptionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExportOptions = ({ isOpen }: ExportOptionsProps) => {
  if (!isOpen) return null;

  const exportOptions = [
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel', value: 'excel' },
    { label: 'CSV', value: 'csv' },
  ];

  return (
    <div className="absolute top-full mt-2 right-0 z-50">
      <Card className="w-[150px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] shadow-[0px_22px_44px_#00000014]">
        <div className="space-y-2">
          {exportOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => console.log(`Export as ${option.value}`)}
              className="w-full text-right px-3 py-2 text-sm text-[#0e0d24] hover:bg-gray-100 rounded transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

// Date Range Filter Component
interface DateRangeFilterProps {
  isOpen: boolean;
  dateFrom: string;
  dateTo: string;
  onDateFromChange: (date: string) => void;
  onDateToChange: (date: string) => void;
}

const DateRangeFilter = ({
  isOpen,
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}: DateRangeFilterProps) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="absolute top-full mt-2 right-0 z-50">
      <Card className="w-[229px] px-6 py-4 bg-white rounded-lg border border-[#d9d9d9] shadow-[0px_22px_44px_#00000014]">
        <div className="space-y-4">
          {/* Date From */}
          <div className="space-y-2">
            <label className="text-sm text-[#00000099]">{t('accounting.entries.dateFrom')}</label>
            <div className="relative">
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => onDateFromChange(e.target.value)}
                className="w-full h-[34px] rounded-lg border border-[#cfcfcf]"
                style={{ direction: 'rtl', textAlign: 'right' }}
              />
              <Calendar className="absolute left-2 top-2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Date To */}
          <div className="space-y-2">
            <label className="text-sm text-[#00000099]">{t('accounting.entries.dateTo')}</label>
            <div className="relative">
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => onDateToChange(e.target.value)}
                className="w-full h-[34px] rounded-lg border border-[#cfcfcf]"
                style={{ direction: 'rtl', textAlign: 'right' }}
              />
              <Calendar className="absolute left-2 top-2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Entry Type Filter */}
          <div className="space-y-2">
            <label className="text-sm text-[#00000099]">{t('accounting.entries.type')}</label>
            <select className="w-full h-[34px] rounded-lg border border-[#cfcfcf] px-2 text-sm">
              <option value="">{t('common.all')}</option>
              <option value="daily">{t('accounting.entryTypes.daily')}</option>
              <option value="expense">{t('accounting.entryTypes.expense')}</option>
              <option value="revenue">{t('accounting.entryTypes.revenue')}</option>
              <option value="closing">{t('accounting.entryTypes.closing')}</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="space-y-2">
            <label className="text-sm text-[#00000099]">{t('accounting.entries.status')}</label>
            <select className="w-full h-[34px] rounded-lg border border-[#cfcfcf] px-2 text-sm">
              <option value="">{t('common.all')}</option>
              <option value="approved">{t('accounting.status.approved')}</option>
              <option value="pending">{t('accounting.status.pending')}</option>
              <option value="rejected">{t('accounting.status.rejected')}</option>
            </select>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Main Component
export const AccountingEntries = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const { entries } = useAccountingEntriesData();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState<string | null>(null);
  const columnsFilterRef = useRef<HTMLDivElement>(null);
  const exportOptionsRef = useRef<HTMLDivElement>(null);
  const dateFilterRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState<FilterState>({
    dateEnabled: true,
    typeEnabled: false,
    debitEnabled: false,
    creditEnabled: false,
    statusEnabled: true,
    dateFrom: '',
    dateTo: '',
  });

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if click is outside columns filter
      if (columnsFilterRef.current && !columnsFilterRef.current.contains(target)) {
        setShowColumnsFilter(false);
      }

      // Check if click is outside export options
      if (exportOptionsRef.current && !exportOptionsRef.current.contains(target)) {
        setShowExportOptions(false);
      }

      // Check if click is outside date filter
      if (dateFilterRef.current && !dateFilterRef.current.contains(target)) {
        setShowDateFilter(false);
      }

      // Check if click is outside actions menu
      if (openActionMenuId && !target.closest('.actions-menu-wrapper')) {
        setOpenActionMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openActionMenuId]);

  // Filter entries based on search
  const filteredEntries = entries.filter((entry) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      entry.entryNumber.toLowerCase().includes(searchLower) ||
      entry.date.includes(searchLower) ||
      entry.debit.toString().includes(searchLower) ||
      entry.credit.toString().includes(searchLower)
    );
  });

  return (
    <Layout>
      <div className="space-y-4">
        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Search */}
          <div className={`relative w-[533px] ${dir === 'rtl' ? 'order-1' : 'order-1'}`}>
            <Input
              type="text"
              placeholder={t('accounting.entries.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full h-[45px] bg-white rounded-lg border border-[#e2e2e2] ${dir === 'rtl' ? 'pr-10 text-right' : 'pl-10 text-left'} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              dir={dir}
            />
            <Search
              className={`absolute ${dir === 'rtl' ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`}
            />
          </div>

          {/* Spacer */}
          <div className={`flex-1 ${dir === 'rtl' ? 'order-2' : 'order-2'}`} />

          {/* Buttons Group */}
          <div className={`flex items-center gap-2 ${dir === 'rtl' ? 'order-3' : 'order-3'}`}>
            {/* Show/Hide Columns Button */}
            <div className="relative" ref={columnsFilterRef}>
              <Button
                variant="outline"
                onClick={() => {
                  setShowColumnsFilter(!showColumnsFilter);
                  setShowExportOptions(false);
                  setShowDateFilter(false);
                }}
                className={`bg-white hover:bg-gray-50 px-[13px] py-[13px] h-[43px] rounded-lg gap-2 border transition-all ${showColumnsFilter ? 'border-[#093738] border-2' : 'border-[#e2e2e2]'} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <RowsIcon className="h-3.5 w-3.5" />
                <span className="text-sm">{t('common.show_hide_columns')}</span>
              </Button>

              <EntriesFilters
                isOpen={showColumnsFilter}
                onClose={() => setShowColumnsFilter(false)}
                filters={filters}
                onFilterChange={setFilters}
              />
            </div>

            {/* Export Button */}
            <div className="relative" ref={exportOptionsRef}>
              <Button
                variant="outline"
                onClick={() => {
                  setShowExportOptions(!showExportOptions);
                  setShowColumnsFilter(false);
                  setShowDateFilter(false);
                }}
                className={`bg-white hover:bg-gray-50 px-2.5 py-[13px] h-[43px] rounded-lg gap-[5px] border transition-all ${showExportOptions ? 'border-[#093738] border-2' : 'border-[#e2e2e2]'} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Upload className="h-4 w-4" />
                <span className="text-sm">{t('common.export')}</span>
              </Button>

              <ExportOptions
                isOpen={showExportOptions}
                onClose={() => setShowExportOptions(false)}
              />
            </div>

            {/* Filter Button */}
            <div className="relative" ref={dateFilterRef}>
              <Button
                variant="outline"
                onClick={() => {
                  setShowDateFilter(!showDateFilter);
                  setShowColumnsFilter(false);
                  setShowExportOptions(false);
                }}
                className={`bg-white hover:bg-gray-50 px-2.5 py-3 h-[43px] rounded-lg gap-1.5 border transition-all ${showDateFilter ? 'border-[#093738] border-2' : 'border-[#e2e2e2]'} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Filter className="h-[18px] w-[18px]" />
                <span className="text-sm">{t('common.filter')}</span>
              </Button>

              <DateRangeFilter
                isOpen={showDateFilter}
                dateFrom={filters.dateFrom}
                dateTo={filters.dateTo}
                onDateFromChange={(date) => setFilters({ ...filters, dateFrom: date })}
                onDateToChange={(date) => setFilters({ ...filters, dateTo: date })}
              />
            </div>

            {/* New Entry Button */}
            <button 
              onClick={() => navigate('/accounting/entries/create')}
              className={buttonClasses.primary}
            >
              <Plus className={`h-4 w-4 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
              {t('accounting.entries.create_new')}
            </button>
          </div>
        </div>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2]">
          <AdvancedTable
            data={filteredEntries}
            columns={[
              {
                key: 'date',
                label: t('accounting.entries.date'),
              },
              {
                key: 'type',
                label: t('accounting.entries.type'),
                render: (entry) => <EntryTypeBadge type={entry.type} />,
              },
              {
                key: 'debit',
                label: t('accounting.entries.debit'),
                render: (entry) => entry.debit.toFixed(2),
              },
              {
                key: 'credit',
                label: t('accounting.entries.credit'),
                render: (entry) => entry.credit.toFixed(2),
              },
              {
                key: 'status',
                label: t('accounting.entries.status'),
                render: (entry) => <StatusBadge status={entry.status} />,
              },
            ]}
            actions={[
              {
                icon: Pencil,
                label: t('common.edit'),
                onClick: (entry) => console.log('Edit entry:', entry.id),
                color: 'blue',
              },
              {
                icon: Trash2,
                label: t('common.delete'),
                onClick: (entry) => console.log('Delete entry:', entry.id),
                color: 'red',
              },
            ]}
          />
        </Card>
      </div>
    </Layout>
  );
};
