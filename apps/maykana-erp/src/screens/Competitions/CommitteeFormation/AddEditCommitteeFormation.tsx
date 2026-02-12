import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, Paperclip } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { buttonClasses } from '@/styles';

export function AddEditCommitteeFormation() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    committeeNumber1: '',
    committeeNumber2: '',
    formationDate1: '',
    formationDate2: '',
    committeeType: '',
    committeeStatus: 'active',
    startDate: '',
    endDate: '',
    memberNumber: '',
    memberName: '',
    department: '',
    branchOrCommittee: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/competitions/committee-formation');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Action Buttons */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate('/competitions/committee-formation')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('committee_formation.basic_data_form')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 text-gray-700 rounded-lg hover:bg-slate-100 transition-colors border border-[#e7e7e7]"
            >
              <Paperclip className="w-4 h-4" />
              {t('committee_formation.add_attachments')}
            </button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('committee_formation.submit_request')}
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Committee Basic Data Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">{t('committee_formation.committee_basic_data')}</h2>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center bg-[#f0f4f7] rounded-lg"
              >
                <ChevronDown className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Committee Number 1 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.committee_number')}
                </label>
                <input
                  type="text"
                  name="committeeNumber1"
                  value={formData.committeeNumber1}
                  onChange={handleInputChange}
                  placeholder={t('committee_formation.committee_number')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-left"
                  dir="ltr"
                />
              </div>

              {/* Committee Number 2 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.committee_number')}
                </label>
                <input
                  type="text"
                  name="committeeNumber2"
                  value={formData.committeeNumber2}
                  onChange={handleInputChange}
                  placeholder={t('committee_formation.committee_number')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-left"
                  dir="ltr"
                />
              </div>

              {/* Formation Date 1 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.formation_date')}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="formationDate1"
                    value={formData.formationDate1}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                  />
                </div>
              </div>

              {/* Formation Date 2 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.formation_date')}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="formationDate2"
                    value={formData.formationDate2}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                  />
                </div>
              </div>

              {/* Committee Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.committee_type')}
                </label>
                <div className="relative">
                  <select
                    name="committeeType"
                    value={formData.committeeType}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="">{t('committee_formation.committee_type')}</option>
                    <option value="type1">فتح عروض</option>
                    <option value="type2">نوع 2</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Committee Status */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.committee_status')}
                </label>
                <div className="relative">
                  <select
                    name="committeeStatus"
                    value={formData.committeeStatus}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="active">{t('committee_formation.status_active')}</option>
                    <option value="inactive">{t('committee_formation.status_inactive')}</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Start Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.start_date')}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                  />
                </div>
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.end_date')}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Committee Members Data Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">
                {t('committee_formation.committee_members_data')}
              </h2>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center bg-[#f0f4f7] rounded-lg"
              >
                <ChevronDown className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Member Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.member_number')}
                </label>
                <input
                  type="text"
                  name="memberNumber"
                  value={formData.memberNumber}
                  onChange={handleInputChange}
                  placeholder={t('committee_formation.member_number')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-left"
                  dir="ltr"
                />
              </div>

              {/* Member Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.member_name')}
                </label>
                <input
                  type="text"
                  name="memberName"
                  value={formData.memberName}
                  onChange={handleInputChange}
                  placeholder={t('committee_formation.member_name')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                />
              </div>

              {/* Department */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.department')}
                </label>
                <div className="relative">
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="">{t('committee_formation.department')}</option>
                    <option value="dept1">الإدارة</option>
                    <option value="dept2">إدارة 2</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Branch or Committee */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('committee_formation.branch_or_committee')}
                </label>
                <div className="relative">
                  <select
                    name="branchOrCommittee"
                    value={formData.branchOrCommittee}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="">{t('committee_formation.branch_or_committee')}</option>
                    <option value="branch1">الفرع أو اللجنة</option>
                    <option value="branch2">فرع 2</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
