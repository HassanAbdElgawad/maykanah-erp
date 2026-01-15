import {
  BellIcon,
  BookMarkedIcon,
  ChevronDownIcon,
  SearchIcon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const breadcrumbItems = [
  { label: "إدارة الحسابات", isActive: false },
  { label: "الخدمات", isActive: false },
  { label: "العهد النقدية", isActive: false },
  { label: "طلبات العهد النقدية", isActive: true },
];

export const Group7Subsection = (): JSX.Element => {
  return (
    <header className="relative w-full bg-white rounded-xl border border-solid border-[#e1e1e1] p-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            className="w-[79px] h-[55px]"
            alt="Group"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79824-3.png"
          />

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-[45px] w-[45px] bg-slate-50 rounded-lg"
            >
              <BellIcon className="h-[26px] w-[26px]" />
              <Badge className="absolute top-[11px] left-[22px] h-3 w-3 p-0 bg-[#ff0000] rounded-md shadow-[0px_4px_4px_#00000040] border border-solid border-white" />
            </Button>

            <img
              className="w-[71px] h-[45px]"
              alt="Group"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79826-3.png"
            />
          </div>

          <div className="relative w-[367px]">
            <div className="relative bg-slate-50 rounded-lg border border-solid border-[#cfcfcf]">
              <SearchIcon className="absolute top-[13px] right-3 w-4 h-4 text-[#99a09e]" />
              <Input
                placeholder="بحث عام من هنا ..."
                className="h-[45px] pr-10 pl-16 bg-transparent border-0 [font-family:'Graphik_Arabic-Regular',Helvetica] text-base text-[#99a09e] [direction:rtl]"
              />
              <div className="absolute top-[11px] left-2 h-[22px] px-1.5 bg-white rounded-md border-[0.8px] border-solid border-[#cccccc] flex items-center justify-center">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#00000099] text-[13px] tracking-[2.21px]">
                  ⌘K
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-1 [direction:rtl]">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-lg tracking-[0] leading-[normal] ${
                        item.isActive
                          ? "font-normal text-black"
                          : "font-light text-[#000000cc]"
                      }`}
                    >
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator>
                      <ChevronDownIcon className="w-[11px] h-[11px]" />
                    </BreadcrumbSeparator>
                  )}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          <Button
            variant="ghost"
            size="icon"
            className="h-[42px] w-[42px] bg-[#f0f4f7] rounded-lg"
          >
            <BookMarkedIcon className="w-[19px] h-[19px]" />
          </Button>
        </div>
      </div>
    </header>
  );
};
