import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Paperclip } from 'lucide-react';

export function NewRecruitmentRequest() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [job, setJob] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [replacement, setReplacement] = useState('');
  const [wage, setWage] = useState('');
  const [startDate, setStartDate] = useState('');
  const [salary, setSalary] = useState('');
  const [qualificationsCount, setQualificationsCount] = useState('');
  const [attachmentsCount] = useState(0);

  const handleSubmit = () => {
    console.log('Submit recruitment request:', {
      job,
      applicantName,
      jobTitle,
      department,
      replacement,
      wage,
      startDate,
      salary,
      qualificationsCount,
    });
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between">
            {/* Right Side: Back Button + Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-semibold text-[#11383f]">{t('hr.new_recruitment_request')}</h1>
            </div>

            {/* Left Side: Buttons */}
            <div className="flex gap-2">
             
              <Button
                variant="outline"
                className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"
              >
                <Paperclip className="w-4 h-4" />
                {t('hr.add_attachments')}
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs">
                  {attachmentsCount}
                </span>
              </Button>
               <Button
                onClick={handleSubmit}
                className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
              >
                {t('hr.send_request')}
              </Button>
            </div>
          </div>
        </div>

        {/* Job Information Card */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#11383f]">
              {t('hr.job_information')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Job */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.job')}</label>
                <input
                  type="text"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  placeholder={t('hr.job')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Applicant Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.applicant_name')}
                </label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder={t('hr.applicant_name')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Information Card */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#11383f]">
              {t('hr.other_information')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Job Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.job_title')}</label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder={t('hr.job_title')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Department */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.department')}</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder={t('hr.department')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Replacement */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.replacement')}
                </label>
                <select
                  value={replacement}
                  onChange={(e) => setReplacement(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                >
                  <option value="">{t('hr.replacement')}</option>
                  <option value="بديل أم">بديل أم</option>
                  <option value="بديل آخر">بديل آخر</option>
                </select>
              </div>

              {/* Wage */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.wage')}</label>
                <input
                  type="text"
                  value={wage}
                  onChange={(e) => setWage(e.target.value)}
                  placeholder={t('hr.wage')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.start_date')}
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Salary */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.salary')}</label>
                <input
                  type="text"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder={t('hr.salary')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Qualifications Count */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.qualifications_count')}
                </label>
                <select
                  value={qualificationsCount}
                  onChange={(e) => setQualificationsCount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                >
                  <option value="">{t('hr.qualifications_count')}</option>
                  <option value="عدد المؤهلات">عدد المؤهلات</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
