import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { ChevronRight, Paperclip } from 'lucide-react';

export function AddEvaluation() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [job, setJob] = useState('');
  const [evaluationCourseName, setEvaluationCourseName] = useState('');
  const [departments, setDepartments] = useState('');
  const [period, setPeriod] = useState('');
  const [evaluationModel, setEvaluationModel] = useState('');
  const [attachmentsCount] = useState(0);

  const handleSubmit = () => {
    console.log('Submit evaluation:', {
      job,
      evaluationCourseName,
      departments,
      period,
      evaluationModel,
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
              <h1 className="text-xl font-semibold text-[#11383f]">{t('hr.add_evaluation')}</h1>
            </div>

            {/* Left Side: Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={handleSubmit}
                className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
              >
                {t('hr.send_request')}
              </Button>
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
            </div>
          </div>
        </div>

        {/* Employee Information Card */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#11383f]">
              {t('hr.employee_information')}
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
              {/* Evaluation Course Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.evaluation_course_name')}
                </label>
                <input
                  type="text"
                  value={evaluationCourseName}
                  onChange={(e) => setEvaluationCourseName(e.target.value)}
                  placeholder={t('hr.evaluation_course_name')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Departments */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.departments')}
                </label>
                <select
                  value={departments}
                  onChange={(e) => setDepartments(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                >
                  <option value="">{t('hr.departments')}</option>
                  <option value="قسم 1">قسم 1</option>
                  <option value="قسم 2">قسم 2</option>
                  <option value="قسم 3">قسم 3</option>
                </select>
              </div>

              {/* Period */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.period')}
                </label>
                <input
                  type="date"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Evaluation Model */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.evaluation_model')}
                </label>
                <select
                  value={evaluationModel}
                  onChange={(e) => setEvaluationModel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                >
                  <option value="">{t('hr.evaluation_model')}</option>
                  <option value="نموذج 1">نموذج 1</option>
                  <option value="نموذج 2">نموذج 2</option>
                  <option value="نموذج 3">نموذج 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
