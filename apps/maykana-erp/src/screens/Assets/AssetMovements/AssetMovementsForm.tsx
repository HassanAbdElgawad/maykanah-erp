import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, Trash2, ExternalLink } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';
import { assetsData } from '../../../data/assets.data';

export function AssetMovementsForm() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();

  // Collapsible sections state
  const [sections, setSections] = useState({
    transferInfo: true,
    movementInfo: true,
    confirmation: true,
  });

  // Selected assets
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  // Show all assets toggle
  const [showAllAssets, setShowAllAssets] = useState(false);

  // Available assets with images - استخدام البيانات من الملف المشترك
  const availableAssets = assetsData;

  // Form data
  const [formData, setFormData] = useState({
    // بيانات التحويل
    movementType: '',
    selectedAssets: [] as string[],

    // معلومات الحركة
    fromDepartment: '',
    toDepartment: '',
    previousEmployee: '',
    newEmployee: '',
    newLocation: '',
    newDepartmentDetails: '',
    newPosition: '',
    date: '',
    newCostCenter: '',

    // التأكيد
    updateCustody: false,
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleAssetSelection = (assetId: string) => {
    setSelectedAssets((prev) =>
      prev.includes(assetId) ? prev.filter((id) => id !== assetId) : [...prev, assetId]
    );
  };

  const handleRemoveAsset = (assetId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedAssets((prev) => prev.filter((id) => id !== assetId));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/assets/asset-movements');
  };

  const handleCancel = () => {
    navigate('/assets/asset-movements');
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate('/assets/asset-movements')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('assets.asset_movements.create_new')}
            </h1>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleCancel} variant="outline" className={buttonClasses.outline}>
              {t('common.cancel')}
            </Button>
            <Button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('common.save')}
            </Button>
          </div>
        </div>

        {/* بيانات التحويل */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('transferInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('assets.asset_movements.transfer_info')}
            </h2>
            {sections.transferInfo ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.transferInfo && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="flex gap-12">
                {/* Select Asset Dropdown - Left Side Only */}
                <div className="flex justify-start min-w-[20%]">
                  <div className="flex flex-col gap-4 w-[100%]">
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium text-gray-700">اختر الأصل</Label>
                      <select className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white">
                        <option value="">اختر أصل أو أكثر من هنا</option>
                        <option value="1">لوحة مفاتيح + فأرة لا سلكية</option>
                        <option value="2">كرسي مكتب متحرك</option>
                        <option value="3">مكتب خشبي</option>
                        <option value="4">Laptop Dell 5420</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium text-gray-700">نوع الحركة</Label>
                      <select
                        value={formData.movementType}
                        onChange={(e) => handleInputChange('movementType', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white"
                      >
                        <option value="">اختر نوع الحركة</option>
                        <option value="location">نقل موقع</option>
                        <option value="custody">نقل عهدة</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Assets Selection Label */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center justify-start gap-4 mt-2">
                    <Label className="text-sm font-medium text-gray-700">الأصول المختارة</Label>
                    {/* <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{selectedAssets.length} أصول</span>
                    </div> */}
                  </div>

                  {/* Assets Grid */}
                  <div className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-4 gap-4">
                      {(showAllAssets ? availableAssets : availableAssets.slice(0, 4)).map((asset) => {
                        const isSelected = selectedAssets.includes(asset.id);
                        return (
                          <div
                            key={asset.id}
                            className={`relative cursor-pointer rounded-lg border-2 transition-all overflow-hidden group ${
                              isSelected
                                ? 'border-[#11383f] bg-[#f0fdf4]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {/* Asset Image */}
                            <div className="relative">
                              <img
                                src={asset.image}
                                alt={asset.name}
                                className="w-full h-40 object-cover"
                              />

                              {/* Action Icons - Show on hover */}
                              <div className="absolute top-2 left-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/assets/asset-movements/add/asset-detail/${asset.id}`);
                                  }}
                                  className="action-icon bg-[#11383f] text-white rounded-full p-1.5 hover:bg-[#0f2f35] transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={(e) => handleRemoveAsset(asset.id, e)}
                                  className="action-icon bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>

                              {/* Selection Checkbox */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleAssetSelection(asset.id);
                                }}
                                className={`action-icon absolute bottom-2 right-2 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? 'bg-[#11383f] border-[#11383f]'
                                    : 'bg-white border-gray-300 hover:border-gray-400'
                                }`}
                              >
                                {isSelected && (
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </button>
                            </div>

                            {/* Asset Name */}
                            <div className="p-3 bg-white">
                              <p className="text-sm text-center text-gray-700 font-medium">
                                {asset.name}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* View All Assets Button */}
                    {availableAssets.length > 4 && (
                      <button 
                        onClick={() => setShowAllAssets(!showAllAssets)}
                        className="text-[#11383f] text-sm text-center w-[100%] font-medium hover:underline "
                      >
                        ⊕ {availableAssets.length - 4}+ أصول
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* معلومات الحركة */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('movementInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('assets.asset_movements.movement_info')}
            </h2>
            {sections.movementInfo ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.movementInfo && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.from_department')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('assets.asset_movements.from_department')}
                    value={formData.fromDepartment}
                    onChange={(e) => handleInputChange('fromDepartment', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.to_department')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('assets.asset_movements.to_department')}
                    value={formData.toDepartment}
                    onChange={(e) => handleInputChange('toDepartment', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.previous_employee')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('assets.asset_movements.previous_employee')}
                    value={formData.previousEmployee}
                    onChange={(e) => handleInputChange('previousEmployee', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.new_location')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('assets.asset_movements.new_location')}
                    value={formData.newLocation}
                    onChange={(e) => handleInputChange('newLocation', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.new_employee')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('assets.asset_movements.new_employee')}
                    value={formData.newEmployee}
                    onChange={(e) => handleInputChange('newEmployee', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.new_department')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('assets.asset_movements.new_department')}
                    value={formData.newDepartmentDetails}
                    onChange={(e) => handleInputChange('newDepartmentDetails', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.new_cost_center')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('assets.asset_movements.new_cost_center')}
                    value={formData.newCostCenter}
                    onChange={(e) => handleInputChange('newCostCenter', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('assets.asset_movements.new_position')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('assets.asset_movements.new_position')}
                    value={formData.newPosition}
                    onChange={(e) => handleInputChange('newPosition', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* التأكيد */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('confirmation')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('assets.asset_movements.confirmation')}
            </h2>
            {sections.confirmation ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.confirmation && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="flex flex-col items-start gap-4 justify-between">
                <Label className="text-sm font-medium text-gray-700">
                  {t('assets.asset_movements.update_custody_question')}
                </Label>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    {t('assets.asset_movements.yes_update_directly')}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.updateCustody}
                      onChange={(e) => handleInputChange('updateCustody', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#11383f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#11383f]"></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
