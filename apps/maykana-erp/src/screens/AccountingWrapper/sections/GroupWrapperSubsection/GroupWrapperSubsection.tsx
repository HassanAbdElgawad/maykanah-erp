import { ChevronDownIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const menuItems = [
  {
    id: "home",
    label: "الرئيسية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-12.png",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "inbox",
    label: "صندوق الوارد",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-directbox-receive.svg",
    bgClass: "bg-[#ffffff0a]",
    badge: "10",
  },
  {
    id: "accounting",
    label: "إدارة الحسابات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-17.svg",
    bgClass: "bg-white",
    isActive: true,
  },
  {
    id: "purchases",
    label: "إدارة المشتريات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-9.svg",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "sales",
    label: "إدارة المبيعات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-16.svg",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "competitions",
    label: "إدارة المنافسات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "assets",
    label: "إدارة الأصول",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2.svg",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    id: "hr",
    label: "إدارة الموارد البشرية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-1.svg",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    id: "projects",
    label: "إدارة المشاريع",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-1.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    id: "strategy",
    label: "إدارة الإستراتيجية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-2.svg",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    id: "warehouses",
    label: "إدارة المخازن",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-8.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
];

const bottomMenuItems = [
  {
    id: "reports",
    label: "التقارير",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-1.png",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "settings",
    label: "الإعدادات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-4.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
  {
    id: "support",
    label: "الدعم الفني",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-7.svg",
    bgClass: "bg-[#cfcfcf0a]",
    status: "متصل",
  },
];

export const GroupWrapperSubsection = (): JSX.Element => {
  return (
    <aside className="w-[305px] h-full rounded-xl bg-[linear-gradient(222deg,rgba(9,53,54,1)_0%,rgba(13,84,86,1)_100%)] flex flex-col">
      <header className="relative h-[61px] flex items-center justify-center">
        <img
          className="w-[100px] h-[41px]"
          alt="Maykna horizintal"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-1.png"
        />
        <img
          className="absolute top-[15px] right-[12px] w-5 h-3"
          alt="Menu toggle"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2.png"
        />
      </header>

      <Separator className="bg-white/10 h-px" />

      <nav className="flex-1 flex flex-col gap-[5px] px-[13px] pt-5 pb-[13px] overflow-y-auto">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`h-10 w-full justify-between px-2 rounded-lg ${item.bgClass} hover:bg-white/20 transition-colors`}
          >
            <ChevronDownIcon className="w-[13px] h-[13px] text-white flex-shrink-0" />
            <div className="flex items-center gap-2 flex-1 justify-end">
              <span
                className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base leading-normal tracking-[0] [direction:rtl] ${
                  item.isActive
                    ? "font-semibold text-[#104633]"
                    : "font-normal text-white"
                }`}
              >
                {item.label}
              </span>
              {item.icon.includes("vuesax-linear-receipt-edit") ? (
                <div
                  className="w-[21px] h-[21px] flex-shrink-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.icon})`,
                  }}
                />
              ) : (
                <img
                  className="w-[19px] h-[19px] flex-shrink-0"
                  alt={item.label}
                  src={item.icon}
                />
              )}
            </div>
            {item.badge && (
              <Badge className="absolute left-7 bg-[#f0f4f766] text-white text-[13px] font-medium [font-family:'Graphik_Arabic-Medium',Helvetica] h-[25px] w-[33px] flex items-center justify-center rounded-md hover:bg-[#f0f4f766]">
                {item.badge}
              </Badge>
            )}
          </Button>
        ))}

        <div className="flex-1" />

        <Button className="h-[51px] w-full rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-3">
            <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-base leading-normal whitespace-nowrap tracking-[0] [direction:rtl]">
              المساعد الإفتراضي
            </span>
            <img
              className="w-5 h-5"
              alt="Magic icon"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/1608770-magic-icon-1.svg"
            />
          </div>
        </Button>

        <Separator className="bg-white/10 h-0.5 my-[11px]" />

        {bottomMenuItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`h-10 w-full justify-between px-2 rounded-lg ${item.bgClass} hover:bg-white/20 transition-colors relative`}
          >
            <ChevronDownIcon className="w-[13px] h-[13px] text-white flex-shrink-0" />
            <div className="flex items-center gap-2 flex-1 justify-end">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-white text-base leading-normal tracking-[0] [direction:rtl]">
                {item.label}
              </span>
              {item.icon.includes("home-2") ? (
                <div
                  className="w-[17px] h-[17px] flex-shrink-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.icon})`,
                  }}
                />
              ) : (
                <img
                  className="w-[17px] h-[17px] flex-shrink-0"
                  alt={item.label}
                  src={item.icon}
                />
              )}
            </div>
            {item.status && (
              <Badge className="absolute left-7 bg-[#f0f4f757] text-white text-[13px] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] h-[25px] px-2 flex items-center gap-1 rounded-md hover:bg-[#f0f4f757]">
                <span className="[direction:rtl]">{item.status}</span>
                <div className="w-2 h-2 bg-[#2cc28d] rounded-full border border-white" />
              </Badge>
            )}
          </Button>
        ))}
      </nav>
    </aside>
  );
};
