import { ChevronDownIcon, SearchIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const reportCards = [
  {
    title: "تقرير قائمة الدخل",
    description: "الإيرادات والمصروفات وصافي الربح أو الخسارة.",
    iconBg: "bg-[#00b3ff26]",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt-2.svg",
  },
  {
    title: "ميزان المراجعة",
    description: "أرصدة الحسابات المدينة والدائنة",
    iconBg: "bg-[#0c366a26]",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt.svg",
  },
  {
    title: "تقرير المركز المالي",
    description: "موقف الشركة من الأصول والالتزامات.",
    iconBg: "bg-[#7f3d1826]",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-task-square.svg",
  },
  {
    title: "تقرير الأستاذ العام",
    description: "تفاصيل الحركات المالية لكل حساب.",
    iconBg: "bg-[#2cc28d26]",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-document.svg",
  },
  {
    title: "تقرير ميزان المراجعة للجهة",
    description: "ميزان مراجعة العملاء والموردين والموظفين",
    iconBg: "bg-[#0154571a]",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-document.svg",
  },
];

const sidebarMenuItems = [
  {
    title: "الرئيسية",
    iconSrc: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-16.png",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    title: "صندوق الوارد",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-directbox-receive.svg",
    bgClass: "bg-[#ffffff0a]",
    badge: "10",
  },
  {
    title: "إدارة الحسابات",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-3.svg",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    title: "إدارة المشتريات",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-9.svg",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    title: "إدارة المبيعات",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-16.svg",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    title: "إدارة المنافسات",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    title: "إدارة الأصول",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2.svg",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    title: "إدارة الموارد البشرية",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-1.svg",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    title: "إدارة المشاريع",
    iconSrc: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-6.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    title: "إدارة الإستراتيجية",
    iconSrc:
      "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-2.svg",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    title: "إدارة المخازن",
    iconSrc: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-14.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
];

export const AccountingScreen = (): JSX.Element => {
  return (
    <div
      className="relative min-h-screen bg-[#f7f7f9] flex"
      data-model-id="811:11776"
    >
      <main className="flex-1 p-2">
        <header className="bg-white rounded-xl border border-solid border-[#e1e1e1] p-2 mb-4 flex items-center gap-2">
          <img
            className="w-[79px] h-[55px]"
            alt="Group"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79824-1.png"
          />

          <div className="relative w-[45px] h-[45px] bg-[#f0f4f7] rounded-lg flex items-center justify-center">
            <img
              className="w-[26px] h-[26px]"
              alt="Vuesax linear"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-notification.svg"
            />
            <div className="absolute top-[11px] left-[22px] w-3 h-3 bg-[#ff0000] rounded-md shadow-[0px_4px_4px_#00000040] border border-solid border-white" />
          </div>

          <img
            className="w-[71px] h-[45px]"
            alt="Group"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79826-1.png"
          />

          <div className="flex-1 flex items-center gap-4">
            <div className="relative flex-1 max-w-[363px]">
              <Input
                className="w-full h-[45px] bg-slate-100 rounded-lg border border-solid border-[#cfcfcf] pr-10 text-right"
                placeholder="بحث عام من هنا ..."
                dir="rtl"
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a09e]" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[38px] h-[22px] bg-white rounded-md border-[0.8px] border-solid border-[#cccccc] flex items-center justify-center">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#00000099] text-[13px] tracking-[2.21px]">
                  ⌘K
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg flex items-center justify-center">
                <div className="w-[21px] h-[21px] bg-[url(https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up.png)] bg-[100%_100%]" />
              </div>
              <div className="flex items-center gap-1">
                <img
                  className="w-[11px] h-[11px]"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-25.png"
                />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-black text-lg [direction:rtl]">
                  التقارير
                </span>
              </div>
            </div>

            <div className="relative w-[264px] h-[45px] bg-slate-100 rounded-lg border border-solid border-[#cfcfcf] flex items-center justify-center">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-black text-lg [direction:rtl]">
                الحسابات
              </span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1388px]">
          {reportCards.map((card, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl border border-solid border-[#e2e2e2] translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-4 flex items-start gap-3">
                <div
                  className={`${card.iconBg} w-[45px] h-[45px] flex items-center justify-center rounded-lg flex-shrink-0`}
                >
                  <img className="w-6 h-6" alt="Icon" src={card.iconSrc} />
                </div>
                <div className="flex-1 text-right" dir="rtl">
                  <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-black text-lg mb-1">
                    {card.title}
                  </h3>
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d2480] text-base">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <aside className="fixed top-2 right-4 w-[305px] h-[calc(100vh-16px)] rounded-xl bg-[linear-gradient(222deg,rgba(9,53,54,1)_0%,rgba(13,84,86,1)_100%)] flex flex-col z-10">
        <div className="p-4 flex items-center justify-center border-b border-white/10">
          <img
            className="w-[100px] h-[41px]"
            alt="Maykna horizintal"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-4.png"
          />
          <img
            className="absolute top-[26px] right-4 w-5 h-3"
            alt="Group"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-3.png"
          />
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-2">
          {sidebarMenuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full h-10 ${item.bgClass} rounded-lg flex items-center justify-between px-2 text-white hover:bg-white/20 transition-colors`}
            >
              <ChevronDownIcon className="w-[13px] h-[13px]" />
              <div className="flex items-center gap-2">
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base [direction:rtl]">
                  {item.title}
                </span>
                <img
                  className="w-[19px] h-[19px]"
                  alt="Icon"
                  src={item.iconSrc}
                />
              </div>
              {item.badge && (
                <Badge className="bg-[#f0f4f766] text-white text-[13px] h-[25px] px-2">
                  {item.badge}
                </Badge>
              )}
            </button>
          ))}

          <div className="h-px bg-white/10 my-4" />

          <button className="w-full h-10 bg-white rounded-lg flex items-center justify-between px-2 text-[#0d4d50] hover:bg-white/90 transition-colors">
            <ChevronDownIcon className="w-[13px] h-[13px]" />
            <div className="flex items-center gap-2">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-base [direction:rtl]">
                التقارير
              </span>
              <div className="w-[17px] h-[17px] bg-[url(https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-4.png)] bg-[100%_100%]" />
            </div>
          </button>

          <button className="w-full h-10 bg-[#ffffff0a] rounded-lg flex items-center justify-between px-2 text-white hover:bg-white/20 transition-colors">
            <ChevronDownIcon className="w-[13px] h-[13px]" />
            <div className="flex items-center gap-2">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base [direction:rtl]">
                الإعدادات
              </span>
              <div className="w-[18px] h-[18px] bg-[url(https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-11.png)] bg-[100%_100%]" />
            </div>
          </button>

          <button className="w-full h-10 bg-[#cfcfcf0a] rounded-lg flex items-center justify-between px-2 text-white hover:bg-white/20 transition-colors">
            <ChevronDownIcon className="w-[13px] h-[13px]" />
            <div className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-1 bg-[#f0f4f757] rounded-md px-2 h-[25px]">
                <div className="w-2 h-2 bg-[#2cc28d] rounded border border-solid border-white" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-white text-[13px] [direction:rtl]">
                  متصل
                </span>
              </div>
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base [direction:rtl]">
                الدعم الفني
              </span>
              <img
                className="w-[17px] h-[17px]"
                alt="Vuesax linear home"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-7.svg"
              />
            </div>
          </button>
        </nav>

        <div className="p-3 border-t border-white/10">
          <Button className="w-full h-[51px] rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 transition-opacity">
            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5"
                alt="Element magic icon"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/1608770-magic-icon-1.svg"
              />
              <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-base [direction:rtl]">
                المساعد الإفتراضي
              </span>
            </div>
          </Button>
        </div>
      </aside>
    </div>
  );
};
