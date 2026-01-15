import {
  BellIcon,
  BookMarkedIcon,
  ColumnsIcon,
  DownloadIcon,
  FilterIcon,
  SearchIcon,
  UploadIcon,
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const tableData = [
  {
    id: 1,
    date: "2023-11-01",
    type: { label: "قيد يومي", color: "bg-[#2ac8a30f] text-[#2ac8a3]" },
    debit: "1,500.00",
    credit: "0.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-20960-1.png",
  },
  {
    id: 2,
    date: "2023-11-05",
    type: { label: "قيد إغلاق فترة", color: "bg-[#ff00000f] text-[#ff0000]" },
    debit: "500.00",
    credit: "0.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79871-1.png",
  },
  {
    id: 3,
    date: "2023-11-10",
    type: { label: "قيد مصروف", color: "bg-[#8a38f50f] text-[#8a38f5]" },
    debit: "0.00",
    credit: "2,000.00",
    status: { label: "مرفوض", color: "bg-[#ff00000f] text-[#ff0000]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79872-1.png",
  },
  {
    id: 4,
    date: "2023-11-15",
    type: { label: "قيد ايراد", color: "bg-[#00b2ff0f] text-[#00b3ff]" },
    debit: "2,000.00",
    credit: "0.00",
    status: { label: "قيد المراجعة", color: "bg-[#edc5000f] text-[#ecc500]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79873-1.png",
  },
  {
    id: 5,
    date: "2023-11-20",
    type: { label: "قيد يومي", color: "bg-[#2ac8a30f] text-[#2ac8a3]" },
    debit: "3,000.00",
    credit: "0.00",
    status: { label: "قيد المراجعة", color: "bg-[#edc5000f] text-[#ecc500]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79874-1.png",
  },
  {
    id: 6,
    date: "2023-11-30",
    type: { label: "قيد مصروف", color: "bg-[#8a38f50f] text-[#8a38f5]" },
    debit: "0.00",
    credit: "1,000.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79875-1.png",
  },
  {
    id: 7,
    date: "2023-11-25",
    type: { label: "قيد ايراد", color: "bg-[#00b2ff0f] text-[#00b3ff]" },
    debit: "250.00",
    credit: "0.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79876-1.png",
  },
  {
    id: 8,
    date: "2023-12-01",
    type: { label: "قيد مصروف", color: "bg-[#8a38f50f] text-[#8a38f5]" },
    debit: "1,200.00",
    credit: "0.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79877-1.png",
  },
];

const sidebarMenuItems = [
  {
    label: "الرئيسية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-33.png",
    active: false,
    badge: null,
  },
  {
    label: "صندوق الوارد",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-directbox-receive.svg",
    active: false,
    badge: "10",
  },
  {
    label: "إدارة الحسابات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-17.svg",
    active: true,
    badge: null,
  },
  {
    label: "إدارة المشتريات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-9.svg",
    active: false,
    badge: null,
  },
  {
    label: "إدارة المبيعات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-16.svg",
    active: false,
    badge: null,
  },
  {
    label: "إدارة المنافسات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg",
    active: false,
    badge: null,
  },
  {
    label: "إدارة الأصول",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2.svg",
    active: false,
    badge: null,
  },
  {
    label: "إدارة الموارد البشرية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-1.svg",
    active: false,
    badge: null,
  },
  {
    label: "إدارة المشاريع",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-18.png",
    active: false,
    badge: null,
  },
  {
    label: "إدارة الإستراتيجية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-2.svg",
    active: false,
    badge: null,
  },
  {
    label: "إدارة المخازن",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-26.png",
    active: false,
    badge: null,
  },
];

const bottomMenuItems = [
  {
    label: "التقارير",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-6.png",
  },
  {
    label: "الإعدادات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-23.png",
  },
  {
    label: "الدعم الفني",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-7.svg",
    badge: "متصل",
  },
];

export const Screen8 = (): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen bg-[#f7f7f9]"
      data-model-id="811:13139"
    >
      <header className="fixed top-2 left-[15px] right-[330px] h-[61px] bg-white rounded-xl border border-solid border-[#e1e1e1] z-20 translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="flex items-center justify-between h-full px-4">
          <img
            className="w-[79px] h-[55px]"
            alt="Group"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79824-8.png"
          />

          <div className="flex items-center gap-3">
            <div className="relative w-[367px] h-[45px]">
              <Input
                className="w-full h-full bg-slate-50 border-[#cfcfcf] pr-10 [direction:rtl]"
                placeholder="بحث عام من هنا ..."
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a09e]" />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-[38px] h-[22px] bg-white rounded-md border-[0.8px] border-solid border-[#cccccc]">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#00000099] text-[13px] tracking-[2.21px]">
                  ⌘K
                </span>
              </div>
            </div>

            <img
              className="w-[71px] h-[45px]"
              alt="Group"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79826-8.png"
            />

            <div className="relative w-[45px] h-[45px] bg-slate-50 rounded-lg">
              <BellIcon className="absolute top-2.5 left-[9px] w-[26px] h-[26px]" />
              <div className="absolute top-[11px] left-[22px] w-3 h-3 bg-[#ff0000] rounded-md shadow-[0px_4px_4px_#00000040] border border-solid border-white" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-[3px]">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-black text-lg [direction:rtl]">
                القيود المحاسبية
              </span>
              <img
                className="w-[11px] h-[11px]"
                alt="Arrow down"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-22.png"
              />
            </div>

            <div className="flex items-center gap-[3px]">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-light text-[#000000cc] text-lg [direction:rtl]">
                الخدمات
              </span>
              <img
                className="w-[11px] h-[11px]"
                alt="Arrow down"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-20.png"
              />
            </div>

            <div className="flex items-center gap-[3px]">
              <span className="[font-family:'ABeeZee',Helvetica] font-normal text-[#000000cc] text-lg whitespace-nowrap [direction:rtl]">
                إدارة الحسابات
              </span>
              <img
                className="w-[11px] h-[11px]"
                alt="Arrow down"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-18.png"
              />
            </div>

            <div className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg flex items-center justify-center">
              <BookMarkedIcon className="w-[19px] h-[19px]" />
            </div>
          </div>
        </div>
      </header>

      <div className="fixed top-[75px] left-[15px] right-[330px] h-[73px] bg-white rounded-xl border border-solid border-[#e2e2e2] z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex items-center justify-between h-full px-4">
          <Button className="h-[43px] bg-[#093738] hover:bg-[#093738]/90 rounded-lg shadow-[0px_4px_4px_#0000001a]">
            <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-white text-base [direction:rtl]">
              قيد جديد
            </span>
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-[43px] bg-slate-50 border-[#104633] rounded-lg"
            >
              <ColumnsIcon className="w-3.5 h-3.5 ml-2" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                إظهار/إخفاء أعمدة
              </span>
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="h-[43px] bg-slate-50 rounded-lg"
              >
                <DownloadIcon className="w-4 h-4 ml-1" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                  تصدير
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-[43px] bg-slate-50 rounded-lg"
              >
                <FilterIcon className="w-[18px] h-[18px] ml-1.5" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                  فلتر
                </span>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
                تحميل
              </span>
              <div className="flex flex-col gap-0.5">
                <img
                  className="w-[9px] h-[9px]"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-164.png"
                />
                <img
                  className="w-[9px] h-[9px]"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-165.png"
                />
              </div>
              <UploadIcon className="w-4 h-4" />
            </div>
          </div>

          <div className="relative w-[533px] h-[45px]">
            <Input
              className="w-full h-full bg-white border-[#cfcfcf] pr-10 [direction:rtl]"
              placeholder="ابحث من هنا (تاريخ القيد، المبلغ الدائن، المبلغ المدين، ...)"
            />
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a09e]" />
          </div>
        </div>
      </div>

      <main className="pt-[155px] px-[15px] pb-4">
        <div className="bg-white rounded-xl border border-solid border-[#e2e2e2] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="bg-[#f1f5f980] rounded-[12px_12px_0px_0px] border border-solid border-slate-100 h-[54px] flex items-center px-7">
            <div className="flex items-center justify-between w-full">
              <div className="w-[35px]" />

              <div className="flex items-center gap-2">
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base [direction:rtl]">
                  حالة القيد
                </span>
                <div className="flex flex-col gap-0.5">
                  <img
                    className="w-[9px] h-[9px]"
                    alt="Arrow"
                    src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-157.png"
                  />
                  <img
                    className="w-[9px] h-[9px]"
                    alt="Arrow"
                    src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-158.png"
                  />
                </div>
              </div>

              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base [direction:rtl]">
                المبلغ الدائن
              </span>

              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base [direction:rtl]">
                المبلغ المدين
              </span>

              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base [direction:rtl]">
                نوع القيد
              </span>

              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base [direction:rtl]">
                تاريخ القيد
              </span>
            </div>
          </div>

          <div className="divide-y divide-[#e2e2e2]">
            {tableData.map((row, _index) => (
              <div
                key={row.id}
                className="flex items-center justify-between px-7 py-4 hover:bg-slate-50 transition-colors"
              >
                <img className="w-[35px] h-[35px]" alt="Group" src={row.icon} />

                <Badge
                  className={`${row.status.color} rounded-lg px-1.5 py-1.5 h-auto`}
                >
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-sm [direction:rtl]">
                    {row.status.label}
                  </span>
                </Badge>

                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right">
                  {row.credit}
                </span>

                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right">
                  {row.debit}
                </span>

                <Badge
                  className={`${row.type.color} rounded-lg px-1.5 py-1.5 h-auto`}
                >
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-sm [direction:rtl]">
                    {row.type.label}
                  </span>
                </Badge>

                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right">
                  {row.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <aside className="fixed top-2 right-[15px] w-[305px] h-[calc(100vh-16px)] rounded-xl bg-[linear-gradient(222deg,rgba(9,53,54,1)_0%,rgba(13,84,86,1)_100%)] overflow-y-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="p-[13px]">
          <div className="flex items-center justify-center mb-4">
            <img
              className="w-[100px] h-[41px]"
              alt="Maykna horizintal"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-6.png"
            />
            <img
              className="w-5 h-3 ml-auto"
              alt="Group"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-5.png"
            />
          </div>

          <div className="border-t border-white/10 mb-4" />

          <nav className="space-y-2">
            {sidebarMenuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full h-10 flex items-center justify-between px-4 rounded-lg transition-colors ${
                  item.active
                    ? "bg-white"
                    : "bg-[#ffffff0a] hover:bg-[#ffffff15]"
                }`}
              >
                <img
                  className="w-[13px] h-[13px]"
                  alt="Arrow"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-75.png"
                />

                <div className="flex items-center gap-2">
                  <span
                    className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base [direction:rtl] ${
                      item.active
                        ? "font-semibold text-[#104633]"
                        : "font-normal text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  <img
                    className="w-[19px] h-[19px]"
                    alt="Icon"
                    src={item.icon}
                  />
                </div>

                {item.badge && (
                  <div className="flex items-center justify-center min-w-[33px] h-[25px] px-2 bg-[#f0f4f766] rounded-md">
                    <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-[13px]">
                      {item.badge}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </nav>

          <div className="my-4 border-t-2 border-white/10" />

          <Button className="w-full h-[51px] rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 mb-4">
            <img
              className="w-5 h-5 ml-3"
              alt="Element magic icon"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/1608770-magic-icon-1.svg"
            />
            <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-base [direction:rtl]">
              المساعد الإفتراضي
            </span>
          </Button>

          <div className="border-t-2 border-white/10 mb-4" />

          <nav className="space-y-2">
            {bottomMenuItems.map((item, index) => (
              <button
                key={index}
                className="w-full h-10 flex items-center justify-between px-4 rounded-lg bg-[#cfcfcf0a] hover:bg-[#ffffff15] transition-colors"
              >
                <img
                  className="w-[13px] h-[13px]"
                  alt="Arrow"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-119.png"
                />

                <div className="flex items-center gap-2">
                  <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-white text-base [direction:rtl]">
                    {item.label}
                  </span>
                  <img
                    className="w-[17px] h-[17px]"
                    alt="Icon"
                    src={item.icon}
                  />
                </div>

                {item.badge && (
                  <div className="flex items-center gap-1 px-2 h-[25px] bg-[#f0f4f757] rounded-md">
                    <div className="w-2 h-2 bg-[#2cc28d] rounded border border-solid border-white" />
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-white text-[13px] [direction:rtl]">
                      {item.badge}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
};
