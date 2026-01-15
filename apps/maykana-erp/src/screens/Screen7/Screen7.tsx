import {
  CreditCardIcon,
  DownloadIcon,
  EyeIcon,
  FilterIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  Trash2Icon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Input } from "../../components/ui/input";
import { Group7Subsection } from "./sections/Group7Subsection";
import { Group8Subsection } from "./sections/Group8Subsection";
import { Group9Subsection } from "./sections/Group9Subsection";
import { Group10Subsection } from "./sections/Group10Subsection";
import { Group11Subsection } from "./sections/Group11Subsection";
import { Group12Subsection } from "./sections/Group12Subsection";
import { Group13Subsection } from "./sections/Group13Subsection";
import { Group14Subsection } from "./sections/Group14Subsection";

const tableRows = [
  {
    id: "ADV-4592",
    requestDate: "2024-07-03",
    amount: "1,500.00",
    employee: "ليلى عطار",
    creationDate: "2024-07-03",
    status: "معتمدة",
    statusColor: "bg-[#d4f4dd] text-[#0e6027]",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-20960-3.png",
  },
  {
    id: "ADV-8735",
    requestDate: "2024-07-10",
    amount: "500.00",
    employee: "عمر بن الخطاب",
    creationDate: "2024-07-10",
    status: "تم صرفها",
    statusColor: "bg-[#ffe5e5] text-[#e73d40]",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79871-3.png",
  },
  {
    id: "ADV-2387",
    requestDate: "2024-07-17",
    amount: "0.00",
    employee: "نور الحق",
    creationDate: "2024-07-17",
    status: "مرفوضة",
    statusColor: "bg-[#ffe5e5] text-[#e73d40]",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79872-3.png",
  },
  {
    id: "ADV-6724",
    requestDate: "2024-07-24",
    amount: "2,000.00",
    employee: "محمود بن يوسف",
    creationDate: "2024-07-24",
    status: "مرفوضة",
    statusColor: "bg-[#ffe5e5] text-[#e73d40]",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79873-3.png",
  },
  {
    id: "ADV-5829",
    requestDate: "2024-07-31",
    amount: "3,000.00",
    employee: "فاطمة نصر",
    creationDate: "2024-07-31",
    status: "قيد المراجعة",
    statusColor: "bg-[#fff4e5] text-[#ff9800]",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79874-3.png",
  },
  {
    id: "ADV-1276",
    requestDate: "2024-08-07",
    amount: "0.00",
    employee: "أحمد شوقي",
    creationDate: "2024-08-07",
    status: "مسودة",
    statusColor: "bg-slate-100 text-slate-600",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79875-3.png",
  },
  {
    id: "ADV-7931",
    requestDate: "2024-08-14",
    amount: "250.00",
    employee: "سلمى راضي",
    creationDate: "2024-08-14",
    status: "تم صرفها",
    statusColor: "bg-[#ffe5e5] text-[#e73d40]",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79876-3.png",
  },
  {
    id: "ADV-3418",
    requestDate: "2024-08-21",
    amount: "1,200.00",
    employee: "يوسف شاهين",
    creationDate: "2024-08-21",
    status: "معلقة تسوية",
    statusColor: "bg-[#fff9e5] text-[#ffc107]",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79877-3.png",
  },
];

const horizontalLines = [
  "top-[279px]",
  "top-[333px]",
  "top-[387px]",
  "top-[441px]",
  "top-[495px]",
  "top-[549px]",
  "top-[603px]",
  "top-[657px]",
];

export const Screen7 = (): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen bg-[#f7f7f9] overflow-hidden"
      data-model-id="864:7635"
    >
      <div className="absolute top-[155px] left-[15px] w-[1388px] bg-white rounded-xl border border-solid border-[#e2e2e2] pb-8" />

      <div className="absolute top-[172px] left-7 w-[1363px] h-[54px] bg-[#f1f5f980] rounded-[12px_12px_0px_0px] border border-solid border-slate-100" />

      <Group7Subsection />

      <div className="absolute top-[75px] left-[15px] w-[1388px] h-[73px] bg-white rounded-xl border border-solid border-[#e2e2e2]" />

      {horizontalLines.map((topClass, index) => (
        <img
          key={`line-${index}`}
          className={`absolute ${topClass} left-7 w-[1363px] h-px object-cover`}
          alt="Line"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-6.svg"
        />
      ))}

      <img
        className="absolute top-[186px] left-7 w-px h-[472px] object-cover"
        alt="Line"
        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-20-2.svg"
      />

      <img
        className="absolute top-[186px] left-[1390px] w-px h-[472px] object-cover"
        alt="Line"
        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-20-2.svg"
      />

      {tableRows.map((row, index) => (
        <img
          key={`icon-${index}`}
          className={`absolute top-[${237 + index * 54}px] left-[41px] w-[35px] h-[35px]`}
          alt="Group"
          src={row.icon}
        />
      ))}

      <img
        className="absolute top-[172px] left-[322px] w-px h-[486px] object-cover"
        alt="Line"
        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-13.svg"
      />

      <Group8Subsection />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            className="absolute top-[397px] left-[41px] w-[35px] h-[35px] cursor-pointer"
            alt="Group"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-80123.png"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[135px] bg-white rounded-lg border border-solid border-[#eaeaea] shadow-[0px_22px_44px_#0000001a]">
          <DropdownMenuItem className="flex items-center gap-2 [direction:rtl]">
            <CreditCardIcon className="w-4 h-4" />
            <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-black text-base">
              تصفية العهدة
            </span>
          </DropdownMenuItem>
          <div className="h-px bg-[#eaeaea] mx-2" />
          <DropdownMenuItem className="flex items-center gap-2 [direction:rtl]">
            <EyeIcon className="w-[18px] h-[18px]" />
            <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-black text-base">
              تصفح العهدة
            </span>
          </DropdownMenuItem>
          <div className="h-px bg-[#eaeaea] mx-2" />
          <DropdownMenuItem className="flex items-center gap-2 [direction:rtl]">
            <Trash2Icon className="w-5 h-5 text-[#e73d40]" />
            <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#e73d40] text-base">
              مسح العهدة
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="fixed top-[89px] left-[858px] w-[533px] h-[45px]">
        <div className="relative w-full h-full">
          <Input
            type="text"
            placeholder="ابحث من هنا (رقم العهدة، التاريخ، اسم الموظف، ...)"
            className="w-full h-full bg-white rounded-lg border border-solid border-[#cfcfcf] text-right pr-10 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#99a09e] text-base [direction:rtl]"
          />
          <SearchIcon className="absolute top-3 right-3 w-4 h-4 text-[#99a09e]" />
        </div>
      </div>

      <Button className="fixed top-[90px] left-7 w-[135px] h-[43px] bg-[#093738] rounded-lg shadow-[0px_4px_4px_#0000001a] hover:bg-[#0a4445] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-white text-base [direction:rtl]">
        طلب عهدة جديدة
      </Button>

      <Group9Subsection />
      <Group10Subsection />
      <Group11Subsection />
      <Group12Subsection />
      <Group13Subsection />
      <Group14Subsection />

      <div className="inline-flex items-center gap-2 fixed top-[90px] left-[169px]">
        <div className="relative w-[217px] h-[43px]">
          <img
            className="absolute top-3.5 left-[197px] w-4 h-4"
            alt="Vuesax linear frame"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-frame.svg"
          />

          <div className="absolute top-[13px] left-[131px] w-[9px] h-[17px]">
            <img
              className="absolute top-px left-px w-[9px] h-[9px]"
              alt="Arrow down"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-162.png"
            />

            <img
              className="absolute top-2 left-0 w-[9px] h-[9px]"
              alt="Arrow down"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-163.png"
            />
          </div>

          <div className="absolute top-[13px] left-[152px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base tracking-[0] leading-[15px] whitespace-nowrap [direction:rtl]">
            تحميل
          </div>

          <div className="inline-flex items-center gap-2 absolute top-0 left-0">
            <Button
              variant="secondary"
              className="flex w-[102px] h-[43px] items-center justify-center gap-1.5 px-2.5 py-3 bg-slate-50 rounded-lg hover:bg-slate-100"
            >
              <FilterIcon className="w-[18px] h-[18px]" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                فلتر
              </span>
            </Button>

            <Button
              variant="secondary"
              className="flex w-[105px] h-[43px] items-center justify-center gap-[5px] px-2.5 py-[13px] bg-slate-50 rounded-lg hover:bg-slate-100"
            >
              <DownloadIcon className="w-4 h-4" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                تصدير
              </span>
            </Button>
          </div>
        </div>

        <Button
          variant="secondary"
          className="flex w-44 h-[43px] items-center justify-center gap-2 p-[13px] bg-slate-50 rounded-lg hover:bg-slate-100"
        >
          <SlidersHorizontalIcon className="w-3.5 h-3.5" />
          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
            إظهار/إخفاء أعمدة
          </span>
        </Button>
      </div>
    </div>
  );
};
