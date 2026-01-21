import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Input } from '../../components/ui/input';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { buttonClasses } from '../../styles';

export const AddEditInventoryCount = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, language } = useLanguage();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    warehouseName: '',
    systemQuantity: '',
    actualQuantity: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    navigate('/warehouses/inventory-count');
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Header */}
        <MaykanaCard>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/warehouses/inventory-count')}
                className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg hover:bg-gray-200 transition-colors"
              >
                {language === 'ar' ? (
                  <ArrowRight className="w-6 h-6 text-gray-700" />
                ) : (
                  <ArrowLeft className="w-6 h-6 text-gray-700" />
                )}
              </button>
              <h1 className="text-xl font-medium text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {isEditMode
                  ? t('warehouses.edit_inventory_count')
                  : t('warehouses.add_inventory_count')}
              </h1>
            </div>
            <button
              type="submit"
              className={buttonClasses.primary}
            >
              {t('warehouses.save')}
            </button>
          </div>
        </MaykanaCard>

        {/* Basic Information Section */}
        <MaykanaCard>
          <div className="p-6">
            <h2 className="text-xl font-medium text-black mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('warehouses.basic_info')}
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('warehouses.warehouse_name')}
                </label>
                <Input
                  type="text"
                  value={formData.warehouseName}
                  onChange={(e) =>
                    setFormData({ ...formData, warehouseName: e.target.value })
                  }
                  className="h-[45px] bg-slate-50"
                  placeholder={t('warehouses.warehouse_name_placeholder')}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('warehouses.system_quantity')}
                </label>
                <Input
                  type="number"
                  value={formData.systemQuantity}
                  onChange={(e) =>
                    setFormData({ ...formData, systemQuantity: e.target.value })
                  }
                  className="h-[45px] bg-slate-50"
                  placeholder={t('warehouses.system_quantity_placeholder')}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('warehouses.actual_quantity')}
                </label>
                <Input
                  type="number"
                  value={formData.actualQuantity}
                  onChange={(e) =>
                    setFormData({ ...formData, actualQuantity: e.target.value })
                  }
                  className="h-[45px] bg-slate-50"
                  placeholder={t('warehouses.actual_quantity_placeholder')}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('warehouses.notes')}
                </label>
                <Input
                  type="text"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="h-[45px] bg-slate-50"
                  placeholder={t('warehouses.notes_placeholder')}
                />
              </div>
            </div>
          </div>
        </MaykanaCard>

        {/* Order Items Section */}
        <MaykanaCard>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.order_items')}
              </h2>
              <div className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-700"
                >
                  <path
                    d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 13H12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 17H16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="h-[150px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-400 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('warehouses.no_items_yet')}
              </p>
            </div>
          </div>
        </MaykanaCard>
      </form>
    </Layout>
  );
};
