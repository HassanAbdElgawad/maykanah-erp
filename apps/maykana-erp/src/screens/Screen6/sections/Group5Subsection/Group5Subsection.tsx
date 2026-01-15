export const Group5Subsection = (): JSX.Element => {
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
    <div className="flex flex-col w-full">
      <div className="text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-normal [direction:rtl] mb-[31px]">
        اخر تحديث
      </div>

      <div className="flex flex-col gap-[29px]">
        {dates.map((date, index) => (
          <div
            key={index}
            className="text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base tracking-[0] leading-normal"
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};
