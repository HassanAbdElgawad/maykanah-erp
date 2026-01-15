export const Group1Subsection = (): JSX.Element => {
  const dates = [
    "2024-07-03",
    "2024-07-10",
    "2024-07-17",
    "2024-07-24",
    "2024-07-31",
    "2024-08-07",
    "2024-08-14",
    "2024-08-21",
  ];

  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <div className="flex justify-end px-4 py-3">
          <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-normal [direction:rtl]">
            تاريخ الطلب
          </div>
        </div>

        {dates.map((date, index) => (
          <div key={index} className="flex justify-end px-4 py-3">
            <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right tracking-[0] leading-normal">
              {date}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-px h-full bg-border" />
    </div>
  );
};
