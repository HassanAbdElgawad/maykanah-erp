import {
  BellIcon,
  BookMarkedIcon,
  ChevronLeftIcon,
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

export const DivSubsection = (): JSX.Element => {
  const breadcrumbItems = [
    { label: "إدارة الحسابات", isActive: false },
    { label: "الخدمات", isActive: false },
    { label: "العهد النقدية", isActive: false },
    { label: "طلبات العهد النقدية", isActive: true },
  ];

  return (
    <header className="w-full bg-white rounded-xl border border-solid border-[#e1e1e1] p-2">
      <nav className="flex items-center justify-between gap-4 h-[45px]">
        <div className="flex items-center gap-2">
          <img
            className="w-[79px] h-[55px] object-contain"
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
              <Badge className="absolute -top-1 -right-1 w-3 h-3 p-0 bg-[#ff0000] rounded-md shadow-[0px_4px_4px_#00000040] border border-solid border-white" />
            </div>
          </Button>

          <img
            className="w-[71px] h-[45px] object-contain"
            alt="Language selector"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79826-2.png"
          />
        </div>

        <div className="relative flex-1 max-w-[367px]">
          <div className="relative">
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a09e]" />
            <Input
              type="search"
              placeholder="بحث عام من هنا ..."
              className="w-full h-[45px] bg-slate-50 rounded-lg border border-solid border-[#cfcfcf] pr-10 pl-14 text-right [font-family:'Graphik_Arabic-Regular',Helvetica] text-base text-[#99a09e] [direction:rtl]"
            />
            <kbd className="absolute left-2 top-1/2 -translate-y-1/2 w-[38px] h-[22px] bg-white rounded-md border-[0.8px] border-solid border-[#cccccc] flex items-center justify-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#00000099] text-[13px] tracking-[2.21px]">
              ⌘K
            </kbd>
          </div>
        </div>

        <Breadcrumb className="flex-1">
          <BreadcrumbList className="flex items-center justify-end gap-1 [direction:rtl]">
            {breadcrumbItems.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-lg tracking-[0] leading-[normal] whitespace-nowrap ${
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
                    <ChevronLeftIcon className="w-[11px] h-[11px]" />
                  </BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <Button
          variant="ghost"
          size="icon"
          className="h-[42px] w-[42px] bg-[#f0f4f7] rounded-lg hover:bg-[#e5eaed]"
        >
          <BookMarkedIcon className="w-[19px] h-[19px]" />
        </Button>
      </nav>
    </header>
  );
};
