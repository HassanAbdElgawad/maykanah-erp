import { Badge } from "../../../../components/ui/badge";

const statusItems = [
  { label: "معتمده", bgColor: "bg-[#07b6640f]", textColor: "text-[#07b664]" },
  {
    label: "غير معتمده",
    bgColor: "bg-[#ff00000f]",
    textColor: "text-[#ff0000]",
  },
  { label: "مدفوعة", bgColor: "bg-[#07b6640f]", textColor: "text-[#07b664]" },
  {
    label: "غير مدفوعة",
    bgColor: "bg-[#ff00000f]",
    textColor: "text-[#ff0000]",
  },
  {
    label: "قيد المراجعة",
    bgColor: "bg-[#edc5000f]",
    textColor: "text-[#ecc500]",
  },
  { label: "مصفاة", bgColor: "bg-[#07b6640f]", textColor: "text-[#07b664]" },
  {
    label: "غير مصفاة",
    bgColor: "bg-[#ff00000f]",
    textColor: "text-[#ff0000]",
  },
  {
    label: "مصفاه جزئيا",
    bgColor: "bg-[#edc5000f]",
    textColor: "text-[#ecc500]",
  },
];

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section className="flex gap-[75px] w-full">
      <div className="w-px bg-border flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          alt="Line"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-13.svg"
        />
      </div>

      <div className="flex flex-col gap-[15px] flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-normal [direction:rtl]">
          حالة العهدة
        </h3>

        <div className="flex flex-col gap-[15px]">
          {statusItems.map((item, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={`${item.bgColor} ${item.textColor} inline-flex items-center justify-center gap-1.5 p-1.5 rounded-lg w-fit [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-sm tracking-[0] leading-[15px] whitespace-nowrap [direction:rtl] hover:${item.bgColor} transition-colors`}
            >
              {item.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
