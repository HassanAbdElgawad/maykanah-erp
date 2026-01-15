import { Badge } from "../../../../components/ui/badge";

const statusItems = [
  {
    label: "معتمده",
    variant: "success",
    bgColor: "bg-[#07b6640f]",
    textColor: "text-[#07b664]",
  },
  {
    label: "غير معتمده",
    variant: "error",
    bgColor: "bg-[#ff00000f]",
    textColor: "text-[#ff0000]",
  },
  {
    label: "مدفوعة",
    variant: "success",
    bgColor: "bg-[#07b6640f]",
    textColor: "text-[#07b664]",
  },
  {
    label: "غير مدفوعة",
    variant: "error",
    bgColor: "bg-[#ff00000f]",
    textColor: "text-[#ff0000]",
  },
  {
    label: "قيد المراجعة",
    variant: "warning",
    bgColor: "bg-[#edc5000f]",
    textColor: "text-[#ecc500]",
  },
  {
    label: "مصفاة",
    variant: "success",
    bgColor: "bg-[#07b6640f]",
    textColor: "text-[#07b664]",
  },
  {
    label: "غير مصفاة",
    variant: "error",
    bgColor: "bg-[#ff00000f]",
    textColor: "text-[#ff0000]",
  },
  {
    label: "مصفاه جزئيا",
    variant: "warning",
    bgColor: "bg-[#edc5000f]",
    textColor: "text-[#ecc500]",
  },
];

export const Group8Subsection = (): JSX.Element => {
  return (
    <section className="flex gap-[75px] opacity-0 animate-fade-in [--animation-delay:200ms]">
      <div className="w-px h-full bg-border">
        <img
          className="w-full h-full object-cover"
          alt="Line"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-13.svg"
        />
      </div>

      <div className="flex flex-col gap-[54px] pt-[15px]">
        <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-normal [direction:rtl]">
          حالة العهدة
        </h3>

        <div className="flex flex-col gap-[54px]">
          {statusItems.map((status, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`${status.bgColor} ${status.textColor} inline-flex items-center justify-center gap-1.5 p-1.5 rounded-lg border-0 w-fit [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-sm tracking-[0] leading-[15px] whitespace-nowrap [direction:rtl] h-auto`}
            >
              {status.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
