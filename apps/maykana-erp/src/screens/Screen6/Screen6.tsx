import {
  DownloadIcon,
  FilterIcon,
  SearchIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { DivWrapperSubsection } from "../AccountingWrapper/sections/DivWrapperSubsection";
import { GroupSubsection } from "../AccountingWrapper/sections/GroupSubsection";
import { GroupWrapperSubsection } from "../AccountingWrapper/sections/GroupWrapperSubsection";
import { Group7Subsection } from "../Screen7/sections/Group7Subsection";
import { Group8Subsection } from "../Screen7/sections/Group8Subsection";
import { Group9Subsection } from "../Screen7/sections/Group9Subsection";
import { Group10Subsection } from "../Screen7/sections/Group10Subsection";
import { Group11Subsection } from "../Screen7/sections/Group11Subsection";
import { Group12Subsection } from "../Screen7/sections/Group12Subsection";
import { Group13Subsection } from "../Screen7/sections/Group13Subsection";
import { Group14Subsection } from "../Screen7/sections/Group14Subsection";
import { DivSubsection } from "./sections/DivSubsection";
import { Group1Subsection } from "./sections/Group1Subsection";
import { Group2Subsection } from "./sections/Group2Subsection";
import { Group3Subsection } from "./sections/Group3Subsection";
import { Group4Subsection } from "./sections/Group4Subsection";
import { Group5Subsection } from "./sections/Group5Subsection";
import { Group6Subsection } from "./sections/Group6Subsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

const tableRowIcons = [
  "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-20960-2.png",
  "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79871-2.png",
  "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79872-2.png",
  "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79873-2.png",
  "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79874-2.png",
  "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79875-2.png",
  "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79876-2.png",
  "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79877-2.png",
];

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen bg-[#f7f7f9] overflow-hidden"
      data-model-id="811:14568"
    >
      <div className="flex flex-col gap-3 p-[15px]">
        <header className="relative w-full bg-white rounded-xl border border-solid border-[#e2e2e2] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="flex items-center justify-between px-7 h-[73px]">
            <Button className="h-[43px] bg-[#093738] hover:bg-[#093738]/90 rounded-lg shadow-[0px_4px_4px_#0000001a] px-3">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-white text-base [direction:rtl]">
                طلب عهدة جديدة
              </span>
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="h-[43px] bg-slate-50 hover:bg-slate-100 rounded-lg px-2.5 py-3 gap-[5px]"
              >
                <DownloadIcon className="w-4 h-4" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                  تصدير
                </span>
              </Button>

              <Button
                variant="secondary"
                className="h-[43px] bg-slate-50 hover:bg-slate-100 rounded-lg px-2.5 py-3 gap-1.5"
              >
                <FilterIcon className="w-[18px] h-[18px]" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                  فلتر
                </span>
              </Button>

              <Button
                variant="secondary"
                className="h-[43px] bg-slate-50 hover:bg-slate-100 rounded-lg px-2.5 py-[13px] gap-2"
              >
                <SlidersHorizontalIcon className="w-3.5 h-3.5" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                  إظهار/إخفاء أعمدة
                </span>
              </Button>

              <div className="flex items-center gap-2">
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                  تحميل
                </span>
                <div className="flex flex-col gap-0.5">
                  <img
                    className="w-[9px] h-[9px]"
                    alt="Arrow down"
                    src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-155.png"
                  />
                  <img
                    className="w-[9px] h-[9px]"
                    alt="Arrow down"
                    src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-156.png"
                  />
                </div>
                <DownloadIcon className="w-4 h-4" />
              </div>
            </div>

            <div className="relative w-[533px]">
              <Input
                type="text"
                placeholder="ابحث من هنا (رقم العهدة، التاريخ، اسم الموظف، ...)"
                className="h-[45px] bg-white rounded-lg border border-solid border-[#cfcfcf] pr-10 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#99a09e] text-base [direction:rtl]"
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a09e]" />
            </div>
          </div>
        </header>

        <main className="relative w-full bg-white rounded-xl border border-solid border-[#e2e2e2] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="bg-[#f1f5f980] rounded-[12px_12px_0px_0px] border border-solid border-slate-100 h-[54px]" />

          <div className="relative">
            <Separator className="bg-slate-200" />

            <div className="grid grid-cols-[35px_1fr] relative">
              <div className="border-r border-slate-200">
                {tableRowIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-[54px] border-b border-slate-200"
                  >
                    <img className="w-[35px] h-[35px]" alt="Group" src={icon} />
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                <Separator className="bg-slate-200" />
                <Separator className="bg-slate-200" />
                <Separator className="bg-slate-200" />
                <Separator className="bg-slate-200" />
                <Separator className="bg-slate-200" />
                <Separator className="bg-slate-200" />
                <Separator className="bg-slate-200" />
              </div>
            </div>

            <div className="absolute top-0 left-[322px] w-px h-[486px] bg-slate-200" />
          </div>

          <SectionComponentNodeSubsection />
        </main>
      </div>

      <DivSubsection />
      <Group1Subsection />
      <Group2Subsection />
      <Group3Subsection />
      <Group4Subsection />
      <Group5Subsection />
      <Group6Subsection />
      <Group7Subsection />
      <Group8Subsection />
      <Group9Subsection />
      <Group10Subsection />
      <Group11Subsection />
      <Group12Subsection />
      <Group13Subsection />
      <Group14Subsection />
      <GroupSubsection />
      <GroupWrapperSubsection />
      <DivWrapperSubsection />
    </div>
  );
};
