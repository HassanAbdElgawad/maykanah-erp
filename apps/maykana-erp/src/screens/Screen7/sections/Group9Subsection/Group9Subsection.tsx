export const Group9Subsection = (): JSX.Element => {
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
    <section className="relative w-full">
      <div className="flex flex-col">
        <header className="flex justify-end mb-[15px]">
          <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-normal [direction:rtl]">
            تاريخ الطلب
          </h3>
        </header>

        <div className="flex flex-col gap-[9px]">
          {dates.map((date, index) => (
            <div
              key={`date-${index}`}
              className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right tracking-[0] leading-normal"
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      <img
        className="absolute top-0 left-0 w-px h-full object-cover"
        alt="Line"
        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-13.svg"
      />
    </section>
  );
};
