import { ChevronDownIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const menuItems = [
  {
    id: "home",
    label: "الرئيسية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-36.png",
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
    id: "accounts",
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
    id: "tenders",
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
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-22.png",
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
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-32.png",
    bgClass: "bg-[#cfcfcf0a]",
  },
];

const bottomMenuItems = [
  {
    id: "reports",
    label: "التقارير",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-9.png",
    bgClass: "bg-[#ffffff0a]",
  },
  {
    id: "settings",
    label: "الإعدادات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-30.png",
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

export const Group14Subsection = (): JSX.Element => {
  return (
    <aside className="w-[305px] h-[1099px] rounded-xl bg-[linear-gradient(222deg,rgba(9,53,54,1)_0%,rgba(13,84,86,1)_100%)] relative">
      <header className="flex items-center justify-between px-3 py-2">
        <img
          className="w-5 h-3"
          alt="Menu"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-8.png"
        />
        <img
          className="w-[100px] h-[41px]"
          alt="Maykna horizontal"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-9.png"
        />
      </header>

      <img
        className="w-full h-px object-cover mt-[9px]"
        alt="Line"
        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-5.svg"
      />

      <nav className="px-3 mt-5 space-y-[15px]">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full h-10 flex items-center justify-between px-2 rounded-lg transition-colors ${item.bgClass} ${
              item.isActive ? "text-[#104633]" : "text-white"
            }`}
          >
            <ChevronDownIcon className="w-[13px] h-[13px] flex-shrink-0" />
            <div className="flex items-center gap-2">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-base [direction:rtl]">
                {item.label}
              </span>
              {item.icon.includes("vuesax-linear-receipt-edit") ? (
                <div className="w-[21px] h-[21px] bg-[url(https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg)] bg-[100%_100%]" />
              ) : (
                <img
                  className="w-[19px] h-[19px] flex-shrink-0"
                  alt={item.label}
                  src={item.icon}
                />
              )}
            </div>
            {item.badge && (
              <Badge className="absolute left-7 bg-[#f0f4f766] text-white text-[13px] font-medium [font-family:'Graphik_Arabic-Medium',Helvetica] h-[25px] px-2 rounded-md border-0">
                {item.badge}
              </Badge>
            )}
          </button>
        ))}
      </nav>

      <img
        className="w-full h-0.5 object-cover mt-[109px]"
        alt="Line"
        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-1.svg"
      />

      <nav className="px-3 mt-[23px] space-y-[15px]">
        {bottomMenuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full h-10 flex items-center justify-between px-2 rounded-lg transition-colors ${item.bgClass} text-white relative`}
          >
            <ChevronDownIcon className="w-[13px] h-[13px] flex-shrink-0" />
            <div className="flex items-center gap-2">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base [direction:rtl]">
                {item.label}
              </span>
              <img
                className="w-[17px] h-[17px] flex-shrink-0"
                alt={item.label}
                src={item.icon}
              />
            </div>
            {item.status && (
              <div className="absolute left-7 flex items-center gap-1 bg-[#f0f4f757] rounded-md px-2 h-[25px]">
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-white text-[13px] [direction:rtl]">
                  {item.status}
                </span>
                <div className="w-2 h-2 bg-[#2cc28d] rounded-full border border-solid border-white" />
              </div>
            )}
          </button>
        ))}
      </nav>

      <Button className="absolute bottom-[11px] left-[13px] w-[279px] h-[51px] rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 transition-opacity">
        <div className="flex items-center gap-3">
          <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-base [direction:rtl]">
            المساعد الإفتراضي
          </span>
          <img
            className="w-5 h-5"
            alt="Magic icon"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/1608770-magic-icon-1.svg"
          />
        </div>
      </Button>
    </aside>
  );
};
