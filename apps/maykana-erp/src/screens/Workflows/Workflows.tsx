import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Search, Plus, MoreVertical, Edit2, Copy, Workflow } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface WorkflowCard {
  id: string;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
  status: 'launched' | 'draft';
}

export const Workflows = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const workflowCards: WorkflowCard[] = [
    {
      id: '1',
      title: t('workflow_engine.workflow_cards.purchase_request'),
      description: t('workflow_engine.workflow_cards.purchase_request_desc'),
      iconColor: '#8B5CF6',
      iconBg: '#F3F4F6',
      status: 'draft',
    },
    {
      id: '2',
      title: t('workflow_engine.workflow_cards.leave_request'),
      description: t('workflow_engine.workflow_cards.leave_request_desc'),
      iconColor: '#8B5CF6',
      iconBg: '#F3F4F6',
      status: 'draft',
    },
    {
      id: '3',
      title: t('workflow_engine.workflow_cards.invoice_approval'),
      description: t('workflow_engine.workflow_cards.invoice_approval_desc'),
      iconColor: '#8B5CF6',
      iconBg: '#F3F4F6',
      status: 'launched',
    },
    {
      id: '4',
      title: t('workflow_engine.workflow_cards.new_recruitment'),
      description: t('workflow_engine.workflow_cards.new_recruitment_desc'),
      iconColor: '#8B5CF6',
      iconBg: '#F3F4F6',
      status: 'launched',
    },
    {
      id: '5',
      title: t('workflow_engine.workflow_cards.maintenance_request'),
      description: t('workflow_engine.workflow_cards.maintenance_request_desc'),
      iconColor: '#8B5CF6',
      iconBg: '#F3F4F6',
      status: 'draft',
    },
    {
      id: '6',
      title: t('workflow_engine.workflow_cards.business_travel'),
      description: t('workflow_engine.workflow_cards.business_travel_desc'),
      iconColor: '#8B5CF6',
      iconBg: '#F3F4F6',
      status: 'launched',
    },
    {
      id: '7',
      title: t('workflow_engine.workflow_cards.new_project'),
      description: t('workflow_engine.workflow_cards.new_project_desc'),
      iconColor: '#8B5CF6',
      iconBg: '#F3F4F6',
      status: 'draft',
    },
    {
      id: '8',
      title: t('workflow_engine.workflow_cards.ui_design'),
      description: t('workflow_engine.workflow_cards.ui_design_desc'),
      iconColor: '#8B5CF6',
      iconBg: '#F3F4F6',
      status: 'launched',
    },
  ];

  const filteredCards = workflowCards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header with search and new button */}
        <div className="flex justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative max-w-md">
            <Search
              className={`absolute top-1/2 -translate-y-1/2 ${
                dir === 'rtl' ? 'right-3' : 'left-3'
              } w-4 h-4 text-gray-400`}
            />
            <input
              type="text"
              placeholder={t('workflow_engine.search_placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full h-[43px] text-sm ${
                dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'
              } border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5f7a] focus:border-transparent bg-white`}
            />
          </div>

          {/* New Button */}
          <button 
            onClick={() => navigate('/workflow-engine/workflows/add')}
            className={buttonClasses.primary}
          >
            <Plus className="w-4 h-4" />
            <span className="text-xs">
              {t('workflow_engine.new_button')}
            </span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCards.map((card, index) => {
            return (
              <div
                key={card.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header with Action Icons */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Workflow className="w-5 h-5" style={{ color: card.iconColor }} />
                  </div>

                  {/* Action Icons - Show on Hover */}
                  <div
                    className={`flex items-center gap-0.5 transition-opacity duration-200 ${
                      hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <Copy className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <Edit2 className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <MoreVertical className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{card.title}</h3>

                {/* Card Description */}
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{card.description}</p>

                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      card.status === 'launched' ? 'text-[#2CC28D]' : 'text-[#092E32]'
                    }`}
                    style={{
                      backgroundColor: card.status === 'launched' ? '#2CC28D26' : '#E6EBEB',
                    }}
                  >
                    {card.status === 'launched'
                      ? t('workflow_engine.workflow_cards.status_launched')
                      : t('workflow_engine.workflow_cards.status_draft')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('common.no_search_results')}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
