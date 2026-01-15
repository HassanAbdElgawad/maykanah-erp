import { Button } from '../../components/ui/button';
import { DivSubsection } from '../Screen6/sections/DivSubsection';
import { Group1Subsection } from '../Screen6/sections/Group1Subsection';
import { Group2Subsection } from '../Screen6/sections/Group2Subsection';
import { Group3Subsection } from '../Screen6/sections/Group3Subsection';
import { Group4Subsection } from '../Screen6/sections/Group4Subsection';
import { Group5Subsection } from '../Screen6/sections/Group5Subsection';
import { Group6Subsection } from '../Screen6/sections/Group6Subsection';
import { SectionComponentNodeSubsection } from '../Screen6/sections/SectionComponentNodeSubsection';
import { Group7Subsection } from '../Screen7/sections/Group7Subsection';
import { Group8Subsection } from '../Screen7/sections/Group8Subsection';
import { Group9Subsection } from '../Screen7/sections/Group9Subsection';
import { Group10Subsection } from '../Screen7/sections/Group10Subsection';
import { Group11Subsection } from '../Screen7/sections/Group11Subsection';
import { Group12Subsection } from '../Screen7/sections/Group12Subsection';
import { Group13Subsection } from '../Screen7/sections/Group13Subsection';
import { Group14Subsection } from '../Screen7/sections/Group14Subsection';
import { AccountingHeader } from './sections/AccountingHeader';
import { DivWrapperSubsection } from './sections/DivWrapperSubsection';
import { GroupSubsection } from './sections/GroupSubsection';
import { GroupWrapperSubsection } from './sections/GroupWrapperSubsection';

const tableHeaders = [
  { label: 'تاريخ القيد', left: 'left-[1310px]' },
  { label: 'نوع القيد', left: 'left-[1061px]' },
  { label: 'المبلغ المدين', left: 'left-[794px]' },
  { label: 'المبلغ الدائن', left: 'left-[530px]' },
  { label: 'حالة القيد', left: 'left-[283px]' },
];

const verticalLines = [
  { left: 'left-[1134px]' },
  { left: 'left-[877px]' },
  { left: 'left-[620px]' },
  { left: 'left-[363px]' },
  { left: 'left-[107px]' },
];

export const AccountingWrapper = (): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen bg-[#f7f7f9] overflow-hidden"
      data-model-id="811:12808"
    >
      <div className="flex flex-col gap-4 p-4">
        <AccountingHeader />

        <main className="bg-white rounded-xl border border-solid border-[#e2e2e2] overflow-hidden">
          <div className="bg-[#f1f5f980] rounded-[12px_12px_0px_0px] border border-solid border-slate-100 h-[54px] relative">
            <div className="flex items-center h-full px-7 relative">
              {tableHeaders.map((header, index) => (
                <div
                  key={index}
                  className={`absolute top-[15px] ${header.left} [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base [direction:rtl]`}
                >
                  {header.label}
                </div>
              ))}

              {verticalLines.map((line, index) => (
                <img
                  key={index}
                  className={`absolute top-0 ${line.left} w-px h-[53px] object-cover`}
                  alt="Line"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-17.svg"
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[900px]">
            <img
              className="absolute top-0 left-7 w-px h-[897px] object-cover"
              alt="Line"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-20.svg"
            />
            <img
              className="absolute top-0 right-7 w-px h-[897px] object-cover"
              alt="Line"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-20.svg"
            />

            <div className="flex flex-col items-center justify-center py-32">
              <img
                className="w-[169px] h-[147px] object-cover mb-8"
                alt="Empty state"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/image-11.png"
              />
              <div className="text-center mb-4">
                <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-lg [direction:rtl]">
                  لم نجد أي نتيجة خاصة ببحثك "قيد عادي"
                </p>
                <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-gray-500 text-sm [direction:rtl]">
                  تأكد من كتابة ما تبحث عنه بشكل صحيح
                </p>
              </div>
              <Button className="bg-[#093738] hover:bg-[#093738]/90 text-white rounded-lg h-auto px-6 py-2">
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base">
                  رجوع
                </span>
              </Button>
            </div>

            <img
              className="absolute bottom-0 left-7 w-[1363px] h-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-6.svg"
            />
          </div>
        </main>
      </div>

      <Group3Subsection />
      <Group2Subsection />
      <Group7Subsection />
      <Group11Subsection />
      <DivWrapperSubsection />
      <Group4Subsection />
      <Group6Subsection />
      <GroupSubsection />
      <GroupWrapperSubsection />
      <DivSubsection />
      <Group13Subsection />
      <Group14Subsection />
      <Group5Subsection />
      <Group8Subsection />
      <Group12Subsection />
      <Group1Subsection />
      <SectionComponentNodeSubsection />
      <Group9Subsection />
      <Group10Subsection />
    </div>
  );
};
