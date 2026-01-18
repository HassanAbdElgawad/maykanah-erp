import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  Trash2,
  GripVertical,
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  type: 'checkbox' | 'text' | 'number' | 'yesno';
}

export const AddEditVerificationTemplate = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { language, t } = useLanguage();
  const [templateName, setTemplateName] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: '1', text: '', type: 'checkbox' },
  ]);

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), text: '', type: 'checkbox' }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    console.log('Template saved:', { templateName, description, items });
    navigate('/workflow-engine/verification-templates');
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <MaykanaCard>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/workflow-engine/verification-templates')}
                className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg flex items-center justify-center hover:bg-gray-200"
              >
                {language === 'ar' ? (
                  <ArrowRight className="w-5 h-5" />
                ) : (
                  <ArrowLeft className="w-5 h-5" />
                )}
              </button>
              <h1 className="text-xl font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-black">
                {id ? t('workflow_engine.edit_verification_list') : t('workflow_engine.add_verification_list')}
              </h1>
            </div>
            <Button
              onClick={handleSubmit}
              className="bg-[#093738] hover:bg-[#0d5556] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              {t('workflow_engine.save')}
            </Button>
          </div>
        </MaykanaCard>

        <div className="grid grid-cols-12 gap-4">
          {/* Main Content */}
          <div className="col-span-9 space-y-4">
            {/* Basic Information */}
            <MaykanaCard>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-black text-lg">
                    {t('workflow_engine.basic_info')}
                  </h2>
                </div>
                <div className="border-t border-gray-200"></div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Template Name */}
                  <div className="space-y-2">
                    <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                      {t('workflow_engine.template_name')}
                    </label>
                    <Input
                      type="text"
                      placeholder={t('workflow_engine.template_name_placeholder')}
                      value={templateName}
                      onChange={(e) => setTemplateName(e.target.value)}
                      className="bg-slate-50 border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir="rtl"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                      {t('workflow_engine.description')}
                    </label>
                    <Input
                      type="text"
                      placeholder={t('workflow_engine.description_placeholder')}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="bg-slate-50 border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir="rtl"
                    />
                  </div>
                </div>
              </div>
            </MaykanaCard>

            {/* Checklist Items */}
            <MaykanaCard>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-black text-lg">
                    {t('workflow_engine.checklist_items')}
                  </h2>
                </div>
                <div className="border-t border-gray-200"></div>

                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border-2 border-solid border-[#0c4749]"
                    >
                      <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                      <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#092e32]">
                        {index + 1}
                      </span>
                      <Input
                        type="text"
                        placeholder={t('workflow_engine.item_text_placeholder')}
                        value={item.text}
                        onChange={(e) => {
                          const newItems = [...items];
                          newItems[index].text = e.target.value;
                          setItems(newItems);
                        }}
                        className="flex-1 bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        dir="rtl"
                      />
                      <select
                        value={item.type}
                        onChange={(e) => {
                          const newItems = [...items];
                          newItems[index].type = e.target.value as any;
                          setItems(newItems);
                        }}
                        className="px-3 py-2 bg-white border border-[#cfcfcf] rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        dir="rtl"
                      >
                        <option value="checkbox">{t('workflow_engine.type_checkbox')}</option>
                        <option value="yesno">{t('workflow_engine.type_yesno')}</option>
                        <option value="text">{t('workflow_engine.type_text')}</option>
                        <option value="number">{t('workflow_engine.type_number')}</option>
                      </select>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-[37px] h-[37px] bg-white rounded-lg flex items-center justify-center hover:bg-red-50 border border-[#e2e2e2]"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  ))}

                  {/* Add New Item Button */}
                  <button
                    onClick={addItem}
                    className="w-full flex items-center justify-center gap-2 p-4 bg-white rounded-xl border-2 border-dashed border-[#092e324f] hover:border-[#093738] hover:bg-slate-50 transition-colors"
                  >
                    <Plus className="w-5 h-5 text-[#092e32]" />
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32]">
                      {t('workflow_engine.add_new_item')}
                    </span>
                  </button>
                </div>
              </div>
            </MaykanaCard>
          </div>

          {/* Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Settings */}
            <MaykanaCard>
              <div className="p-4 space-y-4">
                <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-black text-base">
                  {t('workflow_engine.settings')}
                </h3>
                <div className="border-t border-gray-200"></div>

                <div className="space-y-3">
                  {/* Active Status */}
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
                      {t('workflow_engine.activate_list')}
                    </span>
                    <input type="checkbox" className="w-5 h-5" />
                  </div>

                  {/* Required */}
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
                      {t('workflow_engine.required')}
                    </span>
                    <input type="checkbox" className="w-5 h-5" />
                  </div>

                  {/* Allow Comments */}
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
                      {t('workflow_engine.allow_comments')}
                    </span>
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </MaykanaCard>

            {/* Field Types Reference */}
            <MaykanaCard>
              <div className="p-4 space-y-4">
                <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-black text-base">
                  {t('workflow_engine.field_types')}
                </h3>
                <div className="border-t border-gray-200"></div>

                <div className="space-y-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                  <div className="p-2 bg-slate-50 rounded">
                    {t('workflow_engine.checkbox_type')}
                  </div>
                  <div className="p-2 bg-slate-50 rounded">
                    {t('workflow_engine.yesno_type')}
                  </div>
                  <div className="p-2 bg-slate-50 rounded">
                    {t('workflow_engine.text_type')}
                  </div>
                  <div className="p-2 bg-slate-50 rounded">
                    {t('workflow_engine.number_type')}
                  </div>
                </div>
              </div>
            </MaykanaCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};
