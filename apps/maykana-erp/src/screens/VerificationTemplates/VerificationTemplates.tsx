import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Input } from '../../components/ui/input';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { CardContainer } from '../../components/ui/CardContainer';
import { useLanguage } from '../../contexts/LanguageContext';
import { buttonClasses } from '../../styles';
import {
  Search,
  RowsIcon,
  Copy,
  Edit2,
  CheckSquare,
} from 'lucide-react';
import { useVerificationTemplatesData } from '../../hooks/useVerificationTemplatesData';
import type { VerificationTemplate } from '../../data/verification-templates.data';

export const VerificationTemplates = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const { templates } = useVerificationTemplatesData();

  const getStatusBadge = (status: VerificationTemplate['status']) => {
    if (status === 'active') {
      return (
        <div className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#2cc28d26] rounded-lg">
          <span className="text-[#2cc28d] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-xs">
            {t('workflow_engine.active')}
          </span>
        </div>
      );
    }
    return (
      <div className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#e6ebeb] rounded-lg">
        <span className="text-[#092e32] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-xs">
          {t('workflow_engine.inactive')}
        </span>
      </div>
    );
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header with Search and New Button */}
        <CardContainer>
          <div className="flex items-center justify-between gap-4 p-3">
            {/* Right side: Search */}
            <div className="relative w-[535px]">
              <Input
                type="text"
                placeholder={t('workflow_engine.search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            {/* Left side: Actions */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#f0f4f7] rounded-lg">
                <RowsIcon className="w-4 h-4 text-[#092e32]" />
                <span className="text-xs [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('workflow_engine.rows')}
                </span>
              </div>
              <button
                onClick={() => navigate('/workflow-engine/verification-templates/add')}
                className={buttonClasses.primary + " text-xs"}
              >
                {t('workflow_engine.new_button')}
              </button>
            </div>
          </div>
        </CardContainer>

        {/* Templates Grid */}
        <div className="flex flex-wrap gap-4">
          {templates.map((template) => (
            <MaykanaCard
              key={template.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="p-4 space-y-3">
                {/* Icon and Actions */}
                <div className="flex items-start justify-between">
                  <div className="w-[32px] h-[32px] bg-[#40d2fe1a] rounded-lg flex items-center justify-center text-xl">
                    <CheckSquare className="w-4 h-4 text-[#093738]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => navigate(`/workflow-engine/verification-templates/edit/${template.id}`)}
                      className="w-[32px] h-[32px] bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200"
                    >
                      <Edit2 className="w-4 h-4 text-[#092e32]" />
                    </button>
                    <button
                      className="w-[32px] h-[32px] bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200"
                    >
                      <Copy className="w-4 h-4 text-[#092e32]" />
                    </button>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex justify-end">
                  {getStatusBadge(template.status)}
                </div>

                {/* Title and Description */}
                <div className="space-y-1.5 text-right">
                  <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-black text-sm">
                    {template.title}
                  </h3>
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000080] text-xs">
                    {template.description}
                  </p>
                </div>
              </div>
            </MaykanaCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};
