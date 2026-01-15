import {
  BellIcon,
  BookMarkedIcon,
  ChevronDownIcon,
  SearchIcon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const breadcrumbItems = [
  {
    label: "إدارة الحسابات",
    hasDropdown: true,
    fontWeight: "font-light",
    textColor: "text-[#000000cc]",
  },
  {
    label: "الخدمات",
    hasDropdown: true,
    fontWeight: "font-light",
    textColor: "text-[#000000cc]",
  },
  {
    label: "القيود المحاسبية",
    hasDropdown: true,
    fontWeight: "font-normal",
    textColor: "text-black",
  },
];

export const GroupSubsection = (): JSX.Element => {
  return (
    <nav className="w-full bg-white rounded-xl border border-solid border-[#e1e1e1] p-2 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            className="w-[79px] h-[55px]"
            alt="Logo"
            src="/images/logo/Maykna_Horizintal_Version_4_1.svg"
          />

          <Button
            variant="ghost"
            size="icon"
            className="h-[45px] w-[45px] bg-slate-50 rounded-lg hover:bg-slate-100"
          >
            <div className="relative">
              <BellIcon className="w-[26px] h-[26px]" />
              <Badge className="absolute top-[-5px] right-[-5px] w-3 h-3 p-0 bg-[#ff0000] rounded-md shadow-[0px_4px_4px_#00000040] border border-solid border-white" />
            </div>
          </Button>

          <img
            className="w-[71px] h-[45px]"
            alt="Group"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79826-5.png"
          />

          <div className="relative w-[367px]">
            <div className="relative bg-slate-50 rounded-lg border border-solid border-[#cfcfcf]">
              <SearchIcon className="absolute top-[13px] right-3 w-4 h-4 text-[#99a09e]" />
              <Input
                type="text"
                placeholder="بحث عام من هنا ..."
                className="h-[45px] pr-10 pl-14 bg-transparent border-0 [font-family:'Graphik_Arabic-Regular',Helvetica] text-base text-[#99a09e] placeholder:text-[#99a09e] [direction:rtl]"
              />
              <div className="absolute top-[11px] left-2 w-[38px] h-[22px] bg-white rounded-md border-[0.8px] border-solid border-[#cccccc] flex items-center justify-center">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#00000099] text-[13px] tracking-[2.21px]">
                  ⌘K
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 [direction:rtl]">
            {breadcrumbItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto px-0 py-0 hover:bg-transparent flex items-center gap-[3px]"
              >
                <span
                  className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${item.fontWeight} ${item.textColor} text-lg leading-[normal] tracking-[0] whitespace-nowrap`}
                >
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-[11px] h-[11px]" />
                )}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-[42px] w-[42px] bg-[#f0f4f7] rounded-lg hover:bg-[#e5eaed]"
          >
            <BookMarkedIcon className="w-[19px] h-[19px]" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
