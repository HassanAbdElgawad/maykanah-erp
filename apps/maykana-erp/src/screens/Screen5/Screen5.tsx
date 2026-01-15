import { ChevronDownIcon, SearchIcon, SparklesIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const topBarData = {
  logo: "/images/logo/Maykna_Horizintal_Version_4_1.svg",
  notificationIcon:
    "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-notification.svg",
  userAvatar: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79826.png",
  homeIcon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2.png",
};

const settingsCards = [
  {
    id: 1,
    title: "العملات والصرف",
    description: "تحديد العملات وأسعار تحويلها.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-money-send.svg",
    bgColor: "bg-[#0012d91a]",
  },
  {
    id: 2,
    title: "إعدادات الحساب",
    description: "ضبط الخصائص العامة للحسابات المالية.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-setting.svg",
    bgColor: "bg-[#ff00001a]",
  },
  {
    id: 3,
    title: "الشجرة المحاسبية",
    description: "هيكل الحسابات حسب التصنيف المحاسبي",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-main-component.svg",
    bgColor: "bg-[#f6c1a426]",
  },
  {
    id: 4,
    title: "الشركة",
    description: "كيان تسجل به البيانات والمعاملات المالي",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-bank.svg",
    bgColor: "bg-[#0937381a]",
  },
  {
    id: 5,
    title: "مركز التكلفة",
    description: "الوحدات المالية لتتبع التكاليف والإيرادات.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-buliding.svg",
    bgColor: "bg-[#7fa1eb1a]",
  },
  {
    id: 6,
    title: "إعدادات الضرائب",
    description: "إعدادات الضريبة على المشتريات ,والمبيعات.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-coin.svg",
    bgColor: "bg-[#19195b26]",
  },
  {
    id: 7,
    title: "الفترات المحاسبية",
    description: "السنة المالية إلى فترات فرعية للمتابعة الدقيقة.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-timer.svg",
    bgColor: "bg-[#2d93a521]",
  },
  {
    id: 8,
    title: "السنة المالية",
    description: "قياس النتائج المالية للشركة.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-security-time.svg",
    bgColor: "bg-[#edc5001a]",
  },
  {
    id: 9,
    title: "الموزانة",
    description: "تقدير المصروفات والإيرادات المستقبلية.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-empty-wallet.svg",
    bgColor: "bg-[#2d93a51a]",
  },
  {
    id: 10,
    title: "الشروط والاحكام",
    description: "القواعد المنظمة للمعاملات،و التزامات الأطراف.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-warning-2.svg",
    bgColor: "bg-[#72176521]",
  },
  {
    id: 11,
    title: "طرق الدفع",
    description: "تحديد وسائل السداد المعتمدة في النظام.",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-security-card.svg",
    bgColor: "bg-[#7718691a]",
  },
];

const sidebarMenuItems = [
  {
    id: 1,
    title: "الرئيسية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-31.png",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 2,
    title: "صندوق الوارد",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-directbox-receive.svg",
    hasDropdown: true,
    badge: "10",
    isActive: false,
  },
  {
    id: 3,
    title: "إدارة الحسابات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-3.svg",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 4,
    title: "إدارة المشتريات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-9.svg",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 5,
    title: "إدارة المبيعات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-16.svg",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 6,
    title: "إدارة المنافسات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 7,
    title: "إدارة الأصول",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2.svg",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 8,
    title: "إدارة الموارد البشرية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-1.svg",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 9,
    title: "إدارة المشاريع",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-17.png",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 10,
    title: "إدارة الإستراتيجية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-2.svg",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 11,
    title: "إدارة المخازن",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-24.png",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 12,
    title: "التقارير",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-5.png",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: 13,
    title: "الإعدادات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-21.png",
    hasDropdown: true,
    isActive: true,
  },
  {
    id: 14,
    title: "الدعم الفني",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-7.svg",
    hasDropdown: true,
    status: "متصل",
    isActive: false,
  },
];

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="relative min-h-screen bg-[#f7f7f9] flex"
      data-model-id="811:11439"
      dir="rtl"
    >
      <main className="flex-1 p-2">
        <header className="mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <nav className="flex items-center gap-3 bg-white rounded-xl border border-solid border-[#e1e1e1] p-2 h-[61px]">
            <img
              className="w-[79px] h-[55px]"
              alt="Group"
              src={topBarData.logo}
            />

            <Button
              variant="ghost"
              size="icon"
              className="relative w-[45px] h-[45px] bg-[#f0f4f7] rounded-lg hover:bg-[#e0e8eb]"
            >
              <img
                className="w-[26px] h-[26px]"
                alt="Vuesax linear"
                src={topBarData.notificationIcon}
              />
              <Badge className="absolute top-[11px] left-[22px] w-3 h-3 p-0 bg-[#ff0000] rounded-md shadow-[0px_4px_4px_#00000040] border border-solid border-white" />
            </Button>

            <img
              className="w-[71px] h-[45px]"
              alt="Group"
              src={topBarData.userAvatar}
            />

            <div className="flex-1 flex gap-3">
              <div className="relative flex-1 max-w-[363px]">
                <Input
                  placeholder="بحث عام من هنا ..."
                  className="h-[45px] bg-slate-100 border-[#cfcfcf] pr-10 [direction:rtl]"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a09e]" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-[38px] h-[22px] bg-white rounded-md border-[0.8px] border-solid border-[#cccccc]">
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#00000099] text-[13px] tracking-[2.21px]">
                    ⌘K
                  </span>
                </div>
              </div>

              <div className="relative flex-1 max-w-[264px]">
                <Input
                  defaultValue="الحسابات"
                  className="h-[45px] bg-slate-100 border-[#cfcfcf] text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-black text-lg [direction:rtl]"
                  readOnly
                />
              </div>
            </div>

            <Button
              variant="ghost"
              className="h-auto flex items-center gap-[3px] hover:bg-transparent"
            >
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-black text-lg [direction:rtl]">
                الإعدادات
              </span>
              <ChevronDownIcon className="w-[11px] h-[11px]" />
            </Button>

            <div className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg" />

            <img
              className="w-[18px] h-[18px]"
              alt="Home"
              src={topBarData.homeIcon}
            />
          </nav>
        </header>

        <section className="grid grid-cols-3 gap-4 max-w-[1388px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {settingsCards.map((card) => (
            <Card
              key={card.id}
              className="border-[#e2e2e2] hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardContent className="p-[21px]">
                <div className="flex items-start gap-3">
                  <div className="flex-1 text-right">
                    <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-black text-lg mb-1.5 [direction:rtl]">
                      {card.title}
                    </h3>
                    <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d2480] text-base [direction:rtl]">
                      {card.description}
                    </p>
                  </div>
                  <div
                    className={`flex items-center justify-center w-[45px] h-[45px] ${card.bgColor} rounded-lg flex-shrink-0`}
                  >
                    <img className="w-6 h-6" alt={card.title} src={card.icon} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <aside className="w-[305px] h-screen sticky top-0 rounded-xl bg-[linear-gradient(222deg,rgba(9,53,54,1)_0%,rgba(13,84,86,1)_100%)] p-2 flex flex-col">
        <div className="flex items-center justify-center h-[61px] border-b border-white/10">
          <img
            className="w-[100px] h-[41px]"
            alt="Maykna horizintal"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-5.png"
          />
          <img
            className="absolute top-[26px] left-[273px] w-5 h-3"
            alt="Group"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-4.png"
          />
        </div>

        <nav className="flex-1 overflow-y-auto py-5 space-y-[5px]">
          {sidebarMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full h-10 justify-between px-2 ${
                item.isActive
                  ? "bg-white text-[#104633] hover:bg-white/90"
                  : "bg-[#ffffff0a] text-white hover:bg-[#ffffff15]"
              } rounded-lg`}
            >
              <ChevronDownIcon
                className={`w-[13px] h-[13px] ${
                  item.isActive ? "text-[#104633]" : "text-white"
                }`}
              />
              <div className="flex items-center gap-2">
                <span
                  className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                    item.isActive ? "font-medium" : "font-normal"
                  } text-base [direction:rtl]`}
                >
                  {item.title}
                </span>
                {item.badge && (
                  <Badge className="bg-[#f0f4f766] text-white text-[13px] h-[25px] px-2">
                    {item.badge}
                  </Badge>
                )}
                {item.status && (
                  <div className="flex items-center gap-1 bg-[#f0f4f757] rounded-md px-2 h-[25px]">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-white text-[13px] [direction:rtl]">
                      {item.status}
                    </span>
                    <div className="w-2 h-2 bg-[#2cc28d] rounded-full border border-solid border-white" />
                  </div>
                )}
                <img
                  className="w-[19px] h-[19px]"
                  alt={item.title}
                  src={item.icon}
                />
              </div>
            </Button>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-5">
          <Button className="w-full h-[51px] rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 transition-opacity">
            <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-base [direction:rtl]">
              المساعد الإفتراضي
            </span>
            <SparklesIcon className="w-5 h-5 text-white" />
          </Button>
        </div>
      </aside>
    </div>
  );
};
