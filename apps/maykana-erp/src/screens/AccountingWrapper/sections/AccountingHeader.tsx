import { FilterIcon, SearchIcon } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

export const AccountingHeader = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between gap-4 bg-white rounded-xl border border-solid border-[#e2e2e2] p-4 h-[73px]">
      <Button className="bg-[#093738] hover:bg-[#093738]/90 text-white rounded-lg shadow-[0px_4px_4px_#0000001a] h-auto px-6 py-2.5">
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base">
          قيد جديد
        </span>
      </Button>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="bg-slate-50 hover:bg-slate-100 rounded-lg h-auto px-2.5 py-3"
        >
          <FilterIcon className="w-[18px] h-[18px]" />
          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base">
            فلتر
          </span>
        </Button>

        <Button
          variant="ghost"
          className="bg-slate-50 hover:bg-slate-100 rounded-lg h-auto px-2.5 py-[13px]"
        >
          <img
            className="w-4 h-4"
            alt="Vuesax linear frame"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-frame.svg"
          />
          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base">
            تصدير
          </span>
        </Button>

        <div className="flex items-center gap-2">
          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base">
            تحميل
          </span>
          <div className="flex flex-col gap-0.5">
            <img
              className="w-[9px] h-[9px]"
              alt="Arrow down"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-109.png"
            />
            <img
              className="w-[9px] h-[9px]"
              alt="Arrow down"
              src="https://c.animaapp.com/mkd2vucjeF4nNd/img/arrow-down-110.png"
            />
          </div>
          <img
            className="w-4 h-4"
            alt="Vuesax linear frame"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-frame.svg"
          />
        </div>
      </div>

      <Button
        variant="ghost"
        className="bg-slate-50 hover:bg-slate-100 rounded-lg h-auto px-[13px] py-[13px]"
      >
        <img
          className="w-3.5 h-3.5"
          alt="Vuesax linear row"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-row-horizontal.svg"
        />
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#092e32] text-base [direction:rtl]">
          إظهار/إخفاء أعمدة
        </span>
      </Button>

      <div className="relative flex-1 max-w-[533px]">
        <Input
          className="w-full h-[45px] bg-white rounded-lg border border-solid border-[#092e32] pr-10 [direction:rtl]"
          placeholder="قيد عادي"
        />
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-px h-[21px] bg-gray-300" />
      </div>
    </header>
  );
};
