import { Button } from "../../../../components/ui/button";

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center py-8 px-4">
      <div className="relative w-[238px] h-[238px] mb-8 opacity-0 animate-fade-in [--animation-delay:0ms]">
        <div className="absolute top-0 left-0 w-[238px] h-[238px] bg-slate-100 rounded-full opacity-20" />
        <div className="absolute top-[27px] left-[27px] w-[184px] h-[184px] bg-slate-100 rounded-full opacity-20" />
      </div>

      <h2 className="max-w-[443px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-2xl text-center leading-normal tracking-[0] [direction:rtl] mb-2 opacity-0 animate-fade-in [--animation-delay:200ms]">
        لم نجد أي نتيجة خاصة بهذا البحث &quot;قيد عادي&quot;
      </h2>

      <p className="max-w-[268px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-lg text-center leading-normal tracking-[0] [direction:rtl] mb-7 opacity-0 animate-fade-in [--animation-delay:400ms]">
        تأكد من كتابة ما تبحث عنه بشكل صحيح
      </p>

      <Button className="h-auto bg-[#093738] hover:bg-[#093738]/90 text-white rounded-lg shadow-[0px_4px_4px_#0000001a] px-7 py-2.5 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base [direction:rtl] transition-colors opacity-0 animate-fade-in [--animation-delay:600ms]">
        رجوع
      </Button>
    </section>
  );
};
