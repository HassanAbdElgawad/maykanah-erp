export const Group13Subsection = (): JSX.Element => {
  const dates = [
    { date: "2024-07-03", spacing: "mt-[31px]" },
    { date: "2024-07-10", spacing: "mt-[29px]" },
    { date: "2024-07-17", spacing: "mt-8" },
    { date: "2024-07-24", spacing: "mt-7" },
    { date: "2024-07-31", spacing: "mt-[31px]" },
    { date: "2024-08-07", spacing: "mt-7" },
    { date: "2024-08-14", spacing: "mt-[30px]" },
    { date: "2024-08-21", spacing: "mt-[29px]" },
  ];

  return (
    <section className="w-[108px] flex flex-col">
      <header className="ml-[22px] w-[68px] h-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-[normal] [direction:rtl]">
        اخر تحديث
      </header>

      {dates.map((item, index) => (
        <div
          key={`date-${index}`}
          className={`w-[90px] h-6 ${item.spacing} [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right tracking-[0] leading-[normal]`}
        >
          {item.date}
        </div>
      ))}
    </section>
  );
};
