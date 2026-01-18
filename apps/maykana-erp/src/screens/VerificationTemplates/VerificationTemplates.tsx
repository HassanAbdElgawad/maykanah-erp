import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Search,
  RowsIcon,
  Copy,
  Edit2,
  CheckSquare,
} from 'lucide-react';

interface VerificationTemplate {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'inactive';
  icon: string;
}

const sampleTemplates: VerificationTemplate[] = [
  {
    id: '1',
    title: 'عرض المنتجات',
    description: 'فحص ترتيب وجودة الواجهة.',
    status: 'inactive',
    icon: '📦',
  },
  {
    id: '2',
    title: 'نظافة يومية',
    description: 'التحقق من نظافة المكان والمعدات.',
    status: 'inactive',
    icon: '🧹',
  },
  {
    id: '3',
    title: 'جودة المخبوزات',
    description: 'تقييم طزاجة وجودة المعروض.',
    status: 'active',
    icon: '🍞',
  },
  {
    id: '4',
    title: 'إغلاق الفرع',
    description: 'مراجعة المهام قبل الإغلاق.',
    status: 'active',
    icon: '🔒',
  },
  {
    id: '5',
    title: 'سلامة الأغذية',
    description: 'التأكد من التخزين ودرجات الحرارة.',
    status: 'inactive',
    icon: '❄️',
  },
  {
    id: '6',
    title: 'تجهيز الصباح',
    description: 'متابعة تحضير الفرع قبل الافتتاح.',
    status: 'active',
    icon: '☀️',
  },
  {
    id: '7',
    title: 'فحص المعدات',
    description: 'التأكد من جاهزية وصيانة الأجهزة.',
    status: 'active',
    icon: '🔧',
  },
  {
    id: '8',
    title: 'خدمة الزبائن',
    description: 'مراقبة تعامل الطاقم مع الزبائن.',
    status: 'inactive',
    icon: '👥',
  },
];

export const VerificationTemplates = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [templates] = useState<VerificationTemplate[]>(sampleTemplates);

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return (
        <div className="inline-flex items-center justify-center gap-1.5 px-1.5 py-1.5 bg-[#2cc28d26] rounded-lg">
          <span className="text-[#2cc28d] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-sm">
            {t('workflow_engine.active')}
          </span>
        </div>
      );
    }
    return (
      <div className="inline-flex items-center justify-center gap-1.5 px-1.5 py-1.5 bg-[#e6ebeb] rounded-lg">
        <span className="text-[#092e32] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-sm">
          {t('workflow_engine.inactive')}
        </span>
      </div>
    );
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header with Search and New Button */}
        <MaykanaCard>
          <div className="flex items-center justify-between gap-4 p-4">
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
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#f0f4f7] rounded-lg">
                <RowsIcon className="w-5 h-5 text-[#092e32]" />
                <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('workflow_engine.rows')}
                </span>
              </div>
              <Button
                onClick={() => navigate('/workflow-engine/verification-templates/add')}
                className="bg-[#093738] hover:bg-[#0d5556] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                {t('workflow_engine.new_button')}
              </Button>
            </div>
          </div>
        </MaykanaCard>

        {/* Templates Grid */}
        <div className="grid grid-cols-4 gap-4">
          {templates.map((template) => (
            <MaykanaCard
              key={template.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="p-6 space-y-4">
                {/* Icon and Actions */}
                <div className="flex items-start justify-between">
                  <div className="w-[37px] h-[37px] bg-[#40d2fe1a] rounded-lg flex items-center justify-center text-xl">
                    <CheckSquare className="w-5 h-5 text-[#093738]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/workflow-engine/verification-templates/edit/${template.id}`)}
                      className="w-[37px] h-[37px] bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200"
                    >
                      <Edit2 className="w-5 h-5 text-[#092e32]" />
                    </button>
                    <button
                      className="w-[37px] h-[37px] bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200"
                    >
                      <Copy className="w-5 h-5 text-[#092e32]" />
                    </button>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex justify-end">
                  {getStatusBadge(template.status)}
                </div>

                {/* Title and Description */}
                <div className="space-y-2 text-right">
                  <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-black text-lg">
                    {template.title}
                  </h3>
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000080] text-base">
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
