import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const menuItems = [
  {
    id: "home",
    label: "الرئيسية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-34.png",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-148.png",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "inbox",
    label: "صندوق الوارد",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-directbox-receive.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-152.png",
    bgClass: "bg-[#ffffff0a]",
    badge: "10",
  },
  {
    id: "accounts",
    label: "إدارة الحسابات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-17.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-78.png",
    bgClass: "bg-white",
    textColor: "text-[#104633]",
  },
  {
    id: "purchases",
    label: "إدارة المشتريات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-9.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-86.png",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "sales",
    label: "إدارة المبيعات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-16.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-91.png",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "competitions",
    label: "إدارة المنافسات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-97.png",
    bgClass: "bg-[#ffffff0a]",
    isIconBg: true,
  },
  {
    id: "assets",
    label: "إدارة الأصول",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-103.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    id: "hr",
    label: "إدارة الموارد البشرية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-1.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-108.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    id: "projects",
    label: "إدارة المشاريع",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-19.png",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-117.png",
    bgClass: "bg-[#cfcfcf0a]",
    isIconBg: true,
  },
  {
    id: "strategy",
    label: "إدارة الإستراتيجية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-2.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-127.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    id: "warehouses",
    label: "إدارة المخازن",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-28.png",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-137.png",
    bgClass: "bg-[#cfcfcf0a]",
    isIconBg: true,
  },
];

const bottomMenuItems = [
  {
    id: "reports",
    label: "التقارير",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-7.png",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-122.png",
    bgClass: "bg-[#ffffff0a]",
    isIconBg: true,
  },
  {
    id: "settings",
    label: "الإعدادات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-25.png",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-131.png",
    bgClass: "bg-[#cfcfcf0a]",
    isIconBg: true,
  },
  {
    id: "support",
    label: "الدعم الفني",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-7.svg",
    arrow: "https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-141.png",
    bgClass: "bg-[#cfcfcf0a]",
    statusBadge: true,
  },
];

export const Group6Subsection = (): JSX.Element => {
  return (
    <aside className="w-[305px] h-full rounded-xl bg-[linear-gradient(222deg,rgba(9,53,54,1)_0%,rgba(13,84,86,1)_100%)] flex flex-col">
      <header className="relative h-[61px] flex items-center justify-center border-b border-white/10">
        <img
          className="w-[100px] h-[41px]"
          alt="Maykna horizintal"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-7.png"
        />
        <img
          className="absolute top-[15px] right-[12px] w-5 h-3"
          alt="Menu toggle"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-6.png"
        />
      </header>

      <nav className="flex-1 px-[13px] py-5 space-y-[5px] overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full h-10 ${item.bgClass} rounded-lg flex items-center justify-between px-2 transition-colors hover:bg-white/20 ${
              item.textColor || "text-white"
            }`}
          >
            <img
              className="w-[13px] h-[13px]"
              alt="Arrow down"
              src={item.arrow}
            />
            <div className="flex items-center gap-2 [direction:rtl]">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base tracking-[0] leading-normal whitespace-nowrap">
                {item.label}
              </span>
              {item.isIconBg ? (
                <div
                  className="w-[19px] h-[19px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.icon})` }}
                />
              ) : (
                <img
                  className="w-[19px] h-[19px]"
                  alt={item.label}
                  src={item.icon}
                />
              )}
            </div>
            {item.badge && (
              <Badge className="absolute left-[36px] bg-[#f0f4f766] text-white text-[13px] font-medium h-[25px] px-2 hover:bg-[#f0f4f766]">
                {item.badge}
              </Badge>
            )}
          </button>
        ))}
      </nav>

      <Separator className="bg-white/10 h-0.5" />

      <nav className="px-[13px] py-[17px] space-y-[5px]">
        {bottomMenuItems.map((item) => (
          <button
            key={item.id}
            className={`relative w-full h-10 ${item.bgClass} rounded-lg flex items-center justify-between px-2 transition-colors hover:bg-white/20 text-white`}
          >
            <div className="flex items-center gap-2">
              <img
                className="w-[13px] h-[13px]"
                alt="Arrow down"
                src={item.arrow}
              />
              {item.statusBadge && (
                <div className="flex items-center gap-1 bg-[#f0f4f757] rounded-md px-2 h-[25px]">
                  <div className="w-2 h-2 bg-[#2cc28d] rounded-full border border-white" />
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-normal">
                    متصل
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 [direction:rtl]">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base tracking-[0] leading-normal whitespace-nowrap">
                {item.label}
              </span>
              {item.isIconBg ? (
                <div
                  className="w-[18px] h-[18px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.icon})` }}
                />
              ) : (
                <img
                  className="w-[17px] h-[17px]"
                  alt={item.label}
                  src={item.icon}
                />
              )}
            </div>
          </button>
        ))}
      </nav>

      <div className="px-[13px] pb-[51px]">
        <Button className="w-full h-[51px] rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-3 [direction:rtl]">
            <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-normal whitespace-nowrap">
              المساعد الإفتراضي
            </span>
            <img
              className="w-5 h-5"
              alt="Magic icon"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/1608770-magic-icon-1.svg"
            />
          </div>
        </Button>
      </div>
    </aside>
  );
};
