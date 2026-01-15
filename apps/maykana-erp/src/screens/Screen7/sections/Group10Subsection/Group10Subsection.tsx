export const Group10Subsection = (): JSX.Element => {
  const custodyNumbers = [
    { id: 1, number: "ADV-4592" },
    { id: 2, number: "ADV-8735" },
    { id: 3, number: "ADV-2387" },
    { id: 4, number: "ADV-9164" },
    { id: 5, number: "ADV-5829" },
    { id: 6, number: "ADV-1276" },
    { id: 7, number: "ADV-7931" },
    { id: 8, number: "ADV-3418" },
  ];

  return (
    <div className="relative w-[185px] opacity-0 animate-fade-in [--animation-delay:200ms]">
      <div className="flex justify-end pt-[15px] pb-[31px] pr-[14px]">
        <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-normal [direction:rtl]">
          رقم العهدة
        </h3>
      </div>

      <div className="flex flex-col gap-[9px] pr-[14px]">
        {custodyNumbers.map((item, _index) => (
          <div
            key={item.id}
            className="text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base tracking-[0] leading-normal h-[47px] flex items-start"
          >
            {item.number}
          </div>
        ))}
      </div>

      <div
        className="absolute top-0 left-0 w-px h-full bg-[length:1px_100%] bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://c.animaapp.com/mkd2vucjeF4nNd/img/line-13.svg')",
        }}
      />
    </div>
  );
};
