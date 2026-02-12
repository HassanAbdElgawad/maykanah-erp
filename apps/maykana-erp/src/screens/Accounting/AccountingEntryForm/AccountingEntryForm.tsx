import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { AttachmentsModal } from '@/components/AttachmentsModal';
import { Plus, Paperclip, RowsIcon, Trash2, ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/styles';

// Types
interface EntryLine {
  id: string;
  mainAccount: string;
  subAccount: string;
  beneficiaryName: string;
  debit: number;
  credit: number;
  costCenter: string;
  project: string;
  comments: string;
}

// Main Component
export const AccountingEntryForm = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const [entryType, setEntryType] = useState('daily');
  const [entryDate, setEntryDate] = useState('10/11/2025 -- 09:30');
  const [generalNotes, setGeneralNotes] = useState('');
  const [attachmentsCount, setAttachmentsCount] = useState(0);
  const [showAttachmentsModal, setShowAttachmentsModal] = useState(false);

  const [lines, setLines] = useState<EntryLine[]>([
    {
      id: '1',
      mainAccount: 'المدينون',
      subAccount: 'العملاء',
      beneficiaryName: 'شركة فهد',
      debit: 399.96,
      credit: 0,
      costCenter: 'مركز تكلفة - 111',
      project: 'مشروع - 111',
      comments: 'تعليق هنا 1111',
    },
    {
      id: '2',
      mainAccount: 'الدائنون',
      subAccount: 'الموردين',
      beneficiaryName: 'شركة محمد',
      debit: 0,
      credit: 1500,
      costCenter: 'مركز تكلفة - 222',
      project: 'مشروع - 222',
      comments: 'تعليق هنا 2222',
    },
  ]);

  const [showColumnsFilter, setShowColumnsFilter] = useState(false);

  // Calculate totals
  const totalDebit = lines.reduce((sum, line) => sum + line.debit, 0);
  const totalCredit = lines.reduce((sum, line) => sum + line.credit, 0);
  const difference = totalDebit - totalCredit;

  const addNewLine = () => {
    const newLine: EntryLine = {
      id: String(lines.length + 1),
      mainAccount: '',
      subAccount: '',
      beneficiaryName: '',
      debit: 0,
      credit: 0,
      costCenter: '',
      project: '',
      comments: '',
    };
    setLines([...lines, newLine]);
  };

  const removeLine = (id: string) => {
    setLines(lines.filter((line) => line.id !== id));
  };

  const handleAttachmentClick = () => {
    setShowAttachmentsModal(true);
  };

  const handleSaveAttachments = (files: any[]) => {
    setAttachmentsCount(files.length);
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Action Buttons Card - Initial filters */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="flex items-center justify-between">
            {/* Back Button - First in RTL (right side) */}
            <Button
              variant="outline"
              onClick={() => navigate('/accounting/entries')}
              className="bg-white hover:bg-gray-50 px-4 py-2 h-[43px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Action Buttons Group - Last in RTL (left side) */}
            <div className="flex items-center gap-3">
              {/* Show/Hide Columns Button */}
              <Button
                variant="outline"
                onClick={() => setShowColumnsFilter(!showColumnsFilter)}
                className="bg-white hover:bg-gray-50 px-4 py-2 h-[43px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <RowsIcon className="h-4 w-4" />
                <span className="text-base">{t('common.show_hide_columns')}</span>
              </Button>

              {/* Add Attachments Button */}
              <Button
                variant="outline"
                onClick={handleAttachmentClick}
                className="bg-white hover:bg-gray-50 px-4 py-2 h-[43px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Paperclip className="h-4 w-4" />
                <span className="text-base">{t('accounting.entries.add_attachments')}</span>
                <span className="text-sm text-gray-500">({attachmentsCount})</span>
              </Button>

              {/* Submit Button - Last */}
              <button className={buttonClasses.primary}>
                {t('accounting.entries.submit')}
              </button>
            </div>
          </div>
        </Card>

        {/* Entry Type and Date Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="flex items-center gap-6">
            {/* Entry Type */}
            <div className="flex items-center gap-3">
              <label className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('accounting.entries.entry_type_label')}:
              </label>
              <select
                value={entryType}
                onChange={(e) => setEntryType(e.target.value)}
                className="h-[40px] px-4 rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica] bg-white"
              >
                <option value="daily">{t('accounting.entryTypes.daily')}</option>
                <option value="expense">{t('accounting.entryTypes.expense')}</option>
                <option value="revenue">{t('accounting.entryTypes.revenue')}</option>
                <option value="closing">{t('accounting.entryTypes.closing')}</option>
              </select>
            </div>

            {/* Entry Date */}
            <div className="flex items-center gap-3">
              <label className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('accounting.entries.entry_date_label')}:
              </label>
              <Input
                type="text"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
                className="h-[40px] w-[200px] rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
          </div>
        </Card>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header */}
              <thead className="bg-[#f1f5f980] border-b border-slate-100">
                <tr>
                  <th className="px-4 py-4 text-right text-base font-semibold text-[#0e0d24] min-w-[150px]">
                    {t('accounting.entries.main_account')}
                  </th>
                  <th className="px-4 py-4 text-right text-base font-semibold text-[#0e0d24] min-w-[150px]">
                    {t('accounting.entries.sub_account')}
                  </th>
                  <th className="px-4 py-4 text-right text-base font-semibold text-[#0e0d24] min-w-[150px]">
                    {t('accounting.entries.beneficiary_name')}
                  </th>
                  <th className="px-4 py-4 text-right text-base font-semibold text-[#0e0d24] min-w-[120px]">
                    {t('accounting.entries.debit')}
                  </th>
                  <th className="px-4 py-4 text-right text-base font-semibold text-[#0e0d24] min-w-[120px]">
                    {t('accounting.entries.credit')}
                  </th>
                  <th className="px-4 py-4 text-right text-base font-semibold text-[#0e0d24] min-w-[150px]">
                    {t('accounting.entries.cost_center')}
                  </th>
                  <th className="px-4 py-4 text-right text-base font-semibold text-[#0e0d24] min-w-[120px]">
                    {t('accounting.entries.project')}
                  </th>
                  <th className="px-4 py-4 text-right text-base font-semibold text-[#0e0d24] min-w-[150px]">
                    {t('accounting.entries.comments')}
                  </th>
                  <th className="px-4 py-4 w-20"></th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {lines.map((line, index) => (
                  <tr
                    key={line.id}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'
                    }`}
                  >
                    <td className="px-4 py-3">
                      <select className="w-full h-[40px] px-3 rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <option value="المدينون">المدينون</option>
                        <option value="الدائنون">الدائنون</option>
                        <option value="الأصول">الأصول</option>
                        <option value="الخصوم">الخصوم</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <select className="w-full h-[40px] px-3 rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <option value="العملاء">العملاء</option>
                        <option value="الموردين">الموردين</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="text"
                        defaultValue={line.beneficiaryName}
                        className="w-full h-[40px] rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        defaultValue={line.debit || ''}
                        className="w-full h-[40px] rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right font-bold"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        defaultValue={line.credit || ''}
                        className="w-full h-[40px] rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right font-bold"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="text"
                        defaultValue={line.costCenter}
                        className="w-full h-[40px] rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="text"
                        defaultValue={line.project}
                        className="w-full h-[40px] rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="text"
                        defaultValue={line.comments}
                        className="w-full h-[40px] rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => removeLine(line.id)}
                        className="w-[35px] h-[35px] rounded-full hover:bg-red-50 flex items-center justify-center transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Add New Line Button Row */}
                <tr>
                  <td colSpan={9} className="px-4 py-4">
                    <button
                      onClick={addNewLine}
                      className="flex items-center gap-2 text-[#093738] hover:opacity-80 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      <Plus className="w-5 h-5" />
                      <span>{t('accounting.entries.add_new_line')}</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Bottom Section: Notes and Totals */}
        <div className="grid grid-cols-2 gap-4">
          {/* General Notes Card - Left Half */}
          <Card className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="space-y-3">
              <label className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('accounting.entries.general_notes_label')}:
              </label>
              <textarea
                value={generalNotes}
                onChange={(e) => setGeneralNotes(e.target.value)}
                className="w-full h-[120px] p-4 rounded-lg border border-[#e2e2e2] text-base [font-family:'IBM_Plex_Sans_Arabic',Helvetica] resize-none"
                placeholder={t('accounting.entries.general_notes_placeholder')}
                dir={dir}
              />
            </div>
          </Card>

          {/* Totals Card - Right Half */}
          <Card className="bg-white rounded-xl border border-[#e2e2e2] p-6">
            <div className="space-y-6">
              {/* Title Row */}
              <div className="flex justify-center">
                <span className="text-lg font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('accounting.entries.total')}
                </span>
              </div>

              {/* Totals Grid */}
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-around border-b border-[#e2e2e2] pb-3">
                  <span className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('accounting.entries.credit')} ₽
                  </span>
                  <span className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('accounting.entries.debit')} ₽
                  </span>
                </div>

                {/* Values Row */}
                <div className="flex items-center justify-around">
                  <span className="text-xl font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {totalCredit.toFixed(2)}
                  </span>
                  <span className="text-xl font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {totalDebit.toFixed(2)}
                  </span>
                </div>

                {/* Difference Row */}
                <div className="flex items-center justify-around pt-4 border-t border-[#e2e2e2]">
                  <span className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('accounting.entries.difference')}
                  </span>
                  <span
                    className={`text-xl font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                      difference === 0 ? 'text-[#2cc28d]' : 'text-[#ff0000]'
                    }`}
                  >
                    {Math.abs(difference).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Attachments Modal */}
        <AttachmentsModal
          isOpen={showAttachmentsModal}
          onClose={() => setShowAttachmentsModal(false)}
          onSave={handleSaveAttachments}
        />
      </div>
    </Layout>
  );
};
