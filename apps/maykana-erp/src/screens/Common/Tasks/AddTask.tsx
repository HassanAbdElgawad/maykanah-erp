import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardContainer } from '@/components/ui/CardContainer';
import { ArrowLeft, ArrowRight, Paperclip, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { buttonClasses } from '@/styles';

export const AddTask = (): JSX.Element => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    taskNumber: 'TSK-025-2025',
    taskType: '',
    taskName: '',
    priority: '',
    assignedTo: '',
    startDate: '',
    dueDate: '',
    plannedStartDate: '',
    plannedEndDate: '',
    description: '',
    attachments: [],
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/strategy/tasks');
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <CardContainer>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/strategy/tasks')}
                className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg flex items-center justify-center hover:bg-gray-200"
              >
                {language === 'ar' ? (
                  <ArrowRight className="w-5 h-5" />
                ) : (
                  <ArrowLeft className="w-5 h-5" />
                )}
              </button>
              <h1 className="text-xl font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-black">
                مهمة جديدة
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Paperclip className="w-5 h-5" />
                <span className="bg-[#093738] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  0
                </span>
                إضافة مرفقات
              </Button>
              <button
                onClick={handleSubmit}
                className={buttonClasses.primary}
              >
                ارسل الطلب
              </button>
            </div>
          </div>
        </CardContainer>

        {/* Basic Information Section */}
        <CardContainer>
          <div className="p-6">
            <div className={`flex items-center justify-between mb-6 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2cc28d] rounded-full"></div>
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-lg">
                  المعلومات الأساسية
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200 mb-6"></div>
            <div className="grid grid-cols-3 gap-6">
              {/* Task Number */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  رقم المهمة
                </label>
                <Input
                  type="text"
                  value={formData.taskNumber}
                  disabled
                  className="bg-white border-[#cfcfcf] opacity-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                />
              </div>

              {/* Task Type */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  نوع المهمة
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="اختر نوع المهمة"
                    value={formData.taskType}
                    onChange={(e) => setFormData({ ...formData, taskType: e.target.value })}
                    className="bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Task Name with Priority Badge */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  اسم المهمة
                </label>
                <div className="relative flex gap-2">
                  <div className="flex-1">
                    <Input
                      type="text"
                      placeholder="اسم المهمة"
                      value={formData.taskName}
                      onChange={(e) => setFormData({ ...formData, taskName: e.target.value })}
                      className="bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir="rtl"
                    />
                  </div>
                  <div className="flex items-center justify-center px-3 py-1.5 bg-[#e8ecec87] rounded-lg border border-[#ecedf5] min-w-[129px]">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-sm text-[#0e0d24]">
                      أولوية عالية
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              {/* Priority */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  الأولوية
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="اختر أولوية"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Assigned To */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  المكلف
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="اختر المكلف"
                    value={formData.assignedTo}
                    onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
                    className="bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    dir="rtl"
                  />
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Empty cell */}
              <div></div>
            </div>
          </div>
        </CardContainer>

        {/* Description Section */}
        <CardContainer>
          <div className="p-6">
            <div className={`flex items-center justify-between mb-6 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2cc28d] rounded-full"></div>
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-lg">
                  التواريخ
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200 mb-6"></div>
            <div className="grid grid-cols-2 gap-6">
              {/* Start Date */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  تاريخ البدء
                </label>
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                  dir="rtl"
                />
              </div>

              {/* Due Date */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  تاريخ الاستحقاق
                </label>
                <Input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  className="bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                  dir="rtl"
                />
              </div>
            </div>
          </div>
        </CardContainer>

        {/* Additional Information Section */}
        <CardContainer>
          <div className="p-6">
            <div className={`flex items-center justify-between mb-6 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2cc28d] rounded-full"></div>
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-lg">
                  معلومات إضافية
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200 mb-6"></div>
            <div className="grid grid-cols-2 gap-6">
              {/* Planned Start Date */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  تاريخ البدء المخطط
                </label>
                <Input
                  type="date"
                  value={formData.plannedStartDate}
                  onChange={(e) => setFormData({ ...formData, plannedStartDate: e.target.value })}
                  className="bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                  dir="rtl"
                />
              </div>

              {/* Planned End Date */}
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  تاريخ الانتهاء المخطط
                </label>
                <Input
                  type="date"
                  value={formData.plannedEndDate}
                  onChange={(e) => setFormData({ ...formData, plannedEndDate: e.target.value })}
                  className="bg-white border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  وصف المهمة
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 bg-white border border-[#cfcfcf] rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] resize-none"
                  dir="rtl"
                  placeholder="أدخل وصف المهمة"
                />
              </div>
              <div className="space-y-2">
                <label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#00000099] text-base">
                  ملاحظات
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 bg-white border border-[#cfcfcf] rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] resize-none"
                  dir="rtl"
                  placeholder="أدخل ملاحظات إضافية"
                />
              </div>
            </div>
          </div>
        </CardContainer>
      </div>
    </Layout>
  );
};
