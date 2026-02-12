import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import InitialFilters from '@/components/InitialFilters';
import { ArrowRight, Paperclip, Trash2 } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const CompanySettings = (): JSX.Element => {
  const {  dir } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    companyName: 'شركة تصميم تجربة السحتخدم للمحتويين',
    companyType: 'تجارية',
    isMainCompany: 'نعم',
    commercialRegister: '4587878',
    taxNumber: '457845',
    companyCode: 'CDUXP',
    companyCurrency: 'الريال السعودي',
    streetAddress: 'شارع العليا',
    district: 'حي اللتر',
    city: 'جدة التر',
    postalCode: '2366521',
    additionalNumber: '123',
  });

  const [attachmentsCount] = useState(0);
  const [companyLogo, setCompanyLogo] = useState<string>('');

  // Load logo from localStorage on mount
  useEffect(() => {
    // Check customization storage first
    try {
      const customizationData = localStorage.getItem('maykana_customization');
      if (customizationData) {
        const parsed = JSON.parse(customizationData);
        if (parsed.brandImage) {
          setCompanyLogo(parsed.brandImage);
          return;
        }
      }
    } catch (error) {
      console.error('Error loading customization:', error);
    }
    
    // Fallback to default logo
    setCompanyLogo('/images/logo/company/dummy-company-logo.png');
  }, []);

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setCompanyLogo(result);
        
        // Update both brandImage and customization storage
        try {
          const customizationData = localStorage.getItem('maykana_customization');
          const customization = customizationData ? JSON.parse(customizationData) : {};
          customization.brandImage = result;
          localStorage.setItem('maykana_customization', JSON.stringify(customization));
        } catch (error) {
          console.error('Error updating customization:', error);
        }
        
        // Trigger storage event for customization panel
        window.dispatchEvent(new Event('storage'));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoDelete = () => {
    const defaultLogo = '/images/logo/company/dummy-company-logo.png';
    setCompanyLogo(defaultLogo);
    
    // Update customization storage
    try {
      const customizationData = localStorage.getItem('maykana_customization');
      const customization = customizationData ? JSON.parse(customizationData) : {};
      customization.brandImage = '';
      localStorage.setItem('maykana_customization', JSON.stringify(customization));
    } catch (error) {
      console.error('Error updating customization:', error);
    }
    
    // Trigger storage event
    window.dispatchEvent(new Event('storage'));
  };

  const handleLogoClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/settings?module=accounting');
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section with InitialFilters */}
        <InitialFilters>
          {/* Right side - Back button */}
          <Button
            variant="outline"
            onClick={() => navigate('/settings?module=accounting')}
            className="bg-white hover:bg-gray-50 px-4 py-2 h-[43px] rounded-lg gap-2 border-0 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="text-base">معلومات الشركة</span>
          </Button>

          {/* Left side - Action buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-50 px-4 py-2 h-[43px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              <Paperclip className="h-4 w-4" />
              <span className="text-base">أضف مرفقات</span>
              {attachmentsCount > 0 && (
                <span className="text-sm text-gray-500">({attachmentsCount})</span>
              )}
            </Button>

            <button 
              className={buttonClasses.primary}
              onClick={handleSubmit}
            >
              حفظ التعديلات
            </button>
          </div>
        </InitialFilters>

        {/* Main Content Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="p-6">
            {/* Two Column Layout */}
            <div className="flex gap-6" dir={dir}>
              {/* Right Section - Form Fields */}
              <div className="flex-1 space-y-8">
                {/* Basic Information Section */}
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                    المعلومات الأساسية
                  </h2>

                  {/* First Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Company Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        اسم الشركة
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>

                    {/* Is Main Company */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        هل هي شركة رئيسية؟
                      </label>
                      <div className="flex items-center gap-6 h-[45px]">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isMainCompany"
                            value="نعم"
                            checked={formData.isMainCompany === 'نعم'}
                            onChange={(e) => handleInputChange('isMainCompany', e.target.value)}
                            className="w-4 h-4 text-[#0c4749] focus:ring-[#0c4749]"
                          />
                          <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">نعم</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isMainCompany"
                            value="لا"
                            checked={formData.isMainCompany === 'لا'}
                            onChange={(e) => handleInputChange('isMainCompany', e.target.value)}
                            className="w-4 h-4 text-[#0c4749] focus:ring-[#0c4749]"
                          />
                          <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">لا</span>
                        </label>
                      </div>
                    </div>

                    {/* Company Type */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        نوع الجهة
                      </label>
                      <select
                        value={formData.companyType}
                        onChange={(e) => handleInputChange('companyType', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      >
                        <option value="تجارية">مؤسسة تجارية</option>
                        <option value="صناعية">مؤسسة صناعية</option>
                        <option value="خدمية">مؤسسة خدمية</option>
                      </select>
                    </div>
                  </div>

                  {/* Second Row - Commercial Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Commercial Register */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        السجل التجاري
                      </label>
                      <input
                        type="text"
                        value={formData.commercialRegister}
                        onChange={(e) => handleInputChange('commercialRegister', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>

                    {/* Tax Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        الرقم الضريبي
                      </label>
                      <input
                        type="text"
                        value={formData.taxNumber}
                        onChange={(e) => handleInputChange('taxNumber', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>

                    {/* Company Code */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        اختصار الشركة
                      </label>
                      <input
                        type="text"
                        value={formData.companyCode}
                        onChange={(e) => handleInputChange('companyCode', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>
                  </div>

                  {/* Third Row - Currency */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Company Currency */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        عملة الشركة
                      </label>
                      <div className="relative">
                        <select
                          value={formData.companyCurrency}
                          onChange={(e) => handleInputChange('companyCurrency', e.target.value)}
                          className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                          dir={dir}
                        >
                          <option value="الريال السعودي">الريال السعودي</option>
                          <option value="الدولار الأمريكي">الدولار الأمريكي</option>
                          <option value="اليورو">اليورو</option>
                        </select>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center pointer-events-none">
                          <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* National Address Section */}
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                    العنوان الوطني
                  </h2>

                  {/* First Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Building Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        رقم المبنى
                      </label>
                      <input
                        type="text"
                        value="123"
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>

                    {/* Street */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        الشارع
                      </label>
                      <input
                        type="text"
                        value={formData.streetAddress}
                        onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>

                    {/* District */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        الحي
                      </label>
                      <input
                        type="text"
                        value={formData.district}
                        onChange={(e) => handleInputChange('district', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* City */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        البلدة
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>

                    {/* Postal Code */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        الرمز البريدي
                      </label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>

                    {/* Additional Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
                        الرقم الإضافي
                      </label>
                      <input
                        type="text"
                        value={formData.additionalNumber}
                        onChange={(e) => handleInputChange('additionalNumber', e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]"
                        dir={dir}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Section - Logo */}
              <div className="w-[300px] flex flex-col items-center gap-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                />
            
            <div className="w-full h-[200px] bg-white rounded-lg border border-[#e2e2e2] flex items-center justify-center overflow-hidden">
              {companyLogo ? (
                <img src={companyLogo} alt="شعار الشركة" className="w-full h-full object-contain p-4" />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    شعار الشركة
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 w-full">
              <Button
                variant="outline"
                onClick={handleLogoClick}
                className="flex-1 text-sm px-4 py-2 h-[40px] rounded-lg border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                تغيير شعار الشركة
              </Button>
              
              <Button
                variant="outline"
                onClick={handleLogoDelete}
                className="w-[40px] h-[40px] p-0 rounded-lg border border-[#e2e2e2] text-red-600 hover:bg-red-50 flex items-center justify-center"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
        </Card>
      </div>
    </Layout>
  );
};

export default CompanySettings;
