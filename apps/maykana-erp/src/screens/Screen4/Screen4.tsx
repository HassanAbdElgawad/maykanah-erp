import {
  BellIcon,
  BookMarkedIcon,
  ChevronDownIcon,
  ColumnsIcon,
  DownloadIcon,
  FilterIcon,
  SearchIcon,
  SparklesIcon,
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

const breadcrumbItems = [
  { label: "إدارة الحسابات", hasDropdown: true },
  { label: "الخدمات", hasDropdown: true },
  { label: "القيود المحاسبية", hasDropdown: false },
];

const sidebarMenuItems = [
  {
    label: "الرئيسية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-13.png",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#ffffff0a]",
  },
  {
    label: "صندوق الوارد",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-directbox-receive.svg",
    hasDropdown: true,
    badge: "10",
    isActive: false,
    bgClass: "bg-[#ffffff0a]",
  },
  {
    label: "إدارة الحسابات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-17.svg",
    hasDropdown: true,
    isActive: true,
    bgClass: "bg-white",
  },
  {
    label: "إدارة المشتريات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-9.svg",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#ffffff0a]",
  },
  {
    label: "إدارة المبيعات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-16.svg",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#ffffff0a]",
  },
  {
    label: "إدارة المنافسات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة الأصول",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2.svg",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة الموارد البشرية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-1.svg",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة المشاريع",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-2.png",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة الإستراتيجية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-2.svg",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة المخازن",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-9.png",
    hasDropdown: true,
    isActive: false,
    bgClass: "bg-[#cfcfcf0a]",
  },
];

const bottomMenuItems = [
  {
    label: "التقارير",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-2.png",
    hasDropdown: true,
    bgClass: "bg-[#ffffff0a]",
  },
  {
    label: "الإعدادات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-5.png",
    hasDropdown: true,
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    label: "الدعم الفني",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-7.svg",
    hasDropdown: true,
    badge: "متصل",
    badgeType: "status",
    bgClass: "bg-[#cfcfcf0a]",
  },
];

const tableColumns = [
  "تاريخ القيد",
  "نوع القيد",
  "المبلغ المدين",
  "المبلغ الدائن",
  "حالة القيد",
];

export const Screen4 = (): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen bg-[#f7f7f9] overflow-hidden"
      data-model-id="811:12478"
    >
      <aside className="fixed top-0 right-0 w-[305px] h-screen rounded-xl bg-[linear-gradient(222deg,rgba(9,53,54,1)_0%,rgba(13,84,86,1)_100%)] z-50 flex flex-col">
        <div className="flex items-center justify-center h-[61px]">
          <img
            className="w-[100px] h-[41px]"
            alt="Maykna horizontal"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-2.png"
          />
          <img
            className="absolute top-[26px] right-[12px] w-5 h-3"
            alt="Menu toggle"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-1.png"
          />
        </div>

        <Separator className="bg-white/10" />

        <nav className="flex-1 overflow-y-auto px-[13px] py-5 space-y-[5px]">
          {sidebarMenuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full h-10 flex items-center justify-between px-2 rounded-lg transition-colors ${item.bgClass} ${
                item.isActive ? "text-[#104633]" : "text-white"
              }`}
            >
              <img
                className="w-[13px] h-[13px]"
                alt="Arrow down"
                src={
                  item.isActive
                    ? "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-24.png"
                    : "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-28.png"
                }
              />
              <div className="flex items-center gap-2">
                {item.badge && !item.isActive && (
                  <Badge className="bg-[#f0f4f766] text-white text-[13px] h-[25px] px-2 hover:bg-[#f0f4f766]">
                    {item.badge}
                  </Badge>
                )}
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-base [direction:rtl]">
                  {item.label}
                </span>
                <img
                  className="w-[19px] h-[19px]"
                  alt={item.label}
                  src={item.icon}
                />
              </div>
            </button>
          ))}
        </nav>

        <div className="px-[13px] pb-5 space-y-[5px]">
          <Button className="w-full h-[51px] rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 transition-opacity">
            <SparklesIcon className="w-5 h-5 ml-3" />
            <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-base [direction:rtl]">
              المساعد الإفتراضي
            </span>
          </Button>

          <Separator className="bg-white/10" />

          {bottomMenuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full h-10 flex items-center justify-between px-2 rounded-lg transition-colors ${item.bgClass} text-white`}
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-[13px] h-[13px]"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-50.png"
                />
                {item.badgeType === "status" && (
                  <Badge className="bg-[#f0f4f757] text-white text-[13px] h-[25px] px-2 hover:bg-[#f0f4f757] gap-1">
                    <span>{item.badge}</span>
                    <div className="w-2 h-2 bg-[#2cc28d] rounded-full border border-white" />
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base [direction:rtl]">
                  {item.label}
                </span>
                <img
                  className="w-[17px] h-[17px]"
                  alt={item.label}
                  src={item.icon}
                />
              </div>
            </button>
          ))}
        </div>
      </aside>

      <main className="mr-[305px] min-h-screen">
        <header className="sticky top-0 z-40 bg-[#f7f7f9]">
          <div className="ml-[15px] mr-[320px] mt-2 mb-0 bg-white rounded-xl border border-solid border-[#e1e1e1] h-[61px] flex items-center justify-between px-4">
            <img
              className="w-[79px] h-[55px]"
              alt="Logo"
              src="/images/logo/Maykna_Horizintal_Version_4_1.svg"
            />

            <div className="flex items-center gap-3">
              <img
                className="w-[71px] h-[45px]"
                alt="User menu"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79826-4.png"
              />

              <Button
                variant="ghost"
                size="icon"
                className="relative w-[45px] h-[45px] bg-slate-50 rounded-lg hover:bg-slate-100"
              >
                <BellIcon className="w-[26px] h-[26px]" />
                <div className="absolute top-[11px] left-[22px] w-3 h-3 bg-[#ff0000] rounded-md shadow-[0px_4px_4px_#00000040] border border-solid border-white" />
              </Button>

              <div className="relative w-[367px] h-[45px]">
                <Input
                  className="w-full h-full bg-slate-50 border-[#cfcfcf] pr-10 pl-14 [font-family:'Graphik_Arabic-Regular',Helvetica] text-[#99a09e] [direction:rtl]"
                  placeholder="بحث عام من هنا ..."
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a09e]" />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-[38px] h-[22px] bg-white rounded-md border-[0.8px] border-solid border-[#cccccc] flex items-center justify-center">
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#00000099] text-[13px] tracking-[2.21px]">
                    ⌘K
                  </span>
                </div>
              </div>
            </div>

            <nav className="flex items-center gap-0.5 [direction:rtl]">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center gap-[3px]">
                  <span
                    className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-lg leading-[normal] tracking-[0] ${
                      index === breadcrumbItems.length - 1
                        ? "font-normal text-black"
                        : "font-light text-[#000000cc]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <img
                      className="w-[11px] h-[11px]"
                      alt="Arrow down"
                      src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-13.png"
                    />
                  )}
                </div>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg hover:bg-[#e5eaed]"
            >
              <BookMarkedIcon className="w-[19px] h-[19px]" />
            </Button>
          </div>

          <div className="ml-[15px] mr-[320px] mt-[7px] bg-white rounded-xl border border-solid border-[#e2e2e2] h-[73px] flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Button className="h-[43px] px-4 bg-slate-50 text-[#092e32] hover:bg-slate-100 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                <ColumnsIcon className="w-3.5 h-3.5 mr-2" />
                إظهار/إخفاء أعمدة
              </Button>

              <div className="flex items-center gap-2">
                <Button className="h-[43px] px-2.5 bg-slate-50 text-[#092e32] hover:bg-slate-100 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                  <DownloadIcon className="w-4 h-4 mr-1" />
                  تصدير
                </Button>

                <Button className="h-[43px] px-2.5 bg-slate-50 text-[#092e32] hover:bg-slate-100 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                  <FilterIcon className="w-[18px] h-[18px] mr-1.5" />
                  فلتر
                </Button>
              </div>

              <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-1">
                  <ChevronDownIcon className="w-[9px] h-[9px]" />
                  <ChevronDownIcon className="w-[9px] h-[9px] rotate-180" />
                </div>
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                  تحميل
                </span>
                <DownloadIcon className="w-4 h-4" />
              </div>
            </div>

            <Button className="h-[43px] px-6 bg-slate-50 text-[#092e32] hover:bg-slate-100 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
              <FilterIcon className="w-[18px] h-[18px] mr-[15px]" />
              فلتر
              <img
                className="w-[9px] h-[17.31px] ml-2.5"
                alt="FilterIcon icon"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79820.png"
              />
            </Button>

            <div className="relative w-[533px] h-[45px]">
              <Input
                className="w-full h-full bg-white border-[#cfcfcf] pr-10 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#99a09e] [direction:rtl]"
                placeholder="ابحث من هنا (تاريخ القيد، المبلغ الدائن، المبلغ المدين، ...)"
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a09e]" />
            </div>

            <Button className="h-[43px] px-6 bg-[#093738] text-white hover:bg-[#0a4445] shadow-[0px_4px_4px_#0000001a] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
              قيد جديد
            </Button>
          </div>
        </header>

        <div className="ml-[15px] mr-[320px] mt-[7px]">
          <Card className="border-[#e2e2e2] rounded-xl overflow-hidden">
            <div className="bg-slate-50 rounded-t-xl border-b border-slate-100 h-[54px] flex items-center justify-around px-7 [direction:rtl]">
              {tableColumns.map((column, index) => (
                <div key={index} className="flex items-center">
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    {column}
                  </span>
                  {index < tableColumns.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="h-[53px] mx-auto"
                    />
                  )}
                </div>
              ))}
            </div>

            <CardContent className="flex flex-col items-center justify-center py-20">
              <div className="relative w-[238px] h-[238px] mb-[31px]">
                <div className="absolute top-0 left-0 w-[238px] h-[238px] bg-slate-100 rounded-full opacity-20" />
                <div className="absolute top-[27px] left-[27px] w-[184px] h-[184px] bg-slate-100 rounded-full opacity-20" />
                <img
                  className="absolute top-[41px] left-[35px] w-[170px] h-[155px] object-cover"
                  alt="Empty state"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/image-10.png"
                />
              </div>

              <h2 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-2xl text-center mb-[5px] [direction:rtl]">
                لا توجد أي قيود محاسبية حاليا
              </h2>

              <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-lg text-center mb-[26px] [direction:rtl]">
                يمكنك إنشاء قيد جديد بالضغط على الزر أسفله
              </p>

              <Button className="h-[43px] px-6 bg-[#093738] text-white hover:bg-[#0a4445] shadow-[0px_4px_4px_#0000001a] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                إنشاء قيد محاسبي جديد
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
