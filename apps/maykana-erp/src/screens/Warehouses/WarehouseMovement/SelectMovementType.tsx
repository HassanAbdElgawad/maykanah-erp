import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { CardContainer } from '@/components/ui/CardContainer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, ArrowRightLeft, AlertTriangle } from 'lucide-react';

export const SelectMovementType = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const movementTypes = [
    {
      type: 'transfer',
      title: t('warehouses.transfer_stock'),
      description: t('warehouses.transfer_stock_desc'),
      icon: ArrowRightLeft,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      path: '/warehouses/warehouse-movement/transfer/add',
    },
    {
      type: 'damage',
      title: t('warehouses.damage_stock'),
      description: t('warehouses.damage_stock_desc'),
      icon: AlertTriangle,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      path: '/warehouses/warehouse-movement/damage/add',
    },
  ];

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <CardContainer>
          <div className="p-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/warehouses/warehouse-movement')}
              className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg hover:bg-gray-200 transition-colors"
            >
              {language === 'ar' ? (
                <ArrowRight className="w-6 h-6 text-gray-700" />
              ) : (
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              )}
            </button>
            <h1 className="text-xl font-medium text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('warehouses.select_movement_type')}
            </h1>
          </div>
        </CardContainer>

        {/* Movement Types */}
        <div className="grid grid-cols-2 gap-4">
          {movementTypes.map((item) => (
            <CardContainer key={item.type}>
              <button
                onClick={() => navigate(item.path)}
                className="w-full p-6 text-right hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </button>
            </CardContainer>
          ))}
        </div>
      </div>
    </Layout>
  );
};
