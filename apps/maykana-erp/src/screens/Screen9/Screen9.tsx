import {
  BellIcon,
  CalendarIcon,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const tableData = [
  {
    date: "2023-11-01",
    type: { label: "قيد يومي", color: "bg-[#2ac8a30f] text-[#2ac8a3]" },
    debit: "1,500.00",
    credit: "0.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-20960.png",
  },
  {
    date: "2023-11-05",
    type: { label: "قيد إغلاق فترة", color: "bg-[#ff00000f] text-[#ff0000]" },
    debit: "500.00",
    credit: "0.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79871.png",
  },
  {
    date: "2023-11-10",
    type: { label: "قيد مصروف", color: "bg-[#8a38f50f] text-[#8a38f5]" },
    debit: "0.00",
    credit: "2,000.00",
    status: { label: "مرفوض", color: "bg-[#ff00000f] text-[#ff0000]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79872.png",
  },
  {
    date: "2023-11-15",
    type: { label: "قيد ايراد", color: "bg-[#00b2ff0f] text-[#00b3ff]" },
    debit: "2,000.00",
    credit: "0.00",
    status: { label: "قيد المراجعة", color: "bg-[#edc5000f] text-[#ecc500]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79873.png",
  },
  {
    date: "2023-11-20",
    type: { label: "قيد يومي", color: "bg-[#2ac8a30f] text-[#2ac8a3]" },
    debit: "3,000.00",
    credit: "0.00",
    status: { label: "قيد المراجعة", color: "bg-[#edc5000f] text-[#ecc500]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79874.png",
  },
  {
    date: "2023-11-30",
    type: { label: "قيد مصروف", color: "bg-[#8a38f50f] text-[#8a38f5]" },
    debit: "0.00",
    credit: "1,000.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79875.png",
  },
  {
    date: "2023-11-25",
    type: { label: "قيد ايراد", color: "bg-[#00b2ff0f] text-[#00b3ff]" },
    debit: "250.00",
    credit: "0.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79876.png",
  },
  {
    date: "2023-12-01",
    type: { label: "قيد مصروف", color: "bg-[#8a38f50f] text-[#8a38f5]" },
    debit: "1,200.00",
    credit: "0.00",
    status: { label: "معتمد", color: "bg-[#07b6640f] text-[#07b664]" },
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79877.png",
  },
];

const sidebarMenuItems = [
  {
    label: "الرئيسية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-35.png",
    active: false,
    bgColor: "bg-[#ffffff0a]",
  },
  {
    label: "صندوق الوارد",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-directbox-receive-6.svg",
    active: false,
    bgColor: "bg-[#ffffff0a]",
    badge: "10",
  },
  {
    label: "إدارة الحسابات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-17.svg",
    active: true,
    bgColor: "bg-white",
  },
  {
    label: "إدارة المشتريات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-9.svg",
    active: false,
    bgColor: "bg-[#ffffff0a]",
  },
  {
    label: "إدارة المبيعات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-16.svg",
    active: false,
    bgColor: "bg-[#ffffff0a]",
  },
  {
    label: "إدارة المنافسات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg",
    active: false,
    bgColor: "bg-[#ffffff0a]",
  },
  {
    label: "إدارة الأصول",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2.svg",
    active: false,
    bgColor: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة الموارد البشرية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-1.svg",
    active: false,
    bgColor: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة المشاريع",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-20.png",
    active: false,
    bgColor: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة الإستراتيجية",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-2.svg",
    active: false,
    bgColor: "bg-[#cfcfcf0a]",
  },
  {
    label: "إدارة المخازن",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-29.png",
    active: false,
    bgColor: "bg-[#cfcfcf0a]",
  },
  {
    label: "التقارير",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-8.png",
    active: false,
    bgColor: "bg-[#ffffff0a]",
  },
  {
    label: "الإعدادات",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-27.png",
    active: false,
    bgColor: "bg-[#cfcfcf0a]",
  },
  {
    label: "الدعم الفني",
    icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-7.svg",
    active: false,
    bgColor: "bg-[#cfcfcf0a]",
    status: "متصل",
  },
];

export const Screen9 = (): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen bg-[#f7f7f9] overflow-hidden"
      data-model-id="811:12050"
    >
      <header className="fixed top-2 left-[15px] right-[330px] h-[61px] bg-white rounded-xl border border-solid border-[#e1e1e1] z-20 translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center gap-4">
            <img
              className="w-[79px] h-[55px]"
              alt="Group"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79824-7.png"
            />

            <Button
              variant="ghost"
              size="icon"
              className="w-[45px] h-[45px] bg-slate-50 rounded-lg relative"
            >
              <BellIcon className="w-[26px] h-[26px]" />
              <div className="absolute top-[11px] left-[22px] w-3 h-3 bg-[#ff0000] rounded-md shadow-[0px_4px_4px_#00000040] border border-solid border-white" />
            </Button>

            <img
              className="w-[71px] h-[45px]"
              alt="Group"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-79826-7.png"
            />

            <div className="relative w-[367px] h-[45px]">
              <Input
                className="w-full h-full bg-slate-50 rounded-lg border border-solid border-[#cfcfcf] pr-10 text-right"
                placeholder="بحث عام من هنا ..."
                dir="rtl"
              />
              <SearchIcon className="absolute top-[15px] right-4 w-4 h-4 text-[#99a09e]" />
              <div className="absolute top-[11px] left-2 w-[38px] h-[22px] bg-white rounded-md border-[0.8px] border-solid border-[#cccccc] flex items-center justify-center">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#00000099] text-[13px] tracking-[2.21px]">
                  ⌘K
                </span>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-0.5" dir="rtl">
            <div className="flex items-center gap-[3px] cursor-pointer">
              <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-black text-lg">
                القيود المحاسبية
              </div>
              <img
                className="w-[11px] h-[11px]"
                alt="Arrow down"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-21.png"
              />
            </div>
            <div className="flex items-center gap-[3px] cursor-pointer">
              <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-light text-[#000000cc] text-lg">
                الخدمات
              </div>
              <img
                className="w-[11px] h-[11px]"
                alt="Arrow down"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-19.png"
              />
            </div>
            <div className="flex items-center gap-[3px] cursor-pointer">
              <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-light text-[#000000cc] text-lg">
                إدارة الحسابات
              </div>
              <img
                className="w-[11px] h-[11px]"
                alt="Arrow down"
                src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-17.png"
              />
            </div>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg"
          >
            <img
              className="w-[19px] h-[19px]"
              alt="Vuesax linear book"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-book-saved.svg"
            />
          </Button>
        </div>
      </header>

      <div className="fixed top-[75px] left-[15px] right-[330px] h-[73px] bg-white rounded-xl border border-solid border-[#e2e2e2] z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center gap-2">
            <Button
              className="h-[43px] bg-[#093738] hover:bg-[#093738]/90 text-white rounded-lg shadow-[0px_4px_4px_#0000001a]"
              dir="rtl"
            >
              قيد جديد
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="h-[43px] bg-slate-50 hover:bg-slate-100 rounded-lg border border-solid border-[#093738]"
              >
                <FilterIcon className="w-[18px] h-[18px] ml-1.5" />
                <span
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                >
                  فلتر
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-[43px] bg-slate-50 hover:bg-slate-100 rounded-lg"
              >
                <DownloadIcon className="w-4 h-4 ml-1.5" />
                <span
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir="rtl"
                >
                  تصدير
                </span>
              </Button>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <DownloadIcon className="w-4 h-4" />
              <span
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              >
                تحميل
              </span>
              <div className="flex flex-col gap-1">
                <img
                  className="w-[9px] h-[9px]"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-160.png"
                />
                <img
                  className="w-[9px] h-[9px]"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-161.png"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <Input
              className="w-[533px] h-[45px] bg-white rounded-lg border border-solid border-[#cfcfcf] pr-10 text-right"
              placeholder="ابحث من هنا (تاريخ القيد، المبلغ الدائن، المبلغ المدين، ...)"
              dir="rtl"
            />
            <SearchIcon className="absolute top-[14px] right-4 w-4 h-4 text-[#99a09e]" />
          </div>

          <Button
            variant="outline"
            className="h-[43px] bg-slate-50 hover:bg-slate-100 rounded-lg"
          >
            <ColumnsIcon className="w-3.5 h-3.5 ml-2" />
            <span
              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            >
              إظهار/إخفاء أعمدة
            </span>
          </Button>
        </div>
      </div>

      <Card className="fixed top-[141px] left-[15px] w-[229px] bg-white rounded-lg border border-solid border-[#d9d9d9] shadow-[0px_22px_44px_#00000014] z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            >
              تاريخ انشاء القيد
            </label>
            <div className="relative">
              <Input
                defaultValue="10/11/2024"
                className="h-[34px] bg-white rounded-lg border border-solid border-[#cfcfcf] text-right"
                dir="rtl"
              />
              <CalendarIcon className="absolute top-2 left-2 w-5 h-5" />
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            >
              نوع القيد
            </label>
            <Select>
              <SelectTrigger
                className="h-[34px] bg-white rounded-lg border border-solid border-[#cfcfcf] text-right"
                dir="rtl"
              >
                <SelectValue placeholder="اختر نوع من هنا" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">قيد يومي</SelectItem>
                <SelectItem value="closing">قيد إغلاق فترة</SelectItem>
                <SelectItem value="expense">قيد مصروف</SelectItem>
                <SelectItem value="revenue">قيد ايراد</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label
              className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            >
              المبلغ المدين
            </label>
            <Input
              placeholder="اكتب المبلغ المدين هنا ..."
              className="h-[34px] bg-white rounded-lg border border-solid border-[#cfcfcf] text-right placeholder:text-[#00000047]"
              dir="rtl"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            >
              المبلغ الدائن
            </label>
            <Input
              placeholder="اكتب المبلغ الدائن هنا ..."
              className="h-[34px] bg-white rounded-lg border border-solid border-[#cfcfcf] text-right placeholder:text-[#00000047]"
              dir="rtl"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            >
              حالة القيد
            </label>
            <Select>
              <SelectTrigger
                className="h-[34px] bg-white rounded-lg border border-solid border-[#cfcfcf] text-right"
                dir="rtl"
              >
                <SelectValue placeholder="اختر حالة من هنا" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="approved">معتمد</SelectItem>
                <SelectItem value="rejected">مرفوض</SelectItem>
                <SelectItem value="review">قيد المراجعة</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4 border-t border-[#e5e5e5]">
            <div className="flex gap-2">
              <Button
                className="flex-1 h-[43px] bg-[#093738] hover:bg-[#093738]/90 text-white rounded-lg shadow-[0px_4px_4px_#0000001a]"
                dir="rtl"
              >
                تطبيق
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-[43px] bg-[#e6ebeb] hover:bg-[#e6ebeb]/90 text-[#092e32] rounded-lg border-0"
                dir="rtl"
              >
                مسح
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <main className="mt-[155px] ml-[15px] mr-[330px] mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <Card className="bg-white rounded-xl border border-solid border-[#e2e2e2]">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div
                  className="grid grid-cols-[80px_200px_150px_150px_150px] bg-[#f1f5f980] rounded-t-xl border-b border-solid border-slate-100 h-[54px]"
                  dir="rtl"
                >
                  <div className="flex items-center justify-center border-l border-solid border-slate-100">
                    <div className="flex flex-col gap-1">
                      <img
                        className="w-[9px] h-[9px]"
                        alt="Arrow down"
                        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-67.png"
                      />
                      <img
                        className="w-[9px] h-[9px]"
                        alt="Arrow down"
                        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-68.png"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center border-l border-solid border-slate-100">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                      تاريخ القيد
                    </span>
                  </div>
                  <div className="flex items-center justify-center border-l border-solid border-slate-100">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                      نوع القيد
                    </span>
                  </div>
                  <div className="flex items-center justify-center border-l border-solid border-slate-100">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                      المبلغ المدين
                    </span>
                  </div>
                  <div className="flex items-center justify-center border-l border-solid border-slate-100">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                      المبلغ الدائن
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                      حالة القيد
                    </span>
                  </div>
                </div>

                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[80px_200px_150px_150px_150px] border-b border-solid border-slate-100 h-[54px] hover:bg-slate-50 transition-colors"
                    dir="rtl"
                  >
                    <div className="flex items-center justify-center border-l border-solid border-slate-100">
                      <img
                        className="w-[35px] h-[35px]"
                        alt="Icon"
                        src={row.icon}
                      />
                    </div>
                    <div className="flex items-center justify-center border-l border-solid border-slate-100">
                      <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                        {row.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-center border-l border-solid border-slate-100">
                      <Badge
                        className={`${row.type.color} rounded-lg px-1.5 py-1.5 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal`}
                      >
                        {row.type.label}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center border-l border-solid border-slate-100">
                      <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                        {row.debit}
                      </span>
                    </div>
                    <div className="flex items-center justify-center border-l border-solid border-slate-100">
                      <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                        {row.credit}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Badge
                        className={`${row.status.color} rounded-lg px-1.5 py-1.5 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal`}
                      >
                        {row.status.label}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <aside className="fixed top-2 right-2 w-[305px] h-[calc(100vh-16px)] rounded-xl bg-[linear-gradient(222deg,rgba(9,53,54,1)_0%,rgba(13,84,86,1)_100%)] overflow-y-auto translate-x-[1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-center py-2">
            <img
              className="w-[100px] h-[41px]"
              alt="Maykna horizintal"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/maykna-horizintal-version-4-2-8.png"
            />
            <img
              className="absolute top-[26px] right-[273px] w-5 h-3"
              alt="Group"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/group-2-7.png"
            />
          </div>

          <div className="border-t border-white/10" />

          <nav className="space-y-2">
            {sidebarMenuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between h-10 px-3 rounded-lg cursor-pointer transition-colors hover:bg-white/10 ${item.bgColor} ${item.active ? "text-[#104633]" : "text-white"}`}
                dir="rtl"
              >
                <ChevronDownIcon className="w-[13px] h-[13px]" />
                <div className="flex items-center gap-2">
                  <span
                    className={`[font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${item.active ? "font-semibold" : "font-normal"} text-base`}
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
                  <div className="w-[33px] h-[25px] bg-[#f0f4f766] rounded-md flex items-center justify-center">
                    <span className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-[13px]">
                      {item.badge}
                    </span>
                  </div>
                )}
                {item.status && (
                  <div className="flex items-center gap-1 bg-[#f0f4f757] rounded-md px-2 py-0.5">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-white text-[13px]">
                      {item.status}
                    </span>
                    <div className="w-2 h-2 bg-[#2cc28d] rounded-full border border-solid border-white" />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="border-t border-white/10" />

          <Button className="w-full h-[51px] rounded-xl shadow-[0px_22px_44px_#40d2fe1a] bg-[linear-gradient(138deg,rgba(65,209,254,1)_0%,rgba(127,161,235,1)_50%,rgba(253,122,166,1)_100%)] hover:opacity-90 transition-opacity">
            <div className="flex items-center gap-3">
              <SparklesIcon className="w-5 h-5 text-white" />
              <span
                className="[font-family:'Graphik_Arabic-Medium',Helvetica] font-medium text-white text-base"
                dir="rtl"
              >
                المساعد الإفتراضي
              </span>
            </div>
          </Button>
        </div>
      </aside>
    </div>
  );
};
