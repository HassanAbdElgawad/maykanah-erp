import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { CardContainer } from '../../components/ui/CardContainer';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export const AddEditInventoryClosing: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    warehouseName: '',
    closingDate: '',
    notes: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission
    navigate('/warehouses/inventory-closing');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Save Button */}
        <CardContainer>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/warehouses/inventory-closing')}
                className="flex items-center justify-center w-10 h-10 text-[#093738] hover:bg-gray-100 rounded-md transition-colors"
              >
                {language === 'ar' ? (
                  <ChevronRight className="w-5 h-5" />
                ) : (
                  <ChevronLeft className="w-5 h-5" />
                )}
              </button>
              <h2 className="text-xl font-semibold text-gray-800">
                {isEditMode
                  ? t('warehouses.edit_inventory_closing')
                  : t('warehouses.add_inventory_closing')}
              </h2>
            </div>
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-6 py-2 bg-[#093738] text-white rounded-md hover:bg-[#0a4849] transition-colors h-[43px]"
            >
              {t('common.save')}
            </button>
          </div>
        </CardContainer>

        {/* Form Content */}
        <CardContainer>
          <div className="p-6">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
              {/* <div className="w-1 h-6 bg-[#093738] rounded"></div> */}
              <h3 className="text-lg font-semibold text-gray-800">
                {t('warehouses.closing_data')}
              </h3>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Warehouse Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('warehouses.warehouse_name')}
                </label>
                <input
                  type="text"
                  name="warehouseName"
                  value={formData.warehouseName}
                  onChange={handleInputChange}
                  placeholder={t('warehouses.warehouse_name')}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                />
              </div>

              {/* Closing Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('warehouses.closing_date')}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="closingDate"
                    value={formData.closingDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('warehouses.notes')}
                </label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder={t('warehouses.notes_placeholder')}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </CardContainer>
      </div>
    </Layout>
  );
};
