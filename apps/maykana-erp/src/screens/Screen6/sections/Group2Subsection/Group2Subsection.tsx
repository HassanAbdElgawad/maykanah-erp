export const Group2Subsection = (): JSX.Element => {
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
    <div className="relative w-full h-full">
      <div className="flex flex-col">
        <div className="flex justify-end px-4 py-3">
          <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
            رقم العهدة
          </h3>
        </div>

        <div className="flex flex-col">
          {custodyNumbers.map((item) => (
            <div
              key={item.id}
              className="flex justify-end px-4 py-3 min-h-[53px] items-center"
            >
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right">
                {item.number}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-px h-full bg-border" />
    </div>
  );
};
